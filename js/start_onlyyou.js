function init_onlyyou(){
    // 初始化两个div的高度
    $("#div_onlyyou").css({"height":$(window).height()+"px"});
    $("#div_oy_inner").css({"height":$(window).height()+"px"});
    // 设置自定义背景
    var start_bg_img=start_content['bg_img'];
    $("#div_onlyyou").css({"background-image": 'url('+start_bg_img+')'});
    $('.div_oy_text h1').html(start_content['chase_title']); //加载自定义内容
    $('.div_oy_text .p_oy_text').html(start_content['chase_text']); //加载自定义内容
    // $(".img_oy_text").attr('src', start_content['img_src']);
    var random_img=random_img_as();
    $(".img_oy_text").attr('src', random_img);
}

var array_oy_benefit;
array_oy_benefit=start_content['chase_benefit'];   
var index_text_oy=0; 
var count_text_oy=array_oy_benefit.length;

function oy_show_benefit(){
    var oy_text_height=$(".div_oy_text").height();
    if(index_text_oy<count_text_oy){  
        $(".li_oy_benefit").eq(index_text_oy).html(array_oy_benefit[index_text_oy]).show();
        if($(document).height()-oy_text_height<520){ //随着文字的增多，实时调整高度
            $("#div_onlyyou").css({"height":$(document).height()+160+"px"});
            $("#div_oy_inner").css({"height":$(document).height()+"px"});
        } 
        index_text_oy++;
    } else{
        oy_show_note();
    }
}

function oy_show_note(){
     $("#div_oy_note").show(); 
}

function oy_hide_note(){
    $("#div_oy_note").hide(); 
}

function oy_go_next(){  
    $("#div_oy_yes").show();
    var music = document.getElementById('biaobai');
	music.play();
    setTimeout("javascript:location.href='fireworks.html'", 120000);
}

function random_img_as(){  //获取随机的模板图片
    // console.log('random_img_as'); 
    var random_num=Math.floor(Math.random()*(array_as_pics_s.length)); //随机取值 
    var random_img=array_as_pics_s[random_num];
    return random_img;
} 
