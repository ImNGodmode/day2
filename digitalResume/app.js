
const aboutMe = document.querySelector('.aboutMe')
const workExperiance = document.querySelector('.workExperiance')
const school = document.querySelector('.school')
const technicalSkills = document.querySelector('.technicalSkills')
const gitHub = document.querySelector('.github')

const aboutMe2 = document.querySelector('.aboutMe2')
const workExperiance2 = document.querySelector('.workExperiance2')
const school2 = document.querySelector('.school2')
const technicalSkills2 = document.querySelector('.technicalSkills2')
const gitHub2 = document.querySelector('.github2')

const aboutMeF = () => {
    aboutMe.classList.toggle('aboutMe2');
}

const workExperianceF = () => {
  workExperiance.classList.toggle('workExperiance2')
}
const schoolF = () => {
    let menu = document.querySelector('.school')
    menu.classList.toggle('school2')
}
const technicalSkillsF = () => {
    let menu = document.querySelector('.technicalSkills')
    menu.classList.toggle('technicalSkills2')
}
const gitHubF = () => {
    let menu = document.querySelector('.gitHub')
    menu.classList.toggle('gitHub2')
}