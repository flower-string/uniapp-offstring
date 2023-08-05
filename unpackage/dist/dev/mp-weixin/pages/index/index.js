"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      list: [
        { name: "宿命", cover: "/static/tmp/宿命.jpg", author: "有机" },
        { name: "星河万里", cover: "/static/tmp/星河万里.jpg", author: "君瑞" },
        { name: "吹灭小山河", cover: "/static/tmp/吹灭小山河.jpg", author: "君" },
        { name: "给你呀", cover: "/static/tmp/给你.jpg", author: "in" },
        { name: "大喜", cover: "/static/tmp/大喜.jpg", author: "鸢尾" }
      ]
    };
  },
  onLoad() {
  },
  methods: {
    toDetail(data) {
      common_vendor.index.navigateTo({
        url: "/pages/trackDetail/trackDetail?item=" + encodeURIComponent(JSON.stringify(data))
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.list, (item, index, i0) => {
      return {
        a: item.cover,
        b: common_vendor.t(item.name),
        c: index * 80 + 15 + "vw",
        d: common_vendor.o(($event) => $options.toDetail(item))
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/offstring/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
