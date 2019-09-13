/* Style the HTML elements according to the following instructions.
DO NOT ALTER THE EXISTING HTML TO DO THIS.  WRITE ONLY CSS!
*/



/* Give everything with the class 'hello' a white background when you click on one of them*/

let stylesheet1 =
    {
        backgroundColor:'blue',
    };
$('body').css(stylesheet1);

$(document).ready(function(){
    $(".hello").click(function()
    {
        $(".hello").css("background-color" ,"white" )
    })
});
// !! You manage to meet the requirements in your own way, nicely done.
/* When you mouse over the "Selectors Exercise" element, change the height&width to 20px. When you mouse off of it change it back */

$(document).ready(function(){
    $("h1").mouseover(function()
    {
        $("h1").css("height" ,"20px","width","20px" )
    })
});
// !! You successfully change the height here but not the width and you missed changing it back when the mouse isn't on the element


// CHALLENGE
/* Each time the sentence "I am a paragraph with a class" is clicked, add a "." to the end of the sentence. */



