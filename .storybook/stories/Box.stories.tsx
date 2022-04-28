import { Story, Meta } from "@storybook/react"
import { Box as BoxComp } from "components/Box"
import { BoxProps } from "components/Box/types"
import { Text } from "components/Text"
import {
	MarginArgTypes,
	PaddingArgTypes,
	StyleVariantBools,
} from "./story-utils"

export default {
	title: "Containers/Box",
	component: BoxComp,
	argTypes: {
		...StyleVariantBools,
		...PaddingArgTypes,
		...MarginArgTypes,
	},
} as Meta

const Template: Story<BoxProps> = (args) => (
	<BoxComp {...args}>
		<Text variant={"h1"}>I am a Header, on a page.</Text>
		<Text>
			This is a paragraph of text in a box on a screen, on a computer, in a
			building, on a planet, in a solar system, in a galaxy, in a universe, in a
			cosmos
		</Text>
	</BoxComp>
)
export const Box = Template.bind({})
Box.args = {}
