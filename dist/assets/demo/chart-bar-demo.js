// Set new default font family and font color to mimic Bootstrap's default styling
Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';


// Bar Chart Example
function graficas(){
	// Pie Chart Example
var ctx11 = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx11, {
  type: 'pie',
  data: {
    labels: ["Satisfecha", "Insatisfecha"],
    datasets: [{
      data: [sumamatriz(viajes2)-sumamatriz(viajes), sumamatriz(viajes)],
      backgroundColor: ['#3AA655', '#D92121'],
    }],
  },
});
      var ctx = document.getElementById("myBarChart");
      var myLineChart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: ["Linea 1","Linea 2","Linea 3","Linea 4","Linea 5","Linea 6","Linea 7","Linea 8","Linea 9"],
          datasets: [{
            label: "Viajes",
            backgroundColor: "#7eb2c1",
            borderColor: "white",
            data: [document.getElementById('l0.dem').innerHTML,document.getElementById('l1.dem').innerHTML,document.getElementById('l2.dem').innerHTML,document.getElementById('l3.dem').innerHTML,document.getElementById('l4.dem').innerHTML,document.getElementById('l5.dem').innerHTML,document.getElementById('l6.dem').innerHTML,document.getElementById('l7.dem').innerHTML,document.getElementById('l8.dem').innerHTML],
          }],
        },
        options: {
          scales: {
            xAxes: [{
              time: {
                unit: 'Pasajeros'
              },
              gridLines: {
                display: false
              },
              ticks: {
                maxTicksLimit: 10
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 500,
                maxTicksLimit: 10
              },
              gridLines: {
                display: true
              }
            }],
          },
          legend: {
            display: true
          }
        }
      });
	  
	        var ctx3 = document.getElementById("myBarChart3");
      var myLineChart = new Chart(ctx3, {
        type: 'bar',
        data: {
          labels: ["Linea 1","Linea 2","Linea 3","Linea 4","Linea 5","Linea 6","Linea 7","Linea 8","Linea 9"],
          datasets: [{
            label: "Viajes",
            backgroundColor: "#7eb2c1",
            borderColor: "white",
            data: [satisfecha[0],satisfecha[1],satisfecha[2],satisfecha[3],satisfecha[4],satisfecha[5],satisfecha[6],satisfecha[7],satisfecha[8]],
          }],
        },
        options: {
          scales: {
            xAxes: [{
              time: {
                unit: 'Pasajeros'
              },
              gridLines: {
                display: false
              },
              ticks: {
                maxTicksLimit: 10
              }
            }],
            yAxes: [{
              ticks: {
                min: 0,
                max: 500,
                maxTicksLimit: 10
              },
              gridLines: {
                display: true
              }
            }],
          },
          legend: {
            display: true
          }
        }
      });

        var ctx2 = document.getElementById("myBarChart2");
        var myLineChart2 = new Chart(ctx2, {
          type: 'bar',
          data: {
            labels: ["Linea 1","Linea 2","Linea 3","Linea 4","Linea 5","Linea 6","Linea 7","Linea 8","Linea 9"],
            datasets: [{
              label: "Minutos",
              backgroundColor: "#7eb2c1",
              borderColor: "white",
              data: [document.getElementById('l0.km').innerHTML,document.getElementById('l1.km').innerHTML,document.getElementById('l2.km').innerHTML,document.getElementById('l3.km').innerHTML,document.getElementById('l4.km').innerHTML,document.getElementById('l5.km').innerHTML,document.getElementById('l6.km').innerHTML,document.getElementById('l7.km').innerHTML,document.getElementById('l8.km').innerHTML],
            }],
          },
          options: {
            scales: {
              xAxes: [{
                time: {
                  unit: 'Minutos'
                },
                gridLines: {
                  display: false
                },
                ticks: {
                  maxTicksLimit: 10
                }
              }],
              yAxes: [{
                ticks: {
                  min: 0,
                  max: 50,
                  maxTicksLimit: 10
                },
                gridLines: {
                  display: true
                }
              }],
            },
            legend: {
              display: true
            }
          }
        });
    }
