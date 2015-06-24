#[Famous][1]-Carousel-Example
> A seed project to get started with the famous engine with Browserify and using Gulp as a task manager

Example of the famous-carousel library [using ES6 branch][2].  

### Features
 - Browserify using watchify and babelify (ES6)
 - Multiple bundle support using the gulp/config:browserify:bundleConfigs
 - Uses Browser-Sync for serving up the dev

---

###Installation

```bash
git clone https://github.com/talves/famous-carousel-example
cd famous-carousel-example
# rm -rf .git && git init && git commit -m "Initial Commit" # optionally reset git history
npm i # install dependencies
```

---

###Development  
 Run the dev server with ```gulp``` or ```gulp dev```

 - Now the dev server should be running on localhost:3000

---  

###Production  
 Run the build for production with ```gulp production```

 - Builds everything into `public`
 - (optional) supports `famous deploy`

---  

###LICENSE

MIT

[1]: https://github.com/Famous/engine
[2]: https://github.com/talves/famous-carousel/tree/es6
