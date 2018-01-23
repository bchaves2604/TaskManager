# 'angular-project'



## Getting Started

To get you started you can simply clone the this repository and install the dependencies:

### Prerequisites

You need git to clone the `angular-seed` repository. You can get git from here.

We also use a number of Node.js tools to initialize and test `angular-seed`. You must have Node.js
and its package manager (npm) installed. You can get them from [here][node].

### Clone `angular-seed`

Clone the `angular-seed` repository using git by command or by using the Web interface, then go to the project by using the terminal with the next command:

```
cd where/your/project/is/located
```


### Install Dependencies

We have two kinds of dependencies in this project: tools and Angular framework code. The tools help
us manage and test the application.

* We get the tools we depend upon via `npm`, the [Node package manager][npm].
* We get the Angular code via `bower`, a [client-side code package manager][bower].
* In order to run the end-to-end tests, you will also need to have the
  [Java Development Kit (JDK)][jdk] installed on your machine. Check out the section on
  [end-to-end testing](#e2e-testing) for more info.

We have preconfigured `npm` to automatically run `bower` so we can simply do:

```
npm install
```

Behind the scenes this will also call `bower install`. After that, you should find out that you have
two new folders in your project.

* `node_modules` - contains the npm packages for the tools we need
* `app/bower_components` - contains the Angular framework files

*Note that the `bower_components` folder would normally be installed in the root folder but
`angular-seed` changes this location through the `.bowerrc` file. Putting it in the `app` folder
makes it easier to serve the files by a web server.*

### Run the Application

We have preconfigured the project with a simple development web server. The simplest way to start
this server is:

```
npm start
```

Now browse to the app at [`localhost:8000/index.html`][local-app-url].


## Testing

There are two kinds of tests in the `angular-seed` application: Unit tests and end-to-end tests.

### Running End-to-End Tests
In order to testing the Backend and FrontEnd applications must be running

The `angular-seed` app comes with end-to-end tests, again written in [Jasmine][jasmine]. These tests
are run with the [Protractor][protractor] End-to-End test runner. It uses native events and has
special features for Angular applications.

* The configuration is found at `e2e-tests/protractor-conf.js`.
* The end-to-end tests are found in `e2e-tests/todo-spec.js`.

Protractor simulates interaction with our web app and verifies that the application responds
correctly. Therefore, our web server needs to be serving up the application, so that Protractor can
interact with it.

Use npm to install Protractor globally with: npm install -g protractor

This will install two command line tools, protractor and webdriver-manager. Try running "protractor --version" to make sure it's working.

The webdriver-manager is a helper tool to easily get an instance of a Selenium Server running. Use it to download the necessary binaries with: webdriver-manager update

Now start up a server with the command: webdriver-manager start
This will start up a Selenium Server and will output a bunch of info logs. Your Protractor test will send requests to this server to control a local browser. You can see information about the status of the server at http://localhost:4444/wd/hub.

Then run the test with the command: protractor conf.js

If JDK is not already installed, you can download it [here][jdk-download].

