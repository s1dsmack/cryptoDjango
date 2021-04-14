(function($)
	{
		//  All Alternate stylesheets Selector
		var $links = $('link[rel*=alternate][title]');
		
		$('body').prepend('<div id="toolbar" class=" m-shadow-32 custom-select active"><button id="style-button" class="btn btn-sm btn-primary btn-rised"><i class="fa fa-cog" aria-hidden="true"></i></button> <select id="css-selector"></select></div>');
		var options= '<option value="">Select stylesheet:</option>';
		$links.each(function(index,value){
			options +='<option value="'+$(this).attr('href')+'">'+$(this).attr('title')+'</option>';
		});
		$links.remove();
		
		$('#css-selector').append(options)
			.bind('change',function(){
			$('link[rel*=jquery]').remove();
			$('head').append('<link rel="stylesheet jquery" href="'+$(this).val()+'" type="text/css" />');
		});
		setTimeout(function(){ 
			$('.custom-select').removeClass('active');
		}, 1500);
		$('#style-button').off('click').on('click', function(){
			$('.custom-select').toggleClass('active');
		})
		
		
	}
)(jQuery);