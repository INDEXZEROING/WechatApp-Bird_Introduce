//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    
  },
  toDetails: function () {
    wx.navigateTo({
      url: '/pages/details/details',
    })
  },
  toDetails1:function () {
    wx.navigateTo({
      url: '/pages/details1/details1',
    })

  },
  //设置转发功能
  onShareAppMessage: function () {
    return {
      path: '/index/index'
    }
  }
})

