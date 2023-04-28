/*
	Inspired by this talk by Max Stossel titled <<Teens, We've Been Sneaking Into Your Brains>> 
	https://www.youtube.com/watch?v=oYso5TwwY3A
 */

// grey also works: #D3EEDD
const GREEN_COLOUR_HEX = "#6B9797"; // trying to pick a relaxing color that fades into the background while still being readable

function injectCSS(rules)
{
	let style = document.createElement("style");
	style.innerHTML = rules;
	document.head.appendChild(style);
}

// wait no I'm an idiot I can just override CSS.
let overrideCSS = `
.yt-spec-icon-badge-shape--type-notification .yt-spec-icon-badge-shape__badge
{
	background-color: ${GREEN_COLOUR_HEX};
}

`

injectCSS(overrideCSS);