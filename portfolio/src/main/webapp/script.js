// Copyright 2019 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


function getComments() {
  fetch('/data').then(response => response.json()).then((messages) => {
    
    console.log(messages);

    const commentList = document.getElementById('comment-container');
    commentList.innerHTML = '';
    for( let element in messages ){
        var node = createListElement(messages[element]);
        console.log(node);
        commentList.appendChild(node);
    }
    
  });
}

/** Creates an <li> element containing text. */
function createListElement(text) {
  const liElement = document.createElement('li');
  liElement.innerText = text;
  return liElement;
}

function addRandomGreeting() {
  const greetings =
      ['Arms for your chairs are just chairs for your arms.', 'I own chickens', 'sup and wassup', 'yeet'];

  // Pick a random greeting.
  const greeting = greetings[Math.floor(Math.random() * greetings.length)];

  // Add it to the page.
  const greetingContainer = document.getElementById('greeting-container');
  greetingContainer.innerText = greeting;
}