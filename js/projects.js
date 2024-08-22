const lang = window.prompt('Enter Portfolio Project Name');
const el1 = document.getElementById('project-name-title');
const el2 = document.getElementById('breadcrumb-project-name-title');
el1.innerText = lang;
el2.innerText = lang;

const projectNames = [];

while (projectNames.length < 5) {
  const input = window.prompt(`Enter project name${projectNames.length + 1}`);
  projectNames.push(input);
  const el = document.getElementById(`project${projectNames.length}`);
  el.innerText = input;
}
