(function($) {
"use strict";

var $numDecreaseBtn = $('.num-control .num-decrease');
var $numAddBtn = $('.num-control .num-add');
var $numCont = $('.num-control .num-count');
//-----减少按钮
$numDecreaseBtn.on('click',function(){
  var number = $numCont.text();
  if(number>0) $numCont.text(--number);
});

//-----增加按钮
$numAddBtn.on('click',function(){
  var number = $numCont.text();
  $numCont.text(++number);
});

//-----滑动
$('#slider1').slider(function (percent) {
  // console.log(percent);
  $('#sliderValue').text(percent);
});

$(".range-sel").ionRangeSlider({
  min: 1,
  max: 10,
  step: 1,
  postfix: "天",
  type: "double",
  // grid: true,
  onFinish: function (data) {
    console.log("onFinish");
    $(".irs-single").removeClass("active");
  }
});

$('.irs-slider').on('touchstart',function(){
  $('.irs-single').addClass('active');
})

//-----删除搜索条件
$('.xblock-define-search .num-decrease').on('click',function removeSearchRow(){
  var $rowEle = $(this).parents('.xblock-row');
  $rowEle.remove();
});

var $linkRowEle = $('.xblock-search-row-left .next_link');
$linkRowEle.on('click',function(){
  var linkUrl = $(this).attr('data-link');
  window.location.href = linkUrl;
});

//-----添加搜索条件
$('.xblock-search-add-row .add-search').on('click',function(){
  var $searchContainer = $(this).parents().find('.xblock-content-list');
  var $newLiStr = '<li class="xblock-row">'+
            '<div class="xblock-inner-row weui-cell">'+
              '<div class="xblock-search-row-left weui-cell__hd"><span class="num-decrease icon-decrease_circle"></span>'+
                '<span data-link="form-single-select-search.html" class="next_link"><label class="weui-label search-row-label"></label><a href="javascript:void(0);" class="next_xbtn"><img src="images/icons/right_arr.png" width="22" height="22" class="right_xbtn"></a></span>'+
              '</div>'+
              '<div class="xblock-search-row-right weui-cell__bd">'+
                '<input  class="weui-input">'+
              '</div>'+
            '</div>'+
          '</li>';
  $searchContainer.append($newLiStr);
  $('.xblock-define-search .num-decrease').on('click',function removeSearchRow(){
    var $rowEle = $(this).parents('.xblock-row');
    $rowEle.remove();
  });
  $('.xblock-search-row-left .next_link').on('click',function(){
    var linkUrl = $(this).attr('data-link');
    window.location.href = linkUrl;
  });
});

//-----搜索条件常用多选
var $labelsSearch = $('.xblock-label-search .label-item');
$labelsSearch.on('click',function(){
  $(this).toggleClass('label-active');
});

var $historyBtns = $('.search-history-item .close_xbtn');
$historyBtns.on('click',function(){
	var $historyRow = $(this).parents('.search-history-item');
	$historyRow.remove();
});

//-----清除搜索历史
$('.clear-history').on('click',function(){
	$historyBtns.trigger('click');
	var nullStr = '<li class="search-history-item no-history">无历史记录</li>';
	$('ul.search-histories-list').append(nullStr);
	$(this).parent().hide();
});

//-----日历控件
var dateRange1 = new pickerDateRange('datePicker', {
	stopToday : false,
	isTodayValid : true,
	startDate: '2018-01-01',
	endDate: '2018-09-07',
	needCompare : false,
	defaultText : ' 至 ',
	autoSubmit : false,
	inputTrigger : 'input_trigger1',
	theme : 'ta',
	// shortOpr:true
	// magicSelect:true
	//disCertainDate: [1, 3],
	//shortOpr: true,
	//isSingleDay : true,
	//specifyCertainFullDate: true,
	//certainFullDate: [[2018,1,1],[2018,1,2]]
});

})($);