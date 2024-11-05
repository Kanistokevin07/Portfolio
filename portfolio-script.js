let buttonElement = document.querySelector('.input-chat');

let chatElement = document.querySelector('.chat-log');


function sendMessage() {

  let chatMsg = buttonElement.value;
  chatElement.innerHTML += `You: ${chatMsg}`;
  botMessage(chatMsg);
  buttonElement.value = '';
  
}

function displayMessage(message) {

  chatElement.innerHTML += `Bot: ${message}`;

}

function botMessage(input) {
  let botResponse = '';

  if (input.toLowerCase().includes('hello')) {
      botResponse = 'Hello! How can I help you today?';
  } else if (input.toLowerCase().includes('skill')) {
      botResponse = 'I have skills in C, C++, Python, Java, and web development.';
  } else if (input.toLowerCase().includes('contact')) {
      botResponse = 'You can contact me at kanistokevin007@gmail.com or 81220 77950.';
  } 
  else if (input.toLowerCase().includes('name')) {
      botResponse = " I'm kanisto kevin ";
  } 
  else if (input.toLowerCase().includes('tips')) {
      botResponse = 'Sometimes even if you know how something is gonna end,that doesn\'t mean you can\'t enjoy the ride';
  }
  else if (input.toLowerCase().includes('saaptya')) {
      botResponse = 'ahn sapte sapte neenga saaptingila?';
  }
  else if (input.toLowerCase().includes('saapten')) {
      botResponse = 'cool';
  }
  else if (input.toLowerCase().includes('hobbies')) {
      botResponse = 'badminton,football,music';
  }
  else {
      botResponse = "I'm not sure how to respond to that. Try asking about my skills, projects, or contact information.";
  }

  displayMessage(botResponse);
}