# profile-site
![image](src/img/showcase.png)
[![GitHub repository](https://img.shields.io/badge/GitHub-chi--0828%2Fprofile--site-blue.svg)](https://github.com/chi-0828/profile-site)
![GitHub top language](https://img.shields.io/github/languages/top/chi-0828/profile-site?color=blue&logo=Ionic&logoColor=white)
![GitHub stars](https://img.shields.io/github/stars/chi-0828/profile-site?color=success&logo=github)
![GitHub commit activity (branch)](https://img.shields.io/github/commit-activity/w/chi-0828/profile-site)
![GitHub last commit (by committer)](https://img.shields.io/github/last-commit/chi-0828/profile-site)
[![MIT License](https://img.shields.io/npm/l/express.svg?maxAge=2592000)](LICENSE)
<br>
[![npm version](https://img.shields.io/badge/npm-9.5.1-yellow)](https://docs.npmjs.com/)
[![node version](https://img.shields.io/badge/node-18.16.1-yellow)](https://nodejs.org/en)
<br>
profile-site is a template of MacOS terminal-style personal profile website

- star :star: this project if you enjoy this template

## [Update log](#update)
## [Try it out](#usage)

## Demo 
> #### Demo website link
> [see the demo website](https://chi-0828.github.io/profile-site/)

## Demo screenshot
#### Some demo images
ASCII art can be generated on an online tool, e.g., [patorjk](https://patorjk.com/software/taag/#p=display&f=Graffiti&t=Type%20Something%20)
![image](src/img/demo.png)
![image](src/img/demo2.png)

## Usage
download the source
``` shell
git clone https://github.com/chi-0828/profile-site.git
```
run npm
``` shell
cd profile-site
npm install
npm run start
```
customize your website <br>
modify the title of `public/index.html`, change `User` to your name
``` html
<head>
    <meta charset="UTF-8">
    <!-- some codes -->
    <title>User</title>
    <!-- Put your name here -->
    <!-- some codes -->
</head>
```
`src/img/me5.png` is your personal image, `src/customization/*.json` is your personal information
``` shell
cd src/customization
# change the introduction in *.json to your own information
# change the images in img/* to your own photo and your school/company logo
```
example-1: customize `Experience.json`
``` json
{
    "companies" : [
        {
            "logo" : "path related to src",
            "name" : "your company name",
            "position_time" : "your job title, when",
            "description" : "what you do"
        },
        {
            "logo" : "./img/patere-removebg-preview.png",
            "name" : "XXXX Co.",
            "position_time" : "Software Engineering Intern, Aug. 2021 - Jun. 2022",
            "description" : "Computer vision and deep learning project, e.g., implementing an object detection application for patient assistance"
        }
    ]
}
```
example-2: customize `Introduction.json`
``` json
{
    "intro" : "write your portfolio here",
    "github" : "your GitHub",
    "googlescholar" : "your google scholar (or your Gmail)",
    "linkedin" : "your LinkedIn",
    "orcid" : "your orcid (or any other social account, e.g., FB, IG)"
}
```
if you don't have npm on your PC, I recommend you download it or use the HTML version (the HTML version is no longer maintained)
``` shell
git clone --branch html https://github.com/chi-0828/profile-site.git
```
if you want to deploy the site on your GitHub page
``` shell
git clone https://github.com/chi-0828/profile-site.git
cd profile-site
vim package.json
```
configure `package.json`
``` json
{
    "//": "name is your project name",
    "name": "profile-site",
    "version": "0.1.0",
    "//": "change 'your-account' to your GitHub account and 'profile-site' to repository",
    "homepage": "https://your-account.github.io/profile-site",
    "..." : "..."
}
```
``` shell
npm run deploy
```
There will be a new branch `gh-pages` on your repository; you can host the branch to be the GitHub page in `setting` <br>
[see the tutorial](https://github.com/gitname/react-gh-pages)

# Update
### 2323/06/28 | Add new tab "Project
customize `Project.json` to show your projects
![image](src/img/demo3.png)

## TODO
The project is under-going
- add the animation of terminal-style text printing
- ~~add a new tab for "Project"~~
- ~~change the source code to React project (done)~~
