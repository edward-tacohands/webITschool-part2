import {addToStorage, getFromStorage} from "./storage.js";
import { courses } from "../data/courses.js";

const courseForm = document.querySelector("#item-form");
const courseInput = document.querySelector("#item-input");
const courseList = document.querySelector("#item-list");
const clearAll = document.querySelector("#clear");

const initApp = () => {
    const courses = getFromStorage();
    courses.forEach(course =>{
        addCourseToDom(course);
    });
};

const loadCourses = () => {
    courses.forEach(course => {
        const item = document.createElement("li");
        item.textContent = course.title;
        courseList.appendChild(item);
    });
};

const handleAddCourse = (e) => {
    e.preventDefault();

    const course = courseInput.value;
    addCourseToDom(course);
    addToStorage(course);

    courseInput.value= "";
};

const addCourseToDom = (course) => {
    const item = document.createElement('li');
    item.appendChild(document.createTextNode(course));

    courseList.appendChild(item);
}

document.addEventListener('DOMContentLoaded', initApp);
document.addEventListener('DOMContentLoaded', loadCourses);
courseForm.addEventListener('submit', handleAddCourse);

