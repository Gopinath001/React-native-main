import { SerializedStyles } from "@emotion/react"
import { Box } from "components/Box"
import { PropsWithChildren } from "react"

export function Fieldset({
	children,
	...props
}: PropsWithChildren<{
	role: string
	"aria-desribedby": string
	css?: SerializedStyles
}>) {
	return <Box {...props}>{children}</Box>
}
