# Green Youtube Notifications
Extension that makes youtube notifications green.

Inspired by this talk by Max Stossel titled <<Teens, We've Been Sneaking Into Your Brains>> 
	https://www.youtube.com/watch?v=oYso5TwwY3A

## How does it work?
Works by setting CSS after page has loaded, but this runs into some problems with it being red for an uncomfortable amount of time and is not as robust as I'd like, especially if the notifications is loaded long after the page is loaded.

Ideally, it'd intercept the notification call directly and override it right after the element `.yt-spec-icon-badge-shape__badge` is created, but I'm too lazy right now.

Todo:
- Color picker for notifications
- Intercepting calls directly
