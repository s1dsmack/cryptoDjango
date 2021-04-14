/*
 * offcanvas menu
 */

$(function () {
  'use strict'

  $('[data-toggle="offcanvas"]').on('click', function () {
    $('.offcanvas-collapse').toggleClass('open')
  })
})

/*
 * chartjs
 */
 
  gradientChartOptionsConfiguration = {
         
        
         
          layout:{
            padding:{left:3,right:3,top:15,bottom:15}
          }
      };
	  
      var ctx = document.getElementById("myChart").getContext('2d');
	 // var gradient = ctx.createLinearGradient(0, 0, 0, 100);
		//gradient.addColorStop(0, 'rgba(242,103,46,1)');   
		//gradient.addColorStop(1, 'rgba(242,103,46,0)');
		   gradientFill = ctx.createLinearGradient(0, 170, 0, 400);
      gradientFill.addColorStop(1, "rgba(128, 182, 244, 0)");
      gradientFill.addColorStop(0, "rgba(249, 99, 59, 0.40)");
      var myChart = new Chart(ctx, {
        type: 'line',
		responsive: true,
        data: {
          labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          datasets: [{
            data: [12339, 21345, 18483, 24003, 20000, 24092, 12034],
            lineTension: 0.3,
            //fillColor : purple_orange_gradient, 
            borderColor: '#f2672e',
            borderWidth: 2,
			fill: true,
            backgroundColor: gradientFill,
          }]
        },
        options: {
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }
		//gradientChartOptionsConfiguration
		/*{
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: false
              }
            }]
          },
          legend: {
            display: false,
          }
        }*/
      });
