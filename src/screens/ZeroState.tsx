import { Box } from "components/Box"
import { Text } from "components/Text"

type Props = {
	cta: JSX.Element
}

export default function ZeroState({ cta }: Props): JSX.Element {
	return (
		<Box grid>
			<Text>There&apos;s nothing here!</Text>
			{cta}
		</Box>
	)
}
