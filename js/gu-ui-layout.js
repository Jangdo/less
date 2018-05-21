$(function(){
  // header
  $('header').load('../include/storeHeader.html', function() {
    var storeUl = $('.gu_store_menu'), storeMenu = 'guStoreMenu';
    $.ajax({
      url : '../../json/storeMenu.json',
      data : storeMenu,
      dataType : 'json',
      success: function(data) {
        if (storeUl.length > 0) {
          var itemData = data[storeMenu];
          var getMenuItem = function(itemData) {
            var item = $('<li>').append($('<a>', {href: itemData.link, target: itemData.target, html: itemData.name}));
            if (itemData.sub) {var subList = $('<ul>'); $.each(itemData.sub, function() {subList.append(getMenuItem(this))}); item.append(subList);}
            return item;
          };
          $.each(itemData, function() {storeUl.append(getMenuItem(this))});
          // header interaction 실행
          headerInteraction();
        }
      },
      error: function() {console.log('error')}
    });
  });
  // footer
  $('footer').load('../include/storeFooter.html');
  // skipNav
  var skipNav = $('.gu_skip_navigation');
  gu.focusLive(skipNav, function() {skipNav.removeClass('gu_skip_navigation_hide').addClass('gu_skip_navigation_show')}, function() {skipNav.removeClass('gu_skip_navigation_show').addClass('gu_skip_navigation_hide')});
});

var login = {"cartCnt":"10","loginYn":"Y","wishYn":"Y"};

