(function($) {
    var clicks = 0;

    $(document).ready(function(){
    $('#somevid').get(0).pause();
      });

    $('button').on('click', function() {
        clicks++;
        var percent = Math.min(Math.round(clicks / 3 * 100), 100);
        $('.percent').width(percent + '%');
        $('.number').text(percent + '%');
    });


    $('.facebook').on('click', function() {
        var w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);


            if ((screen.width < 480) || (screen.height < 480)) {
                window.open ('https://www.facebook.com/share.php?u=https:/www.ion-book.com', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
            } else {
                window.open ('https://www.facebook.com/share.php?u=https:/www.ion-book.com', '', 'toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width='+w+', height='+h+', top='+top+', left='+left);
            }
    });

    $('.twitter').on('click', function() {
        var loc = encodeURIComponent('https:/www.ion-book.com'),
                title = "Mira este sitio para aprender a hacer Apps con Javascript! — ",
                w = 580, h = 300,
                left = (screen.width/2)-(w/2),
                top = (screen.height/2)-(h/2);

            window.open('http://twitter.com/share?text=' + title + '&url=' + loc, '', 'height=' + h + ', width=' + w + ', top='+top +', left='+ left +', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');
    });

})(jQuery);

// Modal script
(function($) {
	$(function(){

	var appendthis =  ("<div class='modal-overlay js-modal-close'></div>");

		$('button[data-modal-id]').click(function(e) {
			e.preventDefault();
			$("body").append(appendthis);
			$(".modal-overlay").fadeTo(500, 0.9);
			//$(".js-modalbox").fadeIn(500);
			var modalBox = $(this).attr('data-modal-id');
			$('#'+modalBox).fadeIn($(this).data());
			// Show a specific class when opened
			$('#'+modalBox).addClass('opened');
      if (($('.modal-box.opened').find('video').attr('autoplay') === 'autoplay')) {
        $('.modal-box.opened').find('video').get(0).play();
      }
		});

	$(".js-modal-close, .modal-overlay").click(function() {
		$(".modal-box, .modal-overlay").fadeOut(500, function() {
			$(".modal-overlay").remove();
		});
		// Remove the specific class
		$('.modal-box').removeClass('opened');
		// Stop the video from playing
		$('.modal-box').find('video').each(function() {
				$(this).get(0).pause();
		});
	});

	$(window).resize(function() {
		$(".modal-box").css({
			//top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
			//left: ($(window).width() - $(".modal-box").outerWidth()) / 2

			top: ($(window).height() - $(".modal-box").outerHeight()) / 2,
			left: ($(window).width() - $(".modal-box").outerWidth()) / 2

		});
	});

	$(window).resize();

	});
})(jQuery); 