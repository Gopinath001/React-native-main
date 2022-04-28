import { css } from "@emotion/react"
import { GenericContainerPropsWithComponent } from "components/GenericContainer/types"
import { GenericContainer } from "../GenericContainer"
import { ImageProps } from "./types"

export function GenericImage(
	props: GenericContainerPropsWithComponent<ImageProps>,
) {
	const styles = css({
		borderRadius: props.rounded ? "50%" : "unset",
	})
	return <GenericContainer {...props} css={[props.css, styles, props.style]} />
}
