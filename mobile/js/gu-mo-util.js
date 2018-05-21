var DEVICEWIDTH, DEVICEHEIGHT, DEFAULTIMG;
DEVICEWIDTH = window.screen.availWidth;
DEVICEHEIGHT = window.innerHeight;
DEFAULTIMG = '../../../image/mobile/sprite/@default.png';

var varUA = navigator.userAgent.toLowerCase();

var blank = {func: function() {return undefined}};

var gu = {
  jsonParser: function(jsonFileName, callback, after) {$.getJSON(jsonFileName, function(data) {callback && callback(data); after && after()}).error(function() {console.log('error')})},
  pageLoading: function(element, url, loadingAfter) {element.load(url, function() {loadingAfter && loadingAfter()})},
  ajaxAfter: function(ajCall) {$(document).ajaxComplete(function() {ajCall && ajCall()})},
  btnClick: function(btn, clickAfter) {btn.off('click').on('click', function() {clickAfter && clickAfter($(this))})},
  showCallback: function(element, showAfter) {element.show().ready(function() {showAfter && showAfter()})},
  hideCallback: function(element, hideAfter) {element.hide().ready(function() {hideAfter && hideAfter()})},
  slideUpCallback: function (element, speed, upAfter) {element.stop().slideUp(speed, function() {upAfter && upAfter()})},
  slideDownCallback: function (element, speed, downAfter) {element.stop().slideDown(speed, function() {downAfter && downAfter()})},
  scrollPosition: function(button, element, value, speed) {gu.btnClick(button, function() {element.stop().animate({scrollTop: value}, speed)})},
  scrollAnchor: function(button, speed, elementCont) {
    gu.btnClick(button, function($this) {
      var myName = $this.attr('data-name'), element = $this.closest('.gu_modal_layer'), basicTop = element.scrollTop(), value = basicTop + ($('#' + myName).position().top);
      if(elementCont) {
				basicTop = elementCont.scrollTop();
				value = basicTop + ($('#' + myName).position().top);
				elementCont.stop().animate({scrollTop: value}, speed);
			} else {
				element.stop().animate({scrollTop: value}, speed);
			}
    });
  },
  scrollInteraction: function(element, value, callback, callReset) {element.on('scroll', function() {var wst = element.scrollTop(); if(wst > value) {callback && callback();}else{callReset && callReset();}})},
  deviceWidth: function(element, widthAfter) {element.css('width', DEVICEWIDTH + 'px').ready(function() {widthAfter && widthAfter()})},
  deviceHeight: function(element, heightAfter) {element.css('height', DEVICEHEIGHT + 'px').ready(function() {heightAfter && heightAfter()})},
  totalSize: function(element, sizeAfter) {element.css({'width':DEVICEWIDTH + 'px', 'height':DEVICEHEIGHT + 'px'}).ready(function() {sizeAfter && sizeAfter()})},
  boxSize: function(parentE, childE, totalWidAfter) {
    var resultW = 0;
    childE.each(function() {var ml = 0; var mlValue = parseFloat($(this).css('margin-left').replace('px','')); if (mlValue > 0) {ml = mlValue} var myW = ($(this).outerWidth() + ml); resultW =  (resultW + myW)});
    parentE.css('width', (resultW + 1) + 'px');
    totalWidAfter && totalWidAfter();
  },
  setIndicator: function(touchArea, standard, indicator) {
    if(standard.length > 1) {
      switch (indicator) {
        case 'bullet':
          touchArea.find('> div').append('<ol class="gu_paging_bullet"></ol>');
          var myUl = touchArea.find('.gu_paging_bullet');
          for (var i = 0; i < standard.length; i++) {i == 0 ? myUl.append('<li class="gu_on"><a href="javascript:void(0);">' + i + '</a></li>') : myUl.append('<li><a href="javascript:void(0);">' + i + '</a></li>')}
          break;
        case 'text':
          touchArea.find('> div').append('<div class="gu_paging_text"></div>');
          var myBox = touchArea.find('.gu_paging_text');
          myBox.html('<strong> 1' + '</strong> / <span>' + standard.length + '</span>');
          break;
        default: break;
      }
    }
  },
  resultHeight: function(li, margin) {var value = 0; for (var i = 0; i < li.length; i++) {value = value + (li.eq(i).height()) + margin;} return value;},
  hideAddStyle: function(hide, add, className) {hide.hide(); add.addClass(className);},
  addList: function(my, myName, inner) {for (var i = 0; i < my.length; i++) {inner.append('<li><a href="javascript:void(0);">' + (my[i])[myName] + '</a></li>');}},
  dupleAddList: function(my, myName, selected, subName, inner) {
    for (var i = 0; i < my.length; i++) {if (selected == my[i][myName]) {for (var n = 0; n < my[i][subName].length; n++) {inner.append('<li><a href="javascript:void(0);">' + my[i][subName][n] + '</a></li>');}}}
  },
  whenDone: function(element, when, done) {element.stop().animate({'opacity' : '1'}, 0, function() {when && when($(this))}).animate({'opacity' : '1'}, 100, function() {done&&done($(this))})},
  focusInOut: function(input, inFunc, outFunc) {input.on('focusin', function() {inFunc && inFunc();}); input.on('focusout', function() {outFunc && outFunc();});},
  leftAni: function(element, value, speed, aniAfter) {element.stop().animate({'margin-left':value + 'px'}, speed, function() {aniAfter && aniAfter()})},
  timeCallback: function(time, timeCall) {setTimeout(function() {timeCall && timeCall()}, time)},
  eleSize: function(list, child) {
    list.find('li:nth-child(2n)').each(function() {
      var myp = $(this).find(child), brp = $(this).prev('li').find(child);
      if(myp.height() > brp.height()) {myp.css('height', myp.height() + 'px'); brp.css('height', myp.height() + 'px');} else {myp.css('height', brp.height() + 'px'); brp.css('height', brp.height() + 'px');}
    });
  },
  lazyCall: function() {$('img').lazy({effect:'fadeIn',effectTime:1000,threshold:200})},
  lastSize: function(element, value) {element.css('height', value + 'px')}
}

gu.ajaxAfter(gu.lazyCall);
