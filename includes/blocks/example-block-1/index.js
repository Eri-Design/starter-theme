/**
 * Example-block-1
 * Custom title block -- feel free to delete
 */

const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { TextControl } = wp.components;

/**
 * Register block
 */
export default registerBlockType('eri-scaffold/example-block', {
	title: __('My first block', 'eri-scaffold'),
	description: __('My first block description', 'eri-scaffold'),
	icon: 'smiley',
	category: 'eri-scaffold-blocks',
	keywords: [__('example', 'eri-scaffold')],
	attributes: {
		customTitle: {
			type: 'string',
		},
	},
	/**
	 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
	 */
	edit: props => {
		const {
			attributes: { customTitle },
			className,
			setAttributes,
			isSelected,
		} = props;

		if (isSelected) {
			return (
				<div className={className}>
					<TextControl
						id="example-block-text-field"
						label={__('Custom Title', 'eri-scaffold')}
						value={customTitle}
						onChange={customTitle => setAttributes({ customTitle })}
					/>
				</div>
			);
		} else {
			return <h2 class="example-block-title">{customTitle}</h2>;
		}
	},
	/**
	 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#save
	 */
	save: props => {
		const { customTitle } = props.attributes;

		return <h2 class="example-block-title">{customTitle}</h2>;
	},
});
