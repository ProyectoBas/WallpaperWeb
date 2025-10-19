const images = [
  // Nota: Asegúrate de que estos nombres de archivo (demo1.jpg, etc.) existan en la carpeta /images/
  {src: 'images/demo1.jpg', title: 'Demo 1'},
  {src: 'images/demo2.jpg', title: 'Demo 2'},
  {src: 'images/demo3.jpg', title: 'Demo 3'}
];

// CORRECCIÓN CRÍTICA: Busca por CLASE '.main-gallery' en lugar de ID '#gallery'
const gallery = document.querySelector('.main-gallery'); 

// Comprobación de seguridad: Si no encuentra la galería, no sigue
if (gallery) {
    images.forEach(img=>{
        const card = document.createElement('div');
        // Usa la clase 'card' (consistente con el CSS)
        card.className = 'card'; 
        card.innerHTML = `<img src="${img.src}" alt="${img.title}" /><div class="meta">${img.title}</div>`;
        gallery.appendChild(card);
    });
}