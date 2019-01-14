	   // Page Redirect
    		$(document).on('click','#btnRegister',function(){
    			window.location.href = "register.html";
    		});
        // Transition effect for navbar 
        $(window).scroll(function() {
          // checks if window is scrolled more than 50px, adds/removes solid class
          if($(this).scrollTop() > 50) { 
              $('.navbar').addClass('solid');
              $('.navbar').addClass('navbar-dark');
              $('.navbar').removeClass('navbar-light');
              $("#logo").hide();
          } else {
              $('.navbar').removeClass('solid');
              $('.navbar').removeClass('navbar-dark');
              $('.navbar').addClass('navbar-light');
              $("#logo").show();
          }
        });
        $('.scrollup').hide();
        $(window).scroll(function(){
            if ($(this).scrollTop() > 1000) {
                $('.scrollup').fadeIn();
            } else {
                $('.scrollup').fadeOut();
            }
        }); 
 
        $('.scrollup').click(function(){
            $("html, body").animate({ scrollTop: 0 }, 600);
            return false;
        });
        // Initialize WOW.js
        new WOW().init();
        //schedule.html
        $("#card-package").hide();
        $("#card-documents").hide();
        $(document).on('click','#btn_send_package',function(){
          $("#card-package").fadeIn(500);
          $("#btn_send_package").hide();
        });
        $(document).on('click','#btn_send_documents',function(){
          $("#card-documents").fadeIn(500);
          $("#btn_send_documents").hide();
        });
        //services.html
        $('.collapse').on('shown.bs.collapse', function(){
        $(this).parent().find(".glyphicon-plus").removeClass("glyphicon-plus").addClass("glyphicon-minus");
        }).on('hidden.bs.collapse', function(){
        $(this).parent().find(".glyphicon-minus").removeClass("glyphicon-minus").addClass("glyphicon-plus");
        });
        //Read more and Read Lss
        $(function(){
        // here the code for text minimiser and maxmiser by faisal khan
        var minimized_elements = $('p.text-viewer');
        minimized_elements.each(function(){    
            var t = $(this).text();        
            if(t.length < 60) return;
            
            $(this).html(
                t.slice(0,60)+'<span>... </span><a href="#" class="more"> Read More </a>'+
                '<span style="display:none;">'+ t.slice(60,t.length)+' <a href="#" class="less"> Read Less </a></span>'
            );
        }); 
        $('a.more', minimized_elements).click(function(event){
            event.preventDefault();
            $(this).hide().prev().hide();
            $(this).next().show();        
        });
        
        $('a.less', minimized_elements).click(function(event){
            event.preventDefault();
            $(this).parent().hide().prev().show().prev().show();    
        });
    });