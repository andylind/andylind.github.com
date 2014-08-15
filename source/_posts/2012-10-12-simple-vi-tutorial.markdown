---
layout: post
title: "Simple vi Tutorial"
date: 2012-10-12 14:27
comments: true
categories: [vi, code sample]
---

I spend most of my time programming in an IDE or in a text editor like notepad++ or gedit. When I ssh into a machine though, it is usually most convenient to use a command window for text editing. Understanding the most basic vi commands can be really helpful when you need to edit text from the terminal.

The first step for me to learn vi was to understand just a few basic commands so that I would have enough knowledge to edit files. Below is a minimal set of commands that you can use to operate vi. 

The key concept you have to learn is that vi has two modes. Insert mode and command mode. When vi is opened, it will start in command mode by default. This mode allows you to do things like run complex editing commands, save the file, and exit. Pressing "i" will take you to inset mode. Insert mode allows you to edit text that is in the file. Pressing esc will return to command mode. 

It can be confusing at first to understand which mode you are in. If you want to be safe, you can always press "esc" and guarantee that you are in command mode.

{% codeblock lang:sh %}
# open vi
vi filename.txt

# switch to insert mode
i

# switch to command mode
esc

# save a file
:w

# exit vi
:q

# save and exit vi
:x
{% endcodeblock %}

