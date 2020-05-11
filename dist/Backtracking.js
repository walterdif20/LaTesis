
var solucion = new Array();
var satisfecha = new Array();

//Backtracking
  function back(origen,destino,camino,tiempo,viajes,maxtime,n){
      camino.push(origen);
      if(origen==destino){
        //console.log('hi');
        //console.log(camino);
        console.log(solucion);
        console.log('utilidad camino es: ' + utilidad(camino));
        console.log('utilidad solucion es: ' + utilidad(solucion));
        if(utilidad(camino)>utilidad(solucion)){
            reemplazar(camino);
            document.getElementById('l'+n).innerHTML = solucion.join(" - ");
            document.getElementById('l'+n+'.ut').innerHTML = utilidad(solucion);
            document.getElementById('l'+n+'.dem').innerHTML = sumaviajes(solucion,viajes);
            document.getElementById('l'+n+'.km').innerHTML = sumatiempo(solucion,tiempo)/60;
			satisfecha[n]= sumaviajes(solucion,viajes2);
            console.log('solucion mejor');
            console.log(solucion);
            graficas();
        }
      }
      else{
      //console.log(origen);
        vecinos(origen,conectividad).forEach((vecino, i) => {
          if(sumatiempo(camino,tiempo)+tiempo[vecino][destino]<=maxtime && !contiene(camino,vecino)){
            back(vecino,destino,camino,tiempo,viajes,maxtime,n);
            camino.pop();
          }
        });

      }
  }

  //Muestra matriz viajes
  function actualizarViajes(){
    solucion.forEach((i1, i) => {
      solucion.forEach((i2, i) => {
            viajes[i1][i2]=0;
      });
    });
  }



//reemplazar
function reemplazar(camino){
  solucion = new Array;
  camino.forEach((nodo, i) => {
    solucion.push(nodo);

  });
}

//Limpiar
function contiene(camino, vecino){
  var bool = false;
  camino.forEach((v, i) => {
    if(v==vecino){
      bool = true;
    }
  });
  return bool;
}

//Suma de viajes
  function sumaviajes(camino,viajes){
    var suma = 0;
      camino.forEach((i1, i) => {
        camino.forEach((i2, i) => {
            suma += viajes[i1][i2];
        });
      });
      return suma;
  }

  //Borrar viajes
    function borraviajes(camino){
      camino.forEach((i1, i) => {
        camino.forEach((i2, i) => {
            if (i1 != i2){
              viajes[i1][i2]=0;
              console.log(viajes[i1][i2]);
          }
        });
      });
    }

//utilidad
function utilidad(camino){
  if(camino.length<2){
    return 0;
  }
  else{
    return sumaviajes(camino, viajes) / Math.pow(sumatiempo(camino, tiempo),1.2);
  }
}



//Suma de tiempos
  function sumatiempo(camino,tiempo){
    if(camino.length<2){
      return 1;
    }
    else{
      var suma = 0;
      for (i=0 ; i<camino.length-1 ; i++){
        suma += tiempo[camino[i]][camino[i+1]];
      }
      return suma;
    }
  }

//Vecinos de origen
  function vecinos(zona,conectividad){
    var vecino = new Array();
    for (i=1 ; i<36 ; i++){
      if(conectividad[zona][i] > 0){
        vecino.push(i);
      }
    }
    return vecino;
  }

  //mostrar matriz
    function mostrarmatriz(matriz){
      var inn='<tr><th style="padding: .25rem;line-height: .25;text-align: center;background: #373a3c;color:white;vertical-align:center;"><big>Zona</big></th>';
      //encabezado
      for (i=1; i<36 ; i++){
        inn+= '<th style="padding: .25rem;line-height: .5;text-align: center;background: #373a3c;color:white;"><big>'+i+'</big></th>';
      }
      inn+= '</tr>';
      //contenido
      for (i=1; i<36; i++){
        inn+= '<tr><th style="padding: .25rem;line-height: .5;text-align: center; background: #373a3c;color:white;"><big>'+i+'</big></th>';
        for(j=1; j<36; j++){
          inn+= '<td id="'+i+'.'+j+'" style="padding: .25rem;line-height: .5;text-align: center;">'+matriz[i][j]+'</td>';
        }
        inn+= '</tr>';
      }
      return inn;
    }


    //pintar matriz
    function pintarmatriz(){
      for (i=1; i<36; i++){
        for(j=1; j<36; j++){
          pintarcelda(i+'.'+j);
        }
      }
    }

    //pintar matriz
    function sumamatriz(matriz){
      var sumas = 0;
      for (i=1; i<36; i++){
        for(j=1; j<36; j++){
          sumas+=matriz[i][j];
        }
      }
      return sumas;
    }


  //pintar matriz
    function pintarcelda(celda){
      if(document.getElementById(celda).innerHTML>20){
        document.getElementById(celda).style.background = '#0066FF';
        document.getElementById(celda).style.color = 'white';
      }
      else{
        if(document.getElementById(celda).innerHTML>10){
          document.getElementById(celda).style.background = '#2887C8';
          document.getElementById(celda).style.color = 'white';
        }
        else{
          if(document.getElementById(celda).innerHTML>5){
            document.getElementById(celda).style.background = '#339ACC';
            document.getElementById(celda).style.color = 'black';
          }
          else{
            if(document.getElementById(celda).innerHTML>0){
              document.getElementById(celda).style.background = '#4997D0';
              document.getElementById(celda).style.color = 'black';
            }
            else{
              document.getElementById(celda).style.background = '#93CCEA';
              document.getElementById(celda).style.color = 'black';
            }
          }
        }
      }
    }
