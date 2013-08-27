---
layout: post
title: "Viewing Jenkins Status from the Command Line via the Jenkins API"
date: 2013-03-06 21:57
comments: true
categories: [jenkins, python, code sample, rest api]
---

This is a python script that I created to print out the status of a set of Jenkins jobs in color on the command line. Right now the coloring for this script works on windows only.

github gist: [build_status.py](https://gist.github.com/andylind/5057436)
{% codeblock lang:py %}
def set_text_color(color):
    #This method works on windows only
    color_codes = {"BLUE" : 0x0001, "GREEN" : 0x0002, "RED" : 0x0004, "MAGENTA" : 0x0005, "YELLOW" : 0x0006, "GRAY" : 0x0007}
    STD_OUTPUT_HANDLE = -11
    from ctypes import windll, Structure, c_short, c_ushort, byref
    stdout_handle = windll.kernel32.GetStdHandle(STD_OUTPUT_HANDLE)
    SetConsoleTextAttribute = windll.kernel32.SetConsoleTextAttribute
    SetConsoleTextAttribute(stdout_handle, color_codes[color])

def print_build_status(jenkins_url):
    import json, urllib.request
    request = urllib.request.urlopen(jenkins_url)
    encoding = request.headers.get_content_charset()
    data = json.loads(request.read().decode(encoding))
    for job in data['jobs']:
        if 'anime' in job['color']:
             job['name']  = job['name'] + ' Running...'
        if 'blue' in job['color']:
            set_text_color("GREEN")
            print("+ " + job['name'])
        elif 'yellow' in job['color']:
            set_text_color("YELLOW")
            print("- " + job['name'])
        elif 'red' in job['color']:
            set_text_color("RED")
            print("- " + job['name'])
        elif 'aborted' in job['color']:
            set_text_color("GRAY")
            print("- " + job['name'])
        else:
            set_text_color("MAGENTA")
            print("- " + job['name'])
 
import sys
print_build_status(sys.argv[1])
{% endcodeblock %}

Here is an example showing the status of a set of jobs from the Jenkins public CI server:

"C:\Python33\python.exe" build_status.py  https://ci.jenkins-ci.org/view/Jenkins%20core/api/json
{% img /images/build-status-example.png %}


Normally I use this script with an alias so that I can just type something like "jobs" and see a list of the Jenkins jobs that I care about. You can replace "http://your-jenkins-url/api/json" with any Jenkins api resource that lists Jenkins Jobs. For example, I have two custom views, one for projects being built and one for test jobs that I am interested in. I use this script so that I can quickly see from the command line the status of those Jenkins jobs without switching context to a web browser.
