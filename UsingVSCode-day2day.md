#  Markdown VS code and Git day to day
## Problem
Whiele I can learn about Git and codeing it all seeps away due to lack of use.
## Idea
Write basic documents in Markdown on VScode manage versions and with Git and convert using pandoc into a Office friendly version.

## Getting started.
To open two scroll-locked windows in VScode for **markdown** and the _**results**_ use the shortcut:
`CTRL+K V`  note code has back-ticks around it
### Cheatsheet
[List of markdown syntax](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)

### [Pandoc](https://pandoc.org/index.html)
A usiveral converter so can be used on Windows and Linux
The purpose of this file is to start using Markdown and VScode 
### Code highlighting
```python
s = 'hello world!'
print(s)
```

#### Tables 
Are not supported very well
### Block Quotes
Each line need to be preceeded by '>'
>very handy in an email response!

### Line breaks
Single line break is a new line in 
the same paragraph

whereas a **Double** line break signifies a new paragraph

# Git
Create Save Edit Save again
Git allows the history to be saved and can go back to previous version

Who changed, why ad when even on the same file

## New Project
Create a project (folder and git files for it)   `git init myproject`

Move to project folder `cd myproject`

Create projct files (any type) 

notices the files in holding zone in the project folder `git add .`

Permanently records historical version / snap shot the files and and reason 'git commit -m"



### Patching
`git add - p <new file>`

### Reporting
`git log --grpah --decorrate --abbrev-commit --all --pretty=oneline`

# Quick Wins
Git focusses on **content** not files.
Staging - arranging/confirming which files should be added to the next commit

**Journal** not backup, detail of the changes

**local** merge and branch and most of the work is local, only push and pull are network centric.

# Starting Over
[Really easy guide to install git afresh](https://projects.raspberrypi.org/en/projects/getting-started-with-git/4
)

The [documentation on git-scm is quite good](https://git-scm.com/docs/giteveryday), but gets v detailed quickly

To grab a remote repo to store locally (and start working on it) `git clone <repo-link>`.  Note GitHub provides the repo-link under a big green button on the right of the repo screen

## Push & Pull
Having cloned a repo
- git pull - keeps the repo up to date with remote
- git push - sends local changes to the remote repo


