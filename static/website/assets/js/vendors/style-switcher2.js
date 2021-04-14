(function($)
	{
		//  All Alternate stylesheets Selector
		var $links = $('link[rel*=alternate][title]');
		
		$('body').prepend('<div id="toolbar" class="mt-3 m-shadow-32 input-group active"><div class="input-group-prepend"><button role="button" id="style-button" class="btn btn-sm btn-primary btn-rised"><i class="fa fa-cog" aria-hidden="true"></i></button></div> <select class="custom-select" id="css-selector"></select></div>');
		var options= '<option value="">Select Style:</option>';
		$links.each(function(index,value){
			options +='<option value="'+$(this).attr('href')+'">'+$(this).attr('title')+'</option>';
			
			
		});
		$links.remove();
		var baseUrl = $('#demo-switcher').attr('href')
		$("#theme-download-btn").attr("href", baseUrl);
		$('#css-selector').append(options)
			.bind('change',function(){
			//$('link[rel*=jquery]').remove();
			$('#demo-switcher').attr('href', $(this).val());
			var url = $("#css-selector option:selected").html();
			$("#theme-download-btn").attr("href", "");
			$("#theme-download-btn").attr("href", "http://demo.bootstraptor.com/bootswatch/" + url + ".zip");
		});
		setTimeout(function(){ 
			$('#toolbar').removeClass('active');
		}, 20500);
		$('#style-button').off('click').on('click', function(e){
			event.preventDefault(e)
			$('#toolbar').toggleClass('active');
		})
		
		
	}
)(jQuery);