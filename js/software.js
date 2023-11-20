$(document).ready(function(){


    $("header .change ul li:nth-child(1),.sub-snav").hover(function(){
        $(".sub-snav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-snav").stop(true).animate({top:'-500px'},)
    });
    

    
    $("header .change ul li:nth-child(2),.sub-onav").hover(function(){
        $(".sub-onav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-onav").stop(true).animate({top:'-500px'},)
    });
   


    $("header .change ul li:nth-child(3),.sub-nnav").hover(function(){
        $(".sub-nnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-nnav").stop(true).animate({top:'-500px'},)
    });
    

    $("header .change ul li:nth-child(4),.sub-cnav").hover(function(){
        $(".sub-cnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-cnav").stop(true).animate({top:'-500px'},)
    });
   

    $("header .change ul li:nth-child(5),.sub-gnav").hover(function(){
        $(".sub-gnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-gnav").stop(true).animate({top:'-500px'},)
    });
   


    $("header .change ul li:nth-child(6),.sub-dnav").hover(function(){
        $(".sub-dnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-dnav").stop(true).animate({top:'-500px'},)
    });
   


    $("header .change ul li:nth-child(7),.sub-bnav").hover(function(){
        $(".sub-bnav").stop(true).animate({top:'76px'})
    },function(){
        $(".sub-bnav").stop(true).animate({top:'-500px'},)
    });
    





   

    $("header i").click(function () {
        $(".redul").stop(true).slideToggle();
    })
    $("header i").click(function () {
        $(".redsch").stop(true).animate({ top: '-300px' })
    });
    $("header>a img").click(function () {
        $(".redul").css({ display: 'none' })
    });
   

   
    $("header>a img").click(function () {
        $(".redsch").stop(true).animate({ top: '76px' })
    })

    $(".redsch .dot button").click(function () {
        $(".redsch").stop(true).animate({ top: '-300px' })
    });
    $(".redsch .dot p").click(function () {
        $(".redsch").stop(true).animate({ top: '-300px' })
    });





    $(".redul .inner:nth-child(1) button").click(function () {
        $(".redul .inner .blinds").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(2) button").click(function () {
        $(".redul .inner:nth-child(2) .blindo").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(3) button").click(function () {
        $(".redul .inner:nth-child(3) .blindn").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(4) button").click(function () {
        $(".redul .inner:nth-child(4) .blindc").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(5) button").click(function () {
        $(".redul .inner:nth-child(5) .blindg").stop(true).slideToggle();
    });
    $(".redul .inner:nth-child(6) button").click(function () {
        $(".redul .inner:nth-child(6) .blindd").stop(true).slideToggle();
    });


    $(".redul .dot button,.redul .dot p").click(function () {
        $(".redul").stop(true).slideToggle();
    });

    $(".redul .inner:nth-child(1) button").on('mouseover',function(){
        $(".redul .inner:nth-child(1) .main a,.redul .inner:nth-child(1) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(1) .main a,.redul .inner:nth-child(1) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(2) button").on('mouseover',function(){
        $(".redul .inner:nth-child(2) .main a,.redul .inner:nth-child(2) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(2) .main a,.redul .inner:nth-child(2) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(3) button").on('mouseover',function(){
        $(".redul .inner:nth-child(3) .main a,.redul .inner:nth-child(3) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(3) .main a,.redul .inner:nth-child(3) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(4) button").on('mouseover',function(){
        $(".redul .inner:nth-child(4) .main a,.redul .inner:nth-child(4) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(4) .main a,.redul .inner:nth-child(4) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(5) button").on('mouseover',function(){
        $(".redul .inner:nth-child(5) .main a,.redul .inner:nth-child(5) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(5) .main a,.redul .inner:nth-child(5) .main button").css({color:'#868686'})
        
    })

    $(".redul .inner:nth-child(6) button").on('mouseover',function(){
        $(".redul .inner:nth-child(6) .main a,.redul .inner:nth-child(6) .main button").css({color:'#e60012'})
    })
    .on('mouseout',function(){
        $(".redul .inner:nth-child(6) .main a,.redul .inner:nth-child(6) .main button").css({color:'#868686'})
        
    })

       
    let start = $("html,body");

    $("footer .top .right a>img").click(function () {
        $(start).stop(true).animate({scrollTop : 0},600)
    });

})
