
//FIRST ELEMENT FUNCTION
let image1 = document.querySelector('#panda');
let slumpedPandaText = document.querySelector('#slumpedPandaText')
let treePandaText = document.querySelector('#treePandaText')

slumpedPandaText.style.display = 'none'
treePandaText.style.display = 'block'

image1.onclick = () => {
  image1.setAttribute('src','images/red-panda-in-tree.jpg');
};

image1.onclick = () => {
   if ( image1.getAttribute('src') ===
   'images/red-panda-in-tree.jpg')
   {
        image1.setAttribute('src', 'images/red-panda-slumped.jpg');
        slumpedPandaText.style.display = 'block'
        treePandaText.style.display = 'none'

   } else {
        image1.setAttribute('src', 'images/red-panda-in-tree.jpg');
        slumpedPandaText.style.display = 'none'
        treePandaText.style.display = 'block'
   }
}



//SECOND ELEMENT FUNCTION
// get elements from DOM, make variables
const clicker = document.querySelector('button');
const div = document.querySelector('#tonguePandaDiv');

// hide the P
div.style.display = 'none';

// make button work
clicker.onclick = showAndHide;

// this function runs each time button is clicked
function showAndHide() {
  if (div.classList.contains('showing')) {
    // hide it
    div.style.display = 'none';
    // remove class
    div.classList.remove('showing');
  } else {
    // show it
    div.style.display = 'block';
    // add class
    div.classList.add('showing');
  }
}
