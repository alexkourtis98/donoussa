/*----------------------------------------------
    Index Of All Plugin Hera
------------------------------------------------

    XForm is a clean & modern HTML5  template based on Bootstrap 5.
    @version  :	1.0
    @author 	: saiful islam - https://www.inittheme.com/
    @url 	    : https://themeforest.net/user/inittheme

    :: wow
    :: nice-select
    :: nicescroll
    :: select-2
    :: Slick-Nav

------------------------------------------------
    End-of Plugin
------------------------------------------------*/

// 1. nice-select.min

!(function (e) {
  e.fn.niceSelect = function (t) {
    function s(t) {
      t.after(
        e("<div></div>")
          .addClass("nice-select")
          .addClass(t.attr("class") || "")
          .addClass(t.attr("disabled") ? "disabled" : "")
          .attr("tabindex", t.attr("disabled") ? null : "0")
          .html('<span class="current"></span><ul class="list"></ul>')
      );
      var s = t.next(),
        n = t.find("option"),
        i = t.find("option:selected");
      s.find(".current").html(i.data("display") || i.text()),
        n.each(function (t) {
          var n = e(this),
            i = n.data("display");
          s.find("ul").append(
            e("<li></li>")
              .attr("data-value", n.val())
              .attr("data-display", i || null)
              .addClass(
                "option" +
                  (n.is(":selected") ? " selected" : "") +
                  (n.is(":disabled") ? " disabled" : "")
              )
              .html(n.text())
          );
        });
    }
    if ("string" == typeof t)
      return (
        "update" == t
          ? this.each(function () {
              var t = e(this),
                n = e(this).next(".nice-select"),
                i = n.hasClass("open");
              n.length && (n.remove(), s(t), i && t.next().trigger("click"));
            })
          : "destroy" == t
          ? (this.each(function () {
              var t = e(this),
                s = e(this).next(".nice-select");
              s.length && (s.remove(), t.css("display", ""));
            }),
            0 == e(".nice-select").length && e(document).off(".nice_select"))
          : console.log('Method "' + t + '" does not exist.'),
        this
      );
    this.hide(),
      this.each(function () {
        var t = e(this);
        t.next().hasClass("nice-select") || s(t);
      }),
      e(document).off(".nice_select"),
      e(document).on("click.nice_select", ".nice-select", function (t) {
        var s = e(this);
        e(".nice-select").not(s).removeClass("open"),
          s.toggleClass("open"),
          s.hasClass("open")
            ? (s.find(".option"),
              s.find(".focus").removeClass("focus"),
              s.find(".selected").addClass("focus"))
            : s.focus();
      }),
      e(document).on("click.nice_select", function (t) {
        0 === e(t.target).closest(".nice-select").length &&
          e(".nice-select").removeClass("open").find(".option");
      }),
      e(document).on(
        "click.nice_select",
        ".nice-select .option:not(.disabled)",
        function (t) {
          var s = e(this),
            n = s.closest(".nice-select");
          n.find(".selected").removeClass("selected"), s.addClass("selected");
          var i = s.data("display") || s.text();
          n.find(".current").text(i),
            n.prev("select").val(s.data("value")).trigger("change");
        }
      ),
      e(document).on("keydown.nice_select", ".nice-select", function (t) {
        var s = e(this),
          n = e(s.find(".focus") || s.find(".list .option.selected"));
        if (32 == t.keyCode || 13 == t.keyCode)
          return (
            s.hasClass("open") ? n.trigger("click") : s.trigger("click"), !1
          );
        if (40 == t.keyCode) {
          if (s.hasClass("open")) {
            var i = n.nextAll(".option:not(.disabled)").first();
            i.length > 0 &&
              (s.find(".focus").removeClass("focus"), i.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (38 == t.keyCode) {
          if (s.hasClass("open")) {
            var l = n.prevAll(".option:not(.disabled)").first();
            l.length > 0 &&
              (s.find(".focus").removeClass("focus"), l.addClass("focus"));
          } else s.trigger("click");
          return !1;
        }
        if (27 == t.keyCode) s.hasClass("open") && s.trigger("click");
        else if (9 == t.keyCode && s.hasClass("open")) return !1;
      });
    var n = document.createElement("a").style;
    return (
      (n.cssText = "pointer-events:auto"),
      "auto" !== n.pointerEvents && e("html").addClass("no-csspointerevents"),
      this
    );
  };
})(jQuery);

// 3. wow

!function () {
  var a,
    b,
    c,
    d,
    e,
    f = function (a, b) {
      return function () {
        return a.apply(b, arguments);
      };
    },
    g =
      [].indexOf ||
      function (a) {
        for (var b = 0, c = this.length; c > b; b++)
          if (b in this && this[b] === a) return b;
        return -1;
      };
  (b = (function () {
    function a() {}
    return (
      (a.prototype.extend = function (a, b) {
        var c, d;
        for (c in b) (d = b[c]), null == a[c] && (a[c] = d);
        return a;
      }),
      (a.prototype.isMobile = function (a) {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          a
        );
      }),
      (a.prototype.createEvent = function (a, b, c, d) {
        var e;
        return (
          null == b && (b = !1),
          null == c && (c = !1),
          null == d && (d = null),
          null != document.createEvent
            ? ((e = document.createEvent("CustomEvent")),
              e.initCustomEvent(a, b, c, d))
            : null != document.createEventObject
            ? ((e = document.createEventObject()), (e.eventType = a))
            : (e.eventName = a),
          e
        );
      }),
      (a.prototype.emitEvent = function (a, b) {
        return null != a.dispatchEvent
          ? a.dispatchEvent(b)
          : b in (null != a)
          ? a[b]()
          : "on" + b in (null != a)
          ? a["on" + b]()
          : void 0;
      }),
      (a.prototype.addEvent = function (a, b, c) {
        return null != a.addEventListener
          ? a.addEventListener(b, c, !1)
          : null != a.attachEvent
          ? a.attachEvent("on" + b, c)
          : (a[b] = c);
      }),
      (a.prototype.removeEvent = function (a, b, c) {
        return null != a.removeEventListener
          ? a.removeEventListener(b, c, !1)
          : null != a.detachEvent
          ? a.detachEvent("on" + b, c)
          : delete a[b];
      }),
      (a.prototype.innerHeight = function () {
        return "innerHeight" in window
          ? window.innerHeight
          : document.documentElement.clientHeight;
      }),
      a
    );
  })()),
    (c =
      this.WeakMap ||
      this.MozWeakMap ||
      (c = (function () {
        function a() {
          (this.keys = []), (this.values = []);
        }
        return (
          (a.prototype.get = function (a) {
            var b, c, d, e, f;
            for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
              if (((c = f[b]), c === a)) return this.values[b];
          }),
          (a.prototype.set = function (a, b) {
            var c, d, e, f, g;
            for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
              if (((d = g[c]), d === a)) return void (this.values[c] = b);
            return this.keys.push(a), this.values.push(b);
          }),
          a
        );
      })())),
    (a =
      this.MutationObserver ||
      this.WebkitMutationObserver ||
      this.MozMutationObserver ||
      (a = (function () {
        function a() {
          "undefined" != typeof console &&
            null !== console &&
            console.warn("MutationObserver is not supported by your browser."),
            "undefined" != typeof console &&
              null !== console &&
              console.warn(
                "WOW.js cannot detect dom mutations, please call .sync() after loading new content."
              );
        }
        return (a.notSupported = !0), (a.prototype.observe = function () {}), a;
      })())),
    (d =
      this.getComputedStyle ||
      function (a, b) {
        return (
          (this.getPropertyValue = function (b) {
            var c;
            return (
              "float" === b && (b = "styleFloat"),
              e.test(b) &&
                b.replace(e, function (a, b) {
                  return b.toUpperCase();
                }),
              (null != (c = a.currentStyle) ? c[b] : void 0) || null
            );
          }),
          this
        );
      }),
    (e = /(\-([a-z]){1})/g),
    (this.WOW = (function () {
      function e(a) {
        null == a && (a = {}),
          (this.scrollCallback = f(this.scrollCallback, this)),
          (this.scrollHandler = f(this.scrollHandler, this)),
          (this.resetAnimation = f(this.resetAnimation, this)),
          (this.start = f(this.start, this)),
          (this.scrolled = !0),
          (this.config = this.util().extend(a, this.defaults)),
          null != a.scrollContainer &&
            (this.config.scrollContainer = document.querySelector(
              a.scrollContainer
            )),
          (this.animationNameCache = new c()),
          (this.wowEvent = this.util().createEvent(this.config.boxClass));
      }
      return (
        (e.prototype.defaults = {
          boxClass: "wow",
          animateClass: "animated",
          offset: 0,
          mobile: !0,
          live: !0,
          callback: null,
          scrollContainer: null,
        }),
        (e.prototype.init = function () {
          var a;
          return (
            (this.element = window.document.documentElement),
            "interactive" === (a = document.readyState) || "complete" === a
              ? this.start()
              : this.util().addEvent(document, "DOMContentLoaded", this.start),
            (this.finished = [])
          );
        }),
        (e.prototype.start = function () {
          var b, c, d, e;
          if (
            ((this.stopped = !1),
            (this.boxes = function () {
              var a, c, d, e;
              for (
                d = this.element.querySelectorAll("." + this.config.boxClass),
                  e = [],
                  a = 0,
                  c = d.length;
                c > a;
                a++
              )
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            (this.all = function () {
              var a, c, d, e;
              for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++)
                (b = d[a]), e.push(b);
              return e;
            }.call(this)),
            this.boxes.length)
          )
            if (this.disabled()) this.resetStyle();
            else
              for (e = this.boxes, c = 0, d = e.length; d > c; c++)
                (b = e[c]), this.applyStyle(b, !0);
          return (
            this.disabled() ||
              (this.util().addEvent(
                this.config.scrollContainer || window,
                "scroll",
                this.scrollHandler
              ),
              this.util().addEvent(window, "resize", this.scrollHandler),
              (this.interval = setInterval(this.scrollCallback, 50))),
            this.config.live
              ? new a(
                  (function (a) {
                    return function (b) {
                      var c, d, e, f, g;
                      for (g = [], c = 0, d = b.length; d > c; c++)
                        (f = b[c]),
                          g.push(
                            function () {
                              var a, b, c, d;
                              for (
                                c = f.addedNodes || [],
                                  d = [],
                                  a = 0,
                                  b = c.length;
                                b > a;
                                a++
                              )
                                (e = c[a]), d.push(this.doSync(e));
                              return d;
                            }.call(a)
                          );
                      return g;
                    };
                  })(this)
                ).observe(document.body, { childList: !0, subtree: !0 })
              : void 0
          );
        }),
        (e.prototype.stop = function () {
          return (
            (this.stopped = !0),
            this.util().removeEvent(
              this.config.scrollContainer || window,
              "scroll",
              this.scrollHandler
            ),
            this.util().removeEvent(window, "resize", this.scrollHandler),
            null != this.interval ? clearInterval(this.interval) : void 0
          );
        }),
        (e.prototype.sync = function (b) {
          return a.notSupported ? this.doSync(this.element) : void 0;
        }),
        (e.prototype.doSync = function (a) {
          var b, c, d, e, f;
          if ((null == a && (a = this.element), 1 === a.nodeType)) {
            for (
              a = a.parentNode || a,
                e = a.querySelectorAll("." + this.config.boxClass),
                f = [],
                c = 0,
                d = e.length;
              d > c;
              c++
            )
              (b = e[c]),
                g.call(this.all, b) < 0
                  ? (this.boxes.push(b),
                    this.all.push(b),
                    this.stopped || this.disabled()
                      ? this.resetStyle()
                      : this.applyStyle(b, !0),
                    f.push((this.scrolled = !0)))
                  : f.push(void 0);
            return f;
          }
        }),
        (e.prototype.show = function (a) {
          return (
            this.applyStyle(a),
            (a.className = a.className + " " + this.config.animateClass),
            null != this.config.callback && this.config.callback(a),
            this.util().emitEvent(a, this.wowEvent),
            this.util().addEvent(a, "animationend", this.resetAnimation),
            this.util().addEvent(a, "oanimationend", this.resetAnimation),
            this.util().addEvent(a, "webkitAnimationEnd", this.resetAnimation),
            this.util().addEvent(a, "MSAnimationEnd", this.resetAnimation),
            a
          );
        }),
        (e.prototype.applyStyle = function (a, b) {
          var c, d, e;
          return (
            (d = a.getAttribute("data-wow-duration")),
            (c = a.getAttribute("data-wow-delay")),
            (e = a.getAttribute("data-wow-iteration")),
            this.animate(
              (function (f) {
                return function () {
                  return f.customStyle(a, b, d, c, e);
                };
              })(this)
            )
          );
        }),
        (e.prototype.animate = (function () {
          return "requestAnimationFrame" in window
            ? function (a) {
                return window.requestAnimationFrame(a);
              }
            : function (a) {
                return a();
              };
        })()),
        (e.prototype.resetStyle = function () {
          var a, b, c, d, e;
          for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
            (a = d[b]), e.push((a.style.visibility = "visible"));
          return e;
        }),
        (e.prototype.resetAnimation = function (a) {
          var b;
          return a.type.toLowerCase().indexOf("animationend") >= 0
            ? ((b = a.target || a.srcElement),
              (b.className = b.className
                .replace(this.config.animateClass, "")
                .trim()))
            : void 0;
        }),
        (e.prototype.customStyle = function (a, b, c, d, e) {
          return (
            b && this.cacheAnimationName(a),
            (a.style.visibility = b ? "hidden" : "visible"),
            c && this.vendorSet(a.style, { animationDuration: c }),
            d && this.vendorSet(a.style, { animationDelay: d }),
            e && this.vendorSet(a.style, { animationIterationCount: e }),
            this.vendorSet(a.style, {
              animationName: b ? "none" : this.cachedAnimationName(a),
            }),
            a
          );
        }),
        (e.prototype.vendors = ["moz", "webkit"]),
        (e.prototype.vendorSet = function (a, b) {
          var c, d, e, f;
          d = [];
          for (c in b)
            (e = b[c]),
              (a["" + c] = e),
              d.push(
                function () {
                  var b, d, g, h;
                  for (
                    g = this.vendors, h = [], b = 0, d = g.length;
                    d > b;
                    b++
                  )
                    (f = g[b]),
                      h.push(
                        (a["" + f + c.charAt(0).toUpperCase() + c.substr(1)] =
                          e)
                      );
                  return h;
                }.call(this)
              );
          return d;
        }),
        (e.prototype.vendorCSS = function (a, b) {
          var c, e, f, g, h, i;
          for (
            h = d(a),
              g = h.getPropertyCSSValue(b),
              f = this.vendors,
              c = 0,
              e = f.length;
            e > c;
            c++
          )
            (i = f[c]), (g = g || h.getPropertyCSSValue("-" + i + "-" + b));
          return g;
        }),
        (e.prototype.animationName = function (a) {
          var b;
          try {
            b = this.vendorCSS(a, "animation-name").cssText;
          } catch (c) {
            b = d(a).getPropertyValue("animation-name");
          }
          return "none" === b ? "" : b;
        }),
        (e.prototype.cacheAnimationName = function (a) {
          return this.animationNameCache.set(a, this.animationName(a));
        }),
        (e.prototype.cachedAnimationName = function (a) {
          return this.animationNameCache.get(a);
        }),
        (e.prototype.scrollHandler = function () {
          return (this.scrolled = !0);
        }),
        (e.prototype.scrollCallback = function () {
          var a;
          return !this.scrolled ||
            ((this.scrolled = !1),
            (this.boxes = function () {
              var b, c, d, e;
              for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++)
                (a = d[b]), a && (this.isVisible(a) ? this.show(a) : e.push(a));
              return e;
            }.call(this)),
            this.boxes.length || this.config.live)
            ? void 0
            : this.stop();
        }),
        (e.prototype.offsetTop = function (a) {
          for (var b; void 0 === a.offsetTop; ) a = a.parentNode;
          for (b = a.offsetTop; (a = a.offsetParent); ) b += a.offsetTop;
          return b;
        }),
        (e.prototype.isVisible = function (a) {
          var b, c, d, e, f;
          return (
            (c = a.getAttribute("data-wow-offset") || this.config.offset),
            (f =
              (this.config.scrollContainer &&
                this.config.scrollContainer.scrollTop) ||
              window.pageYOffset),
            (e =
              f +
              Math.min(this.element.clientHeight, this.util().innerHeight()) -
              c),
            (d = this.offsetTop(a)),
            (b = d + a.clientHeight),
            e >= d && b >= f
          );
        }),
        (e.prototype.util = function () {
          return null != this._util ? this._util : (this._util = new b());
        }),
        (e.prototype.disabled = function () {
          return (
            !this.config.mobile && this.util().isMobile(navigator.userAgent)
          );
        }),
        e
      );
    })());
}.call(this);

// Slick-Nav
!(function (e, t, n) {
  function a(t, n) {
    (this.element = t),
      (this.settings = e.extend({}, i, n)),
      this.settings.duplicate ||
        n.hasOwnProperty("removeIds") ||
        (this.settings.removeIds = !1),
      (this._defaults = i),
      (this._name = s),
      this.init();
  }
  var i = {
      label: "MENU",
      duplicate: !0,
      duration: 200,
      easingOpen: "swing",
      easingClose: "swing",
      closedSymbol: "&#9658;",
      openedSymbol: "&#9660;",
      prependTo: "body",
      appendTo: "",
      parentTag: "a",
      closeOnClick: !1,
      allowParentLinks: !1,
      nestedParentLinks: !0,
      showChildren: !1,
      removeIds: !0,
      removeClasses: !1,
      removeStyles: !1,
      brand: "",
      animations: "jquery",
      init: function () {},
      beforeOpen: function () {},
      beforeClose: function () {},
      afterOpen: function () {},
      afterClose: function () {},
    },
    s = "slicknav",
    o = "slicknav",
    l = {
      DOWN: 40,
      ENTER: 13,
      ESCAPE: 27,
      LEFT: 37,
      RIGHT: 39,
      SPACE: 32,
      TAB: 9,
      UP: 38,
    };
  (a.prototype.init = function () {
    var n,
      a,
      i = this,
      s = e(this.element),
      r = this.settings;
    if (
      (r.duplicate ? (i.mobileNav = s.clone()) : (i.mobileNav = s),
      r.removeIds &&
        (i.mobileNav.removeAttr("id"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("id");
        })),
      r.removeClasses &&
        (i.mobileNav.removeAttr("class"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("class");
        })),
      r.removeStyles &&
        (i.mobileNav.removeAttr("style"),
        i.mobileNav.find("*").each(function (t, n) {
          e(n).removeAttr("style");
        })),
      (n = o + "_icon"),
      "" === r.label && (n += " " + o + "_no-text"),
      "a" == r.parentTag && (r.parentTag = 'a href="#"'),
      i.mobileNav.attr("class", o + "_nav"),
      (a = e('<div class="' + o + '_menu"></div>')),
      "" !== r.brand)
    ) {
      var c = e('<div class="' + o + '_brand">' + r.brand + "</div>");
      e(a).append(c);
    }
    (i.btn = e(
      [
        "<" +
          r.parentTag +
          ' aria-haspopup="true" role="button" tabindex="0" class="' +
          o +
          "_btn " +
          o +
          '_collapsed">',
        '<span class="' + o + '_menutxt">' + r.label + "</span>",
        '<span class="' + n + '">',
        '<span class="' + o + '_icon-bar"></span>',
        '<span class="' + o + '_icon-bar"></span>',
        '<span class="' + o + '_icon-bar"></span>',
        "</span>",
        "</" + r.parentTag + ">",
      ].join("")
    )),
      e(a).append(i.btn),
      "" !== r.appendTo ? e(r.appendTo).append(a) : e(r.prependTo).prepend(a),
      a.append(i.mobileNav);
    var p = i.mobileNav.find("li");
    e(p).each(function () {
      var t = e(this),
        n = {};
      if (
        ((n.children = t.children("ul").attr("role", "menu")),
        t.data("menu", n),
        n.children.length > 0)
      ) {
        var a = t.contents(),
          s = !1,
          l = [];
        e(a).each(function () {
          return e(this).is("ul")
            ? !1
            : (l.push(this), void (e(this).is("a") && (s = !0)));
        });
        var c = e(
          "<" +
            r.parentTag +
            ' role="menuitem" aria-haspopup="true" tabindex="-1" class="' +
            o +
            '_item"/>'
        );
        if (r.allowParentLinks && !r.nestedParentLinks && s)
          e(l)
            .wrapAll('<span class="' + o + "_parent-link " + o + '_row"/>')
            .parent();
        else {
          var p = e(l).wrapAll(c).parent();
          p.addClass(o + "_row");
        }
        r.showChildren ? t.addClass(o + "_open") : t.addClass(o + "_collapsed"),
          t.addClass(o + "_parent");
        var d = e(
          '<span class="' +
            o +
            '_arrow">' +
            (r.showChildren ? r.openedSymbol : r.closedSymbol) +
            "</span>"
        );
        r.allowParentLinks &&
          !r.nestedParentLinks &&
          s &&
          (d = d.wrap(c).parent()),
          e(l).last().after(d);
      } else 0 === t.children().length && t.addClass(o + "_txtnode");
      t
        .children("a")
        .attr("role", "menuitem")
        .click(function (t) {
          r.closeOnClick &&
            !e(t.target)
              .parent()
              .closest("li")
              .hasClass(o + "_parent") &&
            e(i.btn).click();
        }),
        r.closeOnClick &&
          r.allowParentLinks &&
          (t
            .children("a")
            .children("a")
            .click(function (t) {
              e(i.btn).click();
            }),
          t
            .find("." + o + "_parent-link a:not(." + o + "_item)")
            .click(function (t) {
              e(i.btn).click();
            }));
    }),
      e(p).each(function () {
        var t = e(this).data("menu");
        r.showChildren || i._visibilityToggle(t.children, null, !1, null, !0);
      }),
      i._visibilityToggle(i.mobileNav, null, !1, "init", !0),
      i.mobileNav.attr("role", "menu"),
      e(t).mousedown(function () {
        i._outlines(!1);
      }),
      e(t).keyup(function () {
        i._outlines(!0);
      }),
      e(i.btn).click(function (e) {
        e.preventDefault(), i._menuToggle();
      }),
      i.mobileNav.on("click", "." + o + "_item", function (t) {
        t.preventDefault(), i._itemClick(e(this));
      }),
      e(i.btn).keydown(function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case l.ENTER:
          case l.SPACE:
          case l.DOWN:
            t.preventDefault(),
              (n.keyCode === l.DOWN && e(i.btn).hasClass(o + "_open")) ||
                i._menuToggle(),
              e(i.btn).next().find('[role="menuitem"]').first().focus();
        }
      }),
      i.mobileNav.on("keydown", "." + o + "_item", function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case l.ENTER:
            t.preventDefault(), i._itemClick(e(t.target));
            break;
          case l.RIGHT:
            t.preventDefault(),
              e(t.target)
                .parent()
                .hasClass(o + "_collapsed") && i._itemClick(e(t.target)),
              e(t.target).next().find('[role="menuitem"]').first().focus();
        }
      }),
      i.mobileNav.on("keydown", '[role="menuitem"]', function (t) {
        var n = t || event;
        switch (n.keyCode) {
          case l.DOWN:
            t.preventDefault();
            var a = e(t.target)
                .parent()
                .parent()
                .children()
                .children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              r = s + 1;
            a.length <= r && (r = 0);
            var c = a.eq(r);
            c.focus();
            break;
          case l.UP:
            t.preventDefault();
            var a = e(t.target)
                .parent()
                .parent()
                .children()
                .children('[role="menuitem"]:visible'),
              s = a.index(t.target),
              c = a.eq(s - 1);
            c.focus();
            break;
          case l.LEFT:
            if (
              (t.preventDefault(),
              e(t.target)
                .parent()
                .parent()
                .parent()
                .hasClass(o + "_open"))
            ) {
              var p = e(t.target).parent().parent().prev();
              p.focus(), i._itemClick(p);
            } else
              e(t.target)
                .parent()
                .parent()
                .hasClass(o + "_nav") && (i._menuToggle(), e(i.btn).focus());
            break;
          case l.ESCAPE:
            t.preventDefault(), i._menuToggle(), e(i.btn).focus();
        }
      }),
      r.allowParentLinks &&
        r.nestedParentLinks &&
        e("." + o + "_item a").click(function (e) {
          e.stopImmediatePropagation();
        });
  }),
    (a.prototype._menuToggle = function (e) {
      var t = this,
        n = t.btn,
        a = t.mobileNav;
      n.hasClass(o + "_collapsed")
        ? (n.removeClass(o + "_collapsed"), n.addClass(o + "_open"))
        : (n.removeClass(o + "_open"), n.addClass(o + "_collapsed")),
        n.addClass(o + "_animating"),
        t._visibilityToggle(a, n.parent(), !0, n);
    }),
    (a.prototype._itemClick = function (e) {
      var t = this,
        n = t.settings,
        a = e.data("menu");
      a ||
        ((a = {}),
        (a.arrow = e.children("." + o + "_arrow")),
        (a.ul = e.next("ul")),
        (a.parent = e.parent()),
        a.parent.hasClass(o + "_parent-link") &&
          ((a.parent = e.parent().parent()), (a.ul = e.parent().next("ul"))),
        e.data("menu", a)),
        a.parent.hasClass(o + "_collapsed")
          ? (a.arrow.html(n.openedSymbol),
            a.parent.removeClass(o + "_collapsed"),
            a.parent.addClass(o + "_open"),
            a.parent.addClass(o + "_animating"),
            t._visibilityToggle(a.ul, a.parent, !0, e))
          : (a.arrow.html(n.closedSymbol),
            a.parent.addClass(o + "_collapsed"),
            a.parent.removeClass(o + "_open"),
            a.parent.addClass(o + "_animating"),
            t._visibilityToggle(a.ul, a.parent, !0, e));
    }),
    (a.prototype._visibilityToggle = function (t, n, a, i, s) {
      function l(t, n) {
        e(t).removeClass(o + "_animating"),
          e(n).removeClass(o + "_animating"),
          s || p.afterOpen(t);
      }
      function r(n, a) {
        t.attr("aria-hidden", "true"),
          d.attr("tabindex", "-1"),
          c._setVisAttr(t, !0),
          t.hide(),
          e(n).removeClass(o + "_animating"),
          e(a).removeClass(o + "_animating"),
          s ? "init" == n && p.init() : p.afterClose(n);
      }
      var c = this,
        p = c.settings,
        d = c._getActionItems(t),
        u = 0;
      a && (u = p.duration),
        t.hasClass(o + "_hidden")
          ? (t.removeClass(o + "_hidden"),
            s || p.beforeOpen(i),
            "jquery" === p.animations
              ? t.stop(!0, !0).slideDown(u, p.easingOpen, function () {
                  l(i, n);
                })
              : "velocity" === p.animations &&
                t.velocity("finish").velocity("slideDown", {
                  duration: u,
                  easing: p.easingOpen,
                  complete: function () {
                    l(i, n);
                  },
                }),
            t.attr("aria-hidden", "false"),
            d.attr("tabindex", "0"),
            c._setVisAttr(t, !1))
          : (t.addClass(o + "_hidden"),
            s || p.beforeClose(i),
            "jquery" === p.animations
              ? t
                  .stop(!0, !0)
                  .slideUp(u, this.settings.easingClose, function () {
                    r(i, n);
                  })
              : "velocity" === p.animations &&
                t.velocity("finish").velocity("slideUp", {
                  duration: u,
                  easing: p.easingClose,
                  complete: function () {
                    r(i, n);
                  },
                }));
    }),
    (a.prototype._setVisAttr = function (t, n) {
      var a = this,
        i = t
          .children("li")
          .children("ul")
          .not("." + o + "_hidden");
      n
        ? i.each(function () {
            var t = e(this);
            t.attr("aria-hidden", "true");
            var i = a._getActionItems(t);
            i.attr("tabindex", "-1"), a._setVisAttr(t, n);
          })
        : i.each(function () {
            var t = e(this);
            t.attr("aria-hidden", "false");
            var i = a._getActionItems(t);
            i.attr("tabindex", "0"), a._setVisAttr(t, n);
          });
    }),
    (a.prototype._getActionItems = function (e) {
      var t = e.data("menu");
      if (!t) {
        t = {};
        var n = e.children("li"),
          a = n.find("a");
        (t.links = a.add(n.find("." + o + "_item"))), e.data("menu", t);
      }
      return t.links;
    }),
    (a.prototype._outlines = function (t) {
      t
        ? e("." + o + "_item, ." + o + "_btn").css("outline", "")
        : e("." + o + "_item, ." + o + "_btn").css("outline", "none");
    }),
    (a.prototype.toggle = function () {
      var e = this;
      e._menuToggle();
    }),
    (a.prototype.open = function () {
      var e = this;
      e.btn.hasClass(o + "_collapsed") && e._menuToggle();
    }),
    (a.prototype.close = function () {
      var e = this;
      e.btn.hasClass(o + "_open") && e._menuToggle();
    }),
    (e.fn[s] = function (t) {
      var n = arguments;
      if (void 0 === t || "object" == typeof t)
        return this.each(function () {
          e.data(this, "plugin_" + s) ||
            e.data(this, "plugin_" + s, new a(this, t));
        });
      if ("string" == typeof t && "_" !== t[0] && "init" !== t) {
        var i;
        return (
          this.each(function () {
            var o = e.data(this, "plugin_" + s);
            o instanceof a &&
              "function" == typeof o[t] &&
              (i = o[t].apply(o, Array.prototype.slice.call(n, 1)));
          }),
          void 0 !== i ? i : this
        );
      }
    });
})(jQuery, document, window);

// Select  02

