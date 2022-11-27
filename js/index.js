let today= new Date();

let thisYear=today.getFullYear();

let footer=document.querySelector('footer');

let copyright=document.createElement('p');

copyright.textContent = `Joao Morim ${thisYear}`;

footer.appendChild(copyright);

let skills = ['Python','Matlab','HTML','Javascript','Microsoft Office'];

let SkillsSection=document.getElementById('#skills');

let skillsList=SkillsSection.getElementsByTagName('ul'); //not working - not sure why

for (i=0; i<skills.length; i++){

    let skill=SkillsSection.createElement('li');
    
    skill.innerText = skills[i];

    skillsList.appendChild(skill[i]);

    }
