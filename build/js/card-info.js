// (function($) {
// "use strict";//-----左滑动
	var startX = 0,startY = 0;
	var moveEndX = 0,moveEndY = 0;
	var areaX = 0,areaY = 0;
	$(".slide-info-item").on("touchstart", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }   
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".slide-info-item").on("touchend", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }               
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    areaX = moveEndX - startX,
	    areaY = moveEndY - startY;

	    if ( areaX <-100 ) {//左滑 
	        $(this).animate({'left':'-90px'});
	        // console.log(moveEndX+' - '+startX);
	    }else if ( areaX > 100 ) {//右滑
	        $(this).animate({'left':'0px'});  
	    }else if ( areaY > 0) {//下滑
	    }else if ( areaY < 0 ) {//上滑  
	    }else{//单击
	    }
	});

	//-----左滑动
	var startX = 0,startY = 0;
	var moveEndX = 0,moveEndY = 0;
	var areaX = 0,areaY = 0;
	$(".slide-info2-item").on("touchstart", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }   
	    startX = e.originalEvent.changedTouches[0].pageX,
	    startY = e.originalEvent.changedTouches[0].pageY;
	});
	$(".slide-info2-item").on("touchend", function(e) {
	    // 判断默认行为是否可以被禁用
	    if (e.cancelable) {
	        // 判断默认行为是否已经被禁用
	        if (!e.defaultPrevented) {
	            e.preventDefault();
	        }
	    }               
	    moveEndX = e.originalEvent.changedTouches[0].pageX,
	    moveEndY = e.originalEvent.changedTouches[0].pageY,
	    areaX = moveEndX - startX,
	    areaY = moveEndY - startY;

	    if ( areaX <-100 ) {//左滑 
	        $(this).animate({'left':'-168px'});
	        // console.log(moveEndX+' - '+startX);
	    }else if ( areaX > 100 ) {//右滑
	        $(this).animate({'left':'0px'});  
	    }else if ( areaY > 0) {//下滑
	    }else if ( areaY < 0 ) {//上滑  
	    }else{//单击
	    }
	});
// })
