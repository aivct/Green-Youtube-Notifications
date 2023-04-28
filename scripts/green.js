/*
	Inspired by this talk by Max Stossel titled <<Teens, We've Been Sneaking Into Your Brains>> 
	https://www.youtube.com/watch?v=oYso5TwwY3A
 */

// grey also works: #D3EEDD
const GREEN_COLOUR_HEX = "#6B9797"; // trying to pick a relaxing color that fades into the background while still being readable

const TIMEOUT = 1000;
// infinite loop method, stupid but it works.
setTimeout(checkNotification, TIMEOUT)
function checkNotification()
{
	let notification = document.querySelector(".yt-spec-icon-badge-shape__badge");
	if(notification)
	{
		// end if notification found.
		changeNotificationColour(GREEN_COLOUR_HEX);
	}
	else 
	{
		setTimeout(checkNotification, TIMEOUT);
	}
}

function changeNotificationColour(colour)
{
	// stupidly brittle method, but eh, it works.
	let notification = document.querySelector(".yt-spec-icon-badge-shape__badge");
	// cuz sometimes it's null 
	if(notification) notification.style.background = colour;
}