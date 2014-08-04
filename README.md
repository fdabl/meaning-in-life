# Meaning in Life App

This is a simple questionnaire app for android, implemented using JQuery Mobile, Backbone, Browserify, Node and MySQL.
The participant is asked to fill out the 10-item Meaning in Life questionnaire (Steger, Frazier & Oishi, 2006). For fun,
the dependent variable is the theme of the app (either white or black).

## Client

For [cordova](https://cordova.apache.org/) to package your web app into an android app, copy the
contents of the /client folder into your /www folder. Move the package.json file two directories
up, and the index.html and gulpfile.js one directory up:

```
hooks/
platforms/
plugins/
www/
  --- client/
  --- index.html
  --- gulpfile.js
node_modules/
package.json
```

## Server

Run the remote server anywhere, but keep in mind that the endpoint that the client talks to must
fit (see model/Participant.js)
