function comentar() {
    //capturamos eñ valor del input
    const input = document.querySelector("input").value
    //crear un <p> con el valor del input    
    document.querySelector(".comentarios").innerHTML += `<p class="comentario">${input}<p>`
    // Vaciendo el valor del input 
    document.querySelector("input").value = ""
}