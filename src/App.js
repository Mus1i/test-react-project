import logo from "./logo.svg";
import "./App.css";
import { createElement } from "react";

function App() {
	const currentYear = new Date().getFullYear();

	const logoElement = createElement("img", {
		src: logo,
		className: "App-logo",
		alt: "logo",
	});

	const editParagraph = createElement(
		"p",
		null,
		"Edit ",
		createElement("code", null, "src/App.js"),
		" and save to reload."
	);

	const linkElement = createElement(
		"a",
		{
			className: "App-link",
			href: "https://reactjs.org",
			target: "_blank",
			rel: "noopener noreferrer",
		},
		"Learn React"
	);

	const yearHeader = createElement("h1", null, currentYear);

	const headerElement = createElement(
		"header",
		{ className: "App-header" },
		logoElement,
		editParagraph,
		linkElement,
		yearHeader
	);

	return createElement("div", { className: "App" }, headerElement);
}

export default App;
