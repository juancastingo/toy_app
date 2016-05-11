
$(document).ready(
     function(){
          $("#ajax_trigger").bind("ajax:success",
                   function(evt, data, status, xhr){
                        //this assumes the action returns an HTML snippet
                        //$("div#response_data").html(data);
                        console.log(data)
                        console.log(evt)
                        console.log(status)
                        $('#notice').html("success")
           }).bind("ajax:error", function(evt, data, status, xhr){
                    //do something with the error here
                    $("div#errors p").text(data);
           });
});