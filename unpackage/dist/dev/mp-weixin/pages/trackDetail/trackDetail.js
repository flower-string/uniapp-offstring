"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      info: "",
      loved: true
    };
  },
  methods: {
    upLoadMusic() {
      common_vendor.index.chooseFile({
        count: 1,
        //选取的文件个数限制
        extension: [".mp3", ".ogg"],
        //可定义允许哪些后缀的文件可被选择
        success: function(res) {
          let tempFilePaths = res.tempFilePaths;
          common_vendor.index.showLoading({
            title: "上传中..."
          });
          common_vendor.index.uploadFile({
            name: "files[]",
            //文件上传的name值
            url: "http://api.xxxx.com/upload",
            //接口地址
            header: {},
            //头信息
            formData: {},
            //上传额外携带的参数
            filePath: tempFilePaths[0],
            //临时路径
            fileType: "audio",
            //文件类型
            success: (uploadFileRes) => {
              common_vendor.index.hideLoading();
              const ret = JSON.parse(uploadFileRes.data);
              console.log(ret);
            }
          });
        }
      });
    },
    setLove() {
      this.loved = !this.loved;
    }
  },
  onLoad(option) {
    const data = JSON.parse(decodeURIComponent(option.item));
    this.info = data;
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: $data.info.cover,
    b: common_vendor.t($data.info.name),
    c: common_vendor.t($data.info.author),
    d: common_vendor.n($data.loved ? "icon-xiai" : "icon-aixin"),
    e: common_vendor.o((...args) => $options.setLove && $options.setLove(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "E:/Web前端/Project/offstring/pages/trackDetail/trackDetail.vue"]]);
wx.createPage(MiniProgramPage);
