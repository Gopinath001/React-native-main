import React from "react"
import { Story, Meta } from "@storybook/react"
import type { TextProps } from "components/Text/types"
import { Text as TextComp } from "components/Text"
import {
	MarginArgTypes,
	PaddingArgTypes,
	StyleVariantBools,
} from "./story-utils"

export default {
	title: "Containers/Text",
	component: TextComp,
	argTypes: {
		...StyleVariantBools,
		...PaddingArgTypes,
		...MarginArgTypes,
	},
} as Meta

const Template: Story<TextProps> = (args) => (
	<TextComp {...args}>
		WALK YOUR WAY TO A MORE ACTIVE LIFESTYLE WITH OUR VIRTUAL RACE CHALLENGES.
	</TextComp>
)
export const Text = Template.bind({})
Text.args = {
	variant: "paragraph",
}
