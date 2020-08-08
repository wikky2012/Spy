$(document).ready(function(){
    $("form#contact").submit(function(event){
  event.preventDefault();
      var name = $("input#name").val();
      var email = $("input#email").val();
      var number = $("textarea#number").val();
      var message = $("textarea#message").val();
      if ($("input#name").val() && $("input#email").val()){
        
        swal (name+ " ","You haven't provided correct details to merge what we have,Click the link below for a last chance to know your fate and hit subscribe to get instant results","error");
         
    }
  
  });
 
});
