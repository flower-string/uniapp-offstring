"use strict";
const common_vendor = require("../../common/vendor.js");
const MooNav = () => "../../components/MooNav.js";
const Avatar = () => "../../components/Avatar.js";
const _sfc_main = {
  data() {
    return {
      list: ["头像框", "卡片背景", "字体", "空间背景"],
      current: 0
    };
  },
  components: {
    MooNav,
    Avatar
  },
  methods: {
    setCurrent(index) {
      this.current = index;
    }
  }
};
if (!Array) {
  const _component_MooNav = common_vendor.resolveComponent("MooNav");
  const _component_Avatar = common_vendor.resolveComponent("Avatar");
  (_component_MooNav + _component_Avatar)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return common_vendor.e({
    a: common_vendor.o($options.setCurrent),
    b: common_vendor.p({
      navs: $data.list,
      current: $data.current
    }),
    c: $data.current == 0
  }, $data.current == 0 ? {
    d: common_vendor.f(16, (item, k0, i0) => {
      return {
        a: "09f67aae-1-" + i0
      };
    }),
    e: common_vendor.p({
      size: "100rpx",
      avatarImage: "/static/logo.png",
      borderImage: "/static/avatar/purple.png"
    })
  } : $data.current == 1 ? {
    g: common_vendor.f(16, (item, k0, i0) => {
      return {};
    })
  } : $data.current == 2 ? {
    i: common_vendor.f(16, (item, k0, i0) => {
      return {};
    })
  } : $data.current == 3 ? {
    k: common_vendor.f(16, (item, k0, i0) => {
      return {};
    })
  } : {}, {
    f: $data.current == 1,
    h: $data.current == 2,
    j: $data.current == 3
  });
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-09f67aae"], ["__file", "E:/Web前端/Project/offstring/pages/dress/dress.vue"]]);
wx.createPage(MiniProgramPage);
