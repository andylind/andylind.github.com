document.write('<link rel="stylesheet" href="https://gist.github.com/stylesheets/gist/embed.css"/>')

document.write('<div id=\"gist-2655799\" class=\"gist\">\n    \n\n        <div class=\"gist-file\">\n          <div class=\"gist-data gist-syntax\">\n              <div class=\"gist-highlight\"><pre><div class=\'line\' id=\'LC1\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC2\'><span class=\"c\"># Setup<\/span><\/div><div class=\'line\' id=\'LC3\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC4\'><br/><\/div><div class=\'line\' id=\'LC5\'><span class=\"c\">#create local repo<\/span><\/div><div class=\'line\' id=\'LC6\'>git svn init -s http://url-of-repo<\/div><div class=\'line\' id=\'LC7\'>git svn fetch<\/div><div class=\'line\' id=\'LC8\'>git svn rebase<\/div><div class=\'line\' id=\'LC9\'><br/><\/div><div class=\'line\' id=\'LC10\'><br/><\/div><div class=\'line\' id=\'LC11\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC12\'><span class=\"c\"># Normal workflow<\/span><\/div><div class=\'line\' id=\'LC13\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC14\'><br/><\/div><div class=\'line\' id=\'LC15\'><span class=\"c\">#work on a local branch or branches<\/span><\/div><div class=\'line\' id=\'LC16\'>git checkout -b myfeature<\/div><div class=\'line\' id=\'LC17\'><br/><\/div><div class=\'line\' id=\'LC18\'><span class=\"c\">#make some changes and commit<\/span><\/div><div class=\'line\' id=\'LC19\'>git commit -a -m <span class=\"s2\">&quot;made some changes&quot;<\/span><\/div><div class=\'line\' id=\'LC20\'><br/><\/div><div class=\'line\' id=\'LC21\'><span class=\"c\">#switch to master and rebase changes <\/span><\/div><div class=\'line\' id=\'LC22\'>git checkout master<\/div><div class=\'line\' id=\'LC23\'>git rebase myfeature<\/div><div class=\'line\' id=\'LC24\'>git svn rebase<\/div><div class=\'line\' id=\'LC25\'><br/><\/div><div class=\'line\' id=\'LC26\'><span class=\"c\">#see changed files between local and svn trunk<\/span><\/div><div class=\'line\' id=\'LC27\'>git diff --name-only remotes/trunk<\/div><div class=\'line\' id=\'LC28\'><br/><\/div><div class=\'line\' id=\'LC29\'><span class=\"c\">#commit changes to svn<\/span><\/div><div class=\'line\' id=\'LC30\'>git svn dcommit<\/div><div class=\'line\' id=\'LC31\'><br/><\/div><div class=\'line\' id=\'LC32\'><br/><\/div><div class=\'line\' id=\'LC33\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC34\'><span class=\"c\"># Stash Changes<\/span><\/div><div class=\'line\' id=\'LC35\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC36\'><br/><\/div><div class=\'line\' id=\'LC37\'><span class=\"c\">#stash all changes<\/span><\/div><div class=\'line\' id=\'LC38\'>git stash<\/div><div class=\'line\' id=\'LC39\'><br/><\/div><div class=\'line\' id=\'LC40\'><span class=\"c\">#list all stashes<\/span><\/div><div class=\'line\' id=\'LC41\'>git stash list<\/div><div class=\'line\' id=\'LC42\'><br/><\/div><div class=\'line\' id=\'LC43\'><span class=\"c\">#get most recent stash off the stack<\/span><\/div><div class=\'line\' id=\'LC44\'>git stash pop<\/div><div class=\'line\' id=\'LC45\'><br/><\/div><div class=\'line\' id=\'LC46\'><br/><\/div><div class=\'line\' id=\'LC47\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC48\'><span class=\"c\"># Dealing with problems<\/span><\/div><div class=\'line\' id=\'LC49\'><span class=\"c\">##############################<\/span><\/div><div class=\'line\' id=\'LC50\'><br/><\/div><div class=\'line\' id=\'LC51\'><span class=\"c\">#see all changes between local and svn trunk<\/span><\/div><div class=\'line\' id=\'LC52\'>git diff remotes/trunk<\/div><div class=\'line\' id=\'LC53\'><br/><\/div><div class=\'line\' id=\'LC54\'><span class=\"c\">#reset to a specific revision<\/span><\/div><div class=\'line\' id=\'LC55\'>git reset --hard HEAD<\/div><div class=\'line\' id=\'LC56\'><br/><\/div><div class=\'line\' id=\'LC57\'><span class=\"c\">#delete a local branch<\/span><\/div><div class=\'line\' id=\'LC58\'>git branch -d mylocalbranch<\/div><div class=\'line\' id=\'LC59\'><br/><\/div><div class=\'line\' id=\'LC60\'><span class=\"c\">#view decorated log<\/span><\/div><div class=\'line\' id=\'LC61\'>git log --decorate --graph --oneline<\/div><\/pre><\/div>\n          <\/div>\n\n          <div class=\"gist-meta\">\n            <a href=\"https://gist.github.com/raw/2655799/64e10d54d7f1586d3f552691565c6411a8128386/git%20svn%20workflow.sh\" style=\"float:right;\">view raw<\/a>\n            <a href=\"https://gist.github.com/2655799#file_git svn workflow.sh\" style=\"float:right;margin-right:10px;color:#666\">git svn workflow.sh<\/a>\n            <a href=\"https://gist.github.com/2655799\">This Gist<\/a> brought to you by <a href=\"http://github.com\">GitHub<\/a>.\n          <\/div>\n        <\/div>\n<\/div>\n')