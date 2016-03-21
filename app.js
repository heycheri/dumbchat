var $ = function(selector) {
  return document.querySelector(selector);
}

// save a reference to the messages ul element
var messages = $('#messages');

function addMessage(message) {
  // create a new li element to hold our new message
  var el = document.createElement('li');

  // add message to li element's body
  el.innerHTML = message;

  // append message to list of messages
  messages.appendChild(el)
}

// save a reference to the chat input element
var chatInput = $('#chat-input')
var chatForm  = $('#chat-form')

chatForm.addEventListener('submit', function(event) {
  addMessage(chatInput.value)
  chatInput.value = "";
  event.preventDefault()
})
