---
layout: post
title: "Changing a Git Commit Message"
date: 2013-02-09 20:10
comments: true
categories: [Git, code sample, dev tools] 
---

If you accidentally write the wrong thing in a Git commit message or think of something you forgot to comment on, it is possible to re-write your git commit message. Just make sure you have not already pushed the commit to others, or it may cause problems.

This command will let you change the commit message of your last Git commit:
<pre>
git commit --amend -m "New commit message"
</pre>
