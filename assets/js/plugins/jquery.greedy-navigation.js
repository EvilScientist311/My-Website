/*
 * Greedy Navigation
 *
 * http://codepen.io/lukejacksonn/pen/PwmwWV
 *
 */

var $nav = $("#site-nav");
var $btn = $("#site-nav button");
var $vlinks = $("#site-nav .visible-links");
var $vlinks_persist_tail = $vlinks.children("*.persist.tail");
var $hlinks = $("#site-nav .hidden-links");

var breaks = [];
var MOBILE_BREAKPOINT = 768;

function isMobileNav() {
  return window.innerWidth <= MOBILE_BREAKPOINT;
}

function updateMastheadPadding() {
  var mastheadHeight = $(".masthead").height();
  $("body").css("padding-top", mastheadHeight + "px");

  if ($(".author__urls-wrapper button").is(":visible")) {
    $(".sidebar").css("padding-top", "");
  } else {
    $(".sidebar").css("padding-top", mastheadHeight + "px");
  }
}

function closeHiddenLinks() {
  $hlinks.addClass("hidden");
  $btn.removeClass("close");
  $btn.attr("aria-expanded", "false");
}

function openHiddenLinks() {
  $hlinks.removeClass("hidden");
  $btn.addClass("close");
  $btn.attr("aria-expanded", "true");
}

function restoreAllLinksToVisible() {
  while ($hlinks.children().length > 0) {
    if ($vlinks_persist_tail.children().length > 0) {
      $hlinks.children().first().insertBefore($vlinks_persist_tail);
    } else {
      $hlinks.children().first().appendTo($vlinks);
    }
  }

  breaks = [];
}

function collapseAllLinksForMobile() {
  while ($vlinks.children("li:not(.persist)").length > 0) {
    $vlinks.children("li:not(.persist)").last().prependTo($hlinks);
  }

  breaks = [];
  $btn.removeClass("hidden");
}

function updateNav() {
  updateMastheadPadding();

  if (isMobileNav()) {
    collapseAllLinksForMobile();
    return;
  }

  restoreAllLinksToVisible();

  var availableSpace = $btn.hasClass("hidden")
    ? $nav.width()
    : $nav.width() - $btn.width() - 30;

  if ($vlinks.width() > availableSpace) {
    while (
      $vlinks.width() > availableSpace &&
      $vlinks.children("*:not(.persist)").length > 0
    ) {
      breaks.push($vlinks.width());
      $vlinks.children("*:not(.persist)").last().prependTo($hlinks);
      availableSpace = $btn.hasClass("hidden")
        ? $nav.width()
        : $nav.width() - $btn.width() - 30;
      $btn.removeClass("hidden");
    }
  } else {
    while (breaks.length > 0 && availableSpace > breaks[breaks.length - 1]) {
      if ($vlinks_persist_tail.children().length > 0) {
        $hlinks.children().first().insertBefore($vlinks_persist_tail);
      } else {
        $hlinks.children().first().appendTo($vlinks);
      }
      breaks.pop();
    }

    if (breaks.length < 1) {
      $btn.addClass("hidden");
      $btn.removeClass("close");
      $hlinks.addClass("hidden");
      $btn.attr("aria-expanded", "false");
    }
  }

  $btn.attr("count", breaks.length);
}

$btn.attr({
  type: "button",
  "aria-label": "Menu",
  "aria-expanded": "false",
  "aria-controls": "site-nav-menu",
});

$hlinks.attr("id", "site-nav-menu");

$btn.on("click", function (event) {
  event.stopPropagation();

  if ($hlinks.hasClass("hidden")) {
    openHiddenLinks();
  } else {
    closeHiddenLinks();
  }
});

$(document).on("click.mobileNav", function (event) {
  if (
    isMobileNav() &&
    !$hlinks.hasClass("hidden") &&
    !$nav.is(event.target) &&
    $nav.has(event.target).length === 0
  ) {
    closeHiddenLinks();
  }
});

$(document).on("keydown.mobileNav", function (event) {
  if (event.key === "Escape") {
    closeHiddenLinks();
  }
});

$hlinks.on("click", "a", function () {
  if (isMobileNav()) {
    closeHiddenLinks();
  }
});

$(window).on("resize", function () {
  updateNav();
});

if (screen.orientation) {
  screen.orientation.addEventListener("change", function () {
    updateNav();
  });
}

updateNav();
