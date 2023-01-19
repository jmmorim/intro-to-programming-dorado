//section for footer

let today= new Date();

let thisYear=today.getFullYear();

let footer=document.querySelector('.nav-bottom');

let copyright=document.createElement('p');

copyright.textContent = `@ Joao Morim ${thisYear}`;

footer.appendChild(copyright);


//section for listing skills

let skills = ['Python','Matlab','HTML','Javascript','Microsoft Office'];

let SkillsSection=document.querySelector('#skills');

let skillsList=SkillsSection.querySelector('.skills-list');

for (i=0; i<skills.length; i++){

    let skill=document.createElement('li'); //when creating a new element always use document
    
    skill.textContent = skills[i];

    skillsList.appendChild(skill);

    }


//section for text boxes
   
let messageForm = document.querySelector('[name = "leave a message"]');
//console.log(messageForm)

document.querySelector('#messages').style.visibility = "hidden";

messageForm.addEventListener('submit',function(event){

    event.preventDefault();

    let fullname = event.target.name.value;
    let useremail = event.target.email.value;
    let message = event.target.message.value;

    let messageSection = document.querySelector('#messages');
    let messageList = messageSection.querySelector('.message-list');

    let newMessage=document.createElement('li'); 
    newMessage.className = "text-message";   
    newMessage.textContent = `${fullname} wrote: ${message}`;

    newMessage.innerHTML = `<a class="emailname" href=mailto: ${useremail}>${fullname}</a> wrote: ${message}`;

    let removeButton = document.createElement('button');
    removeButton.textContent = `remove`;
    removeButton.setAttribute('type','button');
    removeButton.className = "remove-button";

    removeButton.addEventListener('click',function(event){

    event.preventDefault();

    let entry = newMessage.parentNode; 
    newMessage.remove();

    if (messageList.getElementsByTagName('li').length == 0) {
        messageSection.style.visibility = 'hidden';
    }
    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset(); //erase written text on boxes

    if (newMessage != null) {
        messageSection.style.visibility = 'visible';
    } else {
        messageSection.style.visibility = 'hidden';
    };

 });

 var githubRequest = new XMLHttpRequest();
 githubRequest.open('GET','https://api.github.com/users/jmmorim/repos');
 githubRequest.send();

 githubRequest.addEventListener('load',function(event){

    repositories=JSON.parse(this.response);
    console.log(repositories);
 
 let projectSection=document.querySelector('#projects');
 projectList=projectSection.querySelector('ul');

 for (i=0; i<repositories.length; i++){

    let project=document.createElement('li');

    project.textContent = repositories[i].name;
    
    projectList.appendChild(project);

 };

});


