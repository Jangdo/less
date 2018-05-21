var likeSvg = {
  off: '<svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(27, 27, 27); width: 1.91rem; height:1.75rem;"><path d="M514.84,984.62h0c-17.06,0-17.06-2.92-184.88-168.69C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,32,213.34,93,56.88-58.13,130.84-93,213.31-93,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92,531.89,981.69,531.89,981.69,514.84,984.62ZM303,114.29C177.52,114.29,74.39,219.72,74.39,348c0,57,22.31,108.29,69.67,168.13,83.63,105.48,301.05,313.56,370.75,382,69.7-65.57,284.34-276.47,367.94-382C930.14,456.31,952.45,405,952.45,348c0-128.29-103.13-233.72-228.57-233.72-72.48,0-139.37,34.19-184,94-11.15,17.08-39,17.08-50.18,0C442.33,148.48,375.44,114.29,303,114.29Z"></path></svg>',
  on: '<svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(255, 80, 80); width: 1.91rem; height:1.75rem;"><path d="M330,815.92C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,48,213.34,109,56.88-58.13,130.84-109,213.31-109,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92c-165,165.77-165,165.77-182,168.69C497.78,984.62,497.78,981.69,330,815.92Z"></path></svg>',
  close: '<svg viewBox="0 0 1024 1024" style="fill: rgb(27, 27, 27); width: 1.91rem; height: 1.91rem; display: inline;"><path d="M596,512.5l410.26-410.65c23.56-23.56,23.56-60.43,0-84.07-22.71-22.94-61.2-22.94-84.07,0L512,428.36,101.79,17.79A59.14,59.14,0,0,0,59.75,0H59.67a59.15,59.15,0,0,0-42,17.78c-23.48,23.63-23.48,60.51,0,84.07L428,512.5,17.72,923.15c-23.48,23.63-23.48,60.51.77,84.76,14,10.78,27.79,16.09,42.19,16.09,20,0,35.57-7.39,44-20.32L512,596.65l409.11,409.11c6.85,11.47,22.71,18.25,42.19,18.25,13.86,0,27.64-4.85,40.49-14.63,12.7-12.55,19.79-28.49,19.86-44.81a57.93,57.93,0,0,0-17.4-41.42Z"></path></svg>',
  toolOff: '<svg viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;"><path style="fill: rgb(218, 218, 218);" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377   c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004   c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937   C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938   c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907   c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936   c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993   c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477   c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861   c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"></path></svg>',
  toolOn: '<svg viewBox="0 0 92 92" style="enable-background:new 0 0 92 92;"><path style="fill: rgb(0, 0, 0);" d="M45.386,0.004C19.983,0.344-0.333,21.215,0.005,46.619c0.34,25.393,21.209,45.715,46.611,45.377   c25.398-0.342,45.718-21.213,45.38-46.615C91.656,19.986,70.786-0.335,45.386,0.004z M45.25,74l-0.254-0.004   c-3.912-0.116-6.67-2.998-6.559-6.852c0.109-3.788,2.934-6.538,6.717-6.538l0.227,0.004c4.021,0.119,6.748,2.972,6.635,6.937   C51.904,71.346,49.123,74,45.25,74z M61.705,41.341c-0.92,1.307-2.943,2.93-5.492,4.916l-2.807,1.938   c-1.541,1.198-2.471,2.325-2.82,3.434c-0.275,0.873-0.41,1.104-0.434,2.88l-0.004,0.451H39.43l0.031-0.907   c0.131-3.728,0.223-5.921,1.768-7.733c2.424-2.846,7.771-6.289,7.998-6.435c0.766-0.577,1.412-1.234,1.893-1.936   c1.125-1.551,1.623-2.772,1.623-3.972c0-1.665-0.494-3.205-1.471-4.576c-0.939-1.323-2.723-1.993-5.303-1.993   c-2.559,0-4.311,0.812-5.359,2.478c-1.078,1.713-1.623,3.512-1.623,5.35v0.457H27.936l0.02-0.477   c0.285-6.769,2.701-11.643,7.178-14.487C37.947,18.918,41.447,18,45.531,18c5.346,0,9.859,1.299,13.412,3.861   c3.6,2.596,5.426,6.484,5.426,11.556C64.369,36.254,63.473,38.919,61.705,41.341z"></path></svg>',
  slideOff: '<svg width="2.4166rem" height="2.25rem" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path id="SVGID_1_" d="M12.243,5.344c-4.655,0-8.482,3.885-8.482,8.613c0,2.1,0.827,3.99,2.584,6.195 c3.104,3.889,11.172,11.555,13.759,14.076c2.587-2.416,10.552-10.188,13.655-14.076c1.758-2.205,2.586-4.095,2.586-6.195 c0-4.728-3.826-8.613-8.48-8.613c-2.692,0-5.173,1.259-6.829,3.465c-0.414,0.63-1.447,0.63-1.861,0 C17.415,6.604,14.933,5.344,12.243,5.344z M20.105,37.417C20.105,37.417,20,37.417,20.105,37.417 c-0.633,0-0.633-0.109-6.861-6.217c-4.329-4.286-7.389-7.503-9.079-9.54C1.95,18.981,1,16.517,1,13.838 	C1,7.621,5.96,2.583,12.083,2.583c3.061,0,5.805,1.179,7.917,3.429c2.111-2.143,4.855-3.429,7.917-3.429 C34.039,2.583,39,7.621,39,13.838c0,2.785-0.95,5.143-3.167,7.822c-1.688,2.037-4.645,5.254-8.972,9.54 C20.738,37.308,20.738,37.308,20.105,37.417z"></path></svg>',
  slideOn: '<svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(255, 80, 80); width:2.41666rem; height:2.25rem;"><path d="M330,815.92C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,48,213.34,109,56.88-58.13,130.84-109,213.31-109,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92c-165,165.77-165,165.77-182,168.69C497.78,984.62,497.78,981.69,330,815.92Z"></path></svg>',
  starBg: '<span><svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(218, 218, 218); width:1.3rem; height:1.3rem;"><path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path></svg><span class="gu_star_position"><svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(255, 205, 120); width:1.3rem; height:1.3rem;"><path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path></svg></span></span>',
  starTop: '<svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(218, 218, 218); width:1.3rem; height:1.3rem;"><path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path></svg>',
  starBottom: '<svg viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(255, 205, 120); width:1.3rem; height:1.3rem;"><path d="M1024 397.050l-353.78-51.408-158.22-320.582-158.216 320.582-353.784 51.408 256 249.538-60.432 352.352 316.432-166.358 316.432 166.358-60.434-352.352 256.002-249.538z"></path></svg>'
}

