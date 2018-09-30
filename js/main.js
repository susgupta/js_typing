/*
const TypeWriter = function(txtElement, words, wait = 3000) {
  //initaize required fields
  this.txtElement = txtElement;
  this.words = words;
  this.txt = "";
  this.wordIndex = 0;
  this.wait = parseInt(wait, 10);
  //want the method of 'type'
  this.type();
  //want deleting text
  this.isDeleting = false;
};

//add 'type' method
TypeWriter.prototype.type = function() {
  //get current index of word
  const currentIndex = this.wordIndex % this.words.length;
  //full text of current word
  const fullText = this.words[currentIndex];

  //check if deleting
  if (this.isDeleting) {
    //remove character
    this.txt = fullText.substring(0, this.txt.length - 1);
  } else {
    //add character
    this.txt = fullText.substring(0, this.txt.length + 1);
  }

  //insert text in the element
  this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

  //inital typing speed
  let typeSpeed = 300;

  if (this.isDeleting) {
    //make it faster, cut it in half
    typeSpeed /= 2;
  }

  //if word is complete
  if (!this.isDeleting && this.txt === fullText) {
    //set type speed to wait, in effect the pause
    typeSpeed = this.wait;
    //set is deleting to true
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    //reset deleting
    this.isDeleting = false;
    //move to next word
    this.wordIndex++;
    //pause before typing next word
    typeSpeed = 500;
  }

  setTimeout(() => this.type(), typeSpeed);
};
*/

//ES6 class
class TypeWriter {
  constructor(txtElement, words, wait = 3000) {
    //initaize required fields
    this.txtElement = txtElement;
    this.words = words;
    this.txt = "";
    this.wordIndex = 0;
    this.wait = parseInt(wait, 10);
    //want the method of 'type'
    this.type();
    //want deleting text
    this.isDeleting = false;
  }

  //ES6 way of doing the same thing as above
  type() {
    //get current index of word
    const currentIndex = this.wordIndex % this.words.length;
    //full text of current word
    const fullText = this.words[currentIndex];

    //check if deleting
    if (this.isDeleting) {
      //remove character
      this.txt = fullText.substring(0, this.txt.length - 1);
    } else {
      //add character
      this.txt = fullText.substring(0, this.txt.length + 1);
    }

    //insert text in the element
    this.txtElement.innerHTML = `<span class="txt">${this.txt}</span>`;

    //inital typing speed
    let typeSpeed = 300;

    if (this.isDeleting) {
      //make it faster, cut it in half
      typeSpeed /= 2;
    }

    //if word is complete
    if (!this.isDeleting && this.txt === fullText) {
      //set type speed to wait, in effect the pause
      typeSpeed = this.wait;
      //set is deleting to true
      this.isDeleting = true;
    } else if (this.isDeleting && this.txt === "") {
      //reset deleting
      this.isDeleting = false;
      //move to next word
      this.wordIndex++;
      //pause before typing next word
      typeSpeed = 500;
    }

    setTimeout(() => this.type(), typeSpeed);
  }
}

//init on DOM load
document.addEventListener("DOMContentLoaded", init);

//init the app
function init() {
  //get required data
  const txtElement = document.querySelector(".txt-type");
  const words = JSON.parse(txtElement.getAttribute("data-words"));
  const wait = txtElement.getAttribute("data-wait");

  //init the 'typewriter'
  new TypeWriter(txtElement, words, wait);
}
