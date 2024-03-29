!function (t, e) {
  if ('object' == typeof exports && 'object' == typeof module) {
    module.exports = e();
  } else if ('function' == typeof define && define.amd) {
    define([], e);
  } else {
    var n = e();
    for (var r in n) ('object' == typeof exports ? exports : t)[r] = n[r];
  }
}(window, function () {
  return function (t) {
    var e = {};

    function n(r) {
      if (e[r]) {
        return e[r].exports;
      }
      var i = e[r] = { i: r, l: !1, exports: {} };
      return t[r].call(i.exports, i, i.exports, n), i.l = !0, i.exports;
    }

    return n.m = t, n.c = e, n.d = function (t, e, r) {
      n.o(t, e) || Object.defineProperty(t, e, { enumerable: !0, get: r });
    }, n.r = function (t) {
      'undefined' != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: 'Module' }), Object.defineProperty(t, '__esModule', { value: !0 });
    }, n.t = function (t, e) {
      if (1 & e && (t = n(t)), 8 & e) {
        return t;
      }
      if (4 & e && 'object' == typeof t && t && t.__esModule) {
        return t;
      }
      var r = Object.create(null);
      if (n.r(r), Object.defineProperty(r, 'default', { enumerable: !0, value: t }), 2 & e && 'string' != typeof t) {
        for (var i in t) n.d(r, i, function (e) {
          return t[e];
        }.bind(null, i));
      }
      return r;
    }, n.n = function (t) {
      var e = t && t.__esModule ? function () {
        return t.default;
      } : function () {
        return t;
      };
      return n.d(e, 'a', e), e;
    }, n.o = function (t, e) {
      return Object.prototype.hasOwnProperty.call(t, e);
    }, n.p = '', n(n.s = 11);
  }([function (t, e, n) {
    var r = n(7);
    'string' == typeof r && (r = [[t.i, r, '']]), r.locals && (t.exports = r.locals);
    (0, n(4).default)('49c17096', r, !1, {});
  }, function (t, e, n) {
    var r = n(10);
    'string' == typeof r && (r = [[t.i, r, '']]), r.locals && (t.exports = r.locals);
    (0, n(4).default)('fc9c31ce', r, !1, {});
  }, function (t, e) {
    t.exports = function t(e, n) {
      'use strict';
      var r, i, o = /(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi, a = /(^[ ]*|[ ]*$)/g,
        s = /(^([\w ]+,?[\w ]+)?[\w ]+,?[\w ]+\d+:\d+(:\d+)?[\w ]?|^\d{1,4}[\/\-]\d{1,4}[\/\-]\d{1,4}|^\w+, \w+ \d+, \d{4})/,
        l = /^0x[0-9a-f]+$/i, c = /^0/, d = function (e) {
          return t.insensitive && ('' + e).toLowerCase() || '' + e;
        }, u = d(e).replace(a, '') || '', f = d(n).replace(a, '') || '',
        h = u.replace(o, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
        p = f.replace(o, '\0$1\0').replace(/\0$/, '').replace(/^\0/, '').split('\0'),
        g = parseInt(u.match(l), 16) || 1 !== h.length && u.match(s) && Date.parse(u),
        v = parseInt(f.match(l), 16) || g && f.match(s) && Date.parse(f) || null;
      if (v) {
        if (g < v) {
          return -1;
        }
        if (g > v) {
          return 1;
        }
      }
      for (var m = 0, b = Math.max(h.length, p.length); m < b; m++) {
        if (r = !(h[m] || '').match(c) && parseFloat(h[m]) || h[m] || 0, i = !(p[m] || '').match(c) && parseFloat(p[m]) || p[m] || 0, isNaN(r) !== isNaN(i)) {
          return isNaN(r) ? 1 : -1;
        }
        if (typeof r != typeof i && (r += '', i += ''), r < i) {
          return -1;
        }
        if (r > i) {
          return 1;
        }
      }
      return 0;
    };
  }, function (t, e) {
    t.exports = function (t) {
      var e = [];
      return e.toString = function () {
        return this.map(function (e) {
          var n = function (t, e) {
            var n = t[1] || '', r = t[3];
            if (!r) {
              return n;
            }
            if (e && 'function' == typeof btoa) {
              var i = function (t) {
                return '/*# sourceMappingURL=data:application/json;charset=utf-8;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(t)))) + ' */';
              }(r), o = r.sources.map(function (t) {
                return '/*# sourceURL=' + r.sourceRoot + t + ' */';
              });
              return [n].concat(o).concat([i]).join('\n');
            }
            return [n].join('\n');
          }(e, t);
          return e[2] ? '@media ' + e[2] + '{' + n + '}' : n;
        }).join('');
      }, e.i = function (t, n) {
        'string' == typeof t && (t = [[null, t, '']]);
        for (var r = {}, i = 0; i < this.length; i++) {
          var o = this[i][0];
          'number' == typeof o && (r[o] = !0);
        }
        for (i = 0; i < t.length; i++) {
          var a = t[i];
          'number' == typeof a[0] && r[a[0]] || (n && !a[2] ? a[2] = n : n && (a[2] = '(' + a[2] + ') and (' + n + ')'), e.push(a));
        }
      }, e;
    };
  }, function (t, e, n) {
    'use strict';

    function r(t, e) {
      for (var n = [], r = {}, i = 0; i < e.length; i++) {
        var o = e[i], a = o[0], s = { id: t + ':' + i, css: o[1], media: o[2], sourceMap: o[3] };
        r[a] ? r[a].parts.push(s) : n.push(r[a] = { id: a, parts: [s] });
      }
      return n;
    }

    n.r(e), n.d(e, 'default', function () {
      return p;
    });
    var i = 'undefined' != typeof document;
    if ('undefined' != typeof DEBUG && DEBUG && !i) {
      throw new Error('vue-style-loader cannot be used in a non-browser environment. Use { target: \'node\' } in your Webpack config to indicate a server-rendering environment.');
    }
    var o = {}, a = i && (document.head || document.getElementsByTagName('head')[0]), s = null, l = 0, c = !1,
      d = function () {
      }, u = null, f = 'data-vue-ssr-id',
      h = 'undefined' != typeof navigator && /msie [6-9]\b/.test(navigator.userAgent.toLowerCase());

    function p(t, e, n, i) {
      c = n, u = i || {};
      var a = r(t, e);
      return g(a), function (e) {
        for (var n = [], i = 0; i < a.length; i++) {
          var s = a[i];
          (l = o[s.id]).refs--, n.push(l);
        }
        e ? g(a = r(t, e)) : a = [];
        for (i = 0; i < n.length; i++) {
          var l;
          if (0 === (l = n[i]).refs) {
            for (var c = 0; c < l.parts.length; c++) l.parts[c]();
            delete o[l.id];
          }
        }
      };
    }

    function g(t) {
      for (var e = 0; e < t.length; e++) {
        var n = t[e], r = o[n.id];
        if (r) {
          r.refs++;
          for (var i = 0; i < r.parts.length; i++) r.parts[i](n.parts[i]);
          for (; i < n.parts.length; i++) r.parts.push(m(n.parts[i]));
          r.parts.length > n.parts.length && (r.parts.length = n.parts.length);
        } else {
          var a = [];
          for (i = 0; i < n.parts.length; i++) a.push(m(n.parts[i]));
          o[n.id] = { id: n.id, refs: 1, parts: a };
        }
      }
    }

    function v() {
      var t = document.createElement('style');
      return t.type = 'text/css', a.appendChild(t), t;
    }

    function m(t) {
      var e, n, r = document.querySelector('style[' + f + '~="' + t.id + '"]');
      if (r) {
        if (c) {
          return d;
        }
        r.parentNode.removeChild(r);
      }
      if (h) {
        var i = l++;
        r = s || (s = v()), e = y.bind(null, r, i, !1), n = y.bind(null, r, i, !0);
      } else {
        r = v(), e = function (t, e) {
          var n = e.css, r = e.media, i = e.sourceMap;
          r && t.setAttribute('media', r);
          u.ssrId && t.setAttribute(f, e.id);
          i && (n += '\n/*# sourceURL=' + i.sources[0] + ' */', n += '\n/*# sourceMappingURL=data:application/json;base64,' + btoa(unescape(encodeURIComponent(JSON.stringify(i)))) + ' */');
          if (t.styleSheet) {
            t.styleSheet.cssText = n;
          } else {
            for (; t.firstChild;) t.removeChild(t.firstChild);
            t.appendChild(document.createTextNode(n));
          }
        }.bind(null, r), n = function () {
          r.parentNode.removeChild(r);
        };
      }
      return e(t), function (r) {
        if (r) {
          if (r.css === t.css && r.media === t.media && r.sourceMap === t.sourceMap) {
            return;
          }
          e(t = r);
        } else {
          n();
        }
      };
    }

    var b = function () {
      var t = [];
      return function (e, n) {
        return t[e] = n, t.filter(Boolean).join('\n');
      };
    }();

    function y(t, e, n, r) {
      var i = n ? '' : r.css;
      if (t.styleSheet) {
        t.styleSheet.cssText = b(e, i);
      } else {
        var o = document.createTextNode(i), a = t.childNodes;
        a[e] && t.removeChild(a[e]), a.length ? t.insertBefore(o, a[e]) : t.appendChild(o);
      }
    }
  }, function (t, e, n) {
    'use strict';
    var r = Object.assign || function (t) {
      for (var e = 1; e < arguments.length; e++) {
        var n = arguments[e];
        for (var r in n) Object.prototype.hasOwnProperty.call(n, r) && (t[r] = n[r]);
      }
      return t;
    };

    function i(t) {
      if (Array.isArray(t)) {
        for (var e = 0, n = Array(t.length); e < t.length; e++) n[e] = t[e];
        return n;
      }
      return Array.from(t);
    }

    !function () {
      Array.from || (Array.from = function (t) {
        return [].slice.call(t);
      });
      var e = n(8);
      t.exports = function (t) {
        function e(t) {
          t.parentElement.removeChild(t);
        }

        function n(t, e, n) {
          var r = 0 === n ? t.children[0] : t.children[n - 1].nextSibling;
          t.insertBefore(e, r);
        }

        function o(t, e) {
          var n = this;
          this.$nextTick(function () {
            return n.$emit(t.toLowerCase(), e);
          });
        }

        var a = ['Start', 'Add', 'Remove', 'Update', 'End'], s = ['Choose', 'Sort', 'Filter', 'Clone'],
          l = ['Move'].concat(a, s).map(function (t) {
            return 'on' + t;
          }), c = null;
        return {
          name: 'draggable', props: {
            options: Object, list: { type: Array, required: !1, default: null }, value: { type: Array, required: !1, default: null }, noTransitionOnDrag: { type: Boolean, default: !1 }, clone: {
              type: Function, default: function (t) {
                return t;
              }
            }, element: { type: String, default: 'div' }, move: { type: Function, default: null }, componentData: { type: Object, required: !1, default: null }
          }, data: function () {
            return { transitionMode: !1, noneFunctionalComponentMode: !1, init: !1 };
          }, render: function (t) {
            var e = this.$slots.default;
            if (e && 1 === e.length) {
              var n = e[0];
              n.componentOptions && 'transition-group' === n.componentOptions.tag && (this.transitionMode = !0);
            }
            var r = e, o = this.$slots.footer;
            o && (r = e ? [].concat(i(e), i(o)) : [].concat(i(o)));
            var a = null, s = function (t, e) {
              a = function (t, e, n) {
                return void 0 == n ? t : ((t = null == t ? {} : t)[e] = n, t);
              }(a, t, e);
            };
            if (s('attrs', this.$attrs), this.componentData) {
              var l = this.componentData, c = l.on, d = l.props;
              s('on', c), s('props', d);
            }
            return t(this.element, a, r);
          }, mounted: function () {
            var e = this;
            if (this.noneFunctionalComponentMode = this.element.toLowerCase() !== this.$el.nodeName.toLowerCase(), this.noneFunctionalComponentMode && this.transitionMode) {
              throw new Error('Transition-group inside component is not supported. Please alter element value or remove transition-group. Current element value: ' + this.element);
            }
            var n = {};
            a.forEach(function (t) {
              n['on' + t] = function (t) {
                var e = this;
                return function (n) {
                  null !== e.realList && e['onDrag' + t](n), o.call(e, t, n);
                };
              }.call(e, t);
            }), s.forEach(function (t) {
              n['on' + t] = o.bind(e, t);
            });
            var i = r({}, this.options, n, {
              onMove: function (t, n) {
                return e.onDragMove(t, n);
              }
            });
            !('draggable' in i) && (i.draggable = '>*'), this._sortable = new t(this.rootContainer, i), this.computeIndexes();
          }, beforeDestroy: function () {
            this._sortable.destroy();
          }, computed: {
            rootContainer: function () {
              return this.transitionMode ? this.$el.children[0] : this.$el;
            }, isCloning: function () {
              return !!this.options && !!this.options.group && 'clone' === this.options.group.pull;
            }, realList: function () {
              return this.list ? this.list : this.value;
            }
          }, watch: {
            options: {
              handler: function (t) {
                for (var e in t) -1 == l.indexOf(e) && this._sortable.option(e, t[e]);
              }, deep: !0
            }, realList: function () {
              this.computeIndexes();
            }
          }, methods: {
            getChildrenNodes: function () {
              if (this.init || (this.noneFunctionalComponentMode = this.noneFunctionalComponentMode && 1 == this.$children.length, this.init = !0), this.noneFunctionalComponentMode) {
                return this.$children[0].$slots.default;
              }
              var t = this.$slots.default;
              return this.transitionMode ? t[0].child.$slots.default : t;
            }, computeIndexes: function () {
              var t = this;
              this.$nextTick(function () {
                t.visibleIndexes = function (t, e, n) {
                  if (!t) {
                    return [];
                  }
                  var r = t.map(function (t) {
                    return t.elm;
                  }), o = [].concat(i(e)).map(function (t) {
                    return r.indexOf(t);
                  });
                  return n ? o.filter(function (t) {
                    return -1 !== t;
                  }) : o;
                }(t.getChildrenNodes(), t.rootContainer.children, t.transitionMode);
              });
            }, getUnderlyingVm: function (t) {
              var e = function (t, e) {
                return t.map(function (t) {
                  return t.elm;
                }).indexOf(e);
              }(this.getChildrenNodes() || [], t);
              return -1 === e ? null : { index: e, element: this.realList[e] };
            }, getUnderlyingPotencialDraggableComponent: function (t) {
              var e = t.__vue__;
              return e && e.$options && 'transition-group' === e.$options._componentTag ? e.$parent : e;
            }, emitChanges: function (t) {
              var e = this;
              this.$nextTick(function () {
                e.$emit('change', t);
              });
            }, alterList: function (t) {
              if (this.list) {
                t(this.list);
              } else {
                var e = [].concat(i(this.value));
                t(e), this.$emit('input', e);
              }
            }, spliceList: function () {
              var t = arguments, e = function (e) {
                return e.splice.apply(e, t);
              };
              this.alterList(e);
            }, updatePosition: function (t, e) {
              var n = function (n) {
                return n.splice(e, 0, n.splice(t, 1)[0]);
              };
              this.alterList(n);
            }, getRelatedContextFromMoveEvent: function (t) {
              var e = t.to, n = t.related, i = this.getUnderlyingPotencialDraggableComponent(e);
              if (!i) {
                return { component: i };
              }
              var o = i.realList, a = { list: o, component: i };
              if (e !== n && o && i.getUnderlyingVm) {
                var s = i.getUnderlyingVm(n);
                if (s) {
                  return r(s, a);
                }
              }
              return a;
            }, getVmIndex: function (t) {
              var e = this.visibleIndexes, n = e.length;
              return t > n - 1 ? n : e[t];
            }, getComponent: function () {
              return this.$slots.default[0].componentInstance;
            }, resetTransitionData: function (t) {
              if (this.noTransitionOnDrag && this.transitionMode) {
                this.getChildrenNodes()[t].data = null;
                var e = this.getComponent();
                e.children = [], e.kept = void 0;
              }
            }, onDragStart: function (t) {
              this.context = this.getUnderlyingVm(t.item), t.item._underlying_vm_ = this.clone(this.context.element), c = t.item;
            }, onDragAdd: function (t) {
              var n = t.item._underlying_vm_;
              if (void 0 !== n) {
                e(t.item);
                var r = this.getVmIndex(t.newIndex);
                this.spliceList(r, 0, n), this.computeIndexes();
                var i = { element: n, newIndex: r };
                this.emitChanges({ added: i });
              }
            }, onDragRemove: function (t) {
              if (n(this.rootContainer, t.item, t.oldIndex), this.isCloning) {
                e(t.clone);
              } else {
                var r = this.context.index;
                this.spliceList(r, 1);
                var i = { element: this.context.element, oldIndex: r };
                this.resetTransitionData(r), this.emitChanges({ removed: i });
              }
            }, onDragUpdate: function (t) {
              e(t.item), n(t.from, t.item, t.oldIndex);
              var r = this.context.index, i = this.getVmIndex(t.newIndex);
              this.updatePosition(r, i);
              var o = { element: this.context.element, oldIndex: r, newIndex: i };
              this.emitChanges({ moved: o });
            }, computeFutureIndex: function (t, e) {
              if (!t.element) {
                return 0;
              }
              var n = [].concat(i(e.to.children)).filter(function (t) {
                return 'none' !== t.style.display;
              }), r = n.indexOf(e.related), o = t.component.getVmIndex(r);
              return -1 == n.indexOf(c) && e.willInsertAfter ? o + 1 : o;
            }, onDragMove: function (t, e) {
              var n = this.move;
              if (!n || !this.realList) {
                return !0;
              }
              var i = this.getRelatedContextFromMoveEvent(t), o = this.context, a = this.computeFutureIndex(i, t);
              return r(o, { futureIndex: a }), r(t, { relatedContext: i, draggedContext: o }), n(t, e);
            }, onDragEnd: function (t) {
              this.computeIndexes(), c = null;
            }
          }
        };
      }(e);
    }();
  }, function (t, e, n) {
    'use strict';
    var r = n(0);
    n.n(r).a;
  }, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, 'td[data-v-a5e6c936]{min-width:100px}', '']);
  }, function (t, e, n) {
    var r, i;
    /**!
     * Sortable
     * @author  RubaXa   <trash@rubaxa.org>
     * @license MIT
     */
    /**!
     * Sortable
     * @author  RubaXa   <trash@rubaxa.org>
     * @license MIT
     */
    !function (o) {
      'use strict';
      void 0 === (i = 'function' == typeof (r = o) ? r.call(e, n, e, t) : r) || (t.exports = i);
    }(function () {
      'use strict';
      if ('undefined' == typeof window || !window.document) {
        return function () {
          throw new Error('Sortable.js requires a window with a document');
        };
      }
      var t, e, n, r, i, o, a, s, l, c, d, u, f, h, p, g, v, m, b, y, _ = {}, w = /\s+/g, x = /left|right|inline/,
        C = 'Sortable' + (new Date).getTime(), S = window, D = S.document, T = S.parseInt, F = S.setTimeout,
        E = S.jQuery || S.Zepto, N = S.Polymer, M = !1, k = 'draggable' in D.createElement('div'), O = function (t) {
          return !navigator.userAgent.match(/(?:Trident.*rv[ :]?11\.|msie)/i) && ((t = D.createElement('x')).style.cssText = 'pointer-events:auto', 'auto' === t.style.pointerEvents);
        }(), A = !1, I = Math.abs, L = Math.min, $ = [], P = [], B = nt(function (t, e, n) {
          if (n && e.scroll) {
            var r, i, o, a, d, u, f = n[C], h = e.scrollSensitivity, p = e.scrollSpeed, g = t.clientX, v = t.clientY,
              m = window.innerWidth, b = window.innerHeight;
            if (l !== n && (s = e.scroll, l = n, c = e.scrollFn, !0 === s)) {
              s = n;
              do {
                if (s.offsetWidth < s.scrollWidth || s.offsetHeight < s.scrollHeight) {
                  break;
                }
              } while (s = s.parentNode);
            }
            s && (r = s, i = s.getBoundingClientRect(), o = (I(i.right - g) <= h) - (I(i.left - g) <= h), a = (I(i.bottom - v) <= h) - (I(i.top - v) <= h)), o || a || (a = (b - v <= h) - (v <= h), ((o = (m - g <= h) - (g <= h)) || a) && (r = S)), _.vx === o && _.vy === a && _.el === r || (_.el = r, _.vx = o, _.vy = a, clearInterval(_.pid), r && (_.pid = setInterval(function () {
              if (u = a ? a * p : 0, d = o ? o * p : 0, 'function' == typeof c) {
                return c.call(f, d, u, t);
              }
              r === S ? S.scrollTo(S.pageXOffset + d, S.pageYOffset + u) : (r.scrollTop += u, r.scrollLeft += d);
            }, 24)));
          }
        }, 30), R = function (t) {
          function e(t, e) {
            return void 0 !== t && !0 !== t || (t = n.name), 'function' == typeof t ? t : function (n, r) {
              var i = r.options.group.name;
              return e ? t : t && (t.join ? t.indexOf(i) > -1 : i == t);
            };
          }

          var n = {}, r = t.group;
          r && 'object' == typeof r || (r = { name: r }), n.name = r.name, n.checkPull = e(r.pull, !0), n.checkPut = e(r.put), n.revertClone = r.revertClone, t.group = n;
        };
      try {
        window.addEventListener('test', null, Object.defineProperty({}, 'passive', {
          get: function () {
            M = { capture: !1, passive: !1 };
          }
        }));
      } catch (t) {
      }

      function j(t, e) {
        if (!t || !t.nodeType || 1 !== t.nodeType) {
          throw'Sortable: `el` must be HTMLElement, and not ' + {}.toString.call(t);
        }
        this.el = t, this.options = e = rt({}, e), t[C] = this;
        var n = {
          group: Math.random(), sort: !0, disabled: !1, store: null, handle: null, scroll: !0, scrollSensitivity: 30, scrollSpeed: 10, draggable: /[uo]l/i.test(t.nodeName) ? 'li' : '>*', ghostClass: 'sortable-ghost', chosenClass: 'sortable-chosen', dragClass: 'sortable-drag', ignore: 'a, img', filter: null, preventOnFilter: !0, animation: 0, setData: function (t, e) {
            t.setData('Text', e.textContent);
          }, dropBubble: !1, dragoverBubble: !1, dataIdAttr: 'data-id', delay: 0, forceFallback: !1, fallbackClass: 'sortable-fallback', fallbackOnBody: !1, fallbackTolerance: 0, fallbackOffset: { x: 0, y: 0 }, supportPointer: !1 !== j.supportPointer
        };
        for (var r in n) !(r in e) && (e[r] = n[r]);
        for (var i in R(e), this) '_' === i.charAt(0) && 'function' == typeof this[i] && (this[i] = this[i].bind(this));
        this.nativeDraggable = !e.forceFallback && k, Y(t, 'mousedown', this._onTapStart), Y(t, 'touchstart', this._onTapStart), e.supportPointer && Y(t, 'pointerdown', this._onTapStart), this.nativeDraggable && (Y(t, 'dragover', this), Y(t, 'dragenter', this)), P.push(this._onDragOver), e.store && this.sort(e.store.get(this));
      }

      function z(e, n) {
        'clone' !== e.lastPullMode && (n = !0), r && r.state !== n && (H(r, 'display', n ? 'none' : ''), n || r.state && (e.options.group.revertClone ? (i.insertBefore(r, o), e._animate(t, r)) : i.insertBefore(r, t)), r.state = n);
      }

      function U(t, e, n) {
        if (t) {
          n = n || D;
          do {
            if ('>*' === e && t.parentNode === n || et(t, e)) {
              return t;
            }
          } while (t = X(t));
        }
        return null;
      }

      function X(t) {
        var e = t.host;
        return e && e.nodeType ? e : t.parentNode;
      }

      function Y(t, e, n) {
        t.addEventListener(e, n, M);
      }

      function V(t, e, n) {
        t.removeEventListener(e, n, M);
      }

      function W(t, e, n) {
        if (t) {
          if (t.classList) {
            t.classList[n ? 'add' : 'remove'](e);
          } else {
            var r = (' ' + t.className + ' ').replace(w, ' ').replace(' ' + e + ' ', ' ');
            t.className = (r + (n ? ' ' + e : '')).replace(w, ' ');
          }
        }
      }

      function H(t, e, n) {
        var r = t && t.style;
        if (r) {
          if (void 0 === n) {
            return D.defaultView && D.defaultView.getComputedStyle ? n = D.defaultView.getComputedStyle(t, '') : t.currentStyle && (n = t.currentStyle), void 0 === e ? n : n[e];
          }
          e in r || (e = '-webkit-' + e), r[e] = n + ('string' == typeof n ? '' : 'px');
        }
      }

      function J(t, e, n) {
        if (t) {
          var r = t.getElementsByTagName(e), i = 0, o = r.length;
          if (n) {
            for (; i < o; i++) n(r[i], i);
          }
          return r;
        }
        return [];
      }

      function q(t, e, n, i, o, a, s, l) {
        t = t || e[C];
        var c = D.createEvent('Event'), d = t.options, u = 'on' + n.charAt(0).toUpperCase() + n.substr(1);
        c.initEvent(n, !0, !0), c.to = o || e, c.from = a || e, c.item = i || e, c.clone = r, c.oldIndex = s, c.newIndex = l, e.dispatchEvent(c), d[u] && d[u].call(t, c);
      }

      function G(t, e, n, r, i, o, a, s) {
        var l, c, d = t[C], u = d.options.onMove;
        return (l = D.createEvent('Event')).initEvent('move', !0, !0), l.to = e, l.from = t, l.dragged = n, l.draggedRect = r, l.related = i || e, l.relatedRect = o || e.getBoundingClientRect(), l.willInsertAfter = s, t.dispatchEvent(l), u && (c = u.call(d, l, a)), c;
      }

      function Q(t) {
        t.draggable = !1;
      }

      function Z() {
        A = !1;
      }

      function K(t) {
        for (var e = t.tagName + t.className + t.src + t.href + t.textContent, n = e.length, r = 0; n--;) r += e.charCodeAt(n);
        return r.toString(36);
      }

      function tt(t, e) {
        var n = 0;
        if (!t || !t.parentNode) {
          return -1;
        }
        for (; t && (t = t.previousElementSibling);) 'TEMPLATE' === t.nodeName.toUpperCase() || '>*' !== e && !et(t, e) || n++;
        return n;
      }

      function et(t, e) {
        if (t) {
          var n = (e = e.split('.')).shift().toUpperCase(), r = new RegExp('\\s(' + e.join('|') + ')(?=\\s)', 'g');
          return !('' !== n && t.nodeName.toUpperCase() != n || e.length && ((' ' + t.className + ' ').match(r) || []).length != e.length);
        }
        return !1;
      }

      function nt(t, e) {
        var n, r;
        return function () {
          void 0 === n && (n = arguments, r = this, F(function () {
            1 === n.length ? t.call(r, n[0]) : t.apply(r, n), n = void 0;
          }, e));
        };
      }

      function rt(t, e) {
        if (t && e) {
          for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        }
        return t;
      }

      function it(t) {
        return N && N.dom ? N.dom(t).cloneNode(!0) : E ? E(t).clone(!0)[0] : t.cloneNode(!0);
      }

      function ot(t) {
        return F(t, 0);
      }

      function at(t) {
        return clearTimeout(t);
      }

      return j.prototype = {
        constructor: j, _onTapStart: function (e) {
          var n, r = this, i = this.el, o = this.options, s = o.preventOnFilter, l = e.type,
            c = e.touches && e.touches[0], d = (c || e).target, u = e.target.shadowRoot && e.path && e.path[0] || d,
            f = o.filter;
          if (function (t) {
            var e = t.getElementsByTagName('input'), n = e.length;
            for (; n--;) {
              var r = e[n];
              r.checked && $.push(r);
            }
          }(i), !t && !(/mousedown|pointerdown/.test(l) && 0 !== e.button || o.disabled) && !u.isContentEditable && (d = U(d, o.draggable, i)) && a !== d) {
            if (n = tt(d, o.draggable), 'function' == typeof f) {
              if (f.call(this, e, d, this)) {
                return q(r, u, 'filter', d, i, i, n), void (s && e.preventDefault());
              }
            } else if (f && (f = f.split(',').some(function (t) {
              if (t = U(u, t.trim(), i)) {
                return q(r, t, 'filter', d, i, i, n), !0;
              }
            }))) {
              return void (s && e.preventDefault());
            }
            o.handle && !U(u, o.handle, i) || this._prepareDragStart(e, c, d, n);
          }
        }, _prepareDragStart: function (n, r, s, l) {
          var c, d = this, u = d.el, f = d.options, p = u.ownerDocument;
          s && !t && s.parentNode === u && (m = n, i = u, e = (t = s).parentNode, o = t.nextSibling, a = s, g = f.group, h = l, this._lastX = (r || n).clientX, this._lastY = (r || n).clientY, t.style['will-change'] = 'all', c = function () {
            d._disableDelayedDrag(), t.draggable = d.nativeDraggable, W(t, f.chosenClass, !0), d._triggerDragStart(n, r), q(d, i, 'choose', t, i, i, h);
          }, f.ignore.split(',').forEach(function (e) {
            J(t, e.trim(), Q);
          }), Y(p, 'mouseup', d._onDrop), Y(p, 'touchend', d._onDrop), Y(p, 'touchcancel', d._onDrop), Y(p, 'selectstart', d), f.supportPointer && Y(p, 'pointercancel', d._onDrop), f.delay ? (Y(p, 'mouseup', d._disableDelayedDrag), Y(p, 'touchend', d._disableDelayedDrag), Y(p, 'touchcancel', d._disableDelayedDrag), Y(p, 'mousemove', d._disableDelayedDrag), Y(p, 'touchmove', d._disableDelayedDrag), f.supportPointer && Y(p, 'pointermove', d._disableDelayedDrag), d._dragStartTimer = F(c, f.delay)) : c());
        }, _disableDelayedDrag: function () {
          var t = this.el.ownerDocument;
          clearTimeout(this._dragStartTimer), V(t, 'mouseup', this._disableDelayedDrag), V(t, 'touchend', this._disableDelayedDrag), V(t, 'touchcancel', this._disableDelayedDrag), V(t, 'mousemove', this._disableDelayedDrag), V(t, 'touchmove', this._disableDelayedDrag), V(t, 'pointermove', this._disableDelayedDrag);
        }, _triggerDragStart: function (e, n) {
          (n = n || ('touch' == e.pointerType ? e : null)) ? (m = { target: t, clientX: n.clientX, clientY: n.clientY }, this._onDragStart(m, 'touch')) : this.nativeDraggable ? (Y(t, 'dragend', this), Y(i, 'dragstart', this._onDragStart)) : this._onDragStart(m, !0);
          try {
            D.selection ? ot(function () {
              D.selection.empty();
            }) : window.getSelection().removeAllRanges();
          } catch (t) {
          }
        }, _dragStarted: function () {
          if (i && t) {
            var e = this.options;
            W(t, e.ghostClass, !0), W(t, e.dragClass, !1), j.active = this, q(this, i, 'start', t, i, i, h);
          } else {
            this._nulling();
          }
        }, _emulateDragOver: function () {
          if (b) {
            if (this._lastX === b.clientX && this._lastY === b.clientY) {
              return;
            }
            this._lastX = b.clientX, this._lastY = b.clientY, O || H(n, 'display', 'none');
            var t = D.elementFromPoint(b.clientX, b.clientY), e = t, r = P.length;
            if (t && t.shadowRoot && (e = t = t.shadowRoot.elementFromPoint(b.clientX, b.clientY)), e) {
              do {
                if (e[C]) {
                  for (; r--;) P[r]({ clientX: b.clientX, clientY: b.clientY, target: t, rootEl: e });
                  break;
                }
                t = e;
              } while (e = e.parentNode);
            }
            O || H(n, 'display', '');
          }
        }, _onTouchMove: function (t) {
          if (m) {
            var e = this.options, r = e.fallbackTolerance, i = e.fallbackOffset, o = t.touches ? t.touches[0] : t,
              a = o.clientX - m.clientX + i.x, s = o.clientY - m.clientY + i.y,
              l = t.touches ? 'translate3d(' + a + 'px,' + s + 'px,0)' : 'translate(' + a + 'px,' + s + 'px)';
            if (!j.active) {
              if (r && L(I(o.clientX - this._lastX), I(o.clientY - this._lastY)) < r) {
                return;
              }
              this._dragStarted();
            }
            this._appendGhost(), y = !0, b = o, H(n, 'webkitTransform', l), H(n, 'mozTransform', l), H(n, 'msTransform', l), H(n, 'transform', l), t.preventDefault();
          }
        }, _appendGhost: function () {
          if (!n) {
            var e, r = t.getBoundingClientRect(), o = H(t), a = this.options;
            W(n = t.cloneNode(!0), a.ghostClass, !1), W(n, a.fallbackClass, !0), W(n, a.dragClass, !0), H(n, 'top', r.top - T(o.marginTop, 10)), H(n, 'left', r.left - T(o.marginLeft, 10)), H(n, 'width', r.width), H(n, 'height', r.height), H(n, 'opacity', '0.8'), H(n, 'position', 'fixed'), H(n, 'zIndex', '100000'), H(n, 'pointerEvents', 'none'), a.fallbackOnBody && D.body.appendChild(n) || i.appendChild(n), e = n.getBoundingClientRect(), H(n, 'width', 2 * r.width - e.width), H(n, 'height', 2 * r.height - e.height);
          }
        }, _onDragStart: function (e, n) {
          var o = this, a = e.dataTransfer, s = o.options;
          o._offUpEvents(), g.checkPull(o, o, t, e) && ((r = it(t)).draggable = !1, r.style['will-change'] = '', H(r, 'display', 'none'), W(r, o.options.chosenClass, !1), o._cloneId = ot(function () {
            i.insertBefore(r, t), q(o, i, 'clone', t);
          })), W(t, s.dragClass, !0), n ? ('touch' === n ? (Y(D, 'touchmove', o._onTouchMove), Y(D, 'touchend', o._onDrop), Y(D, 'touchcancel', o._onDrop), s.supportPointer && (Y(D, 'pointermove', o._onTouchMove), Y(D, 'pointerup', o._onDrop))) : (Y(D, 'mousemove', o._onTouchMove), Y(D, 'mouseup', o._onDrop)), o._loopId = setInterval(o._emulateDragOver, 50)) : (a && (a.effectAllowed = 'move', s.setData && s.setData.call(o, a, t)), Y(D, 'drop', o), o._dragStartId = ot(o._dragStarted));
        }, _onDragOver: function (a) {
          var s, l, c, h, p = this.el, m = this.options, b = m.group, _ = j.active, w = g === b, S = !1, D = m.sort;
          if (void 0 !== a.preventDefault && (a.preventDefault(), !m.dragoverBubble && a.stopPropagation()), !t.animated && (y = !0, _ && !m.disabled && (w ? D || (h = !i.contains(t)) : v === this || (_.lastPullMode = g.checkPull(this, _, t, a)) && b.checkPut(this, _, t, a)) && (void 0 === a.rootEl || a.rootEl === this.el))) {
            if (B(a, m, this.el), A) {
              return;
            }
            if (s = U(a.target, m.draggable, p), l = t.getBoundingClientRect(), v !== this && (v = this, S = !0), h) {
              return z(_, !0), e = i, void (r || o ? i.insertBefore(t, r || o) : D || i.appendChild(t));
            }
            if (0 === p.children.length || p.children[0] === n || p === a.target && function (t, e) {
              var n = t.lastElementChild.getBoundingClientRect();
              return e.clientY - (n.top + n.height) > 5 || e.clientX - (n.left + n.width) > 5;
            }(p, a)) {
              if (0 !== p.children.length && p.children[0] !== n && p === a.target && (s = p.lastElementChild), s) {
                if (s.animated) {
                  return;
                }
                c = s.getBoundingClientRect();
              }
              z(_, w), !1 !== G(i, p, t, l, s, c, a) && (t.contains(p) || (p.appendChild(t), e = p), this._animate(l, t), s && this._animate(c, s));
            } else if (s && !s.animated && s !== t && void 0 !== s.parentNode[C]) {
              d !== s && (d = s, u = H(s), f = H(s.parentNode));
              var T = (c = s.getBoundingClientRect()).right - c.left, E = c.bottom - c.top,
                N = x.test(u.cssFloat + u.display) || 'flex' == f.display && 0 === f['flex-direction'].indexOf('row'),
                M = s.offsetWidth > t.offsetWidth, k = s.offsetHeight > t.offsetHeight,
                O = (N ? (a.clientX - c.left) / T : (a.clientY - c.top) / E) > .5, I = s.nextElementSibling, L = !1;
              if (N) {
                var $ = t.offsetTop, P = s.offsetTop;
                L = $ === P ? s.previousElementSibling === t && !M || O && M : s.previousElementSibling === t || t.previousElementSibling === s ? (a.clientY - c.top) / E > .5 : P > $;
              } else {
                S || (L = I !== t && !k || O && k);
              }
              var R = G(i, p, t, l, s, c, a, L);
              !1 !== R && (1 !== R && -1 !== R || (L = 1 === R), A = !0, F(Z, 30), z(_, w), t.contains(p) || (L && !I ? p.appendChild(t) : s.parentNode.insertBefore(t, L ? I : s)), e = t.parentNode, this._animate(l, t), this._animate(c, s));
            }
          }
        }, _animate: function (t, e) {
          var n = this.options.animation;
          if (n) {
            var r = e.getBoundingClientRect();
            1 === t.nodeType && (t = t.getBoundingClientRect()), H(e, 'transition', 'none'), H(e, 'transform', 'translate3d(' + (t.left - r.left) + 'px,' + (t.top - r.top) + 'px,0)'), e.offsetWidth, H(e, 'transition', 'all ' + n + 'ms'), H(e, 'transform', 'translate3d(0,0,0)'), clearTimeout(e.animated), e.animated = F(function () {
              H(e, 'transition', ''), H(e, 'transform', ''), e.animated = !1;
            }, n);
          }
        }, _offUpEvents: function () {
          var t = this.el.ownerDocument;
          V(D, 'touchmove', this._onTouchMove), V(D, 'pointermove', this._onTouchMove), V(t, 'mouseup', this._onDrop), V(t, 'touchend', this._onDrop), V(t, 'pointerup', this._onDrop), V(t, 'touchcancel', this._onDrop), V(t, 'pointercancel', this._onDrop), V(t, 'selectstart', this);
        }, _onDrop: function (a) {
          var s = this.el, l = this.options;
          clearInterval(this._loopId), clearInterval(_.pid), clearTimeout(this._dragStartTimer), at(this._cloneId), at(this._dragStartId), V(D, 'mouseover', this), V(D, 'mousemove', this._onTouchMove), this.nativeDraggable && (V(D, 'drop', this), V(s, 'dragstart', this._onDragStart)), this._offUpEvents(), a && (y && (a.preventDefault(), !l.dropBubble && a.stopPropagation()), n && n.parentNode && n.parentNode.removeChild(n), i !== e && 'clone' === j.active.lastPullMode || r && r.parentNode && r.parentNode.removeChild(r), t && (this.nativeDraggable && V(t, 'dragend', this), Q(t), t.style['will-change'] = '', W(t, this.options.ghostClass, !1), W(t, this.options.chosenClass, !1), q(this, i, 'unchoose', t, e, i, h), i !== e ? (p = tt(t, l.draggable)) >= 0 && (q(null, e, 'add', t, e, i, h, p), q(this, i, 'remove', t, e, i, h, p), q(null, e, 'sort', t, e, i, h, p), q(this, i, 'sort', t, e, i, h, p)) : t.nextSibling !== o && (p = tt(t, l.draggable)) >= 0 && (q(this, i, 'update', t, e, i, h, p), q(this, i, 'sort', t, e, i, h, p)), j.active && (null != p && -1 !== p || (p = h), q(this, i, 'end', t, e, i, h, p), this.save()))), this._nulling();
        }, _nulling: function () {
          i = t = e = n = o = r = a = s = l = m = b = y = p = d = u = v = g = j.active = null, $.forEach(function (t) {
            t.checked = !0;
          }), $.length = 0;
        }, handleEvent: function (e) {
          switch (e.type) {
            case'drop':
            case'dragend':
              this._onDrop(e);
              break;
            case'dragover':
            case'dragenter':
              t && (this._onDragOver(e), function (t) {
                t.dataTransfer && (t.dataTransfer.dropEffect = 'move');
                t.preventDefault();
              }(e));
              break;
            case'mouseover':
              this._onDrop(e);
              break;
            case'selectstart':
              e.preventDefault();
          }
        }, toArray: function () {
          for (var t, e = [], n = this.el.children, r = 0, i = n.length, o = this.options; r < i; r++) U(t = n[r], o.draggable, this.el) && e.push(t.getAttribute(o.dataIdAttr) || K(t));
          return e;
        }, sort: function (t) {
          var e = {}, n = this.el;
          this.toArray().forEach(function (t, r) {
            var i = n.children[r];
            U(i, this.options.draggable, n) && (e[t] = i);
          }, this), t.forEach(function (t) {
            e[t] && (n.removeChild(e[t]), n.appendChild(e[t]));
          });
        }, save: function () {
          var t = this.options.store;
          t && t.set(this);
        }, closest: function (t, e) {
          return U(t, e || this.options.draggable, this.el);
        }, option: function (t, e) {
          var n = this.options;
          if (void 0 === e) {
            return n[t];
          }
          n[t] = e, 'group' === t && R(n);
        }, destroy: function () {
          var t = this.el;
          t[C] = null, V(t, 'mousedown', this._onTapStart), V(t, 'touchstart', this._onTapStart), V(t, 'pointerdown', this._onTapStart), this.nativeDraggable && (V(t, 'dragover', this), V(t, 'dragenter', this)), Array.prototype.forEach.call(t.querySelectorAll('[draggable]'), function (t) {
            t.removeAttribute('draggable');
          }), P.splice(P.indexOf(this._onDragOver), 1), this._onDrop(), this.el = t = null;
        }
      }, Y(D, 'touchmove', function (t) {
        j.active && t.preventDefault();
      }), j.utils = {
        on: Y, off: V, css: H, find: J, is: function (t, e) {
          return !!U(t, e, t);
        }, extend: rt, throttle: nt, closest: U, toggleClass: W, clone: it, index: tt, nextTick: ot, cancelNextTick: at
      }, j.create = function (t, e) {
        return new j(t, e);
      }, j.version = '1.7.0', j;
    });
  }, function (t, e, n) {
    'use strict';
    var r = n(1);
    n.n(r).a;
  }, function (t, e, n) {
    (t.exports = n(3)(!1)).push([t.i, '/* Left column width */\n.left-col[data-v-70583719] {\n  min-width: 200px;\n  max-width: 200px;\n}\n\n/* Grid with even gutters */\n.grid-x[data-v-70583719] {\n  margin: 0 -0.75rem;\n}\n.grid-x > *[data-v-70583719] {\n    padding: 0 0.75rem;\n}\n\n/* Drag & drop stuff */\n.drag-area[data-v-70583719] {\n  min-width: 10rem;\n  min-height: 6.5rem;\n  border: 1px dashed #ccc;\n  padding: 0.5rem;\n  transition: background-color 0.4s;\n  padding-top: 2.5rem;\n}\n.drag-area > div[data-v-70583719] {\n    margin: 0.5rem;\n}\n.drag-area *[data-v-70583719] {\n    cursor: move !important;\n}\n.drag-area-highlight[data-v-70583719] {\n  background-color: #f3f3f3;\n}\n.drag-area-label[data-v-70583719] {\n  position: absolute;\n  padding: 0.75rem 1rem;\n}\n.sortable-ghost[data-v-70583719] {\n  opacity: 0.4;\n}\n\n/* Handle icon (mix of grip-vertical & ellipsis-v) */\n.svg-inline--fa.fa-w-10[data-v-70583719] {\n  width: 0.625em;\n}\n.svg-inline--fa[data-v-70583719] {\n  display: inline-block;\n  font-size: inherit;\n  height: 1em;\n  overflow: visible;\n  vertical-align: -.125em;\n}\n.btn-draggable .fa-grip-vertical[data-v-70583719] {\n  margin-left: -0.375rem;\n  margin-right: 0.375rem;\n}\n\n/* Draggable buttons */\n.btn-draggable[data-v-70583719] {\n  white-space: normal;\n  text-align: left;\n}\n', '']);
  }, function (t, e, n) {
    'use strict';
    n.r(e);
    var r = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n('div', [t.showSettings ? n('div', { staticClass: 'row grid-x flex-nowrap mb-4' }, [n('div', { staticClass: 'col left-col' }, [n('button', { staticClass: 'btn btn-outline-primary', on: { click: t.toggleShowSettings } }, [t._v('\n        ' + t._s(t.hideSettingsText) + '\n      ')])]), t._v(' '), n('div', { staticClass: 'col' }, [n('div', { staticClass: 'drag-area-label' }, [t._v(t._s(t.availableFieldsLabelText))]), t._v(' '), n('draggable', {
        staticClass: 'd-flex flex-row drag-area flex-wrap', class: t.dragAreaClass, attrs: { options: { group: 'fields' } }, on: { start: t.start, end: t.end }, model: {
          value: t.internal.fields, callback: function (e) {
            t.$set(t.internal, 'fields', e);
          }, expression: 'internal.fields'
        }
      }, t._l(t.internal.fields, function (e) {
        return n('div', { key: e.key }, [n('div', { staticClass: 'btn btn-draggable btn-secondary' }, [n('svg', { staticClass: 'svg-inline--fa fa-grip-vertical fa-w-10', attrs: { 'aria-hidden': 'true', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 270 512' } }, [n('path', { attrs: { fill: 'currentColor', d: 'M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z M204 208c26.5 0 48 21.5 48 48s-21.5 48 -48 48 -48 -21.5 -48 -48 21.5 -48 48 -48zM156 104c0 26.5 21.5 48 48 48s48 -21.5 48 -48 -21.5 -48 -48 -48 -48 21.5 -48 48zm0 304c0 26.5 21.5 48 48 48s48 -21.5 48 -48 -21.5 -48 -48 -48 -48 21.5 -48 48z' } })]), t._v('\n            ' + t._s(e.label) + '\n          ')])]);
      }))], 1)]) : n('div', { staticClass: 'mb-4' }, [n('button', { staticClass: 'btn btn-outline-primary', on: { click: t.toggleShowSettings } }, [t._v('\n      ' + t._s(t.showSettingsText) + '\n    ')])]), t._v(' '), t.showSettings ? n('div', { staticClass: 'row grid-x mb-4' }, [n('div', { staticClass: 'col left-col' }), t._v(' '), n('div', { staticClass: 'col' }, [n('div', { staticClass: 'drag-area-label' }, [t._v(t._s(t.colsLabelText))]), t._v(' '), n('draggable', {
        staticClass: 'd-flex flex-row drag-area border-primary', class: t.dragAreaClass, attrs: { options: { group: 'fields' } }, on: { start: t.start, end: t.end }, model: {
          value: t.internal.colFields, callback: function (e) {
            t.$set(t.internal, 'colFields', e);
          }, expression: 'internal.colFields'
        }
      }, t._l(t.internal.colFields, function (e) {
        return n('div', { key: e.key }, [n('div', { staticClass: 'btn btn-draggable btn-primary' }, [n('svg', { staticClass: 'svg-inline--fa fa-grip-vertical fa-w-10', attrs: { 'aria-hidden': 'true', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 270 512' } }, [n('path', { attrs: { fill: 'currentColor', d: 'M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z M204 208c26.5 0 48 21.5 48 48s-21.5 48 -48 48 -48 -21.5 -48 -48 21.5 -48 48 -48zM156 104c0 26.5 21.5 48 48 48s48 -21.5 48 -48 -21.5 -48 -48 -48 -48 21.5 -48 48zm0 304c0 26.5 21.5 48 48 48s48 -21.5 48 -48 -21.5 -48 -48 -48 -48 21.5 -48 48z' } })]), t._v('\n            ' + t._s(e.label) + '\n          ')])]);
      }))], 1)]) : t._e(), t._v(' '), n('div', { staticClass: 'row flex-nowrap grid-x' }, [t.showSettings ? n('div', { staticClass: 'col left-col' }, [n('div', { staticClass: 'drag-area-label' }, [t._v(t._s(t.rowsLabelText))]), t._v(' '), n('draggable', {
        staticClass: 'd-flex flex-column align-items-start drag-area border-primary', class: t.dragAreaClass, attrs: { options: { group: 'fields' } }, on: { start: t.start, end: t.end }, model: {
          value: t.internal.rowFields, callback: function (e) {
            t.$set(t.internal, 'rowFields', e);
          }, expression: 'internal.rowFields'
        }
      }, t._l(t.internal.rowFields, function (e) {
        return n('div', { key: e.key }, [n('div', { staticClass: 'btn btn-draggable btn-primary' }, [n('svg', { staticClass: 'svg-inline--fa fa-grip-vertical fa-w-10', attrs: { 'aria-hidden': 'true', role: 'img', xmlns: 'http://www.w3.org/2000/svg', viewBox: '0 0 270 512' } }, [n('path', { attrs: { fill: 'currentColor', d: 'M64 208c26.5 0 48 21.5 48 48s-21.5 48-48 48-48-21.5-48-48 21.5-48 48-48zM16 104c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48zm0 304c0 26.5 21.5 48 48 48s48-21.5 48-48-21.5-48-48-48-48 21.5-48 48z M204 208c26.5 0 48 21.5 48 48s-21.5 48 -48 48 -48 -21.5 -48 -48 21.5 -48 48 -48zM156 104c0 26.5 21.5 48 48 48s48 -21.5 48 -48 -21.5 -48 -48 -48 -48 21.5 -48 48zm0 304c0 26.5 21.5 48 48 48s48 -21.5 48 -48 -21.5 -48 -48 -48 -48 21.5 -48 48z' } })]), t._v('\n            ' + t._s(e.label) + '\n          ')])]);
      }))], 1) : t._e(), t._v(' '), n('div', { staticClass: 'col table-responsive' }, [n('pivot-table', {
        attrs: { data: t.data, 'row-fields': t.internal.rowFields, 'col-fields': t.internal.colFields, reducer: t.reducer, 'no-data-warning-text': t.noDataWarningText, 'is-data-loading': t.isDataLoading }, scopedSlots: t._u([t._l(t.$scopedSlots, function (e, n) {
          return {
            key: n, fn: function (e) {
              var r = e.value;
              return [t._t(n, null, null, { value: r })];
            }
          };
        })])
      }, [n('template', { slot: 'loading' }, [t._t('loading')], 2)], 2)], 1)])]);
    };
    r._withStripped = !0;
    var i = function () {
      var t = this, e = t.$createElement, n = t._self._c || e;
      return n('div', { staticClass: 'table-responsive' }, [t.isDataLoading ? [t._t('loading', [t._v('\n      Loading...\n    ')])] : 0 === t.data.length ? n('div', { staticClass: 'alert alert-warning', attrs: { role: 'alert' } }, [t._v('\n    ' + t._s(t.noDataWarningText) + '\n  ')]) : n('table', { staticClass: 'table table-bordered' }, [n('thead', t._l(t.colFields, function (e, r) {
        return n('tr', { key: e.key }, [0 === r && t.rowFields.length > 0 ? n('th', { attrs: { colspan: t.rowFields.length, rowspan: t.colFields.length } }) : t._e(), t._v(' '), t._l(t.cols, function (i, o) {
          return 0 !== t.spanSize(t.cols, r, o) ? n('th', { key: JSON.stringify(i), attrs: { colspan: t.spanSize(t.cols, r, o) } }, [e.headerSlotName ? t._t(e.headerSlotName, [t._v('\n            Undefined slot "' + t._s(e.headerSlotName) + '"\n          ')], { value: i[r] }) : [t._v('\n            ' + t._s(i[r]) + '\n          ')]], 2) : t._e();
        })], 2);
      })), t._v(' '), n('tbody', t._l(t.rows, function (e, r) {
        return n('tr', { key: JSON.stringify(e) }, [t._l(t.rowFields, function (i, o) {
          return 0 !== t.spanSize(t.rows, o, r) ? n('td', { key: i.key, staticClass: 'font-weight-bold', attrs: { rowspan: t.spanSize(t.rows, o, r) } }, [i.headerSlotName ? t._t(i.headerSlotName, [t._v('\n            Undefined slot "' + t._s(i.headerSlotName) + '"\n          ')], { value: e[o] }) : [t._v('\n            ' + t._s(e[o]) + '\n          ')]], 2) : t._e();
        }), t._v(' '), t._l(t.cols, function (r) {
          return n('td', { key: JSON.stringify(r), staticClass: 'text-right' }, [t.$scopedSlots.value ? t._t('value', null, { value: t.values[JSON.stringify({ col: r, row: e })] }) : [t._v(t._s(t.values[JSON.stringify({ col: r, row: e })]))]], 2);
        })], 2);
      }))])], 2);
    };
    i._withStripped = !0;
    var o, a = n(2), s = n.n(a);

    function l(t, e, n) {
      return e in t ? Object.defineProperty(t, e, { value: n, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = n, t;
    }

    function c(t) {
      return function (t) {
        if (Array.isArray(t)) {
          for (var e = 0, n = new Array(t.length); e < t.length; e++) n[e] = t[e];
          return n;
        }
      }(t) || function (t) {
        if (Symbol.iterator in Object(t) || '[object Arguments]' === Object.prototype.toString.call(t)) {
          return Array.from(t);
        }
      }(t) || function () {
        throw new TypeError('Invalid attempt to spread non-iterable instance');
      }();
    }

    var d = (l(o = { props: ['data', 'rowFields', 'colFields', 'reducer', 'noDataWarningText'] }, 'props', {
      data: { type: Array, default: [] }, rowFields: { type: Array, default: [] }, colFields: { type: Array, default: [] }, reducer: {
        type: Function, default: function (t, e) {
          return t + 1;
        }
      }, noDataWarningText: { type: String, default: 'No data to display.' }, isDataLoading: { type: Boolean, default: !1 }
    }), l(o, 'data', function () {
      return { values: {} };
    }), l(o, 'computed', {
      cols: function () {
        var t = this, e = [];
        return this.colFields.length > 0 ? function n(r, i) {
          var o = t.colFields[r].getter, a = t.colFields[r].sort || s.a;
          c(new Set(t.filteredData({ data: t.data, colFilters: i }).map(function (t) {
            return o(t);
          }))).sort(a).forEach(function (o) {
            var a = Object.assign({}, i);
            a[r] = o, r + 1 < t.colFields.length ? n(r + 1, a) : e.push(a);
          });
        }(0, {}) : e.push({}), e;
      }, rows: function () {
        var t = this, e = [];
        return this.rowFields.length > 0 ? function n(r, i) {
          var o = t.rowFields[r].getter, a = t.rowFields[r].sort || s.a;
          c(new Set(t.filteredData({ data: t.data, rowFilters: i }).map(function (t) {
            return o(t);
          }))).sort(a).forEach(function (o) {
            var a = Object.assign({}, i);
            a[r] = o, r + 1 < t.rowFields.length ? n(r + 1, a) : e.push(a);
          });
        }(0, {}) : e.push({}), e;
      }, colsAndRows: function () {
        return [this.cols, this.rows];
      }
    }), l(o, 'methods', {
      filteredData: function (t) {
        var e = t.data, n = void 0 === e ? [] : e, r = t.colFilters, i = void 0 === r ? {} : r, o = t.rowFilters,
          a = void 0 === o ? {} : o, s = {}, l = {};
        for (var c in i) s[c] = this.colFields[c].getter;
        for (var d in a) l[d] = this.rowFields[d].getter;
        return n.filter(function (t) {
          var e = !0;
          for (var n in i) if (s[n](t) !== i[n]) {
            e = !1;
            break;
          }
          if (e) {
            for (var r in a) if (l[r](t) !== a[r]) {
              e = !1;
              break;
            }
          }
          return e;
        });
      }, spanSize: function (t, e, n) {
        if (n > 0 && t[n - 1][e] === t[n][e] && (0 === e || 0 === this.spanSize(t, e - 1, n))) {
          return 0;
        }
        for (var r = 1, i = n; i + 1 < t.length && t[i + 1][e] === t[i][e] && (0 === e || i + 1 < t.length && 0 === this.spanSize(t, e - 1, i + 1));) i++, r++;
        return r;
      }, computeValues: function () {
        var t = this;
        this.values = {}, this.rows.forEach(function (e) {
          var n = t.filteredData({ data: t.data, rowFilters: e });
          t.cols.forEach(function (r) {
            var i = t.filteredData({ data: n, colFilters: r }), o = JSON.stringify({ col: r, row: e }),
              a = i.reduce(t.reducer, 0);
            t.values[o] = a;
          });
        });
      }
    }), l(o, 'watch', {
      colsAndRows: function () {
        this.computeValues();
      }
    }), l(o, 'created', function () {
      this.computeValues();
    }), o);
    n(6);

    function u(t, e, n, r, i, o, a, s) {
      var l, c = 'function' == typeof t ? t.options : t;
      if (e && (c.render = e, c.staticRenderFns = n, c._compiled = !0), r && (c.functional = !0), o && (c._scopeId = 'data-v-' + o), a ? (l = function (t) {
        (t = t || this.$vnode && this.$vnode.ssrContext || this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) || 'undefined' == typeof __VUE_SSR_CONTEXT__ || (t = __VUE_SSR_CONTEXT__), i && i.call(this, t), t && t._registeredComponents && t._registeredComponents.add(a);
      }, c._ssrRegister = l) : i && (l = s ? function () {
        i.call(this, this.$root.$options.shadowRoot);
      } : i), l) {
        if (c.functional) {
          c._injectStyles = l;
          var d = c.render;
          c.render = function (t, e) {
            return l.call(e), d(t, e);
          };
        } else {
          var u = c.beforeCreate;
          c.beforeCreate = u ? [].concat(u, l) : [l];
        }
      }
      return { exports: t, options: c };
    }

    var f = u(d, i, [], !1, null, 'a5e6c936', null);
    f.options.__file = 'src/PivotTable.vue';
    var h = f.exports, p = n(5), g = {
      name: 'vue-pivot', components: { PivotTable: h, Draggable: n.n(p).a }, props: {
        data: { type: Array, default: [] }, fields: { type: Array, default: [] }, rowFields: { type: Array, default: [] }, colFields: { type: Array, default: [] }, reducer: {
          type: Function, default: function (t, e) {
            return t + 1
          }
        }, defaultShowSettings: { type: Boolean, default: !0 }, availableFieldsLabelText: { type: String, default: "Available fields" }, colsLabelText: { type: String, default: "Columns" }, rowsLabelText: { type: String, default: "Rows" }, hideSettingsText: { type: String, default: "Hide settings" }, showSettingsText: { type: String, default: "Show settings" }, noDataWarningText: { type: String, default: "No data to display." }, isDataLoading: { type: Boolean, default: !1 }
      }, data: function () {
        return { internal: { fields: this.fields, rowFields: this.rowFields, colFields: this.colFields }, dragging: !1, showSettings: !0 }
      }, computed: {
        dragAreaClass: function () {
          return this.dragging ? "drag-area-highlight" : null
        }
      }, methods: {
        toggleShowSettings: function () {
          this.showSettings = !this.showSettings
        }, start: function () {
          this.dragging = !0
        }, end: function () {
          this.dragging = !1
        }
      }, created: function () {
        this.showSettings = this.defaultShowSettings
      }
    }, v = (n(9), u(g, r, [], !1, null, "70583719", null));
    v.options.__file = "src/Pivot.vue";
    e.default = v.exports
  }])
});
