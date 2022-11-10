# sample-nodejs-upload-aws-s3-bucket

sample node js code for upload objects to AWS s3 bucket using iam user credential 

---
## Requirements

For development, you will only need aws-sdk, Node.js and npm, installed in your environement.

### Node
- #### Node installation on Windows

  Just go on [official Node.js website](https://nodejs.org/) and download the installer.
Also, be sure to have `git` available in your PATH, `npm` might need it (You can find git [here](https://git-scm.com/)).

- #### Node installation on Ubuntu

  You can install nodejs and npm easily with apt install, just run the following commands.

      $ sudo apt install nodejs
      $ sudo apt install npm

- #### Other Operating Systems
  You can find more information about the installation on the [official Node.js website](https://nodejs.org/) and the [official NPM website](https://npmjs.org/).

If the installation was successful, you should be able to run the following command.

    $ node --version
    v8.11.3

    $ npm --version
    6.1.0

If you need to update `npm`, you can make it using `npm`! Cool right? After running the following command, just open again the command line and be happy.

    $ npm install npm -g

###
### aws-sdk installation
  After installing node, this project will need aws-sdk too, so just run the following command.

      $ npm i aws-sdk

---

## Install

    $ git clone https://github.com/AkshayRatheesh/sample-nodejs-upload-aws-S3-bucket
    $ cd sample-nodejs-upload-aws-S3-bucket
    $ npm install

## Configure app

Open `index.js` then edit it with your credentials. You will need:

- aws_secret_key;
- aws_access_key_ID;
- BUCKET_NAME;

## Running the project

    $ node index.js

## images 

![App Screenshot](https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiPiR8bziMie3vNfkzCTGFZV00R9JXPGKotvl02zp-gxtr3-HehYVZCFubwUbIAAjRErJF3sTUJkTXrq2_hB7dcUa9Wk_iRh73ip0pERrGChmagsYnqX_rfCBQRutia4cpf6OVrsnpgpee018lRB7_HfuMeWvflhqY9wS6A_CQuDYtpULo2qcWxSgVg/s1420/node-s3-upload.png)
