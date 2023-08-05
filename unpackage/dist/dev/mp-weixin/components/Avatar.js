"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "Avatar",
  props: {
    borderImage: String,
    avatarImage: String,
    size: String
  },
  data() {
    return {};
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $props.avatarImage,
    b: $props.borderImage,
    c: $props.size
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/offstring/components/Avatar.vue"]]);
wx.createComponent(Component);
