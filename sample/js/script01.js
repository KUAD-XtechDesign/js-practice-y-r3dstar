$(function(){ 
//HTML読み込んだあとに走らせるよーという意味 HTMLがないから何を動かしたらいいのかわからなくなる

    $("#button01").on("click",function(){
        //ボタンが押されたとき
        $(".back-red").slideUp();
        //何を隠すか
    })

    $("#button02").on("click",function(){
        $(".back-blue").slideUp();
    })

    $("#button03").on("click",function(){
        $("#box03,#box07").slideUp();
    })

    $("#button04").on("click",function(){
        $(".box").slideDown();
    })
//クラスは[.] IDは[#]で指定 複数指定はカンマで区切る つけ忘れにご用心
})
