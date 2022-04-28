import { Box } from "components/Box"
import { Text } from "components/Text"

type Props = {
	error: Error
}

export default function ErrorReload({ error }: Props): JSX.Element {
	return (
		<Box grid>
			<Text>{error.message}</Text>
		</Box>
	)
}
