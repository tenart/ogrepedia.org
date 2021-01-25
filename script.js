$(function() {      

    // Test for and save local data
    var saved_data = localStorage.getItem("start_on");
    if( saved_data === null ) {
        localStorage.setItem("start_on", "ROOT");
    } else {
        console.log(saved_data);

        var elementID = "#dir_" + saved_data.toLowerCase();
        $(elementID).addClass("active");
        
        var rootID = "#root_" + saved_data.toLowerCase();
        $(rootID).addClass("active");

        var path_name = $(elementID).attr("data-folder-path");
        $(".window_content_header p").text(path_name);

        // if(saved_data == "CHARACTERS") {
        //     $("#dir_characters").addClass("active");
        // }

        // if(saved_data == "LOCATIONS") {
        //     $("#dir_locations").addClass("active");
        // }
    }
    

    $(".preset").click(function() {
        var value = $(this).attr("data-preset");
        localStorage.setItem("start_on", value);
        // Save preset value then open new page
        var url = $(this).attr("data-url")
        window.open(url, "_self");
    })


    // If any file/directory is clicked
    $(".file_entry").click(function() {

        if( $(this).parent().hasClass("first") ) {
            $(".second").removeClass("active");
            $(".third").removeClass("active");
            $(".second .directory").removeClass("active");
            $(".third .directory").removeClass("active");
        }
        if( $(this).parent().hasClass("second") ) {
            $(".third").removeClass("active");
            $(".third .directory").removeClass("active");
        }
        $(this).parent().children().removeClass("active");

        // Directories need to have data-target
        var target_name = "#" + $(this).attr("data-target");
        if (target_name != "#undefined") {
            $(target_name).addClass("active");

            $(this).addClass("active");

            var path_name = $(target_name).attr("data-folder-path");
            $(".window_content_header p").text(path_name);
        }

        // Files need to have data-open
        var open_name = $(this).attr("data-open");
        if( open_name != null ) {
            $(".open").removeClass("active");
            $(this).addClass("active");

            $("#db_iframe").attr("src", open_name);
            $("#iframe_hider").slideDown(200);
        }
        
    })

    // Close iframe window and spacing
    $("#iframe_window .window_close").click(function() {
        $(".open").removeClass("active");
        $("#iframe_hider").slideUp(200);
    })

})