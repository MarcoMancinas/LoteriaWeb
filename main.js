
var indice = 0;
var repetir; 
var indiceanterior= 0;
var historial=[];


  function shuffleArray(imagenes) {
    for (let i = LOTERIA.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [LOTERIA[i], LOTERIA[j]] = [LOTERIA[j], LOTERIA[i]];
    }
}
function cronometro(){
  
  
     repetir = setInterval(()=>{
        document.getElementById("imagen").src=LOTERIA[indice].imagen;
        
        
        //document.getElementById("imagenchica").src=LOTERIA[indiceanterior].imagen;
        var imageContainer = document.getElementById("contenedor-imagen");
        const agregarImagen = document.createElement("img");
        if(indice != 0){
        agregarImagen.setAttribute("src",`${LOTERIA[indiceanterior].imagen}`);}
        agregarImagen.setAttribute("height", "100px");
        indiceanterior = indice;
        document.getElementById("progreso").value +=1;
        
        imageContainer.appendChild(agregarImagen);

        indice++},2500);
        
}
function iniciar()
{
    shuffleArray();
    cronometro();
    btnCorrer.disabled = true;
    btnDetener.disabled=false;

}

function recargar(){
    location.reload();
}
