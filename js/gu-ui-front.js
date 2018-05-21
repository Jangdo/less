var likeSvg = {
  off: '<svg title="좋아요아이콘" viewBox="0 0 1024 1024"><path d="M514.84,984.62h0c-17.06,0-17.06-2.92-184.88-168.69C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,32,213.34,93,56.88-58.13,130.84-93,213.31-93,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92,531.89,981.69,531.89,981.69,514.84,984.62ZM303,114.29C177.52,114.29,74.39,219.72,74.39,348c0,57,22.31,108.29,69.67,168.13,83.63,105.48,301.05,313.56,370.75,382,69.7-65.57,284.34-276.47,367.94-382C930.14,456.31,952.45,405,952.45,348c0-128.29-103.13-233.72-228.57-233.72-72.48,0-139.37,34.19-184,94-11.15,17.08-39,17.08-50.18,0C442.33,148.48,375.44,114.29,303,114.29Z"></path></svg>',
  on: '<svg title="좋아요아이콘" viewBox="0 0 1024 1024"><path d="M330,815.92C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,48,213.34,109,56.88-58.13,130.84-109,213.31-109,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92c-165,165.77-165,165.77-182,168.69C497.78,984.62,497.78,981.69,330,815.92Z"></path></svg>',
  prOn: '<svg title="좋아요아이콘" viewBox="0 0 1024 1024"><path d="M330,815.92C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,48,213.34,109,56.88-58.13,130.84-109,213.31-109,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92c-165,165.77-165,165.77-182,168.69C497.78,984.62,497.78,981.69,330,815.92Z"></path></svg>',
  prOff: '<svg title="좋아요아이콘" viewBox="0 0 1024 1024"><path d="M514.84,984.62h0c-17.06,0-17.06-2.92-184.88-168.69C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,32,213.34,93,56.88-58.13,130.84-93,213.31-93,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92,531.89,981.69,531.89,981.69,514.84,984.62ZM303,114.29C177.52,114.29,74.39,219.72,74.39,348c0,57,22.31,108.29,69.67,168.13,83.63,105.48,301.05,313.56,370.75,382,69.7-65.57,284.34-276.47,367.94-382C930.14,456.31,952.45,405,952.45,348c0-128.29-103.13-233.72-228.57-233.72-72.48,0-139.37,34.19-184,94-11.15,17.08-39,17.08-50.18,0C442.33,148.48,375.44,114.29,303,114.29Z"></path></svg>'
}

