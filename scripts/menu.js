const dishes = [
  {
    "name": "Tortilla de patata",
    "category": "starters",
    "image": "tortilla-pack-sincebolla-scaled.jpg",
    "price": 8.5
  },
  {
    "name": "Calamares a la romana",
    "category": "starters",
    "image": "calamares-a-la-romana.jpeg",
    "price": 10
  },
  {
    "name": "Churros o porras con chocolate",
    "category": "desserts",
    "image": "chocolate_churros_porras_madrid_p.jpg",
    "price": 6
  },
  {
    "name": "Zarangollo",
    "category": "starters",
    "image": "5632-1-zarangollo-1017-xl-668x400x80xX.jpg",
    "price": 9
  },
  {
    "name": "Marmitako",
    "category": "fish",
    "image": "marmitako3p.webp",
    "price": 12.5
  },
  {
    "name": "Croquetas de jamón",
    "category": "starters",
    "image": "servimos-las-croquetas-de-jamon-y-queso.jpg",
    "price": 9.5
  },
  {
    "name": "Gazpacho andaluz",
    "category": "starters",
    "image": "gazpacho.jpeg",
    "price": 6.5
  },
  {
    "name": "Torrijas",
    "category": "desserts",
    "image": "torrijas.jpg",
    "price": 5
  },
  {
    "name": "Menestra de verduras",
    "category": "starters",
    "image": "paso-a-paso-para-hacer-menestra-de-verduras-con-huevo-escalfado-resultado-final_fc5ba3fa_1280x720.jpg",
    "price": 9
  },
  {
    "name": "Sopa de ajo",
    "category": "starters",
    "image": "sopa-ajo-castellana.jpg",
    "price": 7.5
  },
  {
    "name": "Pulpo a feira",
    "category": "fish",
    "image": "pulpo-a-feira.jpg",
    "price": 18
  },
  {
    "name": "Paella valenciana",
    "category": "rice",
    "image": "paellavalenciana.jpg",
    "price": 20
  },
  {
    "name": "Leche frita",
    "category": "desserts",
    "image": "lechefrita.jpg",
    "price": 5.5
  },
  {
    "name": "Pisto manchego",
    "category": "starters",
    "image": "pisto-manchego-receta.jpg",
    "price": 8
  },
  {
    "name": "Arroz con leche",
    "category": "desserts",
    "image": "arrozconleche.jpeg",
    "price": 5
  },
  {
    "name": "Patatas bravas",
    "category": "starters",
    "image": "receta-patatas-bravas-mejores-original-autenticas-receta-CocinaConPoco.com-003.jpg",
    "price": 6.5
  },
  {
    "name": "Patatas a la riojana",
    "category": "starters",
    "image": "receta-patatas-riojana.jpg",
    "price": 8.5
  },
  {
    "name": "Ternasco",
    "category": "meat",
    "image": "karl6666-paletilla-ternasco-xl-1280x720x80xX.jpg",
    "price": 18.5
  },
  {
    "name": "Jamón ibérico de bellota",
    "category": "starters",
    "image": "Plato-Jamon-iberico-bellota-corte-a-cuchillo.jpg",
    "price": 25
  },
  {
    "name": "Pollo al chilindrón",
    "category": "meat",
    "image": "pollo-al-chilindron_00000000_240220145754_1200x1200.jpg",
    "price": 12
  },
  {
    "name": "Cocido madrileño",
    "category": "meat",
    "image": "cocido-madrileno-autentico.jpg",
    "price": 14.5
  },
  {
    "name": "Fabada asturiana",
    "category": "meat",
    "image": "fabada_asturiana.jpg",
    "price": 16
  },
  {
    "name": "Morcilla de burgos",
    "category": "starters",
    "image": "morcilla-burgos-delicias-burgos.jpg",
    "price": 9.5
  },
  {
    "name": "Cochinillo asado",
    "category": "meat",
    "image": "elaboracion-cochinillo-asado-al-horno-con-salsa-de-manzana-372.webp",
    "price": 25
  },
  {
    "name": "Txangurro o centollo a la donostiarra",
    "category": "fish",
    "image": "changurro.jpeg",
    "price": 22
  },
  {
    "name": "Cocido gallego",
    "category": "meat",
    "image": "cocidogallego.jpg",
    "price": 15.5
  },
  {
    "name": "Migas extremeñas",
    "category": "starters",
    "image": "migas_manchegas.jpg",
    "price": 10
  },
  {
    "name": "Escalivada",
    "category": "starters",
    "image": "escalivada-grilled-summer-vegetables.jpg",
    "price": 9
  },
  {
    "name": "Empanada gallega",
    "category": "starters",
    "image": "empanada-gallega-slices-og.jpg",
    "price": 10.5
  },
  {
    "name": "Tocinillo de cielo",
    "category": "desserts",
    "image": "tocinillodecielo.jpg",
    "price": 5
  },
  {
    "name": "Papas arrugadas con mojo picón",
    "category": "starters",
    "image": "papas-arrugadas-con-mojo-picon-241.jpg",
    "price": 8
  },
  {
    "name": "Bacalao al pil pil",
    "category": "fish",
    "image": "bacalao-pil-pil.jpg",
    "price": 15
  },
  {
    "name": "Rape rusadir",
    "category": "fish",
    "image": "rape_rasuadir.avif",
    "price": 18
  },
  {
    "name": "Calçotadas",
    "category": "starters",
    "image": "calc3a7ots-con-romesco.jpeg",
    "price": 12.5
  },
  {
    "name": "Crema catalana",
    "category": "desserts",
    "image": "cremacatalana.webp",
    "price": 6.5
  },
  {
    "name": "Gambas al ajillo",
    "category": "starters",
    "image": "gambas-al-ajillo-XL-RECIPE0917-05ade57af5194eaeba60a87b258d46f2.jpg",
    "price": 12
  },
  {
    "name": "Merluza en salsa verde",
    "category": "fish",
    "image": "Merluza-en-salsa-verde-con-almejas.jpg",
    "price": 14
  },
  {
    "name": "Arroz a la cubana",
    "category": "rice",
    "image": "arroz-cubana-tradicional.webp",
    "price": 10
  },
  {
    "name": "Ensaimada (islas baleares)",
    "category": "desserts",
    "image": "ensaimada.jpg",
    "price": 4.5
  },
  {
    "name": "Filloas",
    "category": "desserts",
    "image": "filloas-de-leche-gallegas.jpg",
    "price": 5
  },
  {
    "name": "Manitas de cordero",
    "category": "meat",
    "image": "1101_CocContigo_ManitasCordero.jpg",
    "price": 16
  },
  {
    "name": "Mousse de limón",
    "category": "desserts",
    "image": "como_hacer_mousse_de_limon_24405_orig.jpg",
    "price": 5.5
  },
  {
    "name": "Carrillera de ternera al vino tinto",
    "category": "meat",
    "image": "carrilleras-de-ternera-al-vino-tinto.jpg",
    "price": 18
  },
  {
    "name": "Chuleta de buey",
    "category": "meat",
    "image": "BUEY.jpeg",
    "price": 22
  },
  {
    "name": "Estofado",
    "category": "meat",
    "image": "ESTOFADO.jpeg",
    "price": 14
  },
  {
    "name": "Carraovejas, 2022 (Ribera del Duero)",
    "category": "wines",
    "image": "pago_de_carraovejas.webp",
    "price": 38.50
  },
  {
    "name": "Aalto, 2022 (Ribera del Duero)",
    "category": "wines",
    "image": "aalto_2022.webp",
    "price": 45.00
  },
  {
    "name": "Viña Cubillo 2016 (Rioja)",
    "category": "wines",
    "image": "viña_cubillo.webp",
    "price": 29.90
  },
  {
    "name": "Dido la Universal 2022 (Montsant)",
    "category": "wines",
    "image": "dido_la_universal.webp",
    "price": 18.00
  },
  {
    "name": "Viña Ardanza Reserva 2017 (Rioja)",
    "category": "wines",
    "image": "viñaardanza.webp",
    "price": 40.00
  },
  {
    "name": "Pétalos del Bierzo 2022 (Bierzo)",
    "category": "wines",
    "image": "petalosbierzo.webp",
    "price": 23.50
  },
  {
    "name": "Louro 2023 (Valdeorras)",
    "category": "wines",
    "image": "louro_2023.webp",
    "price": 16.00
  },
  {
    "name": "Pazo Barrantes 2021 (Rías Baixas)",
    "category": "wines",
    "image": "pazo_barrantes.webp",
    "price": 22.00
  },
  {
    "name": "Viña Barredero 2023 (Huelva)",
    "category": "wines",
    "image": "viña_barredero.webp",
    "price": 18.50
  },
  {
    "name": "Palomo Cojo 2023 (Rueda)",
    "category": "wines",
    "image": "palomo_cojo.webp",
    "price": 12.50
  },
  {
    "name": "Gotas del Mar Godello 2023 (Ribeiro)",
    "category": "wines",
    "image": "gotasdemar.webp",
    "price": 14.50
  },
  {
    "name": "Ximénez-Spinola 2021 (Jerez-Manzanilla)",
    "category": "wines",
    "image": "ximenez_spinola.webp",
    "price": 30.00
  }
]

