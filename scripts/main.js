var myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if(mySrc === 'images/chihuahua-image.jpg') {
    myImage.setAttribute ('src', 'images/chihuahua2.jpg');

  } else {
    myImage.setAttribute ('src','images/chihuahua-image.jpg');
  }
}

var myVariable;

myVariable = 'Bob';

/*if (iceCream === 'chocolate') {
  alert('Yay, I love chocolate ice cream!');

}else {
  alert('Awwww, but chocolate is my favorite...');
} */

function multiply(num1,num2) {
  var result = num1 * num2;
  return result;
}

/*document.querySelector('html').onclick = function() {
  alert('Ouch! Stop poking me!');
} */

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name. ');
  localStorage.setItem('name',myName);
  myHeading.textContent = 'Chihuahuas are cool, ' + myName;

}

if(!localStorage.getItem('name')) {
  setUserName();

} else {
  var storedName = localStorage.getItem('name');
  myHeading.textContent = 'Chihuahuas are cool, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}
