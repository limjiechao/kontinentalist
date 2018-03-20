# Kontinentalist Technical Test

##  Perform an API call to the API below

https://market.mashape.com/andruxnet/random-famous-quotes

## Task

Create a select option to choose between the categories which will then generate a random quote.

# Development Log

20/03/2018

- Created Git repository and added Git remote origin
- Created following files
  - `./.gitignore`
  - `./package.json`
  - `./README.md`
  - `./app.js`
  - `./controller.js`
  - `./routes.js`
  - `./views/layouts/main.handlebars`
  - `./views/home.handlebars`
- Installed following packages
  - `express`
  - `body-parser`
  - `path`
  - `nodemon`
  - `express-handlebars`
  - `unirest`
- Created `/` route with `get` and `post`
- Created dropdown list to select quote category and submit button
- Wrote API `get` request through `unirest`
- Created template to display retrieved quote
- Added `if-else` statement on status code of API call so that error message will also be rendered as if it were a quote


# Shell Command Reference

```
git init
git remote add origin https://github.com/limjiechao/kontinentalist.git
git add .
git commit -am "added .gitignore"
git push -u origin master
npm init
npm i express --save
npm i path --save
npm i body-parser --save
npm i nodemon --save
npm i unirest --save
npm i express-handlebars --save
```

# Resources

- https://docs.rapidapi.com/docs/unirest
- http://unirest.io/nodejs.html
