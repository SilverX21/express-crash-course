# Express Crash Course

This is an express crash course from Traversy Media. You can watch it [here](https://www.youtube.com/watch?v=CnH3kAXSrmU&ab_channel=TraversyMedia).

### Walkthrough 🚀🤖

1. Create an empty folder and run the command `npm init -y`

2. Then, let's add Express eith the command `npm i express`

3. After this we add the file server.js, which will be the main file for this project.

4. If we want to run only one file, we can use the command `node file_name`. In this case we can use `node server.js`

5. If we don't want to start and stop the server every time we do a change, we can add this to the package.json file:

```json
"scripts": {
    "start": "node server",
    "dev": "node --watch server"
  }
```

After we do this, if we run the command `npm run dev` the server will start and if you change things up it will catch the changes and apply them without needing to restart the server 🚀

6. To use the .env file, we need to explicitly tell in the `package.json` file that we want to use it. It's something like this:

```json
"scripts": {
    "start": "node server",
    "dev": "node --watch --env-file=.env server"
  }

```

7. To set the importing style and the js style, we need to go to the package.json and set the following to use the module version instead in the main object:

```json
"type": "module",

```

With this, we can now do this:

```javascript
//without the modules
const express = require("express");

//using the modules
import express from "express";
```

8. We will install the package colors to add some color to the logs and the cmd `npm install colors`
