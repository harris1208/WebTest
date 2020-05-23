/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){
    $("input").click(function(){
        //alert("Test");
        //$("H1").text("Hello");
        let numberOfListItem = $("li").length;
        let randomChildNumber = Math.floor(Math.random()*numberOfListItem);
        $("H1").text($("li").eq(randomChildNumber).text());
        //document.getElementById('image').src = images[randomChildNumber];
        $("img").attr("src",images[randomChildNumber])
    });
});