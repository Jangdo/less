var blank = {func: function() {return undefined;}};
var DEFAULTIMAGE;
DEFAULTIMAGE = '../../image/sprite/@default.png';

var gu = {
  jsonParser: function(jsonFileName, callback, after) {$.getJSON(jsonFileName, function(data) {callback && callback(data); after && after()}).error(function() {console.log('error!')})},
  pageLoading: function(element, url, loadingAfter) {element.load(url, function(responseTxt, statusTxt, xhr) {if(statusTxt == 'success') {loadingAfter && loadingAfter();}if(statusTxt == 'error') {console.log('html load error!')}})},
  ajaxAfter: function(ajCall) {$(document).ajaxComplete(function() {ajCall && ajCall()})},
  onClick: function(btn, clickCall) {btn.off('click').on('click', function() {clickCall && clickCall($(this))})},
  showCallback: function(element, showAfter) {element.show().ready(function() {showAfter && showAfter(); gu.layerDie()})},
  hideCallback: function(element, hideAfter) {element.hide().ready(function() {hideAfter && hideAfter()})},
  slideUpCallback: function (element, speed, upAfter) {element.stop().slideUp(speed, function() {upAfter && upAfter()})},
  slideDownCallback: function (element, speed, downAfter) {element.stop().slideDown(speed, function() {downAfter && downAfter()})},
  focusLive: function(element, inFocus, outFocus) {element.focusin(function() {inFocus && inFocus()}).focusout(function() {outFocus && outFocus()})},
  scrollPosition: function(button, element, value, speed) {gu.onClick(button, function() {element.stop().animate({scrollTop: value}, speed)})},
  scrollInteraction: function(value, scrollCallback, callReset) {$(window).on('scroll', function() {var wst = $(window).scrollTop(); if(wst > value) {scrollCallback && scrollCallback();}else{callReset && callReset();}})},
  bgClickInteraction: function(notElement, element, bgBack) {$('body > *').not(notElement).on('click', function() {element.hide(); bgBack && bgBack();})},
  boxSize: function(parentE, childE, sizeCallback) {var resultW = 0; childE.each(function() {var myW = $(this).outerWidth(true); resultW =  (resultW + myW)}); parentE.css('width', resultW + 'px'); sizeCallback && sizeCallback();},
  slidePrev: function(btn, ul, li, slideCallback) {
    var liw = li.width(), lileng = li.length;
    gu.onClick(btn, function() {
      var mLeft = parseInt(ul.css('margin-left').replace('px', ''));
      if(mLeft%liw == 0) {
        if(mLeft == 0) {ul.stop().animate({ 'margin-left' : ((liw * -1) * (lileng - 1)) + 'px'}, 0, function() {slideCallback && slideCallback()})}
        else {ul.stop().animate({ 'margin-left' : (mLeft + liw) + 'px'}, 0, function() {slideCallback && slideCallback()})}
      }
    });
  },
  slideNext: function(btn, ul, li, nextCall) {
    var liw = li.width(), lileng = li.length;
    gu.onClick(btn, function() {
      var mLeft = parseInt(ul.css('margin-left').replace('px', ''));
      if(mLeft%liw == 0) {
        if(mLeft == ((liw * -1) * (lileng - 1))) {ul.stop().animate({ 'margin-left' : '0px'}, 0, function() {nextCall && nextCall()})}
        else {ul.stop().animate({ 'margin-left' : (mLeft + (liw * -1)) + 'px'}, 0, function() {nextCall && nextCall()})}
      }
    });
  },
  slideCountText: function(ul, li, span) {
    var liw = li.width(); var mLeft = parseInt(ul.css('margin-left').replace('px', '')); var absValue = Math.abs(mLeft); var liveIndex = (absValue/liw) + 1; var prev = $('.gu_btn_slide_prev'), next = $('.gu_btn_slide_next'); span.text(liveIndex);
    //gu.bothSide(liveIndex, prev, next, li);
  },
  bothSide: function(liveIndex, prev, next, li) {if (liveIndex == 1) {prev.hide(); next.show();} else if (liveIndex > 1 && liveIndex < li.length) {prev.show(); next.show();} else if (liveIndex == li.length) {prev.show(); next.hide();}},
  classCall: function($this, brother) {var myIndex = $this.parent('li').index(); $this.parent('li').siblings().removeClass('gu_on'); $this.parent('li').addClass('gu_on'); brother.removeClass('gu_on'); brother.eq(myIndex).addClass('gu_on')},
  eqOn: function(element, num, className) {element.removeClass(className); element.eq(num).addClass(className)},
  slideChange: function(btn, element, ul, li, span, brother, besideCall) {
    gu.onClick(btn, function($this) {
      var myIndex = $this.parent('li').index(); gu.classCall($this, brother);
      ul.stop().animate({'margin-left' : ((li.width()) * (myIndex)) * -1}, 200, function() {gu.slideCountText(ul, li, element.find('.gu_slide_page_text > span'))});
      besideCall && besideCall($this);
    });
  },
  tableCaption: function() {
    if($('table').length > 0) {
      $('table').each(function() {
        $(this).prepend('<caption />'); var caption = $(this).find('caption'); var th = $(this).find('th');
        for(var i = 0; i < th.length; i++){if (i == (th.length - 1)) {var txt = th.eq(i).text() + '에 대한 표입니다.'; caption.append(txt);} else {var txt = th.eq(i).text() + ','; caption.append(txt);}}
      });
    }
  },
  resultHeight: function(li, margin) {var value = 0; for (var i = 0; i < li.length; i++) {value = value + (li.eq(i).height()) + margin;} return value;},
  tgStyle: function(element, className) {gu.onClick(element, function($this) {$this.toggleClass(className)})},
  appendCallback: function(element, html, appCall) {element.append(html).ready(function() {appCall && appCall()})},
  tabs: function(btn, box, className, tabContents, showFunc) {
    gu.onClick(btn, function($this) {
      var myli = $this.parent(); myli.siblings().removeClass(className); myli.addClass(className);
      var idx = myli.index(); box.find(tabContents).find('> div').hide(); gu.showCallback(box.find(tabContents).find('> div').eq(idx), function() {showFunc && showFunc()});
    });
  },
  timeCallback: function(time, timeCall) {setTimeout(function() {timeCall && timeCall()}, time)},
  whenDone: function(element, whenCall, doneCall, time) {element.stop().animate({'opacity' : '1'}, time, function() {whenCall && whenCall()}).animate({'opacity' : '1'}, time, function() {doneCall && doneCall()})},
  layerCenter: function(popup) {var ph = (popup.find('> div').height()/2); popup.find('> div').css('margin-top', (ph * -1) + 'px')},
  winHalfSize: function() {return ($(window).width())/2;},
  winFullSize: function() {return ($(window).width());},
  imageChange: function(btn, bimg) {gu.onClick(btn, function($this) {var myimg = $this.find('img').attr('src'); bimg.find('img').attr('src', myimg); $this.parent('li').siblings().removeClass('gu_on'); $this.parent('li').addClass('gu_on')})},
  onHover: function(element, hoverCall, hoverOut) {element.hover(function() {hoverCall && hoverCall($(this))}, function() {hoverOut && hoverOut($(this))})},
  layerDie: function() {
    if($('.gu_popup_layer').length > 0) {
      $('.gu_popup_layer').each(function() {
        if($(this).css('display') == 'block') {
          var mylayer = $(this), myElement = mylayer.find('> *'); var clickCall = false;
          gu.onClick(mylayer.find('.gu_popup_con'), function() {clickCall = true; console.log(clickCall)});
          gu.onClick(mylayer, function() {if(clickCall) {console.log('if?, : ' + clickCall)} else {console.log('else?, : ' + clickCall); mylayer.find('.gu_popup_btn_close').triggerHandler('click');} clickCall = false;});
        }
      });
    }
  },
  scrollAnchor: function(button, speed) {
    gu.onClick(button, function($this) {
      var myName = $this.attr('data-name'), element = $this.closest('.gu_modal_size_chart'), basicTop = element.scrollTop(), value = basicTop + ($('#' + myName).position().top);
      $('html, body').stop().animate({scrollTop: value}, speed);
    });
  },
  slefClose: function(element) {gu.onClick(element, function() {self.close()})},
  lazyCall: function() {$('img').lazy({effect:'fadeIn',effectTime:1000,threshold:200});},
  ie9: function() {
    $(document).ready(function() {
      var ua = window.navigator.userAgent;
      var msie = ua.indexOf('MSIE ');
      var trident = ua.indexOf('Trident/');
      var edge = ua.indexOf('Edge/');
      if (msie > 0 || trident > 0 || edge > 0) {
        $('input[type="text"]').each(function() {
          var myph = $(this).attr('placeholder'); $(this).val(myph);
          if ($(this).val() == myph) {$(this).on('focusin', function() {$(this).val('');});}
          $(this).on('focusout', function() {
            var myStatus = $(this).val();
            if ($(this).val() == '') {$(this).val(myph);} else {$(this).val(myStatus);}
            if ($(this).val() == myStatus) {$(this).on('focusin', function() {$(this).val(myStatus);});}
          });
        });
      } else {console.log('not ie')}
    });
  }
};

gu.ajaxAfter(gu.lazyCall);
gu.ie9();
