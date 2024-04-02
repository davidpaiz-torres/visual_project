const text_change = [
    '.graf_1',
    '.graf_2',
    '.graf_3',
];

let gif_container = document.getElementById('gif');

const scroller = new scroller({
    grafs: document.querySelectorAll('.graf'),
    container: document.querySelector('.graf_container'),
  });

scroller.on('graf:enter', d => {
    // Add an active class to the div when it crosses in
    d.element.classList.add('active');    
    // change the text in the graphc container when it comes in
    graphic_container_text.innerText = text_change[d.index];
  });

scroller.on('graf:exit', d => {
    // remove active class when it leaves 
    d.element.classList.remove('active');
  });

scroller.on('init', () => {
    // intializes the scroller, 
    console.log('Everything is ready to go!');
  });
  
  // starts up the IntersectionObserver
scroller.init();
  