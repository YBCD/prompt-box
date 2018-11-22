$(function(){
  $("#testB").click(function() {
    $("#allBack").append('<div id="cover"></div>'
                        +'<div id="box">'
                        +'弹框'+'<button id="xB" type="button">关闭</button>'
                        +'</div>'
    );
    $("#xB").bind('click',function() {
      $("#cover").remove();
      $("#box").remove();
    });
  });
})
