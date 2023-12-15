import { ProjectList } from './App/ProjectList.js';

class App {
  static init() {
    const activeProjectsList = new ProjectList('active');
    const finishedProjectsList = new ProjectList('finished');
    activeProjectsList.setSwitchHandlerFunction(
      finishedProjectsList.addProject.bind(finishedProjectsList)
    );
    finishedProjectsList.setSwitchHandlerFunction(
      activeProjectsList.addProject.bind(activeProjectsList)
    );

    // const timerId = setTimeout(this.startAnalytics, 3000);

    // document.getElementById('stop-analytics-btn').addEventListener('click', () => {
    //   clearTimeout(timerId);
    // });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/Utility/Analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();


/*
  JS Modules:
  - We have to serve our JS files from a server (not from the file system)
    - Go to the folder where the files are located
    - npm install -g serve
    - serve
  - We have to use the type="module" attribute on our script tags
    - <script type="module" src="..."></script>
  - We should use export and import statements to make our code modular
    - export const name = 'Max';
    - import { name } from './Utility.js';


    Scopes:
    - We can not access variables from other files.
    - If we console.log(window) we can see that we have a global object.
    - But if we console.log(this) in a module file, we can see undefined. Because this is not shared yet. We just download the file.

    For example:
    // file1.js
    window.name = 'Max';

    // file2.js
    console.log(window.name); // undefined

    function printName() {
      console.log(window.name); // Max
    }

    printName();


    globalThis:
    - We can use globalThis to access the global object.


    For example:

    // file1.js
    globalThis.name = 'Max';

    // file2.js
    console.log(globalThis.name); // Max

    function printName() {
      console.log(globalThis.name); // Max
    }

    printName();


    globalThis > window > this
*/