/*! Select2 4.0.3 | https://github.com/select2/select2/blob/master/LICENSE.md */ !(function (
  a
) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : a("object" == typeof exports ? require("jquery") : jQuery);
})(function (a) {
  var b = (function () {
      if (a && a.fn && a.fn.select2 && a.fn.select2.amd)
        var b = a.fn.select2.amd;
      var b;
      return (
        (function () {
          if (!b || !b.requirejs) {
            b ? (c = b) : (b = {});
            var a, c, d;
            !(function (b) {
              function e(a, b) {
                return u.call(a, b);
              }
              function f(a, b) {
                var c,
                  d,
                  e,
                  f,
                  g,
                  h,
                  i,
                  j,
                  k,
                  l,
                  m,
                  n = b && b.split("/"),
                  o = s.map,
                  p = (o && o["*"]) || {};
                if (a && "." === a.charAt(0))
                  if (b) {
                    for (
                      a = a.split("/"),
                        g = a.length - 1,
                        s.nodeIdCompat &&
                          w.test(a[g]) &&
                          (a[g] = a[g].replace(w, "")),
                        a = n.slice(0, n.length - 1).concat(a),
                        k = 0;
                      k < a.length;
                      k += 1
                    )
                      if (((m = a[k]), "." === m)) a.splice(k, 1), (k -= 1);
                      else if (".." === m) {
                        if (1 === k && (".." === a[2] || ".." === a[0])) break;
                        k > 0 && (a.splice(k - 1, 2), (k -= 2));
                      }
                    a = a.join("/");
                  } else 0 === a.indexOf("./") && (a = a.substring(2));
                if ((n || p) && o) {
                  for (c = a.split("/"), k = c.length; k > 0; k -= 1) {
                    if (((d = c.slice(0, k).join("/")), n))
                      for (l = n.length; l > 0; l -= 1)
                        if (
                          ((e = o[n.slice(0, l).join("/")]), e && (e = e[d]))
                        ) {
                          (f = e), (h = k);
                          break;
                        }
                    if (f) break;
                    !i && p && p[d] && ((i = p[d]), (j = k));
                  }
                  !f && i && ((f = i), (h = j)),
                    f && (c.splice(0, h, f), (a = c.join("/")));
                }
                return a;
              }
              function g(a, c) {
                return function () {
                  var d = v.call(arguments, 0);
                  return (
                    "string" != typeof d[0] && 1 === d.length && d.push(null),
                    n.apply(b, d.concat([a, c]))
                  );
                };
              }
              function h(a) {
                return function (b) {
                  return f(b, a);
                };
              }
              function i(a) {
                return function (b) {
                  q[a] = b;
                };
              }
              function j(a) {
                if (e(r, a)) {
                  var c = r[a];
                  delete r[a], (t[a] = !0), m.apply(b, c);
                }
                if (!e(q, a) && !e(t, a)) throw new Error("No " + a);
                return q[a];
              }
              function k(a) {
                var b,
                  c = a ? a.indexOf("!") : -1;
                return (
                  c > -1 &&
                    ((b = a.substring(0, c)),
                    (a = a.substring(c + 1, a.length))),
                  [b, a]
                );
              }
              function l(a) {
                return function () {
                  return (s && s.config && s.config[a]) || {};
                };
              }
              var m,
                n,
                o,
                p,
                q = {},
                r = {},
                s = {},
                t = {},
                u = Object.prototype.hasOwnProperty,
                v = [].slice,
                w = /\.js$/;
              (o = function (a, b) {
                var c,
                  d = k(a),
                  e = d[0];
                return (
                  (a = d[1]),
                  e && ((e = f(e, b)), (c = j(e))),
                  e
                    ? (a = c && c.normalize ? c.normalize(a, h(b)) : f(a, b))
                    : ((a = f(a, b)),
                      (d = k(a)),
                      (e = d[0]),
                      (a = d[1]),
                      e && (c = j(e))),
                  { f: e ? e + "!" + a : a, n: a, pr: e, p: c }
                );
              }),
                (p = {
                  require: function (a) {
                    return g(a);
                  },
                  exports: function (a) {
                    var b = q[a];
                    return "undefined" != typeof b ? b : (q[a] = {});
                  },
                  module: function (a) {
                    return { id: a, uri: "", exports: q[a], config: l(a) };
                  },
                }),
                (m = function (a, c, d, f) {
                  var h,
                    k,
                    l,
                    m,
                    n,
                    s,
                    u = [],
                    v = typeof d;
                  if (((f = f || a), "undefined" === v || "function" === v)) {
                    for (
                      c =
                        !c.length && d.length
                          ? ["require", "exports", "module"]
                          : c,
                        n = 0;
                      n < c.length;
                      n += 1
                    )
                      if (((m = o(c[n], f)), (k = m.f), "require" === k))
                        u[n] = p.require(a);
                      else if ("exports" === k) (u[n] = p.exports(a)), (s = !0);
                      else if ("module" === k) h = u[n] = p.module(a);
                      else if (e(q, k) || e(r, k) || e(t, k)) u[n] = j(k);
                      else {
                        if (!m.p) throw new Error(a + " missing " + k);
                        m.p.load(m.n, g(f, !0), i(k), {}), (u[n] = q[k]);
                      }
                    (l = d ? d.apply(q[a], u) : void 0),
                      a &&
                        (h && h.exports !== b && h.exports !== q[a]
                          ? (q[a] = h.exports)
                          : (l === b && s) || (q[a] = l));
                  } else a && (q[a] = d);
                }),
                (a =
                  c =
                  n =
                    function (a, c, d, e, f) {
                      if ("string" == typeof a)
                        return p[a] ? p[a](c) : j(o(a, c).f);
                      if (!a.splice) {
                        if (((s = a), s.deps && n(s.deps, s.callback), !c))
                          return;
                        c.splice ? ((a = c), (c = d), (d = null)) : (a = b);
                      }
                      return (
                        (c = c || function () {}),
                        "function" == typeof d && ((d = e), (e = f)),
                        e
                          ? m(b, a, c, d)
                          : setTimeout(function () {
                              m(b, a, c, d);
                            }, 4),
                        n
                      );
                    }),
                (n.config = function (a) {
                  return n(a);
                }),
                (a._defined = q),
                (d = function (a, b, c) {
                  if ("string" != typeof a)
                    throw new Error(
                      "See almond README: incorrect module build, no module name"
                    );
                  b.splice || ((c = b), (b = [])),
                    e(q, a) || e(r, a) || (r[a] = [a, b, c]);
                }),
                (d.amd = { jQuery: !0 });
            })(),
              (b.requirejs = a),
              (b.require = c),
              (b.define = d);
          }
        })(),
        b.define("almond", function () {}),
        b.define("jquery", [], function () {
          var b = a || $;
          return (
            null == b &&
              console &&
              console.error &&
              console.error(
                "Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."
              ),
            b
          );
        }),
        b.define("select2/utils", ["jquery"], function (a) {
          function b(a) {
            var b = a.prototype,
              c = [];
            for (var d in b) {
              var e = b[d];
              "function" == typeof e && "constructor" !== d && c.push(d);
            }
            return c;
          }
          var c = {};
          (c.Extend = function (a, b) {
            function c() {
              this.constructor = a;
            }
            var d = {}.hasOwnProperty;
            for (var e in b) d.call(b, e) && (a[e] = b[e]);
            return (
              (c.prototype = b.prototype),
              (a.prototype = new c()),
              (a.__super__ = b.prototype),
              a
            );
          }),
            (c.Decorate = function (a, c) {
              function d() {
                var b = Array.prototype.unshift,
                  d = c.prototype.constructor.length,
                  e = a.prototype.constructor;
                d > 0 &&
                  (b.call(arguments, a.prototype.constructor),
                  (e = c.prototype.constructor)),
                  e.apply(this, arguments);
              }
              function e() {
                this.constructor = d;
              }
              var f = b(c),
                g = b(a);
              (c.displayName = a.displayName), (d.prototype = new e());
              for (var h = 0; h < g.length; h++) {
                var i = g[h];
                d.prototype[i] = a.prototype[i];
              }
              for (
                var j = function (a) {
                    var b = function () {};
                    (a in d.prototype) && (b = d.prototype[a]);
                    var e = c.prototype[a];
                    return function () {
                      var a = Array.prototype.unshift;
                      return a.call(arguments, b), e.apply(this, arguments);
                    };
                  },
                  k = 0;
                k < f.length;
                k++
              ) {
                var l = f[k];
                d.prototype[l] = j(l);
              }
              return d;
            });
          var d = function () {
            this.listeners = {};
          };
          return (
            (d.prototype.on = function (a, b) {
              (this.listeners = this.listeners || {}),
                a in this.listeners
                  ? this.listeners[a].push(b)
                  : (this.listeners[a] = [b]);
            }),
            (d.prototype.trigger = function (a) {
              var b = Array.prototype.slice,
                c = b.call(arguments, 1);
              (this.listeners = this.listeners || {}),
                null == c && (c = []),
                0 === c.length && c.push({}),
                (c[0]._type = a),
                a in this.listeners &&
                  this.invoke(this.listeners[a], b.call(arguments, 1)),
                "*" in this.listeners &&
                  this.invoke(this.listeners["*"], arguments);
            }),
            (d.prototype.invoke = function (a, b) {
              for (var c = 0, d = a.length; d > c; c++) a[c].apply(this, b);
            }),
            (c.Observable = d),
            (c.generateChars = function (a) {
              for (var b = "", c = 0; a > c; c++) {
                var d = Math.floor(36 * Math.random());
                b += d.toString(36);
              }
              return b;
            }),
            (c.bind = function (a, b) {
              return function () {
                a.apply(b, arguments);
              };
            }),
            (c._convertData = function (a) {
              for (var b in a) {
                var c = b.split("-"),
                  d = a;
                if (1 !== c.length) {
                  for (var e = 0; e < c.length; e++) {
                    var f = c[e];
                    (f = f.substring(0, 1).toLowerCase() + f.substring(1)),
                      f in d || (d[f] = {}),
                      e == c.length - 1 && (d[f] = a[b]),
                      (d = d[f]);
                  }
                  delete a[b];
                }
              }
              return a;
            }),
            (c.hasScroll = function (b, c) {
              var d = a(c),
                e = c.style.overflowX,
                f = c.style.overflowY;
              return e !== f || ("hidden" !== f && "visible" !== f)
                ? "scroll" === e || "scroll" === f
                  ? !0
                  : d.innerHeight() < c.scrollHeight ||
                    d.innerWidth() < c.scrollWidth
                : !1;
            }),
            (c.escapeMarkup = function (a) {
              var b = {
                "\\": "&#92;",
                "&": "&amp;",
                "<": "&lt;",
                ">": "&gt;",
                '"': "&quot;",
                "'": "&#39;",
                "/": "&#47;",
              };
              return "string" != typeof a
                ? a
                : String(a).replace(/[&<>"'\/\\]/g, function (a) {
                    return b[a];
                  });
            }),
            (c.appendMany = function (b, c) {
              if ("1.7" === a.fn.jquery.substr(0, 3)) {
                var d = a();
                a.map(c, function (a) {
                  d = d.add(a);
                }),
                  (c = d);
              }
              b.append(c);
            }),
            c
          );
        }),
        b.define("select2/results", ["jquery", "./utils"], function (a, b) {
          function c(a, b, d) {
            (this.$element = a),
              (this.data = d),
              (this.options = b),
              c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function () {
              var b = a(
                '<ul class="select2-results__options" role="tree"></ul>'
              );
              return (
                this.options.get("multiple") &&
                  b.attr("aria-multiselectable", "true"),
                (this.$results = b),
                b
              );
            }),
            (c.prototype.clear = function () {
              this.$results.empty();
            }),
            (c.prototype.displayMessage = function (b) {
              var c = this.options.get("escapeMarkup");
              this.clear(), this.hideLoading();
              var d = a(
                  '<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'
                ),
                e = this.options.get("translations").get(b.message);
              d.append(c(e(b.args))),
                (d[0].className += " select2-results__message"),
                this.$results.append(d);
            }),
            (c.prototype.hideMessages = function () {
              this.$results.find(".select2-results__message").remove();
            }),
            (c.prototype.append = function (a) {
              this.hideLoading();
              var b = [];
              if (null == a.results || 0 === a.results.length)
                return void (
                  0 === this.$results.children().length &&
                  this.trigger("results:message", { message: "noResults" })
                );
              a.results = this.sort(a.results);
              for (var c = 0; c < a.results.length; c++) {
                var d = a.results[c],
                  e = this.option(d);
                b.push(e);
              }
              this.$results.append(b);
            }),
            (c.prototype.position = function (a, b) {
              var c = b.find(".select2-results");
              c.append(a);
            }),
            (c.prototype.sort = function (a) {
              var b = this.options.get("sorter");
              return b(a);
            }),
            (c.prototype.highlightFirstItem = function () {
              var a = this.$results.find(
                  ".select2-results__option[aria-selected]"
                ),
                b = a.filter("[aria-selected=true]");
              b.length > 0
                ? b.first().trigger("mouseenter")
                : a.first().trigger("mouseenter"),
                this.ensureHighlightVisible();
            }),
            (c.prototype.setClasses = function () {
              var b = this;
              this.data.current(function (c) {
                var d = a.map(c, function (a) {
                    return a.id.toString();
                  }),
                  e = b.$results.find(
                    ".select2-results__option[aria-selected]"
                  );
                e.each(function () {
                  var b = a(this),
                    c = a.data(this, "data"),
                    e = "" + c.id;
                  (null != c.element && c.element.selected) ||
                  (null == c.element && a.inArray(e, d) > -1)
                    ? b.attr("aria-selected", "true")
                    : b.attr("aria-selected", "false");
                });
              });
            }),
            (c.prototype.showLoading = function (a) {
              this.hideLoading();
              var b = this.options.get("translations").get("searching"),
                c = { disabled: !0, loading: !0, text: b(a) },
                d = this.option(c);
              (d.className += " loading-results"), this.$results.prepend(d);
            }),
            (c.prototype.hideLoading = function () {
              this.$results.find(".loading-results").remove();
            }),
            (c.prototype.option = function (b) {
              var c = document.createElement("li");
              c.className = "select2-results__option";
              var d = { role: "treeitem", "aria-selected": "false" };
              b.disabled &&
                (delete d["aria-selected"], (d["aria-disabled"] = "true")),
                null == b.id && delete d["aria-selected"],
                null != b._resultId && (c.id = b._resultId),
                b.title && (c.title = b.title),
                b.children &&
                  ((d.role = "group"),
                  (d["aria-label"] = b.text),
                  delete d["aria-selected"]);
              for (var e in d) {
                var f = d[e];
                c.setAttribute(e, f);
              }
              if (b.children) {
                var g = a(c),
                  h = document.createElement("strong");
                h.className = "select2-results__group";
                a(h);
                this.template(b, h);
                for (var i = [], j = 0; j < b.children.length; j++) {
                  var k = b.children[j],
                    l = this.option(k);
                  i.push(l);
                }
                var m = a("<ul></ul>", {
                  class:
                    "select2-results__options select2-results__options--nested",
                });
                m.append(i), g.append(h), g.append(m);
              } else this.template(b, c);
              return a.data(c, "data", b), c;
            }),
            (c.prototype.bind = function (b, c) {
              var d = this,
                e = b.id + "-results";
              this.$results.attr("id", e),
                b.on("results:all", function (a) {
                  d.clear(),
                    d.append(a.data),
                    b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }),
                b.on("results:append", function (a) {
                  d.append(a.data), b.isOpen() && d.setClasses();
                }),
                b.on("query", function (a) {
                  d.hideMessages(), d.showLoading(a);
                }),
                b.on("select", function () {
                  b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }),
                b.on("unselect", function () {
                  b.isOpen() && (d.setClasses(), d.highlightFirstItem());
                }),
                b.on("open", function () {
                  d.$results.attr("aria-expanded", "true"),
                    d.$results.attr("aria-hidden", "false"),
                    d.setClasses(),
                    d.ensureHighlightVisible();
                }),
                b.on("close", function () {
                  d.$results.attr("aria-expanded", "false"),
                    d.$results.attr("aria-hidden", "true"),
                    d.$results.removeAttr("aria-activedescendant");
                }),
                b.on("results:toggle", function () {
                  var a = d.getHighlightedResults();
                  0 !== a.length && a.trigger("mouseup");
                }),
                b.on("results:select", function () {
                  var a = d.getHighlightedResults();
                  if (0 !== a.length) {
                    var b = a.data("data");
                    "true" == a.attr("aria-selected")
                      ? d.trigger("close", {})
                      : d.trigger("select", { data: b });
                  }
                }),
                b.on("results:previous", function () {
                  var a = d.getHighlightedResults(),
                    b = d.$results.find("[aria-selected]"),
                    c = b.index(a);
                  if (0 !== c) {
                    var e = c - 1;
                    0 === a.length && (e = 0);
                    var f = b.eq(e);
                    f.trigger("mouseenter");
                    var g = d.$results.offset().top,
                      h = f.offset().top,
                      i = d.$results.scrollTop() + (h - g);
                    0 === e
                      ? d.$results.scrollTop(0)
                      : 0 > h - g && d.$results.scrollTop(i);
                  }
                }),
                b.on("results:next", function () {
                  var a = d.getHighlightedResults(),
                    b = d.$results.find("[aria-selected]"),
                    c = b.index(a),
                    e = c + 1;
                  if (!(e >= b.length)) {
                    var f = b.eq(e);
                    f.trigger("mouseenter");
                    var g =
                        d.$results.offset().top + d.$results.outerHeight(!1),
                      h = f.offset().top + f.outerHeight(!1),
                      i = d.$results.scrollTop() + h - g;
                    0 === e
                      ? d.$results.scrollTop(0)
                      : h > g && d.$results.scrollTop(i);
                  }
                }),
                b.on("results:focus", function (a) {
                  a.element.addClass("select2-results__option--highlighted");
                }),
                b.on("results:message", function (a) {
                  d.displayMessage(a);
                }),
                a.fn.mousewheel &&
                  this.$results.on("mousewheel", function (a) {
                    var b = d.$results.scrollTop(),
                      c = d.$results.get(0).scrollHeight - b + a.deltaY,
                      e = a.deltaY > 0 && b - a.deltaY <= 0,
                      f = a.deltaY < 0 && c <= d.$results.height();
                    e
                      ? (d.$results.scrollTop(0),
                        a.preventDefault(),
                        a.stopPropagation())
                      : f &&
                        (d.$results.scrollTop(
                          d.$results.get(0).scrollHeight - d.$results.height()
                        ),
                        a.preventDefault(),
                        a.stopPropagation());
                  }),
                this.$results.on(
                  "mouseup",
                  ".select2-results__option[aria-selected]",
                  function (b) {
                    var c = a(this),
                      e = c.data("data");
                    return "true" === c.attr("aria-selected")
                      ? void (d.options.get("multiple")
                          ? d.trigger("unselect", { originalEvent: b, data: e })
                          : d.trigger("close", {}))
                      : void d.trigger("select", { originalEvent: b, data: e });
                  }
                ),
                this.$results.on(
                  "mouseenter",
                  ".select2-results__option[aria-selected]",
                  function (b) {
                    var c = a(this).data("data");
                    d
                      .getHighlightedResults()
                      .removeClass("select2-results__option--highlighted"),
                      d.trigger("results:focus", { data: c, element: a(this) });
                  }
                );
            }),
            (c.prototype.getHighlightedResults = function () {
              var a = this.$results.find(
                ".select2-results__option--highlighted"
              );
              return a;
            }),
            (c.prototype.destroy = function () {
              this.$results.remove();
            }),
            (c.prototype.ensureHighlightVisible = function () {
              var a = this.getHighlightedResults();
              if (0 !== a.length) {
                var b = this.$results.find("[aria-selected]"),
                  c = b.index(a),
                  d = this.$results.offset().top,
                  e = a.offset().top,
                  f = this.$results.scrollTop() + (e - d),
                  g = e - d;
                (f -= 2 * a.outerHeight(!1)),
                  2 >= c
                    ? this.$results.scrollTop(0)
                    : (g > this.$results.outerHeight() || 0 > g) &&
                      this.$results.scrollTop(f);
              }
            }),
            (c.prototype.template = function (b, c) {
              var d = this.options.get("templateResult"),
                e = this.options.get("escapeMarkup"),
                f = d(b, c);
              null == f
                ? (c.style.display = "none")
                : "string" == typeof f
                ? (c.innerHTML = e(f))
                : a(c).append(f);
            }),
            c
          );
        }),
        b.define("select2/keys", [], function () {
          var a = {
            BACKSPACE: 8,
            TAB: 9,
            ENTER: 13,
            SHIFT: 16,
            CTRL: 17,
            ALT: 18,
            ESC: 27,
            SPACE: 32,
            PAGE_UP: 33,
            PAGE_DOWN: 34,
            END: 35,
            HOME: 36,
            LEFT: 37,
            UP: 38,
            RIGHT: 39,
            DOWN: 40,
            DELETE: 46,
          };
          return a;
        }),
        b.define(
          "select2/selection/base",
          ["jquery", "../utils", "../keys"],
          function (a, b, c) {
            function d(a, b) {
              (this.$element = a),
                (this.options = b),
                d.__super__.constructor.call(this);
            }
            return (
              b.Extend(d, b.Observable),
              (d.prototype.render = function () {
                var b = a(
                  '<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>'
                );
                return (
                  (this._tabindex = 0),
                  null != this.$element.data("old-tabindex")
                    ? (this._tabindex = this.$element.data("old-tabindex"))
                    : null != this.$element.attr("tabindex") &&
                      (this._tabindex = this.$element.attr("tabindex")),
                  b.attr("title", this.$element.attr("title")),
                  b.attr("tabindex", this._tabindex),
                  (this.$selection = b),
                  b
                );
              }),
              (d.prototype.bind = function (a, b) {
                var d = this,
                  e = (a.id + "-container", a.id + "-results");
                (this.container = a),
                  this.$selection.on("focus", function (a) {
                    d.trigger("focus", a);
                  }),
                  this.$selection.on("blur", function (a) {
                    d._handleBlur(a);
                  }),
                  this.$selection.on("keydown", function (a) {
                    d.trigger("keypress", a),
                      a.which === c.SPACE && a.preventDefault();
                  }),
                  a.on("results:focus", function (a) {
                    d.$selection.attr(
                      "aria-activedescendant",
                      a.data._resultId
                    );
                  }),
                  a.on("selection:update", function (a) {
                    d.update(a.data);
                  }),
                  a.on("open", function () {
                    d.$selection.attr("aria-expanded", "true"),
                      d.$selection.attr("aria-owns", e),
                      d._attachCloseHandler(a);
                  }),
                  a.on("close", function () {
                    d.$selection.attr("aria-expanded", "false"),
                      d.$selection.removeAttr("aria-activedescendant"),
                      d.$selection.removeAttr("aria-owns"),
                      d.$selection.focus(),
                      d._detachCloseHandler(a);
                  }),
                  a.on("enable", function () {
                    d.$selection.attr("tabindex", d._tabindex);
                  }),
                  a.on("disable", function () {
                    d.$selection.attr("tabindex", "-1");
                  });
              }),
              (d.prototype._handleBlur = function (b) {
                var c = this;
                window.setTimeout(function () {
                  document.activeElement == c.$selection[0] ||
                    a.contains(c.$selection[0], document.activeElement) ||
                    c.trigger("blur", b);
                }, 1);
              }),
              (d.prototype._attachCloseHandler = function (b) {
                a(document.body).on("mousedown.select2." + b.id, function (b) {
                  var c = a(b.target),
                    d = c.closest(".select2"),
                    e = a(".select2.select2-container--open");
                  e.each(function () {
                    var b = a(this);
                    if (this != d[0]) {
                      var c = b.data("element");
                      c.select2("close");
                    }
                  });
                });
              }),
              (d.prototype._detachCloseHandler = function (b) {
                a(document.body).off("mousedown.select2." + b.id);
              }),
              (d.prototype.position = function (a, b) {
                var c = b.find(".selection");
                c.append(a);
              }),
              (d.prototype.destroy = function () {
                this._detachCloseHandler(this.container);
              }),
              (d.prototype.update = function (a) {
                throw new Error(
                  "The `update` method must be defined in child classes."
                );
              }),
              d
            );
          }
        ),
        b.define(
          "select2/selection/single",
          ["jquery", "./base", "../utils", "../keys"],
          function (a, b, c, d) {
            function e() {
              e.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(e, b),
              (e.prototype.render = function () {
                var a = e.__super__.render.call(this);
                return (
                  a.addClass("select2-selection--single"),
                  a.html(
                    '<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'
                  ),
                  a
                );
              }),
              (e.prototype.bind = function (a, b) {
                var c = this;
                e.__super__.bind.apply(this, arguments);
                var d = a.id + "-container";
                this.$selection
                  .find(".select2-selection__rendered")
                  .attr("id", d),
                  this.$selection.attr("aria-labelledby", d),
                  this.$selection.on("mousedown", function (a) {
                    1 === a.which && c.trigger("toggle", { originalEvent: a });
                  }),
                  this.$selection.on("focus", function (a) {}),
                  this.$selection.on("blur", function (a) {}),
                  a.on("focus", function (b) {
                    a.isOpen() || c.$selection.focus();
                  }),
                  a.on("selection:update", function (a) {
                    c.update(a.data);
                  });
              }),
              (e.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
              }),
              (e.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                  d = this.options.get("escapeMarkup");
                return d(c(a, b));
              }),
              (e.prototype.selectionContainer = function () {
                return a("<span></span>");
              }),
              (e.prototype.update = function (a) {
                if (0 === a.length) return void this.clear();
                var b = a[0],
                  c = this.$selection.find(".select2-selection__rendered"),
                  d = this.display(b, c);
                c.empty().append(d), c.prop("title", b.title || b.text);
              }),
              e
            );
          }
        ),
        b.define(
          "select2/selection/multiple",
          ["jquery", "./base", "../utils"],
          function (a, b, c) {
            function d(a, b) {
              d.__super__.constructor.apply(this, arguments);
            }
            return (
              c.Extend(d, b),
              (d.prototype.render = function () {
                var a = d.__super__.render.call(this);
                return (
                  a.addClass("select2-selection--multiple"),
                  a.html('<ul class="select2-selection__rendered"></ul>'),
                  a
                );
              }),
              (d.prototype.bind = function (b, c) {
                var e = this;
                d.__super__.bind.apply(this, arguments),
                  this.$selection.on("click", function (a) {
                    e.trigger("toggle", { originalEvent: a });
                  }),
                  this.$selection.on(
                    "click",
                    ".select2-selection__choice__remove",
                    function (b) {
                      if (!e.options.get("disabled")) {
                        var c = a(this),
                          d = c.parent(),
                          f = d.data("data");
                        e.trigger("unselect", { originalEvent: b, data: f });
                      }
                    }
                  );
              }),
              (d.prototype.clear = function () {
                this.$selection.find(".select2-selection__rendered").empty();
              }),
              (d.prototype.display = function (a, b) {
                var c = this.options.get("templateSelection"),
                  d = this.options.get("escapeMarkup");
                return d(c(a, b));
              }),
              (d.prototype.selectionContainer = function () {
                var b = a(
                  '<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>'
                );
                return b;
              }),
              (d.prototype.update = function (a) {
                if ((this.clear(), 0 !== a.length)) {
                  for (var b = [], d = 0; d < a.length; d++) {
                    var e = a[d],
                      f = this.selectionContainer(),
                      g = this.display(e, f);
                    f.append(g),
                      f.prop("title", e.title || e.text),
                      f.data("data", e),
                      b.push(f);
                  }
                  var h = this.$selection.find(".select2-selection__rendered");
                  c.appendMany(h, b);
                }
              }),
              d
            );
          }
        ),
        b.define("select2/selection/placeholder", ["../utils"], function (a) {
          function b(a, b, c) {
            (this.placeholder = this.normalizePlaceholder(
              c.get("placeholder")
            )),
              a.call(this, b, c);
          }
          return (
            (b.prototype.normalizePlaceholder = function (a, b) {
              return "string" == typeof b && (b = { id: "", text: b }), b;
            }),
            (b.prototype.createPlaceholder = function (a, b) {
              var c = this.selectionContainer();
              return (
                c.html(this.display(b)),
                c
                  .addClass("select2-selection__placeholder")
                  .removeClass("select2-selection__choice"),
                c
              );
            }),
            (b.prototype.update = function (a, b) {
              var c = 1 == b.length && b[0].id != this.placeholder.id,
                d = b.length > 1;
              if (d || c) return a.call(this, b);
              this.clear();
              var e = this.createPlaceholder(this.placeholder);
              this.$selection.find(".select2-selection__rendered").append(e);
            }),
            b
          );
        }),
        b.define(
          "select2/selection/allowClear",
          ["jquery", "../keys"],
          function (a, b) {
            function c() {}
            return (
              (c.prototype.bind = function (a, b, c) {
                var d = this;
                a.call(this, b, c),
                  null == this.placeholder &&
                    this.options.get("debug") &&
                    window.console &&
                    console.error &&
                    console.error(
                      "Select2: The `allowClear` option should be used in combination with the `placeholder` option."
                    ),
                  this.$selection.on(
                    "mousedown",
                    ".select2-selection__clear",
                    function (a) {
                      d._handleClear(a);
                    }
                  ),
                  b.on("keypress", function (a) {
                    d._handleKeyboardClear(a, b);
                  });
              }),
              (c.prototype._handleClear = function (a, b) {
                if (!this.options.get("disabled")) {
                  var c = this.$selection.find(".select2-selection__clear");
                  if (0 !== c.length) {
                    b.stopPropagation();
                    for (var d = c.data("data"), e = 0; e < d.length; e++) {
                      var f = { data: d[e] };
                      if ((this.trigger("unselect", f), f.prevented)) return;
                    }
                    this.$element.val(this.placeholder.id).trigger("change"),
                      this.trigger("toggle", {});
                  }
                }
              }),
              (c.prototype._handleKeyboardClear = function (a, c, d) {
                d.isOpen() ||
                  ((c.which == b.DELETE || c.which == b.BACKSPACE) &&
                    this._handleClear(c));
              }),
              (c.prototype.update = function (b, c) {
                if (
                  (b.call(this, c),
                  !(
                    this.$selection.find(".select2-selection__placeholder")
                      .length > 0 || 0 === c.length
                  ))
                ) {
                  var d = a(
                    '<span class="select2-selection__clear">&times;</span>'
                  );
                  d.data("data", c),
                    this.$selection
                      .find(".select2-selection__rendered")
                      .prepend(d);
                }
              }),
              c
            );
          }
        ),
        b.define(
          "select2/selection/search",
          ["jquery", "../utils", "../keys"],
          function (a, b, c) {
            function d(a, b, c) {
              a.call(this, b, c);
            }
            return (
              (d.prototype.render = function (b) {
                var c = a(
                  '<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>'
                );
                (this.$searchContainer = c), (this.$search = c.find("input"));
                var d = b.call(this);
                return this._transferTabIndex(), d;
              }),
              (d.prototype.bind = function (a, b, d) {
                var e = this;
                a.call(this, b, d),
                  b.on("open", function () {
                    e.$search.trigger("focus");
                  }),
                  b.on("close", function () {
                    e.$search.val(""),
                      e.$search.removeAttr("aria-activedescendant"),
                      e.$search.trigger("focus");
                  }),
                  b.on("enable", function () {
                    e.$search.prop("disabled", !1), e._transferTabIndex();
                  }),
                  b.on("disable", function () {
                    e.$search.prop("disabled", !0);
                  }),
                  b.on("focus", function (a) {
                    e.$search.trigger("focus");
                  }),
                  b.on("results:focus", function (a) {
                    e.$search.attr("aria-activedescendant", a.id);
                  }),
                  this.$selection.on(
                    "focusin",
                    ".select2-search--inline",
                    function (a) {
                      e.trigger("focus", a);
                    }
                  ),
                  this.$selection.on(
                    "focusout",
                    ".select2-search--inline",
                    function (a) {
                      e._handleBlur(a);
                    }
                  ),
                  this.$selection.on(
                    "keydown",
                    ".select2-search--inline",
                    function (a) {
                      a.stopPropagation(),
                        e.trigger("keypress", a),
                        (e._keyUpPrevented = a.isDefaultPrevented());
                      var b = a.which;
                      if (b === c.BACKSPACE && "" === e.$search.val()) {
                        var d = e.$searchContainer.prev(
                          ".select2-selection__choice"
                        );
                        if (d.length > 0) {
                          var f = d.data("data");
                          e.searchRemoveChoice(f), a.preventDefault();
                        }
                      }
                    }
                  );
                var f = document.documentMode,
                  g = f && 11 >= f;
                this.$selection.on(
                  "input.searchcheck",
                  ".select2-search--inline",
                  function (a) {
                    return g
                      ? void e.$selection.off("input.search input.searchcheck")
                      : void e.$selection.off("keyup.search");
                  }
                ),
                  this.$selection.on(
                    "keyup.search input.search",
                    ".select2-search--inline",
                    function (a) {
                      if (g && "input" === a.type)
                        return void e.$selection.off(
                          "input.search input.searchcheck"
                        );
                      var b = a.which;
                      b != c.SHIFT &&
                        b != c.CTRL &&
                        b != c.ALT &&
                        b != c.TAB &&
                        e.handleSearch(a);
                    }
                  );
              }),
              (d.prototype._transferTabIndex = function (a) {
                this.$search.attr("tabindex", this.$selection.attr("tabindex")),
                  this.$selection.attr("tabindex", "-1");
              }),
              (d.prototype.createPlaceholder = function (a, b) {
                this.$search.attr("placeholder", b.text);
              }),
              (d.prototype.update = function (a, b) {
                var c = this.$search[0] == document.activeElement;
                this.$search.attr("placeholder", ""),
                  a.call(this, b),
                  this.$selection
                    .find(".select2-selection__rendered")
                    .append(this.$searchContainer),
                  this.resizeSearch(),
                  c && this.$search.focus();
              }),
              (d.prototype.handleSearch = function () {
                if ((this.resizeSearch(), !this._keyUpPrevented)) {
                  var a = this.$search.val();
                  this.trigger("query", { term: a });
                }
                this._keyUpPrevented = !1;
              }),
              (d.prototype.searchRemoveChoice = function (a, b) {
                this.trigger("unselect", { data: b }),
                  this.$search.val(b.text),
                  this.handleSearch();
              }),
              (d.prototype.resizeSearch = function () {
                this.$search.css("width", "25px");
                var a = "";
                if ("" !== this.$search.attr("placeholder"))
                  a = this.$selection
                    .find(".select2-selection__rendered")
                    .innerWidth();
                else {
                  var b = this.$search.val().length + 1;
                  a = 0.75 * b + "em";
                }
                this.$search.css("width", a);
              }),
              d
            );
          }
        ),
        b.define("select2/selection/eventRelay", ["jquery"], function (a) {
          function b() {}
          return (
            (b.prototype.bind = function (b, c, d) {
              var e = this,
                f = [
                  "open",
                  "opening",
                  "close",
                  "closing",
                  "select",
                  "selecting",
                  "unselect",
                  "unselecting",
                ],
                g = ["opening", "closing", "selecting", "unselecting"];
              b.call(this, c, d),
                c.on("*", function (b, c) {
                  if (-1 !== a.inArray(b, f)) {
                    c = c || {};
                    var d = a.Event("select2:" + b, { params: c });
                    e.$element.trigger(d),
                      -1 !== a.inArray(b, g) &&
                        (c.prevented = d.isDefaultPrevented());
                  }
                });
            }),
            b
          );
        }),
        b.define("select2/translation", ["jquery", "require"], function (a, b) {
          function c(a) {
            this.dict = a || {};
          }
          return (
            (c.prototype.all = function () {
              return this.dict;
            }),
            (c.prototype.get = function (a) {
              return this.dict[a];
            }),
            (c.prototype.extend = function (b) {
              this.dict = a.extend({}, b.all(), this.dict);
            }),
            (c._cache = {}),
            (c.loadPath = function (a) {
              if (!(a in c._cache)) {
                var d = b(a);
                c._cache[a] = d;
              }
              return new c(c._cache[a]);
            }),
            c
          );
        }),
        b.define("select2/diacritics", [], function () {
          var a = {
            "Ⓐ": "A",
            Ａ: "A",
            À: "A",
            Á: "A",
            Â: "A",
            Ầ: "A",
            Ấ: "A",
            Ẫ: "A",
            Ẩ: "A",
            Ã: "A",
            Ā: "A",
            Ă: "A",
            Ằ: "A",
            Ắ: "A",
            Ẵ: "A",
            Ẳ: "A",
            Ȧ: "A",
            Ǡ: "A",
            Ä: "A",
            Ǟ: "A",
            Ả: "A",
            Å: "A",
            Ǻ: "A",
            Ǎ: "A",
            Ȁ: "A",
            Ȃ: "A",
            Ạ: "A",
            Ậ: "A",
            Ặ: "A",
            Ḁ: "A",
            Ą: "A",
            Ⱥ: "A",
            Ɐ: "A",
            Ꜳ: "AA",
            Æ: "AE",
            Ǽ: "AE",
            Ǣ: "AE",
            Ꜵ: "AO",
            Ꜷ: "AU",
            Ꜹ: "AV",
            Ꜻ: "AV",
            Ꜽ: "AY",
            "Ⓑ": "B",
            Ｂ: "B",
            Ḃ: "B",
            Ḅ: "B",
            Ḇ: "B",
            Ƀ: "B",
            Ƃ: "B",
            Ɓ: "B",
            "Ⓒ": "C",
            Ｃ: "C",
            Ć: "C",
            Ĉ: "C",
            Ċ: "C",
            Č: "C",
            Ç: "C",
            Ḉ: "C",
            Ƈ: "C",
            Ȼ: "C",
            Ꜿ: "C",
            "Ⓓ": "D",
            Ｄ: "D",
            Ḋ: "D",
            Ď: "D",
            Ḍ: "D",
            Ḑ: "D",
            Ḓ: "D",
            Ḏ: "D",
            Đ: "D",
            Ƌ: "D",
            Ɗ: "D",
            Ɖ: "D",
            Ꝺ: "D",
            Ǳ: "DZ",
            Ǆ: "DZ",
            ǲ: "Dz",
            ǅ: "Dz",
            "Ⓔ": "E",
            Ｅ: "E",
            È: "E",
            É: "E",
            Ê: "E",
            Ề: "E",
            Ế: "E",
            Ễ: "E",
            Ể: "E",
            Ẽ: "E",
            Ē: "E",
            Ḕ: "E",
            Ḗ: "E",
            Ĕ: "E",
            Ė: "E",
            Ë: "E",
            Ẻ: "E",
            Ě: "E",
            Ȅ: "E",
            Ȇ: "E",
            Ẹ: "E",
            Ệ: "E",
            Ȩ: "E",
            Ḝ: "E",
            Ę: "E",
            Ḙ: "E",
            Ḛ: "E",
            Ɛ: "E",
            Ǝ: "E",
            "Ⓕ": "F",
            Ｆ: "F",
            Ḟ: "F",
            Ƒ: "F",
            Ꝼ: "F",
            "Ⓖ": "G",
            Ｇ: "G",
            Ǵ: "G",
            Ĝ: "G",
            Ḡ: "G",
            Ğ: "G",
            Ġ: "G",
            Ǧ: "G",
            Ģ: "G",
            Ǥ: "G",
            Ɠ: "G",
            Ꞡ: "G",
            Ᵹ: "G",
            Ꝿ: "G",
            "Ⓗ": "H",
            Ｈ: "H",
            Ĥ: "H",
            Ḣ: "H",
            Ḧ: "H",
            Ȟ: "H",
            Ḥ: "H",
            Ḩ: "H",
            Ḫ: "H",
            Ħ: "H",
            Ⱨ: "H",
            Ⱶ: "H",
            Ɥ: "H",
            "Ⓘ": "I",
            Ｉ: "I",
            Ì: "I",
            Í: "I",
            Î: "I",
            Ĩ: "I",
            Ī: "I",
            Ĭ: "I",
            İ: "I",
            Ï: "I",
            Ḯ: "I",
            Ỉ: "I",
            Ǐ: "I",
            Ȉ: "I",
            Ȋ: "I",
            Ị: "I",
            Į: "I",
            Ḭ: "I",
            Ɨ: "I",
            "Ⓙ": "J",
            Ｊ: "J",
            Ĵ: "J",
            Ɉ: "J",
            "Ⓚ": "K",
            Ｋ: "K",
            Ḱ: "K",
            Ǩ: "K",
            Ḳ: "K",
            Ķ: "K",
            Ḵ: "K",
            Ƙ: "K",
            Ⱪ: "K",
            Ꝁ: "K",
            Ꝃ: "K",
            Ꝅ: "K",
            Ꞣ: "K",
            "Ⓛ": "L",
            Ｌ: "L",
            Ŀ: "L",
            Ĺ: "L",
            Ľ: "L",
            Ḷ: "L",
            Ḹ: "L",
            Ļ: "L",
            Ḽ: "L",
            Ḻ: "L",
            Ł: "L",
            Ƚ: "L",
            Ɫ: "L",
            Ⱡ: "L",
            Ꝉ: "L",
            Ꝇ: "L",
            Ꞁ: "L",
            Ǉ: "LJ",
            ǈ: "Lj",
            "Ⓜ": "M",
            Ｍ: "M",
            Ḿ: "M",
            Ṁ: "M",
            Ṃ: "M",
            Ɱ: "M",
            Ɯ: "M",
            "Ⓝ": "N",
            Ｎ: "N",
            Ǹ: "N",
            Ń: "N",
            Ñ: "N",
            Ṅ: "N",
            Ň: "N",
            Ṇ: "N",
            Ņ: "N",
            Ṋ: "N",
            Ṉ: "N",
            Ƞ: "N",
            Ɲ: "N",
            Ꞑ: "N",
            Ꞥ: "N",
            Ǌ: "NJ",
            ǋ: "Nj",
            "Ⓞ": "O",
            Ｏ: "O",
            Ò: "O",
            Ó: "O",
            Ô: "O",
            Ồ: "O",
            Ố: "O",
            Ỗ: "O",
            Ổ: "O",
            Õ: "O",
            Ṍ: "O",
            Ȭ: "O",
            Ṏ: "O",
            Ō: "O",
            Ṑ: "O",
            Ṓ: "O",
            Ŏ: "O",
            Ȯ: "O",
            Ȱ: "O",
            Ö: "O",
            Ȫ: "O",
            Ỏ: "O",
            Ő: "O",
            Ǒ: "O",
            Ȍ: "O",
            Ȏ: "O",
            Ơ: "O",
            Ờ: "O",
            Ớ: "O",
            Ỡ: "O",
            Ở: "O",
            Ợ: "O",
            Ọ: "O",
            Ộ: "O",
            Ǫ: "O",
            Ǭ: "O",
            Ø: "O",
            Ǿ: "O",
            Ɔ: "O",
            Ɵ: "O",
            Ꝋ: "O",
            Ꝍ: "O",
            Ƣ: "OI",
            Ꝏ: "OO",
            Ȣ: "OU",
            "Ⓟ": "P",
            Ｐ: "P",
            Ṕ: "P",
            Ṗ: "P",
            Ƥ: "P",
            Ᵽ: "P",
            Ꝑ: "P",
            Ꝓ: "P",
            Ꝕ: "P",
            "Ⓠ": "Q",
            Ｑ: "Q",
            Ꝗ: "Q",
            Ꝙ: "Q",
            Ɋ: "Q",
            "Ⓡ": "R",
            Ｒ: "R",
            Ŕ: "R",
            Ṙ: "R",
            Ř: "R",
            Ȑ: "R",
            Ȓ: "R",
            Ṛ: "R",
            Ṝ: "R",
            Ŗ: "R",
            Ṟ: "R",
            Ɍ: "R",
            Ɽ: "R",
            Ꝛ: "R",
            Ꞧ: "R",
            Ꞃ: "R",
            "Ⓢ": "S",
            Ｓ: "S",
            ẞ: "S",
            Ś: "S",
            Ṥ: "S",
            Ŝ: "S",
            Ṡ: "S",
            Š: "S",
            Ṧ: "S",
            Ṣ: "S",
            Ṩ: "S",
            Ș: "S",
            Ş: "S",
            Ȿ: "S",
            Ꞩ: "S",
            Ꞅ: "S",
            "Ⓣ": "T",
            Ｔ: "T",
            Ṫ: "T",
            Ť: "T",
            Ṭ: "T",
            Ț: "T",
            Ţ: "T",
            Ṱ: "T",
            Ṯ: "T",
            Ŧ: "T",
            Ƭ: "T",
            Ʈ: "T",
            Ⱦ: "T",
            Ꞇ: "T",
            Ꜩ: "TZ",
            "Ⓤ": "U",
            Ｕ: "U",
            Ù: "U",
            Ú: "U",
            Û: "U",
            Ũ: "U",
            Ṹ: "U",
            Ū: "U",
            Ṻ: "U",
            Ŭ: "U",
            Ü: "U",
            Ǜ: "U",
            Ǘ: "U",
            Ǖ: "U",
            Ǚ: "U",
            Ủ: "U",
            Ů: "U",
            Ű: "U",
            Ǔ: "U",
            Ȕ: "U",
            Ȗ: "U",
            Ư: "U",
            Ừ: "U",
            Ứ: "U",
            Ữ: "U",
            Ử: "U",
            Ự: "U",
            Ụ: "U",
            Ṳ: "U",
            Ų: "U",
            Ṷ: "U",
            Ṵ: "U",
            Ʉ: "U",
            "Ⓥ": "V",
            Ｖ: "V",
            Ṽ: "V",
            Ṿ: "V",
            Ʋ: "V",
            Ꝟ: "V",
            Ʌ: "V",
            Ꝡ: "VY",
            "Ⓦ": "W",
            Ｗ: "W",
            Ẁ: "W",
            Ẃ: "W",
            Ŵ: "W",
            Ẇ: "W",
            Ẅ: "W",
            Ẉ: "W",
            Ⱳ: "W",
            "Ⓧ": "X",
            Ｘ: "X",
            Ẋ: "X",
            Ẍ: "X",
            "Ⓨ": "Y",
            Ｙ: "Y",
            Ỳ: "Y",
            Ý: "Y",
            Ŷ: "Y",
            Ỹ: "Y",
            Ȳ: "Y",
            Ẏ: "Y",
            Ÿ: "Y",
            Ỷ: "Y",
            Ỵ: "Y",
            Ƴ: "Y",
            Ɏ: "Y",
            Ỿ: "Y",
            "Ⓩ": "Z",
            Ｚ: "Z",
            Ź: "Z",
            Ẑ: "Z",
            Ż: "Z",
            Ž: "Z",
            Ẓ: "Z",
            Ẕ: "Z",
            Ƶ: "Z",
            Ȥ: "Z",
            Ɀ: "Z",
            Ⱬ: "Z",
            Ꝣ: "Z",
            "ⓐ": "a",
            ａ: "a",
            ẚ: "a",
            à: "a",
            á: "a",
            â: "a",
            ầ: "a",
            ấ: "a",
            ẫ: "a",
            ẩ: "a",
            ã: "a",
            ā: "a",
            ă: "a",
            ằ: "a",
            ắ: "a",
            ẵ: "a",
            ẳ: "a",
            ȧ: "a",
            ǡ: "a",
            ä: "a",
            ǟ: "a",
            ả: "a",
            å: "a",
            ǻ: "a",
            ǎ: "a",
            ȁ: "a",
            ȃ: "a",
            ạ: "a",
            ậ: "a",
            ặ: "a",
            ḁ: "a",
            ą: "a",
            ⱥ: "a",
            ɐ: "a",
            ꜳ: "aa",
            æ: "ae",
            ǽ: "ae",
            ǣ: "ae",
            ꜵ: "ao",
            ꜷ: "au",
            ꜹ: "av",
            ꜻ: "av",
            ꜽ: "ay",
            "ⓑ": "b",
            ｂ: "b",
            ḃ: "b",
            ḅ: "b",
            ḇ: "b",
            ƀ: "b",
            ƃ: "b",
            ɓ: "b",
            "ⓒ": "c",
            ｃ: "c",
            ć: "c",
            ĉ: "c",
            ċ: "c",
            č: "c",
            ç: "c",
            ḉ: "c",
            ƈ: "c",
            ȼ: "c",
            ꜿ: "c",
            ↄ: "c",
            "ⓓ": "d",
            ｄ: "d",
            ḋ: "d",
            ď: "d",
            ḍ: "d",
            ḑ: "d",
            ḓ: "d",
            ḏ: "d",
            đ: "d",
            ƌ: "d",
            ɖ: "d",
            ɗ: "d",
            ꝺ: "d",
            ǳ: "dz",
            ǆ: "dz",
            "ⓔ": "e",
            ｅ: "e",
            è: "e",
            é: "e",
            ê: "e",
            ề: "e",
            ế: "e",
            ễ: "e",
            ể: "e",
            ẽ: "e",
            ē: "e",
            ḕ: "e",
            ḗ: "e",
            ĕ: "e",
            ė: "e",
            ë: "e",
            ẻ: "e",
            ě: "e",
            ȅ: "e",
            ȇ: "e",
            ẹ: "e",
            ệ: "e",
            ȩ: "e",
            ḝ: "e",
            ę: "e",
            ḙ: "e",
            ḛ: "e",
            ɇ: "e",
            ɛ: "e",
            ǝ: "e",
            "ⓕ": "f",
            ｆ: "f",
            ḟ: "f",
            ƒ: "f",
            ꝼ: "f",
            "ⓖ": "g",
            ｇ: "g",
            ǵ: "g",
            ĝ: "g",
            ḡ: "g",
            ğ: "g",
            ġ: "g",
            ǧ: "g",
            ģ: "g",
            ǥ: "g",
            ɠ: "g",
            ꞡ: "g",
            ᵹ: "g",
            ꝿ: "g",
            "ⓗ": "h",
            ｈ: "h",
            ĥ: "h",
            ḣ: "h",
            ḧ: "h",
            ȟ: "h",
            ḥ: "h",
            ḩ: "h",
            ḫ: "h",
            ẖ: "h",
            ħ: "h",
            ⱨ: "h",
            ⱶ: "h",
            ɥ: "h",
            ƕ: "hv",
            "ⓘ": "i",
            ｉ: "i",
            ì: "i",
            í: "i",
            î: "i",
            ĩ: "i",
            ī: "i",
            ĭ: "i",
            ï: "i",
            ḯ: "i",
            ỉ: "i",
            ǐ: "i",
            ȉ: "i",
            ȋ: "i",
            ị: "i",
            į: "i",
            ḭ: "i",
            ɨ: "i",
            ı: "i",
            "ⓙ": "j",
            ｊ: "j",
            ĵ: "j",
            ǰ: "j",
            ɉ: "j",
            "ⓚ": "k",
            ｋ: "k",
            ḱ: "k",
            ǩ: "k",
            ḳ: "k",
            ķ: "k",
            ḵ: "k",
            ƙ: "k",
            ⱪ: "k",
            ꝁ: "k",
            ꝃ: "k",
            ꝅ: "k",
            ꞣ: "k",
            "ⓛ": "l",
            ｌ: "l",
            ŀ: "l",
            ĺ: "l",
            ľ: "l",
            ḷ: "l",
            ḹ: "l",
            ļ: "l",
            ḽ: "l",
            ḻ: "l",
            ſ: "l",
            ł: "l",
            ƚ: "l",
            ɫ: "l",
            ⱡ: "l",
            ꝉ: "l",
            ꞁ: "l",
            ꝇ: "l",
            ǉ: "lj",
            "ⓜ": "m",
            ｍ: "m",
            ḿ: "m",
            ṁ: "m",
            ṃ: "m",
            ɱ: "m",
            ɯ: "m",
            "ⓝ": "n",
            ｎ: "n",
            ǹ: "n",
            ń: "n",
            ñ: "n",
            ṅ: "n",
            ň: "n",
            ṇ: "n",
            ņ: "n",
            ṋ: "n",
            ṉ: "n",
            ƞ: "n",
            ɲ: "n",
            ŉ: "n",
            ꞑ: "n",
            ꞥ: "n",
            ǌ: "nj",
            "ⓞ": "o",
            ｏ: "o",
            ò: "o",
            ó: "o",
            ô: "o",
            ồ: "o",
            ố: "o",
            ỗ: "o",
            ổ: "o",
            õ: "o",
            ṍ: "o",
            ȭ: "o",
            ṏ: "o",
            ō: "o",
            ṑ: "o",
            ṓ: "o",
            ŏ: "o",
            ȯ: "o",
            ȱ: "o",
            ö: "o",
            ȫ: "o",
            ỏ: "o",
            ő: "o",
            ǒ: "o",
            ȍ: "o",
            ȏ: "o",
            ơ: "o",
            ờ: "o",
            ớ: "o",
            ỡ: "o",
            ở: "o",
            ợ: "o",
            ọ: "o",
            ộ: "o",
            ǫ: "o",
            ǭ: "o",
            ø: "o",
            ǿ: "o",
            ɔ: "o",
            ꝋ: "o",
            ꝍ: "o",
            ɵ: "o",
            ƣ: "oi",
            ȣ: "ou",
            ꝏ: "oo",
            "ⓟ": "p",
            ｐ: "p",
            ṕ: "p",
            ṗ: "p",
            ƥ: "p",
            ᵽ: "p",
            ꝑ: "p",
            ꝓ: "p",
            ꝕ: "p",
            "ⓠ": "q",
            ｑ: "q",
            ɋ: "q",
            ꝗ: "q",
            ꝙ: "q",
            "ⓡ": "r",
            ｒ: "r",
            ŕ: "r",
            ṙ: "r",
            ř: "r",
            ȑ: "r",
            ȓ: "r",
            ṛ: "r",
            ṝ: "r",
            ŗ: "r",
            ṟ: "r",
            ɍ: "r",
            ɽ: "r",
            ꝛ: "r",
            ꞧ: "r",
            ꞃ: "r",
            "ⓢ": "s",
            ｓ: "s",
            ß: "s",
            ś: "s",
            ṥ: "s",
            ŝ: "s",
            ṡ: "s",
            š: "s",
            ṧ: "s",
            ṣ: "s",
            ṩ: "s",
            ș: "s",
            ş: "s",
            ȿ: "s",
            ꞩ: "s",
            ꞅ: "s",
            ẛ: "s",
            "ⓣ": "t",
            ｔ: "t",
            ṫ: "t",
            ẗ: "t",
            ť: "t",
            ṭ: "t",
            ț: "t",
            ţ: "t",
            ṱ: "t",
            ṯ: "t",
            ŧ: "t",
            ƭ: "t",
            ʈ: "t",
            ⱦ: "t",
            ꞇ: "t",
            ꜩ: "tz",
            "ⓤ": "u",
            ｕ: "u",
            ù: "u",
            ú: "u",
            û: "u",
            ũ: "u",
            ṹ: "u",
            ū: "u",
            ṻ: "u",
            ŭ: "u",
            ü: "u",
            ǜ: "u",
            ǘ: "u",
            ǖ: "u",
            ǚ: "u",
            ủ: "u",
            ů: "u",
            ű: "u",
            ǔ: "u",
            ȕ: "u",
            ȗ: "u",
            ư: "u",
            ừ: "u",
            ứ: "u",
            ữ: "u",
            ử: "u",
            ự: "u",
            ụ: "u",
            ṳ: "u",
            ų: "u",
            ṷ: "u",
            ṵ: "u",
            ʉ: "u",
            "ⓥ": "v",
            ｖ: "v",
            ṽ: "v",
            ṿ: "v",
            ʋ: "v",
            ꝟ: "v",
            ʌ: "v",
            ꝡ: "vy",
            "ⓦ": "w",
            ｗ: "w",
            ẁ: "w",
            ẃ: "w",
            ŵ: "w",
            ẇ: "w",
            ẅ: "w",
            ẘ: "w",
            ẉ: "w",
            ⱳ: "w",
            "ⓧ": "x",
            ｘ: "x",
            ẋ: "x",
            ẍ: "x",
            "ⓨ": "y",
            ｙ: "y",
            ỳ: "y",
            ý: "y",
            ŷ: "y",
            ỹ: "y",
            ȳ: "y",
            ẏ: "y",
            ÿ: "y",
            ỷ: "y",
            ẙ: "y",
            ỵ: "y",
            ƴ: "y",
            ɏ: "y",
            ỿ: "y",
            "ⓩ": "z",
            ｚ: "z",
            ź: "z",
            ẑ: "z",
            ż: "z",
            ž: "z",
            ẓ: "z",
            ẕ: "z",
            ƶ: "z",
            ȥ: "z",
            ɀ: "z",
            ⱬ: "z",
            ꝣ: "z",
            Ά: "Α",
            Έ: "Ε",
            Ή: "Η",
            Ί: "Ι",
            Ϊ: "Ι",
            Ό: "Ο",
            Ύ: "Υ",
            Ϋ: "Υ",
            Ώ: "Ω",
            ά: "α",
            έ: "ε",
            ή: "η",
            ί: "ι",
            ϊ: "ι",
            ΐ: "ι",
            ό: "ο",
            ύ: "υ",
            ϋ: "υ",
            ΰ: "υ",
            ω: "ω",
            ς: "σ",
          };
          return a;
        }),
        b.define("select2/data/base", ["../utils"], function (a) {
          function b(a, c) {
            b.__super__.constructor.call(this);
          }
          return (
            a.Extend(b, a.Observable),
            (b.prototype.current = function (a) {
              throw new Error(
                "The `current` method must be defined in child classes."
              );
            }),
            (b.prototype.query = function (a, b) {
              throw new Error(
                "The `query` method must be defined in child classes."
              );
            }),
            (b.prototype.bind = function (a, b) {}),
            (b.prototype.destroy = function () {}),
            (b.prototype.generateResultId = function (b, c) {
              var d = b.id + "-result-";
              return (
                (d += a.generateChars(4)),
                (d +=
                  null != c.id
                    ? "-" + c.id.toString()
                    : "-" + a.generateChars(4))
              );
            }),
            b
          );
        }),
        b.define(
          "select2/data/select",
          ["./base", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              (this.$element = a),
                (this.options = b),
                d.__super__.constructor.call(this);
            }
            return (
              b.Extend(d, a),
              (d.prototype.current = function (a) {
                var b = [],
                  d = this;
                this.$element.find(":selected").each(function () {
                  var a = c(this),
                    e = d.item(a);
                  b.push(e);
                }),
                  a(b);
              }),
              (d.prototype.select = function (a) {
                var b = this;
                if (((a.selected = !0), c(a.element).is("option")))
                  return (
                    (a.element.selected = !0),
                    void this.$element.trigger("change")
                  );
                if (this.$element.prop("multiple"))
                  this.current(function (d) {
                    var e = [];
                    (a = [a]), a.push.apply(a, d);
                    for (var f = 0; f < a.length; f++) {
                      var g = a[f].id;
                      -1 === c.inArray(g, e) && e.push(g);
                    }
                    b.$element.val(e), b.$element.trigger("change");
                  });
                else {
                  var d = a.id;
                  this.$element.val(d), this.$element.trigger("change");
                }
              }),
              (d.prototype.unselect = function (a) {
                var b = this;
                if (this.$element.prop("multiple"))
                  return (
                    (a.selected = !1),
                    c(a.element).is("option")
                      ? ((a.element.selected = !1),
                        void this.$element.trigger("change"))
                      : void this.current(function (d) {
                          for (var e = [], f = 0; f < d.length; f++) {
                            var g = d[f].id;
                            g !== a.id && -1 === c.inArray(g, e) && e.push(g);
                          }
                          b.$element.val(e), b.$element.trigger("change");
                        })
                  );
              }),
              (d.prototype.bind = function (a, b) {
                var c = this;
                (this.container = a),
                  a.on("select", function (a) {
                    c.select(a.data);
                  }),
                  a.on("unselect", function (a) {
                    c.unselect(a.data);
                  });
              }),
              (d.prototype.destroy = function () {
                this.$element.find("*").each(function () {
                  c.removeData(this, "data");
                });
              }),
              (d.prototype.query = function (a, b) {
                var d = [],
                  e = this,
                  f = this.$element.children();
                f.each(function () {
                  var b = c(this);
                  if (b.is("option") || b.is("optgroup")) {
                    var f = e.item(b),
                      g = e.matches(a, f);
                    null !== g && d.push(g);
                  }
                }),
                  b({ results: d });
              }),
              (d.prototype.addOptions = function (a) {
                b.appendMany(this.$element, a);
              }),
              (d.prototype.option = function (a) {
                var b;
                a.children
                  ? ((b = document.createElement("optgroup")),
                    (b.label = a.text))
                  : ((b = document.createElement("option")),
                    void 0 !== b.textContent
                      ? (b.textContent = a.text)
                      : (b.innerText = a.text)),
                  a.id && (b.value = a.id),
                  a.disabled && (b.disabled = !0),
                  a.selected && (b.selected = !0),
                  a.title && (b.title = a.title);
                var d = c(b),
                  e = this._normalizeItem(a);
                return (e.element = b), c.data(b, "data", e), d;
              }),
              (d.prototype.item = function (a) {
                var b = {};
                if (((b = c.data(a[0], "data")), null != b)) return b;
                if (a.is("option"))
                  b = {
                    id: a.val(),
                    text: a.text(),
                    disabled: a.prop("disabled"),
                    selected: a.prop("selected"),
                    title: a.prop("title"),
                  };
                else if (a.is("optgroup")) {
                  b = {
                    text: a.prop("label"),
                    children: [],
                    title: a.prop("title"),
                  };
                  for (
                    var d = a.children("option"), e = [], f = 0;
                    f < d.length;
                    f++
                  ) {
                    var g = c(d[f]),
                      h = this.item(g);
                    e.push(h);
                  }
                  b.children = e;
                }
                return (
                  (b = this._normalizeItem(b)),
                  (b.element = a[0]),
                  c.data(a[0], "data", b),
                  b
                );
              }),
              (d.prototype._normalizeItem = function (a) {
                c.isPlainObject(a) || (a = { id: a, text: a }),
                  (a = c.extend({}, { text: "" }, a));
                var b = { selected: !1, disabled: !1 };
                return (
                  null != a.id && (a.id = a.id.toString()),
                  null != a.text && (a.text = a.text.toString()),
                  null == a._resultId &&
                    a.id &&
                    null != this.container &&
                    (a._resultId = this.generateResultId(this.container, a)),
                  c.extend({}, b, a)
                );
              }),
              (d.prototype.matches = function (a, b) {
                var c = this.options.get("matcher");
                return c(a, b);
              }),
              d
            );
          }
        ),
        b.define(
          "select2/data/array",
          ["./select", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              var c = b.get("data") || [];
              d.__super__.constructor.call(this, a, b),
                this.addOptions(this.convertToOptions(c));
            }
            return (
              b.Extend(d, a),
              (d.prototype.select = function (a) {
                var b = this.$element.find("option").filter(function (b, c) {
                  return c.value == a.id.toString();
                });
                0 === b.length && ((b = this.option(a)), this.addOptions(b)),
                  d.__super__.select.call(this, a);
              }),
              (d.prototype.convertToOptions = function (a) {
                function d(a) {
                  return function () {
                    return c(this).val() == a.id;
                  };
                }
                for (
                  var e = this,
                    f = this.$element.find("option"),
                    g = f
                      .map(function () {
                        return e.item(c(this)).id;
                      })
                      .get(),
                    h = [],
                    i = 0;
                  i < a.length;
                  i++
                ) {
                  var j = this._normalizeItem(a[i]);
                  if (c.inArray(j.id, g) >= 0) {
                    var k = f.filter(d(j)),
                      l = this.item(k),
                      m = c.extend(!0, {}, j, l),
                      n = this.option(m);
                    k.replaceWith(n);
                  } else {
                    var o = this.option(j);
                    if (j.children) {
                      var p = this.convertToOptions(j.children);
                      b.appendMany(o, p);
                    }
                    h.push(o);
                  }
                }
                return h;
              }),
              d
            );
          }
        ),
        b.define(
          "select2/data/ajax",
          ["./array", "../utils", "jquery"],
          function (a, b, c) {
            function d(a, b) {
              (this.ajaxOptions = this._applyDefaults(b.get("ajax"))),
                null != this.ajaxOptions.processResults &&
                  (this.processResults = this.ajaxOptions.processResults),
                d.__super__.constructor.call(this, a, b);
            }
            return (
              b.Extend(d, a),
              (d.prototype._applyDefaults = function (a) {
                var b = {
                  data: function (a) {
                    return c.extend({}, a, { q: a.term });
                  },
                  transport: function (a, b, d) {
                    var e = c.ajax(a);
                    return e.then(b), e.fail(d), e;
                  },
                };
                return c.extend({}, b, a, !0);
              }),
              (d.prototype.processResults = function (a) {
                return a;
              }),
              (d.prototype.query = function (a, b) {
                function d() {
                  var d = f.transport(
                    f,
                    function (d) {
                      var f = e.processResults(d, a);
                      e.options.get("debug") &&
                        window.console &&
                        console.error &&
                        ((f && f.results && c.isArray(f.results)) ||
                          console.error(
                            "Select2: The AJAX results did not return an array in the `results` key of the response."
                          )),
                        b(f);
                    },
                    function () {
                      (d.status && "0" === d.status) ||
                        e.trigger("results:message", {
                          message: "errorLoading",
                        });
                    }
                  );
                  e._request = d;
                }
                var e = this;
                null != this._request &&
                  (c.isFunction(this._request.abort) && this._request.abort(),
                  (this._request = null));
                var f = c.extend({ type: "GET" }, this.ajaxOptions);
                "function" == typeof f.url &&
                  (f.url = f.url.call(this.$element, a)),
                  "function" == typeof f.data &&
                    (f.data = f.data.call(this.$element, a)),
                  this.ajaxOptions.delay && null != a.term
                    ? (this._queryTimeout &&
                        window.clearTimeout(this._queryTimeout),
                      (this._queryTimeout = window.setTimeout(
                        d,
                        this.ajaxOptions.delay
                      )))
                    : d();
              }),
              d
            );
          }
        ),
        b.define("select2/data/tags", ["jquery"], function (a) {
          function b(b, c, d) {
            var e = d.get("tags"),
              f = d.get("createTag");
            void 0 !== f && (this.createTag = f);
            var g = d.get("insertTag");
            if (
              (void 0 !== g && (this.insertTag = g),
              b.call(this, c, d),
              a.isArray(e))
            )
              for (var h = 0; h < e.length; h++) {
                var i = e[h],
                  j = this._normalizeItem(i),
                  k = this.option(j);
                this.$element.append(k);
              }
          }
          return (
            (b.prototype.query = function (a, b, c) {
              function d(a, f) {
                for (var g = a.results, h = 0; h < g.length; h++) {
                  var i = g[h],
                    j = null != i.children && !d({ results: i.children }, !0),
                    k = i.text === b.term;
                  if (k || j) return f ? !1 : ((a.data = g), void c(a));
                }
                if (f) return !0;
                var l = e.createTag(b);
                if (null != l) {
                  var m = e.option(l);
                  m.attr("data-select2-tag", !0),
                    e.addOptions([m]),
                    e.insertTag(g, l);
                }
                (a.results = g), c(a);
              }
              var e = this;
              return (
                this._removeOldTags(),
                null == b.term || null != b.page
                  ? void a.call(this, b, c)
                  : void a.call(this, b, d)
              );
            }),
            (b.prototype.createTag = function (b, c) {
              var d = a.trim(c.term);
              return "" === d ? null : { id: d, text: d };
            }),
            (b.prototype.insertTag = function (a, b, c) {
              b.unshift(c);
            }),
            (b.prototype._removeOldTags = function (b) {
              var c =
                (this._lastTag, this.$element.find("option[data-select2-tag]"));
              c.each(function () {
                this.selected || a(this).remove();
              });
            }),
            b
          );
        }),
        b.define("select2/data/tokenizer", ["jquery"], function (a) {
          function b(a, b, c) {
            var d = c.get("tokenizer");
            void 0 !== d && (this.tokenizer = d), a.call(this, b, c);
          }
          return (
            (b.prototype.bind = function (a, b, c) {
              a.call(this, b, c),
                (this.$search =
                  b.dropdown.$search ||
                  b.selection.$search ||
                  c.find(".select2-search__field"));
            }),
            (b.prototype.query = function (b, c, d) {
              function e(b) {
                var c = g._normalizeItem(b),
                  d = g.$element.find("option").filter(function () {
                    return a(this).val() === c.id;
                  });
                if (!d.length) {
                  var e = g.option(c);
                  e.attr("data-select2-tag", !0),
                    g._removeOldTags(),
                    g.addOptions([e]);
                }
                f(c);
              }
              function f(a) {
                g.trigger("select", { data: a });
              }
              var g = this;
              c.term = c.term || "";
              var h = this.tokenizer(c, this.options, e);
              h.term !== c.term &&
                (this.$search.length &&
                  (this.$search.val(h.term), this.$search.focus()),
                (c.term = h.term)),
                b.call(this, c, d);
            }),
            (b.prototype.tokenizer = function (b, c, d, e) {
              for (
                var f = d.get("tokenSeparators") || [],
                  g = c.term,
                  h = 0,
                  i =
                    this.createTag ||
                    function (a) {
                      return { id: a.term, text: a.term };
                    };
                h < g.length;

              ) {
                var j = g[h];
                if (-1 !== a.inArray(j, f)) {
                  var k = g.substr(0, h),
                    l = a.extend({}, c, { term: k }),
                    m = i(l);
                  null != m
                    ? (e(m), (g = g.substr(h + 1) || ""), (h = 0))
                    : h++;
                } else h++;
              }
              return { term: g };
            }),
            b
          );
        }),
        b.define("select2/data/minimumInputLength", [], function () {
          function a(a, b, c) {
            (this.minimumInputLength = c.get("minimumInputLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              return (
                (b.term = b.term || ""),
                b.term.length < this.minimumInputLength
                  ? void this.trigger("results:message", {
                      message: "inputTooShort",
                      args: {
                        minimum: this.minimumInputLength,
                        input: b.term,
                        params: b,
                      },
                    })
                  : void a.call(this, b, c)
              );
            }),
            a
          );
        }),
        b.define("select2/data/maximumInputLength", [], function () {
          function a(a, b, c) {
            (this.maximumInputLength = c.get("maximumInputLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              return (
                (b.term = b.term || ""),
                this.maximumInputLength > 0 &&
                b.term.length > this.maximumInputLength
                  ? void this.trigger("results:message", {
                      message: "inputTooLong",
                      args: {
                        maximum: this.maximumInputLength,
                        input: b.term,
                        params: b,
                      },
                    })
                  : void a.call(this, b, c)
              );
            }),
            a
          );
        }),
        b.define("select2/data/maximumSelectionLength", [], function () {
          function a(a, b, c) {
            (this.maximumSelectionLength = c.get("maximumSelectionLength")),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              var d = this;
              this.current(function (e) {
                var f = null != e ? e.length : 0;
                return d.maximumSelectionLength > 0 &&
                  f >= d.maximumSelectionLength
                  ? void d.trigger("results:message", {
                      message: "maximumSelected",
                      args: { maximum: d.maximumSelectionLength },
                    })
                  : void a.call(d, b, c);
              });
            }),
            a
          );
        }),
        b.define("select2/dropdown", ["jquery", "./utils"], function (a, b) {
          function c(a, b) {
            (this.$element = a),
              (this.options = b),
              c.__super__.constructor.call(this);
          }
          return (
            b.Extend(c, b.Observable),
            (c.prototype.render = function () {
              var b = a(
                '<span class="select2-dropdown"><span class="select2-results"></span></span>'
              );
              return (
                b.attr("dir", this.options.get("dir")), (this.$dropdown = b), b
              );
            }),
            (c.prototype.bind = function () {}),
            (c.prototype.position = function (a, b) {}),
            (c.prototype.destroy = function () {
              this.$dropdown.remove();
            }),
            c
          );
        }),
        b.define(
          "select2/dropdown/search",
          ["jquery", "../utils"],
          function (a, b) {
            function c() {}
            return (
              (c.prototype.render = function (b) {
                var c = b.call(this),
                  d = a(
                    '<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="off" spellcheck="false" role="textbox" /></span>'
                  );
                return (
                  (this.$searchContainer = d),
                  (this.$search = d.find("input")),
                  c.prepend(d),
                  c
                );
              }),
              (c.prototype.bind = function (b, c, d) {
                var e = this;
                b.call(this, c, d),
                  this.$search.on("keydown", function (a) {
                    e.trigger("keypress", a),
                      (e._keyUpPrevented = a.isDefaultPrevented());
                  }),
                  this.$search.on("input", function (b) {
                    a(this).off("keyup");
                  }),
                  this.$search.on("keyup input", function (a) {
                    e.handleSearch(a);
                  }),
                  c.on("open", function () {
                    e.$search.attr("tabindex", 0),
                      e.$search.focus(),
                      window.setTimeout(function () {
                        e.$search.focus();
                      }, 0);
                  }),
                  c.on("close", function () {
                    e.$search.attr("tabindex", -1), e.$search.val("");
                  }),
                  c.on("focus", function () {
                    c.isOpen() && e.$search.focus();
                  }),
                  c.on("results:all", function (a) {
                    if (null == a.query.term || "" === a.query.term) {
                      var b = e.showSearch(a);
                      b
                        ? e.$searchContainer.removeClass("select2-search--hide")
                        : e.$searchContainer.addClass("select2-search--hide");
                    }
                  });
              }),
              (c.prototype.handleSearch = function (a) {
                if (!this._keyUpPrevented) {
                  var b = this.$search.val();
                  this.trigger("query", { term: b });
                }
                this._keyUpPrevented = !1;
              }),
              (c.prototype.showSearch = function (a, b) {
                return !0;
              }),
              c
            );
          }
        ),
        b.define("select2/dropdown/hidePlaceholder", [], function () {
          function a(a, b, c, d) {
            (this.placeholder = this.normalizePlaceholder(
              c.get("placeholder")
            )),
              a.call(this, b, c, d);
          }
          return (
            (a.prototype.append = function (a, b) {
              (b.results = this.removePlaceholder(b.results)), a.call(this, b);
            }),
            (a.prototype.normalizePlaceholder = function (a, b) {
              return "string" == typeof b && (b = { id: "", text: b }), b;
            }),
            (a.prototype.removePlaceholder = function (a, b) {
              for (var c = b.slice(0), d = b.length - 1; d >= 0; d--) {
                var e = b[d];
                this.placeholder.id === e.id && c.splice(d, 1);
              }
              return c;
            }),
            a
          );
        }),
        b.define("select2/dropdown/infiniteScroll", ["jquery"], function (a) {
          function b(a, b, c, d) {
            (this.lastParams = {}),
              a.call(this, b, c, d),
              (this.$loadingMore = this.createLoadingMore()),
              (this.loading = !1);
          }
          return (
            (b.prototype.append = function (a, b) {
              this.$loadingMore.remove(),
                (this.loading = !1),
                a.call(this, b),
                this.showLoadingMore(b) &&
                  this.$results.append(this.$loadingMore);
            }),
            (b.prototype.bind = function (b, c, d) {
              var e = this;
              b.call(this, c, d),
                c.on("query", function (a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                c.on("query:append", function (a) {
                  (e.lastParams = a), (e.loading = !0);
                }),
                this.$results.on("scroll", function () {
                  var b = a.contains(
                    document.documentElement,
                    e.$loadingMore[0]
                  );
                  if (!e.loading && b) {
                    var c =
                        e.$results.offset().top + e.$results.outerHeight(!1),
                      d =
                        e.$loadingMore.offset().top +
                        e.$loadingMore.outerHeight(!1);
                    c + 50 >= d && e.loadMore();
                  }
                });
            }),
            (b.prototype.loadMore = function () {
              this.loading = !0;
              var b = a.extend({}, { page: 1 }, this.lastParams);
              b.page++, this.trigger("query:append", b);
            }),
            (b.prototype.showLoadingMore = function (a, b) {
              return b.pagination && b.pagination.more;
            }),
            (b.prototype.createLoadingMore = function () {
              var b = a(
                  '<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'
                ),
                c = this.options.get("translations").get("loadingMore");
              return b.html(c(this.lastParams)), b;
            }),
            b
          );
        }),
        b.define(
          "select2/dropdown/attachBody",
          ["jquery", "../utils"],
          function (a, b) {
            function c(b, c, d) {
              (this.$dropdownParent =
                d.get("dropdownParent") || a(document.body)),
                b.call(this, c, d);
            }
            return (
              (c.prototype.bind = function (a, b, c) {
                var d = this,
                  e = !1;
                a.call(this, b, c),
                  b.on("open", function () {
                    d._showDropdown(),
                      d._attachPositioningHandler(b),
                      e ||
                        ((e = !0),
                        b.on("results:all", function () {
                          d._positionDropdown(), d._resizeDropdown();
                        }),
                        b.on("results:append", function () {
                          d._positionDropdown(), d._resizeDropdown();
                        }));
                  }),
                  b.on("close", function () {
                    d._hideDropdown(), d._detachPositioningHandler(b);
                  }),
                  this.$dropdownContainer.on("mousedown", function (a) {
                    a.stopPropagation();
                  });
              }),
              (c.prototype.destroy = function (a) {
                a.call(this), this.$dropdownContainer.remove();
              }),
              (c.prototype.position = function (a, b, c) {
                b.attr("class", c.attr("class")),
                  b.removeClass("select2"),
                  b.addClass("select2-container--open"),
                  b.css({ position: "absolute", top: -999999 }),
                  (this.$container = c);
              }),
              (c.prototype.render = function (b) {
                var c = a("<span></span>"),
                  d = b.call(this);
                return c.append(d), (this.$dropdownContainer = c), c;
              }),
              (c.prototype._hideDropdown = function (a) {
                this.$dropdownContainer.detach();
              }),
              (c.prototype._attachPositioningHandler = function (c, d) {
                var e = this,
                  f = "scroll.select2." + d.id,
                  g = "resize.select2." + d.id,
                  h = "orientationchange.select2." + d.id,
                  i = this.$container.parents().filter(b.hasScroll);
                i.each(function () {
                  a(this).data("select2-scroll-position", {
                    x: a(this).scrollLeft(),
                    y: a(this).scrollTop(),
                  });
                }),
                  i.on(f, function (b) {
                    var c = a(this).data("select2-scroll-position");
                    a(this).scrollTop(c.y);
                  }),
                  a(window).on(f + " " + g + " " + h, function (a) {
                    e._positionDropdown(), e._resizeDropdown();
                  });
              }),
              (c.prototype._detachPositioningHandler = function (c, d) {
                var e = "scroll.select2." + d.id,
                  f = "resize.select2." + d.id,
                  g = "orientationchange.select2." + d.id,
                  h = this.$container.parents().filter(b.hasScroll);
                h.off(e), a(window).off(e + " " + f + " " + g);
              }),
              (c.prototype._positionDropdown = function () {
                var b = a(window),
                  c = this.$dropdown.hasClass("select2-dropdown--above"),
                  d = this.$dropdown.hasClass("select2-dropdown--below"),
                  e = null,
                  f = this.$container.offset();
                f.bottom = f.top + this.$container.outerHeight(!1);
                var g = { height: this.$container.outerHeight(!1) };
                (g.top = f.top), (g.bottom = f.top + g.height);
                var h = { height: this.$dropdown.outerHeight(!1) },
                  i = {
                    top: b.scrollTop(),
                    bottom: b.scrollTop() + b.height(),
                  },
                  j = i.top < f.top - h.height,
                  k = i.bottom > f.bottom + h.height,
                  l = { left: f.left, top: g.bottom },
                  m = this.$dropdownParent;
                "static" === m.css("position") && (m = m.offsetParent());
                var n = m.offset();
                (l.top -= n.top),
                  (l.left -= n.left),
                  c || d || (e = "below"),
                  k || !j || c ? !j && k && c && (e = "below") : (e = "above"),
                  ("above" == e || (c && "below" !== e)) &&
                    (l.top = g.top - n.top - h.height),
                  null != e &&
                    (this.$dropdown
                      .removeClass(
                        "select2-dropdown--below select2-dropdown--above"
                      )
                      .addClass("select2-dropdown--" + e),
                    this.$container
                      .removeClass(
                        "select2-container--below select2-container--above"
                      )
                      .addClass("select2-container--" + e)),
                  this.$dropdownContainer.css(l);
              }),
              (c.prototype._resizeDropdown = function () {
                var a = { width: this.$container.outerWidth(!1) + "px" };
                this.options.get("dropdownAutoWidth") &&
                  ((a.minWidth = a.width),
                  (a.position = "relative"),
                  (a.width = "auto")),
                  this.$dropdown.css(a);
              }),
              (c.prototype._showDropdown = function (a) {
                this.$dropdownContainer.appendTo(this.$dropdownParent),
                  this._positionDropdown(),
                  this._resizeDropdown();
              }),
              c
            );
          }
        ),
        b.define("select2/dropdown/minimumResultsForSearch", [], function () {
          function a(b) {
            for (var c = 0, d = 0; d < b.length; d++) {
              var e = b[d];
              e.children ? (c += a(e.children)) : c++;
            }
            return c;
          }
          function b(a, b, c, d) {
            (this.minimumResultsForSearch = c.get("minimumResultsForSearch")),
              this.minimumResultsForSearch < 0 &&
                (this.minimumResultsForSearch = 1 / 0),
              a.call(this, b, c, d);
          }
          return (
            (b.prototype.showSearch = function (b, c) {
              return a(c.data.results) < this.minimumResultsForSearch
                ? !1
                : b.call(this, c);
            }),
            b
          );
        }),
        b.define("select2/dropdown/selectOnClose", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on("close", function (a) {
                  d._handleSelectOnClose(a);
                });
            }),
            (a.prototype._handleSelectOnClose = function (a, b) {
              if (b && null != b.originalSelect2Event) {
                var c = b.originalSelect2Event;
                if ("select" === c._type || "unselect" === c._type) return;
              }
              var d = this.getHighlightedResults();
              if (!(d.length < 1)) {
                var e = d.data("data");
                (null != e.element && e.element.selected) ||
                  (null == e.element && e.selected) ||
                  this.trigger("select", { data: e });
              }
            }),
            a
          );
        }),
        b.define("select2/dropdown/closeOnSelect", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              var d = this;
              a.call(this, b, c),
                b.on("select", function (a) {
                  d._selectTriggered(a);
                }),
                b.on("unselect", function (a) {
                  d._selectTriggered(a);
                });
            }),
            (a.prototype._selectTriggered = function (a, b) {
              var c = b.originalEvent;
              (c && c.ctrlKey) ||
                this.trigger("close", {
                  originalEvent: c,
                  originalSelect2Event: b,
                });
            }),
            a
          );
        }),
        b.define("select2/i18n/en", [], function () {
          return {
            errorLoading: function () {
              return "The results could not be loaded.";
            },
            inputTooLong: function (a) {
              var b = a.input.length - a.maximum,
                c = "Please delete " + b + " character";
              return 1 != b && (c += "s"), c;
            },
            inputTooShort: function (a) {
              var b = a.minimum - a.input.length,
                c = "Please enter " + b + " or more characters";
              return c;
            },
            loadingMore: function () {
              return "Loading more results…";
            },
            maximumSelected: function (a) {
              var b = "You can only select " + a.maximum + " item";
              return 1 != a.maximum && (b += "s"), b;
            },
            noResults: function () {
              return "No results found";
            },
            searching: function () {
              return "Searching…";
            },
          };
        }),
        b.define(
          "select2/defaults",
          [
            "jquery",
            "require",
            "./results",
            "./selection/single",
            "./selection/multiple",
            "./selection/placeholder",
            "./selection/allowClear",
            "./selection/search",
            "./selection/eventRelay",
            "./utils",
            "./translation",
            "./diacritics",
            "./data/select",
            "./data/array",
            "./data/ajax",
            "./data/tags",
            "./data/tokenizer",
            "./data/minimumInputLength",
            "./data/maximumInputLength",
            "./data/maximumSelectionLength",
            "./dropdown",
            "./dropdown/search",
            "./dropdown/hidePlaceholder",
            "./dropdown/infiniteScroll",
            "./dropdown/attachBody",
            "./dropdown/minimumResultsForSearch",
            "./dropdown/selectOnClose",
            "./dropdown/closeOnSelect",
            "./i18n/en",
          ],
          function (
            a,
            b,
            c,
            d,
            e,
            f,
            g,
            h,
            i,
            j,
            k,
            l,
            m,
            n,
            o,
            p,
            q,
            r,
            s,
            t,
            u,
            v,
            w,
            x,
            y,
            z,
            A,
            B,
            C
          ) {
            function D() {
              this.reset();
            }
            (D.prototype.apply = function (l) {
              if (
                ((l = a.extend(!0, {}, this.defaults, l)),
                null == l.dataAdapter)
              ) {
                if (
                  (null != l.ajax
                    ? (l.dataAdapter = o)
                    : null != l.data
                    ? (l.dataAdapter = n)
                    : (l.dataAdapter = m),
                  l.minimumInputLength > 0 &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, r)),
                  l.maximumInputLength > 0 &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, s)),
                  l.maximumSelectionLength > 0 &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, t)),
                  l.tags && (l.dataAdapter = j.Decorate(l.dataAdapter, p)),
                  (null != l.tokenSeparators || null != l.tokenizer) &&
                    (l.dataAdapter = j.Decorate(l.dataAdapter, q)),
                  null != l.query)
                ) {
                  var C = b(l.amdBase + "compat/query");
                  l.dataAdapter = j.Decorate(l.dataAdapter, C);
                }
                if (null != l.initSelection) {
                  var D = b(l.amdBase + "compat/initSelection");
                  l.dataAdapter = j.Decorate(l.dataAdapter, D);
                }
              }
              if (
                (null == l.resultsAdapter &&
                  ((l.resultsAdapter = c),
                  null != l.ajax &&
                    (l.resultsAdapter = j.Decorate(l.resultsAdapter, x)),
                  null != l.placeholder &&
                    (l.resultsAdapter = j.Decorate(l.resultsAdapter, w)),
                  l.selectOnClose &&
                    (l.resultsAdapter = j.Decorate(l.resultsAdapter, A))),
                null == l.dropdownAdapter)
              ) {
                if (l.multiple) l.dropdownAdapter = u;
                else {
                  var E = j.Decorate(u, v);
                  l.dropdownAdapter = E;
                }
                if (
                  (0 !== l.minimumResultsForSearch &&
                    (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, z)),
                  l.closeOnSelect &&
                    (l.dropdownAdapter = j.Decorate(l.dropdownAdapter, B)),
                  null != l.dropdownCssClass ||
                    null != l.dropdownCss ||
                    null != l.adaptDropdownCssClass)
                ) {
                  var F = b(l.amdBase + "compat/dropdownCss");
                  l.dropdownAdapter = j.Decorate(l.dropdownAdapter, F);
                }
                l.dropdownAdapter = j.Decorate(l.dropdownAdapter, y);
              }
              if (null == l.selectionAdapter) {
                if (
                  (l.multiple
                    ? (l.selectionAdapter = e)
                    : (l.selectionAdapter = d),
                  null != l.placeholder &&
                    (l.selectionAdapter = j.Decorate(l.selectionAdapter, f)),
                  l.allowClear &&
                    (l.selectionAdapter = j.Decorate(l.selectionAdapter, g)),
                  l.multiple &&
                    (l.selectionAdapter = j.Decorate(l.selectionAdapter, h)),
                  null != l.containerCssClass ||
                    null != l.containerCss ||
                    null != l.adaptContainerCssClass)
                ) {
                  var G = b(l.amdBase + "compat/containerCss");
                  l.selectionAdapter = j.Decorate(l.selectionAdapter, G);
                }
                l.selectionAdapter = j.Decorate(l.selectionAdapter, i);
              }
              if ("string" == typeof l.language)
                if (l.language.indexOf("-") > 0) {
                  var H = l.language.split("-"),
                    I = H[0];
                  l.language = [l.language, I];
                } else l.language = [l.language];
              if (a.isArray(l.language)) {
                var J = new k();
                l.language.push("en");
                for (var K = l.language, L = 0; L < K.length; L++) {
                  var M = K[L],
                    N = {};
                  try {
                    N = k.loadPath(M);
                  } catch (O) {
                    try {
                      (M = this.defaults.amdLanguageBase + M),
                        (N = k.loadPath(M));
                    } catch (P) {
                      l.debug &&
                        window.console &&
                        console.warn &&
                        console.warn(
                          'Select2: The language file for "' +
                            M +
                            '" could not be automatically loaded. A fallback will be used instead.'
                        );
                      continue;
                    }
                  }
                  J.extend(N);
                }
                l.translations = J;
              } else {
                var Q = k.loadPath(this.defaults.amdLanguageBase + "en"),
                  R = new k(l.language);
                R.extend(Q), (l.translations = R);
              }
              return l;
            }),
              (D.prototype.reset = function () {
                function b(a) {
                  function b(a) {
                    return l[a] || a;
                  }
                  return a.replace(/[^\u0000-\u007E]/g, b);
                }
                function c(d, e) {
                  if ("" === a.trim(d.term)) return e;
                  if (e.children && e.children.length > 0) {
                    for (
                      var f = a.extend(!0, {}, e), g = e.children.length - 1;
                      g >= 0;
                      g--
                    ) {
                      var h = e.children[g],
                        i = c(d, h);
                      null == i && f.children.splice(g, 1);
                    }
                    return f.children.length > 0 ? f : c(d, f);
                  }
                  var j = b(e.text).toUpperCase(),
                    k = b(d.term).toUpperCase();
                  return j.indexOf(k) > -1 ? e : null;
                }
                this.defaults = {
                  amdBase: "./",
                  amdLanguageBase: "./i18n/",
                  closeOnSelect: !0,
                  debug: !1,
                  dropdownAutoWidth: !1,
                  escapeMarkup: j.escapeMarkup,
                  language: C,
                  matcher: c,
                  minimumInputLength: 0,
                  maximumInputLength: 0,
                  maximumSelectionLength: 0,
                  minimumResultsForSearch: 0,
                  selectOnClose: !1,
                  sorter: function (a) {
                    return a;
                  },
                  templateResult: function (a) {
                    return a.text;
                  },
                  templateSelection: function (a) {
                    return a.text;
                  },
                  theme: "default",
                  width: "resolve",
                };
              }),
              (D.prototype.set = function (b, c) {
                var d = a.camelCase(b),
                  e = {};
                e[d] = c;
                var f = j._convertData(e);
                a.extend(this.defaults, f);
              });
            var E = new D();
            return E;
          }
        ),
        b.define(
          "select2/options",
          ["require", "jquery", "./defaults", "./utils"],
          function (a, b, c, d) {
            function e(b, e) {
              if (
                ((this.options = b),
                null != e && this.fromElement(e),
                (this.options = c.apply(this.options)),
                e && e.is("input"))
              ) {
                var f = a(this.get("amdBase") + "compat/inputData");
                this.options.dataAdapter = d.Decorate(
                  this.options.dataAdapter,
                  f
                );
              }
            }
            return (
              (e.prototype.fromElement = function (a) {
                var c = ["select2"];
                null == this.options.multiple &&
                  (this.options.multiple = a.prop("multiple")),
                  null == this.options.disabled &&
                    (this.options.disabled = a.prop("disabled")),
                  null == this.options.language &&
                    (a.prop("lang")
                      ? (this.options.language = a.prop("lang").toLowerCase())
                      : a.closest("[lang]").prop("lang") &&
                        (this.options.language = a
                          .closest("[lang]")
                          .prop("lang"))),
                  null == this.options.dir &&
                    (a.prop("dir")
                      ? (this.options.dir = a.prop("dir"))
                      : a.closest("[dir]").prop("dir")
                      ? (this.options.dir = a.closest("[dir]").prop("dir"))
                      : (this.options.dir = "ltr")),
                  a.prop("disabled", this.options.disabled),
                  a.prop("multiple", this.options.multiple),
                  a.data("select2Tags") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        'Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'
                      ),
                    a.data("data", a.data("select2Tags")),
                    a.data("tags", !0)),
                  a.data("ajaxUrl") &&
                    (this.options.debug &&
                      window.console &&
                      console.warn &&
                      console.warn(
                        "Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."
                      ),
                    a.attr("ajax--url", a.data("ajaxUrl")),
                    a.data("ajax--url", a.data("ajaxUrl")));
                var e = {};
                e =
                  b.fn.jquery &&
                  "1." == b.fn.jquery.substr(0, 2) &&
                  a[0].dataset
                    ? b.extend(!0, {}, a[0].dataset, a.data())
                    : a.data();
                var f = b.extend(!0, {}, e);
                f = d._convertData(f);
                for (var g in f)
                  b.inArray(g, c) > -1 ||
                    (b.isPlainObject(this.options[g])
                      ? b.extend(this.options[g], f[g])
                      : (this.options[g] = f[g]));
                return this;
              }),
              (e.prototype.get = function (a) {
                return this.options[a];
              }),
              (e.prototype.set = function (a, b) {
                this.options[a] = b;
              }),
              e
            );
          }
        ),
        b.define(
          "select2/core",
          ["jquery", "./options", "./utils", "./keys"],
          function (a, b, c, d) {
            var e = function (a, c) {
              null != a.data("select2") && a.data("select2").destroy(),
                (this.$element = a),
                (this.id = this._generateId(a)),
                (c = c || {}),
                (this.options = new b(c, a)),
                e.__super__.constructor.call(this);
              var d = a.attr("tabindex") || 0;
              a.data("old-tabindex", d), a.attr("tabindex", "-1");
              var f = this.options.get("dataAdapter");
              this.dataAdapter = new f(a, this.options);
              var g = this.render();
              this._placeContainer(g);
              var h = this.options.get("selectionAdapter");
              (this.selection = new h(a, this.options)),
                (this.$selection = this.selection.render()),
                this.selection.position(this.$selection, g);
              var i = this.options.get("dropdownAdapter");
              (this.dropdown = new i(a, this.options)),
                (this.$dropdown = this.dropdown.render()),
                this.dropdown.position(this.$dropdown, g);
              var j = this.options.get("resultsAdapter");
              (this.results = new j(a, this.options, this.dataAdapter)),
                (this.$results = this.results.render()),
                this.results.position(this.$results, this.$dropdown);
              var k = this;
              this._bindAdapters(),
                this._registerDomEvents(),
                this._registerDataEvents(),
                this._registerSelectionEvents(),
                this._registerDropdownEvents(),
                this._registerResultsEvents(),
                this._registerEvents(),
                this.dataAdapter.current(function (a) {
                  k.trigger("selection:update", { data: a });
                }),
                a.addClass("select2-hidden-accessible"),
                a.attr("aria-hidden", "true"),
                this._syncAttributes(),
                a.data("select2", this);
            };
            return (
              c.Extend(e, c.Observable),
              (e.prototype._generateId = function (a) {
                var b = "";
                return (
                  (b =
                    null != a.attr("id")
                      ? a.attr("id")
                      : null != a.attr("name")
                      ? a.attr("name") + "-" + c.generateChars(2)
                      : c.generateChars(4)),
                  (b = b.replace(/(:|\.|\[|\]|,)/g, "")),
                  (b = "select2-" + b)
                );
              }),
              (e.prototype._placeContainer = function (a) {
                a.insertAfter(this.$element);
                var b = this._resolveWidth(
                  this.$element,
                  this.options.get("width")
                );
                null != b && a.css("width", b);
              }),
              (e.prototype._resolveWidth = function (a, b) {
                var c =
                  /^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;
                if ("resolve" == b) {
                  var d = this._resolveWidth(a, "style");
                  return null != d ? d : this._resolveWidth(a, "element");
                }
                if ("element" == b) {
                  var e = a.outerWidth(!1);
                  return 0 >= e ? "auto" : e + "px";
                }
                if ("style" == b) {
                  var f = a.attr("style");
                  if ("string" != typeof f) return null;
                  for (
                    var g = f.split(";"), h = 0, i = g.length;
                    i > h;
                    h += 1
                  ) {
                    var j = g[h].replace(/\s/g, ""),
                      k = j.match(c);
                    if (null !== k && k.length >= 1) return k[1];
                  }
                  return null;
                }
                return b;
              }),
              (e.prototype._bindAdapters = function () {
                this.dataAdapter.bind(this, this.$container),
                  this.selection.bind(this, this.$container),
                  this.dropdown.bind(this, this.$container),
                  this.results.bind(this, this.$container);
              }),
              (e.prototype._registerDomEvents = function () {
                var b = this;
                this.$element.on("change.select2", function () {
                  b.dataAdapter.current(function (a) {
                    b.trigger("selection:update", { data: a });
                  });
                }),
                  this.$element.on("focus.select2", function (a) {
                    b.trigger("focus", a);
                  }),
                  (this._syncA = c.bind(this._syncAttributes, this)),
                  (this._syncS = c.bind(this._syncSubtree, this)),
                  this.$element[0].attachEvent &&
                    this.$element[0].attachEvent(
                      "onpropertychange",
                      this._syncA
                    );
                var d =
                  window.MutationObserver ||
                  window.WebKitMutationObserver ||
                  window.MozMutationObserver;
                null != d
                  ? ((this._observer = new d(function (c) {
                      a.each(c, b._syncA), a.each(c, b._syncS);
                    })),
                    this._observer.observe(this.$element[0], {
                      attributes: !0,
                      childList: !0,
                      subtree: !1,
                    }))
                  : this.$element[0].addEventListener &&
                    (this.$element[0].addEventListener(
                      "DOMAttrModified",
                      b._syncA,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeInserted",
                      b._syncS,
                      !1
                    ),
                    this.$element[0].addEventListener(
                      "DOMNodeRemoved",
                      b._syncS,
                      !1
                    ));
              }),
              (e.prototype._registerDataEvents = function () {
                var a = this;
                this.dataAdapter.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerSelectionEvents = function () {
                var b = this,
                  c = ["toggle", "focus"];
                this.selection.on("toggle", function () {
                  b.toggleDropdown();
                }),
                  this.selection.on("focus", function (a) {
                    b.focus(a);
                  }),
                  this.selection.on("*", function (d, e) {
                    -1 === a.inArray(d, c) && b.trigger(d, e);
                  });
              }),
              (e.prototype._registerDropdownEvents = function () {
                var a = this;
                this.dropdown.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerResultsEvents = function () {
                var a = this;
                this.results.on("*", function (b, c) {
                  a.trigger(b, c);
                });
              }),
              (e.prototype._registerEvents = function () {
                var a = this;
                this.on("open", function () {
                  a.$container.addClass("select2-container--open");
                }),
                  this.on("close", function () {
                    a.$container.removeClass("select2-container--open");
                  }),
                  this.on("enable", function () {
                    a.$container.removeClass("select2-container--disabled");
                  }),
                  this.on("disable", function () {
                    a.$container.addClass("select2-container--disabled");
                  }),
                  this.on("blur", function () {
                    a.$container.removeClass("select2-container--focus");
                  }),
                  this.on("query", function (b) {
                    a.isOpen() || a.trigger("open", {}),
                      this.dataAdapter.query(b, function (c) {
                        a.trigger("results:all", { data: c, query: b });
                      });
                  }),
                  this.on("query:append", function (b) {
                    this.dataAdapter.query(b, function (c) {
                      a.trigger("results:append", { data: c, query: b });
                    });
                  }),
                  this.on("keypress", function (b) {
                    var c = b.which;
                    a.isOpen()
                      ? c === d.ESC || c === d.TAB || (c === d.UP && b.altKey)
                        ? (a.close(), b.preventDefault())
                        : c === d.ENTER
                        ? (a.trigger("results:select", {}), b.preventDefault())
                        : c === d.SPACE && b.ctrlKey
                        ? (a.trigger("results:toggle", {}), b.preventDefault())
                        : c === d.UP
                        ? (a.trigger("results:previous", {}),
                          b.preventDefault())
                        : c === d.DOWN &&
                          (a.trigger("results:next", {}), b.preventDefault())
                      : (c === d.ENTER ||
                          c === d.SPACE ||
                          (c === d.DOWN && b.altKey)) &&
                        (a.open(), b.preventDefault());
                  });
              }),
              (e.prototype._syncAttributes = function () {
                this.options.set("disabled", this.$element.prop("disabled")),
                  this.options.get("disabled")
                    ? (this.isOpen() && this.close(),
                      this.trigger("disable", {}))
                    : this.trigger("enable", {});
              }),
              (e.prototype._syncSubtree = function (a, b) {
                var c = !1,
                  d = this;
                if (
                  !a ||
                  !a.target ||
                  "OPTION" === a.target.nodeName ||
                  "OPTGROUP" === a.target.nodeName
                ) {
                  if (b)
                    if (b.addedNodes && b.addedNodes.length > 0)
                      for (var e = 0; e < b.addedNodes.length; e++) {
                        var f = b.addedNodes[e];
                        f.selected && (c = !0);
                      }
                    else
                      b.removedNodes && b.removedNodes.length > 0 && (c = !0);
                  else c = !0;
                  c &&
                    this.dataAdapter.current(function (a) {
                      d.trigger("selection:update", { data: a });
                    });
                }
              }),
              (e.prototype.trigger = function (a, b) {
                var c = e.__super__.trigger,
                  d = {
                    open: "opening",
                    close: "closing",
                    select: "selecting",
                    unselect: "unselecting",
                  };
                if ((void 0 === b && (b = {}), a in d)) {
                  var f = d[a],
                    g = { prevented: !1, name: a, args: b };
                  if ((c.call(this, f, g), g.prevented))
                    return void (b.prevented = !0);
                }
                c.call(this, a, b);
              }),
              (e.prototype.toggleDropdown = function () {
                this.options.get("disabled") ||
                  (this.isOpen() ? this.close() : this.open());
              }),
              (e.prototype.open = function () {
                this.isOpen() || this.trigger("query", {});
              }),
              (e.prototype.close = function () {
                this.isOpen() && this.trigger("close", {});
              }),
              (e.prototype.isOpen = function () {
                return this.$container.hasClass("select2-container--open");
              }),
              (e.prototype.hasFocus = function () {
                return this.$container.hasClass("select2-container--focus");
              }),
              (e.prototype.focus = function (a) {
                this.hasFocus() ||
                  (this.$container.addClass("select2-container--focus"),
                  this.trigger("focus", {}));
              }),
              (e.prototype.enable = function (a) {
                this.options.get("debug") &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'
                  ),
                  (null == a || 0 === a.length) && (a = [!0]);
                var b = !a[0];
                this.$element.prop("disabled", b);
              }),
              (e.prototype.data = function () {
                this.options.get("debug") &&
                  arguments.length > 0 &&
                  window.console &&
                  console.warn &&
                  console.warn(
                    'Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.'
                  );
                var a = [];
                return (
                  this.dataAdapter.current(function (b) {
                    a = b;
                  }),
                  a
                );
              }),
              (e.prototype.val = function (b) {
                if (
                  (this.options.get("debug") &&
                    window.console &&
                    console.warn &&
                    console.warn(
                      'Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'
                    ),
                  null == b || 0 === b.length)
                )
                  return this.$element.val();
                var c = b[0];
                a.isArray(c) &&
                  (c = a.map(c, function (a) {
                    return a.toString();
                  })),
                  this.$element.val(c).trigger("change");
              }),
              (e.prototype.destroy = function () {
                this.$container.remove(),
                  this.$element[0].detachEvent &&
                    this.$element[0].detachEvent(
                      "onpropertychange",
                      this._syncA
                    ),
                  null != this._observer
                    ? (this._observer.disconnect(), (this._observer = null))
                    : this.$element[0].removeEventListener &&
                      (this.$element[0].removeEventListener(
                        "DOMAttrModified",
                        this._syncA,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeInserted",
                        this._syncS,
                        !1
                      ),
                      this.$element[0].removeEventListener(
                        "DOMNodeRemoved",
                        this._syncS,
                        !1
                      )),
                  (this._syncA = null),
                  (this._syncS = null),
                  this.$element.off(".select2"),
                  this.$element.attr(
                    "tabindex",
                    this.$element.data("old-tabindex")
                  ),
                  this.$element.removeClass("select2-hidden-accessible"),
                  this.$element.attr("aria-hidden", "false"),
                  this.$element.removeData("select2"),
                  this.dataAdapter.destroy(),
                  this.selection.destroy(),
                  this.dropdown.destroy(),
                  this.results.destroy(),
                  (this.dataAdapter = null),
                  (this.selection = null),
                  (this.dropdown = null),
                  (this.results = null);
              }),
              (e.prototype.render = function () {
                var b = a(
                  '<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>'
                );
                return (
                  b.attr("dir", this.options.get("dir")),
                  (this.$container = b),
                  this.$container.addClass(
                    "select2-container--" + this.options.get("theme")
                  ),
                  b.data("element", this.$element),
                  b
                );
              }),
              e
            );
          }
        ),
        b.define("select2/compat/utils", ["jquery"], function (a) {
          function b(b, c, d) {
            var e,
              f,
              g = [];
            (e = a.trim(b.attr("class"))),
              e &&
                ((e = "" + e),
                a(e.split(/\s+/)).each(function () {
                  0 === this.indexOf("select2-") && g.push(this);
                })),
              (e = a.trim(c.attr("class"))),
              e &&
                ((e = "" + e),
                a(e.split(/\s+/)).each(function () {
                  0 !== this.indexOf("select2-") &&
                    ((f = d(this)), null != f && g.push(f));
                })),
              b.attr("class", g.join(" "));
          }
          return { syncCssClasses: b };
        }),
        b.define(
          "select2/compat/containerCss",
          ["jquery", "./utils"],
          function (a, b) {
            function c(a) {
              return null;
            }
            function d() {}
            return (
              (d.prototype.render = function (d) {
                var e = d.call(this),
                  f = this.options.get("containerCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptContainerCssClass");
                if (((g = g || c), -1 !== f.indexOf(":all:"))) {
                  f = f.replace(":all:", "");
                  var h = g;
                  g = function (a) {
                    var b = h(a);
                    return null != b ? b + " " + a : a;
                  };
                }
                var i = this.options.get("containerCss") || {};
                return (
                  a.isFunction(i) && (i = i(this.$element)),
                  b.syncCssClasses(e, this.$element, g),
                  e.css(i),
                  e.addClass(f),
                  e
                );
              }),
              d
            );
          }
        ),
        b.define(
          "select2/compat/dropdownCss",
          ["jquery", "./utils"],
          function (a, b) {
            function c(a) {
              return null;
            }
            function d() {}
            return (
              (d.prototype.render = function (d) {
                var e = d.call(this),
                  f = this.options.get("dropdownCssClass") || "";
                a.isFunction(f) && (f = f(this.$element));
                var g = this.options.get("adaptDropdownCssClass");
                if (((g = g || c), -1 !== f.indexOf(":all:"))) {
                  f = f.replace(":all:", "");
                  var h = g;
                  g = function (a) {
                    var b = h(a);
                    return null != b ? b + " " + a : a;
                  };
                }
                var i = this.options.get("dropdownCss") || {};
                return (
                  a.isFunction(i) && (i = i(this.$element)),
                  b.syncCssClasses(e, this.$element, g),
                  e.css(i),
                  e.addClass(f),
                  e
                );
              }),
              d
            );
          }
        ),
        b.define("select2/compat/initSelection", ["jquery"], function (a) {
          function b(a, b, c) {
            c.get("debug") &&
              window.console &&
              console.warn &&
              console.warn(
                "Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"
              ),
              (this.initSelection = c.get("initSelection")),
              (this._isInitialized = !1),
              a.call(this, b, c);
          }
          return (
            (b.prototype.current = function (b, c) {
              var d = this;
              return this._isInitialized
                ? void b.call(this, c)
                : void this.initSelection.call(
                    null,
                    this.$element,
                    function (b) {
                      (d._isInitialized = !0), a.isArray(b) || (b = [b]), c(b);
                    }
                  );
            }),
            b
          );
        }),
        b.define("select2/compat/inputData", ["jquery"], function (a) {
          function b(a, b, c) {
            (this._currentData = []),
              (this._valueSeparator = c.get("valueSeparator") || ","),
              "hidden" === b.prop("type") &&
                c.get("debug") &&
                console &&
                console.warn &&
                console.warn(
                  "Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."
                ),
              a.call(this, b, c);
          }
          return (
            (b.prototype.current = function (b, c) {
              function d(b, c) {
                var e = [];
                return (
                  b.selected || -1 !== a.inArray(b.id, c)
                    ? ((b.selected = !0), e.push(b))
                    : (b.selected = !1),
                  b.children && e.push.apply(e, d(b.children, c)),
                  e
                );
              }
              for (var e = [], f = 0; f < this._currentData.length; f++) {
                var g = this._currentData[f];
                e.push.apply(
                  e,
                  d(g, this.$element.val().split(this._valueSeparator))
                );
              }
              c(e);
            }),
            (b.prototype.select = function (b, c) {
              if (this.options.get("multiple")) {
                var d = this.$element.val();
                (d += this._valueSeparator + c.id),
                  this.$element.val(d),
                  this.$element.trigger("change");
              } else
                this.current(function (b) {
                  a.map(b, function (a) {
                    a.selected = !1;
                  });
                }),
                  this.$element.val(c.id),
                  this.$element.trigger("change");
            }),
            (b.prototype.unselect = function (a, b) {
              var c = this;
              (b.selected = !1),
                this.current(function (a) {
                  for (var d = [], e = 0; e < a.length; e++) {
                    var f = a[e];
                    b.id != f.id && d.push(f.id);
                  }
                  c.$element.val(d.join(c._valueSeparator)),
                    c.$element.trigger("change");
                });
            }),
            (b.prototype.query = function (a, b, c) {
              for (var d = [], e = 0; e < this._currentData.length; e++) {
                var f = this._currentData[e],
                  g = this.matches(b, f);
                null !== g && d.push(g);
              }
              c({ results: d });
            }),
            (b.prototype.addOptions = function (b, c) {
              var d = a.map(c, function (b) {
                return a.data(b[0], "data");
              });
              this._currentData.push.apply(this._currentData, d);
            }),
            b
          );
        }),
        b.define("select2/compat/matcher", ["jquery"], function (a) {
          function b(b) {
            function c(c, d) {
              var e = a.extend(!0, {}, d);
              if (null == c.term || "" === a.trim(c.term)) return e;
              if (d.children) {
                for (var f = d.children.length - 1; f >= 0; f--) {
                  var g = d.children[f],
                    h = b(c.term, g.text, g);
                  h || e.children.splice(f, 1);
                }
                if (e.children.length > 0) return e;
              }
              return b(c.term, d.text, d) ? e : null;
            }
            return c;
          }
          return b;
        }),
        b.define("select2/compat/query", [], function () {
          function a(a, b, c) {
            c.get("debug") &&
              window.console &&
              console.warn &&
              console.warn(
                "Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."
              ),
              a.call(this, b, c);
          }
          return (
            (a.prototype.query = function (a, b, c) {
              b.callback = c;
              var d = this.options.get("query");
              d.call(null, b);
            }),
            a
          );
        }),
        b.define("select2/dropdown/attachContainer", [], function () {
          function a(a, b, c) {
            a.call(this, b, c);
          }
          return (
            (a.prototype.position = function (a, b, c) {
              var d = c.find(".dropdown-wrapper");
              d.append(b),
                b.addClass("select2-dropdown--below"),
                c.addClass("select2-container--below");
            }),
            a
          );
        }),
        b.define("select2/dropdown/stopPropagation", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              a.call(this, b, c);
              var d = [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ];
              this.$dropdown.on(d.join(" "), function (a) {
                a.stopPropagation();
              });
            }),
            a
          );
        }),
        b.define("select2/selection/stopPropagation", [], function () {
          function a() {}
          return (
            (a.prototype.bind = function (a, b, c) {
              a.call(this, b, c);
              var d = [
                "blur",
                "change",
                "click",
                "dblclick",
                "focus",
                "focusin",
                "focusout",
                "input",
                "keydown",
                "keyup",
                "keypress",
                "mousedown",
                "mouseenter",
                "mouseleave",
                "mousemove",
                "mouseover",
                "mouseup",
                "search",
                "touchend",
                "touchstart",
              ];
              this.$selection.on(d.join(" "), function (a) {
                a.stopPropagation();
              });
            }),
            a
          );
        }),
        (function (c) {
          "function" == typeof b.define && b.define.amd
            ? b.define("jquery-mousewheel", ["jquery"], c)
            : "object" == typeof exports
            ? (module.exports = c)
            : c(a);
        })(function (a) {
          function b(b) {
            var g = b || window.event,
              h = i.call(arguments, 1),
              j = 0,
              l = 0,
              m = 0,
              n = 0,
              o = 0,
              p = 0;
            if (
              ((b = a.event.fix(g)),
              (b.type = "mousewheel"),
              "detail" in g && (m = -1 * g.detail),
              "wheelDelta" in g && (m = g.wheelDelta),
              "wheelDeltaY" in g && (m = g.wheelDeltaY),
              "wheelDeltaX" in g && (l = -1 * g.wheelDeltaX),
              "axis" in g &&
                g.axis === g.HORIZONTAL_AXIS &&
                ((l = -1 * m), (m = 0)),
              (j = 0 === m ? l : m),
              "deltaY" in g && ((m = -1 * g.deltaY), (j = m)),
              "deltaX" in g && ((l = g.deltaX), 0 === m && (j = -1 * l)),
              0 !== m || 0 !== l)
            ) {
              if (1 === g.deltaMode) {
                var q = a.data(this, "mousewheel-line-height");
                (j *= q), (m *= q), (l *= q);
              } else if (2 === g.deltaMode) {
                var r = a.data(this, "mousewheel-page-height");
                (j *= r), (m *= r), (l *= r);
              }
              if (
                ((n = Math.max(Math.abs(m), Math.abs(l))),
                (!f || f > n) && ((f = n), d(g, n) && (f /= 40)),
                d(g, n) && ((j /= 40), (l /= 40), (m /= 40)),
                (j = Math[j >= 1 ? "floor" : "ceil"](j / f)),
                (l = Math[l >= 1 ? "floor" : "ceil"](l / f)),
                (m = Math[m >= 1 ? "floor" : "ceil"](m / f)),
                k.settings.normalizeOffset && this.getBoundingClientRect)
              ) {
                var s = this.getBoundingClientRect();
                (o = b.clientX - s.left), (p = b.clientY - s.top);
              }
              return (
                (b.deltaX = l),
                (b.deltaY = m),
                (b.deltaFactor = f),
                (b.offsetX = o),
                (b.offsetY = p),
                (b.deltaMode = 0),
                h.unshift(b, j, l, m),
                e && clearTimeout(e),
                (e = setTimeout(c, 200)),
                (a.event.dispatch || a.event.handle).apply(this, h)
              );
            }
          }
          function c() {
            f = null;
          }
          function d(a, b) {
            return (
              k.settings.adjustOldDeltas &&
              "mousewheel" === a.type &&
              b % 120 === 0
            );
          }
          var e,
            f,
            g = [
              "wheel",
              "mousewheel",
              "DOMMouseScroll",
              "MozMousePixelScroll",
            ],
            h =
              "onwheel" in document || document.documentMode >= 9
                ? ["wheel"]
                : ["mousewheel", "DomMouseScroll", "MozMousePixelScroll"],
            i = Array.prototype.slice;
          if (a.event.fixHooks)
            for (var j = g.length; j; )
              a.event.fixHooks[g[--j]] = a.event.mouseHooks;
          var k = (a.event.special.mousewheel = {
            version: "3.1.12",
            setup: function () {
              if (this.addEventListener)
                for (var c = h.length; c; )
                  this.addEventListener(h[--c], b, !1);
              else this.onmousewheel = b;
              a.data(this, "mousewheel-line-height", k.getLineHeight(this)),
                a.data(this, "mousewheel-page-height", k.getPageHeight(this));
            },
            teardown: function () {
              if (this.removeEventListener)
                for (var c = h.length; c; )
                  this.removeEventListener(h[--c], b, !1);
              else this.onmousewheel = null;
              a.removeData(this, "mousewheel-line-height"),
                a.removeData(this, "mousewheel-page-height");
            },
            getLineHeight: function (b) {
              var c = a(b),
                d = c["offsetParent" in a.fn ? "offsetParent" : "parent"]();
              return (
                d.length || (d = a("body")),
                parseInt(d.css("fontSize"), 10) ||
                  parseInt(c.css("fontSize"), 10) ||
                  16
              );
            },
            getPageHeight: function (b) {
              return a(b).height();
            },
            settings: { adjustOldDeltas: !0, normalizeOffset: !0 },
          });
          a.fn.extend({
            mousewheel: function (a) {
              return a
                ? this.bind("mousewheel", a)
                : this.trigger("mousewheel");
            },
            unmousewheel: function (a) {
              return this.unbind("mousewheel", a);
            },
          });
        }),
        b.define(
          "jquery.select2",
          [
            "jquery",
            "jquery-mousewheel",
            "./select2/core",
            "./select2/defaults",
          ],
          function (a, b, c, d) {
            if (null == a.fn.select2) {
              var e = ["open", "close", "destroy"];
              a.fn.select2 = function (b) {
                if (((b = b || {}), "object" == typeof b))
                  return (
                    this.each(function () {
                      var d = a.extend(!0, {}, b);
                      new c(a(this), d);
                    }),
                    this
                  );
                if ("string" == typeof b) {
                  var d,
                    f = Array.prototype.slice.call(arguments, 1);
                  return (
                    this.each(function () {
                      var c = a(this).data("select2");
                      null == c &&
                        window.console &&
                        console.error &&
                        console.error(
                          "The select2('" +
                            b +
                            "') method was called on an element that is not using Select2."
                        ),
                        (d = c[b].apply(c, f));
                    }),
                    a.inArray(b, e) > -1 ? this : d
                  );
                }
                throw new Error("Invalid arguments for Select2: " + b);
              };
            }
            return (
              null == a.fn.select2.defaults && (a.fn.select2.defaults = d), c
            );
          }
        ),
        { define: b.define, require: b.require }
      );
    })(),
    c = b.require("jquery.select2");
  return (a.fn.select2.amd = b), c;
});

