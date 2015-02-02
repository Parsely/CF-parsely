## Parse.ly - CloudFlare App

Giving CloudFlare site owners a way to add Parse.ly JavaScript tags to their
sites.


### Developing

Run `npm install` to install all required packages (Grunt, etc).


#### Building / deploying

1. Ensure versions are incremented in `package.json` and `cloudflare.json`.
2. Run `./deploy` which will create a JS distribution and push it to GitHub.
3. Ask CloudFlare to pull the new version via [their dashboard](https://www.cloudflare.com/app-signup)
