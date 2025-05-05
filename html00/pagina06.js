const Picture = (id) => {
    // return `<figure onclick="mensaje(${id})">
    return `<figure >
        <img src="https://picsum.photos/id/${id}/200/200" alt="" class="redonda">
        <figcaption>John</figcaption>
    </figure>`
}

const p = document.getElementById("app")
p.innerHTML = Picture(1) + Picture(2) +Picture(3)

const mensaje = (id) => {alert('hola '+id)}

const lista= app.querySelectorAll('img')
console.log(lista)
for (let i = 0; i < lista.length; i++) {
    console.log(lista[i])
    lista[i].addEventListener("click", 
        () => {
            lista[i].classList.toggle("redonda")
        }
    )
}