var front = {
  storeMenuDisplay: function(jsonUrl, ul, dataName, menuAfter) {
    if (ul.length > 0) {
      gu.jsonParser(jsonUrl, function(data) {
        var itemData = data[dataName];
        var getMenuItem = function(itemData) {
          var item;
          if (itemData.sub) {
            item = $('<li>').append($('<a>', {href: itemData.link, target: itemData.target, class: 'gu_interaction_sub_menu', html: itemData.name}));
            var subList = $('<ul>');
            $.each(itemData.sub, function() {subList.append(getMenuItem(this))});
            item.append(subList);
          } else {
            item = $('<li>').append($('<a>', {href: itemData.link, target: itemData.target, class: 'gu_arrow', html: itemData.name}));
          }
          return item;
        };
        $.each(itemData, function() {ul.append(getMenuItem(this))});
      }, function() {menuAfter && menuAfter()});
    }
  },
  storeMenuInteraction: function(btn, nav, className, openCallback, closeCallback) {
    gu.btnClick(btn, function($this) {
      if($this.hasClass(className)) {nav.show(); $this.removeClass(className); openCallback && openCallback();}
      else {nav.hide(); $this.addClass(className); closeCallback && closeCallback();}
    });
  },
  sideOpenList: function(btn, className, sideCloseCallback, sideOpenCallback) {
    gu.btnClick(btn, function($this) {
      if ($this.hasClass(className)) {
        $this.next('ul').hide(); $this.removeClass(className);
        sideCloseCallback && sideCloseCallback();
      } else {
        var myClass = $this.parent('li').attr('class');
        switch (myClass) {
          case 'gu_interaction_second': $('.gu_interaction_second').find('ul').hide(); $('.gu_interaction_second').find('> a').removeClass(className); break;
          case 'gu_interaction_third': $('.gu_interaction_third').find('ul').hide(); break;
          default: break;
        }
        $this.next('ul').show(); $this.addClass(className);
        sideOpenCallback && sideOpenCallback();
      }
    });
  },
  slide: function(touchArea, moveElement, standard, indicator) {
    gu.setIndicator(touchArea, standard, indicator);
    if(standard.length > 1) {
      var swipeOptions = {triggerOnTouchEnd: true, swipeStatus: swipeStatus, allowPageScroll: 'vertical', threshold: 75};
      touchArea.swipe(swipeOptions);
      var liWidth = standard.closest('.slide_banner').width(), maxImages = standard.length; standard.css('width', liWidth + 'px');
      var speed = 500;
      var currentImg = 0;
      var slidePN = $('.gu_btn_slide'), goPrev = $('.gu_btn_left'), goNext = $('.gu_btn_right');
      function swipeStatus(event, phase, direction, distance) {
        if (phase == 'move' && (direction == 'left' || direction == 'right')) {
          var duration = 0;
          switch (direction) {
            case 'left': swipeCalls(standard, moveElement, (liWidth * currentImg) + distance, duration); break;
            case 'right': swipeCalls(standard, moveElement, (liWidth * currentImg) - distance, duration); break;
            default: break;
          }
        }
        else if (phase == 'cancel') {swipeCalls(standard, moveElement, liWidth * currentImg, speed)}
        else if (phase == 'end') {
          switch (direction) {
            case 'left': swipeNext(touchArea, moveElement, maxImages, standard, liWidth, speed, indicator); break;
            case 'right': swipePrevious(touchArea, moveElement, maxImages, standard, liWidth, speed, indicator); break;
            default: break;
          }
        }
      }
      function swipeCalls(standard, moveElement, distance, duration) {
        var value = (distance < 0 ? 1 : -1) * Math.abs(distance); moveElement.stop().animate({'margin-left' : value + 'px'}, duration, function() {
          if ((touchArea.find(slidePN)).length > 0) {
            var mLeft = parseInt(moveElement.css('margin-left').replace('px', ''));
            if (mLeft >= 0) {goPrev.hide(); goNext.show();}
            else if (mLeft < 0 && mLeft > (liWidth * (maxImages - 1)) * -1) {goPrev.show(); goNext.show();}
            else if (mLeft <= (liWidth * (maxImages - 1)) * -1) {goPrev.show(); goNext.hide();}
          }
        });
      }
      function swipeNext(touchArea, moveElement, maxImages, standard, liWidth, speed, indicator) {
        currentImg = Math.min(currentImg + 1, maxImages - 1); swipeCalls(standard, moveElement, liWidth * currentImg, speed);
        switch (indicator) {
          case 'bullet': touchArea.find('.gu_paging_bullet > li').removeClass('gu_on'); touchArea.find('.gu_paging_bullet > li').eq(currentImg).addClass('gu_on'); break;
          case 'text': touchArea.find('.gu_paging_text > strong').text((currentImg + 1)); break;
          default: break;
        }
      }
      function swipePrevious(touchArea, moveElement, maxImages, standard, liWidth, speed, indicator) {
        currentImg = Math.max(currentImg - 1, 0); swipeCalls(standard, moveElement, liWidth * currentImg, speed);
        switch (indicator) {
          case 'bullet': touchArea.find('.gu_paging_bullet > li').removeClass('gu_on'); touchArea.find('.gu_paging_bullet > li').eq(currentImg).addClass('gu_on'); break;
          case 'text': touchArea.find('.gu_paging_text > strong').text((currentImg + 1)); break;
          default: break;
        }
      }
      if ((touchArea.find(slidePN)).length > 0) {
        gu.btnClick(goPrev, function() {
          swipePrevious(touchArea, moveElement, maxImages, standard, liWidth, speed, indicator);
        });
        gu.btnClick(goNext, function() {
          swipeNext(touchArea, moveElement, maxImages, standard, liWidth, speed, indicator);
        });
      }
    }
  },
  leftOpenLayer: function(clickArea, clickLi, layer, dimmed, leftOpenCallback) {
    gu.btnClick(clickArea, function(){
      dimmed.css('z-index', '5').fadeIn(300, function(){
        var offTop = clickArea.offset().top, pli = clickLi.height(), offResult = (offTop - pli); layer.css('top', offResult + 'px'); layer.stop().animate({'margin-left' : '0'}, 300, function(){leftOpenCallback && leftOpenCallback()});
      });
    });
  },
  leftCloseLayer: function(clickArea, layer, dimmed, leftCloseCallback) {
    gu.btnClick(clickArea, function(){layer.stop().animate({'margin-left' : (layer.outerWidth() * -1) + 'px'}, 300, function() {dimmed.fadeOut(300); leftCloseCallback && leftCloseCallback()});});
  },
  accordion: function(accArea, anchor, className, layer, type, accrOpenCallback) {
    gu.btnClick(anchor, function($this) {
      var myCon = $this.parent();
      if(myCon.hasClass(className)) {
        switch (type) {
          case 'multiple': gu.slideUpCallback(myCon.find(layer), 100, blank.func); myCon.removeClass(className); break;
          case 'single': gu.slideUpCallback($this.closest(accArea).find(layer), 100, blank.func); myCon.removeClass(className); myCon.siblings().removeClass(className); break;
          default: break;
        }
      } else {
        switch (type) {
          case 'multiple': myCon.addClass(className); gu.slideDownCallback(myCon.find(layer), 100, function(){accrOpenCallback && accrOpenCallback()}); break;
          case 'single': myCon.siblings().removeClass(className); myCon.addClass(className); gu.slideUpCallback($this.closest(accArea).find(layer), 100, blank.func); gu.slideDownCallback(myCon.find(layer), 100, function(){accrOpenCallback && accrOpenCallback()}); break;
          default: break;
        }
      }
    });
  },
  tabs: function(tabArea, tabAnchor, className, tabContainer) {
    gu.btnClick(tabAnchor, function($this) {
      var myCon = $this.parent(), idx = myCon.index();
      myCon.siblings().removeClass(className); myCon.addClass(className); $this.closest(tabArea).find(tabContainer).removeClass(className); $this.closest(tabArea).find(tabContainer).eq(idx).addClass(className);
    });
  },
  dataIdCall: function(playArea, anchor, titleBox, dataName, className) {
    gu.btnClick(anchor, function($this) {
      var myCon = $this.parent(), idx = myCon.index(), mytxt = $this.text(), myUl = $this.closest('ul');
      myCon.siblings().find('> a').removeClass(className); $this.addClass(className); $this.closest(playArea).find(titleBox).attr('data-name', dataName + idx).text(mytxt);
      gu.slideUpCallback(myUl, 100, function(){playArea.removeClass(className)});
    });
  },
  resetData: function(slideElement, textElement, listElement, className, resetAfter) {
    textElement.removeAttr('data-name').empty(); listElement.removeClass(className);
    gu.slideUpCallback(slideElement, 100, function(){resetAfter && resetAfter()});
  },
  productsGrid: function(prJson, ea, ul, dataName, imgFolder, prCallback) {
    var liWid = (ul.outerWidth()/2), liMg = 0;
    gu.jsonParser(prJson, function(data) {
      var prData = data[dataName];
      var getPrItem = function(prData) {
        var colorList = new Array();
        var colors = prData.color;
        var flags = prData.flag;
        if(prData.like == 'on') {var myLike = '<a href="javascript:void(0);" class="gu_like gu_on">' + likeSvg.on + '</a>'} else {var myLike = '<a href="javascript:void(0);" class="gu_like">' + likeSvg.off + '</a>'}
        var inImage = '<img src="' + DEFAULTIMG + '" data-src="' + imgFolder + prData.image + '" alt="' + prData.name + '">';
        var inSpan = '<span class="gu_img">' + inImage + '</span>';
        if (colors) {
          for (var i = 0; i < colors.length; i++) {
            colorList[i] = '<span><img src="' + imgFolder + colors[i].image + '" alt="' + colors[i].name + '"></span>';
          }
          var stringColor = ((colorList).toString()).replace(/,/g,'');
          var inDiv = '<div class="gu_color_information">' + stringColor + '</div>';
        } else {var inDiv = '';}
        var inCategory = '<span class="gu_prod_category">' + prData.category + '</span>';
        var inName = '<span class="gu_title">' + prData.name + '</span>';
        var gray = 'gu_flag_gray', red = 'gu_flag_red';
        if(flags.new) {var flagNew = '<span class="gu_icon_text_box ' + gray + '">' + flags.new + '</span>';}else{var flagNew = '';} // 신상품
        if(flags.onitem) {var flagOnItem = '<span class="gu_icon_text_box ' + gray + '">' + flags.onitem + '</span>';}else{var flagOnItem = '';} // 온라인단독 상품
        if(flags.onprice) {var flagOnPrice = '<span class="gu_icon_text_box ' + gray + '">' + flags.onprice + '</span>';}else{var flagOnPrice = '';} // 온라인단독 가격
        if(flags.limited) {var flagLimited = '<span class="gu_icon_text_box ' + red + '">' + flags.limited + '</span>';}else{var flagLimited = '';} // 기간한정가격
        if(flags.price) {var flagPrice = '<span class="gu_icon_text_box ' + red + '">' + flags.price + '</span>';}else{var flagPrice = '';} // 가격인하
        if(flags.limited || flags.price) { inPrice = '<div class="gu_product_price_information gu_price_red">' + prData.price + '<em>원</em></div>';}
        else { inPrice = '<div class="gu_product_price_information">' + prData.price + '<em>원</em></div>';}
        if(flags.sale) {var flagSale = '<span class="gu_icon_text_box ' + gray + '">' + flags.sale + '</span>';}else{var flagSale = '';} // 기간한정판매
        if(flags.dc) {var flagDc = '<span class="gu_icon_text_box ' + gray + '">' + flags.dc + '</span>';}else{var flagDc = '';} // 세트할인
        if(flags.option) {var flagOption = '<span class="gu_icon_text_box ' + gray + '">' + flags.option + '</span>';}else{var flagOption = '';} // 옵션할인
        if(flags.employee) {var flagEmployee = '<span class="gu_icon_text_box ' + gray + '">' + flags.employee + '</span>';}else{var flagEmployee = '';} // 사원판매
        if(flags.soldout) {var flagSoldOut = '<span class="gu_icon_text_box ' + gray + '">' + flags.soldout + '</span>';}else{var flagSoldOut = '';} // 품절임박
        if(flags.plan) {var flagPlan = '<span class="gu_icon_text_box ' + gray + '">' + flags.plan + '</span>';}else{var flagPlan = '';} // 출시예정
        var inFlag = '<div class="gu_flag_box">'+ inCategory + flagLimited + flagPrice + flagNew + flagOption + '</div>';
        var po = parseFloat(prData.point);
        var dicFront = Math.floor(po), dicBack = parseInt((po.toString()).substr(2, 1));
        var pointFirst = 0, pointSecond = 0, pointThird = 0, pointFourth = 0, pointFifth = 0;
        switch (dicFront) {
          case 0: pointFirst = (dicBack * 10); break;
          case 1: pointFirst = 100; pointSecond = (dicBack * 10); break;
          case 2: pointFirst = 100; pointSecond = 100; pointThird = (dicBack * 10); break;
          case 3: pointFirst = 100; pointSecond = 100; pointThird = 100; pointFourth = (dicBack * 10); break;
          case 4: pointFirst = 100; pointSecond = 100; pointThird = 100; pointFourth = 100; pointFifth = (dicBack * 10); break;
          case 5: pointFirst = 100; pointSecond = 100; pointThird = 100; pointFourth = 100; pointFifth = 100; break;
          default: break;
        }
        var inPoint = '<div title="' + po + '" class="gu_product_star_information"><span>' + likeSvg.starTop + '<span class="gu_star_position" style="width:' + pointFirst + '%">' + likeSvg.starBottom + '</span></span><span>' + likeSvg.starTop + '<span class="gu_star_position" style="width:' + pointSecond + '%">' + likeSvg.starBottom + '</span></span><span>' + likeSvg.starTop + '<span class="gu_star_position" style="width:' + pointThird + '%">' + likeSvg.starBottom + '</span></span><span>' + likeSvg.starTop + '<span class="gu_star_position" style="width:' + pointFourth + '%">' + likeSvg.starBottom + '</span></span><span>' + likeSvg.starTop + '<span class="gu_star_position" style="width:' + pointFifth + '%">' + likeSvg.starBottom + '</span></span></div>';
        var inElements = inSpan + inDiv + inName + inFlag + inPoint + inPrice;
        var inHtml = myLike + '<a href="' + prData.link + '" target="' + prData.target + '" class="gu_interaction_line">' + inElements + '</a>';
        var topValue, leftValue, countClass;
        var friends = ((ul.find('> li').length)%2);
        switch (friends) {
          case 0: leftValue = '0px'; countClass = 'gu_interaction_first'; var firstLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(firstLi, liMg)) + 'px'; break;
          case 1: leftValue = ((liWid * 1) + (liMg * 1)) + 'px'; countClass = 'gu_interaction_second'; var secondLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(secondLi, liMg)) + 'px'; break;
          default: var topValue = '', leftValue = ''; break;
        }
        var proItem = $('<li>').css({'top' : topValue, 'left' : leftValue}).addClass(countClass).append(inHtml);
        return proItem;
      };

      var allSize = prData.length;
      var more = $('.gu_btn_mid_more');
      var moreAnchor = '<a href="javascript:void(0);" title="검색상품 더보기">더보기</a>';
      var noData = $('.gu_no_data_area');
      var eaCount = 0;
      var eaBasic = 1;
      var dataGrid = {
        borderControl: function() {
          ul.find('> li').find('a.gu_interaction_line').removeClass('gu_no_line');
          var lst = ul.find('> li').length;
          var last = (ul.find('> li').eq(lst - 1).offset().top) + (ul.find('> li').eq(lst - 1).height());
          var prev = (ul.find('> li').eq(lst - 2).offset().top) + (ul.find('> li').eq(lst - 2).height());
          if (prev > last) {ul.find('> li').eq(lst - 2).find('a.gu_interaction_line').addClass('gu_no_line')}
          else {ul.find('> li').eq(lst - 1).find('a.gu_interaction_line').addClass('gu_no_line')}
        },
        loadPrData: function() {
          if (allSize < ea * eaBasic) {
            for (var i = eaCount; i < allSize; i++) {ul.append(getPrItem(prData[i]));}
            more.find('> a').remove();
          } else {
            for (var i = eaCount; i < (ea * eaBasic); i++) {ul.append(getPrItem(prData[i])); eaCount++;} eaBasic++;
          }
        },
        positions: function() {
          var first = $('.gu_interaction_first'), second = $('.gu_interaction_second');
          var liGrp = new Array();
          liGrp[0] = (gu.resultHeight(first, liMg)), liGrp[1] = (gu.resultHeight(second, liMg));
          liGrp.sort(function(a, b) {return b - a});
          gu.lastSize(ul, liGrp[0]);
          dataGrid.borderControl();
        }
      }
      if (allSize > 0) {
        noData.hide();
        dataGrid.loadPrData(); dataGrid.positions();
        if (ea <= allSize) {
          more.append(moreAnchor).ready(function() {
            gu.btnClick(more.find('> a'), function() {
              dataGrid.loadPrData(); dataGrid.positions(); gu.lazyCall();
            });
          });
        }
      } else {noData.show(); ul.remove(); $('.gu_sorting_area > .gu_select_custom').addClass('gu_disabled');}
    }, function() {prCallback && prCallback();});
  },
  alltype:function(btn, element, className) {
    gu.btnClick(btn, function($this) {
      if ($this.hasClass(className)) {$this.removeClass(className); $this.next(element).removeClass(className)}
      else {$this.addClass(className); $this.next(element).addClass(className)}
    });
  },
  starPoint: function(element, subElement) {
    element.each(function() {
      var mySpan = $(this).find(subElement); mySpan.css('width', '0%');
      var myPoint = parseFloat($(this).attr('title')), dicFront = Math.floor(myPoint), dicBack = parseInt((myPoint.toString()).substr(2, 1));
      for (var i = 0; i < dicFront; i++) {$(this).find('> span').eq(i).find(subElement).css('width', '100%')}
      $(this).find('> span').eq(dicFront).find(subElement).css('width', (dicBack * 10) + '%');
    });
  },
  lifeWear: function(lifeWear, modalLifeWear, cancelCall, gotoCall, moveEndCallback, afterCallback) {
    var wearPhoto = lifeWear.find('ul > li img');
    gu.btnClick(lifeWear.find('ul > li > a'), function($myWear) {
      var myWearImg = $myWear.find('> img');
      var dataPhoto = parseInt(myWearImg.attr('data-photo'));
      var imgContainer = $('.gu_image_list > ul');
      var photoSize = wearPhoto.length;
      var currentImgId = lifeWear.find('img[data-photo="' + dataPhoto + '"]').attr('id');
      afterCallback && afterCallback(currentImgId);
      gu.showCallback(modalLifeWear, function() {
        var slideSet = {
          basic: function(dataPhoto, slideSetBack) {
            var myWearSrc = lifeWear.find('img[data-photo="' + dataPhoto + '"]').attr('src');
            var myWearAlt = lifeWear.find('img[data-photo="' + dataPhoto + '"]').attr('alt');
            if (dataPhoto == 0) {var prevNum = (photoSize - 1)} else {var prevNum = (dataPhoto - 1)}
            if (dataPhoto == (photoSize - 1)) {var nextNum = 0} else {var nextNum = (dataPhoto + 1)}
            var prevSrc = lifeWear.find('img[data-photo="' + prevNum + '"]').attr('src');
            var prevAlt = lifeWear.find('img[data-photo="' + prevNum + '"]').attr('alt');
            var nextSrc = lifeWear.find('img[data-photo="' + nextNum + '"]').attr('src');
            var nextAlt = lifeWear.find('img[data-photo="' + nextNum + '"]').attr('alt');
            var innerDataImg = '<li data-image="' + prevNum + '"><img src="' + prevSrc + '" alt="' + prevAlt + '"></li>';
            innerDataImg += '<li data-image="' + dataPhoto + '"><img src="' + myWearSrc + '" alt="' + myWearAlt + '"></li>';
            innerDataImg += '<li data-image="' + nextNum + '"><img src="' + nextSrc + '" alt="' + nextAlt + '"></li>';
            imgContainer.empty().html(innerDataImg).ready(function() {slideSetBack && slideSetBack()});
          },
          move: function(slideUl, value, speed, moveCall) {
            slideUl.stop().animate({'margin-left' : value}, speed, function() {moveCall && moveCall(); moveEndCallback && moveEndCallback();});
          },
          prevMotion: function(slideUl, wearLiWid, stopLeft) {
            var mleft = slideUl.css('margin-left');
            if (mleft == stopLeft + 'px') {
              slideSet.move(slideUl, '0px', 200, function() {
                dataPhoto = parseInt(slideUl.find('> li:first-child').attr('data-image'));
                slideSet.basic(dataPhoto, function() {slideUl.find('> li').css('width', wearLiWid + 'px'); slideSet.move(slideUl, stopLeft + 'px', 0, blank.func);});
              });
            }
          },
          nextMotion: function(slideUl, wearLiWid, moveLeft, stopLeft) {
            var mleft = slideUl.css('margin-left');
            if (mleft == stopLeft + 'px') {
              slideSet.move(slideUl, moveLeft + 'px', 200, function() {
                dataPhoto = parseInt(slideUl.find('> li:last-child').attr('data-image'));
                slideSet.basic(dataPhoto, function() {slideUl.find('> li').css('width', wearLiWid + 'px'); slideSet.move(slideUl, stopLeft + 'px', 0, blank.func);});
              });
            }
          },
          touch: function(slideUl, wearLiWid, moveLeft, stopLeft) {
            var slimSwipe = {triggerOnTouchEnd: true, swipeStatus: imgSlide, allowPageScroll: 'vertical', threshold: 75};
            slideUl.swipe(slimSwipe);
            function imgSlide(event, phase, direction, distance) {
              if (phase == 'move' && (direction == 'left' || direction == 'right')) {
                switch (direction) {
                  case 'left': slideSet.nextMotion(slideUl, wearLiWid, moveLeft, stopLeft); break;
                  case 'right': slideSet.prevMotion(slideUl, wearLiWid, stopLeft); break;
                  default: break;
                }
              }
            }
          }
        }
        var smallLayer = $('.gu_report_area');
        slideSet.basic(dataPhoto, function() {
          var slideUl = modalLifeWear.find('ul.gu_interaction_slide'); var wearLiWid = modalLifeWear.find('.gu_image_list').width(); var stopLeft = (wearLiWid * -1); var moveLeft = ((wearLiWid * 2) * -1);
          slideUl.find('> li').css('width', wearLiWid + 'px'); slideUl.css({'width' : (wearLiWid * 3) + 'px', 'margin-left' : stopLeft + 'px'});
          //prev
          gu.btnClick(modalLifeWear.find('.gu_btn_left_angle'), function() {slideSet.prevMotion(slideUl, wearLiWid, stopLeft);});
          //next
          gu.btnClick(modalLifeWear.find('.gu_btn_right_angle'), function() {slideSet.nextMotion(slideUl, wearLiWid, moveLeft, stopLeft);});
          //swipe
          slideSet.touch(slideUl, wearLiWid, moveLeft, stopLeft);
        });
        gu.btnClick(modalLifeWear.find('.gu_btn_modal_close'), function() {gu.hideCallback(smallLayer, function() {modalLifeWear.hide()}); imgContainer.find('> li').remove();});
        gu.btnClick($('.gu_btn_report'), function() {
          gu.slideDownCallback(smallLayer, 200, function() {
            gu.btnClick($('.gu_interaction_x'), function() {smallLayer.slideUp(200)});
            gu.btnClick($('.gu_cancel'), function() {gu.slideUpCallback(smallLayer, function() {cancelCall && cancelCall()})});
            gu.btnClick($('.gu_interaction_go'), function() {gotoCall && gotoCall()});
          });
        });
      });
    });
  },
  addSlideImage: function(box, index, data, type, zoom, setCallback) {
    var ul = box.find('> ul');
    var prevIdx, nextIdx;
    index == 0 ? prevIdx = (data.length - 1) : prevIdx = index - 1;
    index == (data.length - 1) ? nextIdx = 0 : nextIdx = index + 1;
    var setHtml = '<li data-call="' + prevIdx + '"><a href="' + data[prevIdx].href + '" target="' + data[prevIdx].target + '"><img src="' + data[prevIdx].src + '" alt="' + data[prevIdx].alt + '"></a></li>';
    setHtml += '<li data-call="' + index + '"><a href="' + data[index].href + '" target="' + data[index].target + '"><img src="' + data[index].src + '" alt="' + data[index].alt + '"></a></li>';
    setHtml += '<li data-call="' + nextIdx + '"><a href="' + data[nextIdx].href + '" target="' + data[nextIdx].target + '"><img src="' + data[nextIdx].src + '" alt="' + data[nextIdx].alt + '"></a></li>';
    if(type == true) {
      box.find('ol.gu_paging_bullet').remove();
      var indicator = '<ol class="gu_paging_bullet"></ol>';
      box.append(indicator).ready(function() {
        for (var i = 0; i < data.length; i++) {
          if (i == index) {box.find('ol.gu_paging_bullet').append('<li class="gu_on"><a href="javascript:void(0);">' + i + '</a></li>')}
          else {box.find('ol.gu_paging_bullet').append('<li><a href="javascript:void(0);">' + i + '</a></li>')}
        }
      });
    } else if (type == 'text') {
      box.find('.gu_paging_text').remove();
      box.append('<div class="gu_paging_text"><strong>' + (index + 1) + '</strong> / <span>' + data.length + '</span></div>');
    }
    ul.html(setHtml).ready(function() {
      ul.find('li').css('width', (box.width()) + 'px');
      ul.css({'width' : (box.width() * 3) + 'px', 'margin-left' : (box.width() * -1) + 'px'});
    });
    setCallback && setCallback();
  },
  addAloneImage: function(box, data, aloneCallback) {
    var ul = box.find('> ul'); box.find('ol.gu_paging_bullet').remove();
    ul.empty().removeAttr('style').html('<li><a href="' + data[0].href + '" target="' + data[0].target + '"><img src="' + data[0].src + '" alt="' + data[0].alt + '"></a></li>');
    aloneCallback && aloneCallback();
  },
  newSlide: function(box, data, indicator, zoom) {
    box.css('width', (box.width()) + 'px');
    var ul = box.find('> ul');
    var zoomAct = {
      trueCall: function() {
        if(zoom) {
          gu.btnClick(ul.find('> li > a'), function($this) {
            var myIndexEq = $this.parent().index(), myImgSrc = $this.find('> img').attr('src'), myImgAlt = $this.find('> img').attr('alt');
            var innerImage = '<img src="' + myImgSrc + '" alt="' + myImgAlt + '" style="width:' + data[myIndexEq].width + 'px; height:' + data[myIndexEq].height + 'px;">';
            var topScroll = (parseInt(data[myIndexEq].height)/2) - (DEVICEWIDTH/2);
            var leftScroll = (parseInt(data[myIndexEq].width)/2) - (DEVICEHEIGHT/2);
            gu.showCallback(zoomImg, function() {
              gu.whenDone($('.gu_zoom_img'), function($zt) {$zt.empty().append(innerImage);}, function($zt) {$zt.stop().animate({'scrollTop' : topScroll + 'px', 'scrollLeft' : leftScroll + 'px'}, 0)});
              gu.btnClick($('.gu_btn_modal_close'), function() {zoomImg.hide(); $('html, body').stop().animate({'scrollTop': '0'}, 0)});
            });
          });
        }
      }
    }
    if (data.length > 1) {
      front.addSlideImage(box, 0, data, indicator, zoom, function() {
        zoomAct.trueCall();
        var baseValue = box.width() * -1;
        var lastValue = (box.width() * 2) * -1;
        var slideCall = {
          next: function() {
            gu.leftAni(ul, lastValue, 200, function() {
              var dataCall = parseInt(ul.find('> li:last-child').attr('data-call'));
              front.addSlideImage(box, dataCall, data, indicator, zoom, zoomAct.trueCall);
            });
          },
          prev: function() {
            gu.leftAni(ul, 0, 200, function() {
              var dataCall = parseInt(ul.find('> li:first-child').attr('data-call'));
              front.addSlideImage(box, dataCall, data, indicator, zoom, zoomAct.trueCall);
            });
          }
        }
        var swipeOptions = {triggerOnTouchEnd: true, swipeStatus: imageSlide, allowPageScroll: 'vertical', threshold: 75};
        box.swipe(swipeOptions);
        function imageSlide(event, phase, direction, distance) {
          if (phase == 'move' && (direction == 'left' || direction == 'right')) {
            var mleft = parseInt(ul.css('margin-left').replace('px',''));
            switch (direction) {
              case 'left': gu.leftAni(ul, (baseValue - distance), 0, zoomAct.trueCall); break;
              case 'right': gu.leftAni(ul, (baseValue + distance), 0, zoomAct.trueCall); break;
              default: break;
            }
          }
          else if (phase == 'cancel') {gu.leftAni(ul, baseValue, 100, zoomAct.trueCall)}
          else if (phase == 'end') {
            switch (direction) {
              case 'left': slideCall.next(); break;
              case 'right': slideCall.prev(); break;
              default: break;
            }
          }
        }
        gu.showCallback(box.find('.gu_btn_left'), function() {gu.btnClick(box.find('.gu_btn_left'), slideCall.prev)});
        gu.showCallback(box.find('.gu_btn_right'), function() {gu.btnClick(box.find('.gu_btn_right'), slideCall.next)});
      });
    } else {
      var swipeOptions = {swipeStatus: noneSlide};
      box.swipe(swipeOptions);
      function noneSlide(event, phase, direction, distance) {if (phase == 'move' && (direction == 'left' || direction == 'right')) {switch (direction) {case 'left': break; case 'right': break; default: break;}} else if (phase == 'cancel') {} else if (phase == 'end') {switch (direction) {case 'left': break; case 'right': break; default: break;}}}
      box.find('.gu_btn_left').hide(); box.find('.gu_btn_right').hide();
      front.addAloneImage(box, data, zoomAct.trueCall);
    }
  },
  linerGrid: function(box, data, type, linerCallback) {
    var ul = box.find('> ul');
    gu.whenDone(
      ul,
      function() {
        for (var i = 0; i < data.length; i++) {
          ul.append('<li data-life="' + i + '"><a href="' + data[i].href + '" target="' + data[i].target + '"><img id="' + data[i].styleId + '" src="' + data[i].src + '" alt="' + data[i].alt + '" data-photo="' + i + '"></a></li>')
        }
      },
      function() {
        if (type) {gu.boxSize(ul, ul.find('> li'), linerCallback && linerCallback())}
        else {linerCallback && linerCallback()}
      });
  },
  linerSlide: function(box, data, girdAfter) {
    var ul = box.find('> ul');
    front.linerGrid(box, data, true, function() {
      var basicLi = ul.find('> li:nth-child(2)');
      var baseValue = (basicLi.width()) + (parseFloat(basicLi.css('margin-left').replace('px','')));
      ul.css({'height': basicLi.height() + 'px', 'overflow' : 'hidden'});
      if (data.length > 2) {
        var swipeOptions = {triggerOnTouchEnd: true, swipeStatus: lineImages, allowPageScroll: 'vertical', threshold: 75};
        box.swipe(swipeOptions);
        function lineImages(event, phase, direction, distance) {
          var mleft = parseInt(ul.css('margin-left').replace('px',''));
          var firstLife = ul.find('> li:first-child'), lastLife = ul.find('> li:last-child');
          var firstCall = parseInt(firstLife.attr('data-life')), lastCall = parseInt(lastLife.attr('data-life'));
          if (phase == 'end' || phase == 'cancel') {
            switch (direction) {
              case 'left':
                gu.whenDone(ul, function() {
                  ul.append('<li data-life="' + firstCall + '"><a href="' + data[firstCall].href + '" target="' + data[firstCall].target + '"><img src="' + data[firstCall].src + '" alt="' + data[firstCall].alt + '" data-photo="' + firstCall + '"></a></li>'); gu.leftAni(ul, (baseValue * -1), 100, blank.func);
                }, function() {firstLife.remove(); gu.leftAni(ul, 0, 0, blank.func)}); girdAfter && girdAfter();
                break;
              case 'right':
                gu.whenDone(ul, function() {
                  ul.prepend('<li data-life="' + lastCall + '"><a href="' + data[lastCall].href + '" target="' + data[lastCall].target + '"><img src="' + data[lastCall].src + '" alt="' + data[lastCall].alt + '" data-photo="' + lastCall + '"></a></li>'); gu.leftAni(ul, baseValue, 100, blank.func);
                }, function() {lastLife.remove(); gu.leftAni(ul, 0, 0, blank.func)}); girdAfter && girdAfter();
                break;
              default: break;
            }
          }
        }
      }
      girdAfter && girdAfter();
    });
  },
  carouselClear: function() {var starSvg = $('.gu_interaction_carousel_3'); for (var i = 0; i < 10; i++) {$('.gu_interaction_carousel_' + i).empty()} if(starSvg.html() == '') {for (var i = 0; i < 5; i++) {starSvg.append(likeSvg.starBg)}}},
  carousel:function(reviewJson, dataName, dataGall, iname) {
    gu.jsonParser(reviewJson, function(data) {
      var itemData = data[dataName];
      var thisImg;
      var popGrid = {
        dataInfo: function(dataGall, iname) {
          var reviewLength = itemData.length; var src = itemData[dataGall][iname], alt = itemData[dataGall].subject, livePoint = parseFloat(itemData[dataGall].point);
          $('.gu_interaction_carousel_0').text('(' + reviewLength + '건)'); $('.gu_interaction_carousel_2').text(alt); $('.gu_interaction_carousel_3').attr('title', livePoint).ready(function() {front.starPoint($('.gu_product_star_information'), $('.gu_star_position'))}); $('.gu_interaction_carousel_4').text(itemData[dataGall].buyer); $('.gu_interaction_carousel_5').text(itemData[dataGall].date); $('.gu_interaction_carousel_6').text(itemData[dataGall].comment); $('.gu_interaction_carousel_7').text(dataGall + 1); $('.gu_interaction_carousel_8').text(reviewLength);
          thisImg = new Array();
          for (var i = 1; i <= 3; i++) {
            if ((itemData[dataGall]['image' + i] != null)) {
              $('.gu_interaction_carousel_1').append('<li><a href="javascript:void(0);"><img src="' + itemData[dataGall]['image' + i] + '" alt="' + alt + '"></a></li>');
              thisImg[i - 1] = {'href':'javascript:void(0);', 'target':'_self', 'src':itemData[dataGall]['image' + i], 'alt':alt}
            }
          }
          gu.timeCallback(100, front.newSlide($('.gu_img_review_slide > .slide_banner'), thisImg, true));
        }
      }
      popGrid.dataInfo(dataGall, iname);
      if(itemData.length > 1) {
        gu.btnClick($('.gu_img_review_indicator > .gu_btn_prev'), function() {
          dataGall === 0 ? dataGall = (itemData.length - 1) : dataGall = (dataGall - 1);
          gu.hideCallback($('.gu_modal_img_review .gu_modal_content'), function() {
            front.carouselClear();
            popGrid.dataInfo(dataGall, 'image1');
            gu.showCallback($('.gu_modal_img_review .gu_modal_content'), blank.func);
          });
        });
        gu.btnClick($('.gu_img_review_indicator > .gu_btn_next'), function() {
          dataGall === (itemData.length - 1) ? dataGall = 0 : dataGall = (dataGall + 1);
          gu.hideCallback($('.gu_modal_img_review .gu_modal_content'), function() {
            front.carouselClear();
            popGrid.dataInfo(dataGall, 'image1');
            gu.showCallback($('.gu_modal_img_review .gu_modal_content'), blank.func);
          });
        });
      } else {$('.gu_img_review_indicator > .gu_btn_prev').hide(); $('.gu_img_review_indicator > .gu_btn_next').hide();}
    }, function() {});
  },
  ifLayer: function(modalLayer) {
    var scrollBox = modalLayer.find('.gu_modal_content');
    scrollBox.on('scroll', function() {
      var pointTop = $(this).scrollTop(), bodySize;
      if ($('.gu_modal_header').length > 0) {bodySize = ($('.gu_modal_header').height()) + ($('ul.gu_product_list_type03').height())}
      else {bodySize = $('ul.gu_product_list_type03').height()}
      $('body').css('height', bodySize + 'px'); $('html, body').stop().animate({scrollTop : pointTop}, 0);
    });
  },
	selectCall: function(opt, optName, className, dataName, sortName, selFunc, openerSelelcted) {
    gu.btnClick(opt.find('> a'), function($opt) {
      if($opt.hasClass(optName) && !(opt.hasClass('gu_disabled'))) {
        openerSelelcted && openerSelelcted(); $opt.removeClass(optName);
        gu.showCallback($opt.next('ul'), function() {
					$opt.addClass('gu_on');
          gu.btnClick($opt.next('ul').find('li > a'), function($my) {
						var myidx = $my.parent().index();
            $opt.next('ul').find('li').removeClass(className); $my.parent('li').addClass(className); $opt.addClass(optName);
            gu.hideCallback($opt.next('ul'), function() {$opt.removeClass('gu_on'); $opt.text($my.text()).attr(dataName, sortName + myidx).ready(function() {selFunc && selFunc($my.text());});});
          });
        });
      } else {$opt.addClass(optName).removeClass('gu_on'); gu.hideCallback($opt.next('ul'), blank.func);}
    });
  }
}
