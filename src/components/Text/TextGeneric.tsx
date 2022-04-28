import { GenericContainerPropsWithComponent } from "components/GenericContainer/types"
import { GenericContainer } from "../GenericContainer"
import { TextProps } from "./types"


export function TextGeneric<T>(
	props: GenericContainerPropsWithComponent<TextProps & T>,
): JSX.Element {
	return (
		<GenericContainer<TextProps> {...props} css={[props.css, props.style]} />
	)
}