// 5. nicescroll
!(function (a) {
  "function" == typeof define && define.amd
    ? define(["jquery"], a)
    : "object" == typeof exports
    ? (module.exports = a(require("jquery")))
    : a(jQuery);
})(function (b) {
  "use strict";
  var l = !1,
    m = !1,
    n = 0,
    o = 2e3,
    p = 0,
    c = b,
    e = document,
    a = window,
    q = c(a),
    r = [],
    f =
      a.requestAnimationFrame ||
      a.webkitRequestAnimationFrame ||
      a.mozRequestAnimationFrame ||
      !1,
    g =
      a.cancelAnimationFrame ||
      a.webkitCancelAnimationFrame ||
      a.mozCancelAnimationFrame ||
      !1;
  if (f) a.cancelAnimationFrame || (g = function (a) {});
  else {
    var s = 0;
    (f = function (e, f) {
      var b = new Date().getTime(),
        c = Math.max(0, 16 - (b - s)),
        d = a.setTimeout(function () {
          e(b + c);
        }, c);
      return (s = b + c), d;
    }),
      (g = function (b) {
        a.clearTimeout(b);
      });
  }
  var d,
    h,
    i,
    t = a.MutationObserver || a.WebKitMutationObserver || !1,
    u =
      Date.now ||
      function () {
        return new Date().getTime();
      },
    k = {
      zindex: "auto",
      cursoropacitymin: 0,
      cursoropacitymax: 1,
      cursorcolor: "#F3794D",
      cursorwidth: "6px",
      cursorborder: "1px solid #fff",
      cursorborderradius: "5px",
      scrollspeed: 40,
      mousescrollstep: 27,
      touchbehavior: !1,
      emulatetouch: !1,
      hwacceleration: !0,
      usetransition: !0,
      boxzoom: !1,
      dblclickzoom: !0,
      gesturezoom: !0,
      grabcursorenabled: !0,
      autohidemode: !0,
      background: "",
      iframeautoresize: !0,
      cursorminheight: 32,
      preservenativescrolling: !0,
      railoffset: !1,
      railhoffset: !1,
      bouncescroll: !0,
      spacebarenabled: !0,
      railpadding: { top: 0, right: 0, left: 0, bottom: 0 },
      disableoutline: !0,
      horizrailenabled: !0,
      railalign: "right",
      railvalign: "bottom",
      enabletranslate3d: !0,
      enablemousewheel: !0,
      enablekeyboard: !0,
      smoothscroll: !0,
      sensitiverail: !0,
      enablemouselockapi: !0,
      cursorfixedheight: !1,
      directionlockdeadzone: 6,
      hidecursordelay: 400,
      nativeparentscrolling: !0,
      enablescrollonselection: !0,
      overflowx: !0,
      overflowy: !0,
      cursordragspeed: 0.3,
      rtlmode: "auto",
      cursordragontouch: !1,
      oneaxismousemode: "auto",
      scriptpath:
        (i = (h =
          e.currentScript ||
          (!!(d = e.getElementsByTagName("script")).length && d[d.length - 1]))
          ? h.src.split("?")[0]
          : "").split("/").length > 0
          ? i.split("/").slice(0, -1).join("/") + "/"
          : "",
      preventmultitouchscrolling: !0,
      disablemutationobserver: !1,
      enableobserver: !0,
      scrollbarid: !1,
    },
    v = !1,
    w = function () {
      if (v) return v;
      var d = e.createElement("DIV"),
        c = d.style,
        g = navigator.userAgent,
        f = navigator.platform,
        b = {};
      return (
        (b.haspointerlock =
          "pointerLockElement" in e ||
          "webkitPointerLockElement" in e ||
          "mozPointerLockElement" in e),
        (b.isopera = "opera" in a),
        (b.isopera12 = b.isopera && "getUserMedia" in navigator),
        (b.isoperamini =
          "[object OperaMini]" === Object.prototype.toString.call(a.operamini)),
        (b.isie = "all" in e && "attachEvent" in d && !b.isopera),
        (b.isieold = b.isie && !("msInterpolationMode" in c)),
        (b.isie7 =
          b.isie &&
          !b.isieold &&
          (!("documentMode" in e) || 7 === e.documentMode)),
        (b.isie8 = b.isie && "documentMode" in e && 8 === e.documentMode),
        (b.isie9 = b.isie && "performance" in a && 9 === e.documentMode),
        (b.isie10 = b.isie && "performance" in a && 10 === e.documentMode),
        (b.isie11 = "msRequestFullscreen" in d && e.documentMode >= 11),
        (b.ismsedge = "msCredentials" in a),
        (b.ismozilla = "MozAppearance" in c),
        (b.iswebkit = !b.ismsedge && "WebkitAppearance" in c),
        (b.ischrome = b.iswebkit && "chrome" in a),
        (b.ischrome38 = b.ischrome && "touchAction" in c),
        (b.ischrome22 = !b.ischrome38 && b.ischrome && b.haspointerlock),
        (b.ischrome26 = !b.ischrome38 && b.ischrome && "transition" in c),
        (b.cantouch =
          "ontouchstart" in e.documentElement || "ontouchstart" in a),
        (b.hasw3ctouch =
          !!a.PointerEvent &&
          (navigator.maxTouchPoints > 0 || navigator.msMaxTouchPoints > 0)),
        (b.hasmstouch = !b.hasw3ctouch && !!a.MSPointerEvent),
        (b.ismac = /^mac$/i.test(f)),
        (b.isios = b.cantouch && /iphone|ipad|ipod/i.test(f)),
        (b.isios4 = b.isios && !("seal" in Object)),
        (b.isios7 = b.isios && "webkitHidden" in e),
        (b.isios8 = b.isios && "hidden" in e),
        (b.isios10 = b.isios && a.Proxy),
        (b.isandroid = /android/i.test(g)),
        (b.haseventlistener = "addEventListener" in d),
        (b.trstyle = !1),
        (b.hastransform = !1),
        (b.hastranslate3d = !1),
        (b.transitionstyle = !1),
        (b.hastransition = !1),
        (b.transitionend = !1),
        (b.trstyle = "transform"),
        (b.hastransform =
          "transform" in c ||
          (function () {
            for (
              var d = [
                  "msTransform",
                  "webkitTransform",
                  "MozTransform",
                  "OTransform",
                ],
                a = 0,
                e = d.length;
              a < e;
              a++
            )
              if (void 0 !== c[d[a]]) {
                b.trstyle = d[a];
                break;
              }
            b.hastransform = !!b.trstyle;
          })()),
        b.hastransform &&
          ((c[b.trstyle] = "translate3d(1px,2px,3px)"),
          (b.hastranslate3d = /translate3d/.test(c[b.trstyle]))),
        (b.transitionstyle = "transition"),
        (b.prefixstyle = ""),
        (b.transitionend = "transitionend"),
        (b.hastransition =
          "transition" in c ||
          (function () {
            b.transitionend = !1;
            for (
              var d = [
                  "webkitTransition",
                  "msTransition",
                  "MozTransition",
                  "OTransition",
                  "OTransition",
                  "KhtmlTransition",
                ],
                e = ["-webkit-", "-ms-", "-moz-", "-o-", "-o", "-khtml-"],
                f = [
                  "webkitTransitionEnd",
                  "msTransitionEnd",
                  "transitionend",
                  "otransitionend",
                  "oTransitionEnd",
                  "KhtmlTransitionEnd",
                ],
                a = 0,
                g = d.length;
              a < g;
              a++
            )
              if (d[a] in c) {
                (b.transitionstyle = d[a]),
                  (b.prefixstyle = e[a]),
                  (b.transitionend = f[a]);
                break;
              }
            b.ischrome26 && (b.prefixstyle = e[1]),
              (b.hastransition = b.transitionstyle);
          })()),
        (b.cursorgrabvalue = (function () {
          var a = ["grab", "-webkit-grab", "-moz-grab"];
          ((b.ischrome && !b.ischrome38) || b.isie) && (a = []);
          for (var d = 0, f = a.length; d < f; d++) {
            var e = a[d];
            if (((c.cursor = e), c.cursor == e)) return e;
          }
          return "url(https://cdnjs.cloudflare.com/ajax/libs/slider-pro/1.3.0/css/images/openhand.cur),n-resize";
        })()),
        (b.hasmousecapture = "setCapture" in d),
        (b.hasMutationObserver = !1 !== t),
        (d = null),
        (v = b),
        b
      );
    },
    x = function (s, z) {
      function C() {
        var a = h.doc.css(d.trstyle);
        return (
          !(!a || "matrix" != a.substr(0, 6)) &&
          a
            .replace(/^.*\((.*)\)$/g, "$1")
            .replace(/px/g, "")
            .split(/, +/)
        );
      }
      function D(c, d, e) {
        var b = c.css(d),
          a = parseFloat(b);
        if (isNaN(a)) {
          var f =
            3 == (a = H[b] || 0)
              ? e
                ? h.win.outerHeight() - h.win.innerHeight()
                : h.win.outerWidth() - h.win.innerWidth()
              : 1;
          return h.isie8 && a && (a += 1), f ? a : 0;
        }
        return a;
      }
      function E(b, c, e, d) {
        h._bind(
          b,
          c,
          function (d) {
            var f = {
              original: (d = d || a.event),
              target: d.target || d.srcElement,
              type: "wheel",
              deltaMode: "MozMousePixelScroll" == d.type ? 0 : 1,
              deltaX: 0,
              deltaZ: 0,
              preventDefault: function () {
                return (
                  d.preventDefault ? d.preventDefault() : (d.returnValue = !1),
                  !1
                );
              },
              stopImmediatePropagation: function () {
                d.stopImmediatePropagation
                  ? d.stopImmediatePropagation()
                  : (d.cancelBubble = !0);
              },
            };
            return (
              "mousewheel" == c
                ? (d.wheelDeltaX && (f.deltaX = -0.025 * d.wheelDeltaX),
                  d.wheelDeltaY && (f.deltaY = -0.025 * d.wheelDeltaY),
                  f.deltaY || f.deltaX || (f.deltaY = -0.025 * d.wheelDelta))
                : (f.deltaY = d.detail),
              e.call(b, f)
            );
          },
          d
        );
      }
      function F(c, a, g, i) {
        h.scrollrunning ||
          ((h.newscrolly = h.getScrollTop()),
          (h.newscrollx = h.getScrollLeft()),
          (N = u()));
        var j = u() - N;
        if (
          ((N = u()),
          j > 350 ? (O = 1) : (O += (2 - O) / 10),
          (c = (c * O) | 0),
          (a = (a * O) | 0),
          c)
        ) {
          if (i) {
            if (c < 0) {
              if (h.getScrollLeft() >= h.page.maxw) return !0;
            } else if (0 >= h.getScrollLeft()) return !0;
          }
          var e = c > 0 ? 1 : -1;
          M !== e &&
            (h.scrollmom && h.scrollmom.stop(),
            (h.newscrollx = h.getScrollLeft()),
            (M = e)),
            (h.lastdeltax -= c);
        }
        if (a) {
          if (
            (function () {
              var b = h.getScrollTop();
              if (a < 0) {
                if (b >= h.page.maxh) return !0;
              } else if (b <= 0) return !0;
            })()
          ) {
            if (b.nativeparentscrolling && g && !h.ispage && !h.zoomactive)
              return !0;
            var d = h.view.h >> 1;
            h.newscrolly < -d
              ? ((h.newscrolly = -d), (a = -1))
              : h.newscrolly > h.page.maxh + d
              ? ((h.newscrolly = h.page.maxh + d), (a = 1))
              : (a = 0);
          }
          var f = a > 0 ? 1 : -1;
          L !== f &&
            (h.scrollmom && h.scrollmom.stop(),
            (h.newscrolly = h.getScrollTop()),
            (L = f)),
            (h.lastdeltay -= a);
        }
        (a || c) &&
          h.synched("relativexy", function () {
            var a = h.lastdeltay + h.newscrolly;
            h.lastdeltay = 0;
            var b = h.lastdeltax + h.newscrollx;
            (h.lastdeltax = 0), h.rail.drag || h.doScrollPos(b, a);
          });
      }
      function G(c, f, e) {
        var a, d;
        return (
          !(e || !P) ||
          (0 === c.deltaMode
            ? ((a = (-c.deltaX * (b.mousescrollstep / 54)) | 0),
              (d = (-c.deltaY * (b.mousescrollstep / 54)) | 0))
            : 1 === c.deltaMode &&
              ((a = ((-c.deltaX * b.mousescrollstep * 50) / 80) | 0),
              (d = ((-c.deltaY * b.mousescrollstep * 50) / 80) | 0)),
          f &&
            b.oneaxismousemode &&
            0 === a &&
            d &&
            ((a = d),
            (d = 0),
            e &&
              (a < 0
                ? h.getScrollLeft() >= h.page.maxw
                : 0 >= h.getScrollLeft()) &&
              ((d = a), (a = 0))),
          h.isrtlmode && (a = -a),
          F(a, d, e, !0)
            ? void (e && (P = !0))
            : ((P = !1), c.stopImmediatePropagation(), c.preventDefault()))
        );
      }
      var h = this;
      (this.version = "3.7.6"), (this.name = "nicescroll"), (this.me = z);
      var x = c("body"),
        b = (this.opt = { doc: x, win: !1 });
      if ((c.extend(b, k), (b.snapbackspeed = 80), s))
        for (var v in b) void 0 !== s[v] && (b[v] = s[v]);
      if (
        (b.disablemutationobserver && (t = !1),
        (this.doc = b.doc),
        (this.iddoc = (this.doc && this.doc[0] && this.doc[0].id) || ""),
        (this.ispage = /^BODY|HTML/.test(
          b.win ? b.win[0].nodeName : this.doc[0].nodeName
        )),
        (this.haswrapper = !1 !== b.win),
        (this.win = b.win || (this.ispage ? q : this.doc)),
        (this.docscroll = this.ispage && !this.haswrapper ? q : this.win),
        (this.body = x),
        (this.viewport = !1),
        (this.isfixed = !1),
        (this.iframe = !1),
        (this.isiframe =
          "IFRAME" == this.doc[0].nodeName && "IFRAME" == this.win[0].nodeName),
        (this.istextarea = "TEXTAREA" == this.win[0].nodeName),
        (this.forcescreen = !1),
        (this.canshowonmouseevent = "scroll" != b.autohidemode),
        (this.onmousedown = !1),
        (this.onmouseup = !1),
        (this.onmousemove = !1),
        (this.onmousewheel = !1),
        (this.onkeypress = !1),
        (this.ongesturezoom = !1),
        (this.onclick = !1),
        (this.onscrollstart = !1),
        (this.onscrollend = !1),
        (this.onscrollcancel = !1),
        (this.onzoomin = !1),
        (this.onzoomout = !1),
        (this.view = !1),
        (this.page = !1),
        (this.scroll = { x: 0, y: 0 }),
        (this.scrollratio = { x: 0, y: 0 }),
        (this.cursorheight = 20),
        (this.scrollvaluemax = 0),
        "auto" == b.rtlmode)
      ) {
        var j = this.win[0] == a ? this.body : this.win,
          i =
            j.css("writing-mode") ||
            j.css("-webkit-writing-mode") ||
            j.css("-ms-writing-mode") ||
            j.css("-moz-writing-mode");
        "horizontal-tb" == i || "lr-tb" == i || "" === i
          ? ((this.isrtlmode = "rtl" == j.css("direction")),
            (this.isvertical = !1))
          : ((this.isrtlmode =
              "vertical-rl" == i || "tb" == i || "tb-rl" == i || "rl-tb" == i),
            (this.isvertical =
              "vertical-rl" == i || "tb" == i || "tb-rl" == i));
      } else (this.isrtlmode = !0 === b.rtlmode), (this.isvertical = !1);
      if (
        ((this.scrollrunning = !1),
        (this.scrollmom = !1),
        (this.observer = !1),
        (this.observerremover = !1),
        (this.observerbody = !1),
        !1 !== b.scrollbarid)
      )
        this.id = b.scrollbarid;
      else
        do this.id = "ascrail" + o++;
        while (e.getElementById(this.id));
      (this.rail = !1),
        (this.cursor = !1),
        (this.cursorfreezed = !1),
        (this.selectiondrag = !1),
        (this.zoom = !1),
        (this.zoomactive = !1),
        (this.hasfocus = !1),
        (this.hasmousefocus = !1),
        (this.railslocked = !1),
        (this.locked = !1),
        (this.hidden = !1),
        (this.cursoractive = !0),
        (this.wheelprevented = !1),
        (this.overflowx = b.overflowx),
        (this.overflowy = b.overflowy),
        (this.nativescrollingarea = !1),
        (this.checkarea = 0),
        (this.events = []),
        (this.saved = {}),
        (this.delaylist = {}),
        (this.synclist = {}),
        (this.lastdeltax = 0),
        (this.lastdeltay = 0),
        (this.detected = w());
      var d = c.extend({}, this.detected);
      (this.canhwscroll = d.hastransform && b.hwacceleration),
        (this.ishwscroll = this.canhwscroll && h.haswrapper),
        this.isrtlmode
          ? this.isvertical
            ? (this.hasreversehr = !(d.iswebkit || d.isie || d.isie11))
            : (this.hasreversehr = !(
                d.iswebkit ||
                (d.isie && !d.isie10 && !d.isie11)
              ))
          : (this.hasreversehr = !1),
        (this.istouchcapable = !1),
        !d.cantouch && (d.hasw3ctouch || d.hasmstouch)
          ? (this.istouchcapable = !0)
          : d.cantouch &&
            !d.isios &&
            !d.isandroid &&
            (d.iswebkit || d.ismozilla) &&
            (this.istouchcapable = !0),
        b.enablemouselockapi ||
          ((d.hasmousecapture = !1), (d.haspointerlock = !1)),
        (this.debounced = function (a, b, c) {
          h &&
            (h.delaylist[a] ||
              ((h.delaylist[a] = {
                h: f(function () {
                  h.delaylist[a].fn.call(h), (h.delaylist[a] = !1);
                }, c),
              }),
              b.call(h)),
            (h.delaylist[a].fn = b));
        }),
        (this.synched = function (a, b) {
          h.synclist[a]
            ? (h.synclist[a] = b)
            : ((h.synclist[a] = b),
              f(function () {
                h &&
                  (h.synclist[a] && h.synclist[a].call(h),
                  (h.synclist[a] = null));
              }));
        }),
        (this.unsynched = function (a) {
          h.synclist[a] && (h.synclist[a] = !1);
        }),
        (this.css = function (b, c) {
          for (var a in c) h.saved.css.push([b, a, b.css(a)]), b.css(a, c[a]);
        }),
        (this.scrollTop = function (a) {
          return void 0 === a ? h.getScrollTop() : h.setScrollTop(a);
        }),
        (this.scrollLeft = function (a) {
          return void 0 === a ? h.getScrollLeft() : h.setScrollLeft(a);
        });
      var A = function (a, b, c, d, e, f, g) {
        (this.st = a),
          (this.ed = b),
          (this.spd = c),
          (this.p1 = d || 0),
          (this.p2 = e || 1),
          (this.p3 = f || 0),
          (this.p4 = g || 1),
          (this.ts = u()),
          (this.df = b - a);
      };
      if (
        ((A.prototype = {
          B2: function (a) {
            return 3 * (1 - a) * (1 - a) * a;
          },
          B3: function (a) {
            return 3 * (1 - a) * a * a;
          },
          B4: function (a) {
            return a * a * a;
          },
          getPos: function () {
            return (u() - this.ts) / this.spd;
          },
          getNow: function () {
            var a = (u() - this.ts) / this.spd,
              b = this.B2(a) + this.B3(a) + this.B4(a);
            return a >= 1 ? this.ed : (this.st + this.df * b) | 0;
          },
          update: function (a, b) {
            return (
              (this.st = this.getNow()),
              (this.ed = a),
              (this.spd = b),
              (this.ts = u()),
              (this.df = this.ed - this.st),
              this
            );
          },
        }),
        this.ishwscroll)
      ) {
        (this.doc.translate = { x: 0, y: 0, tx: "0px", ty: "0px" }),
          d.hastranslate3d &&
            d.isios &&
            this.doc.css("-webkit-backface-visibility", "hidden"),
          (this.getScrollTop = function (b) {
            if (!b) {
              var a = C();
              if (a) return 16 == a.length ? -a[13] : -a[5];
              if (h.timerscroll && h.timerscroll.bz)
                return h.timerscroll.bz.getNow();
            }
            return h.doc.translate.y;
          }),
          (this.getScrollLeft = function (b) {
            if (!b) {
              var a = C();
              if (a) return 16 == a.length ? -a[12] : -a[4];
              if (h.timerscroll && h.timerscroll.bh)
                return h.timerscroll.bh.getNow();
            }
            return h.doc.translate.x;
          }),
          (this.notifyScrollEvent = function (c) {
            var b = e.createEvent("UIEvents");
            b.initUIEvent("scroll", !1, !1, a, 1),
              (b.niceevent = !0),
              c.dispatchEvent(b);
          });
        var _ = this.isrtlmode ? 1 : -1;
        d.hastranslate3d && b.enabletranslate3d
          ? ((this.setScrollTop = function (a, b) {
              (h.doc.translate.y = a),
                (h.doc.translate.ty = -1 * a + "px"),
                h.doc.css(
                  d.trstyle,
                  "translate3d(" +
                    h.doc.translate.tx +
                    "," +
                    h.doc.translate.ty +
                    ",0)"
                ),
                b || h.notifyScrollEvent(h.win[0]);
            }),
            (this.setScrollLeft = function (a, b) {
              (h.doc.translate.x = a),
                (h.doc.translate.tx = a * _ + "px"),
                h.doc.css(
                  d.trstyle,
                  "translate3d(" +
                    h.doc.translate.tx +
                    "," +
                    h.doc.translate.ty +
                    ",0)"
                ),
                b || h.notifyScrollEvent(h.win[0]);
            }))
          : ((this.setScrollTop = function (a, b) {
              (h.doc.translate.y = a),
                (h.doc.translate.ty = -1 * a + "px"),
                h.doc.css(
                  d.trstyle,
                  "translate(" +
                    h.doc.translate.tx +
                    "," +
                    h.doc.translate.ty +
                    ")"
                ),
                b || h.notifyScrollEvent(h.win[0]);
            }),
            (this.setScrollLeft = function (a, b) {
              (h.doc.translate.x = a),
                (h.doc.translate.tx = a * _ + "px"),
                h.doc.css(
                  d.trstyle,
                  "translate(" +
                    h.doc.translate.tx +
                    "," +
                    h.doc.translate.ty +
                    ")"
                ),
                b || h.notifyScrollEvent(h.win[0]);
            }));
      } else
        (this.getScrollTop = function () {
          return h.docscroll.scrollTop();
        }),
          (this.setScrollTop = function (a) {
            h.docscroll.scrollTop(a);
          }),
          (this.getScrollLeft = function () {
            return h.hasreversehr
              ? h.detected.ismozilla
                ? h.page.maxw - Math.abs(h.docscroll.scrollLeft())
                : h.page.maxw - h.docscroll.scrollLeft()
              : h.docscroll.scrollLeft();
          }),
          (this.setScrollLeft = function (a) {
            return setTimeout(function () {
              if (h)
                return (
                  h.hasreversehr &&
                    (a = h.detected.ismozilla
                      ? -(h.page.maxw - a)
                      : h.page.maxw - a),
                  h.docscroll.scrollLeft(a)
                );
            }, 1);
          });
      (this.getTarget = function (a) {
        return !!a && (a.target ? a.target : !!a.srcElement && a.srcElement);
      }),
        (this.hasParent = function (b, c) {
          if (!b) return !1;
          for (var a = b.target || b.srcElement || b || !1; a && a.id != c; )
            a = a.parentNode || !1;
          return !1 !== a;
        });
      var H = { thin: 1, medium: 3, thick: 5 };
      (this.getDocumentScrollOffset = function () {
        return {
          top: a.pageYOffset || e.documentElement.scrollTop,
          left: a.pageXOffset || e.documentElement.scrollLeft,
        };
      }),
        (this.getOffset = function () {
          if (h.isfixed) {
            var a = h.win.offset(),
              c = h.getDocumentScrollOffset();
            return (a.top -= c.top), (a.left -= c.left), a;
          }
          var b = h.win.offset();
          if (!h.viewport) return b;
          var d = h.viewport.offset();
          return { top: b.top - d.top, left: b.left - d.left };
        }),
        (this.updateScrollBar = function (e) {
          var a, c;
          if (h.ishwscroll)
            h.rail.css({
              height:
                h.win.innerHeight() -
                (b.railpadding.top + b.railpadding.bottom),
            }),
              h.railh &&
                h.railh.css({
                  width:
                    h.win.innerWidth() -
                    (b.railpadding.left + b.railpadding.right),
                });
          else {
            var d = h.getOffset();
            if (
              ((a = {
                top: d.top,
                left: d.left - (b.railpadding.left + b.railpadding.right),
              }),
              (a.top += D(h.win, "border-top-width", !0)),
              (a.left += h.rail.align
                ? h.win.outerWidth() -
                  D(h.win, "border-right-width") -
                  h.rail.width
                : D(h.win, "border-left-width")),
              (c = b.railoffset) &&
                (c.top && (a.top += c.top), c.left && (a.left += c.left)),
              h.railslocked ||
                h.rail.css({
                  top: a.top,
                  left: a.left,
                  height:
                    (e ? e.h : h.win.innerHeight()) -
                    (b.railpadding.top + b.railpadding.bottom),
                }),
              h.zoom &&
                h.zoom.css({
                  top: a.top + 1,
                  left:
                    1 == h.rail.align ? a.left - 20 : a.left + h.rail.width + 4,
                }),
              h.railh && !h.railslocked)
            ) {
              (a = { top: d.top, left: d.left }),
                (c = b.railhoffset) &&
                  (c.top && (a.top += c.top), c.left && (a.left += c.left));
              var f = h.railh.align
                  ? a.top +
                    D(h.win, "border-top-width", !0) +
                    h.win.innerHeight() -
                    h.railh.height
                  : a.top + D(h.win, "border-top-width", !0),
                g = a.left + D(h.win, "border-left-width");
              h.railh.css({
                top: f - (b.railpadding.top + b.railpadding.bottom),
                left: g,
                width: h.railh.width,
              });
            }
          }
        }),
        (this.doRailClick = function (a, i, b) {
          var c, f, d, g;
          h.railslocked ||
            (h.cancelEvent(a),
            "pageY" in a ||
              ((a.pageX = a.clientX + e.documentElement.scrollLeft),
              (a.pageY = a.clientY + e.documentElement.scrollTop)),
            i
              ? ((c = b ? h.doScrollLeft : h.doScrollTop),
                (d = b
                  ? (a.pageX - h.railh.offset().left - h.cursorwidth / 2) *
                    h.scrollratio.x
                  : (a.pageY - h.rail.offset().top - h.cursorheight / 2) *
                    h.scrollratio.y),
                h.unsynched("relativexy"),
                c(0 | d))
              : ((c = b ? h.doScrollLeftBy : h.doScrollBy),
                (d = b ? h.scroll.x : h.scroll.y),
                (g = b
                  ? a.pageX - h.railh.offset().left
                  : a.pageY - h.rail.offset().top),
                (f = b ? h.view.w : h.view.h),
                c(d >= g ? f : -f)));
        }),
        (h.newscrolly = h.newscrollx = 0),
        (h.hasanimationframe = "requestAnimationFrame" in a),
        (h.hascancelanimationframe = "cancelAnimationFrame" in a),
        (h.hasborderbox = !1),
        (this.init = function () {
          if (
            ((h.saved.css = []),
            d.isoperamini || (d.isandroid && !("hidden" in e)))
          )
            return !0;
          (b.emulatetouch = b.emulatetouch || b.touchbehavior),
            (h.hasborderbox =
              a.getComputedStyle &&
              "border-box" === a.getComputedStyle(e.body)["box-sizing"]);
          var r = { "overflow-y": "hidden" };
          if (
            ((d.isie11 || d.isie10) && (r["-ms-overflow-style"] = "none"),
            h.ishwscroll &&
              (this.doc.css(
                d.transitionstyle,
                d.prefixstyle + "transform 0ms ease-out"
              ),
              d.transitionend &&
                h.bind(h.doc, d.transitionend, h.onScrollTransitionEnd, !1)),
            (h.zindex = "auto"),
            h.ispage || "auto" != b.zindex
              ? (h.zindex = b.zindex)
              : (h.zindex =
                  (function () {
                    var a = h.win;
                    if ("zIndex" in a) return a.zIndex();
                    for (; a.length > 0 && 9 != a[0].nodeType; ) {
                      var b = a.css("zIndex");
                      if (!isNaN(b) && 0 !== b) return parseInt(b);
                      a = a.parent();
                    }
                    return !1;
                  })() || "auto"),
            !h.ispage && "auto" != h.zindex && h.zindex > p && (p = h.zindex),
            h.isie &&
              0 === h.zindex &&
              "auto" == b.zindex &&
              (h.zindex = "auto"),
            !h.ispage || !d.isieold)
          ) {
            var g,
              s = h.docscroll;
            h.ispage && (s = h.haswrapper ? h.win : h.doc),
              h.css(s, r),
              h.ispage && (d.isie11 || d.isie) && h.css(c("html"), r),
              !d.isios ||
                h.ispage ||
                h.haswrapper ||
                h.css(x, { "-webkit-overflow-scrolling": "touch" });
            var i = c(e.createElement("div"));
            i.css({
              position: "relative",
              top: 0,
              float: "right",
              width: b.cursorwidth,
              height: 0,
              "background-color": b.cursorcolor,
              border: b.cursorborder,
              "background-clip": "padding-box",
              "-webkit-border-radius": b.cursorborderradius,
              "-moz-border-radius": b.cursorborderradius,
              "border-radius": b.cursorborderradius,
            }),
              i.addClass("nicescroll-cursors"),
              (h.cursor = i);
            var f = c(e.createElement("div"));
            f.attr("id", h.id),
              f.addClass("nicescroll-rails nicescroll-rails-vr");
            var w,
              u,
              z = ["left", "right", "top", "bottom"];
            for (var A in z)
              (u = z[A]),
                (w = b.railpadding[u] || 0) && f.css("padding-" + u, w + "px");
            f.append(i),
              (f.width = Math.max(parseFloat(b.cursorwidth), i.outerWidth())),
              f.css({
                width: f.width + "px",
                zIndex: h.zindex,
                background: b.background,
                cursor: "default",
              }),
              (f.visibility = !0),
              (f.scrollable = !0),
              (f.align = "left" == b.railalign ? 0 : 1),
              (h.rail = f),
              (h.rail.drag = !1);
            var j = !1;
            if (
              (!b.boxzoom ||
                h.ispage ||
                d.isieold ||
                ((j = e.createElement("div")),
                h.bind(j, "click", h.doZoom),
                h.bind(j, "mouseenter", function () {
                  h.zoom.css("opacity", b.cursoropacitymax);
                }),
                h.bind(j, "mouseleave", function () {
                  h.zoom.css("opacity", b.cursoropacitymin);
                }),
                (h.zoom = c(j)),
                h.zoom.css({
                  cursor: "pointer",
                  zIndex: h.zindex,
                  height: 18,
                  width: 18,
                  backgroundPosition: "0 0",
                }),
                b.dblclickzoom && h.bind(h.win, "dblclick", h.doZoom),
                d.cantouch &&
                  b.gesturezoom &&
                  ((h.ongesturezoom = function (a) {
                    return (
                      a.scale > 1.5 && h.doZoomIn(a),
                      a.scale < 0.8 && h.doZoomOut(a),
                      h.cancelEvent(a)
                    );
                  }),
                  h.bind(h.win, "gestureend", h.ongesturezoom))),
              (h.railh = !1),
              b.horizrailenabled &&
                (h.css(s, { overflowX: "hidden" }),
                (i = c(e.createElement("div"))).css({
                  position: "absolute",
                  top: 0,
                  height: b.cursorwidth,
                  width: 0,
                  backgroundColor: b.cursorcolor,
                  border: b.cursorborder,
                  backgroundClip: "padding-box",
                  "-webkit-border-radius": b.cursorborderradius,
                  "-moz-border-radius": b.cursorborderradius,
                  "border-radius": b.cursorborderradius,
                }),
                d.isieold && i.css("overflow", "hidden"),
                i.addClass("nicescroll-cursors"),
                (h.cursorh = i),
                (g = c(e.createElement("div"))).attr("id", h.id + "-hr"),
                g.addClass("nicescroll-rails nicescroll-rails-hr"),
                (g.height = Math.max(
                  parseFloat(b.cursorwidth),
                  i.outerHeight()
                )),
                g.css({
                  height: g.height + "px",
                  zIndex: h.zindex,
                  background: b.background,
                }),
                g.append(i),
                (g.visibility = !0),
                (g.scrollable = !0),
                (g.align = "top" == b.railvalign ? 0 : 1),
                (h.railh = g),
                (h.railh.drag = !1)),
              h.ispage)
            )
              f.css({ position: "fixed", top: 0, height: "100%" }),
                f.css(f.align ? { right: 0 } : { left: 0 }),
                h.body.append(f),
                h.railh &&
                  (g.css({ position: "fixed", left: 0, width: "100%" }),
                  g.css(g.align ? { bottom: 0 } : { top: 0 }),
                  h.body.append(g));
            else {
              if (h.ishwscroll) {
                "static" == h.win.css("position") &&
                  h.css(h.win, { position: "relative" });
                var o = "HTML" == h.win[0].nodeName ? h.body : h.win;
                c(o).scrollTop(0).scrollLeft(0),
                  h.zoom &&
                    (h.zoom.css({
                      position: "absolute",
                      top: 1,
                      right: 0,
                      "margin-right": f.width + 4,
                    }),
                    o.append(h.zoom)),
                  f.css({ position: "absolute", top: 0 }),
                  f.css(f.align ? { right: 0 } : { left: 0 }),
                  o.append(f),
                  g &&
                    (g.css({ position: "absolute", left: 0, bottom: 0 }),
                    g.css(g.align ? { bottom: 0 } : { top: 0 }),
                    o.append(g));
              } else {
                h.isfixed = "fixed" == h.win.css("position");
                var v = h.isfixed ? "fixed" : "absolute";
                h.isfixed || (h.viewport = h.getViewport(h.win[0])),
                  h.viewport &&
                    ((h.body = h.viewport),
                    /fixed|absolute/.test(h.viewport.css("position")) ||
                      h.css(h.viewport, { position: "relative" })),
                  f.css({ position: v }),
                  h.zoom && h.zoom.css({ position: v }),
                  h.updateScrollBar(),
                  h.body.append(f),
                  h.zoom && h.body.append(h.zoom),
                  h.railh && (g.css({ position: v }), h.body.append(g));
              }
              d.isios &&
                h.css(h.win, {
                  "-webkit-tap-highlight-color": "rgba(0,0,0,0)",
                  "-webkit-touch-callout": "none",
                }),
                b.disableoutline &&
                  (d.isie && h.win.attr("hideFocus", "true"),
                  d.iswebkit && h.win.css("outline", "none"));
            }
            if (
              (!1 === b.autohidemode
                ? ((h.autohidedom = !1),
                  h.rail.css({ opacity: b.cursoropacitymax }),
                  h.railh && h.railh.css({ opacity: b.cursoropacitymax }))
                : !0 === b.autohidemode || "leave" === b.autohidemode
                ? ((h.autohidedom = c().add(h.rail)),
                  d.isie8 && (h.autohidedom = h.autohidedom.add(h.cursor)),
                  h.railh && (h.autohidedom = h.autohidedom.add(h.railh)),
                  h.railh &&
                    d.isie8 &&
                    (h.autohidedom = h.autohidedom.add(h.cursorh)))
                : "scroll" == b.autohidemode
                ? ((h.autohidedom = c().add(h.rail)),
                  h.railh && (h.autohidedom = h.autohidedom.add(h.railh)))
                : "cursor" == b.autohidemode
                ? ((h.autohidedom = c().add(h.cursor)),
                  h.railh && (h.autohidedom = h.autohidedom.add(h.cursorh)))
                : "hidden" == b.autohidemode &&
                  ((h.autohidedom = !1), h.hide(), (h.railslocked = !1)),
              d.cantouch || h.istouchcapable || b.emulatetouch || d.hasmstouch)
            ) {
              (h.scrollmom = new y(h)),
                (h.ontouchstart = function (a) {
                  if (
                    h.locked ||
                    (a.pointerType &&
                      ("mouse" === a.pointerType ||
                        a.pointerType === a.MSPOINTER_TYPE_MOUSE))
                  )
                    return !1;
                  if (
                    ((h.hasmoving = !1),
                    h.scrollmom.timer &&
                      (h.triggerScrollEnd(), h.scrollmom.stop()),
                    !h.railslocked)
                  ) {
                    var e = h.getTarget(a);
                    if (e && /INPUT/i.test(e.nodeName) && /range/i.test(e.type))
                      return h.stopPropagation(a);
                    var k = "mousedown" === a.type;
                    if (
                      (!("clientX" in a) &&
                        "changedTouches" in a &&
                        ((a.clientX = a.changedTouches[0].clientX),
                        (a.clientY = a.changedTouches[0].clientY)),
                      h.forcescreen)
                    ) {
                      var f = a;
                      ((a = { original: a.original ? a.original : a }).clientX =
                        f.screenX),
                        (a.clientY = f.screenY);
                    }
                    if (
                      ((h.rail.drag = {
                        x: a.clientX,
                        y: a.clientY,
                        sx: h.scroll.x,
                        sy: h.scroll.y,
                        st: h.getScrollTop(),
                        sl: h.getScrollLeft(),
                        pt: 2,
                        dl: !1,
                        tg: e,
                      }),
                      h.ispage || !b.directionlockdeadzone)
                    )
                      h.rail.drag.dl = "f";
                    else {
                      var g = { w: q.width(), h: q.height() },
                        i = h.getContentSize(),
                        l = i.h - g.h,
                        m = i.w - g.w;
                      h.rail.scrollable && !h.railh.scrollable
                        ? (h.rail.drag.ck = l > 0 && "v")
                        : !h.rail.scrollable && h.railh.scrollable
                        ? (h.rail.drag.ck = m > 0 && "h")
                        : (h.rail.drag.ck = !1);
                    }
                    if (b.emulatetouch && h.isiframe && d.isie) {
                      var j = h.win.position();
                      (h.rail.drag.x += j.left), (h.rail.drag.y += j.top);
                    }
                    if (
                      ((h.hasmoving = !1),
                      (h.lastmouseup = !1),
                      h.scrollmom.reset(a.clientX, a.clientY),
                      e && k)
                    ) {
                      if (!/INPUT|SELECT|BUTTON|TEXTAREA/i.test(e.nodeName))
                        return (
                          d.hasmousecapture && e.setCapture(),
                          b.emulatetouch
                            ? (e.onclick &&
                                !e._onclick &&
                                ((e._onclick = e.onclick),
                                (e.onclick = function (a) {
                                  if (h.hasmoving) return !1;
                                  e._onclick.call(this, a);
                                })),
                              h.cancelEvent(a))
                            : h.stopPropagation(a)
                        );
                      /SUBMIT|CANCEL|BUTTON/i.test(c(e).attr("type")) &&
                        (h.preventclick = { tg: e, click: !1 });
                    }
                  }
                }),
                (h.ontouchend = function (a) {
                  if (!h.rail.drag) return !0;
                  if (2 == h.rail.drag.pt) {
                    if (
                      a.pointerType &&
                      ("mouse" === a.pointerType ||
                        a.pointerType === a.MSPOINTER_TYPE_MOUSE)
                    )
                      return !1;
                    h.rail.drag = !1;
                    var b = "mouseup" === a.type;
                    if (
                      h.hasmoving &&
                      (h.scrollmom.doMomentum(),
                      (h.lastmouseup = !0),
                      h.hideCursor(),
                      d.hasmousecapture && e.releaseCapture(),
                      b)
                    )
                      return h.cancelEvent(a);
                  } else if (1 == h.rail.drag.pt) return h.onmouseup(a);
                });
              var C = b.emulatetouch && h.isiframe && !d.hasmousecapture,
                D = (0.3 * b.directionlockdeadzone) | 0;
              (h.ontouchmove = function (a, r) {
                if (
                  !h.rail.drag ||
                  (a.targetTouches &&
                    b.preventmultitouchscrolling &&
                    a.targetTouches.length > 1) ||
                  (a.pointerType &&
                    ("mouse" === a.pointerType ||
                      a.pointerType === a.MSPOINTER_TYPE_MOUSE))
                )
                  return !0;
                if (2 == h.rail.drag.pt) {
                  if (
                    ("changedTouches" in a &&
                      ((a.clientX = a.changedTouches[0].clientX),
                      (a.clientY = a.changedTouches[0].clientY)),
                    (o = n = 0),
                    C && !r)
                  ) {
                    var n,
                      o,
                      p = h.win.position();
                    (o = -p.left), (n = -p.top);
                  }
                  var k = a.clientY + n,
                    q = k - h.rail.drag.y,
                    l = a.clientX + o,
                    m = l - h.rail.drag.x,
                    f = h.rail.drag.st - q;
                  if (h.ishwscroll && b.bouncescroll)
                    f < 0
                      ? (f = Math.round(f / 2))
                      : f > h.page.maxh &&
                        (f = h.page.maxh + Math.round((f - h.page.maxh) / 2));
                  else if (
                    (f < 0
                      ? ((f = 0), (k = 0))
                      : f > h.page.maxh && ((f = h.page.maxh), (k = 0)),
                    0 === k && !h.hasmoving)
                  )
                    return h.ispage || (h.rail.drag = !1), !0;
                  var c = h.getScrollLeft();
                  if (
                    (h.railh &&
                      h.railh.scrollable &&
                      ((c = h.isrtlmode
                        ? m - h.rail.drag.sl
                        : h.rail.drag.sl - m),
                      h.ishwscroll && b.bouncescroll
                        ? c < 0
                          ? (c = Math.round(c / 2))
                          : c > h.page.maxw &&
                            (c =
                              h.page.maxw + Math.round((c - h.page.maxw) / 2))
                        : (c < 0 && ((c = 0), (l = 0)),
                          c > h.page.maxw && ((c = h.page.maxw), (l = 0)))),
                    !h.hasmoving)
                  ) {
                    if (
                      h.rail.drag.y === a.clientY &&
                      h.rail.drag.x === a.clientX
                    )
                      return h.cancelEvent(a);
                    var i = Math.abs(q),
                      j = Math.abs(m),
                      g = b.directionlockdeadzone;
                    if (
                      (h.rail.drag.ck
                        ? "v" == h.rail.drag.ck
                          ? j > g && i <= D
                            ? (h.rail.drag = !1)
                            : i > g && (h.rail.drag.dl = "v")
                          : "h" == h.rail.drag.ck &&
                            (i > g && j <= D
                              ? (h.rail.drag = !1)
                              : j > g && (h.rail.drag.dl = "h"))
                        : i > g && j > g
                        ? (h.rail.drag.dl = "f")
                        : i > g
                        ? (h.rail.drag.dl = j > D ? "f" : "v")
                        : j > g && (h.rail.drag.dl = i > D ? "f" : "h"),
                      !h.rail.drag.dl)
                    )
                      return h.cancelEvent(a);
                    h.triggerScrollStart(a.clientX, a.clientY, 0, 0, 0),
                      (h.hasmoving = !0);
                  }
                  return (
                    h.preventclick &&
                      !h.preventclick.click &&
                      ((h.preventclick.click = h.preventclick.tg.onclick || !1),
                      (h.preventclick.tg.onclick = h.onpreventclick)),
                    h.rail.drag.dl &&
                      ("v" == h.rail.drag.dl
                        ? (c = h.rail.drag.sl)
                        : "h" == h.rail.drag.dl && (f = h.rail.drag.st)),
                    h.synched("touchmove", function () {
                      h.rail.drag &&
                        2 == h.rail.drag.pt &&
                        (h.prepareTransition && h.resetTransition(),
                        h.rail.scrollable && h.setScrollTop(f),
                        h.scrollmom.update(l, k),
                        h.railh && h.railh.scrollable
                          ? (h.setScrollLeft(c), h.showCursor(f, c))
                          : h.showCursor(f),
                        d.isie10 && e.selection.clear());
                    }),
                    h.cancelEvent(a)
                  );
                }
                return 1 == h.rail.drag.pt ? h.onmousemove(a) : void 0;
              }),
                (h.ontouchstartCursor = function (a, b) {
                  if (!h.rail.drag || 3 == h.rail.drag.pt) {
                    if (h.locked) return h.cancelEvent(a);
                    h.cancelScroll(),
                      (h.rail.drag = {
                        x: a.touches[0].clientX,
                        y: a.touches[0].clientY,
                        sx: h.scroll.x,
                        sy: h.scroll.y,
                        pt: 3,
                        hr: !!b,
                      });
                    var c = h.getTarget(a);
                    return (
                      !h.ispage && d.hasmousecapture && c.setCapture(),
                      h.isiframe &&
                        !d.hasmousecapture &&
                        ((h.saved.csspointerevents =
                          h.doc.css("pointer-events")),
                        h.css(h.doc, { "pointer-events": "none" })),
                      h.cancelEvent(a)
                    );
                  }
                }),
                (h.ontouchendCursor = function (a) {
                  if (
                    h.rail.drag &&
                    (d.hasmousecapture && e.releaseCapture(),
                    h.isiframe &&
                      !d.hasmousecapture &&
                      h.doc.css("pointer-events", h.saved.csspointerevents),
                    3 == h.rail.drag.pt)
                  )
                    return (h.rail.drag = !1), h.cancelEvent(a);
                }),
                (h.ontouchmoveCursor = function (a) {
                  if (h.rail.drag && 3 == h.rail.drag.pt) {
                    if (((h.cursorfreezed = !0), h.rail.drag.hr)) {
                      (h.scroll.x =
                        h.rail.drag.sx +
                        (a.touches[0].clientX - h.rail.drag.x)),
                        h.scroll.x < 0 && (h.scroll.x = 0);
                      var c = h.scrollvaluemaxw;
                      h.scroll.x > c && (h.scroll.x = c);
                    } else {
                      (h.scroll.y =
                        h.rail.drag.sy +
                        (a.touches[0].clientY - h.rail.drag.y)),
                        h.scroll.y < 0 && (h.scroll.y = 0);
                      var d = h.scrollvaluemax;
                      h.scroll.y > d && (h.scroll.y = d);
                    }
                    return (
                      h.synched("touchmove", function () {
                        h.rail.drag &&
                          3 == h.rail.drag.pt &&
                          (h.showCursor(),
                          h.rail.drag.hr
                            ? h.doScrollLeft(
                                Math.round(h.scroll.x * h.scrollratio.x),
                                b.cursordragspeed
                              )
                            : h.doScrollTop(
                                Math.round(h.scroll.y * h.scrollratio.y),
                                b.cursordragspeed
                              ));
                      }),
                      h.cancelEvent(a)
                    );
                  }
                });
            }
            if (
              ((h.onmousedown = function (a, b) {
                if (!h.rail.drag || 1 == h.rail.drag.pt) {
                  if (h.railslocked) return h.cancelEvent(a);
                  h.cancelScroll(),
                    (h.rail.drag = {
                      x: a.clientX,
                      y: a.clientY,
                      sx: h.scroll.x,
                      sy: h.scroll.y,
                      pt: 1,
                      hr: b || !1,
                    });
                  var c = h.getTarget(a);
                  return (
                    d.hasmousecapture && c.setCapture(),
                    h.isiframe &&
                      !d.hasmousecapture &&
                      ((h.saved.csspointerevents = h.doc.css("pointer-events")),
                      h.css(h.doc, { "pointer-events": "none" })),
                    (h.hasmoving = !1),
                    h.cancelEvent(a)
                  );
                }
              }),
              (h.onmouseup = function (a) {
                if (h.rail.drag)
                  return (
                    1 != h.rail.drag.pt ||
                    (d.hasmousecapture && e.releaseCapture(),
                    h.isiframe &&
                      !d.hasmousecapture &&
                      h.doc.css("pointer-events", h.saved.csspointerevents),
                    (h.rail.drag = !1),
                    (h.cursorfreezed = !1),
                    h.hasmoving && h.triggerScrollEnd(),
                    h.cancelEvent(a))
                  );
              }),
              (h.onmousemove = function (a) {
                if (h.rail.drag) {
                  if (1 !== h.rail.drag.pt) return;
                  if (d.ischrome && 0 === a.which) return h.onmouseup(a);
                  if (
                    ((h.cursorfreezed = !0),
                    h.hasmoving ||
                      h.triggerScrollStart(a.clientX, a.clientY, 0, 0, 0),
                    (h.hasmoving = !0),
                    h.rail.drag.hr)
                  ) {
                    (h.scroll.x = h.rail.drag.sx + (a.clientX - h.rail.drag.x)),
                      h.scroll.x < 0 && (h.scroll.x = 0);
                    var b = h.scrollvaluemaxw;
                    h.scroll.x > b && (h.scroll.x = b);
                  } else {
                    (h.scroll.y = h.rail.drag.sy + (a.clientY - h.rail.drag.y)),
                      h.scroll.y < 0 && (h.scroll.y = 0);
                    var c = h.scrollvaluemax;
                    h.scroll.y > c && (h.scroll.y = c);
                  }
                  return (
                    h.synched("mousemove", function () {
                      h.cursorfreezed &&
                        (h.showCursor(),
                        h.rail.drag.hr
                          ? h.scrollLeft(
                              Math.round(h.scroll.x * h.scrollratio.x)
                            )
                          : h.scrollTop(
                              Math.round(h.scroll.y * h.scrollratio.y)
                            ));
                    }),
                    h.cancelEvent(a)
                  );
                }
                h.checkarea = 0;
              }),
              d.cantouch || b.emulatetouch)
            )
              (h.onpreventclick = function (a) {
                if (h.preventclick)
                  return (
                    (h.preventclick.tg.onclick = h.preventclick.click),
                    (h.preventclick = !1),
                    h.cancelEvent(a)
                  );
              }),
                (h.onclick =
                  !d.isios &&
                  function (a) {
                    return (
                      !h.lastmouseup || ((h.lastmouseup = !1), h.cancelEvent(a))
                    );
                  }),
                b.grabcursorenabled &&
                  d.cursorgrabvalue &&
                  (h.css(h.ispage ? h.doc : h.win, {
                    cursor: d.cursorgrabvalue,
                  }),
                  h.css(h.rail, { cursor: d.cursorgrabvalue }));
            else {
              var E = function (c) {
                if (h.selectiondrag) {
                  if (c) {
                    var b = h.win.outerHeight(),
                      a = c.pageY - h.selectiondrag.top;
                    a > 0 && a < b && (a = 0),
                      a >= b && (a -= b),
                      (h.selectiondrag.df = a);
                  }
                  if (0 !== h.selectiondrag.df) {
                    var d = ((-2 * h.selectiondrag.df) / 6) | 0;
                    h.doScrollBy(d),
                      h.debounced(
                        "doselectionscroll",
                        function () {
                          E();
                        },
                        50
                      );
                  }
                }
              };
              (h.hasTextSelected =
                "getSelection" in e
                  ? function () {
                      return e.getSelection().rangeCount > 0;
                    }
                  : "selection" in e
                  ? function () {
                      return "None" != e.selection.type;
                    }
                  : function () {
                      return !1;
                    }),
                (h.onselectionstart = function (a) {
                  h.ispage || (h.selectiondrag = h.win.offset());
                }),
                (h.onselectionend = function (a) {
                  h.selectiondrag = !1;
                }),
                (h.onselectiondrag = function (a) {
                  h.selectiondrag &&
                    h.hasTextSelected() &&
                    h.debounced(
                      "selectionscroll",
                      function () {
                        E(a);
                      },
                      250
                    );
                });
            }
            if (
              (d.hasw3ctouch
                ? (h.css(h.ispage ? c("html") : h.win, {
                    "touch-action": "none",
                  }),
                  h.css(h.rail, { "touch-action": "none" }),
                  h.css(h.cursor, { "touch-action": "none" }),
                  h.bind(h.win, "pointerdown", h.ontouchstart),
                  h.bind(e, "pointerup", h.ontouchend),
                  h.delegate(e, "pointermove", h.ontouchmove))
                : d.hasmstouch
                ? (h.css(h.ispage ? c("html") : h.win, {
                    "-ms-touch-action": "none",
                  }),
                  h.css(h.rail, { "-ms-touch-action": "none" }),
                  h.css(h.cursor, { "-ms-touch-action": "none" }),
                  h.bind(h.win, "MSPointerDown", h.ontouchstart),
                  h.bind(e, "MSPointerUp", h.ontouchend),
                  h.delegate(e, "MSPointerMove", h.ontouchmove),
                  h.bind(h.cursor, "MSGestureHold", function (a) {
                    a.preventDefault();
                  }),
                  h.bind(h.cursor, "contextmenu", function (a) {
                    a.preventDefault();
                  }))
                : d.cantouch &&
                  (h.bind(h.win, "touchstart", h.ontouchstart, !1, !0),
                  h.bind(e, "touchend", h.ontouchend, !1, !0),
                  h.bind(e, "touchcancel", h.ontouchend, !1, !0),
                  h.delegate(e, "touchmove", h.ontouchmove, !1, !0)),
              b.emulatetouch &&
                (h.bind(h.win, "mousedown", h.ontouchstart, !1, !0),
                h.bind(e, "mouseup", h.ontouchend, !1, !0),
                h.bind(e, "mousemove", h.ontouchmove, !1, !0)),
              (b.cursordragontouch || (!d.cantouch && !b.emulatetouch)) &&
                (h.rail.css({ cursor: "default" }),
                h.railh && h.railh.css({ cursor: "default" }),
                h.jqbind(h.rail, "mouseenter", function () {
                  if (!h.ispage && !h.win.is(":visible")) return !1;
                  h.canshowonmouseevent && h.showCursor(), (h.rail.active = !0);
                }),
                h.jqbind(h.rail, "mouseleave", function () {
                  (h.rail.active = !1), h.rail.drag || h.hideCursor();
                }),
                b.sensitiverail &&
                  (h.bind(h.rail, "click", function (a) {
                    h.doRailClick(a, !1, !1);
                  }),
                  h.bind(h.rail, "dblclick", function (a) {
                    h.doRailClick(a, !0, !1);
                  }),
                  h.bind(h.cursor, "click", function (a) {
                    h.cancelEvent(a);
                  }),
                  h.bind(h.cursor, "dblclick", function (a) {
                    h.cancelEvent(a);
                  })),
                h.railh &&
                  (h.jqbind(h.railh, "mouseenter", function () {
                    if (!h.ispage && !h.win.is(":visible")) return !1;
                    h.canshowonmouseevent && h.showCursor(),
                      (h.rail.active = !0);
                  }),
                  h.jqbind(h.railh, "mouseleave", function () {
                    (h.rail.active = !1), h.rail.drag || h.hideCursor();
                  }),
                  b.sensitiverail &&
                    (h.bind(h.railh, "click", function (a) {
                      h.doRailClick(a, !1, !0);
                    }),
                    h.bind(h.railh, "dblclick", function (a) {
                      h.doRailClick(a, !0, !0);
                    }),
                    h.bind(h.cursorh, "click", function (a) {
                      h.cancelEvent(a);
                    }),
                    h.bind(h.cursorh, "dblclick", function (a) {
                      h.cancelEvent(a);
                    })))),
              b.cursordragontouch &&
                (this.istouchcapable || d.cantouch) &&
                (h.bind(h.cursor, "touchstart", h.ontouchstartCursor),
                h.bind(h.cursor, "touchmove", h.ontouchmoveCursor),
                h.bind(h.cursor, "touchend", h.ontouchendCursor),
                h.cursorh &&
                  h.bind(h.cursorh, "touchstart", function (a) {
                    h.ontouchstartCursor(a, !0);
                  }),
                h.cursorh &&
                  h.bind(h.cursorh, "touchmove", h.ontouchmoveCursor),
                h.cursorh && h.bind(h.cursorh, "touchend", h.ontouchendCursor)),
              b.emulatetouch || d.isandroid || d.isios
                ? (h.bind(
                    d.hasmousecapture ? h.win : e,
                    "mouseup",
                    h.ontouchend
                  ),
                  h.onclick && h.bind(e, "click", h.onclick),
                  b.cursordragontouch
                    ? (h.bind(h.cursor, "mousedown", h.onmousedown),
                      h.bind(h.cursor, "mouseup", h.onmouseup),
                      h.cursorh &&
                        h.bind(h.cursorh, "mousedown", function (a) {
                          h.onmousedown(a, !0);
                        }),
                      h.cursorh && h.bind(h.cursorh, "mouseup", h.onmouseup))
                    : (h.bind(h.rail, "mousedown", function (a) {
                        a.preventDefault();
                      }),
                      h.railh &&
                        h.bind(h.railh, "mousedown", function (a) {
                          a.preventDefault();
                        })))
                : (h.bind(
                    d.hasmousecapture ? h.win : e,
                    "mouseup",
                    h.onmouseup
                  ),
                  h.bind(e, "mousemove", h.onmousemove),
                  h.onclick && h.bind(e, "click", h.onclick),
                  h.bind(h.cursor, "mousedown", h.onmousedown),
                  h.bind(h.cursor, "mouseup", h.onmouseup),
                  h.railh &&
                    (h.bind(h.cursorh, "mousedown", function (a) {
                      h.onmousedown(a, !0);
                    }),
                    h.bind(h.cursorh, "mouseup", h.onmouseup)),
                  !h.ispage &&
                    b.enablescrollonselection &&
                    (h.bind(h.win[0], "mousedown", h.onselectionstart),
                    h.bind(e, "mouseup", h.onselectionend),
                    h.bind(h.cursor, "mouseup", h.onselectionend),
                    h.cursorh && h.bind(h.cursorh, "mouseup", h.onselectionend),
                    h.bind(e, "mousemove", h.onselectiondrag)),
                  h.zoom &&
                    (h.jqbind(h.zoom, "mouseenter", function () {
                      h.canshowonmouseevent && h.showCursor(),
                        (h.rail.active = !0);
                    }),
                    h.jqbind(h.zoom, "mouseleave", function () {
                      (h.rail.active = !1), h.rail.drag || h.hideCursor();
                    }))),
              b.enablemousewheel &&
                (h.isiframe ||
                  h.mousewheel(d.isie && h.ispage ? e : h.win, h.onmousewheel),
                h.mousewheel(h.rail, h.onmousewheel),
                h.railh && h.mousewheel(h.railh, h.onmousewheelhr)),
              h.ispage ||
                d.cantouch ||
                /HTML|^BODY/.test(h.win[0].nodeName) ||
                (h.win.attr("tabindex") || h.win.attr({ tabindex: ++n }),
                h.bind(h.win, "focus", function (a) {
                  (l = h.getTarget(a).id || h.getTarget(a) || !1),
                    (h.hasfocus = !0),
                    h.canshowonmouseevent && h.noticeCursor();
                }),
                h.bind(h.win, "blur", function (a) {
                  (l = !1), (h.hasfocus = !1);
                }),
                h.bind(h.win, "mouseenter", function (a) {
                  (m = h.getTarget(a).id || h.getTarget(a) || !1),
                    (h.hasmousefocus = !0),
                    h.canshowonmouseevent && h.noticeCursor();
                }),
                h.bind(h.win, "mouseleave", function (a) {
                  (m = !1),
                    (h.hasmousefocus = !1),
                    h.rail.drag || h.hideCursor();
                })),
              (h.onkeypress = function (e) {
                if (h.railslocked && 0 === h.page.maxh) return !0;
                e = e || a.event;
                var f = h.getTarget(e);
                if (
                  (f &&
                    /INPUT|TEXTAREA|SELECT|OPTION/.test(f.nodeName) &&
                    (!(f.getAttribute("type") || f.type) ||
                      !/submit|button|cancel/i.tp)) ||
                  c(f).attr("contenteditable")
                )
                  return !0;
                if (
                  h.hasfocus ||
                  (h.hasmousefocus && !l) ||
                  (h.ispage && !l && !m)
                ) {
                  var i = e.keyCode;
                  if (h.railslocked && 27 != i) return h.cancelEvent(e);
                  var g = e.ctrlKey || !1,
                    j = e.shiftKey || !1,
                    d = !1;
                  switch (i) {
                    case 38:
                    case 63233:
                      h.doScrollBy(72), (d = !0);
                      break;
                    case 40:
                    case 63235:
                      h.doScrollBy(-72), (d = !0);
                      break;
                    case 37:
                    case 63232:
                      h.railh &&
                        (g ? h.doScrollLeft(0) : h.doScrollLeftBy(72),
                        (d = !0));
                      break;
                    case 39:
                    case 63234:
                      h.railh &&
                        (g
                          ? h.doScrollLeft(h.page.maxw)
                          : h.doScrollLeftBy(-72),
                        (d = !0));
                      break;
                    case 33:
                    case 63276:
                      h.doScrollBy(h.view.h), (d = !0);
                      break;
                    case 34:
                    case 63277:
                      h.doScrollBy(-h.view.h), (d = !0);
                      break;
                    case 36:
                    case 63273:
                      h.railh && g ? h.doScrollPos(0, 0) : h.doScrollTo(0),
                        (d = !0);
                      break;
                    case 35:
                    case 63275:
                      h.railh && g
                        ? h.doScrollPos(h.page.maxw, h.page.maxh)
                        : h.doScrollTo(h.page.maxh),
                        (d = !0);
                      break;
                    case 32:
                      b.spacebarenabled &&
                        (j ? h.doScrollBy(h.view.h) : h.doScrollBy(-h.view.h),
                        (d = !0));
                      break;
                    case 27:
                      h.zoomactive && (h.doZoom(), (d = !0));
                  }
                  if (d) return h.cancelEvent(e);
                }
              }),
              b.enablekeyboard &&
                h.bind(
                  e,
                  d.isopera && !d.isopera12 ? "keypress" : "keydown",
                  h.onkeypress
                ),
              h.bind(e, "keydown", function (a) {
                a.ctrlKey && (h.wheelprevented = !0);
              }),
              h.bind(e, "keyup", function (a) {
                a.ctrlKey || (h.wheelprevented = !1);
              }),
              h.bind(a, "blur", function (a) {
                h.wheelprevented = !1;
              }),
              h.bind(a, "resize", h.onscreenresize),
              h.bind(a, "orientationchange", h.onscreenresize),
              h.bind(a, "load", h.lazyResize),
              d.ischrome && !h.ispage && !h.haswrapper)
            ) {
              var F = h.win.attr("style"),
                B = parseFloat(h.win.css("width")) + 1;
              h.win.css("width", B),
                h.synched("chromefix", function () {
                  h.win.attr("style", F);
                });
            }
            if (
              ((h.onAttributeChange = function (a) {
                h.lazyResize(h.isieold ? 250 : 30);
              }),
              b.enableobserver &&
                (h.isie11 ||
                  !1 === t ||
                  ((h.observerbody = new t(function (a) {
                    if (
                      (a.forEach(function (a) {
                        if ("attributes" == a.type)
                          return x.hasClass("modal-open") &&
                            x.hasClass("modal-dialog") &&
                            !c.contains(c(".modal-dialog")[0], h.doc[0])
                            ? h.hide()
                            : h.show();
                      }),
                      h.me.clientWidth != h.page.width ||
                        h.me.clientHeight != h.page.height)
                    )
                      return h.lazyResize(30);
                  })),
                  h.observerbody.observe(e.body, {
                    childList: !0,
                    subtree: !0,
                    characterData: !1,
                    attributes: !0,
                    attributeFilter: ["class"],
                  })),
                !h.ispage && !h.haswrapper))
            ) {
              var k = h.win[0];
              !1 !== t
                ? ((h.observer = new t(function (a) {
                    a.forEach(h.onAttributeChange);
                  })),
                  h.observer.observe(k, {
                    childList: !0,
                    characterData: !1,
                    attributes: !0,
                    subtree: !1,
                  }),
                  (h.observerremover = new t(function (a) {
                    a.forEach(function (a) {
                      if (a.removedNodes.length > 0) {
                        for (var b in a.removedNodes)
                          if (h && a.removedNodes[b] === k) return h.remove();
                      }
                    });
                  })),
                  h.observerremover.observe(k.parentNode, {
                    childList: !0,
                    characterData: !1,
                    attributes: !1,
                    subtree: !1,
                  }))
                : (h.bind(
                    k,
                    d.isie && !d.isie9 ? "propertychange" : "DOMAttrModified",
                    h.onAttributeChange
                  ),
                  d.isie9 &&
                    k.attachEvent("onpropertychange", h.onAttributeChange),
                  h.bind(k, "DOMNodeRemoved", function (a) {
                    a.target === k && h.remove();
                  }));
            }
            !h.ispage && b.boxzoom && h.bind(a, "resize", h.resizeZoom),
              h.istextarea &&
                (h.bind(h.win, "keydown", h.lazyResize),
                h.bind(h.win, "mouseup", h.lazyResize)),
              h.lazyResize(30);
          }
          if ("IFRAME" == this.doc[0].nodeName) {
            var _ = function () {
              h.iframexd = !1;
              try {
                (e =
                  "contentDocument" in this
                    ? this.contentDocument
                    : this.contentWindow._doc).domain;
              } catch (g) {
                (h.iframexd = !0), (e = !1);
              }
              if (h.iframexd)
                return (
                  "console" in a &&
                    console.log("NiceScroll error: policy restriced iframe"),
                  !0
                );
              if (
                ((h.forcescreen = !0),
                h.isiframe &&
                  ((h.iframe = {
                    doc: c(e),
                    html: h.doc.contents().find("html")[0],
                    body: h.doc.contents().find("body")[0],
                  }),
                  (h.getContentSize = function () {
                    return {
                      w: Math.max(
                        h.iframe.html.scrollWidth,
                        h.iframe.body.scrollWidth
                      ),
                      h: Math.max(
                        h.iframe.html.scrollHeight,
                        h.iframe.body.scrollHeight
                      ),
                    };
                  }),
                  (h.docscroll = c(h.iframe.body))),
                !d.isios && b.iframeautoresize && !h.isiframe)
              ) {
                h.win.scrollTop(0), h.doc.height("");
                var e,
                  f = Math.max(
                    e.getElementsByTagName("html")[0].scrollHeight,
                    e.body.scrollHeight
                  );
                h.doc.height(f);
              }
              h.lazyResize(30),
                h.css(c(h.iframe.body), r),
                d.isios &&
                  h.haswrapper &&
                  h.css(c(e.body), {
                    "-webkit-transform": "translate3d(0,0,0)",
                  }),
                "contentWindow" in this
                  ? h.bind(this.contentWindow, "scroll", h.onscroll)
                  : h.bind(e, "scroll", h.onscroll),
                b.enablemousewheel && h.mousewheel(e, h.onmousewheel),
                b.enablekeyboard &&
                  h.bind(e, d.isopera ? "keypress" : "keydown", h.onkeypress),
                d.cantouch
                  ? (h.bind(e, "touchstart", h.ontouchstart),
                    h.bind(e, "touchmove", h.ontouchmove))
                  : b.emulatetouch &&
                    (h.bind(e, "mousedown", h.ontouchstart),
                    h.bind(e, "mousemove", function (a) {
                      return h.ontouchmove(a, !0);
                    }),
                    b.grabcursorenabled &&
                      d.cursorgrabvalue &&
                      h.css(c(e.body), { cursor: d.cursorgrabvalue })),
                h.bind(e, "mouseup", h.ontouchend),
                h.zoom &&
                  (b.dblclickzoom && h.bind(e, "dblclick", h.doZoom),
                  h.ongesturezoom && h.bind(e, "gestureend", h.ongesturezoom));
            };
            this.doc[0].readyState &&
              "complete" === this.doc[0].readyState &&
              setTimeout(function () {
                _.call(h.doc[0], !1);
              }, 500),
              h.bind(this.doc, "load", _);
          }
        }),
        (this.showCursor = function (a, c) {
          if (
            (h.cursortimeout &&
              (clearTimeout(h.cursortimeout), (h.cursortimeout = 0)),
            h.rail)
          ) {
            if (
              (h.autohidedom &&
                (h.autohidedom.stop().css({ opacity: b.cursoropacitymax }),
                (h.cursoractive = !0)),
              (h.rail.drag && 1 == h.rail.drag.pt) ||
                (void 0 !== a &&
                  !1 !== a &&
                  (h.scroll.y = (a / h.scrollratio.y) | 0),
                void 0 !== c && (h.scroll.x = (c / h.scrollratio.x) | 0)),
              h.cursor.css({ height: h.cursorheight, top: h.scroll.y }),
              h.cursorh)
            ) {
              var d = h.hasreversehr
                ? h.scrollvaluemaxw - h.scroll.x
                : h.scroll.x;
              h.cursorh.css({
                width: h.cursorwidth,
                left: !h.rail.align && h.rail.visibility ? d + h.rail.width : d,
              }),
                (h.cursoractive = !0);
            }
            h.zoom && h.zoom.stop().css({ opacity: b.cursoropacitymax });
          }
        }),
        (this.hideCursor = function (a) {
          h.cursortimeout ||
            (h.rail &&
              h.autohidedom &&
              ((h.hasmousefocus && "leave" === b.autohidemode) ||
                (h.cursortimeout = setTimeout(function () {
                  (h.rail.active && h.showonmouseevent) ||
                    (h.autohidedom
                      .stop()
                      .animate({ opacity: b.cursoropacitymin }),
                    h.zoom &&
                      h.zoom.stop().animate({ opacity: b.cursoropacitymin }),
                    (h.cursoractive = !1)),
                    (h.cursortimeout = 0);
                }, a || b.hidecursordelay))));
        }),
        (this.noticeCursor = function (a, b, c) {
          h.showCursor(b, c), h.rail.active || h.hideCursor(a);
        }),
        (this.getContentSize = h.ispage
          ? function () {
              return {
                w: Math.max(e.body.scrollWidth, e.documentElement.scrollWidth),
                h: Math.max(
                  e.body.scrollHeight,
                  e.documentElement.scrollHeight
                ),
              };
            }
          : h.haswrapper
          ? function () {
              return { w: h.doc[0].offsetWidth, h: h.doc[0].offsetHeight };
            }
          : function () {
              return {
                w: h.docscroll[0].scrollWidth,
                h: h.docscroll[0].scrollHeight,
              };
            }),
        (this.onResize = function (j, d) {
          if (!h || !h.win) return !1;
          var e = h.page.maxh,
            f = h.page.maxw,
            g = h.view.h,
            i = h.view.w;
          if (
            ((h.view = {
              w: h.ispage ? h.win.width() : h.win[0].clientWidth,
              h: h.ispage ? h.win.height() : h.win[0].clientHeight,
            }),
            (h.page = d || h.getContentSize()),
            (h.page.maxh = Math.max(0, h.page.h - h.view.h)),
            (h.page.maxw = Math.max(0, h.page.w - h.view.w)),
            h.page.maxh == e &&
              h.page.maxw == f &&
              h.view.w == i &&
              h.view.h == g)
          ) {
            if (h.ispage) return h;
            var a = h.win.offset();
            if (h.lastposition) {
              var c = h.lastposition;
              if (c.top == a.top && c.left == a.left) return h;
            }
            h.lastposition = a;
          }
          return (
            0 === h.page.maxh
              ? (h.hideRail(),
                (h.scrollvaluemax = 0),
                (h.scroll.y = 0),
                (h.scrollratio.y = 0),
                (h.cursorheight = 0),
                h.setScrollTop(0),
                h.rail && (h.rail.scrollable = !1))
              : ((h.page.maxh -= b.railpadding.top + b.railpadding.bottom),
                (h.rail.scrollable = !0)),
            0 === h.page.maxw
              ? (h.hideRailHr(),
                (h.scrollvaluemaxw = 0),
                (h.scroll.x = 0),
                (h.scrollratio.x = 0),
                (h.cursorwidth = 0),
                h.setScrollLeft(0),
                h.railh && (h.railh.scrollable = !1))
              : ((h.page.maxw -= b.railpadding.left + b.railpadding.right),
                h.railh && (h.railh.scrollable = b.horizrailenabled)),
            (h.railslocked =
              h.locked || (0 === h.page.maxh && 0 === h.page.maxw)),
            h.railslocked
              ? (h.ispage || h.updateScrollBar(h.view), !1)
              : (h.hidden ||
                  (h.rail.visibility || h.showRail(),
                  h.railh && !h.railh.visibility && h.showRailHr()),
                h.istextarea &&
                  h.win.css("resize") &&
                  "none" != h.win.css("resize") &&
                  (h.view.h -= 20),
                (h.cursorheight = Math.min(
                  h.view.h,
                  Math.round(h.view.h * (h.view.h / h.page.h))
                )),
                (h.cursorheight = b.cursorfixedheight
                  ? b.cursorfixedheight
                  : Math.max(b.cursorminheight, h.cursorheight)),
                (h.cursorwidth = Math.min(
                  h.view.w,
                  Math.round(h.view.w * (h.view.w / h.page.w))
                )),
                (h.cursorwidth = b.cursorfixedheight
                  ? b.cursorfixedheight
                  : Math.max(b.cursorminheight, h.cursorwidth)),
                (h.scrollvaluemax =
                  h.view.h -
                  h.cursorheight -
                  (b.railpadding.top + b.railpadding.bottom)),
                h.hasborderbox ||
                  (h.scrollvaluemax -=
                    h.cursor[0].offsetHeight - h.cursor[0].clientHeight),
                h.railh &&
                  ((h.railh.width =
                    h.page.maxh > 0 ? h.view.w - h.rail.width : h.view.w),
                  (h.scrollvaluemaxw =
                    h.railh.width -
                    h.cursorwidth -
                    (b.railpadding.left + b.railpadding.right))),
                h.ispage || h.updateScrollBar(h.view),
                (h.scrollratio = {
                  x: h.page.maxw / h.scrollvaluemaxw,
                  y: h.page.maxh / h.scrollvaluemax,
                }),
                h.getScrollTop() > h.page.maxh
                  ? h.doScrollTop(h.page.maxh)
                  : ((h.scroll.y = (h.getScrollTop() / h.scrollratio.y) | 0),
                    (h.scroll.x = (h.getScrollLeft() / h.scrollratio.x) | 0),
                    h.cursoractive && h.noticeCursor()),
                h.scroll.y &&
                  0 === h.getScrollTop() &&
                  h.doScrollTo((h.scroll.y * h.scrollratio.y) | 0),
                h)
          );
        }),
        (this.resize = h.onResize);
      var I = 0;
      (this.onscreenresize = function (b) {
        clearTimeout(I);
        var a = !h.ispage && !h.haswrapper;
        a && h.hideRails(),
          (I = setTimeout(function () {
            h && (a && h.showRails(), h.resize()), (I = 0);
          }, 120));
      }),
        (this.lazyResize = function (a) {
          return (
            clearTimeout(I),
            (a = isNaN(a) ? 240 : a),
            (I = setTimeout(function () {
              h && h.resize(), (I = 0);
            }, a)),
            h
          );
        }),
        (this.jqbind = function (a, b, d) {
          h.events.push({ e: a, n: b, f: d, q: !0 }), c(a).on(b, d);
        }),
        (this.mousewheel = function (a, b, c) {
          var d = "jquery" in a ? a[0] : a;
          if ("onwheel" in e.createElement("div"))
            h._bind(d, "wheel", b, c || !1);
          else {
            var f = void 0 !== e.onmousewheel ? "mousewheel" : "DOMMouseScroll";
            E(d, f, b, c || !1),
              "DOMMouseScroll" == f && E(d, "MozMousePixelScroll", b, c || !1);
          }
        });
      var J = !1;
      if (d.haseventlistener) {
        try {
          var B = Object.defineProperty({}, "passive", {
            get: function () {
              J = !0;
            },
          });
          a.addEventListener("test", null, B);
        } catch (K) {}
        (this.stopPropagation = function (a) {
          return (
            !!a && ((a = a.original ? a.original : a).stopPropagation(), !1)
          );
        }),
          (this.cancelEvent = function (a) {
            return (
              a.cancelable && a.preventDefault(),
              a.stopImmediatePropagation(),
              a.preventManipulation && a.preventManipulation(),
              !1
            );
          });
      } else
        (Event.prototype.preventDefault = function () {
          this.returnValue = !1;
        }),
          (Event.prototype.stopPropagation = function () {
            this.cancelBubble = !0;
          }),
          (a.constructor.prototype.addEventListener =
            e.constructor.prototype.addEventListener =
            Element.prototype.addEventListener =
              function (a, b, c) {
                this.attachEvent("on" + a, b);
              }),
          (a.constructor.prototype.removeEventListener =
            e.constructor.prototype.removeEventListener =
            Element.prototype.removeEventListener =
              function (a, b, c) {
                this.detachEvent("on" + a, b);
              }),
          (this.cancelEvent = function (b) {
            return (
              (b = b || a.event) &&
                ((b.cancelBubble = !0), (b.cancel = !0), (b.returnValue = !1)),
              !1
            );
          }),
          (this.stopPropagation = function (b) {
            return (b = b || a.event) && (b.cancelBubble = !0), !1;
          });
      (this.delegate = function (d, b, c, e, f) {
        var a = r[b] || !1;
        a ||
          ((a = {
            a: [],
            l: [],
            f: function (c) {
              for (var d = a.l, e = !1, b = d.length - 1; b >= 0; b--)
                if (!1 === (e = d[b].call(c.target, c))) return !1;
              return e;
            },
          }),
          h.bind(d, b, a.f, e, f),
          (r[b] = a)),
          h.ispage
            ? ((a.a = [h.id].concat(a.a)), (a.l = [c].concat(a.l)))
            : (a.a.push(h.id), a.l.push(c));
      }),
        (this.undelegate = function (d, c, f, g, i) {
          var a = r[c] || !1;
          if (a && a.l)
            for (var b = 0, e = a.l.length; b < e; b++)
              a.a[b] === h.id &&
                (a.a.splice(b),
                a.l.splice(b),
                0 === a.a.length && (h._unbind(d, c, a.l.f), (r[c] = null)));
        }),
        (this.bind = function (a, b, c, d, e) {
          var f = "jquery" in a ? a[0] : a;
          h._bind(f, b, c, d || !1, e || !1);
        }),
        (this._bind = function (a, b, c, d, e) {
          h.events.push({ e: a, n: b, f: c, b: d, q: !1 }),
            J && e
              ? a.addEventListener(b, c, { passive: !1, capture: d })
              : a.addEventListener(b, c, d || !1);
        }),
        (this._unbind = function (b, a, c, d) {
          r[a] ? h.undelegate(b, a, c, d) : b.removeEventListener(a, c, d);
        }),
        (this.unbindAll = function () {
          for (var b = 0; b < h.events.length; b++) {
            var a = h.events[b];
            a.q ? a.e.unbind(a.n, a.f) : h._unbind(a.e, a.n, a.f, a.b);
          }
        }),
        (this.showRails = function () {
          return h.showRail().showRailHr();
        }),
        (this.showRail = function () {
          return (
            0 !== h.page.maxh &&
              (h.ispage || "none" != h.win.css("display")) &&
              ((h.rail.visibility = !0), h.rail.css("display", "block")),
            h
          );
        }),
        (this.showRailHr = function () {
          return (
            h.railh &&
              0 !== h.page.maxw &&
              (h.ispage || "none" != h.win.css("display")) &&
              ((h.railh.visibility = !0), h.railh.css("display", "block")),
            h
          );
        }),
        (this.hideRails = function () {
          return h.hideRail().hideRailHr();
        }),
        (this.hideRail = function () {
          return (h.rail.visibility = !1), h.rail.css("display", "none"), h;
        }),
        (this.hideRailHr = function () {
          return (
            h.railh &&
              ((h.railh.visibility = !1), h.railh.css("display", "none")),
            h
          );
        }),
        (this.show = function () {
          return (h.hidden = !1), (h.railslocked = !1), h.showRails();
        }),
        (this.hide = function () {
          return (h.hidden = !0), (h.railslocked = !0), h.hideRails();
        }),
        (this.toggle = function () {
          return h.hidden ? h.show() : h.hide();
        }),
        (this.remove = function () {
          for (var e in (h.stop(),
          h.cursortimeout && clearTimeout(h.cursortimeout),
          h.delaylist))
            h.delaylist[e] && g(h.delaylist[e].h);
          h.doZoomOut(),
            h.unbindAll(),
            d.isie9 &&
              h.win[0].detachEvent("onpropertychange", h.onAttributeChange),
            !1 !== h.observer && h.observer.disconnect(),
            !1 !== h.observerremover && h.observerremover.disconnect(),
            !1 !== h.observerbody && h.observerbody.disconnect(),
            (h.events = null),
            h.cursor && h.cursor.remove(),
            h.cursorh && h.cursorh.remove(),
            h.rail && h.rail.remove(),
            h.railh && h.railh.remove(),
            h.zoom && h.zoom.remove();
          for (var b = 0; b < h.saved.css.length; b++) {
            var a = h.saved.css[b];
            a[0].css(a[1], void 0 === a[2] ? "" : a[2]);
          }
          (h.saved = !1), h.me.data("__nicescroll", "");
          var i = c.nicescroll;
          for (var f in (i.each(function (a) {
            if (this && this.id === h.id) {
              delete i[a];
              for (var b = ++a; b < i.length; b++, a++) i[a] = i[b];
              --i.length && delete i[i.length];
            }
          }),
          h))
            (h[f] = null), delete h[f];
          h = null;
        }),
        (this.scrollstart = function (a) {
          return (this.onscrollstart = a), h;
        }),
        (this.scrollend = function (a) {
          return (this.onscrollend = a), h;
        }),
        (this.scrollcancel = function (a) {
          return (this.onscrollcancel = a), h;
        }),
        (this.zoomin = function (a) {
          return (this.onzoomin = a), h;
        }),
        (this.zoomout = function (a) {
          return (this.onzoomout = a), h;
        }),
        (this.isScrollable = function (b) {
          var a = b.target ? b.target : b;
          if ("OPTION" == a.nodeName) return !0;
          for (
            ;
            a &&
            1 == a.nodeType &&
            a !== this.me[0] &&
            !/^BODY|HTML/.test(a.nodeName);

          ) {
            var d = c(a),
              e =
                d.css("overflowY") ||
                d.css("overflowX") ||
                d.css("overflow") ||
                "";
            if (/scroll|auto/.test(e)) return a.clientHeight != a.scrollHeight;
            a = !!a.parentNode && a.parentNode;
          }
          return !1;
        }),
        (this.getViewport = function (d) {
          for (
            var a = !(!d || !d.parentNode) && d.parentNode;
            a && 1 == a.nodeType && !/^BODY|HTML/.test(a.nodeName);

          ) {
            var b = c(a);
            if (/fixed|absolute/.test(b.css("position"))) return b;
            var e =
              b.css("overflowY") ||
              b.css("overflowX") ||
              b.css("overflow") ||
              "";
            if (
              (/scroll|auto/.test(e) && a.clientHeight != a.scrollHeight) ||
              b.getNiceScroll().length > 0
            )
              return b;
            a = !!a.parentNode && a.parentNode;
          }
          return !1;
        }),
        (this.triggerScrollStart = function (a, b, c, d, e) {
          if (h.onscrollstart) {
            var f = {
              type: "scrollstart",
              current: { x: a, y: b },
              request: { x: c, y: d },
              end: { x: h.newscrollx, y: h.newscrolly },
              speed: e,
            };
            h.onscrollstart.call(h, f);
          }
        }),
        (this.triggerScrollEnd = function () {
          if (h.onscrollend) {
            var a = h.getScrollLeft(),
              b = h.getScrollTop(),
              c = {
                type: "scrollend",
                current: { x: a, y: b },
                end: { x: a, y: b },
              };
            h.onscrollend.call(h, c);
          }
        });
      var L = 0,
        M = 0,
        N = 0,
        O = 1,
        P = !1;
      if (
        ((this.onmousewheel = function (a) {
          if (h.wheelprevented || h.locked) return !1;
          if (h.railslocked)
            return h.debounced("checkunlock", h.resize, 250), !1;
          if (h.rail.drag) return h.cancelEvent(a);
          if (
            ("auto" === b.oneaxismousemode &&
              0 !== a.deltaX &&
              (b.oneaxismousemode = !1),
            b.oneaxismousemode && 0 === a.deltaX && !h.rail.scrollable)
          )
            return !h.railh || !h.railh.scrollable || h.onmousewheelhr(a);
          var c = u(),
            d = !1;
          if (
            (b.preservenativescrolling &&
              h.checkarea + 600 < c &&
              ((h.nativescrollingarea = h.isScrollable(a)), (d = !0)),
            (h.checkarea = c),
            h.nativescrollingarea)
          )
            return !0;
          var e = G(a, !1, d);
          return e && (h.checkarea = 0), e;
        }),
        (this.onmousewheelhr = function (a) {
          if (!h.wheelprevented) {
            if (h.railslocked || !h.railh.scrollable) return !0;
            if (h.rail.drag) return h.cancelEvent(a);
            var c = u(),
              d = !1;
            return (
              b.preservenativescrolling &&
                h.checkarea + 600 < c &&
                ((h.nativescrollingarea = h.isScrollable(a)), (d = !0)),
              (h.checkarea = c),
              !!h.nativescrollingarea ||
                (h.railslocked ? h.cancelEvent(a) : G(a, !0, d))
            );
          }
        }),
        (this.stop = function () {
          return (
            h.cancelScroll(),
            h.scrollmon && h.scrollmon.stop(),
            (h.cursorfreezed = !1),
            (h.scroll.y = Math.round(h.getScrollTop() * (1 / h.scrollratio.y))),
            h.noticeCursor(),
            h
          );
        }),
        (this.getTransitionSpeed = function (a) {
          return (80 + (a / 72) * b.scrollspeed) | 0;
        }),
        b.smoothscroll)
      ) {
        if (
          h.ishwscroll &&
          d.hastransition &&
          b.usetransition &&
          b.smoothscroll
        ) {
          var Q = "";
          (this.resetTransition = function () {
            (Q = ""), h.doc.css(d.prefixstyle + "transition-duration", "0ms");
          }),
            (this.prepareTransition = function (b, e) {
              var c = e ? b : h.getTransitionSpeed(b),
                a = c + "ms";
              return (
                Q !== a &&
                  ((Q = a),
                  h.doc.css(d.prefixstyle + "transition-duration", a)),
                c
              );
            }),
            (this.doScrollLeft = function (a, b) {
              var c = h.scrollrunning ? h.newscrolly : h.getScrollTop();
              h.doScrollPos(a, c, b);
            }),
            (this.doScrollTop = function (a, b) {
              var c = h.scrollrunning ? h.newscrollx : h.getScrollLeft();
              h.doScrollPos(c, a, b);
            }),
            (this.cursorupdate = {
              running: !1,
              start: function () {
                var a = this;
                if (!a.running) {
                  a.running = !0;
                  var b = function () {
                    a.running && f(b),
                      h.showCursor(h.getScrollTop(), h.getScrollLeft()),
                      h.notifyScrollEvent(h.win[0]);
                  };
                  f(b);
                }
              },
              stop: function () {
                this.running = !1;
              },
            }),
            (this.doScrollPos = function (a, c, m) {
              var f = h.getScrollTop(),
                g = h.getScrollLeft();
              if (
                (((h.newscrolly - f) * (c - f) < 0 ||
                  (h.newscrollx - g) * (a - g) < 0) &&
                  h.cancelScroll(),
                b.bouncescroll
                  ? (c < 0
                      ? (c = (c / 2) | 0)
                      : c > h.page.maxh &&
                        (c = (h.page.maxh + (c - h.page.maxh) / 2) | 0),
                    a < 0
                      ? (a = (a / 2) | 0)
                      : a > h.page.maxw &&
                        (a = (h.page.maxw + (a - h.page.maxw) / 2) | 0))
                  : (c < 0 ? (c = 0) : c > h.page.maxh && (c = h.page.maxh),
                    a < 0 ? (a = 0) : a > h.page.maxw && (a = h.page.maxw)),
                h.scrollrunning && a == h.newscrollx && c == h.newscrolly)
              )
                return !1;
              (h.newscrolly = c), (h.newscrollx = a);
              var i = h.getScrollTop(),
                j = h.getScrollLeft(),
                e = {};
              (e.x = a - j), (e.y = c - i);
              var l = 0 | Math.sqrt(e.x * e.x + e.y * e.y),
                k = h.prepareTransition(l);
              h.scrollrunning ||
                ((h.scrollrunning = !0),
                h.triggerScrollStart(j, i, a, c, k),
                h.cursorupdate.start()),
                (h.scrollendtrapped = !0),
                d.transitionend ||
                  (h.scrollendtrapped && clearTimeout(h.scrollendtrapped),
                  (h.scrollendtrapped = setTimeout(
                    h.onScrollTransitionEnd,
                    k
                  ))),
                h.setScrollTop(h.newscrolly),
                h.setScrollLeft(h.newscrollx);
            }),
            (this.cancelScroll = function () {
              if (!h.scrollendtrapped) return !0;
              var a = h.getScrollTop(),
                b = h.getScrollLeft();
              return (
                (h.scrollrunning = !1),
                d.transitionend || clearTimeout(d.transitionend),
                (h.scrollendtrapped = !1),
                h.resetTransition(),
                h.setScrollTop(a),
                h.railh && h.setScrollLeft(b),
                h.timerscroll &&
                  h.timerscroll.tm &&
                  clearInterval(h.timerscroll.tm),
                (h.timerscroll = !1),
                (h.cursorfreezed = !1),
                h.cursorupdate.stop(),
                h.showCursor(a, b),
                h
              );
            }),
            (this.onScrollTransitionEnd = function () {
              if (h.scrollendtrapped) {
                var a = h.getScrollTop(),
                  c = h.getScrollLeft();
                if (
                  (a < 0 ? (a = 0) : a > h.page.maxh && (a = h.page.maxh),
                  c < 0 ? (c = 0) : c > h.page.maxw && (c = h.page.maxw),
                  a != h.newscrolly || c != h.newscrollx)
                )
                  return h.doScrollPos(c, a, b.snapbackspeed);
                h.scrollrunning && h.triggerScrollEnd(),
                  (h.scrollrunning = !1),
                  (h.scrollendtrapped = !1),
                  h.resetTransition(),
                  (h.timerscroll = !1),
                  h.setScrollTop(a),
                  h.railh && h.setScrollLeft(c),
                  h.cursorupdate.stop(),
                  h.noticeCursor(!1, a, c),
                  (h.cursorfreezed = !1);
              }
            });
        } else
          (this.doScrollLeft = function (a, b) {
            var c = h.scrollrunning ? h.newscrolly : h.getScrollTop();
            h.doScrollPos(a, c, b);
          }),
            (this.doScrollTop = function (a, b) {
              var c = h.scrollrunning ? h.newscrollx : h.getScrollLeft();
              h.doScrollPos(c, a, b);
            }),
            (this.doScrollPos = function (a, b, l) {
              var c = h.getScrollTop(),
                d = h.getScrollLeft();
              ((h.newscrolly - c) * (b - c) < 0 ||
                (h.newscrollx - d) * (a - d) < 0) &&
                h.cancelScroll();
              var e = !1;
              if (
                ((h.bouncescroll && h.rail.visibility) ||
                  (b < 0
                    ? ((b = 0), (e = !0))
                    : b > h.page.maxh && ((b = h.page.maxh), (e = !0))),
                (h.bouncescroll && h.railh.visibility) ||
                  (a < 0
                    ? ((a = 0), (e = !0))
                    : a > h.page.maxw && ((a = h.page.maxw), (e = !0))),
                h.scrollrunning && h.newscrolly === b && h.newscrollx === a)
              )
                return !0;
              (h.newscrolly = b),
                (h.newscrollx = a),
                (h.dst = {}),
                (h.dst.x = a - d),
                (h.dst.y = b - c),
                (h.dst.px = d),
                (h.dst.py = c);
              var j = 0 | Math.sqrt(h.dst.x * h.dst.x + h.dst.y * h.dst.y),
                g = h.getTransitionSpeed(j);
              h.bzscroll = {};
              var i = e ? 1 : 0.58;
              (h.bzscroll.x = new A(d, h.newscrollx, g, 0, 0, i, 1)),
                (h.bzscroll.y = new A(c, h.newscrolly, g, 0, 0, i, 1)),
                u();
              var k = function () {
                if (h.scrollrunning) {
                  var a = h.bzscroll.y.getPos();
                  h.setScrollLeft(h.bzscroll.x.getNow()),
                    h.setScrollTop(h.bzscroll.y.getNow()),
                    a <= 1
                      ? (h.timer = f(k))
                      : ((h.scrollrunning = !1),
                        (h.timer = 0),
                        h.triggerScrollEnd());
                }
              };
              h.scrollrunning ||
                (h.triggerScrollStart(d, c, a, b, g),
                (h.scrollrunning = !0),
                (h.timer = f(k)));
            }),
            (this.cancelScroll = function () {
              return (
                h.timer && g(h.timer),
                (h.timer = 0),
                (h.bzscroll = !1),
                (h.scrollrunning = !1),
                h
              );
            });
      } else
        (this.doScrollLeft = function (a, b) {
          var c = h.getScrollTop();
          h.doScrollPos(a, c, b);
        }),
          (this.doScrollTop = function (a, b) {
            var c = h.getScrollLeft();
            h.doScrollPos(c, a, b);
          }),
          (this.doScrollPos = function (a, b, e) {
            var c = a > h.page.maxw ? h.page.maxw : a;
            c < 0 && (c = 0);
            var d = b > h.page.maxh ? h.page.maxh : b;
            d < 0 && (d = 0),
              h.synched("scroll", function () {
                h.setScrollTop(d), h.setScrollLeft(c);
              });
          }),
          (this.cancelScroll = function () {});
      (this.doScrollBy = function (a, b) {
        F(0, a);
      }),
        (this.doScrollLeftBy = function (a, b) {
          F(a, 0);
        }),
        (this.doScrollTo = function (b, c) {
          var a = c ? Math.round(b * h.scrollratio.y) : b;
          a < 0 ? (a = 0) : a > h.page.maxh && (a = h.page.maxh),
            (h.cursorfreezed = !1),
            h.doScrollTop(b);
        }),
        (this.checkContentSize = function () {
          var a = h.getContentSize();
          (a.h == h.page.h && a.w == h.page.w) || h.resize(!1, a);
        }),
        (h.onscroll = function (a) {
          h.rail.drag ||
            h.cursorfreezed ||
            h.synched("scroll", function () {
              (h.scroll.y = Math.round(h.getScrollTop() / h.scrollratio.y)),
                h.railh &&
                  (h.scroll.x = Math.round(
                    h.getScrollLeft() / h.scrollratio.x
                  )),
                h.noticeCursor();
            });
        }),
        h.bind(h.docscroll, "scroll", h.onscroll),
        (this.doZoomIn = function (f) {
          if (!h.zoomactive) {
            (h.zoomactive = !0), (h.zoomrestore = { style: {} });
            var b = [
                "position",
                "top",
                "left",
                "zIndex",
                "backgroundColor",
                "marginTop",
                "marginBottom",
                "marginLeft",
                "marginRight",
              ],
              c = h.win[0].style;
            for (var g in b) {
              var a = b[g];
              h.zoomrestore.style[a] = void 0 !== c[a] ? c[a] : "";
            }
            (h.zoomrestore.style.width = h.win.css("width")),
              (h.zoomrestore.style.height = h.win.css("height")),
              (h.zoomrestore.padding = {
                w: h.win.outerWidth() - h.win.width(),
                h: h.win.outerHeight() - h.win.height(),
              }),
              d.isios4 &&
                ((h.zoomrestore.scrollTop = q.scrollTop()), q.scrollTop(0)),
              h.win.css({
                position: d.isios4 ? "absolute" : "fixed",
                top: 0,
                left: 0,
                zIndex: p + 100,
                margin: 0,
              });
            var e = h.win.css("backgroundColor");
            return (
              ("" === e ||
                /transparent|rgba\(0, 0, 0, 0\)|rgba\(0,0,0,0\)/.test(e)) &&
                h.win.css("backgroundColor", "#fff"),
              h.rail.css({ zIndex: p + 101 }),
              h.zoom.css({ zIndex: p + 102 }),
              h.zoom.css("backgroundPosition", "0 -18px"),
              h.resizeZoom(),
              h.onzoomin && h.onzoomin.call(h),
              h.cancelEvent(f)
            );
          }
        }),
        (this.doZoomOut = function (a) {
          if (h.zoomactive)
            return (
              (h.zoomactive = !1),
              h.win.css("margin", ""),
              h.win.css(h.zoomrestore.style),
              d.isios4 && q.scrollTop(h.zoomrestore.scrollTop),
              h.rail.css({ "z-index": h.zindex }),
              h.zoom.css({ "z-index": h.zindex }),
              (h.zoomrestore = !1),
              h.zoom.css("backgroundPosition", "0 0"),
              h.onResize(),
              h.onzoomout && h.onzoomout.call(h),
              h.cancelEvent(a)
            );
        }),
        (this.doZoom = function (a) {
          return h.zoomactive ? h.doZoomOut(a) : h.doZoomIn(a);
        }),
        (this.resizeZoom = function () {
          if (h.zoomactive) {
            var a = h.getScrollTop();
            h.win.css({
              width: q.width() - h.zoomrestore.padding.w + "px",
              height: q.height() - h.zoomrestore.padding.h + "px",
            }),
              h.onResize(),
              h.setScrollTop(Math.min(h.page.maxh, a));
          }
        }),
        this.init(),
        c.nicescroll.push(this);
    },
    y = function (a) {
      var b = this;
      (this.nc = a),
        (this.lastx = 0),
        (this.lasty = 0),
        (this.speedx = 0),
        (this.speedy = 0),
        (this.lasttime = 0),
        (this.steptime = 0),
        (this.snapx = !1),
        (this.snapy = !1),
        (this.demulx = 0),
        (this.demuly = 0),
        (this.lastscrollx = -1),
        (this.lastscrolly = -1),
        (this.chkx = 0),
        (this.chky = 0),
        (this.timer = 0),
        (this.reset = function (a, c) {
          b.stop(),
            (b.steptime = 0),
            (b.lasttime = u()),
            (b.speedx = 0),
            (b.speedy = 0),
            (b.lastx = a),
            (b.lasty = c),
            (b.lastscrollx = -1),
            (b.lastscrolly = -1);
        }),
        (this.update = function (a, c) {
          var d = u();
          (b.steptime = d - b.lasttime), (b.lasttime = d);
          var e = c - b.lasty,
            f = a - b.lastx,
            g = b.nc.getScrollTop() + e,
            h = b.nc.getScrollLeft() + f;
          (b.snapx = h < 0 || h > b.nc.page.maxw),
            (b.snapy = g < 0 || g > b.nc.page.maxh),
            (b.speedx = f),
            (b.speedy = e),
            (b.lastx = a),
            (b.lasty = c);
        }),
        (this.stop = function () {
          b.nc.unsynched("domomentum2d"),
            b.timer && clearTimeout(b.timer),
            (b.timer = 0),
            (b.lastscrollx = -1),
            (b.lastscrolly = -1);
        }),
        (this.doSnapy = function (a, c) {
          var d = !1;
          c < 0
            ? ((c = 0), (d = !0))
            : c > b.nc.page.maxh && ((c = b.nc.page.maxh), (d = !0)),
            a < 0
              ? ((a = 0), (d = !0))
              : a > b.nc.page.maxw && ((a = b.nc.page.maxw), (d = !0)),
            d
              ? b.nc.doScrollPos(a, c, b.nc.opt.snapbackspeed)
              : b.nc.triggerScrollEnd();
        }),
        (this.doMomentum = function (d) {
          var e = u(),
            f = d ? e + d : b.lasttime,
            g = b.nc.getScrollLeft(),
            h = b.nc.getScrollTop(),
            i = b.nc.page.maxh,
            j = b.nc.page.maxw;
          (b.speedx = j > 0 ? Math.min(60, b.speedx) : 0),
            (b.speedy = i > 0 ? Math.min(60, b.speedy) : 0);
          var a = f && e - f <= 60;
          (h < 0 || h > i || g < 0 || g > j) && (a = !1);
          var l = !(!b.speedy || !a) && b.speedy,
            m = !(!b.speedx || !a) && b.speedx;
          if (l || m) {
            var c = Math.max(16, b.steptime);
            if (c > 50) {
              var k = c / 50;
              (b.speedx *= k), (b.speedy *= k), (c = 50);
            }
            (b.demulxy = 0),
              (b.lastscrollx = b.nc.getScrollLeft()),
              (b.chkx = b.lastscrollx),
              (b.lastscrolly = b.nc.getScrollTop()),
              (b.chky = b.lastscrolly);
            var o = b.lastscrollx,
              p = b.lastscrolly,
              n = function () {
                var a = u() - e > 600 ? 0.04 : 0.02;
                b.speedx &&
                  ((o = Math.floor(b.lastscrollx - b.speedx * (1 - b.demulxy))),
                  (b.lastscrollx = o),
                  (o < 0 || o > j) && (a = 0.1)),
                  b.speedy &&
                    ((p = Math.floor(
                      b.lastscrolly - b.speedy * (1 - b.demulxy)
                    )),
                    (b.lastscrolly = p),
                    (p < 0 || p > i) && (a = 0.1)),
                  (b.demulxy = Math.min(1, b.demulxy + a)),
                  b.nc.synched("domomentum2d", function () {
                    b.speedx &&
                      (b.nc.getScrollLeft(),
                      (b.chkx = o),
                      b.nc.setScrollLeft(o)),
                      b.speedy &&
                        (b.nc.getScrollTop(),
                        (b.chky = p),
                        b.nc.setScrollTop(p)),
                      b.timer || (b.nc.hideCursor(), b.doSnapy(o, p));
                  }),
                  b.demulxy < 1
                    ? (b.timer = setTimeout(n, c))
                    : (b.stop(), b.nc.hideCursor(), b.doSnapy(o, p));
              };
            n();
          } else b.doSnapy(b.nc.getScrollLeft(), b.nc.getScrollTop());
        });
    },
    z = b.fn.scrollTop;
  (b.cssHooks.pageYOffset = {
    get: function (b, d, e) {
      var a = c.data(b, "__nicescroll") || !1;
      return a && a.ishwscroll ? a.getScrollTop() : z.call(b);
    },
    set: function (b, d) {
      var a = c.data(b, "__nicescroll") || !1;
      return (
        a && a.ishwscroll ? a.setScrollTop(parseInt(d)) : z.call(b, d), this
      );
    },
  }),
    (b.fn.scrollTop = function (b) {
      if (void 0 === b) {
        var a = !!this[0] && !!c.data(this[0], "__nicescroll");
        return a && a.ishwscroll ? a.getScrollTop() : z.call(this);
      }
      return this.each(function () {
        var a = c.data(this, "__nicescroll") || !1;
        a && a.ishwscroll ? a.setScrollTop(parseInt(b)) : z.call(c(this), b);
      });
    });
  var A = b.fn.scrollLeft;
  (c.cssHooks.pageXOffset = {
    get: function (b, d, e) {
      var a = c.data(b, "__nicescroll") || !1;
      return a && a.ishwscroll ? a.getScrollLeft() : A.call(b);
    },
    set: function (b, d) {
      var a = c.data(b, "__nicescroll") || !1;
      return (
        a && a.ishwscroll ? a.setScrollLeft(parseInt(d)) : A.call(b, d), this
      );
    },
  }),
    (b.fn.scrollLeft = function (b) {
      if (void 0 === b) {
        var a = !!this[0] && !!c.data(this[0], "__nicescroll");
        return a && a.ishwscroll ? a.getScrollLeft() : A.call(this);
      }
      return this.each(function () {
        var a = c.data(this, "__nicescroll") || !1;
        a && a.ishwscroll ? a.setScrollLeft(parseInt(b)) : A.call(c(this), b);
      });
    });
  var j = function (a) {
    var e = this;
    if (
      ((this.length = 0),
      (this.name = "nicescrollarray"),
      (this.each = function (a) {
        return c.each(e, a), e;
      }),
      (this.push = function (a) {
        (e[e.length] = a), e.length++;
      }),
      (this.eq = function (a) {
        return e[a];
      }),
      a)
    )
      for (var b = 0; b < a.length; b++) {
        var d = c.data(a[b], "__nicescroll") || !1;
        d && ((this[this.length] = d), this.length++);
      }
    return this;
  };
  !(function (c, b, d) {
    for (var a = 0, e = b.length; a < e; a++) d(c, b[a]);
  })(
    j.prototype,
    [
      "show",
      "hide",
      "toggle",
      "onResize",
      "resize",
      "remove",
      "stop",
      "doScrollPos",
    ],
    function (a, b) {
      a[b] = function () {
        var a = arguments;
        return this.each(function () {
          this[b].apply(this, a);
        });
      };
    }
  ),
    (b.fn.getNiceScroll = function (a) {
      return void 0 === a
        ? new j(this)
        : (this[a] && c.data(this[a], "__nicescroll")) || !1;
    }),
    ((b.expr.pseudos || b.expr[":"]).nicescroll = function (a) {
      return void 0 !== c.data(a, "__nicescroll");
    }),
    (c.fn.niceScroll = function (a, d) {
      void 0 !== d ||
        "object" != typeof a ||
        "jquery" in a ||
        ((d = a), (a = !1));
      var b = new j();
      return (
        this.each(function () {
          var f = c(this),
            e = c.extend({}, d);
          if (a) {
            var h = c(a);
            (e.doc = h.length > 1 ? c(a, f) : h), (e.win = f);
          }
          !("doc" in e) || "win" in e || (e.win = f);
          var g = f.data("__nicescroll") || !1;
          g ||
            ((e.doc = e.doc || f),
            (g = new x(e, f)),
            f.data("__nicescroll", g)),
            b.push(g);
        }),
        1 === b.length ? b[0] : b
      );
    }),
    (a.NiceScroll = {
      getjQuery: function () {
        return b;
      },
    }),
    c.nicescroll || ((c.nicescroll = new j()), (c.nicescroll.options = k));
});
