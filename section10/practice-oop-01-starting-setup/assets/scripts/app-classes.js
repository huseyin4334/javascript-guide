class DomHelper {
    static moveItem(item, destinationSelector) {
        const section = document.querySelector(destinationSelector);
        item.parentElement.removeChild(item);
        section.append(item);
    }

    static clearListeners(element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);

        return clonedElement;
    }
}

class Tooltip {

    detach = () => {
        this.element.remove();
    }

    attach() {
        const popup = document.createElement("div");

        popup.className = "card";

        popup.textContent = "This project is ok";

        popup.addEventListener("click", this.detach);

        this.element = popup;

        document.body.append(popup);
    }

}

class Project {

    id;
    item;
    switchProject;

    constructor(id, item, switchProject) {
        this.id = id;
        this.item = item;
        this.switchProject = switchProject;

        this.connectSwitchBtn();
        this.connectMoreInfoBtn();
    }

    getBtn(position) {
        return this.item.querySelector(`button:${position}`);
    }

    connectMoreInfoBtn() {
        const btn = this.getBtn("first-of-type");

        btn.addEventListener("click", () => {
            new Tooltip().attach();
        });
    }

    connectSwitchBtn() {
        const btn = this.getBtn("last-of-type");
        btn.addEventListener("click", this.switchProject.bind(null, this.id));
    }
}

class ProjectList {
    projects = [];
    type;
    switchFunction;


    constructor(type) {
        this.type = type;
        this.prepareItems();
    }

    prepareItems() {
        const items = document.querySelectorAll(`#${this.type}-projects ul li`);
        items.forEach((item) => this.projects.push(new Project(item.id, item, this.switchProject.bind(this))));

        this.printer();
    }

    getById(id) {
        return this.projects.find((p) => p.id === id);
    }

    getIndexById(id) {
        return this.projects.findIndex((p) => p.id === id);
    }

    addProject(project) {
        
        console.log("Type: ", this.type, "called addProject");

        this.projects.push(project);

        project.item = DomHelper.clearListeners(project.item);
        DomHelper.moveItem(project.item, `#${this.type}-projects ul`);

        this.prepareSwitchedItem(project);
        project.switchProject = this.switchProject.bind(this);
        project.connectSwitchBtn();

        this.printer();
    }

    switchProject(id) {
        const index = this.getIndexById(id);
        const project = this.projects[index];

        this.switchFunction(project);

        this.projects.splice(index, 1);

        this.printer();
    }

    printer() {
        console.log("Type: ", this.type, "Items: ", this.projects);
    }
}

class ActiveProjectList extends ProjectList {

    constructor() {
        super("active");
    }

    prepareSwitchedItem(project) {
        const btn = project.getBtn("last-of-type");
        btn.textContent = "Finish";
    }
}

class FinishedProjectList extends ProjectList {

    constructor() {
        super("finished");
    }

    prepareSwitchedItem(project) {
        const btn = project.getBtn("last-of-type");
        btn.textContent = "Activate";
    }
}

class App {
    activeProjectList;
    finishedProjectList;
    static init() {
        this.activeProjectList = new ActiveProjectList();
        this.finishedProjectList = new FinishedProjectList();

        this.activeProjectList.switchFunction = this.finishedProjectList.addProject.bind(this.finishedProjectList);
        this.finishedProjectList.switchFunction = this.activeProjectList.addProject.bind(this.activeProjectList);
    } 
}