var headerInteraction = function() {
  var availableTags = ["스커트", "롱스커트", "A라인 스커트", "H라인 스커트", "플레어 스커트", "레이스 머메이드 스커트", "로고 타이트 스커트", "프린트 미니 스커트", "데님 스커트"];
  var gnbUl = $('.gu_store_menu');
  var util = $('.gu_store_util');
  var anchor = gnbUl.find('> li > a');
  var subAnchor = gnbUl.find('> li > ul > li > a');
  var thirdAnchor = gnbUl.find('> li > ul > li > ul > li > a');
  var subBox = gnbUl.find('> li > ul');
  var searchFiled = $('.gu_search_top input[type="text"]');
  var autoTxtBox = $('.gu_search_auto_complete');
  var wordBox = $('.gu_search_word');
  var aside = $('aside');
  var badge  = $('.gu_basket .gu_badge');
  var like = aside.find('.gu_like_list');
  var likeSvg = {
    off: '<svg title="좋아요목록보기아이콘" width="20" height="20" viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(27, 27, 27); margin: 6px 4px 2px; height: 23px; width: 23px;"><path d="M514.84,984.62h0c-17.06,0-17.06-2.92-184.88-168.69C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,32,213.34,93,56.88-58.13,130.84-93,213.31-93,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92,531.89,981.69,531.89,981.69,514.84,984.62ZM303,114.29C177.52,114.29,74.39,219.72,74.39,348c0,57,22.31,108.29,69.67,168.13,83.63,105.48,301.05,313.56,370.75,382,69.7-65.57,284.34-276.47,367.94-382C930.14,456.31,952.45,405,952.45,348c0-128.29-103.13-233.72-228.57-233.72-72.48,0-139.37,34.19-184,94-11.15,17.08-39,17.08-50.18,0C442.33,148.48,375.44,114.29,303,114.29Z"></path></svg><span class="gu_text">Wish List</span>',
    on: '<svg "좋아요목록보기아이콘" width="20" height="20" viewBox="0 0 1024 1024" style="display: inline-block; fill: rgb(255, 80, 80); margin: 6px 4px 2px; height: 23px; width: 23px;"><path d="M330,815.92C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,48,213.34,109,56.88-58.13,130.84-109,213.31-109,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92c-165,165.77-165,165.77-182,168.69C497.78,984.62,497.78,981.69,330,815.92Z"></path></svg><span class="gu_text">Wish List</span>'
  }
  var header = {
    menuboxSize: function() {
      var depth2 = gnbUl.find('> li.gu_on > ul');
      var depth2H = 0;
      for (var i = 0; i < depth2.find('> li').length; i++) {depth2H = depth2H + (depth2.find('> li').eq(i).height()) + 15;}
      var depth3 = gnbUl.find('> li.gu_on > ul > li > ul.gu_interaction_on');
      var depth3H;
      if (depth3.length > 0) {depth3H = depth3.height()} else {depth3H = 0;}
      var depth4 = gnbUl.find('> li.gu_on > ul > li > ul > li > ul.gu_interaction_on');
      var depth4H;
      if (depth4.length > 0) {depth4H = depth4.height()} else {depth4H = 0;}
      if (depth4H > depth3H && depth4H > depth2H) {depth2.css('height', (depth4H + 40) + 'px')}
      else if (depth3H > depth4H && depth3H > depth2H) {depth2.css('height', (depth3H + 40) + 'px')}
      else {depth2.css('height', depth2H + 'px')}
    },
    menuClick : function(selector) {
      selector.off('click').on('click', function() {
        var parent = $(this).closest('li'), first = parent.find('> ul > li:first-child');
        if (gnbUl.hasClass('gu_store_menu')) {
          if (parent.hasClass('gu_on')) {parent.removeClass('gu_on'); gnbUl.find('ul').hide();}
          else {
            parent.addClass('gu_on').siblings().removeClass('gu_on');
            if (parent.find('> ul').length > 0) {gnbUl.find('ul').hide(); parent.find('> ul').show();} else {gnbUl.find('ul').hide();}
            if (first.find('> ul').length > 0) {first.find('> ul').addClass('gu_interaction_on').show();}
          }
        } else {
          if (parent.find('> ul').length > 0) {gnbUl.find('ul').hide(); parent.find('> ul').show();} else {gnbUl.find('ul').hide();}
        }
        header.menuboxSize();
      });
    },
    lnbClick : function(selector) {
      selector.off('click').on('click', function() {
        var $this = $(this);
        var parent = $this.closest('li'), first = parent.find('> ul > li:first-child');
        parent.siblings('li').find('> ul').removeClass('gu_interaction_on').hide();
        parent.find('> ul').addClass('gu_interaction_on').show();
        header.menuboxSize();
      });
    },
    bgClick : function() {
      $('body > *').not('header').on('click', function() {subBox.hide(); $('.gu_store_menu > li').removeClass('gu_on'); if($('.gu_search_word').length > 0) {$('.gu_search_word').hide()}});
    },
    keywordFocusIn : function(selector) {
      selector.on('focusin', function() {
        subBox.hide(); gnbUl.find('> li').removeClass('on');
        wordBox.show().ready(function() {
          var tabBtn = wordBox.find('.gu_search_word_type > li > a'), tabContents = $('.gu_interaction_tab');
          header.tabs(tabBtn, wordBox, 'gu_on', tabContents, function() {});
          var inWords = $('.gu_in_word'), wordX = $('.gu_word_x');
          var allWordDel = $('.gu_store_word_bot > a:first-child');
          var wordClose = $('.gu_store_word_bot > a:last-child');
          $(inWords).off('click').on('click', function() {
            var myWordTxt = $(this).text();
            searchFiled.val(myWordTxt); wordBox.hide();
          });
          $(wordX).off('click').on('click', function() {
            var thisxli = $(this).closest('li'); thisxli.remove();
          });
          $(allWordDel).off('click').on('click', function() {
            $('.gu_search_word_lately > ul > li').remove();
          });
          $(wordClose).off('click').on('click', function() {
            wordBox.hide();
          });
        });
      });
    },
    tabs : function(btn, box, className, tabContents, callback) {
      btn.off('click').on('click', function() {
        var myli = $(this).parent(); myli.siblings().removeClass(className); myli.addClass(className);
        var idx = myli.index();
        box.find(tabContents).find('> div').hide();
        box.find(tabContents).find('> div').eq(idx).show();
      });
    },
    autoComplete : function(selector) {
      selector.autocomplete({source: availableTags, messages: {noResults: '', results: function() {}}, minLength: 1}).data('ui-autocomplete')._renderItem = function(ul, item) {
        var term = this.term, regex = new RegExp($.ui.autocomplete.escapeRegex(term), 'gi'), label = item.label.replace(regex, '<strong>$&</strong>'), $link = $('<a href="javascript:void(0);"></a>').html(label);
        wordBox.hide();
        return $('<li></li>').append($link).appendTo(ul);
      }
    },
    asideClick : function(selector) {
      selector.off('click').on('click', function() {gnbUl.find('ul').hide(); gnbUl.find('li').removeClass('on');});
    },
    cart : function(login) {
      if(login.cartCnt == 0) {
        badge.text(0);
      } else {
        if (login.cartCnt > 99) {
          badge.text('99+');
        } else {
          badge.text(login.cartCnt);
        }
      }
    },
    loginCheck : function(login) {
      if(login.loginYn == 'Y') {
        util.find('> li:nth-child(1)').find('> a').text('MY PAGE');
        util.find('> li:nth-child(2)').find('> a').text('로그아웃');
      } else {
        util.find('> li:nth-child(1)').find('> a').text('회원 등록');
        util.find('> li:nth-child(2)').find('> a').text('로그인');
      }
    },
    wishList : function() {
      if(login.wishYn == 'Y') {
        // todo
        like.html(likeSvg.on);
      } else {
        // todo
        like.html(likeSvg.off);
      }
    },
    topAnchor : function() {
      var topEle = $('.gu_page_top'), scrollBody = $('html, body');
      var value = 300;
      $(window).on('scroll', function() {
        var wst = $(window).scrollTop();
        if(wst > value) {
          topEle.show().ready(function() {
            topEle.off('click').on('click', function() {
              scrollBody.stop().animate({scrollTop : 0}, 100);
            });
          });
        } else {
          topEle.hide();
        }
      });
    },
    init : function() {
      header.cart(login);
      header.loginCheck(login);
      header.wishList(login);
      header.menuClick(anchor);
      header.lnbClick(subAnchor);
      header.lnbClick(thirdAnchor);
      header.bgClick();
      header.keywordFocusIn(searchFiled);
      header.autoComplete(searchFiled);
      header.asideClick(aside);
      header.topAnchor();
    }
  }
  header.init();
  return header;
};
