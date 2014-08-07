# Meaning in Life App

This is a simple questionnaire app for android, implemented using JQuery Mobile, Backbone, Browserify, Node and MySQL.
The participant is asked to fill out the 10-item Meaning in Life questionnaire (Steger, Frazier & Oishi, 2006). For fun,
the dependent variable is the theme of the app (either white or black).

## Client

For [cordova](https://cordova.apache.org/) to package your web app into an android app, copy the
contents of the /client folder into your /www folder. Move package.json and gulpfile.js two directories,
and index.html one directory up:

```
hooks/
platforms/
plugins/
www/
  --- client/
  --- index.html
node_modules/
gulpfile.js
package.json
```

Plugins used are [device](https://github.com/apache/cordova-plugin-device) and [geolocation](https://github.com/apache/cordova-plugin-geolocation).

## Server

Run the remote server anywhere, but keep in mind that the endpoint that the client talks to must
fit (see model/Participant.js)
