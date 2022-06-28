//creating appending and modifying title style
const header = document.getElementById("header");

const title = document.createElement("h1");
const subtitle = document.createElement("h4");
const text = document.createTextNode("Javascript Made This");

title.appendChild(text);
subtitle.innerHTML = "<span>Karla</span> wrote the JavaScript.";

header.appendChild(title);
header.appendChild(subtitle);

const span = document.getElementsByTagName("span")[0];
header.style.marginLeft = '35%';
span.style.color = 'pink';

//messages
const messages =  document.getElementsByClassName("messages");
const message = document.message;
let messagesArr = [];

//themes
const theme = document.getElementById('theme-drop-down');
let leftText = 'message left';
let rightText = 'message right';
let leftText2 = 'message left2';
let rightText2 = 'message right2';

//clear button
const clear =  document.getElementById("clear-button");


//adds message to arr and calls create message func
message.addEventListener('submit',(e)=>{ 
    e.preventDefault();
    messagesArr.push(message.input.value);
    createMessage(message.input.value, messagesArr.length - 1);
    message.input.value = '';
})

//removes all elements
clear.addEventListener('click',(e)=>{ 
    e.preventDefault();

    var child = messages[0].lastElementChild;
    while(child){
        messages[0].removeChild(child);
        child = messages[0].lastElementChild;
    }
    messagesArr = [];
})

//creates message element and appends to messages div
function createMessage(mssg, val){
    const messageContainer = document.createElement('div');
    let messageText = document.createTextNode(mssg);

    messageContainer.appendChild(messageText)
    messages[0].appendChild(messageContainer);

    // Assigns initial theme style
    if(theme.value == 'theme-one'){
        if(val % 2 <= 0){
            messageContainer.className = leftText;
        }else{
            messageContainer.className = rightText;
        }
    }else{
        if(val % 2 <= 0){
            messageContainer.className = leftText2;
        }else{
            messageContainer.className = rightText2;
        }
    }  
}

// Gets message elements by class and changes the style according to theme selected
theme.addEventListener('change', ()=>{
    let left = document.getElementsByClassName(leftText);
    let right = document.getElementsByClassName(rightText);
    let left2 = document.getElementsByClassName(leftText2);
    let right2 = document.getElementsByClassName(rightText2);

    if(left[0]){
        while(right[0]){
            right[0].className  = rightText2;
        } 
        while(left[0]){
            left[0].className  = leftText2;
        } 
    }else{
        while(right2[0]){
            right2[0].className  = rightText;
        } 
        while(left2[0]){
            left2[0].className  = leftText;
        } 
    }
});