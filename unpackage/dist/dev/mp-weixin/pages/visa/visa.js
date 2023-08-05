"use strict";
const common_vendor = require("../../common/vendor.js");
const Avatar = () => "../../components/Avatar.js";
const _sfc_main = {
  data() {
    return {
      visad: false
    };
  },
  components: {
    Avatar
  },
  methods: {
    setVisad() {
      if (this.visad) {
        return;
      }
      this.visad = true;
      console.log("签到成功");
    }
  }
};
if (!Array) {
  const _component_Avatar = common_vendor.resolveComponent("Avatar");
  _component_Avatar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.t($data.visad ? "今日已签到" : "立即签到"),
    b: common_vendor.n($data.visad ? "visad" : ""),
    c: common_vendor.o((...args) => $options.setVisad && $options.setVisad(...args)),
    d: common_vendor.p({
      size: "80rpx",
      ["avatar-image"]: "/static/logo.png",
      ["border-image"]: "/static/avatar/lightgirl.png"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/offstring/pages/visa/visa.vue"]]);
wx.createPage(MiniProgramPage);
