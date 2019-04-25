"use strict";

$(function () {
  $(".nav .nav-item").each(function (index, ele) {
    // 导航容器的宽度
    $(ele).outerWidth($(ele).children(".item-title").outerWidth());
    // 导航内容的宽度
    $(ele).children(".item-content").outerWidth($(ele).outerWidth());
    // 导航切换
    $(ele).click(function () {
      $(this).addClass("active").siblings().removeClass("active");
    });
  });

  $(".item-content .text").mouseover(function () {
    $(this).addClass("active").siblings().removeClass("active");
  });

  // 评论 top-item 的高度
  $(".top-item").outerHeight($(".top-item .text").outerHeight() + 46);
});