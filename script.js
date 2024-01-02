// Arreglo con todos los productos

let productosSeleccionados = [
    {
        nombreProducto: 'Botas de mujer',
        precioProducto: 0
    },
    {
        nombreProducto: 'Bufanda',
        precioProducto: 0
    },
    {
        nombreProducto: 'Campera (cuero)',
        precioProducto: 0
    },
    {
        nombreProducto: 'Campera (jean)',
        precioProducto: 0
    },
    {
        nombreProducto: 'Cinturon',
        precioProducto: 0
    },
    {
        nombreProducto: 'Zapatos',
        precioProducto: 0
    }
];

// Icono Carrito

const botonCarrito = document.querySelector('.icono-carrito');
const cajaProductos = document.querySelector('.agregar-productos');

// Funcion creadora de la clase que despliega el carrito de las compras

botonCarrito.addEventListener('click', function() {

    cajaProductos.classList.toggle('nueva-clase-agregar-productos');

});

// Variables y funciones agregadoras de productos  

// Producto: BOTAS

const botas = document.querySelector('.botas');

botas.onclick = function() {

    cajaProductos.classList.add('nueva-clase-agregar-productos');

    for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Botas de mujer') { 
                productosSeleccionados[i].precioProducto += 50;
            }
        }

    document.querySelector('.producto-uno').style.display = 'flex';
    document.querySelector('.producto-uno').style.padding = '0.5rem 1rem';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Botas de mujer') {
                var dineroBotas = productosSeleccionados[i].precioProducto;
            }
        }

    document.querySelector('.producto-uno').innerHTML = `<div><p>Botas de mujer</p><p>Precio: .................................................. $ ${dineroBotas}</p></div>
    <p class="cancelacion-producto uno">❌</p>`;

    document.querySelector('.uno').onclick = function() {

        document.querySelector('.producto-uno').style.display = 'none';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Botas de mujer') {
                productosSeleccionados[i].precioProducto = 0;
            }
        }
    }
}

// Producto: BUFANDA

const bufanda = document.querySelector('.bufanda');

bufanda.onclick = function() {

    cajaProductos.classList.add('nueva-clase-agregar-productos');

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Bufanda') { 
                productosSeleccionados[i].precioProducto += 25;
            }
        }

    document.querySelector('.producto-dos').style.display = 'flex';
    document.querySelector('.producto-dos').style.padding = '0.5rem 1rem';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Bufanda') {
                var dineroBufanda = productosSeleccionados[i].precioProducto;
            }
        }

    document.querySelector('.producto-dos').innerHTML = `<div><p>Bufanda</p><p>Precio: .................................................. $ ${dineroBufanda}</p></div>
    <p class="cancelacion-producto dos">❌</p>`;

    document.querySelector('.dos').onclick = function() {

        document.querySelector('.producto-dos').style.display = 'none';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Bufanda') {
                productosSeleccionados[i].precioProducto = 0;
            }
        }
    }
}

// Producto: CAMPERA DE CUERO

const camperaCuero = document.querySelector('.campera-cuero');

camperaCuero.onclick = function() {

    cajaProductos.classList.add('nueva-clase-agregar-productos');

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Campera (cuero)') { 
                productosSeleccionados[i].precioProducto += 60;
            }
        }

    document.querySelector('.producto-tres').style.display = 'flex';
    document.querySelector('.producto-tres').style.padding = '0.5rem 1rem';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Campera (cuero)') {
                var dineroCamperaCuero = productosSeleccionados[i].precioProducto;
            }
        }

    document.querySelector('.producto-tres').innerHTML = `<div><p>Campera (cuero)</p><p>Precio: .................................................. $ ${dineroCamperaCuero}</p></div>
    <p class="cancelacion-producto tres">❌</p>`;

    document.querySelector('.tres').onclick = function() {

        document.querySelector('.producto-tres').style.display = 'none';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Campera (cuero)') {
                productosSeleccionados[i].precioProducto = 0;
            }
        }
    }
}

// Producto: CAMPERA DE JEAN

const camperaJean = document.querySelector('.campera-jean');

camperaJean.onclick = function() {

    cajaProductos.classList.add('nueva-clase-agregar-productos');

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Campera (jean)') {
                productosSeleccionados[i].precioProducto += 50;
            }
        }

    document.querySelector('.producto-cuatro').style.display = 'flex';
    document.querySelector('.producto-cuatro').style.padding = '0.5rem 1rem';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Campera (jean)') {
                var dineroCamperaJean = productosSeleccionados[i].precioProducto;
            }
        }

    document.querySelector('.producto-cuatro').innerHTML = `<div><p>Campera (jean)</p><p>Precio: .................................................. $ ${dineroCamperaJean}</p></div>
    <p class="cancelacion-producto cuatro">❌</p>`;

    document.querySelector('.cuatro').onclick = function() {

        document.querySelector('.producto-cuatro').style.display = 'none';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Campera (jean)') {
                productosSeleccionados[i].precioProducto = 0;
            }
        }
    }
}

// Producto: CINTURON

const cinturones = document.querySelector('.cinturones');

cinturones.onclick = function() {

    cajaProductos.classList.add('nueva-clase-agregar-productos');

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Cinturon') {
                productosSeleccionados[i].precioProducto += 20;
            }
        }

    document.querySelector('.producto-cinco').style.display = 'flex';
    document.querySelector('.producto-cinco').style.padding = '0.5rem 1rem';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Cinturon') {
                var dineroCinturon = productosSeleccionados[i].precioProducto;
            }
        }

    document.querySelector('.producto-cinco').innerHTML = `<div><p>Cinturon</p><p>Precio: .................................................. $ ${dineroCinturon}</p></div>
    <p class="cancelacion-producto cinco">❌</p>`;

    document.querySelector('.cinco').onclick = function() {

        document.querySelector('.producto-cinco').style.display = 'none';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Cinturon') {
                productosSeleccionados[i].precioProducto = 0;
            }
        }
    }
}

// Producto: ZAPATOS

const zapatos = document.querySelector('.zapatos');

zapatos.onclick = function() {

    cajaProductos.classList.add('nueva-clase-agregar-productos');

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Zapatos') {
                productosSeleccionados[i].precioProducto += 40;
            }
        }

    document.querySelector('.producto-seis').style.display = 'flex';
    document.querySelector('.producto-seis').style.padding = '0.5rem 1rem';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Zapatos') {
                var dineroZapatos = productosSeleccionados[i].precioProducto;
            }
        }

    document.querySelector('.producto-seis').innerHTML = `<div><p>Zapatos</p><p>Precio: .................................................. $ ${dineroZapatos}</p></div>
    <p class="cancelacion-producto seis">❌</p>`;

    document.querySelector('.seis').onclick = function() {

        document.querySelector('.producto-seis').style.display = 'none';

        for(let i = 0; i < productosSeleccionados.length; i++) {
            if(productosSeleccionados[i].nombreProducto == 'Zapatos') {
                productosSeleccionados[i].precioProducto = 0;
            }
        }
    }
}

// Función que quita los elementos seleccionados y los coloca en un nuevo arreglo

let total_a_pagar;

document.querySelector('#btn-compra').addEventListener('click', function() {

    total_a_pagar = productosSeleccionados.filter(producto => {
        return producto.precioProducto > 0;
    });
});

