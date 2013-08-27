---
layout: post
title: "Git Stash Workflow"
date: 2013-02-18 20:14
comments: true
categories: [Git, code sample, dev tools] 
---

I often find that while I am coding I need to have more than one stream of work going on. One scenario that often occurs is that I am working on a feature and then a bug report comes in that needs to be fixed right away. If the change becomes large, I will create a local branch for the bug fix, but most of the time I just want to save my unfinished feature changes somewhere while I quickly fix the bug. 

[Git stash](http://git-scm.com/book/en/Git-Tools-Stashing) allows me to save my current workspace without having to commit unfinished work. The stash command takes all uncommitted changes in the workspace and saves them on a stack so that you can change branches or pull in commits. This is a great way to save a set of changes that you are not quite finished with so that you can switch to working on something else. The changes can be saved with a description so that you can see what you saved later.

Simple git stash workflow that I use most of the time:
{% codeblock lang:sh %}
# save changes in the workspace to the stash
git stash save 'some name for what is saved'

# do some work 
# then decide to go back to what is in the stash

# apply the top stash’s changes to the workspace
git stash pop
{% endcodeblock %}

When I need to know more about what is in the stash:
{% codeblock lang:sh %}
# check to see what stashes exist
git stash list

# see what files are changed in the top stash
git stash show

# clear all items from the stash
git stash clear
{% endcodeblock %}
