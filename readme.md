# React Redux Auth starter kit (boilerplate)

This react-redux starter kit (boilerplate) is developed for my project. The starter code has been forked from another project. But unfortunetly I could not find the correct repo which inspired. For that reason, if someone can recognize the original code, I wish to give credits.

However most of code has been redesigned. Again this is my simple and basec starter project.

For backendend Api, I've used my own Test API Server. You could use my [Laravel Api Project](https://github.com/gazatem/api-authentication-passport)



# Getting started

1. Before you start working with project, you need to setup a development environment. 
    * [Git](https://git-scm.com/downloads)
    * [NodeJs and Npm](https://nodejs.org/en/download/current/)

2. When your environment is ok, open terminal and type the following commands to setup and run the sample application:

    ```sh
    git clone https://github.com/gazatem/react-redux-auth.git app
    cd app
    npm install
    npm start
    ```

3. Browse  [http://localhost:8080/](http://localhost:8080/) to check application install.

If you see a simpel welcome page, Take Congratulations! 

4. Now you need to update backend Api and Auth setup. For that step, you're free to update the api backend url located in constants:

```sh
//= =====================
// API URL
//= =====================
export const API_URL = 'http://ons.app/api';
 
```

#License
This project is licensed under the MIT license, Copyright (c) 2017 Kemal Yenilmez
