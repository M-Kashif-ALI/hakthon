function addNewSkillsField() {
    // console.log("hello");
    var newNode = document.createElement("input");
    newNode.classList.add("m");
    newNode.classList.add("sk-field");
    newNode.setAttribute("type", "text");
    newNode.setAttribute("placeholder", "Enter your skill");
    var skills = document.getElementById("skill");
    var addSkillsBtn = document.getElementById("skillsAddBtn");
    skills === null || skills === void 0 ? void 0 : skills.insertBefore(newNode, addSkillsBtn);
}
function addExp() {
    var newNode = document.createElement("input");
    newNode.classList.add("m");
    newNode.classList.add("exp-field");
    newNode.setAttribute("type", "text");
    newNode.setAttribute("placeholder", "Enter your Experience");
    var lang = document.getElementById("Experience");
    var addLang = document.getElementById("expAddBtn");
    lang === null || lang === void 0 ? void 0 : lang.insertBefore(newNode, addLang);
}
function addEduc() {
    var newNode = document.createElement("input");
    newNode.classList.add("m");
    newNode.classList.add("educ-field");
    newNode.setAttribute("type", "text");
    newNode.setAttribute("placeholder", "Enter your Education");
    var educ = document.getElementById("education");
    var addEduc = document.getElementById("edAddBtn");
    educ === null || educ === void 0 ? void 0 : educ.insertBefore(newNode, addEduc);
}
function addPt() {
    var newNode = document.createElement("input");
    newNode.classList.add("m");
    newNode.classList.add("pt-field");
    newNode.setAttribute("type", "text");
    newNode.setAttribute("placeholder", "Enter your project");
    var pt = document.getElementById("project");
    var addPJ = document.getElementById("ptAddBtn");
    pt === null || pt === void 0 ? void 0 : pt.insertBefore(newNode, addPJ);
}
var resumeDisplay = document.getElementById("cv-template");
resumeDisplay.style.display = "none";
var toggleTemp = document.getElementById("toggle-temp");
toggleTemp.addEventListener("click", function (e) {
    e.preventDefault();
    if (resumeDisplay.style.display === 'none') {
        resumeDisplay.style.display = 'block';
        resumeDisplay.offsetHeight; // Force reflow
    }
});
function generateResume() {
    var nameFieldElement = document.getElementById("nameField");
    var titleFieldElement = document.getElementById("titleField");
    var aboutFieldElement = document.getElementById("aboutField");
    var emailFieldElement = document.getElementById("emailField");
    var phoneFieldElement = document.getElementById("phoneField");
    var nameT1 = document.getElementById("nameT1");
    var nameT2 = document.getElementById("nameT2");
    var titleT1 = document.getElementById("titleT1");
    var aboutT = document.getElementById("aboutT");
    var mailT = document.getElementById("mailT");
    var conatctT = document.getElementById("conatctT");
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
    var skillsElement = document.getElementsByClassName("sk-field");
    var skillT = document.getElementById("skillT");
    var str = "";
    for (var i = 0; i < skillsElement.length; i++) {
        var e = skillsElement[i];
        str += "<li>".concat(e.value, "</li>");
    }
    if (skillT) {
        skillT.innerHTML = str;
    }
    // projects
    var ptFieldElement = document.getElementsByClassName("pt-field");
    var projectT = document.getElementById("projectT");
    var str1 = "";
    for (var i = 0; i < ptFieldElement.length; i++) {
        var e = ptFieldElement[i];
        str1 += "<li> ".concat(e.value, " </li>");
    }
    if (projectT) {
        projectT.innerHTML = str1;
    }
    // education
    var educFieldElement = document.getElementsByClassName("educ-field");
    var educT = document.getElementById("educT");
    var str2 = "";
    for (var i = 0; i < educFieldElement.length; i++) {
        var e = educFieldElement[i];
        str2 += "<li> ".concat(e.value, " </li>");
    }
    if (educT) {
        educT.innerHTML = str2;
    }
    // experiences
    var expFieldElement = document.getElementsByClassName("exp-field");
    var expT = document.getElementById("expT");
    var str3 = "";
    for (var i = 0; i < expFieldElement.length; i++) {
        var e = expFieldElement[i];
        str3 += "<li> ".concat(e.value, " </li>");
    }
    if (expT) {
        expT.innerHTML = str3;
    }
    var fileInput = document.getElementById("imageField");
    var imgElement = document.getElementById("imgT");
    if (fileInput && fileInput.files && fileInput.files[0] && imgElement) {
        var file = fileInput.files[0];
        var reader_1 = new FileReader();
        reader_1.readAsDataURL(file);
        reader_1.onloadend = function () {
            if (reader_1.result) {
                imgElement.src = reader_1.result;
            }
        };
    }
}
var toggleSkills = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
toggleSkills.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
    }
    else {
        skills.style.display = "none";
    }
});
