function addNewSkillsField() {
  // console.log("hello");
  let newNode = document.createElement("input");
  newNode.classList.add("m");
  newNode.classList.add("sk-field");
  newNode.setAttribute("type", "text");
  newNode.setAttribute("placeholder", "Enter your skill");

  let skills = document.getElementById("skill");
  let addSkillsBtn = document.getElementById("skillsAddBtn");

  skills?.insertBefore(newNode, addSkillsBtn);
}

function addExp() {
  let newNode = document.createElement("input");
  newNode.classList.add("m");
  newNode.classList.add("exp-field");
  newNode.setAttribute("type", "text");
  newNode.setAttribute("placeholder", "Enter your Experience");

  let lang = document.getElementById("Experience");
  let addLang = document.getElementById("expAddBtn");

  lang?.insertBefore(newNode, addLang);
}

function addEduc() {
  let newNode = document.createElement("input");
  newNode.classList.add("m");
  newNode.classList.add("educ-field");
  newNode.setAttribute("type", "text");
  newNode.setAttribute("placeholder", "Enter your Education");

  let educ = document.getElementById("education");
  let addEduc = document.getElementById("edAddBtn");

  educ?.insertBefore(newNode, addEduc);
}

function addPt() {
  let newNode = document.createElement("input");
  newNode.classList.add("m");
  newNode.classList.add("pt-field");
  newNode.setAttribute("type", "text");
  newNode.setAttribute("placeholder", "Enter your project");

  let pt = document.getElementById("project");
  let addPJ = document.getElementById("ptAddBtn");

  pt?.insertBefore(newNode, addPJ);
}

const resumeDisplay = document.getElementById("cv-template") as HTMLDivElement;
resumeDisplay.style.display = "none";

const toggleTemp = document.getElementById("toggle-temp") as HTMLButtonElement;

toggleTemp.addEventListener("click", (e: Event) => {
  e.preventDefault();
  if (resumeDisplay.style.display === 'none') {
    resumeDisplay.style.display = 'block';
    resumeDisplay.offsetHeight; // Force reflow
  }
});


function generateResume() {
  const nameFieldElement = document.getElementById(
    "nameField"
  ) as HTMLInputElement | null;
  const titleFieldElement = document.getElementById(
    "titleField"
  ) as HTMLInputElement | null;
  const aboutFieldElement = document.getElementById(
    "aboutField"
  ) as HTMLInputElement | null;
  const emailFieldElement = document.getElementById(
    "emailField"
  ) as HTMLInputElement | null;
  const phoneFieldElement = document.getElementById(
    "phoneField"
  ) as HTMLInputElement | null;

  let nameT1 = document.getElementById("nameT1");
  let nameT2 = document.getElementById("nameT2");
  let titleT1 = document.getElementById("titleT1");
  let aboutT = document.getElementById("aboutT");
  let mailT = document.getElementById("mailT");
  let conatctT = document.getElementById("conatctT");

  if (nameFieldElement && nameT1) {
    nameT1.innerHTML = nameFieldElement.value;
  }

  if (nameFieldElement && nameT2) {
    nameT2.innerHTML = nameFieldElement.value;
  }

  if (titleFieldElement && titleT1) {
    titleT1.innerHTML = titleFieldElement.value;
  }

  if (aboutFieldElement && aboutT) {
    aboutT.innerHTML = aboutFieldElement.value;
  }

  if (emailFieldElement && mailT) {
    mailT.innerHTML = emailFieldElement.value;
  }

  if (phoneFieldElement && conatctT) {
    conatctT.innerHTML = phoneFieldElement.value;
  }

  // skills
  const skillsElement = document.getElementsByClassName(
    "sk-field"
  ) as HTMLCollectionOf<HTMLInputElement>;
  let skillT = document.getElementById("skillT") as HTMLElement | null;
  let str = "";

  for (let i = 0; i < skillsElement.length; i++) {
    const e = skillsElement[i];
    str += `<li>${e.value}</li>`;
  }

  if (skillT) {
    skillT.innerHTML = str;
  }

  // projects
  const ptFieldElement = document.getElementsByClassName(
    "pt-field"
  ) as HTMLCollectionOf<HTMLInputElement>;
  let projectT = document.getElementById("projectT") as HTMLElement | null;
  let str1 = "";

  for (let i = 0; i < ptFieldElement.length; i++) {
    const e = ptFieldElement[i];
    str1 += `<li> ${e.value} </li>`;
  }

  if (projectT) {
    projectT.innerHTML = str1;
  }

  // education
  const educFieldElement = document.getElementsByClassName(
    "educ-field"
  ) as HTMLCollectionOf<HTMLInputElement>;
  let educT = document.getElementById("educT") as HTMLElement | null;
  let str2 = "";

  for (let i = 0; i < educFieldElement.length; i++) {
    const e = educFieldElement[i];
    str2 += `<li> ${e.value} </li>`;
  }

  if (educT) {
    educT.innerHTML = str2;
  }

  // experiences
  const expFieldElement = document.getElementsByClassName(
    "exp-field"
  ) as HTMLCollectionOf<HTMLInputElement | HTMLTextAreaElement>;
  const expT = document.getElementById("expT") as HTMLElement | null;
  let str3 = "";

  for (let i = 0; i < expFieldElement.length; i++) {
    const e = expFieldElement[i];
    str3 += `<li> ${e.value} </li>`;
  }

  if (expT) {
    expT.innerHTML = str3;
  }

  const fileInput = document.getElementById(
    "imageField"
  ) as HTMLInputElement | null;
  const imgElement = document.getElementById("imgT") as HTMLImageElement | null;

  if (fileInput && fileInput.files && fileInput.files[0] && imgElement) {
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);

    reader.onloadend = function () {
      if (reader.result) {
        imgElement.src = reader.result as string;
      }
    };
  }
}

const toggleSkills = document.getElementById(
  "toggle-skills"
) as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;

toggleSkills.addEventListener("click", () => {
  if (skills.style.display === "none") {
    skills.style.display = "block";
  } else {
    skills.style.display = "none";
  }
});
