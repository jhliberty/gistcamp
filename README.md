# GistCamp #
#### [GistCamp](http://gistcamp.com) is an web app that helps organize and share your gists.

![GistCamp](https://dl.dropboxusercontent.com/u/51695292/gistcamp1.PNG)

## Features
* GistCamp is an web interface for GitHub's Gist service, but more focuses on sharing your gists with your followings/followers of your GitHub account or any GitHubers.
* You can organize your gists by tagging and starring.
* You can find your followings and followers' gists. 
* You can share the gists on Facebook, Twitter, Google+ and LinkedIn.
* You can archive the gists on Evernote and Pocket.
* If commenting on other gists is not enough, you can chat with other geeks.
* You will get notification instantly once other geeks comment on your gist or send chat messages to you.
* You can move to the specific menu using shortcut keys like Gmail does.
* As you see here, all the source code of GistCamp is open-sourced. Please help us make the GistCamp more robust and richer by forking this repository.

## How to run GistCamp on your local machine
Prerequistes
* [Node.js](http://nodejs.org)
* [Bower](http://bower.io)
* [Grunt](http://gruntjs.com)
* [MongoDB](http://www.mongodb.org)
* [Application ID and Secret](http://developer.github.com/guides/basics-of-authentication/#registering-your-app)
 - Get your application ID and Secret from GitHub Account Settings page, then replace ID/Secret values in infra/config-dev.js with yours.

In CLI:
```bash
mongod    /* Specify the path for your db path if you need */
npm install
bower install
bower install jquery-nicescroll
bower install autogrow-textarea
grunt
node server
```

Then open `http://localhost:3000` in your browser.

##### **If you do not want to install gistcamp on your machine, just come to [gistcamp.com](http://gistcamp.com)**

## License

Released under the MIT license.

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



