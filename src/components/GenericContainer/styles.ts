import { css } from "@emotion/react"
import { GenericContainerProps } from "./types"
import { sizeBorderRadius } from "@rap-theme"

export const styles = (props: GenericContainerProps<unknown>) =>
	css({
		padding: props.padding,
		backgroundColor: props.backgroundColor,
		borderRadius: props.rounded ? sizeBorderRadius : 0,
	})
