import { createRef } from "react"
import { styles } from "./styles"
import { GenericContainerPropsWithComponent } from "./types"


export function GenericContainer<T>(
	props: GenericContainerPropsWithComponent<T>,
): JSX.Element {
	const ref = createRef()
	const { withComponent, ...rest } = props
	const Component = withComponent

	
	const {
		backgroundColor,
		margin,
		marginH,
		marginV,
		padding,
		paddingH,
		paddingV,
		rounded,
		children,
		css: cssProp,
		...safeProps
	} = rest

	if (typeof children === "function") {
		return (
			<Component
				{...safeProps}
				css={[styles(props), props.css, props.style]}
				ref={ref}
			>
				{children(ref)}
			</Component>
		)
	}

	return (
		<Component {...safeProps} css={[styles(props), props.css, props.style]}>
			{children}
		</Component>
	)
}
