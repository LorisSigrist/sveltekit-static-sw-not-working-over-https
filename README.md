# Just me debuging my Service Worker
I was having an issue where my service worker would work on localhost, but not in actual deployment. It would manage to cache all the resources, it just wouldn't serve them. No idea why. 

I suspected the difference was http vs https, but I couldn't reproduce that. 

This repository is a test to see if it was my problem, or the frameworks. 
My questions remain unanswered, since this seems to work just fine. The search continues.

I'm gonna try to update sveltekit in my main project, and copy-paste in this battle hardened service worker I got here. Let's see if that works :)


**Update**
- Substituting the SW in my project with this one made it work in safari. Still no Idea what's going on in chromium
