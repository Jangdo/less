$(function(){
	$('header').load('storeHeader.html', function() {
	  var gnbUl = $('.gu_store_menu'), storeMenu = 'guStoreMenu';
	  $.ajax({
			url : '../../json/storeMenu.json',
			data : storeMenu,
			dataType : 'json',
			success: function(data) {
	      var itemData = data[storeMenu];
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
	      $.each(itemData, function() {gnbUl.append(getMenuItem(this))});
	      // header interaction 실행
	      headerInteraction();
			},
	    error: function() {console.log('error')}
		});
	});
	$('footer').load('storeFooter.html');
});

var login = {"cartCnt":"10","loginYn":"Y","wishYn":"Y"};

var headerInteraction = function() {
	if (varUA.match('android') != null) {
    $('body').addClass('android');
  } else if (varUA.indexOf("iphone")>-1||varUA.indexOf("ipad")>-1||varUA.indexOf("ipod")>-1) {
    $('body').addClass('iphone');
  } else {
    //아이폰, 안드로이드 외 처리
  }
  var availableTags = ["스커트", "롱스커트", "A라인 스커트", "H라인 스커트", "플레어 스커트", "레이스 머메이드 스커트", "로고 타이트 스커트", "프린트 미니 스커트", "데님 스커트"];
  var gnbUl = $('.gu_store_menu');
  var btn = $('.gu_interaction_gnb');
  var navi = $('.gu_aside');
  var badge  = $('.gu_badge');
  var headerNav = $('.gu_store_header > nav');
  var like = headerNav.find('.gu_like');
  var likeSvg = {
    off: '<svg width="1.666rem" height="1.666rem" viewBox="0 0 40 40" enable-background="new 0 0 40 40" xml:space="preserve"><path id="SVGID_1_" d="M12.243,5.344c-4.655,0-8.482,3.885-8.482,8.613c0,2.1,0.827,3.99,2.584,6.195 c3.104,3.889,11.172,11.555,13.759,14.076c2.587-2.416,10.552-10.188,13.655-14.076c1.758-2.205,2.586-4.095,2.586-6.195 c0-4.728-3.826-8.613-8.48-8.613c-2.692,0-5.173,1.259-6.829,3.465c-0.414,0.63-1.447,0.63-1.861,0 C17.415,6.604,14.933,5.344,12.243,5.344z M20.105,37.417C20.105,37.417,20,37.417,20.105,37.417 c-0.633,0-0.633-0.109-6.861-6.217c-4.329-4.286-7.389-7.503-9.079-9.54C1.95,18.981,1,16.517,1,13.838 	C1,7.621,5.96,2.583,12.083,2.583c3.061,0,5.805,1.179,7.917,3.429c2.111-2.143,4.855-3.429,7.917-3.429 C34.039,2.583,39,7.621,39,13.838c0,2.785-0.95,5.143-3.167,7.822c-1.688,2.037-4.645,5.254-8.972,9.54 C20.738,37.308,20.738,37.308,20.105,37.417z"/></svg><span class="gu_text">Wish List</span>',
    on: '<svg width="1.666rem" height="1.666rem" viewBox="0 0 1024 1024" style="display: inline; fill: rgb(255, 80, 80);"><path d="M330,815.92C213.31,699.6,130.84,612.31,85.31,557.08,25.6,484.35,0,417.48,0,344.78,0,176.09,133.68,39.38,298.66,39.38c82.51,0,156.44,48,213.34,109,56.88-58.13,130.84-109,213.31-109,165,0,298.69,136.7,298.69,305.4,0,75.59-25.6,139.57-85.34,212.29C893.16,612.31,813.49,699.6,696.88,815.92c-165,165.77-165,165.77-182,168.69C497.78,984.62,497.78,981.69,330,815.92Z"></path></svg><span class="gu_text">Wish List</span>'
  }

  var header = {
    storeMenuDisplay : function() {
      gnbUl.find('> li').each(function() {
        var subUl = $(this).find('> ul');
        if(subUl.length > 0) {subUl.find('> li').addClass('gu_interaction_second')}
      });
      $('.gu_interaction_second').each(function() {
        var subUl = $(this).find('> ul');
        if(subUl.length > 0) {subUl.find('> li').addClass('gu_interaction_third')}
      });
    },
    subAnchorClick : function($this) {
      if($this.hasClass('gu_on')) {
        $this.next('ul').hide();
        $this.removeClass('gu_on');
      } else {
        var myClass = $this.parent('li').attr('class');
        switch (myClass) {
          case 'gu_interaction_second': $('.gu_interaction_second').find('ul').hide(); $('.gu_interaction_second').find('> a').removeClass('gu_on'); break;
          case 'gu_interaction_third': $('.gu_interaction_third').find('ul').hide(); break;
          default: break;
        }
        $this.next('ul').show();
        $this.addClass('gu_on');
      }
    },
		// 0518 수정
    categoryClick : function(selector) {
      selector.off('click').on('click', function() {
        if($(this).hasClass('gu_interaction_gnb_off')) {
          navi.show();
          $(this).removeClass('gu_interaction_gnb_off');
          $('.gu_interaction_menu_call').hide(); $('.gu_interaction_menu_hide').show(); $('.gu_interaction_category_text').text('');
          var anchor = $('.gu_store_menu > li > a.gu_interaction_sub_menu');
          var subAnchor = $('.gu_store_menu > li > ul > li > a.gu_interaction_sub_menu');
          $(anchor).off('click').on('click', function() {
            header.subAnchorClick($(this));
          });
          $(subAnchor).off('click').on('click', function() {
            header.subAnchorClick($(this));
          });
        } else {
          navi.hide();
          $(this).addClass('gu_interaction_gnb_off');
          $('.gu_interaction_menu_call').show();
          $('.gu_interaction_menu_hide').hide();
          $('.gu_interaction_category_text').text('카테고리');
        }
      });
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
        headerNav.find('li:nth-child(1)').find('.gu_text').text('MY PAGE');
      } else {
        headerNav.find('li:nth-child(1)').find('.gu_text').text('로그인');
      }
    },
    wishList : function(login) {
      if(login.wishYn == 'Y') {
        like.addClass('gu_on');
        like.html(likeSvg.on);
      } else {
        like.removeClass('gu_on');
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
    tabs: function(tabArea, tabAnchor, className, tabContainer) {
      tabAnchor.off('click').on('click', function() {
        var myCon = $(this).parent(), idx = myCon.index();
        myCon.siblings().removeClass(className);
        myCon.addClass(className);
        $(this).closest(tabArea).find(tabContainer).removeClass(className);
        $(this).closest(tabArea).find(tabContainer).eq(idx).addClass(className);
      });
    },
    selectCall: function(opt, optName, className, dataName, sortName, selFunc, openerSelelcted) {
      opt.find('> a').off('click').on('click', function() {
        var $opt = $(this);
        if($opt.hasClass(optName) && !(opt.hasClass('gu_disabled'))) {
          openerSelelcted && openerSelelcted(); $opt.removeClass(optName);
          $opt.next('ul').show().ready(function() {
  					$opt.addClass('gu_on');
            $opt.next('ul').find('li > a').off('click').on('click', function($my) {
              $my = $(this);
  						var myidx = $my.parent().index();
              $opt.next('ul').find('li').removeClass(className); $my.parent('li').addClass(className); $opt.addClass(optName);
              $opt.next('ul').hide().ready(function() {$opt.removeClass('gu_on'); $opt.text($my.text()).attr(dataName, sortName + myidx).ready(function() {selFunc && selFunc($my.text());});});
            });
          });
        } else {$opt.addClass(optName).removeClass('gu_on'); $opt.next('ul').hide();}
      });
    },
    addList: function(my, myName, inner) {for (var i = 0; i < my.length; i++) {inner.append('<li><a href="javascript:void(0);">' + (my[i])[myName] + '</a></li>');}},
    dupleAddList: function(my, myName, selected, subName, inner) {
      for (var i = 0; i < my.length; i++) {if (selected == my[i][myName]) {for (var n = 0; n < my[i][subName].length; n++) {inner.append('<li><a href="javascript:void(0);">' + my[i][subName][n] + '</a></li>');}}}
    },
    search: function() {
      //검색창
      var locationHtml = (location.href);
      var itemModalSearch = $('.gu_modal_item_search');
      var searchElement = $('.gu_modal_total_search');
      var searchLayerBtn = $('.gu_header_search > a');
      if (locationHtml.indexOf('searchResult') > 0) {
        searchElement.remove();
        // item search
        itemModalSearch.load('itemModalSearch.html', function() {
          var searchFootBtn = $('.gu_btn_item_search_filter > a');
          var searchOpener = $('.gu_header_search > a, .gu_btn_item_search_filter > a');
          var filterWrap = $('.gu_item_filter_wrap'), filterCloseBtn = filterWrap.find('.gu_item_btn_box > a');
          var filterBody = filterWrap.find('.gu_item_search_filter'), filterBtn = filterWrap.find('.gu_btn_search_filter');
          var genderCall = $('.gu_interaction_gender'), genderCallUl = genderCall.find('> ul');
          var categoryCall = $('.gu_interaction_category_a'), cateCallUl = categoryCall.find('> ul');
          var categorySub = $('.gu_interaction_category_b'), subCateUl = categorySub.find('> ul');
          var priceCall = $('.gu_interaction_price'), priceSelUl = priceCall.find('> ul');
          var $rcb = $('.gu_reset_box > a');
          var commonClass = 'gu_interaction_on';
          var $basicTxt = '선택하세요.';
          var $basicLi = '<li class="gu_selected"><a href="javascript:void(0);">' + $basicTxt + '</a></li>';
					var topAct = {clear: function() {itemModalSearch.hide(); filterWrap.hide(); searchItemTerm.removeClass('gu_on'); searchLayerBtn.removeClass('gu_interaction_open'); searchFootBtn.removeClass('gu_interaction_open'); $('body').removeClass('gu_body_fixed gu_search_item')}};
					var searchItemTerm = itemModalSearch.find('.gu_search_term');
          //json type sample
          var categoryFristGroup = {
            'genName': 'WOMEN', 'genSub': [
              {'cateName': 'Women 첫번째', 'subName': ['Women 서브 1-1', 'Women 서브 1-2', 'Women 서브 1-3']},
              {'cateName': 'Women 두번째', 'subName': ['Women 서브 2-1', 'Women 서브 2-2', 'Women 서브 2-3']},
              {'cateName': 'Women 세번째', 'subName': ['Women 서브 3-1', 'Women 서브 3-2', 'Women 서브 3-3']}
            ]
          };
          var categorySecondGroup = {
            'genName': 'MEN', 'genSub': [
              {'cateName': 'men 첫번째', 'subName': ['men 서브 1-1', 'men 서브 1-2', 'men 서브 1-3']},
              {'cateName': 'men 두번째', 'subName': ['men 서브 2-1', 'men 서브 2-2']},
              {'cateName': 'men 세번째', 'subName': ['men 서브 3-1', 'men 서브 3-2', 'men 서브 3-3']}
            ]
          };
          var categoryThirdGroup = {
            'genName': 'KIDS', 'genSub': [
              {'cateName': 'kids 첫번째', 'subName': ['kids 서브 1-1', 'kids 서브 1-2', 'kids 서브 1-3']},
              {'cateName': 'kids 두번째', 'subName': ['kids 서브 2-1', 'kids 서브 2-2', 'kids 서브 2-3']},
              {'cateName': 'kids 세번째', 'subName': ['kids 서브 3-1', 'kids 서브 3-2']}
            ]
          };
          searchOpener.off('click').on('click', function() {
            var searchFiled = itemModalSearch.find('.gu_item_search_input input[type="text"]');
            if (searchLayerBtn.hasClass('gu_interaction_open') && searchFootBtn.hasClass('gu_interaction_open')) {topAct.clear()}
            else {
              searchLayerBtn.addClass('gu_interaction_open'); searchFootBtn.addClass('gu_interaction_open');
              itemModalSearch.show().ready(function() {
                $('body').addClass('gu_body_fixed gu_search_item');
                filterWrap.hide();
                searchItemTerm.css('height', DEVICEHEIGHT + 'px');
                searchItemTerm.load('searchTerm.html', function() {
                  header.tabs(searchItemTerm, $('.gu_tab_navi > li > a'), 'gu_on', '.gu_tab_container > div');
                  itemModalSearch.find('.gu_btn_delete').off('click').on('click', function() {
                    $(this).closest('li').remove();
                    //최근검색어 낱개 삭제 시 개발함수
                  });
                  itemModalSearch.find('.gu_btn_all_delete').off('click').on('click', function() {
                    itemModalSearch.find('.gu_recent_search > ul > li').remove();
                    //최근검색어 전체 삭제 시 개발함수
                  });
                  itemModalSearch.find('.gu_btn_close').off('click').on('click', function() {topAct.clear()});
                  // 검색 컨텐츠 영역 로딩 후 개발함수
                });
                //자동검색어 예제
                var availableTags = ["스커트", "롱스커트", "A라인 스커트", "H라인 스커트", "플레어 스커트", "레이스 머메이드 스커트", "로고 타이트 스커트", "프린트 미니 스커트", "데님 스커트"];
                //검색어 auto complete
                searchFiled.on('focusin', function() {
                  searchItemTerm.addClass('gu_on');
                  searchFiled.autocomplete({source: availableTags, messages: {noResults: '', results: function() {}}, minLength: 1}).data('ui-autocomplete')._renderItem = function(ul, item) {
                    var term = this.term, regex = new RegExp($.ui.autocomplete.escapeRegex(term), 'gi'), label = item.label.replace(regex, '<span class="gu_black">$&</span>'), $link = $('<a href="javascript:void(0);"></a>').html(label);
                    return $('<li></li>').append($link).appendTo(ul);
                  }
                });
                searchFiled.on('focusout', function() {searchItemTerm.addClass('gu_on')});
                var condSearch = $('.gu_modal_btn_search');
                condSearch.off('click').on('click', function() {
                  var $condition = $(this);
                  filterWrap.show().ready(function() {
                    var headerHeight = $('header').height();
                    var searchInputHeight = $('.gu_item_search_input').height(), btnBoxHeight = $('.gu_item_btn_box').height();
                    filterBody.show();
                    filterBody.css('height', (DEVICEHEIGHT - (headerHeight + btnBoxHeight)) + 'px');
                    var resetCond = {
                      gender: function() {
                        genderCallUl.hide(); genderCall.find('> a').addClass(commonClass);
                        genderCall.find('> a').text($basicTxt);
                      },
                      itemCategory: function() {
                        genderCallUl.hide(); categoryCall.find('> a').addClass(commonClass);
                        categoryCall.find('> a').text($basicTxt);
                        subCateUl.hide(); categorySub.find('> a').addClass(commonClass);
                        categorySub.find('> a').text($basicTxt);
                      },
                      price: function() {
                        priceSelUl.hide(); priceCall.find('> a').addClass(commonClass);
                        priceCall.find('> a').text($basicTxt);
                      },
                      colorCall: function() {
                        $('.gu_icon_color').find('input[type="checkbox"]').attr('checked', false);
                      },
                      sizeCall: function() {
                        $('.gu_size_box').find('input[type="checkbox"]').attr('checked', false);
                      },
                      resultSearch: function() {
                        $('.gu_interaction_sr').find('.gu_radio_area:first-child input[type="radio"]').prop('checked', true);
                        $('.gu_interaction_st').find('input[type="text"]').val('');
                      },
                      allCall: function() {
                        resetCond.gender();
                        resetCond.itemCategory();
                        resetCond.price();
                        resetCond.colorCall();
                        resetCond.sizeCall();
                        resetCond.resultSearch();
                      }
                    }
                    //gender
                    header.selectCall(genderCall, 'gu_interaction_on', 'gu_selected', 'data-id', 'sort', function($beforCategory) {
                      categoryCall.find('> a').text($basicTxt); categoryCall.removeClass('gu_disabled');
                      cateCallUl.find('> li').remove(); cateCallUl.append($basicLi);
                      switch ($beforCategory) {
                        case $basicTxt: categoryCall.addClass('gu_disabled'); categorySub.addClass('gu_disabled'); cateCallUl.find('> li').remove(); subCateUl.find('> li').remove(); break;
                        case categoryFristGroup.genName: header.addList(categoryFristGroup.genSub, 'cateName', cateCallUl); break;
                        case categorySecondGroup.genName: header.addList(categorySecondGroup.genSub, 'cateName', cateCallUl); break;
                        case categoryThirdGroup.genName: header.addList(categoryThirdGroup.genSub, 'cateName', cateCallUl); break;
                        default: break;
                      }
                      var selectAnchor = genderCall.find('> a');
                      var sorting = selectAnchor.attr('data-id');
                      //셀렉트 선택 후 개발 함수
                      switch (sorting) {
                        case 'sort0': console.log(selectAnchor.text()); break;
                        case 'sort1': console.log(selectAnchor.text()); break;
                        case 'sort2': console.log(selectAnchor.text()); break;
                        case 'sort3': console.log(selectAnchor.text()); break;
                        default: break;
                      }
                      //카테고리
                      header.selectCall(categoryCall, 'gu_interaction_on', 'gu_selected', 'data-id', 'sort', function($beforeSeleted) {
                        categorySub.find('> a').text($basicTxt); categorySub.removeClass('gu_disabled');
                        subCateUl.find('> li').remove(); subCateUl.append($basicLi);
                        if ($beforeSeleted == $basicTxt) {categorySub.addClass('gu_disabled'); subCateUl.find('> li').remove();}
                        else {
                          header.dupleAddList(categoryFristGroup.genSub, 'cateName', $beforeSeleted, 'subName', subCateUl);
                          header.dupleAddList(categorySecondGroup.genSub, 'cateName', $beforeSeleted, 'subName', subCateUl);
                          header.dupleAddList(categoryThirdGroup.genSub, 'cateName', $beforeSeleted, 'subName', subCateUl);
                        }
                        var selectAnchor = categoryCall.find('> a');
                        var sorting = selectAnchor.attr('data-id');
                        //셀렉트 선택 후 개발 함수
                        switch (sorting) {
                          case 'sort0': console.log(selectAnchor.text()); break;
                          case 'sort1': console.log(selectAnchor.text()); break;
                          case 'sort2': console.log(selectAnchor.text()); break;
                          case 'sort3': console.log(selectAnchor.text()); break;
                          default: break;
                        }
                        header.selectCall(categorySub, 'gu_interaction_on', 'gu_selected', 'data-id', 'sort', function() {
                          var selectAnchor = categorySub.find('> a');
                          var sorting = selectAnchor.attr('data-id');
                          //셀렉트 선택 후 개발 함수
                          switch (sorting) {
                            case 'sort0': console.log(selectAnchor.text()); break;
                            case 'sort1': console.log(selectAnchor.text()); break;
                            case 'sort2': console.log(selectAnchor.text()); break;
                            case 'sort3': console.log(selectAnchor.text()); break;
                            default: break;
                          }
                          //category 셀렉트 선택 후 개발함수
                        }, function() {
                          genderCallUl.hide(); genderCall.find('> a').addClass(commonClass);
                          cateCallUl.hide(); categoryCall.find('> a').addClass(commonClass);
                          priceSelUl.hide(); priceCall.find('> a').addClass(commonClass);
                        });
                      }, function() {
                        genderCallUl.hide(); genderCall.find('> a').addClass(commonClass);
                        subCateUl.hide(); categorySub.find('> a').addClass(commonClass);
                        priceSelUl.hide(); priceCall.find('> a').addClass(commonClass);
                      });
                      //gender 셀렉터 선택 후 개발함수
                    }, function() {
                      cateCallUl.hide(); categoryCall.find('> a').addClass(commonClass);
                      subCateUl.hide(); categorySub.find('> a').addClass(commonClass);
                      priceSelUl.hide(); priceCall.find('> a').addClass(commonClass);
                    });
                    //price
                    header.selectCall(priceCall, 'gu_interaction_on', 'gu_selected', 'data-id', 'sort', function() {
                      var selectAnchor = priceCall.find('> a');
                      var sorting = selectAnchor.attr('data-id');
                      //셀렉트 선택 후 개발 함수
                      switch (sorting) {
                        case 'sort0': console.log(selectAnchor.text()); break;
                        case 'sort1': console.log(selectAnchor.text()); break;
                        case 'sort2': console.log(selectAnchor.text()); break;
                        case 'sort3': console.log(selectAnchor.text()); break;
                        default: break;
                      }
                      //price 셀렉트 선택 후 개발함수
                    }, function() {
                      genderCallUl.hide(); genderCall.find('> a').addClass(commonClass);
                      cateCallUl.hide(); categoryCall.find('> a').addClass(commonClass);
                      subCateUl.hide(); categorySub.find('> a').addClass(commonClass);
                    });
                    filterBtn.off('click').on('click', function() {
                      filterBtn.off('click').on('click', function() {
                        //이 조건으로 검색하기 버튼 클릭 후 개발함수
                      });
                    });
                    $rcb.off('click').on('click', function() {resetCond.allCall()});
                  });
                });
                filterCloseBtn.off('click').on('click', function() {
                  itemModalSearch.hide().ready(function() {
                    if (searchLayerBtn.hasClass('gu_interaction_open') && searchFootBtn.hasClass('gu_interaction_open')) {topAct.clear();}
                  });
                });
              });
            }
          });
          //검색레이어 로딩 후 개발함수
        });
      } else {
        itemModalSearch.remove();
        //search layer
      	searchElement.load('guHeaderSearch.html', function() {
          var searchLayerClose = $('.gu_btn_modal_close');
          searchLayerBtn.off('click').on('click', function() {
            searchElement.show().ready(function() {
              $('body').addClass('gu_body_fixed');
              var searchItemTerm = $('.gu_search_term');
              var searchArea = $('.gu_search_area');
              searchArea.css('height', DEVICEHEIGHT + 'px');
              searchItemTerm.load('searchTerm.html', function() {
                header.tabs(searchItemTerm, $('.gu_tab_navi > li > a'), 'gu_on', '.gu_tab_container > div');
                searchItemTerm.find('.gu_btn_delete').off('click').on('click', function() {
                  $(this).closest('li').remove();
                  //최근검색어 낱개 삭제 시 개발함수
                });
                searchItemTerm.find('.gu_btn_all_delete').off('click').on('click', function() {
                  searchItemTerm.find('.gu_recent_search > ul > li').remove();
                  //최근검색어 전체 삭제 시 개발함수
                });
                searchItemTerm.find('.gu_btn_close').off('click').on('click', function() {
                  $('.gu_modal_total_search').hide(); $('body').removeClass('gu_body_fixed');
                });
                // 검색 컨텐츠 영역 로딩 후 개발함수
              });
              //자동검색어 예제
              var availableTags = ["스커트" ,"롱스커트", "A라인 스커트", "H라인 스커트", "플레어 스커트", "레이스 머메이드 스커트", "로고 타이트 스커트", "프린트 미니 스커트", "데님 스커트"];
              //검색어 auto complete
              var searchFiled = $('.gu_modal_total_search .gu_search_top input[type="text"]');
              searchFiled.on('focusin', function() {
                searchFiled.autocomplete({source: availableTags, messages: {noResults: '', results: function() {}}, minLength: 1}).data('ui-autocomplete')._renderItem = function(ul, item) {
                  var term = this.term, regex = new RegExp($.ui.autocomplete.escapeRegex(term), 'gi'), label = item.label.replace(regex, '<span class="gu_black">$&</span>'), $link = $('<a href="javascript:void(0);"></a>').html(label);
                  return $('<li></li>').append($link).appendTo(ul);
                }
              });
              searchFiled.on('focusout', function() {
                searchItemTerm.addClass('gu_on');
              });
              // 검색 레이어 닫기
              searchLayerClose.off('click').on('click', function() {
                searchElement.hide().ready(function() {
                  $('body').removeClass('gu_body_fixed');
                });
              });
              //검색 레이어 출력 후 개발함수
            });
          });
          //검색 레이어 html 로딩 후 개발함수
        });
      }
    },
    init : function() {
      header.cart(login);
      header.loginCheck(login);
      header.wishList(login);
      header.storeMenuDisplay();
      header.categoryClick(btn);
      header.topAnchor();
      header.search();
    }
  };
  header.init();
  return header;
};
