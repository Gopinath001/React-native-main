import { Box } from "components/Box"
import { Button } from "components/Buttons"
import { RemoveRoundedIcon } from "icons/RemoveRounded"
import { colorBorders } from "@rap-theme"
import { css } from "@emotion/react"

type EvidenceCarouselProps = {
	options: { id: string; contentUrl: string }[]
	onPress?: () => void
	onRemove?: (id: string) => void
}

export function EvidenceCarousel({
	options,
	onPress,
	onRemove,
}: EvidenceCarouselProps) {
	const containerStyles = css({
		
		paddingTop: 8,
		paddingBottom: 8,
		
	})

	const imageStyles = css({
		position: "relative",
		// display: "inline-block",
		width: 80,
		height: 80,
		
	})

	const buttonStyles = css({
		position: "absolute",
		bottom: 0,
		right: 0,
		height: 16,
		width: 16,
		
		borderRadius: 8,
		
	})

	return (
		<Box marginV={12} css={containerStyles}>
			{options.map((file, i) => (
				<Box
					key={file.id + "-" + i}
					css={[imageStyles, { backgroundImage: `url("${file.contentUrl}")` }]}
					onPress={onPress}
				>
					{onRemove ? (
						<Button css={buttonStyles} onPress={() => onRemove(file.id)}>
							<RemoveRoundedIcon css={{ color: colorBorders }} />
						</Button>
					) : null}
				</Box>
			))}
		</Box>
	)
}
