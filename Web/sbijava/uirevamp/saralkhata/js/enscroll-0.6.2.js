! function(a, b, c, d) {
    var e = {
            verticalScrolling: !0,
            horizontalScrolling: !1,
            verticalScrollerSide: "right",
            showOnHover: !1,
            scrollIncrement: 20,
            minScrollbarLength: 40,
            pollChanges: !0,
            drawCorner: !0,
            drawScrollButtons: !1,
            clickTrackToScroll: !0,
            easingDuration: 500,
            propagateWheelEvent: !0,
            verticalTrackClass: "vertical-track",
            horizontalTrackClass: "horizontal-track",
            horizontalHandleClass: "horizontal-handle",
            verticalHandleClass: "vertical-handle",
            scrollUpButtonClass: "scroll-up-btn",
            scrollDownButtonClass: "scroll-down-btn",
            scrollLeftButtonClass: "scroll-left-btn",
            scrollRightButtonClass: "scroll-right-btn",
            cornerClass: "scrollbar-corner",
            zIndex: 1,
            addPaddingToPane: !0,
            horizontalHandleHTML: '<div class="left"></div><div class="right"></div>',
            verticalHandleHTML: '<div class="top"></div><div class="bottom"></div>'
        },
        f = function(a) {
            a.preventDefault ? a.preventDefault() : a.returnValue = !1, a.stopPropagation ? a.stopPropagation() : a.cancelBubble = !0
        },
        g = b.requestAnimationFrame || b.mozRequestAnimationFrame || b.webkitRequestAnimationFrame || b.oRequestAnimationFrame || b.msRequestAnimationFrame || function(a) {
            setTimeout(a, 17)
        },
        h = function(b, c) {
            var d = a(b).css(c),
                e = /^-?\d+/.exec(d);
            return e ? +e[0] : 0
        },
        i = function(a) {
            var b, c, d = {
                    width: "5px",
                    height: "1px",
                    overflow: "hidden",
                    padding: "8px 0",
                    visibility: "hidden",
                    whiteSpace: "pre-line",
                    font: "10px/1 serif"
                },
                e = document.createElement(a),
                f = document.createTextNode("a\na");
            for (c in d) e.style[c] = d[c];
            return e.appendChild(f), document.body.appendChild(e), b = e.scrollHeight < 28, document.body.removeChild(e), b
        },
        j = .5 * Math.PI,
        k = 10 * Math.log(2),
        l = function(a, b, c) {
            var d = j / b,
                e = a * d;
            return Math.round(e * Math.cos(d * c))
        },
        m = function(a, b, c) {
            return Math.round(a * k * Math.pow(2, -10 * c / b + 1) / b)
        },
        n = function(a, b, c, d) {
            return 2 * c / Math.PI * Math.asin((d - a) / b)
        },
        o = function(b) {
            var c = a(this).data("enscroll"),
                d = this,
                e = c.settings,
                f = function() {
                    var b = a(this).data("enscroll"),
                        c = b.settings;
                    b && c.showOnHover && (c.verticalScrolling && a(b.verticalTrackWrapper).is(":visible") && a(b.verticalTrackWrapper).stop().fadeTo(275, 0), c.horizontalScrolling && a(b.horizontalTrackWrapper).is(":visible") && a(b.horizontalTrackWrapper).stop().fadeTo(275, 0), b._fadeTimer = null)
                };
            c && e.showOnHover && (c._fadeTimer ? clearTimeout(c._fadeTimer) : (e.verticalScrolling && a(c.verticalTrackWrapper).is(":visible") && a(c.verticalTrackWrapper).stop().fadeTo(275, 1), e.horizontalScrolling && a(c.horizontalTrackWrapper).is(":visible") && a(c.horizontalTrackWrapper).stop().fadeTo(275, 1)), b !== !1 && (c._fadeTimer = setTimeout(function() {
                f.call(d)
            }, 1750)))
        },
        p = function(b, c) {
            var d = a(b),
                e = d.data("enscroll"),
                f = d.scrollTop();
            e && e.settings.verticalScrolling && (d.scrollTop(f + c), e.settings.showOnHover && o.call(b))
        },
        q = function(b, c) {
            var d = a(b),
                e = d.data("enscroll"),
                f = d.scrollLeft();
            e && e.settings.horizontalScrolling && (d.scrollLeft(f + c), e.settings.showOnHover && o.call(b))
        },
        r = function(b) {
            if (1 === b.which) {
                var d, e, f, h, i, j, k, l, m, n = b.data.pane,
                    p = a(n),
                    q = p.data("enscroll"),
                    r = !0,
                    s = function() {
                        r && (f !== h && (q._scrollingY || (q._scrollingY = !0, q._startY = p.scrollTop(), g(function() {
                            t(p)
                        })), e.style.top = f + "px", q._endY = f * m / l, h = f), g(s), q.settings.showOnHover && o.call(n))
                    },
                    u = function(a) {
                        return r && (f = a.clientY - j - i, f = Math.min(0 > f ? 0 : f, l)), !1
                    },
                    v = function() {
                        return r = !1, c.body.style.cursor = k, this.style.cursor = "", d.removeClass("dragging"), a(c.body).off("mousemove.enscroll.vertical").off("mouseup.enscroll.vertical"), a(c).off("mouseout.enscroll.vertical"), p.on("scroll.enscroll.pane", function(a) {
                            x.call(this, a)
                        }), !1
                    };
                return d = a(q.verticalTrackWrapper).find(".enscroll-track"), e = d.children().first()[0], f = parseInt(e.style.top, 10), m = n.scrollHeight - (q._scrollHeightNoPadding ? a(n).height() : a(n).innerHeight()), i = b.clientY - a(e).offset().top, l = d.height() - a(e).outerHeight(), j = d.offset().top, p.off("scroll.enscroll.pane"), a(c.body).on({
                    "mousemove.enscroll.vertical": u,
                    "mouseup.enscroll.vertical": function(a) {
                        v.call(e, a)
                    }
                }), a(c).on("mouseout.enscroll.vertical", function(a) {
                    a.target.nodeName && "HTML" === a.target.nodeName.toUpperCase() && v.call(e, a)
                }), d.hasClass("dragging") || (d.addClass("dragging"), k = a(c.body).css("cursor"), this.style.cursor = c.body.style.cursor = "ns-resize"), g(s), !1
            }
        },
        s = function(b) {
            if (1 === b.which) {
                var d, e, f, h, i, j, k, l, m, n = b.data.pane,
                    p = a(n),
                    q = a(n).data("enscroll"),
                    r = !0,
                    s = function() {
                        r && (f !== h && (q._scrollingX || (q._scrollingX = !0, q._startX = p.scrollLeft(), g(function() {
                            t(p)
                        })), e.style.left = f + "px", q._endX = f * i / m, h = f), g(s), q.settings.showOnHover && o.call(n))
                    },
                    u = function(a) {
                        return r && (f = a.clientX - k - j, f = Math.min(0 > f ? 0 : f, m)), !1
                    },
                    v = function() {
                        return r = !1, d.removeClass("dragging"), c.body.style.cursor = l, this.style.cursor = "", d.removeClass("dragging"), a(c.body).off("mousemove.enscroll.horizontal").off("mouseup.enscroll.horizontal"), a(c).off("mouseout.enscroll.horizontal"), p.on("scroll.enscroll.pane", function(a) {
                            x.call(this, a)
                        }), !1
                    };
                return d = a(q.horizontalTrackWrapper).find(".enscroll-track"), e = d.children().first()[0], f = parseInt(e.style.left, 10), i = n.scrollWidth - a(n).innerWidth(), j = b.clientX - a(e).offset().left, m = d.width() - a(e).outerWidth(), k = d.offset().left, p.off("scroll.enscroll.pane"), a(c.body).on({
                    "mousemove.enscroll.horizontal": u,
                    "mouseup.enscroll.horizontal": function(a) {
                        v.call(e, a)
                    }
                }), a(c).on("mouseout.enscroll.horizontal", function(a) {
                    a.target.nodeName && "HTML" === a.target.nodeName.toUpperCase() && v.call(e, a)
                }), d.hasClass("dragging") || (d.addClass("dragging"), l = a("body").css("cursor"), this.style.cursor = c.body.style.cursor = "ew-resize"), g(s), !1
            }
        },
        t = function(a) {
            var b, c, d, e = a.data("enscroll"),
                f = e._duration;
            e._scrollingX === !0 && (b = e._endX - e._startX, 0 === b ? e._scrollingX = !1 : (c = a.scrollLeft(), d = n(e._startX, b, f, c), b > 0 ? c >= e._endX || c < e._startX ? e._scrollingX = !1 : (q(a, Math.max(1, l(b, f, d))), g(function() {
                t(a)
            })) : c <= e._endX || c > e._startX ? e._scrollingX = !1 : (q(a, Math.min(-1, l(b, f, d))), g(function() {
                t(a)
            })))), e._scrollingY === !0 && (b = e._endY - e._startY, 0 === b ? e._scrollingY = !1 : (c = a.scrollTop(), d = n(e._startY, b, f, c), b > 0 ? c >= e._endY || c < e._startY ? e._scrollingY = !1 : (p(a, Math.max(1, l(b, f, d))), g(function() {
                t(a)
            })) : c <= e._endY || c > e._startY ? e._scrollingY = !1 : (p(a, Math.min(-1, l(b, f, d))), g(function() {
                t(a)
            }))))
        },
        u = function(a, b) {
            var c = a.data("enscroll"),
                d = a.scrollLeft(),
                e = a[0].scrollWidth - a.innerWidth();
            return !c.settings.horizontalScrolling || c._scrollingY ? !1 : (c._scrollingX || (c._scrollingX = !0, c._startX = d, c._endX = c._startX, g(function() {
                t(a)
            })), c._endX = b > 0 ? Math.min(d + b, e) : Math.max(0, d + b), 0 > b && d > 0 || b > 0 && e > d)
        },
        v = function(a, b) {
            var c = a.data("enscroll"),
                d = a.scrollTop(),
                e = a[0].scrollHeight - (c._scrollHeightNoPadding ? a.height() : a.innerHeight());
            return !c.settings.verticalScrolling || c._scrollingX ? !1 : (c._scrollingY || (c._scrollingY = !0, c._startY = d, c._endY = c._startY, g(function() {
                t(a)
            })), c._endY = b > 0 ? Math.min(d + b, e) : Math.max(0, d + b), 0 > b && d > 0 || b > 0 && e > d)
        },
        w = function(b) {
            var c, d = a(this),
                e = d.data("enscroll"),
                g = e.settings.scrollIncrement,
                h = "deltaX" in b ? -b.deltaX : "wheelDeltaX" in b ? b.wheelDeltaX : 0,
                i = "deltaY" in b ? -b.deltaY : "wheelDeltaY" in b ? b.wheelDeltaY : "wheelDelta" in b ? b.wheelDelta : 0;
            Math.abs(h) > Math.abs(i) && 0 !== h ? (c = (h > 0 ? -g : g) << 2, (u(d, c) || !e.settings.propagateWheelEvent) && f(b)) : 0 !== i && (c = (i > 0 ? -g : g) << 2, (v(d, c) || !e.settings.propagateWheelEvent) && f(b))
        },
        x = function() {
            var b, c, d, e = a(this),
                f = e.data("enscroll");
            f && (f.settings.verticalScrolling && (c = a(f.verticalTrackWrapper).find(".enscroll-track")[0], b = c.firstChild, d = e.scrollTop() / (this.scrollHeight - (f._scrollHeightNoPadding ? e.height() : e.innerHeight())), d = isNaN(d) ? 0 : d, b.style.top = d * (a(c).height() - a(b).outerHeight()) + "px"), f.settings.horizontalScrolling && (c = a(f.horizontalTrackWrapper).find(".enscroll-track")[0], b = c.firstChild, d = e.scrollLeft() / (this.scrollWidth - e.innerWidth()), d = isNaN(d) ? 0 : d, b.style.left = d * (a(c).width() - a(b).innerWidth()) + "px"))
        },
        y = function(b) {
            var c, d = a(this),
                e = d.data("enscroll");
            if (!/(input)|(select)|(textarea)/i.test(this.nodeName) && b.target === this && e) {
                switch (c = e.settings.scrollIncrement, b.keyCode) {
                    case 32:
                    case 34:
                        return v(d, d.height()), !1;
                    case 33:
                        return v(d, -d.height()), !1;
                    case 35:
                        return v(d, this.scrollHeight), !1;
                    case 36:
                        return v(d, -this.scrollHeight), !1;
                    case 37:
                        return u(d, -c), !1;
                    case 38:
                        return v(d, -c), !1;
                    case 39:
                        return u(d, c), !1;
                    case 40:
                        return v(d, c), !1
                }
                return !0
            }
        },
        z = function() {
            var b = this,
                d = a(b).data("enscroll").settings,
                e = !0,
                f = 0,
                h = 0,
                i = a(b).offset().top,
                j = i + a(b).outerHeight(),
                k = a(b).offset().left,
                l = k + a(b).outerWidth(),
                m = function(a) {
                    var b = a.pageX,
                        c = a.pageY;
                    f = k > b ? b - k : b > l ? b - l : 0, h = i > c ? c - i : c > j ? c - j : 0
                },
                n = function() {
                    d.horizontalScrolling && f && q(b, parseInt(f / 4, 10)), d.verticalScrolling && h && p(b, parseInt(h / 4, 10)), e && g(n)
                },
                o = function() {
                    e = !1, a(c).off("mousemove.enscroll.pane").off("mouseup.enscroll.pane")
                };
            g(n), a(c).on({
                "mousemove.enscroll.pane": m,
                "mouseup.enscroll.pane": o
            })
        },
        A = function(a) {
            var b, c, e, h, i, j, k, l = this,
                n = function(a) {
                    b = a.touches[0].clientX, c = a.touches[0].clientY, e || (e = c === i && b === h ? d : Math.abs(i - c) > Math.abs(h - b) ? "y" : "x"), f(a)
                },
                o = function() {
                    j && ("y" === e ? (p(l, i - c), k = i - c, i = c) : "x" === e && (q(l, h - b), k = h - b, h = b), g(o))
                },
                r = function() {
                    var a = 0,
                        b = Math.abs(1.5 * k);
                    this.removeEventListener("touchmove", n, !1), this.removeEventListener("touchend", r, !1), j = !1, g(function c() {
                        var d;
                        a === b || j || (d = m(k, b, a), isNaN(d) || 0 === d || (a += 1, "y" === e ? p(l, d) : q(l, d), g(c)))
                    })
                };
            1 === a.touches.length && (h = a.touches[0].clientX, i = a.touches[0].clientY, j = !0, this.addEventListener("touchmove", n, !1), this.addEventListener("touchend", r, !1), g(o))
        },
        B = {
            reposition: function() {
                return this.each(function() {
                    var b, c, d, e = a(this),
                        f = e.data("enscroll"),
                        g = function(a, b, c) {
                            a.style.left = b + "px", a.style.top = c + "px"
                        };
                    f && (d = e.position(), b = f.corner, f.settings.verticalScrolling && (c = f.verticalTrackWrapper, g(c, "right" === f.settings.verticalScrollerSide ? d.left + e.outerWidth() - a(c).width() - h(this, "border-right-width") : d.left + h(this, "border-left-width"), d.top + h(this, "border-top-width"))), f.settings.horizontalScrolling && (c = f.horizontalTrackWrapper, g(c, d.left + h(this, "border-left-width"), d.top + e.outerHeight() - a(c).height() - h(this, "border-bottom-width"))), b && g(b, d.left + e.outerWidth() - a(b).outerWidth() - h(this, "border-right-width"), d.top + e.outerHeight() - a(b).outerHeight() - h(this, "border-bottom-width")))
                })
            },
            resize: function() {
                return this.each(function() {
                    var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r = a(this),
                        s = r.data("enscroll");
                    return s ? (b = s.settings, void(r.is(":visible") ? (b.verticalScrolling && (e = s.verticalTrackWrapper, c = r.innerHeight(), f = c / this.scrollHeight, g = a(e).find(".enscroll-track")[0], j = a(e).find("." + b.scrollUpButtonClass), k = a(e).find("." + b.scrollDownButtonClass), i = b.horizontalScrolling ? c - a(s.horizontalTrackWrapper).find(".enscroll-track").outerHeight() : c, i -= a(g).outerHeight() - a(g).height() + j.outerHeight() + k.outerHeight(), n = g.firstChild, p = Math.max(f * i, b.minScrollbarLength), p -= a(n).outerHeight() - a(n).height(), e.style.display = "none", g.style.height = i + "px", n.style.height = p + "px", 1 > f && (f = r.scrollTop() / (this.scrollHeight - r.height()), n.style.top = f * (i - p) + "px", e.style.display = "block")), b.horizontalScrolling && (e = s.horizontalTrackWrapper, d = r.innerWidth(), f = d / this.scrollWidth, g = a(e).find(".enscroll-track")[0], l = a(e).find("." + b.scrollLeftButtonClass), m = a(e).find("." + b.scrollRightButtonClass), h = b.verticalScrolling ? d - a(s.verticalTrackWrapper).find(".enscroll-track").outerWidth() : d, h -= a(g).outerWidth() - a(g).width() + l.outerWidth() + m.outerWidth(), n = g.firstChild, o = Math.max(f * h, b.minScrollbarLength), o -= a(n).outerWidth() - a(n).width(), e.style.display = "none", g.style.width = h + "px", n.style.width = o + "px", 1 > f && (f = r.scrollLeft() / (this.scrollWidth - r.width()), n.style.left = f * (h - o) + "px", e.style.display = "block"), s._prybar && (q = s._prybar, this.removeChild(q), b.verticalScrolling && (q.style.width = this.scrollWidth + a(s.verticalTrackWrapper).find(".enscroll-track").outerWidth() + "px", this.appendChild(q)))), s.corner && (s.corner.style.display = s.verticalTrackWrapper && s.horizontalTrackWrapper && a(s.verticalTrackWrapper).is(":visible") && a(s.horizontalTrackWrapper).is(":visible") ? "" : "none")) : (b.verticalScrolling && (s.verticalTrackWrapper.style.display = "none"), b.horizontalScrolling && (s.horizontalTrackWrapper.style.display = "none"), s.corner && (s.corner.style.display = "none")))) : !0
                })
            },
            startPolling: function() {
                return this.each(function() {
                    var b, c = a(this).data("enscroll"),
                        d = this,
                        e = a(d),
                        f = -1,
                        g = -1,
                        h = -1,
                        i = -1,
                        j = function() {
                            if (c.settings.pollChanges) {
                                var a = d.scrollWidth,
                                    k = d.scrollHeight,
                                    l = e.width(),
                                    m = e.height(),
                                    n = e.offset();
                                (c.settings.verticalScrolling && (m !== g || k !== i) || c.settings.horizontalScrolling && (l !== f || a !== h)) && (h = a, i = k, B.resize.call(e)), (b.left !== n.left || b.top !== n.top || l !== f || m !== g) && (b = n, f = l, g = m, B.reposition.call(e)), setTimeout(j, 350)
                            }
                        };
                    c && (c.settings.pollChanges = !0, i = d.scrollHeight, h = d.scrollWidth, b = e.offset(), j())
                })
            },
            stopPolling: function() {
                return this.each(function() {
                    var b = a(this).data("enscroll");
                    b && (b.settings.pollChanges = !1)
                })
            },
            destroy: function() {
                return this.each(function() {
                    var c, d, e = a(this),
                        f = e.data("enscroll");
                    f && (B.stopPolling.call(e), d = f._mouseScrollHandler, f.settings.verticalScrolling && (c = f.verticalTrackWrapper, a(c).remove(), c = null), f.settings.horizontalScrolling && (c = f.horizontalTrackWrapper, a(c).remove(), c = null), f._fadeTimer && clearTimeout(f._fadeTimer), f.corner && a(f.corner).remove(), f._prybar && f._prybar.parentNode && f._prybar.parentNode === this && a(f._prybar).remove(), this.setAttribute("style", f._style || ""), f._hadTabIndex || e.removeAttr("tabindex"), e.off("scroll.enscroll.pane").off("keydown.enscroll.pane").off("mouseenter.enscroll.pane").off("mousedown.enscroll.pane").data("enscroll", null), this.removeEventListener ? (this.removeEventListener("wheel", d, !1), this.removeEventListener("mousewheel", d, !1), this.removeEventListener("touchstart", A, !1)) : this.detachEvent && this.detachEvent("onmousewheel", d), a(b).off("resize.enscroll.window"))
                })
            }
        };
    a.fn.enscroll = function(d) {
        var f;
        return B[d] ? B[d].call(this) : (f = a.extend({}, e, d), this.each(function() {
            if (f.verticalScrolling || f.horizontalScrolling) {
                var d, e, g, j, k, l, m, n, t, C, D, E, F, G, H, I, J, K, L = a(this),
                    M = this,
                    N = L.attr("style"),
                    O = !0,
                    P = {
                        position: "absolute",
                        "z-index": f.zIndex,
                        margin: 0,
                        padding: 0
                    },
                    Q = function(a) {
                        w.call(M, a)
                    },
                    R = function(b, c) {
                        "string" == typeof c ? a(b).html(c) : b.appendChild(c)
                    };
                if (f.verticalScrolling) {
                    e = c.createElement("div"), j = c.createElement("div"), l = c.createElement("a"), a(j).css("position", "relative").addClass("enscroll-track").addClass(f.verticalTrackClass).appendTo(e), f.drawScrollButtons && (m = c.createElement("a"), n = c.createElement("a"), a(m).css({
                        display: "block",
                        "text-decoration": "none"
                    }).attr("href", "").html("&nbsp;").addClass(f.scrollUpButtonClass).on("click", function() {
                        return p(M, -f.scrollIncrement), !1
                    }).insertBefore(j), a(n).css({
                        display: "block",
                        "text-decoration": "none"
                    }).attr("href", "").html("&nbsp;").on("click", function() {
                        return p(M, f.scrollIncrement), !1
                    }).addClass(f.scrollDownButtonClass).appendTo(e)), f.clickTrackToScroll && a(j).on("click", function(b) {
                        b.target === this && v(L, b.pageY > a(l).offset().top ? L.height() : -L.height())
                    }), a(l).css({
                        position: "absolute",
                        "z-index": 1
                    }).attr("href", "").addClass(f.verticalHandleClass).mousedown({
                        pane: this
                    }, r).click(function() {
                        return !1
                    }).appendTo(j), R(l, f.verticalHandleHTML), a(e).css(P).insertAfter(this), f.showOnHover && a(e).css("opacity", 0).on("mouseover.enscroll.vertical", function() {
                        o.call(M, !1)
                    }).on("mouseout.enscroll.vertical", function() {
                        o.call(M)
                    }), E = a(j).outerWidth(), f.addPaddingToPane && (K = "right" === f.verticalScrollerSide ? {
                        "padding-right": h(this, "padding-right") + E + "px"
                    } : {
                        "padding-left": h(this, "padding-left") + E + "px"
                    }, L.css(a.extend({
                        width: L.width() - E + "px"
                    }, K)));
                    try {
                        I = parseInt(L.css("outline-width"), 10), 0 !== I && !isNaN(I) || "none" !== L.css("outline-style") || L.css("outline", "none")
                    } catch (S) {
                        L.css("outline", "none")
                    }
                }
                f.horizontalScrolling && (d = c.createElement("div"), g = c.createElement("div"), k = c.createElement("a"), a(g).css({
                    position: "relative",
                    "z-index": 1
                }).addClass("enscroll-track").addClass(f.horizontalTrackClass).appendTo(d), f.drawScrollButtons && (t = c.createElement("a"), C = c.createElement("a"), a(t).css("display", "block").attr("href", "").on("click", function() {
                    return q(M, -f.scrollIncrement), !1
                }).addClass(f.scrollLeftButtonClass).insertBefore(g), a(C).css("display", "block").attr("href", "").on("click", function() {
                    return q(M, f.scrollIncrement), !1
                }).addClass(f.scrollRightButtonClass).appendTo(d)), f.clickTrackToScroll && a(g).on("click", function(b) {
                    b.target === this && u(L, b.pageX > a(k).offset().left ? L.width() : -L.width())
                }), a(k).css({
                    position: "absolute",
                    "z-index": 1
                }).attr("href", "").addClass(f.horizontalHandleClass).click(function() {
                    return !1
                }).mousedown({
                    pane: this
                }, s).appendTo(g), R(k, f.horizontalHandleHTML), a(d).css(P).insertAfter(this), f.showOnHover && a(d).css("opacity", 0).on("mouseover.enscroll.horizontal", function() {
                    o.call(M, !1)
                }).on("mouseout.enscroll.horizontal", function() {
                    o.call(M)
                }), D = a(g).outerHeight(), f.addPaddingToPane && L.css({
                    height: L.height() - D + "px",
                    "padding-bottom": parseInt(L.css("padding-bottom"), 10) + D + "px"
                }), f.verticalScrolling && (J = document.createElement("div"), a(J).css({
                    width: "1px",
                    height: "1px",
                    visibility: "hidden",
                    padding: 0,
                    margin: "-1px"
                }).appendTo(this))), f.verticalScrolling && f.horizontalScrolling && f.drawCorner && (F = c.createElement("div"), a(F).addClass(f.cornerClass).css(P).insertAfter(this)), H = L.attr("tabindex"), H || (L.attr("tabindex", 0), O = !1);
                try {
                    G = L.css("outline"), (!G || G.length < 1) && L.css("outline", "none")
                } catch (S) {
                    L.css("outline", "none")
                }
                L.on({
                    "scroll.enscroll.pane": function(a) {
                        x.call(this, a)
                    },
                    "keydown.enscroll.pane": y,
                    "mousedown.enscroll.pane": z
                }).css("overflow", "hidden").data("enscroll", {
                    settings: f,
                    horizontalTrackWrapper: d,
                    verticalTrackWrapper: e,
                    corner: F,
                    _prybar: J,
                    _mouseScrollHandler: Q,
                    _hadTabIndex: O,
                    _style: N,
                    _scrollingX: !1,
                    _scrollingY: !1,
                    _startX: 0,
                    _startY: 0,
                    _endX: 0,
                    _endY: 0,
                    _duration: parseInt(f.easingDuration / 16.66666, 10),
                    _scrollHeightNoPadding: i(this.nodeName)
                }), a(b).on("resize.enscroll.window", function() {
                    B.reposition.call(L)
                }), f.showOnHover && L.on("mouseenter.enscroll.pane", function() {
                    o.call(this)
                }), this.addEventListener ? ("onwheel" in this || "WheelEvent" in b && navigator.userAgent.toLowerCase().indexOf("msie") >= 0 ? this.addEventListener("wheel", Q, !1) : "onmousewheel" in this && this.addEventListener("mousewheel", Q, !1), this.addEventListener("touchstart", A, !1)) : this.attachEvent && this.attachEvent("onmousewheel", Q), f.pollChanges && B.startPolling.call(L), B.resize.call(L), B.reposition.call(L)
            }
        }))
    }
}(jQuery, window, document);