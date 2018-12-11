// let paragraph = document.getElementById('paragraph');

// let links = document.getElementsByClassName('link');

// let googleLink = document.getElementById('google-link');
//   googleLink.setAttribute('href', 'http://google.com');
//   googleLink.setAttribute('target', '_blank');

//   // let paragraph = document.getElementById('paragraph');
//   // paragraph.removeAttribute('id');
//   // paragraph.setAttribute('class', 'paragraph');

// let button = document.getElementById("add-item-button");

// let count = 1;

// button.onclick = function(){
//   // console.log(button);
//   console.log("adding an element to the list");
//   let newLi = document.createElement('li');

//   newLi.innerHTML = `item number ${count++}`;
//   document.getElementById('item-list').appendChild(newLi);
// }

let button = document.getElementsByTagName('button')[0];

button.onclick = function(){
  let input = document.getElementsByTagName('input')[0];
  console.log(input.value);
}