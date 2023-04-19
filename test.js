
$(document).ready(function () {

    $(".container .exam-day button").click(function () { 
    

        let pane = $(this).attr("id");

        $(".container .course-main").removeClass("hide").hide()
        $(".container .course-main."+pane).fadeIn()
        
    });
    

    
   
   

    
});