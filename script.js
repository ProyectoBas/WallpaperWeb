const images = [
  {src: 'images/demo1.jpg', title: 'Demo 1'},
  {src: 'images/demo2.jpg', title: 'Demo 2'},
  {src: 'images/demo3.jpg', title: 'Demo 3'}
];

const gallery = document.getElementById('gallery');

images.forEach(img=>{
  const card = document.createElement('div');
  card.className = 'card';
  card.innerHTML = `<img src="${img.src}" alt="${img.title}" /><div class="meta">${img.title}</div>`;
  gallery.appendChild(card);
});
