$(document).ready(function () {
  // 首页select
  $(".select-box select").on("change",function(){
    var getSelVal = $(".select-box option:selected").text();
    $(".select-box span").text(getSelVal);
  });
  // 首页底部tab
  $(".footer-tab a").on("click",function(){
    $(this).addClass("active").siblings().removeClass("active");
    $(this).siblings().find(".e-icon").removeClass("active");
    $(this).find(".e-icon").addClass("active");
  });
  // 下拉
  $(".dropdown-box .dropdown-btn").on("click",function(){
    var dropdownList = $(this).parents(".dropdown-box").find(".dropdown-list");
    if(dropdownList.is(":hidden")){
      dropdownList.slideDown(100);
      $(this).find("i").attr("class","e-icon a-up-icon");
      $(this).find("span").text("收起");
    }else{
      dropdownList.slideUp(100);
      $(this).find("i").attr("class","e-icon a-down-icon");
      $(this).find("span").text("展开");
    }
  });
  // tab单选
  $(".radio-Inquire .etravel-btn").on("click",function(){
    $(this).parents(".radio-Inquire").find(".etravel-btn").removeClass("cur");
    $(this).addClass("cur");
  });
  // input 清空
  $(".clearInput input").on("input propertychange",function(){
    if($(this).parent().find(".remove-icon").length == 0){
      $(this).after('<i class="e-icon remove-icon"></i>');
    }
    if($(this).val() != ''){
      $(this).parent().find(".remove-icon").on("click",function(){
        $(this).parent().find("input").val("");
        $(this).remove();
      })
    }else{
      $(this).parent().find(".remove-icon").remove();
    }
  });
});