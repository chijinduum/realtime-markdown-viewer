# Realtime Markdown Viewer

This is an website that allows the user to view raw markdown on the leftside and the rendered HTML markup on the rightside. 
It will allow people to work on the same markdown simultaneously via a shared URL.

## How does it work?
You can type anything after the slash in "https://git.heroku.com/damp-sea-10190.git" and just start typing. (I didn't change the name of the random URL Heroku gave me)
The URL is down at the moment but I will look to change this later. 


The website was built using the following:

- Node.js - Framework for the website
- Showdown - To convert the markdown text to HTML
- ShareJS - To allow realtime editing of the textbox
- Redis - Database to store markdown documents
- Twitter Bootstrap - aesthetics.


Credit to "https://github.com/sifxtreme", whose work I referenced for building this website.
