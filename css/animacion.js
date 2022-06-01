window.addEventListener("scroll",function(){
    var header = this.document.querySelector("header");
    header.classList.toggle("Abajo",this.window.scrollY>0)
})

const comentar = () => {
    impri= JSON.parse(localStorage.getItem("auxComentario"))
    let comentarioP = document.getElementById("contenidoID").value 

    comentarioP = (comentarioP == "") ? "ㅤ" : comentarioP

    document.getElementById("simulacionComentario").innerHTML = comentarioP
console.log(impri);
   impri.push({impri: comentarioP})
   
  

    
    localStorage.setItem("auxComentario",JSON.stringify(impri))
    
}

