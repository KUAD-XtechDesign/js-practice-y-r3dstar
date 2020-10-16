$(function(){ 

    let txt01 = "ねむねむにゃんこ";
    let txt02 = "💯";
    let num01 = 100;
    let num02 = 2000;
    //""で囲むと文字として扱われる 数字として(数値)使いたいときは不要

    $("#button01").on("click",function(){
        $("#content").text("こんにちは");
    })

    $("#button02").on("click",function(){
        $("#content").text(txt01);
    })

    $("#button03").on("click",function(){
        $("#content").append(txt01 + txt02);
    })

    $("#button04").on("click",function(){
        $("#content").text(num01 + num02);
    })

    $('#button05').on("click",function(){
        $("#content").text(num01 + "x"  + num02  + "=" + (num01 * num02) );
    })
    // + - * /
})