let today= new Date();

let thisYear=today.getFullYear();

let footer=document.querySelector('footer');

let copyright=document.createElement('p');

copyright.textContent = `Joao Morim ${thisYear}`;

footer.appendChild(copyright);

let skills = ['Python','Matlab','HTML','Javascript','Microsoft Office'];

let SkillsSection=document.querySelector('#skills');

let skillsList=SkillsSection.querySelector('ul'); //not working - not sure why

for (i=0; i<skills.length; i++){

    let skill=document.createElement('li'); //when creating a new element always use document
    
    skill.textContent = skills[i];

    skillsList.appendChild(skill);

    }

let messageForm = document.querySelector('[name = "leave_message"]');
//console.log(messageForm)

messageForm.addEventListener('submit',function(event){

    event.preventDefault();

    let fullname = event.target.name.value;
    let email = event.target.email.value;
    let message = event.target.message.value;

    console.log(fullname)
    console.log(email)
    console.log(message)

    let messageSection = document.querySelector('#messages');

    let messageList = messageSection.querySelector('ul');

    //const link = document.createElement('a');
    //link.setAttribute('href',`mailto:${email}`);
    //link.textContent = `${fullname} wrote: ${message}`;
    //console.log(link)

    newMessage=document.createElement('li');
    newMessage.textContent = `${fullname} wrote: ${message} `;
    //newMessage.appendChild(link);

    let removeButton = document.createElement('button');
    removeButton.textContent = `remove`;
    removeButton.setAttribute('type','button');

    removeButton.addEventListener('click',function(event){

    let entry = button.parentNode();
    entry.remove();

    });

    newMessage.appendChild(removeButton);
    messageList.appendChild(newMessage);

    messageForm.reset(); //erase written text on boxes


 });
