Scrapper System for Lusha
==================================

This is a assignment for Lusha.
its a Node.js server that listen to '/parse' HTTP POST method.


Getting Started
---------------

```sh
# clone it
git clone git@github.com:developit/express-es6-rest-api.git
cd express-es6-rest-api


# Install dependencies
npm install

# Start development live-reload server
PORT=8080 npm run dev

Please check config.json - mongoDB url , port of server need to be set there. (right now there a default values).

# Start production server:
PORT=8080 npm start
```

Assumptions
-------
- URL`s that already saved in DB, wont gonna parsed again.
 that assummption mean that the html will stay the same.
 if the html that coming back from Parser is dynamic,
 there is two options:
 1. save in db another colum: updatedAt, and when checking is exist url, if exist: check updatedAt>  PERIOD_TIME that set ahead.
 2. using in-memmory like Redis(with period of time that its saves), instead of checking at DB that takes alot of time & money. (better solution than what developed)

What missing:
- all kinds of tests. Im sorry guys it`s my first NodeJs project.  i didnt have enough time for learn & implements tests. 90% of that weekend time was how to run a nodeJs project.
for sure the most critical part of my code is the recursive function, that need to make sure its works probally - its it, but tests make it feel much safer.


License
-------
Genereted from builerplate (https://github.com/developit/express-es6-rest-api).

