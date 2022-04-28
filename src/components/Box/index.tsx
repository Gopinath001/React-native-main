import { PropsWithChildren } from "react"
import { BoxGeneric } from "./BoxGeneric"
import { BoxProps } from "./types"
import { GenericContainerProps } from "../GenericContainer/types"
import { styles } from "./styles"

const Div = (
	props: PropsWithChildren<
		React.DetailedHTMLProps<
			React.HTMLAttributes<HTMLDivElement>,
			HTMLDivElement
		>
	>,
): JSX.Element => <div {...props} />

export const Box = (props: GenericContainerProps<BoxProps>) => {
	return (
		<BoxGeneric<BoxProps>
			{...props}
			css={[styles(props), props.css]}
			withComponent={Div}
		/>
	)
}
