require('dotenv').config();
const Category = require('./models/Category');
const Product = require('./models/Product');
const ProductVariation = require('./models/ProductVariation');
const Image = require('./models/Image');
const sequelize = require('./config/db');

const seedDatabase = async () => {
    try {
        await sequelize.sync({ force: true });
        console.log('Database synced');

        const categories = await Category.bulkCreate([
            { name: 'Alimento para peces' },//1
            { name: 'Motor/Cabeza de poder' },//2
            { name: 'Accesorio para acuarios' },//3
            { name: 'Gotas para peces' },//4
            { name: 'Filtro' },//5
            { name: 'Cerámica' },//6
            { name: 'Alimento para tortuga' },//7
            { name: 'Accesorio para hamsters' },//8
            { name: 'Accesorio para pájaros' },//9
            { name: 'Nido' },//10
            { name: 'Gotas para pájaros' },//11
            { name: 'Accesorios para perros' },//12
            { name: 'Comida para pájaros' },//13
            { name: 'Lámparas para acuarios' },//14
            { name: 'Bebederos para pájaros' },//15
            { name: 'Comederos para pájaros' },//16
            { name: 'Accesorios para gatos' },//17
            
        ]);

        console.log('Categories created');

        const products = await Product.bulkCreate([
            {
                name: 'TetraColor',
                description: 'comida para peces completa y balanceada ideal para su suministro diario',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Aqua Max',
                description: 'alimento balanceado para peces que viene en forma de escamas o hojuelas',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Nutripez',
                description: 'alimento para peces ornamentales en hojuelas que se compone de harina de pescado, harina de trigo, harina de camarón, torta de soya y arroz',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Ocelatus7',
                description: 'Alimento completo en hojuela con 37% de proteína para peces ornamentales de acuario.',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Goldfish  Flakes',
                description: 'Alimento completo y equilibrado para carpines dorados con una mezcla de proteínas única para que los peces crezcan fuertes, sanos y llenos de vitalidad.',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Nutri5',
                description: 'Alimento de excelente calidad en escamas para peces ornamentales, con alto contenido de proteína animal marina y vegetal. ',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Alimento Flotante Delgado',
                description: 'Alimento que está diseñado para flotar en el agua y que se le da a los peces para que lo consuman.  ',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Alimento Flotante Grueso',
                description: 'Alimento que está diseñado para flotar en el agua y que se le da a los peces para que lo consuman.  ',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Tetracolor Nacional Granulado',
                description: 'Alimento de excelente calidad en escamas para peces ornamentales, con alto contenido de proteína animal marina y vegetal. ',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Vitapez',
                description: 'Comida en hojuelas para peces',
                categoryId: 1,
                animal: 'Peces'
            },
            {
                name: 'Aquarium filter PUMP WP-3000F',
                description: 'Cabeza de poder con potencia de 25W. Flujo máximo de 1200L/h, con un voltaje de AC 220-240V/50Hz ',
                categoryId: 2,
                animal: 'Peces'
            },
            {
                name: 'Aquarium filter PUMP WP-2200F',
                description: 'Cabeza de poder con potencia de 20W. Flujo máximo de 1000 L/h, con un voltaje de AC 220-240V/50Hz',
                categoryId: 2,
                animal: 'Peces'
            },
            {
                name: 'Aquarium filter PUMP WP-1200F',
                description: 'Cabeza de poder con potencia de 15W. Flujo máximo de 880 L/h, con un voltaje de AC 220-240V/50Hz',
                categoryId: 2,
                animal: 'Peces'
            },
            {
                name: 'Aquarium filter PUMP WP-950F',
                description: 'Cabeza de poder con potencia de 6W. Flujo máximo de 500 L/h, con un voltaje de AC 220-240V/50-60Hz',
                categoryId: 2,
                animal: 'Peces'
            },
            {
                name: 'Jeneca Air Pump AP-1688',
                description: 'Motor de 1 salida con potencia de 1.5W, voltaje de 110V y un flujo máximo de 1.6L/min',
                categoryId: 2,
                animal: 'Peces'
            },
            {
                name: 'Sobo SB-648A Air Pump',
                description: 'Motor de 2 salidas con potencia de 5W, voltaje de 220V-240V y un flujo máximo de 2x4L/min',
                categoryId: 2,
                animal: 'Peces'
            },
            {
                name: 'Filtro de espuma pequeño',
                description: 'dispositivo de filtración mecánica que captura detritos y partículas grandes en el agua.',
                categoryId: 5,
                animal: 'Peces'
            },
            /*Un filtro de espuma para acuario es un dispositivo de filtración
            mecánica que captura detritos y partículas grandes en el agua. 
            Este tipo de filtro es ideal para mantener el agua limpia y libre
            de residuos orgánicos, mejorando así la calidad del agua y creando
            un ambiente saludable para los peces. La espuma biológica retiene
            sólidos y materia orgánica, permitiendo que las bacterias nitrificantes
            descompongan estos residuos en sustancias asimilables*/
            {
                name: 'Lampara Deebow T2',
                description: 'Lámpara LED sumergible con potencia de 1W, longitud de 20cm y una combinación de colores blanco y azul',
                categoryId: 14,
                animal: 'Peces'
            },
            {
                name: 'Lampara Deebow T3',
                description: 'Lámpara LED sumergible con potencia de 1.5W, longitud de 30cm y una combinación de colores blanco y azul',
                categoryId: 14,
                animal: 'Peces'
            },
            {
                name: 'Lampara Deebow T4',
                description: 'Lámpara LED sumergible con potencia de 2W, longitud de 40cm y una combinación de colores blanco y azul',
                categoryId: 14,
                animal: 'Peces'
            },
            {
                name: 'Lampara Deebow T5',
                description: 'Lámpara LED sumergible con potencia de 3W, longitud de 50cm y una combinación de colores blanco y azul',
                categoryId: 14,
                animal: 'Peces'
            },
            {
                name: 'Lampara Deebow T6',
                description: 'Lámpara LED sumergible con potencia de W, longitud de cm y una combinación de colores blanco y azul',
                categoryId: 14,
                animal: 'Peces'
            },
            {
                name: 'Medusas',
                description: 'Decoración de medusa artificial',
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'T para acuarios',
                description: 'Llave de paso en forma de T para acuarios',
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Fin de semana Nutri5',
                description: 'Alimento de liberación lenta está diseñado para proporcionar una nutrición continua a peces',
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Anémonas',
                description: 'Decoración de anémona artificial',
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Hongos',
                description: 'Decoración de hongo  pequeño artificial',
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Difusoras Largas para acuarios',
                description: 'Difusoras para acuarios', //20cm 25cm 35cm 40cm 45cm
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Sal Marina',
                description: 'Formulada específicamente para replicar las condiciones naturales del agua de mar', //es por libra
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Nasa',
                description: 'herramienta esencial para capturar y trasladar peces de manera segura dentro del acuario', //hay 4 tipos del #3 al #6
                categoryId: 3,
                animal: 'Peces'
            },
            {
                name: 'Azul de metileno',
                description: 'Controla parásitos y hongos de la piel', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'ICK Hongos',
                description: 'Desinfecta huevos y parásitos de los peces', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Anticloro',
                description: 'Remueve el cloro y minerales del agua  com oel cobre, yodo, etc', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Acuaprime',
                description: 'Remueve del acuario el cloro, metales pesados, etc', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Aspiradora para acuario',
                description: ' Apiradora manual que permite eliminar eficientemente los desechos, restos de comida y detritos del sustrato y las paredes del acuario', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Rollo de manguera',
                description: 'Accesorio esencial para la aireación y el mantenimiento del acuario.', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Respaldo para acuario',
                description: 'Además de su función estética, el respaldo ayuda a ocultar cables y equipos detrás del acuario, brindando un aspecto más limpio y organizado.o.', 
                categoryId: 4,
                animal: 'Peces'
                //vienen de 30cm 40cm 50cm 60cm 
                //Tiene imágnes adicionales de los respaldos
            },
            {
                name: 'Filtro  Nacional Sencillo',
                description: 'Viene vacío', 
                categoryId: 5,
                animal: 'Peces'
            },
            {
                name: 'Filtro Nacional Completo',
                description: 'Adentro tiene espuma y piedras creo', 
                categoryId: 5,
                animal: 'Peces'
            },
            {
                name: 'Espuma',
                description: 'Se le coloca al filtro', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Cycle', //viene pequeño y grande
                description: 'Suplemento biológico para acuarios', 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Piedra de color', 
                description: 'Piedra decorativa para acuarios', //viene de  8 colores y mezclada 
                categoryId: 4,
                animal: 'Peces'
            },
            {
                name: 'Cerámica normal', 
                description: 'Cerámica decorativa para acuarios', //viene mini pequeña mediana grande y yumbo
                categoryId: 6,
                animal: 'Peces'
                //viene de ranas, tortugas, carteles, hongos, gusanos, creo, y piñas
            },
            {
                name: 'Cerámica envejecida', 
                description: 'Cerámica decorativa para acuarios', //viene grande y mediana
                categoryId: 6,
                animal: 'Peces'
                //viene de barcos, piramides, troncos, puentes, castillos, botas, barriles, la casita de calamardo y ya
            },
            {
                name: 'Reptomin', 
                description: 'Comida para tortugas', //viene de 300gm y no sé cuánto tiene la otra pequeña
                categoryId: 7,
                animal: 'Peces'
            },
            {
                name: 'Jaula para hamster importada',
                description: 'Jaula para hamster importada', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Casita para hamster ',
                description: 'Casita para poner dentro de la jaula del hamster', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Rueda para hamster', //hay metálica y de plástico
                description: 'Rueda para poner dentro de la jaula del hamster', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Bola para hamster',
                description: 'Bola para que ande el hamster', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Rex para hamster',
                description: 'Especial para cuidar la piel y el pelaje', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Bebederos para hamster', //hay pequeño, mediano y nacional
                description: 'Bebederos para hamster', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Bulto de cascarilla',
                description: 'Cascarilla para la jaula del hamster', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Carbón activado',//es por libra
                description: 'Carbón activado ns', 
                categoryId: 8,
                animal: 'Hamsters'
            },
            {
                name: 'Bañeras para pájaros',//hay pequeña y grande
                description: 'Bañeras que se ponen dentro de las jaulas de los pájaros', 
                categoryId: 9,
                animal: 'Pájaros'
            },
            {
                name: 'Bebedero para Colibrí',
                description: 'Bebederos que se cuelgan para los colibrís', 
                categoryId: 9,
                animal: 'Pájaros'
            },
            {
                name: 'Tutumos', //hay uno para cactúa y los normales
                description: 'Tutumos de varios tamaños', 
                categoryId: 9,
                animal: 'Pájaros'
            },
            {
                name: 'Control Acaros', 
                description: 'Baño especial para aves y jaulas para el control de piojos y acaros', 
                categoryId: 11,
                animal: 'Pájaros'
            },
            {
                name: 'Nido para perico y bengalí', //hay uno que es nido y otro que es casita
                description: 'Nidos y casitas para pájaros', 
                categoryId: 10,
                animal: 'Pájaros'
            },
            {
                name: 'Bebederos para pájaros', 
                description: 'Bebedero que se pone dentro de la jaula para pájaros', 
                categoryId: 15,
                animal: 'Pájaros'
            },
            {
                name: 'Calcio para pájaros', 
                description: 'Suplemento nutricional crucial para el desarrollo óseo, la formación de huevos y el correcto funcionamiento del sistema nervioso y muscular.', 
                categoryId: 9,
                animal: 'Pájaros'
            },
            {
                name: 'Nido para canario normal', 
                description: 'Nido para canario sin soporte', 
                categoryId: 10,
                animal: 'Pájaros'
            },
            {
                name: 'Nido para canario con soporte', 
                description: 'Nido para que incluye soporte', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero Triandular', 
                description: 'Comedero en forma de triángulo', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero Media Luna G', 
                description: 'Comedero en forma de media luna grande', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero Redondo Sencillo',  //hay grande y pequeño
                description: 'Comedero en forma de círculo sin soporte', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero Redondo con Soporte', 
                description: 'Comedero en forma de círculo con soporte', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero de Aluminio', 
                description: 'Comdedero circular de aluminio', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero con rejilla', //hay grande y pequeño 
                description: 'Comedero con rejilla incluida', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero Doble', 
                description: 'Comedero con apertura para dos pájaros', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Comedero Triple', 
                description: 'Comedero con apertura para tres pájaros', 
                categoryId: 16,
                animal: 'Pájaros'
            },
            {
                name: 'Juegos de jaulas', //Duh son 4 tipos desde la #2 hasta la #5
                description: 'Cuatro tamaño de jaulas', 
                categoryId: 13,
                animal: 'Pájaros'
            },
            {
                name: 'Punteras',
                description: 'Punteras para las varas de las jaulas', 
                categoryId: 13,
                animal: 'Pájaros'
            },
            {
                name: 'Varas para pájaros',
                description: 'Varas para poner dentro de las jaulas ', 
                categoryId: 13,
                animal: 'Pájaros'
            },
            {
                name: 'Marbel Aid', 
                description: 'Tratamientos de diarrea, resfriado y perdida del apetito', 
                categoryId: 11,
                animal: 'Pájaros'
            },{
                name: 'AD3', 
                description: 'Sirve para activar el crecimiento y la postura', 
                categoryId: 11,
                animal: 'Pájaros'
            },{
                name: 'Aviovitamina', 
                description: 'Complejo vitaminico especial para la mida', 
                categoryId: 11,
                animal: 'Pájaros'
            },{
                name: 'Tonico Vigorizador', 
                description: 'Esta hecho a basee de vitamina B1, B2E, etc', 
                categoryId: 11,
                animal: 'Pájaros'
            },{
                name: 'Calcio liquido', 
                description: 'Sirve para el desarrollo de pichones y aves reporductoras, contra la debilidad debido a la falta de calcio', 
                categoryId: 11,
                animal: 'Pájaros'
            },
            {
                name: 'Tetero para cachorros', 
                description: 'Ayuda al apareamiento', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Collar Lazo Ahogo', 
                description: 'Collar de ahogo para perros (viene de varios colores)', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Cepillos', 
                description: 'Cepillo para los dientes de los perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Cepillo Sliker G', 
                description: 'Cepillo para peinar y sacar pelo a los perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Cortauñas', 
                description: 'Cortauñas para perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Palas recogedoras', 
                description: 'Pala para recoger las heces de los perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Bolsas', 
                description: 'Bolsas para las heces de los perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Correa retractil', 
                description: 'Correa extensible y retractil para perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Comedero doble para perros', //viene grande y pequeño
                description: 'Comedero doble para los perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Bosales Copa', 
                description: 'Bosales para perros con diferentes motivos', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Loción para perros', 
                description: 'Lociones corporales para perros', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Indicador de lugar', 
                description: 'Gotas para indicar el lugar donde hacer sus necesidades', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Carnaza', 
                description: 'Carnaza para perros por kilo', 
                categoryId: 12,
                animal: 'Perros'
            },
            {
                name: 'Alimento para pájaros', 
                description: 'Alimento granulado para pájaros', 
                categoryId: 13,
                animal: 'Pájaros'
            },
            {
                name: 'Vita Hamster', 
                description: 'Alimento surtido para hamsters',
                categoryId: 8, 
                animal: 'Hamsters'
            },
            {
                name: 'Juguetes para gatos', 
                description: 'Juguete con ratón para gato',
                categoryId: 17, 
                animal: 'Gatos'
            },
            {
                name: 'Huesos para perros', 
                description: 'Huesos para perros de diferentes tamaños', //1,2 ; 2,3 ; 3,4 ; 4,5 
                categoryId: 17, 
                animal: 'Gatos'
            },
            

        ]);
        // products.forEach((product, index) => {
        //     if (!product.animal) {
        //         console.log(`❌ ERROR en el producto #${index + 1}: Falta el campo "animal"`, product);
        //     }
        // });
        
        console.log('Products created');

        const images = await Image.bulkCreate([
            { url: 'https://i.ibb.co/7t9qJg1/Tetra-Color.jpg', productId: 1 },
            { url: 'https://i.ibb.co/1zV7V7m/Aqua-Max.jpg', productId: 2 },
            { url: 'https://i.ibb.co/3fVZ6z8/Nutripez.jpg', productId: 3 },
            { url: 'https://i.ibb.co/1zV7V7m/Aqua-Max.jpg', productId: 4 },
            { url: 'https://i.ibb.co/7t9qJg1/Tetra-Color.jpg', productId: 5 },
            { url: 'https://i.ibb.co/3fVZ6z8/Nutripez.jpg', productId: 6 },
            { url: 'https://i.ibb.co/1zV7V7m/Aqua-Max.jpg', productId: 7 },
            { url: 'https://i.ibb.co/7t9qJg1/Tetra-Color.jpg', productId: 8 },
            { url: 'https://i.ibb.co/3fVZ6z8/Nutripez.jpg', productId: 9 },
            { url: 'https://i.ibb.co/1zV7V7m/Aqua-Max.jpg', productId: 10 },
            { url: 'https://i.ibb.co/7t9qJg1/Tetra-Color.jpg', productId: 11 },
            { url: 'https://i.ibb.co/3fVZ6z8/Nutripez.jpg', productId: 12 },
            { url: 'https://i.ibb.co/1zV7V7m/Aqua-Max.jpg', productId: 13 },
        ]);

        console.log('Images created');

        console.log('Database seeded');
    } catch (error){
        console.log(error);
        process.exit(1);
    }
}

seedDatabase();