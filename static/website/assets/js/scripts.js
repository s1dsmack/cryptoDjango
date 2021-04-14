
//scroll to 

					$('.scroll').click(function() {
						if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
						  var target = $(this.hash);
						  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
						  if (target.length) {
							$('html,body').animate({
							  scrollTop: target.offset().top
							}, 1500);
							return false;
						  }
						}
						
					  });
					  
					  //Bootstrap 4 tooltip plugin
					  $(function () {
							  $('[data-toggle="tooltip"]').tooltip()
						});
					  
//RelaxJS parallax
				var relaxEl = $('document').find('.relax');
				if (relaxEl > 1) {
						var rellax = new Rellax('.rellax', {
							// center: true
							callback: function(position) {
							  // callback every position change
							  //console.log(position);
							}
						  });
				  }