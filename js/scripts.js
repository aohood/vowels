$("document").ready(function(){

    $("#Pig-latin").submit(function(event){

      event.preventDefault();
      $("#result").show();

      var input= $("#txt").val();
      var vowel =["a", "e", "i","o","u"];

      if (input){

        for(i=0; i<5; i++){
          if (input.startsWith(vowel[i])){
            $("#result").text(input+"way");
            break;
          }
        }  // for the for loop
        if(input.slice(0,2) === "qu"){
          $("#result").text((input.slice(2,input.length))+"qu");
        }
        else{


            for(i=0;i<input.length;i++){
              var counters = new array();
              if (input.includes(vowels(i)){
                counter[i]= input.indexOf()
                 var slice1= input.slice(0,i-1);
                 alert(slice1);
                 console.log(input);
                 var slice2 = input.slice(i,input.length);
                 alert(slice2);
                 $("#result").text(slice2+slice1+"ay");
                 break;
              }


            }




         }
             // $("#result").text(input);
        }






 }); //fot the submit


});
//for the ready
