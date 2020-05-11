//****************************************************************************************************
//[INICIALIZACIONES]

  //Inicializacion de lineas  ------------------------------------------------------------------------
    var lineas = new Array();

    for (n=0 ; n<10 ; n++){
      lineas[n] = new Array();
    }

    actualizarViajes();
    graficas();

//****************************************************************************************************
//[BOTONES]

//Crear
      document.getElementById('crear').onclick = function crear(){
          lineas[100] = new Array();
          solucion = new Array();
          solucion = new Array();
          var n = document.getElementById('aux').value;
          var ori = document.getElementById('origen').value;
          var des = document.getElementById('destino').value;
          var tim = document.getElementById('time').value;
		  if(document.getElementById('l'+n).innerHTML == ''){
          back(ori,des,lineas[100],tiempo,viajes,tim,n);
          actualizarViajes();
          lineas[n] = solucion;
		  graficas();
		  pintarmatriz();
		  }
		  else{
			  n++;
			  alert('Ya existe una linea '+ n)
			  graficas();
			  pintarmatriz();
		  }


      }

//mostrar matriz
      document.getElementById('mostrar').onclick = function mostrar(){
        if(document.getElementById('mostrar').innerHTML == 'Mostrar Matriz'){
          document.getElementById('mostrar').innerHTML ='Ocultar Matriz';
          document.getElementById('mostrarmapa').innerHTML ='Mostrar Mapa';
          document.getElementById('tablamatriz').innerHTML = mostrarmatriz(viajes);
          pintarmatriz();
          graficas();
        }
        else{
          document.getElementById('mostrar').innerHTML ='Mostrar Matriz';
          document.getElementById('tablamatriz').innerHTML = '';
        }
      }
	  
//mostrar mapa
      document.getElementById('mostrarmapa').onclick = function mostrar(){
        if(document.getElementById('mostrarmapa').innerHTML == 'Mostrar Mapa'){
          document.getElementById('mostrar').innerHTML ='Mostrar Matriz';
          document.getElementById('mostrarmapa').innerHTML ='Ocultar Mapa';
          document.getElementById('tablamatriz').innerHTML = '<img src="./mapa.png" class="img-fluid"  alt="Responsive image">';
          pintarmatriz();
          graficas();
        }
        else{
          document.getElementById('mostrarmapa').innerHTML ='Mostrar Mapa';
          document.getElementById('tablamatriz').innerHTML = '';
        }
      }


//actualizar
      document.getElementById('actualizar').onclick = function actualizar(){
        console.log(lineas[100]);
      }





//****************************************************************************************************
