$(window).scroll(function() {
    var $formulario = $('#formulario');
    var window_offset = $formulario.offset().top - $(window).scrollTop();
    if(window_offset< -114) {
        if($('#calendarHidden').val() == 1) {
            return false;
        }
        $('#buybar').fadeIn();
    } else {
        $('#buybar').fadeOut();
    }
});

		var url = window.location.href;

		var options = {
		    	type: "delay",
		    	time: 3500,
		    	scripts: [
					"https://connect.facebook.net/en_US/sdk.js",
					"https://addtocalendar.com/atc/1.5/atc.min.js"
				],
		    	success: function () {
		    		$('#addtocalendarContainer').fadeIn();
		    		$('#facebookcomments').fadeIn();
					FB.init({
						appId				: '533016930075522',
						autoLogAppEvents	: true,
						status				: true,
						xfbml				: true,
						version				: 'v2.9'
					 });   	
				}
			};
		$.lazyscript(options);

		$('#fbshare').click(function() {
			FB.ui({
				method: 'share',
				display: 'popup',
				href: url
			}, function(response){});
		});

$('#tw-share').click(function() {
    window.open('https://twitter.com/intent/tweet?url=' + url, '_blank', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});


$('#google-share').click(function() {
    window.open('https://plus.google.com/share?url=' + url, '_blank', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
});

			$('#tw-share').click(function() {
				 window.open('https://twitter.com/intent/tweet?url=' + url, '_blank', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
			});


			$('#google-share').click(function() {
				window.open('https://plus.google.com/share?url=' + url, '_blank', 'height=450, width=550, top=' + ($(window).height() / 2 - 275) + ', left=' + ($(window).width() / 2 - 225) + ', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');	
			});

			function formatComma(x) {
			    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
			}
			
			//	Buttons design
			$('#edit, #control, #extra, #config, #aditional, #sold').click(function() {
				$(this).addClass('shake animated');
				$(this).fadeOut(2000);
			});

			// 	Tooltip (design);
			//	$('#plan').modal();

			//	Ver más, Ver menos (design);

		         		

	    	$('#artifice').click(function() {
		    	var minimocaracter 		= 400;
		    	console.log(minimocaracter);
		    	console.log($('.event-information').html());
		    	$('.event-information').each(function() {
		        	var content 		= $(this).html();

		         	if(content.length > minimocaracter) {
		 				var vermas = '<a href="javascript:void(0)" id="vermas" style="font-weight: bold;" class="arial">(Seguir leyendo)</a>';
		 				var vermenos = '<a href="javascript:void(0)" id="vermenos" class="jn-weight-bold ju-block arial">(Ocultar)</a>';
			 			var todo = '<p class="arial">' + content + vermenos + '</p>';
			            var pedazo = '<p class="event-information arial">' + content.substr(0, minimocaracter) + '... ' +  vermas + '</p>';
		            	var h = content.substr(minimocaracter, content.length - minimocaracter);
		            	$(this).html(pedazo);

						$(document).on('click', '#vermas', function() {
			            	$('.event-information').html(todo);
						});
			            $(document).on('click', '#vermenos', function() {
			            	$('.event-information').html(pedazo);
			            	$('body,html').animate({scrollTop : 0}, 1000)
						});
		        	}
		    	});			
	    	});

	    	setTimeout(function() {
	    		$('#artifice').trigger('click');
	    	}, 1500);
