import { SerializedStyles } from "@emotion/react"
import { PropsWithChildren } from "react"

export function Fieldset({
	children,
	...props
}: PropsWithChildren<{
	role: string
	"aria-desribedby"?: string
	css?: SerializedStyles | SerializedStyles[]
}>) {
	return <fieldset {...props}>{children}</fieldset>
}
