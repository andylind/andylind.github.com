---
layout: post
title: "My Current Git Workflow"
date: 2014-04-12 12:21
comments: true
categories: git
---

The flexibility of git is one of the main reasons that git is such a powerful tool. That flexibility also makes it difficult to pick a development workflow. With so many options for how to do any task, it is tough to know where to start.

Below are some recommendations from my experience using git on Windows over the last few years. In each case, there are many different options that you could choose. Not all of these ideas will work for everyone. 


##Git Tools
In the last year, I moved from using the command line only for git on Windows to integrating [SourceTree](https://www.atlassian.com/software/sourcetree/overview) into my daily workflow. I still use the command line for complex commands such as interactive rebasing, but I am finding that I go to the command line much less often now.

SourceTree is an excellent user interface for git. Of all the git UIs I have used, it currently seems to be the most polished. The last few updates to SourceTree have moved it to support a number of the features that it was missing a few months ago. SourceTree is not perfect though. The application has frozen on me a few times, but a restart of the application always fixed the issue.


{% img /images/logoSourceTree.png %}


In addition to SourceTree, I am using the VisualStudio git plugin and the IntelliJ git plugin. Both make it easy to see the git status context right inside of the IDE. I find that I mostly use the IDE plugins for viewing the status of file and checking history. I usually run most of the other git commands from SourceTree. 

##Basic Principals
These are basic principals that I follow whenever I am using git.<br>
&nbsp;&nbsp;&nbsp; - Do all work on local branches<br>
&nbsp;&nbsp;&nbsp; - Always keep the master branch clean to use for pulling from remotes<br>
&nbsp;&nbsp;&nbsp; - Use [50/72 formatting](http://stackoverflow.com/questions/2290016/git-commit-messages-50-72-formatting) for commit messages<br> 
&nbsp;&nbsp;&nbsp; - Commit changes often<br> 
&nbsp;&nbsp;&nbsp; - Rebase changes that are not shared remotely<br>
&nbsp;&nbsp;&nbsp; - Merge changes that have been shared remotely<br>


##Working on New Features
This is the default workflow that I use when working on new features that will take me more than a few hours to complete. I do not use this workflow for every change that I make. If a change is really simple, I might just make it on master. 

####Making changes:
&nbsp;&nbsp;&nbsp; - Make sure the working directory is clean<br>
&nbsp;&nbsp;&nbsp; - Pull the latest version of the code from master<br>
&nbsp;&nbsp;&nbsp; - Create and switch to a new branch named "work" (or "name-of-feature")<br>
&nbsp;&nbsp;&nbsp; - Make changes on the work branch<br>
&nbsp;&nbsp;&nbsp; - Commit changes often

####Sharing changes:
&nbsp;&nbsp;&nbsp; - [Interactive rebase](/blog/2013/04/18/combining-multiple-git-commits/) complex changes into a single commit if needed<br>
&nbsp;&nbsp;&nbsp; - Switch to master and pull changes<br>
&nbsp;&nbsp;&nbsp; - Switch to the work branch<br>
&nbsp;&nbsp;&nbsp; - Rebase the work branch to master and resolve any conflicts<br>
&nbsp;&nbsp;&nbsp; - Run tests to make sure the changes are ready to push<br>
&nbsp;&nbsp;&nbsp; - Switch to master and rebase to the work branch (Should be no changes)<br>
&nbsp;&nbsp;&nbsp; - Push commits<br>

**Summary:** Use a local branch to make changes, then rebase back to master.

**Note:** I use a generic local branch named "work" when I do not have a name for the feature I am working on.
 
This workflow is how I have been using git for the last few years. The overall goal is to make sure all work is independently captured in source control and to make it easy to switch between working on different features and bugs as needed.

These recommendations are for how to work with git on a medium sized team of developers. For code bases where I am the only developer, I use a more relaxed workflow and do not worry as much about local branches. For code bases with dozens or more developers, I would use a more strict process.
