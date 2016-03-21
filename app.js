var $ = function(selector) {
  return document.querySelector(selector);
}

// save a reference to the messages ul element
var messages = $('#messages');

// save a reference to the chat input element
var chatInput = $('#chat-input')

// create a new li element to hold our new message
var message = document.createElement('li');

// add message to li element's body
message.innerHTML = 'Message 4';

// append message to list of messages
messages.appendChild(message)
