"use strict";
const common_vendor = require("../../common/vendor.js");
const Avatar = () => "../../components/Avatar.js";
const _sfc_main = {
  data() {
    return {
      info: {
        avatarUrl: "/static/logo.png",
        nickName: "姓名",
        ip: "未知",
        desc: "你还没有写过个人介绍",
        tags: ["稀里糊兔", "00后", "天平座", "300天"],
        biixn: 0,
        tiezi: 0,
        yuepu: 0
      }
    };
  },
  components: {
    Avatar
  },
  methods: {
    wxLogin() {
      let that = this;
      common_vendor.index.login({
        provider: "weixin",
        success: function(loginRes) {
          common_vendor.index.getUserProfile({
            desc: "用于显示用户头像和姓名",
            success: function(infoRes) {
              console.log("用户昵称为：" + infoRes);
              that.info.nickName = infoRes.userInfo.nickName;
              that.info.avatarUrl = infoRes.userInfo.avatarUrl;
            },
            fail() {
              console.log("失败");
            }
          });
        }
      });
    },
    toPage(url) {
      console.log(url);
      common_vendor.index.navigateTo({
        url: `/pages/${url}/${url}`
      });
    }
  },
  onLoad() {
    this.wxLogin();
  }
};
if (!Array) {
  const _component_Avatar = common_vendor.resolveComponent("Avatar");
  _component_Avatar();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      size: "100rpx",
      avatarImage: $data.info.avatarUrl,
      borderImage: "/static/avatar/purple.png"
    }),
    b: common_vendor.t($data.info.nickName),
    c: common_vendor.t($data.info.ip),
    d: common_vendor.f($data.info.tags, (item, k0, i0) => {
      return {
        a: common_vendor.t(item)
      };
    }),
    e: common_vendor.t($data.info.desc),
    f: common_vendor.o(($event) => $options.toPage("dress")),
    g: common_vendor.o(($event) => $options.toPage("profile")),
    h: common_vendor.t($data.info.biixn),
    i: common_vendor.t($data.info.tiezi),
    j: common_vendor.t($data.info.yuepu)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-19c123a7"], ["__file", "E:/Web前端/Project/offstring/pages/me/me.vue"]]);
wx.createPage(MiniProgramPage);
