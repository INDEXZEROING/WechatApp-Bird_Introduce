//index.js
//获取应用实例
const app = getApp();

Page({
  data: {
    indicatordots:true,
    autoplay:true,
    interval:200,
  },
  toDetails: function () {
    wx.navigateTo({
      url: '/pages/home/details/details',
    })
  },
  toDetails1: function () {
    wx.navigateTo({
      url: '/pages/home/details1/details1',
    })
  },
  
})

