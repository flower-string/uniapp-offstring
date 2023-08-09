"use strict";
const common_vendor = require("../common/vendor.js");
const useUserStore = common_vendor.defineStore("user", {
  state: () => ({
    nickName: "定风波",
    desc: "",
    birthday: "2022-1-1",
    sex: "boy",
    avatar: "/static/logo.png",
    tags: ["稀里糊兔", "00后", "天平座", "300天"],
    avatarFarme: "/static/avatar/purple.png",
    homeBg: "/static/bg.jpg",
    ip: "未知"
  }),
  actions: {}
});
exports.useUserStore = useUserStore;
