"use strict";
const common_vendor = require("../../common/vendor.js");
const MooNav = () => "../../components/MooNav.js";
const _sfc_main = {
  data() {
    return {
      current: 0,
      navs: ["精品", "悬赏", "树洞", "生活广场", "头像壁纸", "学习"],
      cards: [
        { text: "日签墙", icon: "icon-qiandao", path: "visa" },
        { text: "装扮", icon: "icon-qunzi", path: "dress" },
        { text: "写谱", icon: "icon-yongyan", path: "profile" }
      ]
    };
  },
  components: {
    MooNav
  },
  methods: {
    setCurrent(index) {
      console.log(index);
      this.current = index;
    },
    createCommit() {
    },
    toPage(path) {
      common_vendor.index.navigateTo({
        url: `/pages/${path}/${path}`
      });
    }
  }
};
if (!Array) {
  const _component_MooNav = common_vendor.resolveComponent("MooNav");
  _component_MooNav();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.setCurrent),
    b: common_vendor.p({
      navs: $data.navs,
      current: $data.current
    }),
    c: common_vendor.f($data.cards, (item, k0, i0) => {
      return {
        a: common_vendor.n(item.icon),
        b: common_vendor.t(item.text),
        c: common_vendor.o(($event) => $options.toPage(item.path))
      };
    }),
    d: common_vendor.o((...args) => $options.createCommit && $options.createCommit(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/offstring/pages/community/community.vue"]]);
wx.createPage(MiniProgramPage);
