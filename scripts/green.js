/*
	Inspired by this talk by Max Stossel titled <<Teens, We've Been Sneaking Into Your Brains>> 
	https://www.youtube.com/watch?v=oYso5TwwY3A
 */

// grey also works: #D3EEDD
const GREEN_COLOUR_HEX = "#6B9797"; // trying to pick a relaxing color that fades into the background while still being readable

// stupidly brittle method, but eh, it works.
let notification = document.querySelector(".yt-spec-icon-badge-shape__badge");
// cuz sometimes it's null 
if(notification) notification.style.background = GREEN_COLOUR_HEX;