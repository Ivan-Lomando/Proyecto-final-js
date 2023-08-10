const pintarCarrito = () =>{
    modalContainer.innerHTML = "";
    modalContainer.style.display = "flex";
    const modalHeader = document.createElement("div");
    modalHeader.className = "modal-header"
    modalHeader.innerHTML = ` 
    <h1 class="modal-header-title">Carrito.</h1>
    `;
    modalContainer.append(modalHeader);
    
    const modalButton = document.createElement("h1");
    modalButton.innerText = "X";
    modalButton.className = "modal-header-button";
    
    modalButton.addEventListener("click", ()=>{
        modalContainer.style.display = "none"

    })

    modalHeader.append(modalButton);


    carrito.forEach((product)=>{
        let carritoContent = document.createElement("div");
        carritoContent.className = "modal-content";
        carritoContent.innerHTML = ` 
        <img src="${product.img}">
        <h3>${product.nombre}</h3>
        <p>${product.precio} $ </p>
        <p>Cantidad: ${product.cantidad}</p>
        <p>Total: ${product.cantidad * product.precio}</p>
        <span class="delete-product">X</span>
        `;

        modalContainer.append(carritoContent);
        
        let eliminar = carritoContent.querySelector(".delete-product");
        eliminar.addEventListener("click", ()=>{
            elimirarProducto(product.id);

        });
     //   let eliminar = document.createElement("span");
       // eliminar.innerText = "X";
       // eliminar.className = "delete-product";
        //carritoContent.append(eliminar);


        //eliminar.addEventListener("click",elimirarProducto);

    });



    const total = carrito.reduce((acc, el)=> acc + el.precio * el.cantidad, 0);
    const totalBuying = document.createElement("div");
    totalBuying.className = "total-content"
    totalBuying.innerHTML = `total a pagar: ${total} $ `;
    modalContainer.append(totalBuying);




};
verCarrito.addEventListener("click", pintarCarrito);

const elimirarProducto = (id) => {
    const foundId = carrito.find((element)=> element.id === id);

    carrito = carrito.filter((carritoId)=>{
        return carritoId !== foundId;

    });
    pintarCarrito();
    saveLocal();

};