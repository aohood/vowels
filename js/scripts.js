$("document").ready(function(){

    var names = ["Jennifer Aniston","Taylor Swift","Jennifer Lawrence","Cameron Diaz",
                "Jim Carrey","George Clooney","Chris Evan","James Spader"];
    var counters = [0,0,0,0,0,0,0,0];

    var checker = [0,0,0,0,0,0]; // to make sure all the questions have been answered from the user
                                //if answered turn the value to 1



    $("#start").click(function(){
      var name = $("input#name").val();
      if (name!==""){
        $(".help-inline").empty();
        $(".items").show();
        $("#result").hide();
        $(".name-block").hide();
        // $("#err-msg").hide();
      }
      else{
        $(".help-inline").empty().text("Please make sure to enter your name.");
        $("#result").hide();
      }
    });






    $("#groceries").submit(function(event){

      event.preventDefault();
      $("#result").show();

      var items = ["choclate","eggs","milk","tommato","potato","rice","nuts","beans","bread","yogurt"];
      $("#result").empty();

       var uppered = new Array();
       var index=0;

       items.forEach(function(item){
         userInput =  $("input:radio[name="+item+"]:checked").val();
         if(userInput){
           uppered[index]= userInput.toUpperCase();
            // $("#result").append("<li>"+sorted[index]+"</li>");
            index++;

          }
        });
            var sorted=uppered.sort();
            var count=0;
            sorted.forEach(function(){

               $("#result").append("<li>"+sorted[count]+"</li>");
               count++;

            });


       // $("#result").append("<li>"+userInput+"["+(items.)]"+"</li>");




 }); //fot the submit


});
//for the ready
