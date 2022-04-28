import { css } from "@emotion/native"
import { GenericContainerProps } from "./types"
import { sizeBorderRadius } from "@rap-theme"

export const styles = (props: GenericContainerProps<unknown>) =>
	css({
		
		backgroundColor: props.backgroundColor,
		borderRadius: props.rounded ? sizeBorderRadius : 0,
	})
