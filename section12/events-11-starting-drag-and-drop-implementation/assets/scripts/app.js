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
  constructor(closeNotifierFunction, text, hostElementId) {
    super(hostElementId);
    this.closeNotifier = closeNotifierFunction;
    this.text = text;
    this.create();
  }

  closeTooltip = () => {
    this.detach();
    this.closeNotifier();
  };

  create() {
    const tooltipElement = document.createElement('div');
    tooltipElement.className = 'card';
    const tooltipTemplate = document.getElementById('tooltip');
    const tooltipBody = document.importNode(tooltipTemplate.content, true);
    tooltipBody.querySelector('p').textContent = this.text;
    tooltipElement.append(tooltipBody);

    const hostElPosLeft = this.hostElement.offsetLeft;
    const hostElPosTop = this.hostElement.offsetTop;
    const hostElHeight = this.hostElement.clientHeight;
    const parentElementScrolling = this.hostElement.parentElement.scrollTop;

    const x = hostElPosLeft + 20;
    const y = hostElPosTop + hostElHeight - parentElementScrolling - 10;

    tooltipElement.style.position = 'absolute';
    tooltipElement.style.left = x + 'px'; // 500px
    tooltipElement.style.top = y + 'px';

    tooltipElement.addEventListener('click', this.closeTooltip);
    this.element = tooltipElement;
  }
}

class ProjectItem {
  hasActiveTooltip = false;

  constructor(id, updateProjectListsFunction, type) {
    this.id = id;
    this.updateProjectListsHandler = updateProjectListsFunction;
    this.connectMoreInfoButton();
    this.connectSwitchButton(type);
    this.connectDrag();
  }

  showMoreInfoHandler() {
    if (this.hasActiveTooltip) {
      return;
    }
    const projectElement = document.getElementById(this.id);
    const tooltipText = projectElement.dataset.extraInfo;
    const tooltip = new Tooltip(
      () => {
        this.hasActiveTooltip = false;
      },
      tooltipText,
      this.id
    );
    tooltip.attach();
    this.hasActiveTooltip = true;
  }

  connectDrag() {
    const item = document.getElementById(this.id);
    
    item.addEventListener("dragstart", event => {
      // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/setData
      event.dataTransfer.setData('text/plain', this.id);
      console.log('dragstart');
      

      // https://developer.mozilla.org/en-US/docs/Web/API/DataTransfer/effectAllowed
      // This is the default behavior, but we can change it to 'move' or 'copy'
      // effectAllowed is the operation that is allowed to be performed. So, if we set it to 'move', then the user can only move the element, not copy it.
      event.dataTransfer.effectAllowed = 'move';
    });

    item.addEventListener('dragend', event => {
      console.log('dragend');
      console.log(event);
    });
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
    this.connectDroppable();
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

  connectDroppable() {
    const itemList = document.querySelector(`#${this.type}-projects ul`);

    // dragenters are fired when the mouse enters a valid drop target just once, and then the dragover event fires every few hundred milliseconds.
    // They have same behaviors. But dragenter is fired just once, and dragover is fired every few hundred milliseconds.

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragenter_event
    // The dragenter event is fired when a dragged element or text selection enters a valid drop target.
    itemList.addEventListener("dragenter", event => {
      if (event.dataTransfer.types[0] === 'text/plain') {
        // We are preventing the default behavior of the browser because we want to control what happens when the user drags an element over another element.
        event.preventDefault();
        console.log("dragenter");

        itemList.parentElement.classList.add("droppable");
      }

    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragover_event
    // The dragover event is fired when an element or text selection is being dragged over a valid drop target (every few hundred milliseconds).
    itemList.addEventListener("dragover", event => {
      console.log("dragover");
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/dragleave_event
    // The dragleave event is fired when a dragged element or text selection leaves a valid drop target.
    itemList.addEventListener("dragleave", event => {
      console.log(event.relatedTarget);
      if (event.relatedTarget?.closest(`#${this.type}-projects ul`) !== itemList) {
        itemList.parentElement.classList.remove("droppable");
      }
    });

    // https://developer.mozilla.org/en-US/docs/Web/API/Document/drop_event
    // The drop event is fired when an element or text selection is dropped on a valid drop target.
    itemList.addEventListener("drop", event => {
      console.log("dropped");

      const id = event.dataTransfer.getData('text/plain');

      console.log(id);

      if (this.projects.find(p => p.id === id)) {
        return;
      }

      // It will drag element automatically.
      document.getElementById(id).querySelector("button:last-of-type").click();

      itemList.parentElement.classList.remove("droppable");

      event.preventDefault();
    });
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
  }
}

App.init();
