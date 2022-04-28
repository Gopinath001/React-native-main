import { App } from "components/App"
import { hydrate } from "react-dom"
import { AppContainer } from "react-hot-loader"
import { loadableReady } from "@loadable/component"

const targetElement = document.getElementById("app")
const initialRender = () => {
	if (process.env.NODE_ENV === "production") return <App />

	return (
		<AppContainer>
			<App />
		</AppContainer>
	)
}

loadableReady(() => {
	hydrate(initialRender(), targetElement)
})

if (process.env.NODE_ENV !== "production") {
	if ((module as any).hot) {
		;(module as any).hot.accept()
	}
}
