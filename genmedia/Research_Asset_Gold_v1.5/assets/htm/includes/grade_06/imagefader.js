 var imgs = [
		'imgmod01/img_01.jpg',
	    'imgmod01/img_02.jpg',
	    'imgmod01/img_03.jpg',
		'imgmod01/img_04.jpg',
		'imgmod01/img_12.jpg'
		];
        var cnt = imgs.length;

        $(function() {
            setInterval(Slider, 5000);
        });

        function Slider() {
        $('#imageSlide').fadeOut("slow", function() {
            $(this).attr('src', imgs[(imgs.length++) % cnt]).fadeIn("slow");
        });
        }
		
		 var imgs1 = [
	    'imgmod01/img_05.jpg',
	    'imgmod01/img_06.jpg',	    
		'imgmod01/img_08.jpg',
		'imgmod01/img_09.jpg',
		'imgmod01/img_10.jpg',
		'imgmod01/img_11.jpg'
				
		];
        var cnt = imgs1.length;

        $(function() {
            setInterval(Slider1, 6000);
        });

        function Slider1() {
        $('#imageSlide1').fadeOut("normal", function() {
            $(this).attr('src', imgs1[(imgs1.length++) % cnt]).fadeIn("normal");
        });
        }