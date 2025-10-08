const square1 = document.querySelector('#square1'); // Use querySelector for a single element by ID
const square2 = document.querySelector('#square2');
const square3 = document.querySelector('#square3');

// Change the background color on mouseover
square1.addEventListener('mouseover', () => {
  square2.style.backgroundColor = '#6F4E37';
  square3.style.backgroundColor = '#6F4E37';
});
square1.addEventListener('mouseout', () => {
  square2.style.backgroundColor = '#E6E6FA'; 
  square3.style.backgroundColor = '#E6E6FA'; 
});


square2.addEventListener('mouseover', () => {
  square1.style.backgroundColor = '#6F4E37';
  square3.style.backgroundColor = '#6F4E37';
});
square2.addEventListener('mouseout', () => {
  square1.style.backgroundColor = '#E6E6FA'; 
  square3.style.backgroundColor = '#E6E6FA'; 
});


square3.addEventListener('mouseover', () => {
  square2.style.backgroundColor = '#6F4E37';
  square1.style.backgroundColor = '#6F4E37';
});
square3.addEventListener('mouseout', () => {
  square2.style.backgroundColor = '#E6E6FA'; 
  square1.style.backgroundColor = '#E6E6FA'; 
});