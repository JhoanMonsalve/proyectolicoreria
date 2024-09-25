
document.addEventListener('DOMContentLoaded', () => {

    const botonesVerProducto = document.querySelectorAll('.btn-comprar');
 
    const modal = document.getElementById('modal-producto');
    const modalTitle = document.getElementById('modal-title');
    const modalImage = document.getElementById('modal-image');
    const modalPrice = document.getElementById('modal-price');
    const modalDescription = document.getElementById('modal-description');
    const closeModal = document.querySelector('.close');

    
    const productos = {
        'coca-cola': {
            title: 'Coca-Cola',
            image: '/img/bebidas/cocacola.png',
            price: '$5.000',
            description: 'Refresco clásico, ideal para cualquier ocasión.'
        },
        'soda': {
            title: 'Soda',
            image: '/img/bebidas/soda.png',
            price: '$4.500',
            description: 'Soda refrescante, perfecta para acompañar tus comidas.'
        },
        'quatro': {
            title: 'Quatro',
            image: '/img/bebidas/quatro.jpeg',
            price: '$100.000',
            description: 'Bebida energética que te mantendrá activo.'
        },
        'redbull': {
            title: 'RedBull',
            image: '/img/bebidas/redbull.jpeg',
            price: '$13.000',
            description: 'La famosa bebida energética que te da alas.'
        },
        'soda-michelada': {
            title: 'Soda Michelada',
            image: '/img/bebidas/sodamichelada.png',
            price: '$10.000',
            description: 'Soda con un toque especial, ideal para disfrutar con amigos.'
        }
    };

    
    botonesVerProducto.forEach(boton => {
        boton.addEventListener('click', (e) => {
            const productoId = e.target.parentElement.id; 
            const productoInfo = productos[productoId]; 
            
         
            modalTitle.textContent = productoInfo.title;
            modalImage.src = productoInfo.image;
            modalPrice.textContent = productoInfo.price;
            modalDescription.textContent = productoInfo.description;

            
            modal.style.display = 'flex';
        });
    });

    closeModal.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.style.display = 'none';
        }
    });
});
