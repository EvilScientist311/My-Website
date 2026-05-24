(function () {
  "use strict";

  var timeline = document.querySelector(".home-timeline");
  if (!timeline) {
    return;
  }

  var track = timeline.querySelector(".home-timeline__track");
  var rail = timeline.querySelector(".home-timeline__rail");
  var fill = timeline.querySelector(".home-timeline__rail-fill");
  var items = Array.prototype.slice.call(
    timeline.querySelectorAll(".home-timeline__item")
  );

  if (!track || !items.length) {
    return;
  }

  timeline.classList.add("home-timeline--enhanced");

  var prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;
  var activeLineRatio = 0.55;

  function getScrollY() {
    return window.pageYOffset || document.documentElement.scrollTop || 0;
  }

  function getMaxScrollY() {
    return Math.max(
      0,
      document.documentElement.scrollHeight - window.innerHeight
    );
  }

  function getDotCenterY(item) {
    var dot = item.querySelector(".home-timeline__node-dot");
    if (!dot) {
      var rect = item.getBoundingClientRect();
      return rect.top + rect.height * 0.35;
    }

    var dotRect = dot.getBoundingClientRect();
    return dotRect.top + dotRect.height / 2;
  }

  function getTimelineProgress() {
    var scrollY = getScrollY();
    var viewY = window.innerHeight * activeLineRatio;
    var viewportBottom = window.innerHeight;
    var maxScrollY = getMaxScrollY();

    var firstItemRect = items[0].getBoundingClientRect();
    var lastDotCenter = getDotCenterY(items[items.length - 1]);

    var firstItemDocTop = firstItemRect.top + scrollY;
    var lastDotDocCenter = lastDotCenter + scrollY;

    var startScroll = firstItemDocTop - viewportBottom;
    var idealEndScroll = lastDotDocCenter - viewY;
    var endScroll = Math.min(idealEndScroll, maxScrollY);

    var progress;
    if (scrollY >= endScroll) {
      progress = 1;
    } else if (scrollY <= startScroll) {
      progress = 0;
    } else {
      var range = endScroll - startScroll;
      progress = range > 0 ? (scrollY - startScroll) / range : 1;
    }

    return {
      progress: Math.min(1, Math.max(0, progress)),
      viewY: viewY,
      endScroll: endScroll,
      atEnd: scrollY >= endScroll,
    };
  }

  function setProgress(metrics) {
    if (!fill || !rail) {
      return;
    }

    var railRect = rail.getBoundingClientRect();
    if (railRect.height <= 0) {
      return;
    }

    var lastDotCenter = getDotCenterY(items[items.length - 1]);
    var lastDotOffset = lastDotCenter - railRect.top;
    var fillPx = metrics.progress * lastDotOffset;
    var fillPct = (fillPx / railRect.height) * 100;

    fill.style.height = Math.min(100, Math.max(0, fillPct)) + "%";
  }

  function setActiveItem(metrics) {
    var progress = metrics.progress;
    var viewY = metrics.viewY;
    var activeIndex = 0;

    if (metrics.atEnd || progress >= 1) {
      activeIndex = items.length - 1;
    } else if (progress <= 0) {
      activeIndex = 0;
    } else {
      var bestDistance = Infinity;

      items.forEach(function (item, index) {
        var dotCenter = getDotCenterY(item);
        var distance = Math.abs(dotCenter - viewY);
        if (distance < bestDistance) {
          bestDistance = distance;
          activeIndex = index;
        }
      });
    }

    items.forEach(function (item, index) {
      item.classList.toggle("is-active", index === activeIndex);
    });
  }

  function setReachedItems(metrics) {
    if (metrics.atEnd || metrics.progress >= 1) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var viewY = metrics.viewY;

    items.forEach(function (item) {
      if (getDotCenterY(item) <= viewY + 4) {
        item.classList.add("is-visible");
      }
    });
  }

  function onFrame() {
    var metrics = getTimelineProgress();
    setProgress(metrics);
    setActiveItem(metrics);
    setReachedItems(metrics);
  }

  function scheduleUpdate() {
    window.requestAnimationFrame(onFrame);
  }

  function bindImageLoadUpdates() {
    var images = document.querySelectorAll("img");
    images.forEach(function (img) {
      if (img.complete) {
        return;
      }

      img.addEventListener("load", scheduleUpdate, { once: true });
      img.addEventListener("error", scheduleUpdate, { once: true });
    });
  }

  if (prefersReducedMotion) {
    items.forEach(function (item) {
      item.classList.add("is-visible");
    });
    if (fill) {
      fill.style.height = "100%";
    }
    items[items.length - 1].classList.add("is-active");
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate, { passive: true });
    window.addEventListener("load", scheduleUpdate);
    bindImageLoadUpdates();
    return;
  }

  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -8% 0px",
        threshold: 0.08,
      }
    );

    items.forEach(function (item) {
      observer.observe(item);
    });
  } else {
    items.forEach(function (item) {
      item.classList.add("is-visible");
    });
  }

  window.addEventListener("scroll", scheduleUpdate, { passive: true });
  window.addEventListener("resize", scheduleUpdate, { passive: true });
  window.addEventListener("load", scheduleUpdate);
  bindImageLoadUpdates();
  onFrame();
})();
