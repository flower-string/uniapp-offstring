"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      skystudio: "https://www.jianguoyun.com/p/DS8LIOcQl5iTCxiqrpMFIAA"
    };
  },
  methods: {
    copy() {
      common_vendor.index.setClipboardData({
        data: this.skystudio,
        showToast: true
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.copy && $options.copy(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/offstring/pages/music/music.vue"]]);
wx.createPage(MiniProgramPage);
