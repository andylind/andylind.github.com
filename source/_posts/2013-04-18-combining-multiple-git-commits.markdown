---
layout: post
title: "Combining Multiple Git Commits"
date: 2013-04-18 18:35
comments: true
categories: [git, code sample, dev tools] 
---

Using Git, it is possible to combine multiple commits into a single commit with interactive rebasing.

The first step is to select the commits that you want to combine. Here is an example of selecting the last 3 commits:

{% codeblock lang:sh %}
git rebase -i HEAD~3
{% endcodeblock %}

This will open your text editor and display:

{% codeblock lang:sh %}
pick e520ab4 example commit message
pick 937b3bb another example commit message
pick 2ab71fc and another example commit message 

# Rebase e520ab4 ..2ab71fc onto 19ac48b
#
# Commands:c
#  p, pick = use commit
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
{% endcodeblock %}

Changing all of the items below the top one to "squash" will combine the commits:

{% codeblock lang:sh %}
pick e520ab4 example commit message
squash 937b3bb another example commit message
squash 2ab71fc and another example commit message 

# Rebase e520ab4 ..2ab71fc onto 19ac48b
#
# Commands:
#  p, pick = use commit
#  e, edit = use commit, but stop for amending
#  s, squash = use commit, but meld into previous commit
{% endcodeblock %}

After you save and close that text editor, another text editor will open. This will allow you to re-write the commit message:

{% codeblock lang:sh %}
# This is a combination of 3 commits.
# The first commit's message is:
example commit message

# This is the 2nd commit message:
another example commit message

# This is the 3rd commit message:
and another example commit message 
{% endcodeblock %}

Write your new commit message, save, and close. Your three commits are now combined into one single commit.

