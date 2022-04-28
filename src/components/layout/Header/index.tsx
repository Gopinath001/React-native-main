import { GenericContainerProps } from "../../GenericContainer/types"
import { GenericHeader } from "./GenericHeader"
import { GenericHeaderProps } from "./types"

function HeaderComp({
	className,
	children,
}: GenericContainerProps<GenericHeaderProps>) {
	return <header className={className}>{children}</header>
}

export function Header(props: GenericHeaderProps) {
	return <GenericHeader {...props} withComponent={HeaderComp} />
}
