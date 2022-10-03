$(document).ready(function() {

    $('#enquiryForm .candidateForm').hide(); 

	$('.selectFormType input[type="radio"]').click(function() {

        if ($(this).attr('id') == 'employer') {

            $('#enquiryForm .employerForm').show();

            $('#enquiryForm .candidateForm').hide();

        } else {

            $('#enquiryForm .employerForm').hide();

            $('#enquiryForm .candidateForm').show();

        }

    });

});









var windowsize = $(window).width();

	if (windowsize < 991) {

	//if the window is greater than 440px wide then turn on jScrollPane..

	$('.mainNav .navbar-nav > li > a').addClass("enable");

	$('.mainNav .navbar-nav > li > a').removeClass("disabled");

}



/*sticky header for main site starts */

$(window).scroll(function() {



	function stickyHeader(){

		var scroll = $(window).scrollTop();

	    windowWidth = $(window).width();

	    console.log(windowWidth);

		var headerOuterHeight = $("nav.navbar").outerHeight();

	    if (scroll > 50) {

			

	        $("nav.navbar").addClass("navbar-fixed-top");

	        if(windowWidth > 1024)

				$("body").css({"padding-top":headerOuterHeight});

	    } else {

	        $("nav.navbar").removeClass("navbar-fixed-top");

			$("body").css({"padding-top":0});

	    }

	}

	    

	stickyHeader();

    $(window).resize(function(){

	    stickyHeader();

	});

});

/*sticky header for main site ends */


/***Top Nav***/
/*sticky header for main site starts */
$(window).scroll(function() {

	function stickyHeader(){
		var scroll = $(window).scrollTop();
	    windowWidth = $(window).width();
	    console.log(windowWidth);
		var headerOuterHeight = $(".topHeader").outerHeight();
	    if (scroll > 50) {
			
	        $(".topHeader").addClass("navbar-fixed-top");
	        if(windowWidth > 1024)
				$("body").css({"padding-top":headerOuterHeight});
	    } else {
	        $(".topHeader").removeClass("navbar-fixed-top");
			$("body").css({"padding-top":0});
	    }
	}
	    
	stickyHeader();
    $(window).resize(function(){
	    stickyHeader();
	});
});
/*sticky header for main site ends */











