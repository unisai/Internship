$( document ).ready(function() {
    console.log( "ready!" );
    
    $("#veg-a").click( function(){
        
        $(this).slideUp();
        $("#veg-1a").css("display","block");
        
    });
    
    $("#veg-b").click( function(){
        
        $(this).slideUp();
        $("#veg-1b").css("display","block");
        
    });
    
    $("#increase").click(function() {
        $("#number")++;
    });
    
    $("#com-cost").click( function(){
        
        if( $(".com-cost").css("display") === "block" ) {
           $(".com-cost").css("display","none"); 
        }else {
           $(".com-cost").css("display","block"); 
        }  
        
    });
    
    $("#d-p,#d-p-bk").click( function(){
        
        $(".d-p").css("display","block"); 
        $(".d-p-n").css("display","none"); 
        
    });
    
    $("#d-t").click( function(){
          
        $(".d-t").css("display","block"); 
        $(".d-t-n").css("display","none"); 
        
    });
    
    $("#d-o").click( function(){
          
        $(".d-o").css("display","block"); 
        $(".d-o-n").css("display","none"); 
        
    });
    
    $("#d-m-1").click( function(){
         
        $(".d-m-1").css("display","block"); 
        $(".d-m-1-n").css("display","none");
        
        if( $(".inner-hide").css("display") === "none" ) {
            $(".inner-hide").css("display","block");
        } else {
            $(".inner-hide").css("display","none");
        }
        
    });
    
    $("#d-m-nhc").click(function(e) {
    
        e.stopPropagation();
    
    });
    
    $("#d-m-2").click( function(){
        
        $(".d-m-2").css("display","block"); 
        $(".d-m-2-n").css("display","none"); 
        
    });
    
    $("#d-m-3,#d-m-3-bk").click( function(){
         
        $(".d-m-3").css("display","block"); 
        $(".d-m-3-n").css("display","none"); 
        
    });
    
    $("#my-profile-edit").click( function() {    
       
        $(".d-p").css("display","none");
        $(".my-profile-edit").css("display","block");
        
    });
    
    $("#mg-pro-type-1,#mg-pro-type-2").click( function() {    
       
        $(".d-m-3").css("display","none");
        $(".mg-pro-type-1").css("display","block");
        
    });
    
    $("#d-s").click( function() {    
       
        $(".d-s-n").css("display","none");
        $(".d-s").css("display","block");
        
    });
    
    $("#d-h").click( function() {    
       
        $(".d-h-n").css("display","none");
        $(".d-h").css("display","block");
        
    });
    
    $("#c-p").click( function() {    
       
        $(".c-p-n").css("display","none");
        $(".c-p").css("display","block");
        
    });
    
    $("#c-o").click( function() {    
       
        $(".c-o-n").css("display","none");
        $(".c-o").css("display","block");
        
    });
    
    $("#c-h").click( function() {    
       
        $(".c-h-n").css("display","none");
        $(".c-h").css("display","block");
        
    });
    
    $("#c-f").click( function() {    
       
        $(".c-f-n").css("display","none");
        $(".c-f").css("display","block");
        
    });
    
    $("#type").change(function () {
        
        var val = $(this).val();
        if (val == "item1") {
            $("#size").html("<option value='test'>Brinjal</option><option value='test2'>Cucumber</option>");
        } else if (val == "item2") {
            $("#size").html("<option value='test'>item2: test 1</option><option value='test2'>item2: test 2</option>");
        } else if (val == "item3") {
            $("#size").html("<option value='test'>item3: test 1</option><option value='test2'>item3: test 2</option>");
        }
        
    });
    
    $(":input[type=number]").on("mousewheel", function(e){
        
        e.preventDefault();
        
    });
    
    if (window.matchMedia('(max-width: 425px)').matches) {

        $(".inner-board").removeClass("navbar-fixed-left");
        
    }
    
    
        
});
