# Watermark

Simple project to add watermark to an image.
<div align="center">
<img src="Frontend/demo.gif">
</div>

## Frontend
Working with svelte ts

## Issues with Hot Reload : 
Since Svelte hot reload does not work nicely (rollup issue ?), we need to access the website from the network ip address.

## How to test
Launch `yarn tests` 
Lauch `npx cypress open`

Whenever you change a file on the cypress/ folder and save, the tests will be launched again.
If you change something inside the src/ folder you'll have to launch yarn tests again and restart tests (R) on cypress (no need to launch open).

To get the coverage, the best solution would be to fix the issue with file path between docker and host, i don't know how to do it.
So the best alternative would be to add a symlink on /app on the host machine with the Frontend/ folder. 
The coverage is weird anyway, istanbul is not doing a proper work here, it's expected as stated here : 
https://github.com/bahmutov/cypress-svelte-unit-test 
```sudo ln -s /home/gautier/Code/watermark/Frontend /app ```
If you know how to fix this, please submit a pull request or just add an issue :) (or email me
