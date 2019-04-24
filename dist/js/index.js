"use strict";

$(function () {
  // 导航容器的宽度
  $(".item-content").width($(".item-title").outerWidth(true));

  $(".item-title").click(function () {
    $(".item-content").css("display", "block");
  });
});