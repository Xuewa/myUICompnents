(function($) {
"use strict";

FastClick.attach(document.body);

//-----关于header的动效
  //---关于header的返回动效
  var $backLink = $('#back-lin');
  $backLink.on('click',function(e){
  	// if(typeof(beforeBack)!=='undefined') beforeBack();
  	window.history.go(-1);
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


})($);