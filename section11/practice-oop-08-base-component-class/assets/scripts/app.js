class DOMHelper {
  static clearEventListeners(element) {
    const clonedElement = element.cloneNode(true);
    element.replaceWith(clonedElement);
    return clonedElement;
  }

  static moveElement(elementId, newDestinationSelector) {
    const element = document.getElementById(elementId);
    const destinationElement = document.querySelector(newDestinationSelector);
    destinationElement.append(element);

    // We are using scrollIntoView() function for scrolling to the element.
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
    // We can use scrollIntoView() function with options.
    // We can add behavior: 'smooth' option for smooth scrolling.
    element.scrollIntoView({ behavior: 'smooth' });
  }
}

class Component {
  constructor(hostElementId, insertBefore = false) {
    if (hostElementId) {
      this.hostElement = document.getElementById(hostElementId);
    } else {
      this.hostElement = document.body;
    }
    this.insertBefore = insertBefore;
  }

  detach() {
    if (this.element) {
      this.element.remove();
      // this.element.parentElement.removeChild(this.element);
    }
  }

  attach() {
    this.hostElement.insertAdjacentElement(
      this.insertBefore ? 'afterbegin' : 'beforeend',
      this.element
    );
  }
}

class Tooltip extends Component {
  constructor(closeNotifierFunction, infoText, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.infoText = infoText;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    //tooltipElement.textContent = this.infoText;
    tooltipElement.appendChild(this.renderTemplate());


    this.positionForTooltip(tooltipElement);

    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }

  renderTemplate() {
    const tooltipTemplate = document.getElementById('tooltip');
    const body = document.importNode(tooltipTemplate.content, true);
    body.querySelector("p").textContent = this.infoText;
    return body;
  }

  positionForTooltip(tooltipElement) {
    // Host (Main Element) element left and top positions from the viewport
    // top have scrolled pixels too
    const left = this.hostElement.offsetLeft;
    const top = this.hostElement.offsetTop;

    // Parent element own width and height (inside on object)
    const elementHeight = this.hostElement.clientHeight;

    // Scrolled pixels
    const scroll = this.hostElement.parentElement.scrollTop;

    const x = left;
    const y = top + elementHeight - scroll - 10;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/position
    // absolute: The element is removed from the normal document flow; no space is created for the element in the page layout.
    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px';
    tooltipElement.style.top = y + 'px';
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);

    console.log(projectElement.dataset);
    projectElement.dataset.someInfo = 'Test';

    const tooltip = new Tooltip(() => {
      this.hasActiveTooltip = false;
    }, 
    projectElement.dataset.extraInfo,
    this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectMoreInfoButton() {
    const projectItemElement = document.getElementById(this.id);
    const moreInfoBtn = projectItemElement.querySelector(
      'button:first-of-type'
    );
    moreInfoBtn.addEventListener('click', this.showMoreInfoHandler.bind(this));
  }

  connectSwitchButton(type) {
    const projectItemElement = document.getElementById(this.id);
    let switchBtn = projectItemElement.querySelector('button:last-of-type');
    switchBtn = DOMHelper.clearEventListeners(switchBtn);
    switchBtn.textContent = type === 'active' ? 'Finish' : 'Activate';
    switchBtn.addEventListener(
      'click',
      this.updateProjectListsHandler.bind(null, this.id)
    );
  }

  update(updateProjectListsFn, type) {
    this.updateProjectListsHandler = updateProjectListsFn;
    this.connectSwitchButton(type);
  }
}

class ProjectList {
  projects = [];

  constructor(type) {
    this.type = type;
    const prjItems = document.querySelectorAll(`#${type}-projects li`);
    for (const prjItem of prjItems) {
      this.projects.push(
        new ProjectItem(prjItem.id, this.switchProject.bind(this), this.type)
      );
    }
    console.log(this.projects);
  }

  setSwitchHandlerFunction(switchHandlerFunction) {
    this.switchHandler = switchHandlerFunction;
  }

  addProject(project) {
    this.projects.push(project);
    DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
    project.update(this.switchProject.bind(this), this.type);
  }

  switchProject(projectId) {
    // const projectIndex = this.projects.findIndex(p => p.id === projectId);
    // this.projects.splice(projectIndex, 1);
    this.switchHandler(this.projects.find(p => p.id === projectId));
    this.projects = this.projects.filter(p => p.id !== projectId);
  }
}

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


    // Add some script to the page with dinamic way
    // const someScript = document.createElement('script');
    // someScript.textContent = 'alert("Hi there!");';
    // document.head.append(someScript);

    // Add some script to the page with dinamic way
    // document.getElementById("analytics-btn")
    //  .addEventListener("click", this.startAnalytics.bind(this));

    // SetTime and SetInterval
    const timerId = setTimeout(() => {
      this.startAnalytics();
      console.log('Time is done!');
    }, 3000);

    // This can work correctly if we click the button before 3 seconds.
    document.getElementById("analytics-btn")
      .addEventListener("click", () => {
        clearTimeout(timerId);
        console.log('Timer stopped!');
      });
  }

  static startAnalytics() {
    const analyticsScript = document.createElement('script');
    analyticsScript.src = 'assets/scripts/app-analytics.js';
    analyticsScript.defer = true;
    document.head.append(analyticsScript);
  }
}

App.init();
