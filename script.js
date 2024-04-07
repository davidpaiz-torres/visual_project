const text_change = [
  'This is the first graphic!',
  'A second graphic!',
  'A Third one!',
  'Fourth, and one more on the way...',
  'Last Graphic!',
];

const images = [
  'media/items-on-shelves.jpeg',
  'media/person-standing-at-shop.jpeg',
  'media/colorful-bags.jpeg',
];

const updateContent = (index) => {
  // Update content based on the current index
  // For example, update a text container with text_change[index]
  // document.getElementById('text-container').innerText = text_change[index];
  console.log(text_change[index]);

  // Update image based on the current index
  const imageElements = [
    document.getElementById('hardships'),
    document.getElementById('person'),
    document.getElementById('bags')
  ];
  imageElements.forEach((imageElement, i) => {
    if (i === index) {
      imageElement.style.display = 'block'; // Show the image
    } else {
      imageElement.style.display = 'none'; // Hide other images
    }
  });
};


const scroller = new Scroller({
  scene: document.querySelectorAll('.slide'), // Call it whatever but this is the class we use in html
  container: document.querySelector('.container'),
});

scroller.on('scene:enter', (d) => {
  // Add an active class to the div when it crosses in
  d.element.classList.add('active');    
  // Change the content when a new scene enters
  updateContent(d.index);
});

scroller.on('scene:exit', (d) => {
  // Remove active class when it leaves 
  d.element.classList.remove('active');
});

scroller.on('init', () => {
  // Initializes the scroller
  console.log('Scroller initialized!');
});

// Starts up the IntersectionObserver
scroller.init();
