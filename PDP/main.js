/*
window.onload=function(){
    //document.write("Hello JavaScript!");
};
*/

$(document).ready(function(){

    console.log($("[type=range]").val());
    $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);

    $("[type=range]").change(function(){
        //console.log($("Somebody cvhange it!"));
        $("LABEL").text($("[type=range]").val()+" "+fiveIndex[$("[type=range]").val()-1]);
    });

    let currentQuiz = null;
    $("#startButton").click(function(){
        $("[type=range]").toggle();
    });
});