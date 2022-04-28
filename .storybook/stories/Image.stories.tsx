import React from "react"
import { Story, Meta } from "@storybook/react"
import { ImageProps } from "components/Image/types"
import { Image as ImageComp } from "components/Image"
import {
	MarginArgTypes,
	PaddingArgTypes,
	StyleVariantBools,
} from "./story-utils"

export default {
	title: "Containers/Image",
	component: ImageComp,
} as Meta

const Template: Story<ImageProps> = (args) => <ImageComp {...args} />
export const Image = Template.bind({})
Image.args = {
	src: "https://source.unsplash.com/random",
	alt: "A random picture from Unsplash to demo the image component!",
	width: 150,
	circular: false,
	forceSquare: false,
}
