let productoss = [
  {id: 1, img:"../images/Paja.webp", nombre: "paja xd", precio: 2},
  {id: 2, img:"../images/PicoHierro.webp", nombre: "Pico Hierro", precio: 4},
  {id: 3, img:"../images/Torta.webp", nombre: "Torta", precio: 3},
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