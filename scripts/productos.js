let productoss = [
  {id: 1, img:"../images/PicoHierro.webp", nombre: "Pico Hierro", precio: 4},
  {id: 2, img:"../images/Paja.webp", nombre: "paja ", precio: 2},
  {id: 3, img:"../images/Torta.webp", nombre: "Torta", precio: 1},
];

function mostrarProductos(){
  let product = document.getElementById("productos");
  product.innerHTML = "";
  for (const producto of productoss){
    product.innerHTML += `
    <div class="caluga">
      <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
      <h2>${producto.nombre}</h2>
      <p>${producto.precio}</p>
      <a href="producto.html?id=${producto.id}" class="btn btn-primary">Ver más</a>
    </div>
    `;
  }
}

function mostrarProducto() {
 let urlParams = new URLSearchParams(window.location.search);
 let id = urlParams.get("id");
 let producto = productoss.find(p => p.id == id);

 if (producto) {
  let product = document.getElementById("producto");
  product.innerHTML = `
   <div class="caluga">
    <img class="caluga-img" src="${producto.img}" alt="${producto.nombre}">
    <h2>${producto.nombre}</h2>
    <p>${producto.precio}</p>
   </div>
  `;
 }
}

function agregarProductoPi(){
  document.getElementById("productosPi").innerHTML = "<div class='producto' id='productoPi'><h2>Pico de Hierro</h2><img src='../images/PicoHierro.webp' width='120' alt='Pico'><p>Precio: 4 <img src='../images/Esmeraldas.webp' width='20' alt='Esmeraldas'></p><button>Quitar</button></div>";
}
function agregarProductoPa(){
  document.getElementById("productosPa").innerHTML = "<div class='producto' id='productoPa'><h2>Paja</h2><img src='../images/Paja.webp' width='120' alt='Paja'><p>Precio: 2 <img src='../images/Esmeraldas.webp' width='20' alt='Esmeraldas'></p><button>Quitar</button></div>";
}
function agregarProductoTo(){
  document.getElementById("productosTo").innerHTML = "<div class='producto' id='productoTo'><h2>Torta</h2><img src='../images/Torta.webp' width='120' alt='Torta'><p>Precio: 1 <img src='../images/Esmeraldas.webp' width='20' alt='Esmeraldas'></p><button>Quitar</button></div>";
}