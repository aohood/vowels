$("document").ready(function(){

    $("#palindromes").submit(function(event){

      event.preventDefault();
      $("#result").show();

      var input= $("#txt").val();
  
      var n = input.localeCompare(reverseString(input));
      if (n===0){
        $("#result").text("Yes, "+ input+ "  is a palindrome")
      }else{
        $("#result").text("No, "+" "+input+" is not a palindrome")
      }



 }); //fot the submit

     var reverseString = function(str){
       return str.split("").reverse().join("");
     }
});
//for the ready
