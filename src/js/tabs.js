(function($) {
"use strict";
//-----tab
$('.tab').on('click', function(){
  var index = $(this).index();
  $(this).siblings().removeClass('active');
  $(this).addClass('active');
  $('.xblock-item:eq(' + index + ')').show().siblings().hide();
})
// show_more
$('.more_btn').on('click',function(){
  $(this).siblings().find('.st3').toggle();
  $(this).find('a').text('查看更多');
  if($(this).siblings().find('.st3').is(':visible'))
    $(this).find('a').text('收起');
})
$('.show_btn').on('click',function(){
  $(this).siblings().find('.st3').toggle();
  $(this).find('a').text('展开');
  if($(this).siblings().find('.st3').is(':visible'))
    $(this).find('a').text('收起');
})
// 滚动
$(window).on('scroll',function() {
  var tabTop = $('.tabs').offset().top;
  var scrollTop = $(this).scrollTop();
  if (scrollTop > tabTop-10) {
    $('.tabs').addClass('fixed_tabs');
  }
})

})($);