var app = new Vue({
    el: '#app',
    data: {
        titulo: 'Discotecas en Perú',
        see: false,
        discotecas: [
            {
                nombre: 'Barranco Bar',
                imagen: 'app/images/barrancobar.jpg',
                descripcion: 'Barranco Bar es una discoteca popular en Lima, conocida por su música variada y su ambiente vibrante.',
                ubicacion: 'Barranco, Lima'
            },
            {
                nombre: 'Ayahuasca Restobar',
                imagen: 'app/images/ayahuasca.jpg',
                descripcion: 'Ayahuasca Restobar ofrece una experiencia única con su decoración temática y sus exquisitos cócteles.',
                ubicacion: 'Barranco, Lima'
            },
            {
                nombre: 'Bizarro',
                imagen: 'app/images/bizarro.jpg',
                descripcion: 'Bizarro es un lugar ideal para disfrutar de la música electrónica y de sus exclusivas fiestas temáticas.',
                ubicacion: 'Miraflores, Lima'
            },
            {
                nombre: 'Mama Africa',
                imagen: 'app/images/mamafrica.jpg',
                descripcion: 'Mama Africa es una discoteca icónica en Cusco, famosa por su ambiente multicultural y sus fiestas hasta el amanecer.',
                ubicacion: 'Plaza de Armas, Cusco'
            },
            {
                nombre: 'La Casona de Camaná',
                imagen: 'app/images/casona.jpg',
                descripcion: 'La Casona de Camaná es un espacio elegante en Arequipa, perfecto para disfrutar de una noche de baile y buena música.',
                ubicacion: 'Camaná, Arequipa'
            }
        ]
    }
})