var front = {
  storeMenuDisplay: function(jsonFile, ul, dataName, after) {
    if (ul.length > 0) {
      gu.jsonParser(jsonFile, function(data) {
        var itemData = data[dataName];
        var getMenuItem = function(itemData) {
          var item = $('<li>').append($('<a>', {href: itemData.link, target: itemData.target, html: itemData.name}));
          if (itemData.sub) {
            var subList = $('<ul>');
            $.each(itemData.sub, function() {subList.append(getMenuItem(this))});
            item.append(subList);
          }
          return item;
        };
        $.each(itemData, function() {ul.append(getMenuItem(this))});
      }, function() {after && after()});
    }
  },
  storeMenuInteraction: function(ul, callback) {
    var anchor = ul.find('> li > a');
    gu.onClick(anchor, function($this) {
      var parent = $this.closest('li'), first = parent.find('> ul > li:first-child');
      if (ul.hasClass('gu_store_menu')) {
        if (parent.hasClass('on')) {parent.removeClass('on'); ul.find('ul').hide();}
        else {
          parent.addClass('on').siblings().removeClass('on');
          if (parent.find('> ul').length > 0) {ul.find('ul').hide(); parent.find('> ul').show();} else {ul.find('ul').hide();}
          if (first.find('> ul').length > 0) {first.find('> ul').show();}
        }
      } else {
        if (parent.find('> ul').length > 0) {ul.find('ul').hide(); parent.find('> ul').show();} else {ul.find('ul').hide();}
      }
    });
    var subAnchor = ul.find('> li > ul > li > a');
    gu.onClick(subAnchor, function($this) {
      var parent = $this.closest('li'), first = parent.find('> ul > li:first-child');
      parent.siblings('li').find('> ul').hide();
      parent.find('> ul').show();
    });
    callback && callback();
  },
  bannerSlider: function(element, subElement, start) {
    var div = element.find(subElement), ul = div.find('> ul'), li = ul.find('> li');
    if (li.length > 1) {
      gu.boxSize(ul, li, function() {
        div.append($('<a/>', {href: 'javascript:void(0);', class: 'gu_btn_slide_prev', text: '이전'}))
        .append($('<a/>', {href: 'javascript:void(0);', class: 'gu_btn_slide_next', text: '다음'}))
        .append($('<div/>',{class: 'gu_slide_page_text'}))
        .css('opacity', '1');
        ul.css('margin-left', ((li.width() * start) * -1) + 'px');
        $('.gu_slide_page_text').html('<span>' + (start + 1) + '</span> / ' + li.length);
        var prev = element.find('.gu_btn_slide_prev'), next = element.find('.gu_btn_slide_next'), tbox = $('.gu_slide_page_text > span');
        var thumbImg = $('.gu_proruct_detail_image_s');
        var thumbColor = $('.gu_product_color');
        var thumSize = $('.gu_product_size');
        var liveOn = {
          sizeCommon: function(count) {
            if(count < thumSize.find('> ul').length) {
              gu.hideCallback(thumSize.find('> ul'), function() {
                thumSize.find('> ul > li').removeClass('gu_on');
                gu.showCallback(thumSize.find('> ul').eq(count), function() {thumbColor.find('> p > span').text(thumbColor.find('> ul > li').eq(count).find('img').attr('alt'))});
                $('.gu_interaction_addto').removeClass('gu_btn_blue').addClass('gu_btn_gray');
              });
            }
          },
          interCall: function() {
            if (thumbImg.length > 0) {var liveNum = parseInt(tbox.text()); gu.eqOn(thumbImg.find('> ul > li'), (liveNum - 1), 'gu_on')};
            if (thumbColor.length > 0) {var liveNum = parseInt(tbox.text()); gu.eqOn(thumbColor.find('> ul > li'), (liveNum - 1), 'gu_on'); liveOn.sizeCommon((liveNum - 1))};
          },
          basicCall: function() {
            if (thumbImg.length > 0) {
              gu.eqOn(thumbImg.find('> ul > li'), start, 'gu_on');
              gu.slideChange(element.find('.gu_proruct_detail_image_s > ul > li > a'), element, ul, li, element.find(tbox), thumbColor.find('> ul > li'), function($this) {liveOn.sizeCommon($this.parent('li').index())});
            };
            if (thumbColor.length > 0) {
              gu.eqOn(thumbColor.find('> ul > li'), start, 'gu_on');
              gu.slideChange(thumbColor.find('> ul > li > a'), element, ul, li, element.find(tbox), thumbImg.find('> ul > li'), function($this) {liveOn.sizeCommon($this.parent('li').index())});
              thumbColor.find('> p > span').text(thumbColor.find('> ul > li').eq(start).find('img').attr('alt'));
            };
          }
        }
        liveOn.basicCall();
        gu.slidePrev(prev, ul, li, function() {gu.slideCountText(ul, li, element.find(tbox)); liveOn.interCall()});
        gu.slideNext(next, ul, li, function() {gu.slideCountText(ul, li, element.find(tbox)); liveOn.interCall()});
        //gu.bothSide((start + 1), prev, next, li);
      });
    } else {div.css('opacity', '1');}
  },
  productsGrid: function(prJson, ea, ul, dataName, imgFolder, prCallback) {
    var liWid = 278, liMg = 16;
    gu.jsonParser(prJson, function(data) {
      var prData = data[dataName];
      var getPrItem = function(prData) {
        var colorList = new Array();
        var colors = prData.color;
        var flags = prData.flag;
        var inImage = '<img src="' + DEFAULTIMAGE + '" data-src="' + imgFolder + prData.image + '" alt="' + prData.name + '">';
        var inSpan = '<div class="gu_product_img">' + inImage + '</div>';
        if (colors) {
          for (var i = 0; i < colors.length; i++) {
            colorList[i] = '<li><img src="' + imgFolder + colors[i].image + '" alt="' + colors[i].name + '"></li>';
          }
          var stringColor = ((colorList).toString()).replace(/,/g,'');
          var inUl = '<ul class="gu_product_color">' + stringColor + '</ul>';
        } else {var inUl = '';}
        var inName = '<p class="gu_product_name">' + prData.name + '</p>';
        var gray = 'gu_flag_gray', red = 'gu_flag_red';
        if(flags.new) {var flagNew = '<span class=' + gray + '>' + flags.new + '</span>';}else{var flagNew = '';} // 신상품
        if(flags.onitem) {var flagOnItem = '<span class=' + gray + '>' + flags.onitem + '</span>';}else{var flagOnItem = '';} // 온라인단독 상품
        if(flags.onprice) {var flagOnPrice = '<span class=' + gray + '>' + flags.onprice + '</span>';}else{var flagOnPrice = '';} // 온라인단독 가격
        if(flags.limited) {var flagLimited = '<span class=' + red + '>' + flags.limited + '</span>';}else{var flagLimited = '';} // 기간한정가격
        if(flags.price) {var flagPrice = '<span class=' + red + '>' + flags.price + '</span>';}else{var flagPrice = '';} // 가격인하
        if(flags.limited || flags.price) { inPrice = '<p class="gu_product_price gu_price_red">' + prData.price + '<em>원</em></p>';}
        else { inPrice = '<p class="gu_product_price">' + prData.price + '<em>원</em></p>';}
        if(flags.sale) {var flagSale = '<span class=' + gray + '>' + flags.sale + '</span>';}else{var flagSale = '';} // 기간한정판매
        if(flags.dc) {var flagDc = '<span class=' + gray + '>' + flags.dc + '</span>';}else{var flagDc = '';} // 세트할인
        if(flags.option) {var flagOption = '<span class=' + gray + '>' + flags.option + '</span>';}else{var flagOption = '';} // 옵션할인
        if(flags.employee) {var flagEmployee = '<span class=' + gray + '>' + flags.employee + '</span>';}else{var flagEmployee = '';} // 사원판매
        if(flags.soldout) {var flagSoldOut = '<span class=' + gray + '>' + flags.soldout + '</span>';}else{var flagSoldOut = '';} // 품절임박
        if(flags.plan) {var flagPlan = '<span class=' + gray + '>' + flags.plan + '</span>';}else{var flagPlan = '';} // 출시예정
        var inCategory = '<span class="gu_product_gender">' + prData.category + '</span>';
        var inBox = '<div class="gu_product_flag">' + inCategory + flagNew + flagOnItem + flagOnPrice + flagLimited + flagPrice + flagSale + flagDc + flagOption + flagEmployee + flagSoldOut + flagPlan + '</div>';
        var pointValue = (parseFloat(prData.point)/5) * 100;
        var starGrid = '<div class="gu_product_star"><span title="' + parseFloat(prData.point) + '" style="width:' + pointValue + '%;">평점' + prData.point + '점</span></div>';
        var inDetail = '<div class="gu_product_info">' + inUl + inName + inBox + starGrid + inPrice + '</div>';
        var inAnchor = '<a href="' + prData.link + '" target="' + prData.target + '">' + inSpan + inDetail + '</a>';
        if(prData.like == 'on') {var myLike = '<a href="javascript:void(0);" class="gu_btn_like gu_on">' + likeSvg.on + '</a>'} else {var myLike = '<a href="javascript:void(0);" class="gu_btn_like">' + likeSvg.off + '</a>'}
        var inLike = '<div class="gu_like">' + myLike + '</div>';
        var inHtml = '<div class="gu_product_list_box">' + inAnchor + inLike + '</div>';
        var topValue, leftValue, countClass;
        if($('.gu_search_result').length > 0) {
          var friends = ((ul.find('> li').length)%3);
          switch (friends) {
            case 0: leftValue = '0px'; countClass = 'gu_interaction_first'; var firstLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(firstLi, liMg+2)) + 'px'; break;
            case 1: leftValue = ((liWid * 1) + (liMg * 1)) + 'px'; countClass = 'gu_interaction_second'; var secondLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(secondLi, liMg+2)) + 'px'; break;
            case 2: leftValue = ((liWid * 2) + (liMg * 2)) + 'px'; countClass = 'gu_interaction_third'; var thirdLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(thirdLi, liMg+2)) + 'px'; break;
            default: var topValue = '', leftValue = ''; break;
          }
        } else {
          var friends = ((ul.find('> li').length)%4);
          switch (friends) {
            case 0: leftValue = '0px'; countClass = 'gu_interaction_first'; var firstLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(firstLi, liMg+2)) + 'px'; break;
            case 1: leftValue = ((liWid * 1) + (liMg * 1)) + 'px'; countClass = 'gu_interaction_second'; var secondLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(secondLi, liMg+2)) + 'px'; break;
            case 2: leftValue = ((liWid * 2) + (liMg * 2)) + 'px'; countClass = 'gu_interaction_third'; var thirdLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(thirdLi, liMg+2)) + 'px'; break;
            case 3: leftValue = ((liWid * 3) + (liMg * 3)) + 'px'; countClass = 'gu_interaction_fourth'; var fouthLi = ul.find('> li.' + countClass); topValue = (gu.resultHeight(fouthLi, liMg+2)) + 'px'; break;
            default: break;
          }
        }
        var proItem = $('<li>').css({'top' : topValue, 'left' : leftValue}).addClass(countClass).append(inHtml);
        return proItem;
      };

      var allSize = prData.length;
      var more = $('.gu_btn_more_down');
      var moreAnchor = '<a href="javascript:void(0);" title="검색상품 더보기">더보기</a>';
      var noData = $('.gu_search_no_data');
      var eaCount = 0;
      var eaBasic = 1;
      var dataGrid = {
        loadPrData: function() {
          if (allSize < ea * eaBasic) {
            for (var i = eaCount; i < allSize; i++) {ul.append(getPrItem(prData[i]));}
            more.find('> a').remove();
          } else {
            for (var i = eaCount; i < (ea * eaBasic); i++) {ul.append(getPrItem(prData[i])); eaCount++;} eaBasic++;
          }
        },
        positions: function() {
          if($('.gu_search_result').length > 0) {
            var first = $('.gu_interaction_first'), second = $('.gu_interaction_second'), third = $('.gu_interaction_third');
            var liGrp = new Array();
            liGrp[0] = (gu.resultHeight(first, liMg)), liGrp[1] = (gu.resultHeight(second, liMg)), liGrp[2] = (gu.resultHeight(third, liMg));
            liGrp.sort(function(a, b) {return b - a});
            ul.css('height', liGrp[0] + 'px');
          } else {
            var first = $('.gu_interaction_first'), second = $('.gu_interaction_second'), third = $('.gu_interaction_third'), fourth = $('.gu_interaction_third');
            var liGrp = new Array();
            liGrp[0] = (gu.resultHeight(first, liMg)), liGrp[1] = (gu.resultHeight(second, liMg)), liGrp[2] = (gu.resultHeight(third, liMg)), liGrp[3] = (gu.resultHeight(fourth, liMg));
            liGrp.sort(function(a, b) {return b - a});
            ul.css('height', liGrp[0] + 'px');
          }
        }
      }
      if (allSize > 0) {
        noData.hide();
        dataGrid.loadPrData(); dataGrid.positions();
        if (ea <= allSize) {
          more.append(moreAnchor).ready(function() {
            gu.onClick(more.find('> a'), function() {
              dataGrid.loadPrData(); dataGrid.positions(); gu.lazyCall();
            });
          });
        }
      } else {noData.show(); $('.gu_select_box').addClass('gu_off');}
    }, function() {prCallback && prCallback()});
  },
  selectValue: function(anchor, list, className, dataName, sortName, sortCallback) {
    var mylayer = anchor.closest('.gu_select_box'), liCall = false;
    gu.onClick(anchor, function($this) {
      if(mylayer.hasClass('gu_off')) {}
      else{
        if ($this.hasClass(className)) {gu.slideUpCallback(list, 100, function() {$this.removeClass('gu_on')})}
        else {
          gu.slideDownCallback(list, 100, function() {$this.addClass('gu_on'); var selBtn = list.find('> li > a');
            gu.onClick(selBtn, function($my) {
              var mytxt = $my.text(), myidx = $my.parent().index(); $my.parent('li').siblings().removeClass(className); $my.parent('li').addClass(className);
              gu.slideUpCallback(list, 100, function() {$this.removeClass('gu_on')}); $this.text(mytxt).attr(dataName, sortName + myidx);
              sortCallback && sortCallback();
            });
          });
        }
      }
    });
    mylayer.off('click').on('click', function() {liCall = true; console.log(liCall)});
    $('article').on('click', function() {if(liCall) {console.log('if?, : ' + liCall)} else {console.log('else?, : ' + liCall); mylayer.find('> a').removeClass(className); mylayer.find('> ul').hide();} liCall = false;});
    $(window).on('scroll', function(e) {mylayer.find('> a').removeClass(className); mylayer.find('> ul').hide();});
  },
  gridList: function(element, brother, group, title, subject, depth, status) {
    var grid = {
      forIn: function() {
        for (var i = 0; i < group.length; i++) {
          element.append('<ul class="gu_interaction_' + group[i][title] + '" style="display:none;"></ul>').ready(function() {
            for (var n = 0; n < group[i][subject].length; n++) {
              if (group[i][subject][n][status] == 'out') {$('.gu_interaction_' + group[i][title]).append('<li class="gu_soldout"><a href="javascript:void(0);">' + group[i][subject][n][depth] + '</a></li>')}
              else {$('.gu_interaction_' + group[i][title]).append('<li><a href="javascript:void(0);">' + group[i][subject][n][depth] + '</a></li>')}
            }
          });
        }
      },
      forCommon: function() {
        gu.onClick(element.find('ul > li > a'), function($this) {
          var addBtn = $('.gu_interaction_addto');
          $this.parent('li').siblings().removeClass('gu_on');
          $this.parent('li').addClass('gu_on');
          if ($('.gu_product_color > ul > li.gu_on').length > 0 && !($this.parent('li').hasClass('gu_soldout'))) {addBtn.removeClass('gu_btn_gray').addClass('gu_btn_blue')}
          else {addBtn.removeClass('gu_btn_blue').addClass('gu_btn_gray')}
        });
      },
      forOut: function() {
        var onColor = brother.find('ul > li.gu_on');
        var onIdx = onColor.index();
        if (onColor.length > 0 && onIdx >= 0) {gu.showCallback(element.find('ul').eq(onIdx), function() {grid.forCommon()})}
        else {gu.showCallback(element.find('ul').eq(0), function() {grid.forCommon()})}
      }
    }
    grid.forIn(); gu.timeCallback(100, grid.forOut);
  },
  slimSlider: function(element, ul, li, view, speed) {
    var prev = element.find('.gu_btn_slide_prev'), next = element.find('.gu_btn_slide_next'), size = li.outerWidth(true);
    var lastSide = (((li.length - 1) - view) * size) * -1;
    gu.boxSize(ul, li, function() {prev.hide(); next.show()});
    gu.onClick(prev, function() {
      var ulMargin = parseInt(ul.css('margin-left').replace('px',''));
      if (Math.abs(ulMargin%size) == 0) {
        ul.stop().animate({'margin-left':((ulMargin) + size) + 'px'}, speed, 'easeInBack', function() {
          if(ulMargin == (size * -1)) {prev.hide()}
          if (ulMargin >= (lastSide - size)) {next.show()}
        });
      }
    });
    gu.onClick(next, function() {
      var ulMargin = parseInt(ul.css('margin-left').replace('px',''));
      if (Math.abs(ulMargin%size) == 0) {
        ul.stop().animate({'margin-left':((ulMargin) - size) + 'px'}, speed, 'easeInBack', function() {
          if(ulMargin <= 0) {prev.show()}
          if (ulMargin == lastSide) {next.hide()}
        });
      }
    });
  },
  ieSticky: function(fixE, top, point, leftsize) {
    var sticky = {
      basicMotion: function() {
        var status = $(window).scrollTop();
        if (status > 0 && status < top) {fixE.removeAttr('style')}
        else if (status >= top && status < point) {var leftValue = 0; var fullSize = gu.winFullSize(); var halfValue = gu.winHalfSize(); if (fullSize >= leftsize) {leftValue = (halfValue + 100);} else {leftValue = 680;} fixE.css({'position':'fixed', 'top':top + 'px', 'bottom':'auto', 'left':leftValue + 'px', 'right':'auto'});}
        else if (status >= point) {fixE.css({'position':'absolute', 'top':'auto', 'bottom':'85px', 'left':'auto', 'right':'0px'});}
      },
      scrollMotion: function() {$(window).on('scroll', function() {sticky.basicMotion()})}
    }
    sticky.scrollMotion(); $(window).resize(function() {sticky.scrollMotion(); sticky.basicMotion()});
  },
  starPoint: function(element) {element.each(function() {var myPoint = parseFloat($(this).attr('title')); var pointValue = (myPoint/5) * 100; $(this).css('width', pointValue + '%').text('평점 ' + myPoint + '점')})},
  carouselClear: function() {for (var i = 0; i < 10; i++) {$('.gu_interaction_carousel_' + i).empty()}},
  carousel:function(reviewJson, dataName, dataGall, iname) {
    gu.jsonParser(reviewJson, function(data) {
      var itemData = data[dataName];
      var popGrid = {
        dataInfo: function(dataGall, iname) {
          var reviewLength = itemData.length; var src = itemData[dataGall][iname], alt = itemData[dataGall].subject, livePoint = parseFloat(itemData[dataGall].point);
          $('.gu_interaction_carousel_0').text('(' + reviewLength + '건)'); $('.gu_interaction_carousel_1').text(reviewLength); $('.gu_interaction_carousel_2').text(dataGall + 1); $('.gu_interaction_carousel_3').text(alt); $('.gu_interaction_carousel_4').css('width', ((livePoint/5) * 100) + '%').text('평점 ' + livePoint + '점');
          $('.gu_interaction_carousel_5').text(itemData[dataGall].date); $('.gu_interaction_carousel_6').text(itemData[dataGall].buyer); $('.gu_interaction_carousel_7').text(itemData[dataGall].comment);
          $('.gu_interaction_carousel_8').append('<img src="' + src + '" alt="' + alt + '">');
          for (var i = 1; i <= 5; i++) {
            if (!(itemData[dataGall]['image' + i] == null)) {
              var xindex = parseInt(iname.substr(5,1));
              if (i == xindex) {$('.gu_interaction_carousel_9').append('<li class="gu_on"><a href="javascript:void(0);"><img src="' + itemData[dataGall]['image' + i] + '" alt="' + alt + '"></a></li>');} else {$('.gu_interaction_carousel_9').append('<li><a href="javascript:void(0);"><img src="' + itemData[dataGall]['image' + i] + '" alt="' + alt + '"></a></li>')}
            }
          }
        }
      }
      popGrid.dataInfo(dataGall, iname);
      if (itemData.length > 1) {
        gu.onClick($('.gu_interaction_carousel_prev'), function() {
          dataGall === 0 ? dataGall = (itemData.length - 1) : dataGall = (dataGall - 1);
          gu.hideCallback($('.gu_interaction_carousel_box'), function() {
            front.carouselClear();
            gu.whenDone(
              $('.gu_interaction_carousel_prev'),
              function() {popGrid.dataInfo(dataGall, 'image1')},
              function() {gu.showCallback($('.gu_interaction_carousel_box'), gu.imageChange($('.gu_interaction_carousel_9').find('> li > a'), $('.gu_interaction_carousel_8')))},
              100
            );
          });
        });
        gu.onClick($('.gu_interaction_carousel_next'), function() {
          dataGall === (itemData.length - 1) ? dataGall = 0 : dataGall = (dataGall + 1);
          gu.hideCallback($('.gu_interaction_carousel_box'), function() {
            front.carouselClear();
            gu.whenDone(
              $('.gu_interaction_carousel_next'),
              function() {popGrid.dataInfo(dataGall, 'image1')},
              function() {gu.showCallback($('.gu_interaction_carousel_box'), gu.imageChange($('.gu_interaction_carousel_9').find('> li > a'), $('.gu_interaction_carousel_8')))},
              100
            );
          });
        });
      } else {$('.gu_interaction_carousel_prev').hide(); $('.gu_interaction_carousel_next').hide();}
    }, function() {
      gu.imageChange($('.gu_interaction_carousel_9').find('> li > a'), $('.gu_interaction_carousel_8'));
    });
  },
  lifeCarouselGrid: function(data, eq, layer) {
    front.carouselClear();
    var inner0 = layer.find('.gu_interaction_carousel_0'), inner1 = layer.find('.gu_interaction_carousel_1'), inner2 = layer.find('.gu_interaction_carousel_2'), inner3 = layer.find('.gu_interaction_carousel_3'), inner4 = layer.find('.gu_interaction_carousel_4');
    var mydata = data[eq]; var mylook = mydata.look;
    inner0.append('<img src="' + mydata.image + '" alt="' + mydata.src + '">');
    inner1.append('<a href="' + mylook[0].href + '" target="' + mylook[0].target + '"><img src="' + mylook[0].src + '" alt="' + mylook[0].alt + '"><strong>' + mylook[0].alt + '</strong></a>');
    inner2.append('<a href="' + mylook[1].href + '" target="' + mylook[1].target + '"><img src="' + mylook[1].src + '" alt="' + mylook[1].alt + '"><strong>' + mylook[1].alt + '</strong></a>');
    inner3.append('<a href="' + mylook[2].href + '" target="' + mylook[2].target + '" title="' + mylook[2].title + '"><img src="' + mylook[2].src + '" alt="' + mylook[2].name + '"><strong>' + mylook[2].name + '</strong></a>');
    inner4.append(mylook[3].review);
  },
  staticGrid: function(layer, data) {
    var ul = layer.find('> ul');
    for (var i = 0; i < data.length; i++) {
      ul.append('<li data-slide="' + i + '"><a href="' + data[i].href + '" target="' + data[i].target + '"><img src="' + data[i].image + '" alt="' + data[i].alt + '"><strong>' + data[i].look[2].name + '</strong></a></li>');
      gu.timeCallback(200, function() {var $btn = ul.find('> li > a'); front.lifeOpen($btn, data, $('.gu_pop_lifewear > .gu_popup_layer'))});
    }
  },
  lifeOpen: function(btn, data, layer) {
    gu.onClick(btn, function($this) {
      var eq = parseInt($this.parent('li').attr('data-slide'));
      front.lifeCarouselGrid(data, eq, layer);
      gu.showCallback(layer, function() {
        gu.layerCenter(layer); $('body').addClass('gu_body_disabled');
        gu.onClick(layer.find('.gu_popup_btn_close'), function() {layer.hide(); $('body').removeClass('gu_body_disabled');$('.gu_report_con').hide().animate({top:540});});
        gu.onClick(layer.find('.gu_interaction_carousel_next'), function() {eq == (data.length - 1) ? eq = 0 : eq = (eq + 1); front.lifeCarouselGrid(data, eq, layer); $('.gu_report_con').hide().animate({top:540});});
        gu.onClick(layer.find('.gu_interaction_carousel_prev'), function() {eq == 0 ? eq = (data.length - 1) : eq = (eq - 1); front.lifeCarouselGrid(data, eq, layer); $('.gu_report_con').hide().animate({top:540});});
        gu.onClick(layer.find('.gu_icon_report > a'), function($this) {$this.parent().next('.gu_report_con').show().animate({top:0});});
      });
    });
  },
  newSlideGrid: function(data, style, idx, ul, width) {
    ul.empty();
    if(style == 'normal') {
      var prevIdx = 0, nextIdx = 0;
      if(data.length > 2) {idx == 0 ? prevIdx = (data.length - 1) : prevIdx = (idx - 1); idx == (data.length - 1) ? nextIdx = 0 : nextIdx = (idx + 1);}
      else {if(idx == 0) {prevIdx = 1; nextIdx = 1;} else {prevIdx = 0; nextIdx = 0;}}
      var inners = '<li data-slide="' + prevIdx + '"><a href="' + data[prevIdx].href + '" target="' + data[prevIdx].target + '"><img src="' + data[prevIdx].image + '" alt="' + data[prevIdx].alt + '"></a></li>';
      inners += '<li data-slide="' + idx + '"><a href="' + data[idx].href + '" target="' + data[idx].target + '"><img src="' + data[idx].image + '" alt="' + data[idx].alt + '"></a></li>';
      inners += '<li data-slide="' + nextIdx + '"><a href="' + data[nextIdx].href + '" target="' + data[nextIdx].target + '"><img src="' + data[nextIdx].image + '" alt="' + data[nextIdx].alt + '"></a></li>';
      gu.appendCallback(ul, inners, function() {ul.stop().animate({'margin-left' : (width * -1) + 'px'}, 0)});
    } else if(style == 'simple') {
      var prevIdx, secondIdx, thirdIdx, fourthIdx, fifthIdx, nextIdx;
      if (data.length > 5) {
        prevIdx = (idx - 1); secondIdx = (idx + 1); thirdIdx = (idx + 2); fourthIdx = (idx + 3); fifthIdx = (idx + 4); nextIdx = (idx + 5);
        if (idx == 0) {prevIdx = (data.length - 1);}
        switch (idx) {
          case 0: prevIdx = (data.length - 1); break;
          case (data.length - 5): nextIdx = 0; fifthIdx = (data.length - 1); fourthIdx = (data.length - 2); thirdIdx = (data.length - 3); secondIdx = (data.length - 4); break;
          case (data.length - 4): nextIdx = 1; fifthIdx = 0; fourthIdx = (data.length - 1); thirdIdx = (data.length - 2); secondIdx = (data.length - 3); break;
          case (data.length - 3): nextIdx = 2; fifthIdx = 1; fourthIdx = 0; thirdIdx = (data.length - 1); secondIdx = (data.length - 2); break;
          case (data.length - 2): nextIdx = 3; fifthIdx = 2; fourthIdx = 1; thirdIdx = 0; secondIdx = (data.length - 1); break;
          case (data.length - 1): nextIdx = 4; fifthIdx = 3; fourthIdx = 2; thirdIdx = 1; secondIdx = 0; break;
          default: break;
        }
        var inName = data[idx].name;
        var byteV;
        var byteVGrp = new Array();
        if(inName != null) {
          for (var i = 0; i < data.length; i++) {
            byteVGrp[i] = ((data[i].name).toString()).replace(/[\0-\x7f]|([0-\u07ff]|(.))/g,"$&$1$2").length;
          }
          byteVGrp.sort(function(a, b) {return b - a});
          if (byteVGrp[0] > 43) {byteV = 42} else {byteV = 20}
          var inners = '<li data-slide="' + prevIdx + '"><a href="' + data[prevIdx].href + '" target="' + data[prevIdx].target + '"><img src="' + data[prevIdx].image + '" alt="' + data[prevIdx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[prevIdx].name + '</p><p class="gu_product_price">' + data[prevIdx].price + '<em>원</em></p></div></a></li>';
          inners += '<li data-slide="' + idx + '"><a href="' + data[idx].href + '" target="' + data[idx].target + '"><img src="' + data[idx].image + '" alt="' + data[idx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[idx].name + '</p><p class="gu_product_price">' + data[idx].price + '<em>원</em></p></div></a></li>';
          inners += '<li data-slide="' + secondIdx + '"><a href="' + data[secondIdx].href + '" target="' + data[secondIdx].target + '"><img src="' + data[secondIdx].image + '" alt="' + data[secondIdx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[secondIdx].name + '</p><p class="gu_product_price">' + data[secondIdx].price + '<em>원</em></p></div></a></li>';
          inners += '<li data-slide="' + thirdIdx + '"><a href="' + data[thirdIdx].href + '" target="' + data[thirdIdx].target + '"><img src="' + data[thirdIdx].image + '" alt="' + data[thirdIdx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[thirdIdx].name + '</p><p class="gu_product_price">' + data[thirdIdx].price + '<em>원</em></p></div></a></li>';
          inners += '<li data-slide="' + fourthIdx + '"><a href="' + data[fourthIdx].href + '" target="' + data[fourthIdx].target + '"><img src="' + data[fourthIdx].image + '" alt="' + data[fourthIdx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[fourthIdx].name + '</p><p class="gu_product_price">' + data[fourthIdx].price + '<em>원</em></p></div></a></li>';
          inners += '<li data-slide="' + fifthIdx + '"><a href="' + data[fifthIdx].href + '" target="' + data[fifthIdx].target + '"><img src="' + data[fifthIdx].image + '" alt="' + data[fifthIdx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[fifthIdx].name + '</p><p class="gu_product_price">' + data[fifthIdx].price + '<em>원</em></p></div></a></li>';
          inners += '<li data-slide="' + nextIdx + '"><a href="' + data[nextIdx].href + '" target="' + data[nextIdx].target + '"><img src="' + data[nextIdx].image + '" alt="' + data[nextIdx].alt + '"><div class="gu_product_info"><p class="gu_product_name" style="height:' + byteV + 'px;">' + data[nextIdx].name + '</p><p class="gu_product_price">' + data[nextIdx].price + '<em>원</em></p></div></a></li>';
        } else {
          var inners = '<li data-slide="' + prevIdx + '"><a href="' + data[prevIdx].href + '" target="' + data[prevIdx].target + '"><img src="' + data[prevIdx].image + '" alt="' + data[prevIdx].alt + '"></a></li>';
          inners += '<li data-slide="' + idx + '"><a href="' + data[idx].href + '" target="' + data[idx].target + '"><img src="' + data[idx].image + '" alt="' + data[idx].alt + '"></a></li>';
          inners += '<li data-slide="' + secondIdx + '"><a href="' + data[secondIdx].href + '" target="' + data[secondIdx].target + '"><img src="' + data[secondIdx].image + '" alt="' + data[secondIdx].alt + '"></a></li>';
          inners += '<li data-slide="' + thirdIdx + '"><a href="' + data[thirdIdx].href + '" target="' + data[thirdIdx].target + '"><img src="' + data[thirdIdx].image + '" alt="' + data[thirdIdx].alt + '"></a></li>';
          inners += '<li data-slide="' + fourthIdx + '"><a href="' + data[fourthIdx].href + '" target="' + data[fourthIdx].target + '"><img src="' + data[fourthIdx].image + '" alt="' + data[fourthIdx].alt + '"></a></li>';
          inners += '<li data-slide="' + fifthIdx + '"><a href="' + data[fifthIdx].href + '" target="' + data[fifthIdx].target + '"><img src="' + data[fifthIdx].image + '" alt="' + data[fifthIdx].alt + '"></a></li>';
          inners += '<li data-slide="' + nextIdx + '"><a href="' + data[nextIdx].href + '" target="' + data[nextIdx].target + '"><img src="' + data[nextIdx].image + '" alt="' + data[nextIdx].alt + '"></a></li>';
        }
        gu.appendCallback(ul, inners, function() {ul.stop().animate({'margin-left' : (width * -1) + 'px'}, 0); var lifeLayer = $('.gu_pop_lifewear > .gu_popup_layer'); if($('.gu_pop_lifewear').length > 0) {var $btn = ul.find('> li > a'); front.lifeOpen($btn, data, lifeLayer);}});
      } else {
        for (var i = 0; i < data.length; i++) {ul.append('<li data-slide="' + i + '"><a href="' + data[i].href + '" target="' + data[i].target + '"><img src="' + data[i].image + '" alt="' + data[i].alt + '"></a></li>')}
        gu.timeCallback(200, function() {var lifeLayer = $('.gu_pop_lifewear > .gu_popup_layer'); if($('.gu_pop_lifewear').length > 0) {var $btn = ul.find('> li > a'); front.lifeOpen($btn, data, lifeLayer);}});
      }
    }
  },
  indicatorOn: function(box, idx) {box.find('.gu_btn_indicator > ul > li').removeClass('gu_on'); box.find('.gu_btn_indicator > ul > li').eq(idx).addClass('gu_on');},
  newSlideNext: function(box, data, style, idx, ul, width) {
    if (ul.css('margin-left') == (width * -1) + 'px') {ul.stop().animate({'margin-left' : ((width + width) * -1) + 'px'}, 500, function() {front.newSlideGrid(data, style, idx, ul, width);});}
    front.indicatorOn(box, idx);
  },
  newSlidePrev: function(box, data, style, idx, ul, width) {
    if (ul.css('margin-left') == (width * -1) + 'px') {ul.stop().animate({'margin-left' : '0px'}, 500, function() {front.newSlideGrid(data, style, idx, ul, width);});}
    front.indicatorOn(box, idx);
  },
  newSlider: function(box, data, style, type, indicator, play, time, width) {
    var slidebox = box.find('> div'), slidecon = box.find('> div > div'), ul = slidecon.find('> ul');
    var idx = 0;
    if(style == 'normal') {ul.css('width', (width * 3) + 'px')} else if(style == 'simple') {if(data.length > 5) {ul.css('width', (width * 7) + 'px')} else {ul.css('width', '100%')}}
    if (data.length > 1) {
      front.newSlideGrid(data, style, 0, ul, width);
      if(type) {
        var prevNext = '<div class="gu_btn_slide"><a href="javascript:void(0);" class="gu_btn_slide_prev">이전보기</a><a href="javascript:void(0);" class="gu_btn_slide_next">다음보기</a></div>';
        if(style == 'simple' && data.length <= 5) {console.log('prev next off')}
        else {
          gu.appendCallback(slidebox, prevNext, function() {
            gu.onClick(box.find('.gu_btn_slide_next'), function() {
              switch (style) {case 'normal': idx = parseInt(ul.find('> li:last-child').attr('data-slide')); break; case 'simple': idx = parseInt(ul.find('> li:nth-child(3)').attr('data-slide')); break; default: break;}
              front.newSlideNext(box, data, style, idx, ul, width);
            });
            gu.onClick(box.find('.gu_btn_slide_prev'), function() {idx = parseInt(ul.find('> li:first-child').attr('data-slide')); front.newSlidePrev(box, data, style, idx, ul, width);});
          });
        }
      }
      if(indicator) {
        var paging = '<div class="gu_btn_indicator"><ul></ul></div>';
        gu.appendCallback(box, paging, function() {
          for (var i = 0; i < data.length; i++) {
            if(i == 0) {box.find('.gu_btn_indicator > ul').append('<li class="gu_on"><a href="javascript:void(0);">' + i + '</a></li>');}
            else {box.find('.gu_btn_indicator > ul').append('<li><a href="javascript:void(0);">' + i + '</a></li>');}
          }
          gu.timeCallback(100, function() {
            gu.onClick(box.find('.gu_btn_indicator > ul > li > a'), function($this) {var myidx = $this.parent('li').index(); front.indicatorOn(box, myidx); front.newSlideGrid(data, style, myidx, ul, width);});
          });
          var good = null;
          function autoplay() {if(good == null) {good = setInterval(function() {idx = parseInt(ul.find('> li:last-child').attr('data-slide')); front.newSlideNext(box, data, style, idx, ul, width); idx++;}, time);}};
          function autostop() {clearInterval(good); good = null;}
          var playstop = '<a href="javascript:void(0);" class="gu_btn_stop">정지</a><a href="javascript:void(0);" class="gu_btn_play">재생</a>';
          gu.appendCallback(box.find('.gu_btn_indicator'), playstop, function() {
            var $stop = box.find('.gu_btn_stop'), $play = box.find('.gu_btn_play');
            switch (play) {case 'auto': autoplay(); $play.hide(); break; case 'stop': autostop(); $stop.hide(); break; case 'none': $play.hide(); $stop.hide(); break; default: $play.hide(); $stop.hide(); break;}
            gu.onClick($stop, function() {autostop(); $stop.hide(); $play.show();});
            gu.onClick($play, function() {autoplay(); $play.hide(); $stop.show();});
          });
        });
      }
    } else {ul.append('<li><a href="' + data[0].href + '" target="' + data[0].target + '"><img src="' + data[0].image + '" alt="' + data[0].alt + '"></a></li>');}
  },
  boxSizeAlign: function(list, element1, element2) {
    var nameGrp = new Array(); var flagGrp = new Array(); for (var i = 0; i < list.length; i++) {nameGrp[i] = list.eq(i).find(element1).height(); flagGrp[i] = list.eq(i).find(element2).height();}
    var nameTmp = new Array(); var flagTmp = new Array(); for (var i = 0; i < 6; i++) {nameTmp.push(nameGrp.splice(0, 5)); flagTmp.push(flagGrp.splice(0, 5));}
    for (var i = 0; i < 6; i++) {nameTmp[i].sort(function(a, b) {return b - a}); flagTmp[i].sort(function(c, d) {return d - c});}
    var bp = 0; var count = 5;
    for (var n = 0; n < 6; n++) {
      for (var i = bp; i < count; i++) {list.eq(i).find(element1).css('height', nameTmp[n][0] + 'px'); list.eq(i).find(element2).css('height', flagTmp[n][0] + 'px')};
      bp += 5; count += 5;
    }
  }
}
