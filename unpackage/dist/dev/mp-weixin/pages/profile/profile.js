"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      info: {
        nickName: "定风波",
        desc: "",
        sex: "girl",
        birthday: "2022-1-1",
        avatar: "/static/logo.png"
      }
    };
  },
  methods: {
    // 获取上传状态
    select(e) {
      console.log("选择文件：", e);
    },
    // 获取上传进度
    progress(e) {
      console.log("上传进度：", e);
    },
    // 上传成功
    success(e) {
      console.log("上传成功");
    },
    // 上传失败
    fail(e) {
      console.log("上传失败：", e);
    },
    openSex() {
      this.$refs.sexpopup.open();
    },
    setSex(str) {
      this.info.sex = str;
      this.$refs.sexpopup.close();
    },
    openNickName() {
      this.$refs.nickNameInputDialog.open();
    },
    setNickName(value) {
      this.info.nickName = value;
    },
    openDesc() {
      this.$refs.descInputDialog.open();
    },
    setDesc(value) {
      this.info.desc = value;
    }
  }
};
if (!Array) {
  const _easycom_uni_file_picker2 = common_vendor.resolveComponent("uni-file-picker");
  const _easycom_uni_datetime_picker2 = common_vendor.resolveComponent("uni-datetime-picker");
  const _easycom_uni_popup2 = common_vendor.resolveComponent("uni-popup");
  const _easycom_uni_popup_dialog2 = common_vendor.resolveComponent("uni-popup-dialog");
  (_easycom_uni_file_picker2 + _easycom_uni_datetime_picker2 + _easycom_uni_popup2 + _easycom_uni_popup_dialog2)();
}
const _easycom_uni_file_picker = () => "../../uni_modules/uni-file-picker/components/uni-file-picker/uni-file-picker.js";
const _easycom_uni_datetime_picker = () => "../../uni_modules/uni-datetime-picker/components/uni-datetime-picker/uni-datetime-picker.js";
const _easycom_uni_popup = () => "../../uni_modules/uni-popup/components/uni-popup/uni-popup.js";
const _easycom_uni_popup_dialog = () => "../../uni_modules/uni-popup/components/uni-popup-dialog/uni-popup-dialog.js";
if (!Math) {
  (_easycom_uni_file_picker + _easycom_uni_datetime_picker + _easycom_uni_popup + _easycom_uni_popup_dialog)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      limit: "1",
      ["del-icon"]: false,
      imageStyles: $data.info.avatar,
      ["file-mediatype"]: "image"
    }),
    b: common_vendor.t($data.info.nickName),
    c: common_vendor.o((...args) => $options.openNickName && $options.openNickName(...args)),
    d: common_vendor.t($data.info.desc),
    e: common_vendor.o((...args) => $options.openDesc && $options.openDesc(...args)),
    f: common_vendor.t($data.info.sex),
    g: common_vendor.o(($event) => $options.openSex()),
    h: common_vendor.t($data.info.birthday),
    i: common_vendor.o(($event) => $data.info.birthday = $event),
    j: common_vendor.p({
      type: "date",
      modelValue: $data.info.birthday
    }),
    k: common_vendor.o(($event) => $options.setSex("boy")),
    l: common_vendor.o(($event) => $options.setSex("girl")),
    m: common_vendor.sr("sexpopup", "dd383ca2-2"),
    n: common_vendor.p({
      ["background-color"]: "#fff",
      type: "bottom"
    }),
    o: common_vendor.sr("inputClose", "dd383ca2-4,dd383ca2-3"),
    p: common_vendor.o($options.setDesc),
    q: common_vendor.p({
      mode: "input",
      title: "编辑你的个人简介",
      value: "",
      placeholder: "请输入个人简介"
    }),
    r: common_vendor.sr("descInputDialog", "dd383ca2-3"),
    s: common_vendor.p({
      type: "dialog"
    }),
    t: common_vendor.sr("inputClose", "dd383ca2-6,dd383ca2-5"),
    v: common_vendor.o($options.setNickName),
    w: common_vendor.p({
      mode: "input",
      title: "修改昵称,每月只能修改一次",
      value: "",
      placeholder: "请输入昵称"
    }),
    x: common_vendor.sr("nickNameInputDialog", "dd383ca2-5"),
    y: common_vendor.p({
      type: "dialog"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-dd383ca2"], ["__file", "E:/Web前端/Project/offstring/pages/profile/profile.vue"]]);
wx.createPage(MiniProgramPage);
