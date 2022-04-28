import { Box } from "components/Box"
import { ChevronButton } from "components/Buttons/Chevron"
import { useEffect } from "react"
import { useState } from "react"
import { chevronStyles, containerStyles } from "./styles"
import { colorBrandPrimary } from "@rap-theme"
import { ChevronButtonDirection } from "components/Buttons/Chevron/types"

export type AccordionContentContentProps = {
	month: string
	name: JSX.Element
	contents: JSX.Element
	open?: boolean
}

type AccordionContentProps = {
	content: AccordionContentContentProps[]
	multiple?: boolean
	onChange?: (contentState: AccordionContentContentProps, index: number) => void
}

export function AccordionContent({ content, onChange }: AccordionContentProps) {
	const [contentState, setContentState] =
		useState<AccordionContentContentProps[]>(content)

	useEffect(() => {
		if (content?.length && !content.some(({ open }) => open))
			content[0].open = true
		setContentState(content)
	}, [content])

	return (
		<Box grid column>
			{content.map((tab, i) => {
				const toggleIndex = () => {
					contentState[i].open = !contentState[i].open
					setContentState(contentState)

					onChange && onChange(contentState[i], i)
				}

				const contents = tab.open ? (
					<Box grid column small={10}>
						{tab.contents}
					</Box>
				) : null

				return (
					<Box grid column key={tab.month + i}>
						<Box grid row nowrap css={containerStyles}>
							<Box
								grid
								css={{
									flexDirection: "row",
									alignContent: "center",
								}}
							>
								{tab.name}
							</Box>
							<Box
								css={{
									display: "flex",
									flexDirection: "row",
									alignContent: "center",
									justifyContent: "flex-end",
								}}
							>
								<ChevronButton
									fill={colorBrandPrimary}
									css={chevronStyles}
									direction={
										tab.open
											? ChevronButtonDirection.DOWN
											: ChevronButtonDirection.RIGHT
									}
									onPress={toggleIndex}
								/>
							</Box>
						</Box>
						{contents}
					</Box>
				)
			})}
		</Box>
	)
}
