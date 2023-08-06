"use strict";
const common_vendor = require("../common/vendor.js");
const _sfc_main = {
  name: "MooNav",
  props: {
    navs: {
      type: Array,
      default: []
    },
    color: {
      type: String,
      default: ""
    },
    current: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {};
  },
  methods: {
    setCurrent(index) {
      this.$emit("change", index);
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.navs, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: common_vendor.n(index == $props.current ? "active" : ""),
        c: common_vendor.o(($event) => $options.setCurrent(index))
      };
    })
  };
}
const Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2c10a28a"], ["__file", "E:/Web前端/Project/offstring/components/MooNav.vue"]]);
wx.createComponent(Component);
