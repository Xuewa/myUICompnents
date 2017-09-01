(function($) {
"use strict";

//-----关于header的动效
  //---关于header的返回动效
  var $backLink = $('#back-link');
  $backLink.on('click',function(){
  	window.history.back();
  });

  //---关于header的下拉菜单动效
  var $navMore = $('.nav-more');
  var $navList = $('.nav-more-list');
  var $navMask = $('.dropdown_mask');

  $navMore.on('click',function(){
    $navList.toggle();
    $navMask.toggle();
  });

  $navMask.on('click',function(){
  	$navMore.trigger('click');
  });

//-----页面提示的动效:关闭
  var $pageTip = $('.page-tip');
  var $pageTipCloseBtn = $('.page-tip .close_xbtn');
  $pageTipCloseBtn.on('click',function(){
  	$pageTip.hide();
  });

//-----输入框提示动效
  var $xbtnTip = $('.xbtn_tip');
  var $xbtnTipCont = $('.xbtn_tip .tip-cont');
  $xbtnTip.on('click',function(e){
  	$xbtnTipCont.toggle();
  	$(document).one("click", function(){
        $xbtnTipCont.hide();
    });
    e.stopPropagation();
  });
  $xbtnTipCont.on("click", function(e){
    e.stopPropagation();
  });

//-----绑定关闭按钮动作
var $close_xbtn = $('.xbtn_close');
$close_xbtn.on('click',function(){
  var $input = $(this).parent().find('input.weui-input');
  $input.val('');
});

//-----绑定输入框的动作
var $inputEle = $('.weui-input');
$inputEle.bind('input propertychange', function() { 
  var text = $(this).val();
  var $liEle = $(this).parent().parent();
  var $linkEle = $liEle.find('a');
  var $imgEle = $linkEle.find('img');
  var oldAClazz = $linkEle[0]?$linkEle.attr('class'):'';
  var oldImgClazz = $imgEle[0]?$imgEle.attr('class'):'';
  if(text.length>0) {
  	//没有任何图标，生成
  	if(oldAClazz==='') {
      $liEle.append('<a class="xbtn_close" href="javascript:void(0);" >'+
                        '<img class="close_xbtn" src="" width="22" height="22">'+
                    '</a>');
    //有图标但不是关闭按钮，换成关闭按钮
    }else if(oldAClazz.indexOf('xbtn_close')<0){
      $linkEle.removeClass().addClass('xbtn_close');
      $imgEle.removeClass().addClass('close_xbtn');
    }
    $linkEle = $liEle.find('a.xbtn_close').show();
    $linkEle.off('click').on('click',function(){
      var $input = $(this).parent().find('input.weui-input');
      $input.val('');
      if ($liEle.attr('initXbtn')==='tip'){
        $linkEle.removeClass().addClass('xbtn_tip');
        $imgEle.removeClass().addClass('ques_xbtn');
        var $xbtnTip = $('.xbtn_tip');
        var $xbtnTipCont = $('.xbtn_tip .tip-cont');
        $xbtnTip.off('click').on('click',function(){
          $xbtnTipCont.toggle();
        });
      }else{
      	$linkEle.hide();
      }
    });
  }else{
  	if ($liEle.attr('initXbtn')==='tip'){
        $linkEle.removeClass().addClass('xbtn_tip');
        $imgEle.removeClass().addClass('ques_xbtn');
        var $xbtnTip = $('.xbtn_tip');
        var $xbtnTipCont = $('.xbtn_tip .tip-cont');
        $xbtnTip.off('click').on('click',function(){
          $xbtnTipCont.toggle();
        });
      }else{
      	$linkEle.hide();
      }
  }
});

//-----不合法的输入框焦点重新获取
var $errInputRow = $('.xblock-row-err input');
$errInputRow.on('focus',function(){
  console.log('mousedown');
  var $blockRowLi = $errInputRow.parents('li.xblock-row-err');
  $blockRowLi.removeClass('xblock-row-err');
});
//-----多选点击后关闭事件
var checkEle = $('input[type="checkbox"]');
checkEle.on('click',function(){
	var $selectsEle = $(this).parents('.weui-cells_checkbox');
	var $selectsItemList = $selectsEle.find('.weui-check__label');
	var checkVals = [];
	$selectsItemList.each(function(){
    	var checked = $(this).find('input[type="checkbox"]').is(':checked');
    	// console.log(checked);
    	var value = $(this).find('.checkbox-text font').text();
    	if (checked) {
    		checkVals.push(value);
    	}
	});
    console.log(checkVals);
});


// $selectsItemList.on('click',function(e){
//     var value = $(this).find('.checkbox-text font').text();
//     console.log(value);
//     // e.stopPropagation();
//     e.preventDefault();
// });


})($);