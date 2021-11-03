function reiniciar(){

    document.getElementById("container").innerHTML = "";
    
    iniciarJuego();
    

}

function iniciarJuego() {

    var palabrasLetra = crearPalabras();

    crearZonaVictoria(palabrasLetra);

  }

  function crearContenedorPalabras(palabra){

    var div = document.createElement("div");
    div.innerText = palabra;
    div.id = palabra;
    document.getElementById("container").appendChild(div);

  }

  function mostrarLetra(letra){

    document.getElementById("letra").innerText = letra;

  }


  function crearPalabras(){

    var palabras = ["Andrés","Borja","Kike","Alba","Lulo"]
    var letra = generarLetra();
    mostrarLetra(letra);
    var palabrasLetra = []

    for(palabra of palabras){

            crearContenedorPalabras(palabra);

            if(palabra.startsWith(letra)){

                $( "#" + palabra ).addClass("victoria")
                $( "#" + palabra ).draggable();
                palabrasLetra.push("." + "victoria");
            }else{

                $( "#" + palabra ).draggable();
                $( "#" + palabra ).addClass("derrota")
            }
    }

    return palabrasLetra;

  }

  function crearContenedorZonaVictoria(){

    var divDrop = document.createElement("div");
    divDrop.innerHTML = "<p>Soltar aquí</p>"
    divDrop.id = "droppable";
    divDrop.className = "ui-widget-header"
    document.getElementById("container").appendChild(divDrop);

  }


  function crearZonaVictoria(palabrasLetra){

    crearContenedorZonaVictoria(); 

    var cont = 0;

    $( "#droppable" ).droppable({
        accept: ".victoria",
        drop: function( event, ui ) {

        var id = ui.draggable.attr('id');
        $("#" + id).draggable('disable');
        cont++;

          if(cont === palabrasLetra.length ){
            $( this)
            .addClass( "ui-state-highlight" )
            .find( "p" )
              .html( "FINISH!" );

        }}
      });

  }



  function generarLetra(){

        var arr = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
        var letra ='';
       
        letra =arr[Math.floor(Math.random()*26)];
        
        return letra;
  }

  iniciarJuego();