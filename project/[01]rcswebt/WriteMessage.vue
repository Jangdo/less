<template lang="pug">
  .write_message
    .emulator_wrap
      .emulator_head
        h2.title 메세지 발송
        a(href="javascript:void(0);").btn.link
          span 메세지보관함
      .emulator_cont
          .item_bundle
            strong.tit_bundle
              | 브랜드 / 양식
            .cont_bundle
              .cont_flex_bundle
                span.custom_select
                  select(name="")
                    option(value="") 브랜드명을 선택해주세요.
                    -for(i=1; i < 10; i++)
                      option(value="") Brand00#{i} (브랜드명)
                span.custom_select
                  select(name="")
                    option(value="") 양식을 선택해주세요.
                    -for(i=1; i < 10; i++)
                      option(value="") Tmplt00#{i} (템플릿명)
          .tab_wrap
            ul.tab_nav
              li(v-for="tab in tabs" :class="{'active' : displayContent(tab.name)}")
                a(href="javascript:void(0)" @click="tabActive(tab.name)") {{ tab.displayName }}
            .tab_container
              .tab_content(:class="{'active' : displayContent('write')}")
                h2.blind 메세지작성 탭
                .wrap_bundle
                  .item_bundle
                    strong.tit_bundle
                      | 이미지
                    .cont_bundle
                      .box_add_files
                        span.custom_input
                          input(type="text" id="file_route01" readonly)
                          input(type="file" id="file_bt01" onchange="javascript:document.getElementById('file_route01').value=this.value").ui_skip
                          label(for="file_bt01").btn.gray.mid.btn_add_files <span>파일업로드</span>
                      p.caution ※ 가로 284 세로 500 사이즈의 이미지를 등록 해주세요.
                  .item_bundle
                    strong.tit_bundle
                      | 타이틀
                    .cont_bundle
                      span.custom_input.full_width
                        input(type="text" placeholder="타이틀 입력" v-model="inputTitle")
                  .item_bundle
                    strong.tit_bundle
                      | 내용
                    .cont_bundle
                      .custom_textarea
                        textarea(placeholder="변수로 설정하고자 하는 내용을 {} 표시로 작성해주세요. \n예) 이름과 출금일을 변수설정 : {이름}님 OO카드 {출금일} 출금예정입니다." v-model="textContent")
                      p.caution ※ 최대 90byte
                  .item_bundle
                    strong.tit_bundle
                      | 버튼
                    .cont_bundle
                      .box_table
                        .box_th
                          strong.title 버튼 1
                        .box_td
                          .cont_flex_bundle
                            span.custom_select
                              select(name="")
                                option(value="") 액션선택
                                option(value="") 복사하기
                                option(value="") 전화걸기
                                option(value="") URL연결
                            span.custom_input
                              input(type="text" id="" placeholder="버튼명")
                          span.custom_input.full_width
                            input(type="text" id=""  placeholder="액션내용입력")
                      .box_table
                        .box_th
                          strong.title 버튼 2
                        .box_td
                          .cont_flex_bundle
                            span.custom_select.half_width
                              select(name="")
                                option(value="") 액션선택
                                option(value="") 복사하기
                                option(value="") 전화걸기
                                option(value="") URL연결
                  .item_bundle
                    strong.tit_bundle
                      | 광고
                    .cont_bundle
                      .cont_block_bundle
                        span.custom_radio
                          input(type="radio" name="radioAd" id="hiddenAd" checked)
                          label(for="hiddenAd") 미표시
                        span.custom_radio
                          input(type="radio" name="radioAd" id="visibleAd")
                          label(for="visibleAd") 표시
                      .cont_block_bundle
                        .box_add_input
                          strong.title 무료수신거부
                          span.custom_input
                            input(type="text" placeholder="010-1234-1234")
                  .item_bundle
                    strong.tit_bundle
                      | Fallback
                    .cont_bundle
                      .cont_block_bundle
                        span.custom_radio
                          input(type="radio" name="selectSand" id="sendSms")
                          label(for="sendSms") SMS사용
                        span.custom_radio
                          input(type="radio" name="selectSand" id="sendLms")
                          label(for="sendLms") LMS사용
                        span.custom_radio
                          input(type="radio" name="selectSand" id="notUsed" checked)
                          label(for="notUsed") 미사용
                      .cont_block_bundle
                        .custom_textarea
                          textarea(placeholder="메시지 내용을 입력 해주세요 (최대 90byte)")
                        p.caution ※ RCS 메시지 발송에 실패했을 경우, SMS나 LMS로 문자를 발송할 수 있습니다.
              .tab_content(:class="{'active' : displayContent('send')}")
                h2.blind 발송설정 탭
                .wrap_bundle
                  .item_bundle
                    strong.tit_bundle
                      | 받는사람
                    .cont_bundle
                      .cont_block_bundle
                        .cont_flex_bundle
                          .btn_wrap.align_left.half_width
                            a(href="javascript:void(0);").btn.sml.gray
                              span 주소록
                            a(href="javascript:void(0);" data-layer="layer02").btn.sml.bd_gray
                              span 대량등록
                          .btn_wrap.align_right.half_width
                            a(href="javascript:void(0);" data-layer="layer01").btn_guide
                              span 도움말
                      .cont_block_bundle
                        .input_btn_bundle
                          span.custom_textarea
                            textarea(rows="3" pattern="[0-9]+([-\,][0-9]+)?" placeholder="휴대폰번호 직접입력 \n엑셀 메모장 붙여넣기 가능" onKeyup="inputPhoneNumber(this);" ).input_add
                          a(href="javascript:void(0);").btn.sml.blue
                            span 추가
                      .cont_block_bundle
                        .select_list
                          ul
                            li.selected
                              span 010-1234-1234
                              a(href="javascript:void(0);").btn_delete 삭제
                            li
                              span 010-1234-1234
                              a(href="javascript:void(0);").btn_delete 삭제
                            li
                              span 010-1234-1234
                              a(href="javascript:void(0);").btn_delete 삭제
                            li
                              span 010-1234-1234
                              a(href="javascript:void(0);").btn_delete 삭제
                            li
                              span 010-1234-1234
                              a(href="javascript:void(0);").btn_delete 삭제
                            li
                              span 010-1234-1234
                              a(href="javascript:void(0);").btn_delete 삭제
                            li.group
                              span 그룹명 (인원)명
                              a(href="javascript:void(0);").btn_delete 삭제
                            li.register_mass
                              span 대량등록(상위 10명)
                              a(href="javascript:void(0);").btn_delete 삭제
                      .cont_block_bundle
                        .cont_flex_bundle
                          .select_list_length.align_left.half_width
                            p 총 <span class="count">0</span>명
                          .btn_wrap.align_right.half_width
                            a(href="javascript:void(0);").btn_delete
                              span 전체삭제
                  .item_bundle
                    strong.tit_bundle
                      | 발신번호
                    .cont_bundle
                      span.custom_select.full_width
                        select(name="")
                          option(value="") 선택
                          option(value="") 010-0000-0000
                  .item_bundle
                    strong.tit_bundle
                      | 발송일자
                    .cont_bundle
                      .cont_block_bundle
                        span.custom_radio
                          input(type="radio" name="sendForm" id="sendForm01" checked)
                          label(for="sendForm01") 즉시발송
                        span.custom_radio
                          input(type="radio" name="sendForm" id="sendForm02")
                          label(for="sendForm02") 예약발송
                      .cont_block_bundle
                        .cont_flex_bundle
                          span.custom_input.icon_date
                            input(type="text" readonly).datepicker
                          span.custom_select
                            select
                              -for(i=0; i < 24; i++)
                                option(value="") #{i} 시
                          span.custom_select
                            select
                              -for(i=0; i < 60; i++)
                                option(value="") #{i} 분
    .preview_wrap
      strong.blind 미리보기
      .view_area
        .view_cont
          p.ad_top_text
            | (광고) 브랜드명
          .scroll_area
            .img_area
              img(src="../assets/images/img_placeholder.png" alt="%게시물제목%")
            .desc_area
              .inner_desc
                h4.title {{ inputTitle }}
                p.text {{ textContent }}
              .btn_wrap
                a(href="javascript:void(0);").btn.mid 버튼 1
                a(href="javascript:void(0);").btn.mid 버튼2
          p.ad_bottom_text
            | 무료 수신거부 :
      .btn_wrap
        a(href="javascript:void(0);").btn.big.bd_blue
          span 저장
        a(href="javascript:void(0);").btn.big.bd_blue
          span 테스트 발송
        a(href="javascript:void(0);").btn.big.blue.full_width
          span 발송요청
</template>

<script>
export default {
  name: 'WriteMessage',
  props: {
    inputTitle: {
        default: "타이틀입력"
    },
    textContent: {
      default: "내용입력"
    }
  },
  components: {

  },
  data() {
    return {

      activeTabName: null,
      tabs: [
        {
          name: 'write',
          displayName: '메세지 작성 '
        },
        {
          name: 'send',
          displayName: '발송 설정'
        }
      ]
    }
  },
  mounted() {
    this.activeTabName = this.tabs[0].name; // 첫번재 탭 active
    console.log(this.activeTabName);
  },
  methods: {
    tabActive(name) {
      this.activeTabName = name;
    },
    displayContent(name) {
      return this.activeTabName === name;
    },
    changeTitle() {
        this.$emit("changeTitle", this.inputTitle);
        console.log('message emit from child components')
    }
  }
}
</script>

<style lang="css" scoped>
</style>