// Variables to store current filters
let currentCategory = "all";
let currentSearch = "";
let currentPage = 1;
const itemsPerPage = 6;

const renderPagination = (totalPages) => {
    // Clear existing pagination
    $("#pagination").empty();

    // Generate pagination HTML
    for (let i = 1; i <= totalPages; i++) {
        const pageButton = `
        <div class="col-2">
            <button class="page-btn ${i === currentPage ? "active" : ""}" data-page="${i}">
                ${i}
            </button>
        </div>    
        `;
        $("#pagination").append(pageButton);
    }

    // Add click event listeners to page buttons
    $(".page-btn").on("click", function () {
        currentPage = parseInt($(this).data("page"));
        renderImages();
    });
};

const renderImages = () => {
  	// Clear the image grid
    $("#image-grid").empty();

    const filteredDishes = dishes.filter((dish) => {
          const matchesCategory = currentCategory === "all" || dish.category === currentCategory;
          const matchesSearch = dish.name.toLowerCase().includes(currentSearch.toLowerCase());
          return matchesCategory && matchesSearch;
    });

    // Calculate total pages
    const totalPages = Math.ceil(filteredDishes.length / itemsPerPage);

    // Paginate the filtered images
    const startIndex = (currentPage - 1) * itemsPerPage;
    const paginatedDishes = filteredDishes.slice(startIndex, startIndex + itemsPerPage);

  	// Generate the HTML dynamically
  	paginatedDishes.forEach((dish) => {
        const imageHTML = `
            <div class="col-12 offset-1 col-md-6 col-lg-4 mb-4">
                <div class="image-container">
                <img src="images/${dish.image}" class="img-fluid" alt="${dish.name}">
                <div class="overlay-text"><p>${dish.name}</p><p>${dish.price} €</p></div>
                </div>
            </div>
  	    `;
  	    $("#image-grid").append(imageHTML);
  	});

    // Render pagination
    renderPagination(totalPages);
}

// Function to handle button click and update active class
const handleButtonClick = () => {
    // Remove active class from all buttons
    $(".button-row-secondary button").removeClass("active");

    // Add active class to the clicked button
    $(`.button-row-secondary button[data-category="${currentCategory}"]`).addClass("active");
    currentPage = 1;

    // Render images based on the selected category
    renderImages();
};

// Add event listeners to all buttons
$(".button-row-secondary button").on("click", function () {
      currentCategory = $(this).data("category"); // Get the category from the clicked button
      handleButtonClick();
});

// Handle search input to filter by description
$("#search-input").on("input", function () {
    // Prevent default behavior (optional, e.g., if inside a form)
    event.preventDefault();

    // Update the current search string
    currentSearch = $(this).val().trim();
    currentPage = 1;

    // Re-render the images
    renderImages();
});

renderImages();