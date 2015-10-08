!function (t, e, n) {
    var i = function (i, o) {
        this.elem = i;
        this.$elem = t(i);
        this.options = o;
        this.metadata = this.$elem.data("plugin-options");
        this.$win = t(e);
        this.sections = {};
        this.didScroll = !1;
        this.$doc = t(n);
        this.docHeight = this.$doc.height()
    };
    i.prototype = {
        defaults: {
            navItems: "a",
            currentClass: "current",
            changeHash: !1,
            easing: "swing",
            filter: "",
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: !1,
            end: !1,
            scrollChange: !1
        },
        init: function() {
            return this.config = t.extend({},this.defaults, this.options,
                this.metadata), this.$nav = this.$elem.find(this.config
                .navItems), "" !== this.config.filter && (this.$nav =
                this.$nav.filter(this.config.filter)), this.$nav.on(
                "click.onePageNav", t.proxy(this.handleClick, this)
            ), this.getPositions(), this.bindInterval(), this.$win.on(
                "resize.onePageNav", t.proxy(this.getPositions,
                    this)), this
        },
        adjustNav: function(t, e) {
            t.$elem.find("." + t.config.currentClass).removeClass(t.config
                .currentClass), e.addClass(t.config.currentClass)
        },
        bindInterval: function() {
            var t, e = this;
            e.$win.on("scroll.onePageNav", function() {
                e.didScroll = !0
            }), e.t = setInterval(function() {
                t = e.$doc.height(), e.didScroll && (e.didScroll = !
                        1, e.scrollChange()), t !== e.docHeight &&
                    (e.docHeight = t, e.getPositions())
            }, 250)
        },
        getHash: function(t) {
            return t.attr("href").split("#")[1]
        },
        getPositions: function() {
            var e, n, i, o = this;
            o.$nav.each(function() {
                e = o.getHash(t(this)), i = t("#" + e), i.length &&
                    (n = i.offset().top, o.sections[e] = Math.round(
                        n))
            })
        },
        getSection: function(t) {
            var e = null,
                n = Math.round(this.$win.height() * this.config.scrollThreshold);
            for (var i in this.sections) this.sections[i] - n < t && (e =
                i);
            return e
        },
        handleClick: function(n) {
            var i = this,
                o = t(n.currentTarget),
                r = o.parent(),
                s = "#" + i.getHash(o);
            r.hasClass(i.config.currentClass) || (i.config.begin && i.config
                .begin(), i.adjustNav(i, r), i.unbindInterval(), i.scrollTo(
                    s, function() {
                        i.config.changeHash && (e.location.hash = s),
                            i.bindInterval(), i.config.end && i.config
                            .end()
                    })), n.preventDefault()
        },
        scrollChange: function() {
            var t, e = this.$win.scrollTop(),
                n = this.getSection(e);
            null !== n && (t = this.$elem.find('a[href$="#' + n + '"]')
                .parent(), t.hasClass(this.config.currentClass) ||
                (this.adjustNav(this, t), this.config.scrollChange &&
                    this.config.scrollChange(t)))
        },
        scrollTo: function(e, n) {
            var i = t(e).offset().top;
            t("html, body").animate({
                scrollTop: i
            }, this.config.scrollSpeed, this.config.easing, n)
        },
        unbindInterval: function() {
            clearInterval(this.t), this.$win.unbind("scroll.onePageNav")
        }
    }, i.defaults = i.prototype.defaults, t.fn.onePageNav = function(t) {
        return this.each(function() {
            new i(this, t).init()
        })
    }
}(jQuery, window, document),
function(t) {
    t.isScrollToFixed = function(e) {
        return !!t(e).data("ScrollToFixed")
    }, t.ScrollToFixed = function(e, n) {
        function i() {
            y.trigger("preUnfixed.ScrollToFixed"), u(), y.trigger(
                    "unfixed.ScrollToFixed"), P = -1, S = y.offset().top,
                T = y.offset().left, m.options.offsets && (T += y.offset()
                    .left - y.position().left), -1 == F && (F = T), v =
                y.css("position"), w = !0, -1 != m.options.bottom && (y
                    .trigger("preFixed.ScrollToFixed"), l(), y.trigger(
                        "fixed.ScrollToFixed"))
        }

        function o() {
            var t = m.options.limit;
            return t ? "function" == typeof t ? t.apply(y) : t : 0
        }

        function r() {
            return "fixed" === v
        }

        function s() {
            return "absolute" === v
        }

        function a() {
            return !(r() || s())
        }

        function l() {
            r() || ($.css({
                    display: y.css("display"),
                    width: y.outerWidth(!0),
                    height: y.outerHeight(!0),
                    "float": y.css("float")
                }), cssOptions = {
                    position: "fixed",
                    top: -1 == m.options.bottom ? p() : "",
                    bottom: -1 == m.options.bottom ? "" : m.options
                        .bottom,
                    "margin-left": "0px"
                }, m.options.dontSetWidth || (cssOptions.width = y.width()),
                y.css(cssOptions), y.addClass(m.options.baseClassName),
                m.options.className && y.addClass(m.options.className),
                v = "fixed")
        }

        function c() {
            var t = o(),
                e = T;
            m.options.removeOffsets && (e = "", t -= S), cssOptions = {
                    position: "absolute",
                    top: t,
                    left: e,
                    "margin-left": "0px",
                    bottom: ""
                }, m.options.dontSetWidth || (cssOptions.width = y.width()),
                y.css(cssOptions), v = "absolute"
        }

        function u() {
            a() || (P = -1, $.css("display", "none"), y.css({
                    width: "",
                    position: x,
                    left: "",
                    top: b,
                    "margin-left": ""
                }), y.removeClass("scroll-to-fixed-fixed"), m.options
                .className && y.removeClass(m.options.className), v =
                null)
        }

        function d(t) {
            t != P && (y.css("left", T - t), P = t)
        }

        function p() {
            var t = m.options.marginTop;
            return t ? "function" == typeof t ? t.apply(y) : t : 0
        }

        function f() {
            if (t.isScrollToFixed(y)) {
                var e = w;
                w || i();
                var n = t(window).scrollLeft(),
                    f = t(window).scrollTop(),
                    v = o();
                m.options.minWidth && t(window).width() < m.options.minWidth ?
                    a() && e || (g(), y.trigger(
                        "preUnfixed.ScrollToFixed"), u(), y.trigger(
                        "unfixed.ScrollToFixed")) : m.options.maxWidth &&
                    t(window).width() > m.options.maxWidth ? a() && e ||
                    (g(), y.trigger("preUnfixed.ScrollToFixed"), u(), y
                        .trigger("unfixed.ScrollToFixed")) : -1 == m.options
                    .bottom ? v > 0 && f >= v - p() ? s() && e || (g(),
                        y.trigger("preAbsolute.ScrollToFixed"), c(), y.trigger(
                            "unfixed.ScrollToFixed")) : f >= S - p() ?
                    (r() && e || (g(), y.trigger(
                            "preFixed.ScrollToFixed"), l(), P = -1,
                        y.trigger("fixed.ScrollToFixed")), d(n)) : a() &&
                    e || (g(), y.trigger("preUnfixed.ScrollToFixed"), u(),
                        y.trigger("unfixed.ScrollToFixed")) : v > 0 ? f +
                    t(window).height() - y.outerHeight(!0) >= v - (p() ||
                        -h()) ? r() && (g(), y.trigger(
                            "preUnfixed.ScrollToFixed"), "absolute" ===
                        x ? c() : u(), y.trigger(
                            "unfixed.ScrollToFixed")) : (r() || (g(), y
                        .trigger("preFixed.ScrollToFixed"), l()), d(
                        n), y.trigger("fixed.ScrollToFixed")) : d(n)
            }
        }

        function h() {
            return m.options.bottom ? m.options.bottom : 0
        }

        function g() {
            var t = y.css("position");
            y.trigger("absolute" == t ? "postAbsolute.ScrollToFixed" :
                "fixed" == t ? "postFixed.ScrollToFixed" :
                "postUnfixed.ScrollToFixed")
        }
        var m = this;
        m.$el = t(e), m.el = e, m.$el.data("ScrollToFixed", m);
        var v, x, b, w = !1,
            y = m.$el,
            S = 0,
            T = 0,
            F = -1,
            P = -1,
            $ = null,
            k = function() {
                y.is(":visible") && (w = !1, f())
            },
            C = function() {
                f()
            },
            Y = function(t) {
                t = t || window.event, t.preventDefault && t.preventDefault(),
                    t.returnValue = !1
            };
        m.init = function() {
            m.options = t.extend({}, t.ScrollToFixed.defaultOptions, n),
                m.$el.css("z-index", m.options.zIndex), $ = t("<div />"),
                v = y.css("position"), x = y.css("position"), b = y.css(
                    "top"), a() && m.$el.after($), t(window).bind(
                    "resize.ScrollToFixed", k), t(window).bind(
                    "scroll.ScrollToFixed", C), m.options.preFixed && y
                .bind("preFixed.ScrollToFixed", m.options.preFixed), m.options
                .postFixed && y.bind("postFixed.ScrollToFixed", m.options
                    .postFixed), m.options.preUnfixed && y.bind(
                    "preUnfixed.ScrollToFixed", m.options.preUnfixed),
                m.options.postUnfixed && y.bind(
                    "postUnfixed.ScrollToFixed", m.options.postUnfixed),
                m.options.preAbsolute && y.bind(
                    "preAbsolute.ScrollToFixed", m.options.preAbsolute),
                m.options.postAbsolute && y.bind(
                    "postAbsolute.ScrollToFixed", m.options.postAbsolute
                ), m.options.fixed && y.bind("fixed.ScrollToFixed", m.options
                    .fixed), m.options.unfixed && y.bind(
                    "unfixed.ScrollToFixed", m.options.unfixed), m.options
                .spacerClass && $.addClass(m.options.spacerClass), y.bind(
                    "resize.ScrollToFixed", function() {
                        $.height(y.height())
                    }), y.bind("scroll.ScrollToFixed", function() {
                    y.trigger("preUnfixed.ScrollToFixed"), u(), y.trigger(
                        "unfixed.ScrollToFixed"), f()
                }), y.bind("detach.ScrollToFixed", function(e) {
                    Y(e), y.trigger("preUnfixed.ScrollToFixed"), u(),
                        y.trigger("unfixed.ScrollToFixed"), t(
                            window).unbind("resize.ScrollToFixed",
                            k), t(window).unbind(
                            "scroll.ScrollToFixed", C), y.unbind(
                            ".ScrollToFixed"), $.remove(), m.$el.removeData(
                            "ScrollToFixed")
                }), k()
        }, m.init()
    }, t.ScrollToFixed.defaultOptions = {
        marginTop: 0,
        limit: 0,
        bottom: -1,
        zIndex: 1e3,
        baseClassName: "scroll-to-fixed-fixed"
    }, t.fn.scrollToFixed = function(e) {
        return this.each(function() {
            new t.ScrollToFixed(this, e)
        })
    }
}(jQuery),
    function() {
        var t, e = function(t, e) {
            return function() {
                return t.apply(e, arguments)
            }
        };
        t = function() {
            function t() {}
            return t.prototype.extend = function(t, e) {
                var n, i;
                for (n in t) i = t[n], null != i && (e[n] = i);
                return e
            }, t.prototype.isMobile = function(t) {
                return
                    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i
                    .test(t)
            }, t
        }(), this.WOW = function() {
            function n(t) {
                null == t && (t = {}), this.scrollCallback = e(this.scrollCallback,
                        this), this.scrollHandler = e(this.scrollHandler,
                        this), this.start = e(this.start, this), this.scrolled = !
                    0, this.config = this.util().extend(t, this.defaults)
            }
            return n.prototype.defaults = {
                boxClass: "wow",
                animateClass: "animated",
                offset: 0,
                mobile: !0
            }, n.prototype.init = function() {
                var t;
                return this.element = window.document.documentElement,
                    "interactive" === (t = document.readyState) ||
                    "complete" === t ? this.start() : document.addEventListener(
                        "DOMContentLoaded", this.start)
            }, n.prototype.start = function() {
                var t, e, n, i;
                if (this.boxes = this.element.getElementsByClassName(
                    this.config.boxClass), this.boxes.length) {
                    if (this.disabled()) return this.resetStyle();
                    for (i = this.boxes, e = 0, n = i.length; n > e; e++)
                        t = i[e], this.applyStyle(t, !0);
                    return window.addEventListener("scroll", this.scrollHandler, !
                        1), window.addEventListener("resize", this.scrollHandler, !
                        1), this.interval = setInterval(this.scrollCallback,
                        50)
                }
            }, n.prototype.stop = function() {
                return window.removeEventListener("scroll", this.scrollHandler, !
                        1), window.removeEventListener("resize", this.scrollHandler, !
                        1), null != this.interval ? clearInterval(this.interval) :
                    void 0
            }, n.prototype.show = function(t) {
                return this.applyStyle(t), t.className = "" + t.className +
                    " " + this.config.animateClass
            }, n.prototype.applyStyle = function(t, e) {
                var n, i, o;
                return i = t.getAttribute("data-wow-duration"), n = t.getAttribute(
                    "data-wow-delay"), o = t.getAttribute(
                    "data-wow-iteration"), t.setAttribute("style",
                    this.customStyle(e, i, n, o))
            }, n.prototype.resetStyle = function() {
                var t, e, n, i, o;
                for (i = this.boxes, o = [], e = 0, n = i.length; n > e; e++)
                    t = i[e], o.push(t.setAttribute("style",
                        "visibility: visible;"));
                return o
            }, n.prototype.customStyle = function(t, e, n, i) {
                var o;
                return o = t ?
                    "visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;" :
                    "visibility: visible;", e && (o +=
                        "-webkit-animation-duration: " + e +
                        "; -moz-animation-duration: " + e +
                        "; animation-duration: " + e + ";"), n && (o +=
                        "-webkit-animation-delay: " + n +
                        "; -moz-animation-delay: " + n +
                        "; animation-delay: " + n + ";"), i && (o +=
                        "-webkit-animation-iteration-count: " + i +
                        "; -moz-animation-iteration-count: " + i +
                        "; animation-iteration-count: " + i + ";"), o
            }, n.prototype.scrollHandler = function() {
                return this.scrolled = !0
            }, n.prototype.scrollCallback = function() {
                var t;
                return this.scrolled && (this.scrolled = !1, this.boxes =
                        function() {
                            var e, n, i, o;
                            for (i = this.boxes, o = [], e = 0, n = i.length; n >
                                e; e++) t = i[e], t && (this.isVisible(
                                t) ? this.show(t) : o.push(t));
                            return o
                        }.call(this), !this.boxes.length) ? this.stop() :
                    void 0
            }, n.prototype.offsetTop = function(t) {
                var e;
                for (e = t.offsetTop; t = t.offsetParent;) e += t.offsetTop;
                return e
            }, n.prototype.isVisible = function(t) {
                var e, n, i, o, r;
                return n = t.getAttribute("data-wow-offset") || this.config
                    .offset, r = window.pageYOffset, o = r + this.element
                    .clientHeight - n, i = this.offsetTop(t), e = i + t
                    .clientHeight, o >= i && e >= r
            }, n.prototype.util = function() {
                return this._util || (this._util = new t)
            }, n.prototype.disabled = function() {
                return !this.config.mobile && this.util().isMobile(
                    navigator.userAgent)
            }, n
        }()
    }.call(this), $(document).ready(function() {
        $(".scroll").click(function(t) {
            t.preventDefault(), $("html,body").animate({
                scrollTop: $(this.hash).offset().top
            }, 500)
        });
        var t = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 0,
            mobile: !1
        });
        t.init(), $("#stickyNav").scrollToFixed(), $(".slideItWrapper").scrollToFixed(),
            $("#nav, #nav2").onePageNav({
                currentClass: "selected",
                changeHash: !1,
                scrollSpeed: 750
            });
        $("#pageslide").outerWidth();
        $(".slideIt, #pageslide a").on("click", function(t) {
            t.preventDefault(), $(".slideIt").toggleClass("active"),
                $("#pageslide").is(":visible") ? $("#pageslide").hide() :
                ($("#pageslide").show().slideDown(), $(".wrapper").show())
        })
    });