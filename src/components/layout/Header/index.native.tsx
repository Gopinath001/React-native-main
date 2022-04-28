import { View } from "react-native"
import { GenericHeader } from "./GenericHeader"
import { GenericHeaderProps } from "./types"

export function Header(props: GenericHeaderProps) {
	return <GenericHeader {...props} withComponent={View} />
}
