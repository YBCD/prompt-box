$(function(){
  $("#testB").click(function() {
    $("#allBack").append('<div id="cover"></div>'
                        +'<div id="box">'
                        +'弹框'+'<button id="xB" type="button">关闭</button>'
                        +'<button id="quickPionterBu">快速指派</button>'
                        +'<button id="cancelBu">取消</button>'
                        +'</div>'
    );
    $("#cancelBu").bind('click',function() {
      $("#cover").remove();
      $("#box").remove();
    });
  });
})
