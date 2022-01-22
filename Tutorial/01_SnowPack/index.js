/*
    =>https://www.snowpack.dev/
    
    *) What it Bundles:
        -> Dependencies (only ESM)
            -> those moduels what aren't ES module that are not going to work with snowpack like (common js, UMD, AMD modules)
            -> these thing is true for when i am writing this tutorial
        -> will not bundle our source code, images, or .css

    *) When Does it bundle:
        -> After each time we install a package
            -> npm install my-packages
            -> npx snowpack

    *) How it Bundles:
        -> Bundle modules independently
            -> But incase of webpack it will bundle it into asingle javascript file or into a single css file depending on your setting and how we configured everyting

    *) Why Snowpack:
        -> Better development flow
            -> we aren't bundling on every save of our source file
        -> Caching
            -> we are buindling individual packages into a individual files and all that node packages will bundle one time and cache and after saving the source code file it will only bundle that source code rather that all the packages which is in the case of webpack

    -> install snowpack
        -> npm install --save-dev snowpack
    -> npx snowpack init (to create snowpack.config.js)
    -> npx snowpack dev (but now snowpack have server we can run this to run a server)

    Commands:
        snowpack init          Create a new project config file.
        snowpack prepare       Prepare your project for development (optional).
        snowpack dev           Develop your project locally.
        snowpack build         Build your project for production.
        snowpack add [package] Add a package to your project.
        snowpack rm [package]  Remove a package from your project.


    -> package that we are using for that tutorial
        -> npm install --save change-case

    -> we can go to package.json and write script to run server then:
        -> npm run start

      NOTE: webpack have it's own dev server but in case of snowpack it doesn't have any dev server so we have to use/install third party dev server
        -> NOTE: now it have dev server so doesn't need to
            -> npm install --save-dev live-server
            -> To start server
                -> npx live-server
*/
import { camelCase } from "change-case";

const myString = "this is the string";
document.getElementById("noId").innerText = camelCase(myString);
