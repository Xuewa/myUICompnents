(function($) {
"use strict";

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
var $inputEle = $('.form-xblock .weui-input');
$inputEle.bind('input propertychange', function() { 
  var text = $(this).val();
  var $liEle = $(this).parent().parent().parent();
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
  	// console.log($liEle.attr('initXbtn'));
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

//-------跳转
var $linkRowEle = $('.xblock-link-row');
$linkRowEle.on('click',function(){
  var linkUrl = $(this).attr('data-link');
  window.location.href = linkUrl;
});
//-----多选点击后关闭事件
var checkEle = $('input[type="checkbox"]');
checkEle.on('click',function(){
	var $selectsEle = $(this).parents('.weui-cells_checkbox');
	var checkGroupName = $(this).attr('name');
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
    // console.log(checkVals);
    window.localStorage.setItem(checkGroupName,checkVals);
});
//多选的值
var $checkValsText = $("[data-type='checkValsText']");
if($checkValsText.length===0) 
  $("[type='checkValsText']");
$checkValsText.each(function(){
	var checkGroupName = $(this).attr('name');
	var checkGroupTip = $(this).attr('data-tip');
	var checkVals = [];
	if(typeof(checkGroupName)!=='undefined'){
		checkVals = window.localStorage.getItem(checkGroupName);
		if (checkVals&& checkVals.length>0){ 
			$checkValsText.text(checkVals).addClass('xblock-checkVals-text');
		}else {
			$checkValsText.text(checkGroupTip).removeClass('xblock-checkVals-text');
		}
	}
});

//-----单选点击后关闭事件
var checkEle = $('input[type="radio"]');
checkEle.on('click',function(){
	var $radioEle = $(this).parents('.weui-cells_radio');
	var radioGroupName = $(this).attr('name');
	var $radiosItemList = $radioEle.find('.weui-check__label');
	var radioVal = '';
	$radiosItemList.each(function(){
    	var checked = $(this).find('input[type="radio"]').is(':checked');
    	// console.log(checked);
    	var value = $(this).find('.radio-text font').text();
    	if (checked) {
    		radioVal = value;
    	}
	});
    // console.log(checkVals);
    window.localStorage.setItem(radioGroupName,radioVal);
    // alert(window.localStorage.getItem(radioGroupName));
});
//-----单选的值
var $radioValText = $("[data-type='radioValText']");
if($radioValText.length===0) 
  $radioValText = $("[type='radioValText']");
$radioValText.each(function(){
	var radioGroupName = $(this).attr('name');
	var radioGroupTip = $(this).attr('data-tip');
	var radioVal = '';
	if(typeof(radioGroupName)!=='undefined'){
		radioVal = window.localStorage.getItem(radioGroupName);
		// alert(radioVal);
		if (radioVal&&radioVal.length>0){ 
			$radioValText.text(radioVal).addClass('xblock-radioVal-text');
		}else {
			$radioValText.text(radioGroupTip).removeClass('xblock-radioVal-text');
		}
	}
});



//-----快速单选
var $quickSelectItem = $('.quick-select-item');
$quickSelectItem.on('click',function(){
  $quickSelectItem.removeClass('selected-item');
  $(this).addClass('selected-item');
});


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


})($);