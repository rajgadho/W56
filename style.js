/*!
 * Webflow: Front-end site library
 * @license MIT
 * Inline scripts may access the api using an async handler:
 *   var Webflow = Webflow || [];
 *   Webflow.push(readyFunction);
 */

(() => {
	var s = (e, t) => () => (t || e((t = {
		exports: {}
	}).exports, t), t.exports);
	var Di = s(() => {
		window.tram = function(e) {
			function t(l, E) {
				var y = new _e.Bare;
				return y.init(l, E)
			}

			function r(l) {
				return l.replace(/[A-Z]/g, function(E) {
					return "-" + E.toLowerCase()
				})
			}

			function n(l) {
				var E = parseInt(l.slice(1), 16),
					y = E >> 16 & 255,
					T = E >> 8 & 255,
					x = 255 & E;
				return [y, T, x]
			}

			function i(l, E, y) {
				return "#" + (1 << 24 | l << 16 | E << 8 | y).toString(16).slice(1)
			}

			function o() {}

			function a(l, E) {
				f("Type warning: Expected: [" + l + "] Got: [" + typeof E + "] " + E)
			}

			function u(l, E, y) {
				f("Units do not match [" + l + "]: " + E + ", " + y)
			}

			function c(l, E, y) {
				if (E !== void 0 && (y = E), l === void 0) return y;
				var T = y;
				return mr.test(l) || !Nt.test(l) ? T = parseInt(l, 10) : Nt.test(l) && (T = 1e3 * parseFloat(l)), 0 > T && (T = 0), T === T ? T : y
			}

			function f(l) {
				le.debug && window && window.console.warn(l)
			}

			function g(l) {
				for (var E = -1, y = l ? l.length : 0, T = []; ++E < y;) {
					var x = l[E];
					x && T.push(x)
				}
				return T
			}
			var v = function(l, E, y) {
					function T($) {
						return typeof $ == "object"
					}

					function x($) {
						return typeof $ == "function"
					}

					function C() {}

					function j($, fe) {
						function X() {
							var Ne = new te;
							return x(Ne.init) && Ne.init.apply(Ne, arguments), Ne
						}

						function te() {}
						fe === y && (fe = $, $ = Object), X.Bare = te;
						var re, ye = C[l] = $[l],
							et = te[l] = X[l] = new C;
						return et.constructor = X, X.mixin = function(Ne) {
							return te[l] = X[l] = j(X, Ne)[l], X
						}, X.open = function(Ne) {
							if (re = {}, x(Ne) ? re = Ne.call(X, et, ye, X, $) : T(Ne) && (re = Ne), T(re))
								for (var Or in re) E.call(re, Or) && (et[Or] = re[Or]);
							return x(et.init) || (et.init = $), X
						}, X.open(fe)
					}
					return j
				}("prototype", {}.hasOwnProperty),
				h = {
					ease: ["ease", function(l, E, y, T) {
						var x = (l /= T) * l,
							C = x * l;
						return E + y * (-2.75 * C * x + 11 * x * x + -15.5 * C + 8 * x + .25 * l)
					}],
					"ease-in": ["ease-in", function(l, E, y, T) {
						var x = (l /= T) * l,
							C = x * l;
						return E + y * (-1 * C * x + 3 * x * x + -3 * C + 2 * x)
					}],
					"ease-out": ["ease-out", function(l, E, y, T) {
						var x = (l /= T) * l,
							C = x * l;
						return E + y * (.3 * C * x + -1.6 * x * x + 2.2 * C + -1.8 * x + 1.9 * l)
					}],
					"ease-in-out": ["ease-in-out", function(l, E, y, T) {
						var x = (l /= T) * l,
							C = x * l;
						return E + y * (2 * C * x + -5 * x * x + 2 * C + 2 * x)
					}],
					linear: ["linear", function(l, E, y, T) {
						return y * l / T + E
					}],
					"ease-in-quad": ["cubic-bezier(0.550, 0.085, 0.680, 0.530)", function(l, E, y, T) {
						return y * (l /= T) * l + E
					}],
					"ease-out-quad": ["cubic-bezier(0.250, 0.460, 0.450, 0.940)", function(l, E, y, T) {
						return -y * (l /= T) * (l - 2) + E
					}],
					"ease-in-out-quad": ["cubic-bezier(0.455, 0.030, 0.515, 0.955)", function(l, E, y, T) {
						return (l /= T / 2) < 1 ? y / 2 * l * l + E : -y / 2 * (--l * (l - 2) - 1) + E
					}],
					"ease-in-cubic": ["cubic-bezier(0.550, 0.055, 0.675, 0.190)", function(l, E, y, T) {
						return y * (l /= T) * l * l + E
					}],
					"ease-out-cubic": ["cubic-bezier(0.215, 0.610, 0.355, 1)", function(l, E, y, T) {
						return y * ((l = l / T - 1) * l * l + 1) + E
					}],
					"ease-in-out-cubic": ["cubic-bezier(0.645, 0.045, 0.355, 1)", function(l, E, y, T) {
						return (l /= T / 2) < 1 ? y / 2 * l * l * l + E : y / 2 * ((l -= 2) * l * l + 2) + E
					}],
					"ease-in-quart": ["cubic-bezier(0.895, 0.030, 0.685, 0.220)", function(l, E, y, T) {
						return y * (l /= T) * l * l * l + E
					}],
					"ease-out-quart": ["cubic-bezier(0.165, 0.840, 0.440, 1)", function(l, E, y, T) {
						return -y * ((l = l / T - 1) * l * l * l - 1) + E
					}],
					"ease-in-out-quart": ["cubic-bezier(0.770, 0, 0.175, 1)", function(l, E, y, T) {
						return (l /= T / 2) < 1 ? y / 2 * l * l * l * l + E : -y / 2 * ((l -= 2) * l * l * l - 2) + E
					}],
					"ease-in-quint": ["cubic-bezier(0.755, 0.050, 0.855, 0.060)", function(l, E, y, T) {
						return y * (l /= T) * l * l * l * l + E
					}],
					"ease-out-quint": ["cubic-bezier(0.230, 1, 0.320, 1)", function(l, E, y, T) {
						return y * ((l = l / T - 1) * l * l * l * l + 1) + E
					}],
					"ease-in-out-quint": ["cubic-bezier(0.860, 0, 0.070, 1)", function(l, E, y, T) {
						return (l /= T / 2) < 1 ? y / 2 * l * l * l * l * l + E : y / 2 * ((l -= 2) * l * l * l * l + 2) + E
					}],
					"ease-in-sine": ["cubic-bezier(0.470, 0, 0.745, 0.715)", function(l, E, y, T) {
						return -y * Math.cos(l / T * (Math.PI / 2)) + y + E
					}],
					"ease-out-sine": ["cubic-bezier(0.390, 0.575, 0.565, 1)", function(l, E, y, T) {
						return y * Math.sin(l / T * (Math.PI / 2)) + E
					}],
					"ease-in-out-sine": ["cubic-bezier(0.445, 0.050, 0.550, 0.950)", function(l, E, y, T) {
						return -y / 2 * (Math.cos(Math.PI * l / T) - 1) + E
					}],
					"ease-in-expo": ["cubic-bezier(0.950, 0.050, 0.795, 0.035)", function(l, E, y, T) {
						return l === 0 ? E : y * Math.pow(2, 10 * (l / T - 1)) + E
					}],
					"ease-out-expo": ["cubic-bezier(0.190, 1, 0.220, 1)", function(l, E, y, T) {
						return l === T ? E + y : y * (-Math.pow(2, -10 * l / T) + 1) + E
					}],
					"ease-in-out-expo": ["cubic-bezier(1, 0, 0, 1)", function(l, E, y, T) {
						return l === 0 ? E : l === T ? E + y : (l /= T / 2) < 1 ? y / 2 * Math.pow(2, 10 * (l - 1)) + E : y / 2 * (-Math.pow(2, -10 * --l) + 2) + E
					}],
					"ease-in-circ": ["cubic-bezier(0.600, 0.040, 0.980, 0.335)", function(l, E, y, T) {
						return -y * (Math.sqrt(1 - (l /= T) * l) - 1) + E
					}],
					"ease-out-circ": ["cubic-bezier(0.075, 0.820, 0.165, 1)", function(l, E, y, T) {
						return y * Math.sqrt(1 - (l = l / T - 1) * l) + E
					}],
					"ease-in-out-circ": ["cubic-bezier(0.785, 0.135, 0.150, 0.860)", function(l, E, y, T) {
						return (l /= T / 2) < 1 ? -y / 2 * (Math.sqrt(1 - l * l) - 1) + E : y / 2 * (Math.sqrt(1 - (l -= 2) * l) + 1) + E
					}],
					"ease-in-back": ["cubic-bezier(0.600, -0.280, 0.735, 0.045)", function(l, E, y, T, x) {
						return x === void 0 && (x = 1.70158), y * (l /= T) * l * ((x + 1) * l - x) + E
					}],
					"ease-out-back": ["cubic-bezier(0.175, 0.885, 0.320, 1.275)", function(l, E, y, T, x) {
						return x === void 0 && (x = 1.70158), y * ((l = l / T - 1) * l * ((x + 1) * l + x) + 1) + E
					}],
					"ease-in-out-back": ["cubic-bezier(0.680, -0.550, 0.265, 1.550)", function(l, E, y, T, x) {
						return x === void 0 && (x = 1.70158), (l /= T / 2) < 1 ? y / 2 * l * l * (((x *= 1.525) + 1) * l - x) + E : y / 2 * ((l -= 2) * l * (((x *= 1.525) + 1) * l + x) + 2) + E
					}]
				},
				_ = {
					"ease-in-back": "cubic-bezier(0.600, 0, 0.735, 0.045)",
					"ease-out-back": "cubic-bezier(0.175, 0.885, 0.320, 1)",
					"ease-in-out-back": "cubic-bezier(0.680, 0, 0.265, 1)"
				},
				S = document,
				m = window,
				D = "bkwld-tram",
				O = /[\-\.0-9]/g,
				b = /[A-Z]/,
				I = "number",
				N = /^(rgb|#)/,
				q = /(em|cm|mm|in|pt|pc|px)$/,
				L = /(em|cm|mm|in|pt|pc|px|%)$/,
				F = /(deg|rad|turn)$/,
				W = "unitless",
				H = /(all|none) 0s ease 0s/,
				Q = /^(width|height)$/,
				G = " ",
				R = S.createElement("a"),
				d = ["Webkit", "Moz", "O", "ms"],
				P = ["-webkit-", "-moz-", "-o-", "-ms-"],
				w = function(l) {
					if (l in R.style) return {
						dom: l,
						css: l
					};
					var E, y, T = "",
						x = l.split("-");
					for (E = 0; E < x.length; E++) T += x[E].charAt(0).toUpperCase() + x[E].slice(1);
					for (E = 0; E < d.length; E++)
						if (y = d[E] + T, y in R.style) return {
							dom: y,
							css: P[E] + l
						}
				},
				M = t.support = {
					bind: Function.prototype.bind,
					transform: w("transform"),
					transition: w("transition"),
					backface: w("backface-visibility"),
					timing: w("transition-timing-function")
				};
			if (M.transition) {
				var B = M.timing.dom;
				if (R.style[B] = h["ease-in-back"][0], !R.style[B])
					for (var K in _) h[K][0] = _[K]
			}
			var ne = t.frame = function() {
					var l = m.requestAnimationFrame || m.webkitRequestAnimationFrame || m.mozRequestAnimationFrame || m.oRequestAnimationFrame || m.msRequestAnimationFrame;
					return l && M.bind ? l.bind(m) : function(E) {
						m.setTimeout(E, 16)
					}
				}(),
				pe = t.now = function() {
					var l = m.performance,
						E = l && (l.now || l.webkitNow || l.msNow || l.mozNow);
					return E && M.bind ? E.bind(l) : Date.now || function() {
						return +new Date
					}
				}(),
				Ce = v(function(l) {
					function E(z, oe) {
						var Ee = g(("" + z).split(G)),
							ae = Ee[0];
						oe = oe || {};
						var qe = U[ae];
						if (!qe) return f("Unsupported property: " + ae);
						if (!oe.weak || !this.props[ae]) {
							var He = qe[0],
								Fe = this.props[ae];
							return Fe || (Fe = this.props[ae] = new He.Bare), Fe.init(this.$el, Ee, qe, oe), Fe
						}
					}

					function y(z, oe, Ee) {
						if (z) {
							var ae = typeof z;
							if (oe || (this.timer && this.timer.destroy(), this.queue = [], this.active = !1), ae == "number" && oe) return this.timer = new ht({
								duration: z,
								context: this,
								complete: C
							}), void(this.active = !0);
							if (ae == "string" && oe) {
								switch (z) {
									case "hide":
										X.call(this);
										break;
									case "stop":
										j.call(this);
										break;
									case "redraw":
										te.call(this);
										break;
									default:
										E.call(this, z, Ee && Ee[1])
								}
								return C.call(this)
							}
							if (ae == "function") return void z.call(this, this);
							if (ae == "object") {
								var qe = 0;
								et.call(this, z, function(Ie, oI) {
									Ie.span > qe && (qe = Ie.span), Ie.stop(), Ie.animate(oI)
								}, function(Ie) {
									"wait" in Ie && (qe = c(Ie.wait, 0))
								}), ye.call(this), qe > 0 && (this.timer = new ht({
									duration: qe,
									context: this
								}), this.active = !0, oe && (this.timer.complete = C));
								var He = this,
									Fe = !1,
									sn = {};
								ne(function() {
									et.call(He, z, function(Ie) {
										Ie.active && (Fe = !0, sn[Ie.name] = Ie.nextStyle)
									}), Fe && He.$el.css(sn)
								})
							}
						}
					}

					function T(z) {
						z = c(z, 0), this.active ? this.queue.push({
							options: z
						}) : (this.timer = new ht({
							duration: z,
							context: this,
							complete: C
						}), this.active = !0)
					}

					function x(z) {
						return this.active ? (this.queue.push({
							options: z,
							args: arguments
						}), void(this.timer.complete = C)) : f("No active transition timer. Use start() or wait() before then().")
					}

					function C() {
						if (this.timer && this.timer.destroy(), this.active = !1, this.queue.length) {
							var z = this.queue.shift();
							y.call(this, z.options, !0, z.args)
						}
					}

					function j(z) {
						this.timer && this.timer.destroy(), this.queue = [], this.active = !1;
						var oe;
						typeof z == "string" ? (oe = {}, oe[z] = 1) : oe = typeof z == "object" && z != null ? z : this.props, et.call(this, oe, Ne), ye.call(this)
					}

					function $(z) {
						j.call(this, z), et.call(this, z, Or, nI)
					}

					function fe(z) {
						typeof z != "string" && (z = "block"), this.el.style.display = z
					}

					function X() {
						j.call(this), this.el.style.display = "none"
					}

					function te() {
						this.el.offsetHeight
					}

					function re() {
						j.call(this), e.removeData(this.el, D), this.$el = this.el = null
					}

					function ye() {
						var z, oe, Ee = [];
						this.upstream && Ee.push(this.upstream);
						for (z in this.props) oe = this.props[z], oe.active && Ee.push(oe.string);
						Ee = Ee.join(","), this.style !== Ee && (this.style = Ee, this.el.style[M.transition.dom] = Ee)
					}

					function et(z, oe, Ee) {
						var ae, qe, He, Fe, sn = oe !== Ne,
							Ie = {};
						for (ae in z) He = z[ae], ae in de ? (Ie.transform || (Ie.transform = {}), Ie.transform[ae] = He) : (b.test(ae) && (ae = r(ae)), ae in U ? Ie[ae] = He : (Fe || (Fe = {}), Fe[ae] = He));
						for (ae in Ie) {
							if (He = Ie[ae], qe = this.props[ae], !qe) {
								if (!sn) continue;
								qe = E.call(this, ae)
							}
							oe.call(this, qe, He)
						}
						Ee && Fe && Ee.call(this, Fe)
					}

					function Ne(z) {
						z.stop()
					}

					function Or(z, oe) {
						z.set(oe)
					}

					function nI(z) {
						this.$el.css(z)
					}

					function Be(z, oe) {
						l[z] = function() {
							return this.children ? iI.call(this, oe, arguments) : (this.el && oe.apply(this, arguments), this)
						}
					}

					function iI(z, oe) {
						var Ee, ae = this.children.length;
						for (Ee = 0; ae > Ee; Ee++) z.apply(this.children[Ee], oe);
						return this
					}
					l.init = function(z) {
						if (this.$el = e(z), this.el = this.$el[0], this.props = {}, this.queue = [], this.style = "", this.active = !1, le.keepInherited && !le.fallback) {
							var oe = V(this.el, "transition");
							oe && !H.test(oe) && (this.upstream = oe)
						}
						M.backface && le.hideBackface && p(this.el, M.backface.css, "hidden")
					}, Be("add", E), Be("start", y), Be("wait", T), Be("then", x), Be("next", C), Be("stop", j), Be("set", $), Be("show", fe), Be("hide", X), Be("redraw", te), Be("destroy", re)
				}),
				_e = v(Ce, function(l) {
					function E(y, T) {
						var x = e.data(y, D) || e.data(y, D, new Ce.Bare);
						return x.el || x.init(y), T ? x.start(T) : x
					}
					l.init = function(y, T) {
						var x = e(y);
						if (!x.length) return this;
						if (x.length === 1) return E(x[0], T);
						var C = [];
						return x.each(function(j, $) {
							C.push(E($, T))
						}), this.children = C, this
					}
				}),
				Y = v(function(l) {
					function E() {
						var C = this.get();
						this.update("auto");
						var j = this.get();
						return this.update(C), j
					}

					function y(C, j, $) {
						return j !== void 0 && ($ = j), C in h ? C : $
					}

					function T(C) {
						var j = /rgba?\((\d+),\s*(\d+),\s*(\d+)/.exec(C);
						return (j ? i(j[1], j[2], j[3]) : C).replace(/#(\w)(\w)(\w)$/, "#$1$1$2$2$3$3")
					}
					var x = {
						duration: 500,
						ease: "ease",
						delay: 0
					};
					l.init = function(C, j, $, fe) {
						this.$el = C, this.el = C[0];
						var X = j[0];
						$[2] && (X = $[2]), k[X] && (X = k[X]), this.name = X, this.type = $[1], this.duration = c(j[1], this.duration, x.duration), this.ease = y(j[2], this.ease, x.ease), this.delay = c(j[3], this.delay, x.delay), this.span = this.duration + this.delay, this.active = !1, this.nextStyle = null, this.auto = Q.test(this.name), this.unit = fe.unit || this.unit || le.defaultUnit, this.angle = fe.angle || this.angle || le.defaultAngle, le.fallback || fe.fallback ? this.animate = this.fallback : (this.animate = this.transition, this.string = this.name + G + this.duration + "ms" + (this.ease != "ease" ? G + h[this.ease][0] : "") + (this.delay ? G + this.delay + "ms" : ""))
					}, l.set = function(C) {
						C = this.convert(C, this.type), this.update(C), this.redraw()
					}, l.transition = function(C) {
						this.active = !0, C = this.convert(C, this.type), this.auto && (this.el.style[this.name] == "auto" && (this.update(this.get()), this.redraw()), C == "auto" && (C = E.call(this))), this.nextStyle = C
					}, l.fallback = function(C) {
						var j = this.el.style[this.name] || this.convert(this.get(), this.type);
						C = this.convert(C, this.type), this.auto && (j == "auto" && (j = this.convert(this.get(), this.type)), C == "auto" && (C = E.call(this))), this.tween = new Ct({
							from: j,
							to: C,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.get = function() {
						return V(this.el, this.name)
					}, l.update = function(C) {
						p(this.el, this.name, C)
					}, l.stop = function() {
						(this.active || this.nextStyle) && (this.active = !1, this.nextStyle = null, p(this.el, this.name, this.get()));
						var C = this.tween;
						C && C.context && C.destroy()
					}, l.convert = function(C, j) {
						if (C == "auto" && this.auto) return C;
						var $, fe = typeof C == "number",
							X = typeof C == "string";
						switch (j) {
							case I:
								if (fe) return C;
								if (X && C.replace(O, "") === "") return +C;
								$ = "number(unitless)";
								break;
							case N:
								if (X) {
									if (C === "" && this.original) return this.original;
									if (j.test(C)) return C.charAt(0) == "#" && C.length == 7 ? C : T(C)
								}
								$ = "hex or rgb string";
								break;
							case q:
								if (fe) return C + this.unit;
								if (X && j.test(C)) return C;
								$ = "number(px) or string(unit)";
								break;
							case L:
								if (fe) return C + this.unit;
								if (X && j.test(C)) return C;
								$ = "number(px) or string(unit or %)";
								break;
							case F:
								if (fe) return C + this.angle;
								if (X && j.test(C)) return C;
								$ = "number(deg) or string(angle)";
								break;
							case W:
								if (fe || X && L.test(C)) return C;
								$ = "number(unitless) or string(unit or %)"
						}
						return a($, C), C
					}, l.redraw = function() {
						this.el.offsetHeight
					}
				}),
				ie = v(Y, function(l, E) {
					l.init = function() {
						E.init.apply(this, arguments), this.original || (this.original = this.convert(this.get(), N))
					}
				}),
				De = v(Y, function(l, E) {
					l.init = function() {
						E.init.apply(this, arguments), this.animate = this.fallback
					}, l.get = function() {
						return this.$el[this.name]()
					}, l.update = function(y) {
						this.$el[this.name](y)
					}
				}),
				Me = v(Y, function(l, E) {
					function y(T, x) {
						var C, j, $, fe, X;
						for (C in T) fe = de[C], $ = fe[0], j = fe[1] || C, X = this.convert(T[C], $), x.call(this, j, X, $)
					}
					l.init = function() {
						E.init.apply(this, arguments), this.current || (this.current = {}, de.perspective && le.perspective && (this.current.perspective = le.perspective, p(this.el, this.name, this.style(this.current)), this.redraw()))
					}, l.set = function(T) {
						y.call(this, T, function(x, C) {
							this.current[x] = C
						}), p(this.el, this.name, this.style(this.current)), this.redraw()
					}, l.transition = function(T) {
						var x = this.values(T);
						this.tween = new Tr({
							current: this.current,
							values: x,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease
						});
						var C, j = {};
						for (C in this.current) j[C] = C in x ? x[C] : this.current[C];
						this.active = !0, this.nextStyle = this.style(j)
					}, l.fallback = function(T) {
						var x = this.values(T);
						this.tween = new Tr({
							current: this.current,
							values: x,
							duration: this.duration,
							delay: this.delay,
							ease: this.ease,
							update: this.update,
							context: this
						})
					}, l.update = function() {
						p(this.el, this.name, this.style(this.current))
					}, l.style = function(T) {
						var x, C = "";
						for (x in T) C += x + "(" + T[x] + ") ";
						return C
					}, l.values = function(T) {
						var x, C = {};
						return y.call(this, T, function(j, $, fe) {
							C[j] = $, this.current[j] === void 0 && (x = 0, ~j.indexOf("scale") && (x = 1), this.current[j] = this.convert(x, fe))
						}), C
					}
				}),
				Ct = v(function(l) {
					function E(X) {
						$.push(X) === 1 && ne(y)
					}

					function y() {
						var X, te, re, ye = $.length;
						if (ye)
							for (ne(y), te = pe(), X = ye; X--;) re = $[X], re && re.render(te)
					}

					function T(X) {
						var te, re = e.inArray(X, $);
						re >= 0 && (te = $.slice(re + 1), $.length = re, te.length && ($ = $.concat(te)))
					}

					function x(X) {
						return Math.round(X * fe) / fe
					}

					function C(X, te, re) {
						return i(X[0] + re * (te[0] - X[0]), X[1] + re * (te[1] - X[1]), X[2] + re * (te[2] - X[2]))
					}
					var j = {
						ease: h.ease[1],
						from: 0,
						to: 1
					};
					l.init = function(X) {
						this.duration = X.duration || 0, this.delay = X.delay || 0;
						var te = X.ease || j.ease;
						h[te] && (te = h[te][1]), typeof te != "function" && (te = j.ease), this.ease = te, this.update = X.update || o, this.complete = X.complete || o, this.context = X.context || this, this.name = X.name;
						var re = X.from,
							ye = X.to;
						re === void 0 && (re = j.from), ye === void 0 && (ye = j.to), this.unit = X.unit || "", typeof re == "number" && typeof ye == "number" ? (this.begin = re, this.change = ye - re) : this.format(ye, re), this.value = this.begin + this.unit, this.start = pe(), X.autoplay !== !1 && this.play()
					}, l.play = function() {
						this.active || (this.start || (this.start = pe()), this.active = !0, E(this))
					}, l.stop = function() {
						this.active && (this.active = !1, T(this))
					}, l.render = function(X) {
						var te, re = X - this.start;
						if (this.delay) {
							if (re <= this.delay) return;
							re -= this.delay
						}
						if (re < this.duration) {
							var ye = this.ease(re, 0, 1, this.duration);
							return te = this.startRGB ? C(this.startRGB, this.endRGB, ye) : x(this.begin + ye * this.change), this.value = te + this.unit, void this.update.call(this.context, this.value)
						}
						te = this.endHex || this.begin + this.change, this.value = te + this.unit, this.update.call(this.context, this.value), this.complete.call(this.context), this.destroy()
					}, l.format = function(X, te) {
						if (te += "", X += "", X.charAt(0) == "#") return this.startRGB = n(te), this.endRGB = n(X), this.endHex = X, this.begin = 0, void(this.change = 1);
						if (!this.unit) {
							var re = te.replace(O, ""),
								ye = X.replace(O, "");
							re !== ye && u("tween", te, X), this.unit = re
						}
						te = parseFloat(te), X = parseFloat(X), this.begin = this.value = te, this.change = X - te
					}, l.destroy = function() {
						this.stop(), this.context = null, this.ease = this.update = this.complete = o
					};
					var $ = [],
						fe = 1e3
				}),
				ht = v(Ct, function(l) {
					l.init = function(E) {
						this.duration = E.duration || 0, this.complete = E.complete || o, this.context = E.context, this.play()
					}, l.render = function(E) {
						var y = E - this.start;
						y < this.duration || (this.complete.call(this.context), this.destroy())
					}
				}),
				Tr = v(Ct, function(l, E) {
					l.init = function(y) {
						this.context = y.context, this.update = y.update, this.tweens = [], this.current = y.current;
						var T, x;
						for (T in y.values) x = y.values[T], this.current[T] !== x && this.tweens.push(new Ct({
							name: T,
							from: this.current[T],
							to: x,
							duration: y.duration,
							delay: y.delay,
							ease: y.ease,
							autoplay: !1
						}));
						this.play()
					}, l.render = function(y) {
						var T, x, C = this.tweens.length,
							j = !1;
						for (T = C; T--;) x = this.tweens[T], x.context && (x.render(y), this.current[x.name] = x.value, j = !0);
						return j ? void(this.update && this.update.call(this.context)) : this.destroy()
					}, l.destroy = function() {
						if (E.destroy.call(this), this.tweens) {
							var y, T = this.tweens.length;
							for (y = T; y--;) this.tweens[y].destroy();
							this.tweens = null, this.current = null
						}
					}
				}),
				le = t.config = {
					debug: !1,
					defaultUnit: "px",
					defaultAngle: "deg",
					keepInherited: !1,
					hideBackface: !1,
					perspective: "",
					fallback: !M.transition,
					agentTests: []
				};
			t.fallback = function(l) {
				if (!M.transition) return le.fallback = !0;
				le.agentTests.push("(" + l + ")");
				var E = new RegExp(le.agentTests.join("|"), "i");
				le.fallback = E.test(navigator.userAgent)
			}, t.fallback("6.0.[2-5] Safari"), t.tween = function(l) {
				return new Ct(l)
			}, t.delay = function(l, E, y) {
				return new ht({
					complete: E,
					duration: l,
					context: y
				})
			}, e.fn.tram = function(l) {
				return t.call(null, this, l)
			};
			var p = e.style,
				V = e.css,
				k = {
					transform: M.transform && M.transform.css
				},
				U = {
					color: [ie, N],
					background: [ie, N, "background-color"],
					"outline-color": [ie, N],
					"border-color": [ie, N],
					"border-top-color": [ie, N],
					"border-right-color": [ie, N],
					"border-bottom-color": [ie, N],
					"border-left-color": [ie, N],
					"border-width": [Y, q],
					"border-top-width": [Y, q],
					"border-right-width": [Y, q],
					"border-bottom-width": [Y, q],
					"border-left-width": [Y, q],
					"border-spacing": [Y, q],
					"letter-spacing": [Y, q],
					margin: [Y, q],
					"margin-top": [Y, q],
					"margin-right": [Y, q],
					"margin-bottom": [Y, q],
					"margin-left": [Y, q],
					padding: [Y, q],
					"padding-top": [Y, q],
					"padding-right": [Y, q],
					"padding-bottom": [Y, q],
					"padding-left": [Y, q],
					"outline-width": [Y, q],
					opacity: [Y, I],
					top: [Y, L],
					right: [Y, L],
					bottom: [Y, L],
					left: [Y, L],
					"font-size": [Y, L],
					"text-indent": [Y, L],
					"word-spacing": [Y, L],
					width: [Y, L],
					"min-width": [Y, L],
					"max-width": [Y, L],
					height: [Y, L],
					"min-height": [Y, L],
					"max-height": [Y, L],
					"line-height": [Y, W],
					"scroll-top": [De, I, "scrollTop"],
					"scroll-left": [De, I, "scrollLeft"]
				},
				de = {};
			M.transform && (U.transform = [Me], de = {
				x: [L, "translateX"],
				y: [L, "translateY"],
				rotate: [F],
				rotateX: [F],
				rotateY: [F],
				scale: [I],
				scaleX: [I],
				scaleY: [I],
				skew: [F],
				skewX: [F],
				skewY: [F]
			}), M.transform && M.backface && (de.z = [L, "translateZ"], de.rotateZ = [F], de.scaleZ = [I], de.perspective = [q]);
			var mr = /ms/,
				Nt = /s|\./;
			return e.tram = t
		}(window.jQuery)
	});
	var _s = s((eW, gs) => {
		var aI = window.$,
			sI = Di() && aI.tram;
		gs.exports = function() {
			var e = {};
			e.VERSION = "1.6.0-Webflow";
			var t = {},
				r = Array.prototype,
				n = Object.prototype,
				i = Function.prototype,
				o = r.push,
				a = r.slice,
				u = r.concat,
				c = n.toString,
				f = n.hasOwnProperty,
				g = r.forEach,
				v = r.map,
				h = r.reduce,
				_ = r.reduceRight,
				S = r.filter,
				m = r.every,
				D = r.some,
				O = r.indexOf,
				b = r.lastIndexOf,
				I = Array.isArray,
				N = Object.keys,
				q = i.bind,
				L = e.each = e.forEach = function(d, P, w) {
					if (d == null) return d;
					if (g && d.forEach === g) d.forEach(P, w);
					else if (d.length === +d.length) {
						for (var M = 0, B = d.length; M < B; M++)
							if (P.call(w, d[M], M, d) === t) return
					} else
						for (var K = e.keys(d), M = 0, B = K.length; M < B; M++)
							if (P.call(w, d[K[M]], K[M], d) === t) return;
					return d
				};
			e.map = e.collect = function(d, P, w) {
				var M = [];
				return d == null ? M : v && d.map === v ? d.map(P, w) : (L(d, function(B, K, ne) {
					M.push(P.call(w, B, K, ne))
				}), M)
			}, e.find = e.detect = function(d, P, w) {
				var M;
				return F(d, function(B, K, ne) {
					if (P.call(w, B, K, ne)) return M = B, !0
				}), M
			}, e.filter = e.select = function(d, P, w) {
				var M = [];
				return d == null ? M : S && d.filter === S ? d.filter(P, w) : (L(d, function(B, K, ne) {
					P.call(w, B, K, ne) && M.push(B)
				}), M)
			};
			var F = e.some = e.any = function(d, P, w) {
				P || (P = e.identity);
				var M = !1;
				return d == null ? M : D && d.some === D ? d.some(P, w) : (L(d, function(B, K, ne) {
					if (M || (M = P.call(w, B, K, ne))) return t
				}), !!M)
			};
			e.contains = e.include = function(d, P) {
				return d == null ? !1 : O && d.indexOf === O ? d.indexOf(P) != -1 : F(d, function(w) {
					return w === P
				})
			}, e.delay = function(d, P) {
				var w = a.call(arguments, 2);
				return setTimeout(function() {
					return d.apply(null, w)
				}, P)
			}, e.defer = function(d) {
				return e.delay.apply(e, [d, 1].concat(a.call(arguments, 1)))
			}, e.throttle = function(d) {
				var P, w, M;
				return function() {
					P || (P = !0, w = arguments, M = this, sI.frame(function() {
						P = !1, d.apply(M, w)
					}))
				}
			}, e.debounce = function(d, P, w) {
				var M, B, K, ne, pe, Ce = function() {
					var _e = e.now() - ne;
					_e < P ? M = setTimeout(Ce, P - _e) : (M = null, w || (pe = d.apply(K, B), K = B = null))
				};
				return function() {
					K = this, B = arguments, ne = e.now();
					var _e = w && !M;
					return M || (M = setTimeout(Ce, P)), _e && (pe = d.apply(K, B), K = B = null), pe
				}
			}, e.defaults = function(d) {
				if (!e.isObject(d)) return d;
				for (var P = 1, w = arguments.length; P < w; P++) {
					var M = arguments[P];
					for (var B in M) d[B] === void 0 && (d[B] = M[B])
				}
				return d
			}, e.keys = function(d) {
				if (!e.isObject(d)) return [];
				if (N) return N(d);
				var P = [];
				for (var w in d) e.has(d, w) && P.push(w);
				return P
			}, e.has = function(d, P) {
				return f.call(d, P)
			}, e.isObject = function(d) {
				return d === Object(d)
			}, e.now = Date.now || function() {
				return new Date().getTime()
			}, e.templateSettings = {
				evaluate: /<%([\s\S]+?)%>/g,
				interpolate: /<%=([\s\S]+?)%>/g,
				escape: /<%-([\s\S]+?)%>/g
			};
			var W = /(.)^/,
				H = {
					"'": "'",
					"\\": "\\",
					"\r": "r",
					"\n": "n",
					"\u2028": "u2028",
					"\u2029": "u2029"
				},
				Q = /\\|'|\r|\n|\u2028|\u2029/g,
				G = function(d) {
					return "\\" + H[d]
				},
				R = /^\s*(\w|\$)+\s*$/;
			return e.template = function(d, P, w) {
				!P && w && (P = w), P = e.defaults({}, P, e.templateSettings);
				var M = RegExp([(P.escape || W).source, (P.interpolate || W).source, (P.evaluate || W).source].join("|") + "|$", "g"),
					B = 0,
					K = "__p+='";
				d.replace(M, function(_e, Y, ie, De, Me) {
					return K += d.slice(B, Me).replace(Q, G), B = Me + _e.length, Y ? K += `'+
((__t=(` + Y + `))==null?'':_.escape(__t))+
'` : ie ? K += `'+
((__t=(` + ie + `))==null?'':__t)+
'` : De && (K += `';
` + De + `
__p+='`), _e
				}), K += `';
`;
				var ne = P.variable;
				if (ne) {
					if (!R.test(ne)) throw new Error("variable is not a bare identifier: " + ne)
				} else K = `with(obj||{}){
` + K + `}
`, ne = "obj";
				K = `var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};
` + K + `return __p;
`;
				var pe;
				try {
					pe = new Function(P.variable || "obj", "_", K)
				} catch (_e) {
					throw _e.source = K, _e
				}
				var Ce = function(_e) {
					return pe.call(this, _e, e)
				};
				return Ce.source = "function(" + ne + `){
` + K + "}", Ce
			}, e
		}()
	});
	var Ke = s((tW, bs) => {
		var se = {},
			Ht = {},
			kt = [],
			Fi = window.Webflow || [],
			gt = window.jQuery,
			je = gt(window),
			uI = gt(document),
			tt = gt.isFunction,
			ke = se._ = _s(),
			Is = se.tram = Di() && gt.tram,
			cn = !1,
			Gi = !1;
		Is.config.hideBackface = !1;
		Is.config.keepInherited = !0;
		se.define = function(e, t, r) {
			Ht[e] && ms(Ht[e]);
			var n = Ht[e] = t(gt, ke, r) || {};
			return Ts(n), n
		};
		se.require = function(e) {
			return Ht[e]
		};

		function Ts(e) {
			se.env() && (tt(e.design) && je.on("__wf_design", e.design), tt(e.preview) && je.on("__wf_preview", e.preview)), tt(e.destroy) && je.on("__wf_destroy", e.destroy), e.ready && tt(e.ready) && cI(e)
		}

		function cI(e) {
			if (cn) {
				e.ready();
				return
			}
			ke.contains(kt, e.ready) || kt.push(e.ready)
		}

		function ms(e) {
			tt(e.design) && je.off("__wf_design", e.design), tt(e.preview) && je.off("__wf_preview", e.preview), tt(e.destroy) && je.off("__wf_destroy", e.destroy), e.ready && tt(e.ready) && lI(e)
		}

		function lI(e) {
			kt = ke.filter(kt, function(t) {
				return t !== e.ready
			})
		}
		se.push = function(e) {
			if (cn) {
				tt(e) && e();
				return
			}
			Fi.push(e)
		};
		se.env = function(e) {
			var t = window.__wf_design,
				r = typeof t < "u";
			if (!e) return r;
			if (e === "design") return r && t;
			if (e === "preview") return r && !t;
			if (e === "slug") return r && window.__wf_slug;
			if (e === "editor") return window.WebflowEditor;
			if (e === "test") return window.__wf_test;
			if (e === "frame") return window !== window.top
		};
		var un = navigator.userAgent.toLowerCase(),
			Os = se.env.touch = "ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch,
			fI = se.env.chrome = /chrome/.test(un) && /Google/.test(navigator.vendor) && parseInt(un.match(/chrome\/(\d+)\./)[1], 10),
			dI = se.env.ios = /(ipod|iphone|ipad)/.test(un);
		se.env.safari = /safari/.test(un) && !fI && !dI;
		var Mi;
		Os && uI.on("touchstart mousedown", function(e) {
			Mi = e.target
		});
		se.validClick = Os ? function(e) {
			return e === Mi || gt.contains(e, Mi)
		} : function() {
			return !0
		};
		var As = "resize.webflow orientationchange.webflow load.webflow",
			pI = "scroll.webflow " + As;
		se.resize = Xi(je, As);
		se.scroll = Xi(je, pI);
		se.redraw = Xi();

		function Xi(e, t) {
			var r = [],
				n = {};
			return n.up = ke.throttle(function(i) {
				ke.each(r, function(o) {
					o(i)
				})
			}), e && t && e.on(t, n.up), n.on = function(i) {
				typeof i == "function" && (ke.contains(r, i) || r.push(i))
			}, n.off = function(i) {
				if (!arguments.length) {
					r = [];
					return
				}
				r = ke.filter(r, function(o) {
					return o !== i
				})
			}, n
		}
		se.location = function(e) {
			window.location = e
		};
		se.env() && (se.location = function() {});
		se.ready = function() {
			cn = !0, Gi ? vI() : ke.each(kt, ys), ke.each(Fi, ys), se.resize.up()
		};

		function ys(e) {
			tt(e) && e()
		}

		function vI() {
			Gi = !1, ke.each(Ht, Ts)
		}
		var qt;
		se.load = function(e) {
			qt.then(e)
		};

		function Ss() {
			qt && (qt.reject(), je.off("load", qt.resolve)), qt = new gt.Deferred, je.on("load", qt.resolve)
		}
		se.destroy = function(e) {
			e = e || {}, Gi = !0, je.triggerHandler("__wf_destroy"), e.domready != null && (cn = e.domready), ke.each(Ht, ms), se.resize.off(), se.scroll.off(), se.redraw.off(), kt = [], Fi = [], qt.state() === "pending" && Ss()
		};
		gt(se.ready);
		Ss();
		bs.exports = window.Webflow = se
	});
	var Cs = s((rW, ws) => {
		var Rs = Ke();
		Rs.define("brand", ws.exports = function(e) {
			var t = {},
				r = document,
				n = e("html"),
				i = e("body"),
				o = ".w-webflow-badge",
				a = window.location,
				u = /PhantomJS/i.test(navigator.userAgent),
				c = "fullscreenchange webkitfullscreenchange mozfullscreenchange msfullscreenchange",
				f;
			t.ready = function() {
				var _ = n.attr("data-wf-status"),
					S = n.attr("data-wf-domain") || "";
				/\.webflow\.io$/i.test(S) && a.hostname !== S && (_ = !0), _ && !u && (f = f || v(), h(), setTimeout(h, 500), e(r).off(c, g).on(c, g))
			};

			function g() {
				var _ = r.fullScreen || r.mozFullScreen || r.webkitIsFullScreen || r.msFullscreenElement || !!r.webkitFullscreenElement;
				e(f).attr("style", _ ? "display: none !important;" : "")
			}

			function h() {
				var _ = i.children(o),
					S = _.length && _.get(0) === f,
					m = Rs.env("editor");
				if (S) {
					m && _.remove();
					return
				}
				_.length && _.remove(), m || i.append(f)
			}
			return t
		})
	});
	var qs = s((nW, Ns) => {
		var Vi = Ke();
		Vi.define("edit", Ns.exports = function(e, t, r) {
			if (r = r || {}, (Vi.env("test") || Vi.env("frame")) && !r.fixture && !EI()) return {
				exit: 1
			};
			var n = {},
				i = e(window),
				o = e(document.documentElement),
				a = document.location,
				u = "hashchange",
				c, f = r.load || h,
				g = !1;
			try {
				g = localStorage && localStorage.getItem && localStorage.getItem("WebflowEditor")
			} catch {}
			g ? f() : a.search ? (/[?&](edit)(?:[=&?]|$)/.test(a.search) || /\?edit$/.test(a.href)) && f() : i.on(u, v).triggerHandler(u);

			function v() {
				c || /\?edit/.test(a.hash) && f()
			}

			function h() {
				c = !0, window.WebflowEditor = !0, i.off(u, v), b(function(N) {
					e.ajax({
						url: O("https://editor-api.webflow.com/api/editor/view"),
						data: {
							siteId: o.attr("data-wf-site")
						},
						xhrFields: {
							withCredentials: !0
						},
						dataType: "json",
						crossDomain: !0,
						success: _(N)
					})
				})
			}

			function _(N) {
				return function(q) {
					if (!q) {
						console.error("Could not load editor data");
						return
					}
					q.thirdPartyCookiesSupported = N, S(D(q.bugReporterScriptPath), function() {
						S(D(q.scriptPath), function() {
							window.WebflowEditor(q)
						})
					})
				}
			}

			function S(N, q) {
				e.ajax({
					type: "GET",
					url: N,
					dataType: "script",
					cache: !0
				}).then(q, m)
			}

			function m(N, q, L) {
				throw console.error("Could not load editor script: " + q), L
			}

			function D(N) {
				return N.indexOf("//") >= 0 ? N : O("https://editor-api.webflow.com" + N)
			}

			function O(N) {
				return N.replace(/([^:])\/\//g, "$1/")
			}

			function b(N) {
				var q = window.document.createElement("iframe");
				q.src = "https://webflow.com/site/third-party-cookie-check.html", q.style.display = "none", q.sandbox = "allow-scripts allow-same-origin";
				var L = function(F) {
					F.data === "WF_third_party_cookies_unsupported" ? (I(q, L), N(!1)) : F.data === "WF_third_party_cookies_supported" && (I(q, L), N(!0))
				};
				q.onerror = function() {
					I(q, L), N(!1)
				}, window.addEventListener("message", L, !1), window.document.body.appendChild(q)
			}

			function I(N, q) {
				window.removeEventListener("message", q, !1), N.remove()
			}
			return n
		});

		function EI() {
			try {
				return window.top.__Cypress__
			} catch {
				return !1
			}
		}
	});
	var Ls = s((iW, xs) => {
		var hI = Ke();
		hI.define("focus-visible", xs.exports = function() {
			function e(r) {
				var n = !0,
					i = !1,
					o = null,
					a = {
						text: !0,
						search: !0,
						url: !0,
						tel: !0,
						email: !0,
						password: !0,
						number: !0,
						date: !0,
						month: !0,
						week: !0,
						time: !0,
						datetime: !0,
						"datetime-local": !0
					};

				function u(I) {
					return !!(I && I !== document && I.nodeName !== "HTML" && I.nodeName !== "BODY" && "classList" in I && "contains" in I.classList)
				}

				function c(I) {
					var N = I.type,
						q = I.tagName;
					return !!(q === "INPUT" && a[N] && !I.readOnly || q === "TEXTAREA" && !I.readOnly || I.isContentEditable)
				}

				function f(I) {
					I.getAttribute("data-wf-focus-visible") || I.setAttribute("data-wf-focus-visible", "true")
				}

				function g(I) {
					I.getAttribute("data-wf-focus-visible") && I.removeAttribute("data-wf-focus-visible")
				}

				function v(I) {
					I.metaKey || I.altKey || I.ctrlKey || (u(r.activeElement) && f(r.activeElement), n = !0)
				}

				function h() {
					n = !1
				}

				function _(I) {
					u(I.target) && (n || c(I.target)) && f(I.target)
				}

				function S(I) {
					u(I.target) && I.target.hasAttribute("data-wf-focus-visible") && (i = !0, window.clearTimeout(o), o = window.setTimeout(function() {
						i = !1
					}, 100), g(I.target))
				}

				function m() {
					document.visibilityState === "hidden" && (i && (n = !0), D())
				}

				function D() {
					document.addEventListener("mousemove", b), document.addEventListener("mousedown", b), document.addEventListener("mouseup", b), document.addEventListener("pointermove", b), document.addEventListener("pointerdown", b), document.addEventListener("pointerup", b), document.addEventListener("touchmove", b), document.addEventListener("touchstart", b), document.addEventListener("touchend", b)
				}

				function O() {
					document.removeEventListener("mousemove", b), document.removeEventListener("mousedown", b), document.removeEventListener("mouseup", b), document.removeEventListener("pointermove", b), document.removeEventListener("pointerdown", b), document.removeEventListener("pointerup", b), document.removeEventListener("touchmove", b), document.removeEventListener("touchstart", b), document.removeEventListener("touchend", b)
				}

				function b(I) {
					I.target.nodeName && I.target.nodeName.toLowerCase() === "html" || (n = !1, O())
				}
				document.addEventListener("keydown", v, !0), document.addEventListener("mousedown", h, !0), document.addEventListener("pointerdown", h, !0), document.addEventListener("touchstart", h, !0), document.addEventListener("visibilitychange", m, !0), D(), r.addEventListener("focus", _, !0), r.addEventListener("blur", S, !0)
			}

			function t() {
				if (typeof document < "u") try {
					document.querySelector(":focus-visible")
				} catch {
					e(document)
				}
			}
			return {
				ready: t
			}
		})
	});
	var Ms = s((oW, Ds) => {
		var Ps = Ke();
		Ps.define("focus", Ds.exports = function() {
			var e = [],
				t = !1;

			function r(a) {
				t && (a.preventDefault(), a.stopPropagation(), a.stopImmediatePropagation(), e.unshift(a))
			}

			function n(a) {
				var u = a.target,
					c = u.tagName;
				return /^a$/i.test(c) && u.href != null || /^(button|textarea)$/i.test(c) && u.disabled !== !0 || /^input$/i.test(c) && /^(button|reset|submit|radio|checkbox)$/i.test(u.type) && !u.disabled || !/^(button|input|textarea|select|a)$/i.test(c) && !Number.isNaN(Number.parseFloat(u.tabIndex)) || /^audio$/i.test(c) || /^video$/i.test(c) && u.controls === !0
			}

			function i(a) {
				n(a) && (t = !0, setTimeout(() => {
					for (t = !1, a.target.focus(); e.length > 0;) {
						var u = e.pop();
						u.target.dispatchEvent(new MouseEvent(u.type, u))
					}
				}, 0))
			}

			function o() {
				typeof document < "u" && document.body.hasAttribute("data-wf-focus-within") && Ps.env.safari && (document.addEventListener("mousedown", i, !0), document.addEventListener("mouseup", r, !0), document.addEventListener("click", r, !0))
			}
			return {
				ready: o
			}
		})
	});
	var Xs = s((aW, Gs) => {
		"use strict";
		var Ui = window.jQuery,
			rt = {},
			ln = [],
			Fs = ".w-ix",
			fn = {
				reset: function(e, t) {
					t.__wf_intro = null
				},
				intro: function(e, t) {
					t.__wf_intro || (t.__wf_intro = !0, Ui(t).triggerHandler(rt.types.INTRO))
				},
				outro: function(e, t) {
					t.__wf_intro && (t.__wf_intro = null, Ui(t).triggerHandler(rt.types.OUTRO))
				}
			};
		rt.triggers = {};
		rt.types = {
			INTRO: "w-ix-intro" + Fs,
			OUTRO: "w-ix-outro" + Fs
		};
		rt.init = function() {
			for (var e = ln.length, t = 0; t < e; t++) {
				var r = ln[t];
				r[0](0, r[1])
			}
			ln = [], Ui.extend(rt.triggers, fn)
		};
		rt.async = function() {
			for (var e in fn) {
				var t = fn[e];
				fn.hasOwnProperty(e) && (rt.triggers[e] = function(r, n) {
					ln.push([t, n])
				})
			}
		};
		rt.async();
		Gs.exports = rt
	});
	var pn = s((sW, Ws) => {
		"use strict";
		var Wi = Xs();

		function Vs(e, t) {
			var r = document.createEvent("CustomEvent");
			r.initCustomEvent(t, !0, !0, null), e.dispatchEvent(r)
		}
		var gI = window.jQuery,
			dn = {},
			Us = ".w-ix",
			_I = {
				reset: function(e, t) {
					Wi.triggers.reset(e, t)
				},
				intro: function(e, t) {
					Wi.triggers.intro(e, t), Vs(t, "COMPONENT_ACTIVE")
				},
				outro: function(e, t) {
					Wi.triggers.outro(e, t), Vs(t, "COMPONENT_INACTIVE")
				}
			};
		dn.triggers = {};
		dn.types = {
			INTRO: "w-ix-intro" + Us,
			OUTRO: "w-ix-outro" + Us
		};
		gI.extend(dn.triggers, _I);
		Ws.exports = dn
	});
	var Bs = s((uW, ft) => {
		function Bi(e) {
			return ft.exports = Bi = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t) {
				return typeof t
			} : function(t) {
				return t && typeof Symbol == "function" && t.constructor === Symbol && t !== Symbol.prototype ? "symbol" : typeof t
			}, ft.exports.__esModule = !0, ft.exports.default = ft.exports, Bi(e)
		}
		ft.exports = Bi, ft.exports.__esModule = !0, ft.exports.default = ft.exports
	});
	var jt = s((cW, Ar) => {
		var yI = Bs().default;

		function Hs(e) {
			if (typeof WeakMap != "function") return null;
			var t = new WeakMap,
				r = new WeakMap;
			return (Hs = function(i) {
				return i ? r : t
			})(e)
		}

		function II(e, t) {
			if (!t && e && e.__esModule) return e;
			if (e === null || yI(e) !== "object" && typeof e != "function") return {
				default: e
			};
			var r = Hs(t);
			if (r && r.has(e)) return r.get(e);
			var n = {},
				i = Object.defineProperty && Object.getOwnPropertyDescriptor;
			for (var o in e)
				if (o !== "default" && Object.prototype.hasOwnProperty.call(e, o)) {
					var a = i ? Object.getOwnPropertyDescriptor(e, o) : null;
					a && (a.get || a.set) ? Object.defineProperty(n, o, a) : n[o] = e[o]
				} return n.default = e, r && r.set(e, n), n
		}
		Ar.exports = II, Ar.exports.__esModule = !0, Ar.exports.default = Ar.exports
	});
	var nt = s((lW, Sr) => {
		function TI(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Sr.exports = TI, Sr.exports.__esModule = !0, Sr.exports.default = Sr.exports
	});
	var ve = s((fW, ks) => {
		var vn = function(e) {
			return e && e.Math == Math && e
		};
		ks.exports = vn(typeof globalThis == "object" && globalThis) || vn(typeof window == "object" && window) || vn(typeof self == "object" && self) || vn(typeof global == "object" && global) || function() {
			return this
		}() || Function("return this")()
	});
	var Kt = s((dW, js) => {
		js.exports = function(e) {
			try {
				return !!e()
			} catch {
				return !0
			}
		}
	});
	var xt = s((pW, Ks) => {
		var mI = Kt();
		Ks.exports = !mI(function() {
			return Object.defineProperty({}, 1, {
				get: function() {
					return 7
				}
			})[1] != 7
		})
	});
	var En = s((vW, zs) => {
		var br = Function.prototype.call;
		zs.exports = br.bind ? br.bind(br) : function() {
			return br.apply(br, arguments)
		}
	});
	var Zs = s($s => {
		"use strict";
		var Ys = {}.propertyIsEnumerable,
			Qs = Object.getOwnPropertyDescriptor,
			OI = Qs && !Ys.call({
				1: 2
			}, 1);
		$s.f = OI ? function(t) {
			var r = Qs(this, t);
			return !!r && r.enumerable
		} : Ys
	});
	var Hi = s((hW, Js) => {
		Js.exports = function(e, t) {
			return {
				enumerable: !(e & 1),
				configurable: !(e & 2),
				writable: !(e & 4),
				value: t
			}
		}
	});
	var ze = s((gW, tu) => {
		var eu = Function.prototype,
			ki = eu.bind,
			ji = eu.call,
			AI = ki && ki.bind(ji);
		tu.exports = ki ? function(e) {
			return e && AI(ji, e)
		} : function(e) {
			return e && function() {
				return ji.apply(e, arguments)
			}
		}
	});
	var iu = s((_W, nu) => {
		var ru = ze(),
			SI = ru({}.toString),
			bI = ru("".slice);
		nu.exports = function(e) {
			return bI(SI(e), 8, -1)
		}
	});
	var au = s((yW, ou) => {
		var RI = ve(),
			wI = ze(),
			CI = Kt(),
			NI = iu(),
			Ki = RI.Object,
			qI = wI("".split);
		ou.exports = CI(function() {
			return !Ki("z").propertyIsEnumerable(0)
		}) ? function(e) {
			return NI(e) == "String" ? qI(e, "") : Ki(e)
		} : Ki
	});
	var zi = s((IW, su) => {
		var xI = ve(),
			LI = xI.TypeError;
		su.exports = function(e) {
			if (e == null) throw LI("Can't call method on " + e);
			return e
		}
	});
	var Rr = s((TW, uu) => {
		var PI = au(),
			DI = zi();
		uu.exports = function(e) {
			return PI(DI(e))
		}
	});
	var it = s((mW, cu) => {
		cu.exports = function(e) {
			return typeof e == "function"
		}
	});
	var zt = s((OW, lu) => {
		var MI = it();
		lu.exports = function(e) {
			return typeof e == "object" ? e !== null : MI(e)
		}
	});
	var wr = s((AW, fu) => {
		var Yi = ve(),
			FI = it(),
			GI = function(e) {
				return FI(e) ? e : void 0
			};
		fu.exports = function(e, t) {
			return arguments.length < 2 ? GI(Yi[e]) : Yi[e] && Yi[e][t]
		}
	});
	var pu = s((SW, du) => {
		var XI = ze();
		du.exports = XI({}.isPrototypeOf)
	});
	var Eu = s((bW, vu) => {
		var VI = wr();
		vu.exports = VI("navigator", "userAgent") || ""
	});
	var mu = s((RW, Tu) => {
		var Iu = ve(),
			Qi = Eu(),
			hu = Iu.process,
			gu = Iu.Deno,
			_u = hu && hu.versions || gu && gu.version,
			yu = _u && _u.v8,
			Ye, hn;
		yu && (Ye = yu.split("."), hn = Ye[0] > 0 && Ye[0] < 4 ? 1 : +(Ye[0] + Ye[1]));
		!hn && Qi && (Ye = Qi.match(/Edge\/(\d+)/), (!Ye || Ye[1] >= 74) && (Ye = Qi.match(/Chrome\/(\d+)/), Ye && (hn = +Ye[1])));
		Tu.exports = hn
	});
	var $i = s((wW, Au) => {
		var Ou = mu(),
			UI = Kt();
		Au.exports = !!Object.getOwnPropertySymbols && !UI(function() {
			var e = Symbol();
			return !String(e) || !(Object(e) instanceof Symbol) || !Symbol.sham && Ou && Ou < 41
		})
	});
	var Zi = s((CW, Su) => {
		var WI = $i();
		Su.exports = WI && !Symbol.sham && typeof Symbol.iterator == "symbol"
	});
	var Ji = s((NW, bu) => {
		var BI = ve(),
			HI = wr(),
			kI = it(),
			jI = pu(),
			KI = Zi(),
			zI = BI.Object;
		bu.exports = KI ? function(e) {
			return typeof e == "symbol"
		} : function(e) {
			var t = HI("Symbol");
			return kI(t) && jI(t.prototype, zI(e))
		}
	});
	var wu = s((qW, Ru) => {
		var YI = ve(),
			QI = YI.String;
		Ru.exports = function(e) {
			try {
				return QI(e)
			} catch {
				return "Object"
			}
		}
	});
	var Nu = s((xW, Cu) => {
		var $I = ve(),
			ZI = it(),
			JI = wu(),
			eT = $I.TypeError;
		Cu.exports = function(e) {
			if (ZI(e)) return e;
			throw eT(JI(e) + " is not a function")
		}
	});
	var xu = s((LW, qu) => {
		var tT = Nu();
		qu.exports = function(e, t) {
			var r = e[t];
			return r == null ? void 0 : tT(r)
		}
	});
	var Pu = s((PW, Lu) => {
		var rT = ve(),
			eo = En(),
			to = it(),
			ro = zt(),
			nT = rT.TypeError;
		Lu.exports = function(e, t) {
			var r, n;
			if (t === "string" && to(r = e.toString) && !ro(n = eo(r, e)) || to(r = e.valueOf) && !ro(n = eo(r, e)) || t !== "string" && to(r = e.toString) && !ro(n = eo(r, e))) return n;
			throw nT("Can't convert object to primitive value")
		}
	});
	var Mu = s((DW, Du) => {
		Du.exports = !1
	});
	var gn = s((MW, Gu) => {
		var Fu = ve(),
			iT = Object.defineProperty;
		Gu.exports = function(e, t) {
			try {
				iT(Fu, e, {
					value: t,
					configurable: !0,
					writable: !0
				})
			} catch {
				Fu[e] = t
			}
			return t
		}
	});
	var _n = s((FW, Vu) => {
		var oT = ve(),
			aT = gn(),
			Xu = "__core-js_shared__",
			sT = oT[Xu] || aT(Xu, {});
		Vu.exports = sT
	});
	var no = s((GW, Wu) => {
		var uT = Mu(),
			Uu = _n();
		(Wu.exports = function(e, t) {
			return Uu[e] || (Uu[e] = t !== void 0 ? t : {})
		})("versions", []).push({
			version: "3.19.0",
			mode: uT ? "pure" : "global",
			copyright: "\xA9 2021 Denis Pushkarev (zloirock.ru)"
		})
	});
	var Hu = s((XW, Bu) => {
		var cT = ve(),
			lT = zi(),
			fT = cT.Object;
		Bu.exports = function(e) {
			return fT(lT(e))
		}
	});
	var _t = s((VW, ku) => {
		var dT = ze(),
			pT = Hu(),
			vT = dT({}.hasOwnProperty);
		ku.exports = Object.hasOwn || function(t, r) {
			return vT(pT(t), r)
		}
	});
	var io = s((UW, ju) => {
		var ET = ze(),
			hT = 0,
			gT = Math.random(),
			_T = ET(1 .toString);
		ju.exports = function(e) {
			return "Symbol(" + (e === void 0 ? "" : e) + ")_" + _T(++hT + gT, 36)
		}
	});
	var oo = s((WW, $u) => {
		var yT = ve(),
			IT = no(),
			Ku = _t(),
			TT = io(),
			zu = $i(),
			Qu = Zi(),
			Yt = IT("wks"),
			Lt = yT.Symbol,
			Yu = Lt && Lt.for,
			mT = Qu ? Lt : Lt && Lt.withoutSetter || TT;
		$u.exports = function(e) {
			if (!Ku(Yt, e) || !(zu || typeof Yt[e] == "string")) {
				var t = "Symbol." + e;
				zu && Ku(Lt, e) ? Yt[e] = Lt[e] : Qu && Yu ? Yt[e] = Yu(t) : Yt[e] = mT(t)
			}
			return Yt[e]
		}
	});
	var tc = s((BW, ec) => {
		var OT = ve(),
			AT = En(),
			Zu = zt(),
			Ju = Ji(),
			ST = xu(),
			bT = Pu(),
			RT = oo(),
			wT = OT.TypeError,
			CT = RT("toPrimitive");
		ec.exports = function(e, t) {
			if (!Zu(e) || Ju(e)) return e;
			var r = ST(e, CT),
				n;
			if (r) {
				if (t === void 0 && (t = "default"), n = AT(r, e, t), !Zu(n) || Ju(n)) return n;
				throw wT("Can't convert object to primitive value")
			}
			return t === void 0 && (t = "number"), bT(e, t)
		}
	});
	var ao = s((HW, rc) => {
		var NT = tc(),
			qT = Ji();
		rc.exports = function(e) {
			var t = NT(e, "string");
			return qT(t) ? t : t + ""
		}
	});
	var uo = s((kW, ic) => {
		var xT = ve(),
			nc = zt(),
			so = xT.document,
			LT = nc(so) && nc(so.createElement);
		ic.exports = function(e) {
			return LT ? so.createElement(e) : {}
		}
	});
	var co = s((jW, oc) => {
		var PT = xt(),
			DT = Kt(),
			MT = uo();
		oc.exports = !PT && !DT(function() {
			return Object.defineProperty(MT("div"), "a", {
				get: function() {
					return 7
				}
			}).a != 7
		})
	});
	var lo = s(sc => {
		var FT = xt(),
			GT = En(),
			XT = Zs(),
			VT = Hi(),
			UT = Rr(),
			WT = ao(),
			BT = _t(),
			HT = co(),
			ac = Object.getOwnPropertyDescriptor;
		sc.f = FT ? ac : function(t, r) {
			if (t = UT(t), r = WT(r), HT) try {
				return ac(t, r)
			} catch {}
			if (BT(t, r)) return VT(!GT(XT.f, t, r), t[r])
		}
	});
	var Cr = s((zW, cc) => {
		var uc = ve(),
			kT = zt(),
			jT = uc.String,
			KT = uc.TypeError;
		cc.exports = function(e) {
			if (kT(e)) return e;
			throw KT(jT(e) + " is not an object")
		}
	});
	var Nr = s(dc => {
		var zT = ve(),
			YT = xt(),
			QT = co(),
			lc = Cr(),
			$T = ao(),
			ZT = zT.TypeError,
			fc = Object.defineProperty;
		dc.f = YT ? fc : function(t, r, n) {
			if (lc(t), r = $T(r), lc(n), QT) try {
				return fc(t, r, n)
			} catch {}
			if ("get" in n || "set" in n) throw ZT("Accessors not supported");
			return "value" in n && (t[r] = n.value), t
		}
	});
	var yn = s((QW, pc) => {
		var JT = xt(),
			em = Nr(),
			tm = Hi();
		pc.exports = JT ? function(e, t, r) {
			return em.f(e, t, tm(1, r))
		} : function(e, t, r) {
			return e[t] = r, e
		}
	});
	var po = s(($W, vc) => {
		var rm = ze(),
			nm = it(),
			fo = _n(),
			im = rm(Function.toString);
		nm(fo.inspectSource) || (fo.inspectSource = function(e) {
			return im(e)
		});
		vc.exports = fo.inspectSource
	});
	var gc = s((ZW, hc) => {
		var om = ve(),
			am = it(),
			sm = po(),
			Ec = om.WeakMap;
		hc.exports = am(Ec) && /native code/.test(sm(Ec))
	});
	var vo = s((JW, yc) => {
		var um = no(),
			cm = io(),
			_c = um("keys");
		yc.exports = function(e) {
			return _c[e] || (_c[e] = cm(e))
		}
	});
	var In = s((eB, Ic) => {
		Ic.exports = {}
	});
	var bc = s((tB, Sc) => {
		var lm = gc(),
			Ac = ve(),
			Eo = ze(),
			fm = zt(),
			dm = yn(),
			ho = _t(),
			go = _n(),
			pm = vo(),
			vm = In(),
			Tc = "Object already initialized",
			yo = Ac.TypeError,
			Em = Ac.WeakMap,
			Tn, qr, mn, hm = function(e) {
				return mn(e) ? qr(e) : Tn(e, {})
			},
			gm = function(e) {
				return function(t) {
					var r;
					if (!fm(t) || (r = qr(t)).type !== e) throw yo("Incompatible receiver, " + e + " required");
					return r
				}
			};
		lm || go.state ? (yt = go.state || (go.state = new Em), mc = Eo(yt.get), _o = Eo(yt.has), Oc = Eo(yt.set), Tn = function(e, t) {
			if (_o(yt, e)) throw new yo(Tc);
			return t.facade = e, Oc(yt, e, t), t
		}, qr = function(e) {
			return mc(yt, e) || {}
		}, mn = function(e) {
			return _o(yt, e)
		}) : (Pt = pm("state"), vm[Pt] = !0, Tn = function(e, t) {
			if (ho(e, Pt)) throw new yo(Tc);
			return t.facade = e, dm(e, Pt, t), t
		}, qr = function(e) {
			return ho(e, Pt) ? e[Pt] : {}
		}, mn = function(e) {
			return ho(e, Pt)
		});
		var yt, mc, _o, Oc, Pt;
		Sc.exports = {
			set: Tn,
			get: qr,
			has: mn,
			enforce: hm,
			getterFor: gm
		}
	});
	var Cc = s((rB, wc) => {
		var Io = xt(),
			_m = _t(),
			Rc = Function.prototype,
			ym = Io && Object.getOwnPropertyDescriptor,
			To = _m(Rc, "name"),
			Im = To && function() {}.name === "something",
			Tm = To && (!Io || Io && ym(Rc, "name").configurable);
		wc.exports = {
			EXISTS: To,
			PROPER: Im,
			CONFIGURABLE: Tm
		}
	});
	var Pc = s((nB, Lc) => {
		var mm = ve(),
			Nc = it(),
			Om = _t(),
			qc = yn(),
			Am = gn(),
			Sm = po(),
			xc = bc(),
			bm = Cc().CONFIGURABLE,
			Rm = xc.get,
			wm = xc.enforce,
			Cm = String(String).split("String");
		(Lc.exports = function(e, t, r, n) {
			var i = n ? !!n.unsafe : !1,
				o = n ? !!n.enumerable : !1,
				a = n ? !!n.noTargetGet : !1,
				u = n && n.name !== void 0 ? n.name : t,
				c;
			if (Nc(r) && (String(u).slice(0, 7) === "Symbol(" && (u = "[" + String(u).replace(/^Symbol\(([^)]*)\)/, "$1") + "]"), (!Om(r, "name") || bm && r.name !== u) && qc(r, "name", u), c = wm(r), c.source || (c.source = Cm.join(typeof u == "string" ? u : ""))), e === mm) {
				o ? e[t] = r : Am(t, r);
				return
			} else i ? !a && e[t] && (o = !0) : delete e[t];
			o ? e[t] = r : qc(e, t, r)
		})(Function.prototype, "toString", function() {
			return Nc(this) && Rm(this).source || Sm(this)
		})
	});
	var mo = s((iB, Dc) => {
		var Nm = Math.ceil,
			qm = Math.floor;
		Dc.exports = function(e) {
			var t = +e;
			return t !== t || t === 0 ? 0 : (t > 0 ? qm : Nm)(t)
		}
	});
	var Fc = s((oB, Mc) => {
		var xm = mo(),
			Lm = Math.max,
			Pm = Math.min;
		Mc.exports = function(e, t) {
			var r = xm(e);
			return r < 0 ? Lm(r + t, 0) : Pm(r, t)
		}
	});
	var Xc = s((aB, Gc) => {
		var Dm = mo(),
			Mm = Math.min;
		Gc.exports = function(e) {
			return e > 0 ? Mm(Dm(e), 9007199254740991) : 0
		}
	});
	var Uc = s((sB, Vc) => {
		var Fm = Xc();
		Vc.exports = function(e) {
			return Fm(e.length)
		}
	});
	var Oo = s((uB, Bc) => {
		var Gm = Rr(),
			Xm = Fc(),
			Vm = Uc(),
			Wc = function(e) {
				return function(t, r, n) {
					var i = Gm(t),
						o = Vm(i),
						a = Xm(n, o),
						u;
					if (e && r != r) {
						for (; o > a;)
							if (u = i[a++], u != u) return !0
					} else
						for (; o > a; a++)
							if ((e || a in i) && i[a] === r) return e || a || 0;
					return !e && -1
				}
			};
		Bc.exports = {
			includes: Wc(!0),
			indexOf: Wc(!1)
		}
	});
	var So = s((cB, kc) => {
		var Um = ze(),
			Ao = _t(),
			Wm = Rr(),
			Bm = Oo().indexOf,
			Hm = In(),
			Hc = Um([].push);
		kc.exports = function(e, t) {
			var r = Wm(e),
				n = 0,
				i = [],
				o;
			for (o in r) !Ao(Hm, o) && Ao(r, o) && Hc(i, o);
			for (; t.length > n;) Ao(r, o = t[n++]) && (~Bm(i, o) || Hc(i, o));
			return i
		}
	});
	var On = s((lB, jc) => {
		jc.exports = ["constructor", "hasOwnProperty", "isPrototypeOf", "propertyIsEnumerable", "toLocaleString", "toString", "valueOf"]
	});
	var zc = s(Kc => {
		var km = So(),
			jm = On(),
			Km = jm.concat("length", "prototype");
		Kc.f = Object.getOwnPropertyNames || function(t) {
			return km(t, Km)
		}
	});
	var Qc = s(Yc => {
		Yc.f = Object.getOwnPropertySymbols
	});
	var Zc = s((pB, $c) => {
		var zm = wr(),
			Ym = ze(),
			Qm = zc(),
			$m = Qc(),
			Zm = Cr(),
			Jm = Ym([].concat);
		$c.exports = zm("Reflect", "ownKeys") || function(t) {
			var r = Qm.f(Zm(t)),
				n = $m.f;
			return n ? Jm(r, n(t)) : r
		}
	});
	var el = s((vB, Jc) => {
		var eO = _t(),
			tO = Zc(),
			rO = lo(),
			nO = Nr();
		Jc.exports = function(e, t) {
			for (var r = tO(t), n = nO.f, i = rO.f, o = 0; o < r.length; o++) {
				var a = r[o];
				eO(e, a) || n(e, a, i(t, a))
			}
		}
	});
	var rl = s((EB, tl) => {
		var iO = Kt(),
			oO = it(),
			aO = /#|\.prototype\./,
			xr = function(e, t) {
				var r = uO[sO(e)];
				return r == lO ? !0 : r == cO ? !1 : oO(t) ? iO(t) : !!t
			},
			sO = xr.normalize = function(e) {
				return String(e).replace(aO, ".").toLowerCase()
			},
			uO = xr.data = {},
			cO = xr.NATIVE = "N",
			lO = xr.POLYFILL = "P";
		tl.exports = xr
	});
	var il = s((hB, nl) => {
		var bo = ve(),
			fO = lo().f,
			dO = yn(),
			pO = Pc(),
			vO = gn(),
			EO = el(),
			hO = rl();
		nl.exports = function(e, t) {
			var r = e.target,
				n = e.global,
				i = e.stat,
				o, a, u, c, f, g;
			if (n ? a = bo : i ? a = bo[r] || vO(r, {}) : a = (bo[r] || {}).prototype, a)
				for (u in t) {
					if (f = t[u], e.noTargetGet ? (g = fO(a, u), c = g && g.value) : c = a[u], o = hO(n ? u : r + (i ? "." : "#") + u, e.forced), !o && c !== void 0) {
						if (typeof f == typeof c) continue;
						EO(f, c)
					}(e.sham || c && c.sham) && dO(f, "sham", !0), pO(a, u, f, e)
				}
		}
	});
	var al = s((gB, ol) => {
		var gO = So(),
			_O = On();
		ol.exports = Object.keys || function(t) {
			return gO(t, _O)
		}
	});
	var ul = s((_B, sl) => {
		var yO = xt(),
			IO = Nr(),
			TO = Cr(),
			mO = Rr(),
			OO = al();
		sl.exports = yO ? Object.defineProperties : function(t, r) {
			TO(t);
			for (var n = mO(r), i = OO(r), o = i.length, a = 0, u; o > a;) IO.f(t, u = i[a++], n[u]);
			return t
		}
	});
	var ll = s((yB, cl) => {
		var AO = wr();
		cl.exports = AO("document", "documentElement")
	});
	var _l = s((IB, gl) => {
		var SO = Cr(),
			bO = ul(),
			fl = On(),
			RO = In(),
			wO = ll(),
			CO = uo(),
			NO = vo(),
			dl = ">",
			pl = "<",
			wo = "prototype",
			Co = "script",
			El = NO("IE_PROTO"),
			Ro = function() {},
			hl = function(e) {
				return pl + Co + dl + e + pl + "/" + Co + dl
			},
			vl = function(e) {
				e.write(hl("")), e.close();
				var t = e.parentWindow.Object;
				return e = null, t
			},
			qO = function() {
				var e = CO("iframe"),
					t = "java" + Co + ":",
					r;
				return e.style.display = "none", wO.appendChild(e), e.src = String(t), r = e.contentWindow.document, r.open(), r.write(hl("document.F=Object")), r.close(), r.F
			},
			An, Sn = function() {
				try {
					An = new ActiveXObject("htmlfile")
				} catch {}
				Sn = typeof document < "u" ? document.domain && An ? vl(An) : qO() : vl(An);
				for (var e = fl.length; e--;) delete Sn[wo][fl[e]];
				return Sn()
			};
		RO[El] = !0;
		gl.exports = Object.create || function(t, r) {
			var n;
			return t !== null ? (Ro[wo] = SO(t), n = new Ro, Ro[wo] = null, n[El] = t) : n = Sn(), r === void 0 ? n : bO(n, r)
		}
	});
	var Il = s((TB, yl) => {
		var xO = oo(),
			LO = _l(),
			PO = Nr(),
			No = xO("unscopables"),
			qo = Array.prototype;
		qo[No] == null && PO.f(qo, No, {
			configurable: !0,
			value: LO(null)
		});
		yl.exports = function(e) {
			qo[No][e] = !0
		}
	});
	var Tl = s(() => {
		"use strict";
		var DO = il(),
			MO = Oo().includes,
			FO = Il();
		DO({
			target: "Array",
			proto: !0
		}, {
			includes: function(t) {
				return MO(this, t, arguments.length > 1 ? arguments[1] : void 0)
			}
		});
		FO("includes")
	});
	var Ol = s((AB, ml) => {
		var GO = ve(),
			XO = ze();
		ml.exports = function(e, t) {
			return XO(GO[e].prototype[t])
		}
	});
	var Sl = s((SB, Al) => {
		Tl();
		var VO = Ol();
		Al.exports = VO("Array", "includes")
	});
	var Rl = s((bB, bl) => {
		var UO = Sl();
		bl.exports = UO
	});
	var Cl = s((RB, wl) => {
		var WO = Rl();
		wl.exports = WO
	});
	var xo = s((wB, Nl) => {
		var BO = typeof global == "object" && global && global.Object === Object && global;
		Nl.exports = BO
	});
	var Qe = s((CB, ql) => {
		var HO = xo(),
			kO = typeof self == "object" && self && self.Object === Object && self,
			jO = HO || kO || Function("return this")();
		ql.exports = jO
	});
	var Qt = s((NB, xl) => {
		var KO = Qe(),
			zO = KO.Symbol;
		xl.exports = zO
	});
	var Ml = s((qB, Dl) => {
		var Ll = Qt(),
			Pl = Object.prototype,
			YO = Pl.hasOwnProperty,
			QO = Pl.toString,
			Lr = Ll ? Ll.toStringTag : void 0;

		function $O(e) {
			var t = YO.call(e, Lr),
				r = e[Lr];
			try {
				e[Lr] = void 0;
				var n = !0
			} catch {}
			var i = QO.call(e);
			return n && (t ? e[Lr] = r : delete e[Lr]), i
		}
		Dl.exports = $O
	});
	var Gl = s((xB, Fl) => {
		var ZO = Object.prototype,
			JO = ZO.toString;

		function eA(e) {
			return JO.call(e)
		}
		Fl.exports = eA
	});
	var It = s((LB, Ul) => {
		var Xl = Qt(),
			tA = Ml(),
			rA = Gl(),
			nA = "[object Null]",
			iA = "[object Undefined]",
			Vl = Xl ? Xl.toStringTag : void 0;

		function oA(e) {
			return e == null ? e === void 0 ? iA : nA : Vl && Vl in Object(e) ? tA(e) : rA(e)
		}
		Ul.exports = oA
	});
	var Lo = s((PB, Wl) => {
		function aA(e, t) {
			return function(r) {
				return e(t(r))
			}
		}
		Wl.exports = aA
	});
	var Po = s((DB, Bl) => {
		var sA = Lo(),
			uA = sA(Object.getPrototypeOf, Object);
		Bl.exports = uA
	});
	var dt = s((MB, Hl) => {
		function cA(e) {
			return e != null && typeof e == "object"
		}
		Hl.exports = cA
	});
	var Do = s((FB, jl) => {
		var lA = It(),
			fA = Po(),
			dA = dt(),
			pA = "[object Object]",
			vA = Function.prototype,
			EA = Object.prototype,
			kl = vA.toString,
			hA = EA.hasOwnProperty,
			gA = kl.call(Object);

		function _A(e) {
			if (!dA(e) || lA(e) != pA) return !1;
			var t = fA(e);
			if (t === null) return !0;
			var r = hA.call(t, "constructor") && t.constructor;
			return typeof r == "function" && r instanceof r && kl.call(r) == gA
		}
		jl.exports = _A
	});
	var Kl = s(Mo => {
		"use strict";
		Object.defineProperty(Mo, "__esModule", {
			value: !0
		});
		Mo.default = yA;

		function yA(e) {
			var t, r = e.Symbol;
			return typeof r == "function" ? r.observable ? t = r.observable : (t = r("observable"), r.observable = t) : t = "@@observable", t
		}
	});
	var zl = s((Go, Fo) => {
		"use strict";
		Object.defineProperty(Go, "__esModule", {
			value: !0
		});
		var IA = Kl(),
			TA = mA(IA);

		function mA(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var $t;
		typeof self < "u" ? $t = self : typeof window < "u" ? $t = window : typeof global < "u" ? $t = global : typeof Fo < "u" ? $t = Fo : $t = Function("return this")();
		var OA = (0, TA.default)($t);
		Go.default = OA
	});
	var Xo = s(Pr => {
		"use strict";
		Pr.__esModule = !0;
		Pr.ActionTypes = void 0;
		Pr.default = Zl;
		var AA = Do(),
			SA = $l(AA),
			bA = zl(),
			Yl = $l(bA);

		function $l(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		var Ql = Pr.ActionTypes = {
			INIT: "@@redux/INIT"
		};

		function Zl(e, t, r) {
			var n;
			if (typeof t == "function" && typeof r > "u" && (r = t, t = void 0), typeof r < "u") {
				if (typeof r != "function") throw new Error("Expected the enhancer to be a function.");
				return r(Zl)(e, t)
			}
			if (typeof e != "function") throw new Error("Expected the reducer to be a function.");
			var i = e,
				o = t,
				a = [],
				u = a,
				c = !1;

			function f() {
				u === a && (u = a.slice())
			}

			function g() {
				return o
			}

			function v(m) {
				if (typeof m != "function") throw new Error("Expected listener to be a function.");
				var D = !0;
				return f(), u.push(m),
					function() {
						if (D) {
							D = !1, f();
							var b = u.indexOf(m);
							u.splice(b, 1)
						}
					}
			}

			function h(m) {
				if (!(0, SA.default)(m)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
				if (typeof m.type > "u") throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
				if (c) throw new Error("Reducers may not dispatch actions.");
				try {
					c = !0, o = i(o, m)
				} finally {
					c = !1
				}
				for (var D = a = u, O = 0; O < D.length; O++) D[O]();
				return m
			}

			function _(m) {
				if (typeof m != "function") throw new Error("Expected the nextReducer to be a function.");
				i = m, h({
					type: Ql.INIT
				})
			}

			function S() {
				var m, D = v;
				return m = {
					subscribe: function(b) {
						if (typeof b != "object") throw new TypeError("Expected the observer to be an object.");

						function I() {
							b.next && b.next(g())
						}
						I();
						var N = D(I);
						return {
							unsubscribe: N
						}
					}
				}, m[Yl.default] = function() {
					return this
				}, m
			}
			return h({
				type: Ql.INIT
			}), n = {
				dispatch: h,
				subscribe: v,
				getState: g,
				replaceReducer: _
			}, n[Yl.default] = S, n
		}
	});
	var Uo = s(Vo => {
		"use strict";
		Vo.__esModule = !0;
		Vo.default = RA;

		function RA(e) {
			typeof console < "u" && typeof console.error == "function" && console.error(e);
			try {
				throw new Error(e)
			} catch {}
		}
	});
	var tf = s(Wo => {
		"use strict";
		Wo.__esModule = !0;
		Wo.default = xA;
		var Jl = Xo(),
			wA = Do(),
			UB = ef(wA),
			CA = Uo(),
			WB = ef(CA);

		function ef(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function NA(e, t) {
			var r = t && t.type,
				n = r && '"' + r.toString() + '"' || "an action";
			return "Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.'
		}

		function qA(e) {
			Object.keys(e).forEach(function(t) {
				var r = e[t],
					n = r(void 0, {
						type: Jl.ActionTypes.INIT
					});
				if (typeof n > "u") throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
				var i = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
				if (typeof r(void 0, {
						type: i
					}) > "u") throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + Jl.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.")
			})
		}

		function xA(e) {
			for (var t = Object.keys(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				typeof e[i] == "function" && (r[i] = e[i])
			}
			var o = Object.keys(r);
			if (!1) var a;
			var u;
			try {
				qA(r)
			} catch (c) {
				u = c
			}
			return function() {
				var f = arguments.length <= 0 || arguments[0] === void 0 ? {} : arguments[0],
					g = arguments[1];
				if (u) throw u;
				if (!1) var v;
				for (var h = !1, _ = {}, S = 0; S < o.length; S++) {
					var m = o[S],
						D = r[m],
						O = f[m],
						b = D(O, g);
					if (typeof b > "u") {
						var I = NA(m, g);
						throw new Error(I)
					}
					_[m] = b, h = h || b !== O
				}
				return h ? _ : f
			}
		}
	});
	var nf = s(Bo => {
		"use strict";
		Bo.__esModule = !0;
		Bo.default = LA;

		function rf(e, t) {
			return function() {
				return t(e.apply(void 0, arguments))
			}
		}

		function LA(e, t) {
			if (typeof e == "function") return rf(e, t);
			if (typeof e != "object" || e === null) throw new Error("bindActionCreators expected an object or a function, instead received " + (e === null ? "null" : typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
			for (var r = Object.keys(e), n = {}, i = 0; i < r.length; i++) {
				var o = r[i],
					a = e[o];
				typeof a == "function" && (n[o] = rf(a, t))
			}
			return n
		}
	});
	var ko = s(Ho => {
		"use strict";
		Ho.__esModule = !0;
		Ho.default = PA;

		function PA() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			if (t.length === 0) return function(o) {
				return o
			};
			if (t.length === 1) return t[0];
			var n = t[t.length - 1],
				i = t.slice(0, -1);
			return function() {
				return i.reduceRight(function(o, a) {
					return a(o)
				}, n.apply(void 0, arguments))
			}
		}
	});
	var of = s(jo => {
		"use strict";
		jo.__esModule = !0;
		var DA = Object.assign || function(e) {
			for (var t = 1; t < arguments.length; t++) {
				var r = arguments[t];
				for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
			}
			return e
		};
		jo.default = XA;
		var MA = ko(),
			FA = GA(MA);

		function GA(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}

		function XA() {
			for (var e = arguments.length, t = Array(e), r = 0; r < e; r++) t[r] = arguments[r];
			return function(n) {
				return function(i, o, a) {
					var u = n(i, o, a),
						c = u.dispatch,
						f = [],
						g = {
							getState: u.getState,
							dispatch: function(h) {
								return c(h)
							}
						};
					return f = t.map(function(v) {
						return v(g)
					}), c = FA.default.apply(void 0, f)(u.dispatch), DA({}, u, {
						dispatch: c
					})
				}
			}
		}
	});
	var Ko = s(Ue => {
		"use strict";
		Ue.__esModule = !0;
		Ue.compose = Ue.applyMiddleware = Ue.bindActionCreators = Ue.combineReducers = Ue.createStore = void 0;
		var VA = Xo(),
			UA = Zt(VA),
			WA = tf(),
			BA = Zt(WA),
			HA = nf(),
			kA = Zt(HA),
			jA = of(),
			KA = Zt(jA),
			zA = ko(),
			YA = Zt(zA),
			QA = Uo(),
			KB = Zt(QA);

		function Zt(e) {
			return e && e.__esModule ? e : {
				default: e
			}
		}
		Ue.createStore = UA.default;
		Ue.combineReducers = BA.default;
		Ue.bindActionCreators = kA.default;
		Ue.applyMiddleware = KA.default;
		Ue.compose = YA.default
	});
	var af = s(Ae => {
		"use strict";
		Object.defineProperty(Ae, "__esModule", {
			value: !0
		});
		Ae.QuickEffectIds = Ae.QuickEffectDirectionConsts = Ae.EventTypeConsts = Ae.EventLimitAffectedElements = Ae.EventContinuousMouseAxes = Ae.EventBasedOn = Ae.EventAppliesTo = void 0;
		var $A = {
			NAVBAR_OPEN: "NAVBAR_OPEN",
			NAVBAR_CLOSE: "NAVBAR_CLOSE",
			TAB_ACTIVE: "TAB_ACTIVE",
			TAB_INACTIVE: "TAB_INACTIVE",
			SLIDER_ACTIVE: "SLIDER_ACTIVE",
			SLIDER_INACTIVE: "SLIDER_INACTIVE",
			DROPDOWN_OPEN: "DROPDOWN_OPEN",
			DROPDOWN_CLOSE: "DROPDOWN_CLOSE",
			MOUSE_CLICK: "MOUSE_CLICK",
			MOUSE_SECOND_CLICK: "MOUSE_SECOND_CLICK",
			MOUSE_DOWN: "MOUSE_DOWN",
			MOUSE_UP: "MOUSE_UP",
			MOUSE_OVER: "MOUSE_OVER",
			MOUSE_OUT: "MOUSE_OUT",
			MOUSE_MOVE: "MOUSE_MOVE",
			MOUSE_MOVE_IN_VIEWPORT: "MOUSE_MOVE_IN_VIEWPORT",
			SCROLL_INTO_VIEW: "SCROLL_INTO_VIEW",
			SCROLL_OUT_OF_VIEW: "SCROLL_OUT_OF_VIEW",
			SCROLLING_IN_VIEW: "SCROLLING_IN_VIEW",
			ECOMMERCE_CART_OPEN: "ECOMMERCE_CART_OPEN",
			ECOMMERCE_CART_CLOSE: "ECOMMERCE_CART_CLOSE",
			PAGE_START: "PAGE_START",
			PAGE_FINISH: "PAGE_FINISH",
			PAGE_SCROLL_UP: "PAGE_SCROLL_UP",
			PAGE_SCROLL_DOWN: "PAGE_SCROLL_DOWN",
			PAGE_SCROLL: "PAGE_SCROLL"
		};
		Ae.EventTypeConsts = $A;
		var ZA = {
			ELEMENT: "ELEMENT",
			CLASS: "CLASS",
			PAGE: "PAGE"
		};
		Ae.EventAppliesTo = ZA;
		var JA = {
			ELEMENT: "ELEMENT",
			VIEWPORT: "VIEWPORT"
		};
		Ae.EventBasedOn = JA;
		var eS = {
			X_AXIS: "X_AXIS",
			Y_AXIS: "Y_AXIS"
		};
		Ae.EventContinuousMouseAxes = eS;
		var tS = {
			CHILDREN: "CHILDREN",
			SIBLINGS: "SIBLINGS",
			IMMEDIATE_CHILDREN: "IMMEDIATE_CHILDREN"
		};
		Ae.EventLimitAffectedElements = tS;
		var rS = {
			FADE_EFFECT: "FADE_EFFECT",
			SLIDE_EFFECT: "SLIDE_EFFECT",
			GROW_EFFECT: "GROW_EFFECT",
			SHRINK_EFFECT: "SHRINK_EFFECT",
			SPIN_EFFECT: "SPIN_EFFECT",
			FLY_EFFECT: "FLY_EFFECT",
			POP_EFFECT: "POP_EFFECT",
			FLIP_EFFECT: "FLIP_EFFECT",
			JIGGLE_EFFECT: "JIGGLE_EFFECT",
			PULSE_EFFECT: "PULSE_EFFECT",
			DROP_EFFECT: "DROP_EFFECT",
			BLINK_EFFECT: "BLINK_EFFECT",
			BOUNCE_EFFECT: "BOUNCE_EFFECT",
			FLIP_LEFT_TO_RIGHT_EFFECT: "FLIP_LEFT_TO_RIGHT_EFFECT",
			FLIP_RIGHT_TO_LEFT_EFFECT: "FLIP_RIGHT_TO_LEFT_EFFECT",
			RUBBER_BAND_EFFECT: "RUBBER_BAND_EFFECT",
			JELLO_EFFECT: "JELLO_EFFECT",
			GROW_BIG_EFFECT: "GROW_BIG_EFFECT",
			SHRINK_BIG_EFFECT: "SHRINK_BIG_EFFECT",
			PLUGIN_LOTTIE_EFFECT: "PLUGIN_LOTTIE_EFFECT"
		};
		Ae.QuickEffectIds = rS;
		var nS = {
			LEFT: "LEFT",
			RIGHT: "RIGHT",
			BOTTOM: "BOTTOM",
			TOP: "TOP",
			BOTTOM_LEFT: "BOTTOM_LEFT",
			BOTTOM_RIGHT: "BOTTOM_RIGHT",
			TOP_RIGHT: "TOP_RIGHT",
			TOP_LEFT: "TOP_LEFT",
			CLOCKWISE: "CLOCKWISE",
			COUNTER_CLOCKWISE: "COUNTER_CLOCKWISE"
		};
		Ae.QuickEffectDirectionConsts = nS
	});
	var zo = s(Jt => {
		"use strict";
		Object.defineProperty(Jt, "__esModule", {
			value: !0
		});
		Jt.ActionTypeConsts = Jt.ActionAppliesTo = void 0;
		var iS = {
			TRANSFORM_MOVE: "TRANSFORM_MOVE",
			TRANSFORM_SCALE: "TRANSFORM_SCALE",
			TRANSFORM_ROTATE: "TRANSFORM_ROTATE",
			TRANSFORM_SKEW: "TRANSFORM_SKEW",
			STYLE_OPACITY: "STYLE_OPACITY",
			STYLE_SIZE: "STYLE_SIZE",
			STYLE_FILTER: "STYLE_FILTER",
			STYLE_FONT_VARIATION: "STYLE_FONT_VARIATION",
			STYLE_BACKGROUND_COLOR: "STYLE_BACKGROUND_COLOR",
			STYLE_BORDER: "STYLE_BORDER",
			STYLE_TEXT_COLOR: "STYLE_TEXT_COLOR",
			PLUGIN_LOTTIE: "PLUGIN_LOTTIE",
			GENERAL_DISPLAY: "GENERAL_DISPLAY",
			GENERAL_START_ACTION: "GENERAL_START_ACTION",
			GENERAL_CONTINUOUS_ACTION: "GENERAL_CONTINUOUS_ACTION",
			GENERAL_COMBO_CLASS: "GENERAL_COMBO_CLASS",
			GENERAL_STOP_ACTION: "GENERAL_STOP_ACTION",
			GENERAL_LOOP: "GENERAL_LOOP",
			STYLE_BOX_SHADOW: "STYLE_BOX_SHADOW"
		};
		Jt.ActionTypeConsts = iS;
		var oS = {
			ELEMENT: "ELEMENT",
			ELEMENT_CLASS: "ELEMENT_CLASS",
			TRIGGER_ELEMENT: "TRIGGER_ELEMENT"
		};
		Jt.ActionAppliesTo = oS
	});
	var sf = s(bn => {
		"use strict";
		Object.defineProperty(bn, "__esModule", {
			value: !0
		});
		bn.InteractionTypeConsts = void 0;
		var aS = {
			MOUSE_CLICK_INTERACTION: "MOUSE_CLICK_INTERACTION",
			MOUSE_HOVER_INTERACTION: "MOUSE_HOVER_INTERACTION",
			MOUSE_MOVE_INTERACTION: "MOUSE_MOVE_INTERACTION",
			SCROLL_INTO_VIEW_INTERACTION: "SCROLL_INTO_VIEW_INTERACTION",
			SCROLLING_IN_VIEW_INTERACTION: "SCROLLING_IN_VIEW_INTERACTION",
			MOUSE_MOVE_IN_VIEWPORT_INTERACTION: "MOUSE_MOVE_IN_VIEWPORT_INTERACTION",
			PAGE_IS_SCROLLING_INTERACTION: "PAGE_IS_SCROLLING_INTERACTION",
			PAGE_LOAD_INTERACTION: "PAGE_LOAD_INTERACTION",
			PAGE_SCROLLED_INTERACTION: "PAGE_SCROLLED_INTERACTION",
			NAVBAR_INTERACTION: "NAVBAR_INTERACTION",
			DROPDOWN_INTERACTION: "DROPDOWN_INTERACTION",
			ECOMMERCE_CART_INTERACTION: "ECOMMERCE_CART_INTERACTION",
			TAB_INTERACTION: "TAB_INTERACTION",
			SLIDER_INTERACTION: "SLIDER_INTERACTION"
		};
		bn.InteractionTypeConsts = aS
	});
	var uf = s(Rn => {
		"use strict";
		Object.defineProperty(Rn, "__esModule", {
			value: !0
		});
		Rn.ReducedMotionTypes = void 0;
		var sS = zo(),
			{
				TRANSFORM_MOVE: uS,
				TRANSFORM_SCALE: cS,
				TRANSFORM_ROTATE: lS,
				TRANSFORM_SKEW: fS,
				STYLE_SIZE: dS,
				STYLE_FILTER: pS,
				STYLE_FONT_VARIATION: vS
			} = sS.ActionTypeConsts,
			ES = {
				[uS]: !0,
				[cS]: !0,
				[lS]: !0,
				[fS]: !0,
				[dS]: !0,
				[pS]: !0,
				[vS]: !0
			};
		Rn.ReducedMotionTypes = ES
	});
	var cf = s(J => {
		"use strict";
		Object.defineProperty(J, "__esModule", {
			value: !0
		});
		J.IX2_VIEWPORT_WIDTH_CHANGED = J.IX2_TEST_FRAME_RENDERED = J.IX2_STOP_REQUESTED = J.IX2_SESSION_STOPPED = J.IX2_SESSION_STARTED = J.IX2_SESSION_INITIALIZED = J.IX2_RAW_DATA_IMPORTED = J.IX2_PREVIEW_REQUESTED = J.IX2_PLAYBACK_REQUESTED = J.IX2_PARAMETER_CHANGED = J.IX2_MEDIA_QUERIES_DEFINED = J.IX2_INSTANCE_STARTED = J.IX2_INSTANCE_REMOVED = J.IX2_INSTANCE_ADDED = J.IX2_EVENT_STATE_CHANGED = J.IX2_EVENT_LISTENER_ADDED = J.IX2_ELEMENT_STATE_CHANGED = J.IX2_CLEAR_REQUESTED = J.IX2_ANIMATION_FRAME_CHANGED = J.IX2_ACTION_LIST_PLAYBACK_CHANGED = void 0;
		var hS = "IX2_RAW_DATA_IMPORTED";
		J.IX2_RAW_DATA_IMPORTED = hS;
		var gS = "IX2_SESSION_INITIALIZED";
		J.IX2_SESSION_INITIALIZED = gS;
		var _S = "IX2_SESSION_STARTED";
		J.IX2_SESSION_STARTED = _S;
		var yS = "IX2_SESSION_STOPPED";
		J.IX2_SESSION_STOPPED = yS;
		var IS = "IX2_PREVIEW_REQUESTED";
		J.IX2_PREVIEW_REQUESTED = IS;
		var TS = "IX2_PLAYBACK_REQUESTED";
		J.IX2_PLAYBACK_REQUESTED = TS;
		var mS = "IX2_STOP_REQUESTED";
		J.IX2_STOP_REQUESTED = mS;
		var OS = "IX2_CLEAR_REQUESTED";
		J.IX2_CLEAR_REQUESTED = OS;
		var AS = "IX2_EVENT_LISTENER_ADDED";
		J.IX2_EVENT_LISTENER_ADDED = AS;
		var SS = "IX2_EVENT_STATE_CHANGED";
		J.IX2_EVENT_STATE_CHANGED = SS;
		var bS = "IX2_ANIMATION_FRAME_CHANGED";
		J.IX2_ANIMATION_FRAME_CHANGED = bS;
		var RS = "IX2_PARAMETER_CHANGED";
		J.IX2_PARAMETER_CHANGED = RS;
		var wS = "IX2_INSTANCE_ADDED";
		J.IX2_INSTANCE_ADDED = wS;
		var CS = "IX2_INSTANCE_STARTED";
		J.IX2_INSTANCE_STARTED = CS;
		var NS = "IX2_INSTANCE_REMOVED";
		J.IX2_INSTANCE_REMOVED = NS;
		var qS = "IX2_ELEMENT_STATE_CHANGED";
		J.IX2_ELEMENT_STATE_CHANGED = qS;
		var xS = "IX2_ACTION_LIST_PLAYBACK_CHANGED";
		J.IX2_ACTION_LIST_PLAYBACK_CHANGED = xS;
		var LS = "IX2_VIEWPORT_WIDTH_CHANGED";
		J.IX2_VIEWPORT_WIDTH_CHANGED = LS;
		var PS = "IX2_MEDIA_QUERIES_DEFINED";
		J.IX2_MEDIA_QUERIES_DEFINED = PS;
		var DS = "IX2_TEST_FRAME_RENDERED";
		J.IX2_TEST_FRAME_RENDERED = DS
	});
	var lf = s(A => {
		"use strict";
		Object.defineProperty(A, "__esModule", {
			value: !0
		});
		A.W_MOD_JS = A.W_MOD_IX = A.WILL_CHANGE = A.WIDTH = A.WF_PAGE = A.TRANSLATE_Z = A.TRANSLATE_Y = A.TRANSLATE_X = A.TRANSLATE_3D = A.TRANSFORM = A.SKEW_Y = A.SKEW_X = A.SKEW = A.SIBLINGS = A.SCALE_Z = A.SCALE_Y = A.SCALE_X = A.SCALE_3D = A.ROTATE_Z = A.ROTATE_Y = A.ROTATE_X = A.RENDER_TRANSFORM = A.RENDER_STYLE = A.RENDER_PLUGIN = A.RENDER_GENERAL = A.PRESERVE_3D = A.PLAIN_OBJECT = A.PARENT = A.OPACITY = A.IX2_ID_DELIMITER = A.IMMEDIATE_CHILDREN = A.HTML_ELEMENT = A.HEIGHT = A.FONT_VARIATION_SETTINGS = A.FLEX = A.FILTER = A.DISPLAY = A.CONFIG_Z_VALUE = A.CONFIG_Z_UNIT = A.CONFIG_Y_VALUE = A.CONFIG_Y_UNIT = A.CONFIG_X_VALUE = A.CONFIG_X_UNIT = A.CONFIG_VALUE = A.CONFIG_UNIT = A.COMMA_DELIMITER = A.COLOR = A.COLON_DELIMITER = A.CHILDREN = A.BOUNDARY_SELECTOR = A.BORDER_COLOR = A.BAR_DELIMITER = A.BACKGROUND_COLOR = A.BACKGROUND = A.AUTO = A.ABSTRACT_NODE = void 0;
		var MS = "|";
		A.IX2_ID_DELIMITER = MS;
		var FS = "data-wf-page";
		A.WF_PAGE = FS;
		var GS = "w-mod-js";
		A.W_MOD_JS = GS;
		var XS = "w-mod-ix";
		A.W_MOD_IX = XS;
		var VS = ".w-dyn-item";
		A.BOUNDARY_SELECTOR = VS;
		var US = "xValue";
		A.CONFIG_X_VALUE = US;
		var WS = "yValue";
		A.CONFIG_Y_VALUE = WS;
		var BS = "zValue";
		A.CONFIG_Z_VALUE = BS;
		var HS = "value";
		A.CONFIG_VALUE = HS;
		var kS = "xUnit";
		A.CONFIG_X_UNIT = kS;
		var jS = "yUnit";
		A.CONFIG_Y_UNIT = jS;
		var KS = "zUnit";
		A.CONFIG_Z_UNIT = KS;
		var zS = "unit";
		A.CONFIG_UNIT = zS;
		var YS = "transform";
		A.TRANSFORM = YS;
		var QS = "translateX";
		A.TRANSLATE_X = QS;
		var $S = "translateY";
		A.TRANSLATE_Y = $S;
		var ZS = "translateZ";
		A.TRANSLATE_Z = ZS;
		var JS = "translate3d";
		A.TRANSLATE_3D = JS;
		var eb = "scaleX";
		A.SCALE_X = eb;
		var tb = "scaleY";
		A.SCALE_Y = tb;
		var rb = "scaleZ";
		A.SCALE_Z = rb;
		var nb = "scale3d";
		A.SCALE_3D = nb;
		var ib = "rotateX";
		A.ROTATE_X = ib;
		var ob = "rotateY";
		A.ROTATE_Y = ob;
		var ab = "rotateZ";
		A.ROTATE_Z = ab;
		var sb = "skew";
		A.SKEW = sb;
		var ub = "skewX";
		A.SKEW_X = ub;
		var cb = "skewY";
		A.SKEW_Y = cb;
		var lb = "opacity";
		A.OPACITY = lb;
		var fb = "filter";
		A.FILTER = fb;
		var db = "font-variation-settings";
		A.FONT_VARIATION_SETTINGS = db;
		var pb = "width";
		A.WIDTH = pb;
		var vb = "height";
		A.HEIGHT = vb;
		var Eb = "backgroundColor";
		A.BACKGROUND_COLOR = Eb;
		var hb = "background";
		A.BACKGROUND = hb;
		var gb = "borderColor";
		A.BORDER_COLOR = gb;
		var _b = "color";
		A.COLOR = _b;
		var yb = "display";
		A.DISPLAY = yb;
		var Ib = "flex";
		A.FLEX = Ib;
		var Tb = "willChange";
		A.WILL_CHANGE = Tb;
		var mb = "AUTO";
		A.AUTO = mb;
		var Ob = ",";
		A.COMMA_DELIMITER = Ob;
		var Ab = ":";
		A.COLON_DELIMITER = Ab;
		var Sb = "|";
		A.BAR_DELIMITER = Sb;
		var bb = "CHILDREN";
		A.CHILDREN = bb;
		var Rb = "IMMEDIATE_CHILDREN";
		A.IMMEDIATE_CHILDREN = Rb;
		var wb = "SIBLINGS";
		A.SIBLINGS = wb;
		var Cb = "PARENT";
		A.PARENT = Cb;
		var Nb = "preserve-3d";
		A.PRESERVE_3D = Nb;
		var qb = "HTML_ELEMENT";
		A.HTML_ELEMENT = qb;
		var xb = "PLAIN_OBJECT";
		A.PLAIN_OBJECT = xb;
		var Lb = "ABSTRACT_NODE";
		A.ABSTRACT_NODE = Lb;
		var Pb = "RENDER_TRANSFORM";
		A.RENDER_TRANSFORM = Pb;
		var Db = "RENDER_GENERAL";
		A.RENDER_GENERAL = Db;
		var Mb = "RENDER_STYLE";
		A.RENDER_STYLE = Mb;
		var Fb = "RENDER_PLUGIN";
		A.RENDER_PLUGIN = Fb
	});
	var Ge = s(Te => {
		"use strict";
		var ff = jt().default;
		Object.defineProperty(Te, "__esModule", {
			value: !0
		});
		var wn = {
			IX2EngineActionTypes: !0,
			IX2EngineConstants: !0
		};
		Te.IX2EngineConstants = Te.IX2EngineActionTypes = void 0;
		var Yo = af();
		Object.keys(Yo).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Te && Te[e] === Yo[e] || Object.defineProperty(Te, e, {
				enumerable: !0,
				get: function() {
					return Yo[e]
				}
			})
		});
		var Qo = zo();
		Object.keys(Qo).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Te && Te[e] === Qo[e] || Object.defineProperty(Te, e, {
				enumerable: !0,
				get: function() {
					return Qo[e]
				}
			})
		});
		var $o = sf();
		Object.keys($o).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Te && Te[e] === $o[e] || Object.defineProperty(Te, e, {
				enumerable: !0,
				get: function() {
					return $o[e]
				}
			})
		});
		var Zo = uf();
		Object.keys(Zo).forEach(function(e) {
			e === "default" || e === "__esModule" || Object.prototype.hasOwnProperty.call(wn, e) || e in Te && Te[e] === Zo[e] || Object.defineProperty(Te, e, {
				enumerable: !0,
				get: function() {
					return Zo[e]
				}
			})
		});
		var Gb = ff(cf());
		Te.IX2EngineActionTypes = Gb;
		var Xb = ff(lf());
		Te.IX2EngineConstants = Xb
	});
	var df = s(Cn => {
		"use strict";
		Object.defineProperty(Cn, "__esModule", {
			value: !0
		});
		Cn.ixData = void 0;
		var Vb = Ge(),
			{
				IX2_RAW_DATA_IMPORTED: Ub
			} = Vb.IX2EngineActionTypes,
			Wb = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case Ub:
						return t.payload.ixData || Object.freeze({});
					default:
						return e
				}
			};
		Cn.ixData = Wb
	});
	var Dr = s((nH, pt) => {
		function Jo() {
			return pt.exports = Jo = Object.assign ? Object.assign.bind() : function(e) {
				for (var t = 1; t < arguments.length; t++) {
					var r = arguments[t];
					for (var n in r) Object.prototype.hasOwnProperty.call(r, n) && (e[n] = r[n])
				}
				return e
			}, pt.exports.__esModule = !0, pt.exports.default = pt.exports, Jo.apply(this, arguments)
		}
		pt.exports = Jo, pt.exports.__esModule = !0, pt.exports.default = pt.exports
	});
	var er = s(he => {
		"use strict";
		Object.defineProperty(he, "__esModule", {
			value: !0
		});
		var Bb = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(e) {
			return typeof e
		} : function(e) {
			return e && typeof Symbol == "function" && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
		};
		he.clone = qn;
		he.addLast = Ef;
		he.addFirst = hf;
		he.removeLast = gf;
		he.removeFirst = _f;
		he.insert = yf;
		he.removeAt = If;
		he.replaceAt = Tf;
		he.getIn = xn;
		he.set = Ln;
		he.setIn = Pn;
		he.update = Of;
		he.updateIn = Af;
		he.merge = Sf;
		he.mergeDeep = bf;
		he.mergeIn = Rf;
		he.omit = wf;
		he.addDefaults = Cf;
		var pf = "INVALID_ARGS";

		function vf(e) {
			throw new Error(e)
		}

		function ea(e) {
			var t = Object.keys(e);
			return Object.getOwnPropertySymbols ? t.concat(Object.getOwnPropertySymbols(e)) : t
		}
		var Hb = {}.hasOwnProperty;

		function qn(e) {
			if (Array.isArray(e)) return e.slice();
			for (var t = ea(e), r = {}, n = 0; n < t.length; n++) {
				var i = t[n];
				r[i] = e[i]
			}
			return r
		}

		function Xe(e, t, r) {
			var n = r;
			n == null && vf(pf);
			for (var i = !1, o = arguments.length, a = Array(o > 3 ? o - 3 : 0), u = 3; u < o; u++) a[u - 3] = arguments[u];
			for (var c = 0; c < a.length; c++) {
				var f = a[c];
				if (f != null) {
					var g = ea(f);
					if (g.length)
						for (var v = 0; v <= g.length; v++) {
							var h = g[v];
							if (!(e && n[h] !== void 0)) {
								var _ = f[h];
								t && Nn(n[h]) && Nn(_) && (_ = Xe(e, t, n[h], _)), !(_ === void 0 || _ === n[h]) && (i || (i = !0, n = qn(n)), n[h] = _)
							}
						}
				}
			}
			return n
		}

		function Nn(e) {
			var t = typeof e > "u" ? "undefined" : Bb(e);
			return e != null && (t === "object" || t === "function")
		}

		function Ef(e, t) {
			return Array.isArray(t) ? e.concat(t) : e.concat([t])
		}

		function hf(e, t) {
			return Array.isArray(t) ? t.concat(e) : [t].concat(e)
		}

		function gf(e) {
			return e.length ? e.slice(0, e.length - 1) : e
		}

		function _f(e) {
			return e.length ? e.slice(1) : e
		}

		function yf(e, t, r) {
			return e.slice(0, t).concat(Array.isArray(r) ? r : [r]).concat(e.slice(t))
		}

		function If(e, t) {
			return t >= e.length || t < 0 ? e : e.slice(0, t).concat(e.slice(t + 1))
		}

		function Tf(e, t, r) {
			if (e[t] === r) return e;
			for (var n = e.length, i = Array(n), o = 0; o < n; o++) i[o] = e[o];
			return i[t] = r, i
		}

		function xn(e, t) {
			if (!Array.isArray(t) && vf(pf), e != null) {
				for (var r = e, n = 0; n < t.length; n++) {
					var i = t[n];
					if (r = r?.[i], r === void 0) return r
				}
				return r
			}
		}

		function Ln(e, t, r) {
			var n = typeof t == "number" ? [] : {},
				i = e ?? n;
			if (i[t] === r) return i;
			var o = qn(i);
			return o[t] = r, o
		}

		function mf(e, t, r, n) {
			var i = void 0,
				o = t[n];
			if (n === t.length - 1) i = r;
			else {
				var a = Nn(e) && Nn(e[o]) ? e[o] : typeof t[n + 1] == "number" ? [] : {};
				i = mf(a, t, r, n + 1)
			}
			return Ln(e, o, i)
		}

		function Pn(e, t, r) {
			return t.length ? mf(e, t, r, 0) : r
		}

		function Of(e, t, r) {
			var n = e?.[t],
				i = r(n);
			return Ln(e, t, i)
		}

		function Af(e, t, r) {
			var n = xn(e, t),
				i = r(n);
			return Pn(e, t, i)
		}

		function Sf(e, t, r, n, i, o) {
			for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
			return u.length ? Xe.call.apply(Xe, [null, !1, !1, e, t, r, n, i, o].concat(u)) : Xe(!1, !1, e, t, r, n, i, o)
		}

		function bf(e, t, r, n, i, o) {
			for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
			return u.length ? Xe.call.apply(Xe, [null, !1, !0, e, t, r, n, i, o].concat(u)) : Xe(!1, !0, e, t, r, n, i, o)
		}

		function Rf(e, t, r, n, i, o, a) {
			var u = xn(e, t);
			u == null && (u = {});
			for (var c = void 0, f = arguments.length, g = Array(f > 7 ? f - 7 : 0), v = 7; v < f; v++) g[v - 7] = arguments[v];
			return g.length ? c = Xe.call.apply(Xe, [null, !1, !1, u, r, n, i, o, a].concat(g)) : c = Xe(!1, !1, u, r, n, i, o, a), Pn(e, t, c)
		}

		function wf(e, t) {
			for (var r = Array.isArray(t) ? t : [t], n = !1, i = 0; i < r.length; i++)
				if (Hb.call(e, r[i])) {
					n = !0;
					break
				} if (!n) return e;
			for (var o = {}, a = ea(e), u = 0; u < a.length; u++) {
				var c = a[u];
				r.indexOf(c) >= 0 || (o[c] = e[c])
			}
			return o
		}

		function Cf(e, t, r, n, i, o) {
			for (var a = arguments.length, u = Array(a > 6 ? a - 6 : 0), c = 6; c < a; c++) u[c - 6] = arguments[c];
			return u.length ? Xe.call.apply(Xe, [null, !0, !1, e, t, r, n, i, o].concat(u)) : Xe(!0, !1, e, t, r, n, i, o)
		}
		var kb = {
			clone: qn,
			addLast: Ef,
			addFirst: hf,
			removeLast: gf,
			removeFirst: _f,
			insert: yf,
			removeAt: If,
			replaceAt: Tf,
			getIn: xn,
			set: Ln,
			setIn: Pn,
			update: Of,
			updateIn: Af,
			merge: Sf,
			mergeDeep: bf,
			mergeIn: Rf,
			omit: wf,
			addDefaults: Cf
		};
		he.default = kb
	});
	var qf = s(Dn => {
		"use strict";
		var jb = nt().default;
		Object.defineProperty(Dn, "__esModule", {
			value: !0
		});
		Dn.ixRequest = void 0;
		var Kb = jb(Dr()),
			zb = Ge(),
			Yb = er(),
			{
				IX2_PREVIEW_REQUESTED: Qb,
				IX2_PLAYBACK_REQUESTED: $b,
				IX2_STOP_REQUESTED: Zb,
				IX2_CLEAR_REQUESTED: Jb
			} = zb.IX2EngineActionTypes,
			e0 = {
				preview: {},
				playback: {},
				stop: {},
				clear: {}
			},
			Nf = Object.create(null, {
				[Qb]: {
					value: "preview"
				},
				[$b]: {
					value: "playback"
				},
				[Zb]: {
					value: "stop"
				},
				[Jb]: {
					value: "clear"
				}
			}),
			t0 = (e = e0, t) => {
				if (t.type in Nf) {
					let r = [Nf[t.type]];
					return (0, Yb.setIn)(e, [r], (0, Kb.default)({}, t.payload))
				}
				return e
			};
		Dn.ixRequest = t0
	});
	var Lf = s(Mn => {
		"use strict";
		Object.defineProperty(Mn, "__esModule", {
			value: !0
		});
		Mn.ixSession = void 0;
		var r0 = Ge(),
			ot = er(),
			{
				IX2_SESSION_INITIALIZED: n0,
				IX2_SESSION_STARTED: i0,
				IX2_TEST_FRAME_RENDERED: o0,
				IX2_SESSION_STOPPED: a0,
				IX2_EVENT_LISTENER_ADDED: s0,
				IX2_EVENT_STATE_CHANGED: u0,
				IX2_ANIMATION_FRAME_CHANGED: c0,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: l0,
				IX2_VIEWPORT_WIDTH_CHANGED: f0,
				IX2_MEDIA_QUERIES_DEFINED: d0
			} = r0.IX2EngineActionTypes,
			xf = {
				active: !1,
				tick: 0,
				eventListeners: [],
				eventState: {},
				playbackState: {},
				viewportWidth: 0,
				mediaQueryKey: null,
				hasBoundaryNodes: !1,
				hasDefinedMediaQueries: !1,
				reducedMotion: !1
			},
			p0 = 20,
			v0 = (e = xf, t) => {
				switch (t.type) {
					case n0: {
						let {
							hasBoundaryNodes: r,
							reducedMotion: n
						} = t.payload;
						return (0, ot.merge)(e, {
							hasBoundaryNodes: r,
							reducedMotion: n
						})
					}
					case i0:
						return (0, ot.set)(e, "active", !0);
					case o0: {
						let {
							payload: {
								step: r = p0
							}
						} = t;
						return (0, ot.set)(e, "tick", e.tick + r)
					}
					case a0:
						return xf;
					case c0: {
						let {
							payload: {
								now: r
							}
						} = t;
						return (0, ot.set)(e, "tick", r)
					}
					case s0: {
						let r = (0, ot.addLast)(e.eventListeners, t.payload);
						return (0, ot.set)(e, "eventListeners", r)
					}
					case u0: {
						let {
							stateKey: r,
							newState: n
						} = t.payload;
						return (0, ot.setIn)(e, ["eventState", r], n)
					}
					case l0: {
						let {
							actionListId: r,
							isPlaying: n
						} = t.payload;
						return (0, ot.setIn)(e, ["playbackState", r], n)
					}
					case f0: {
						let {
							width: r,
							mediaQueries: n
						} = t.payload, i = n.length, o = null;
						for (let a = 0; a < i; a++) {
							let {
								key: u,
								min: c,
								max: f
							} = n[a];
							if (r >= c && r <= f) {
								o = u;
								break
							}
						}
						return (0, ot.merge)(e, {
							viewportWidth: r,
							mediaQueryKey: o
						})
					}
					case d0:
						return (0, ot.set)(e, "hasDefinedMediaQueries", !0);
					default:
						return e
				}
			};
		Mn.ixSession = v0
	});
	var Df = s((sH, Pf) => {
		function E0() {
			this.__data__ = [], this.size = 0
		}
		Pf.exports = E0
	});
	var Fn = s((uH, Mf) => {
		function h0(e, t) {
			return e === t || e !== e && t !== t
		}
		Mf.exports = h0
	});
	var Mr = s((cH, Ff) => {
		var g0 = Fn();

		function _0(e, t) {
			for (var r = e.length; r--;)
				if (g0(e[r][0], t)) return r;
			return -1
		}
		Ff.exports = _0
	});
	var Xf = s((lH, Gf) => {
		var y0 = Mr(),
			I0 = Array.prototype,
			T0 = I0.splice;

		function m0(e) {
			var t = this.__data__,
				r = y0(t, e);
			if (r < 0) return !1;
			var n = t.length - 1;
			return r == n ? t.pop() : T0.call(t, r, 1), --this.size, !0
		}
		Gf.exports = m0
	});
	var Uf = s((fH, Vf) => {
		var O0 = Mr();

		function A0(e) {
			var t = this.__data__,
				r = O0(t, e);
			return r < 0 ? void 0 : t[r][1]
		}
		Vf.exports = A0
	});
	var Bf = s((dH, Wf) => {
		var S0 = Mr();

		function b0(e) {
			return S0(this.__data__, e) > -1
		}
		Wf.exports = b0
	});
	var kf = s((pH, Hf) => {
		var R0 = Mr();

		function w0(e, t) {
			var r = this.__data__,
				n = R0(r, e);
			return n < 0 ? (++this.size, r.push([e, t])) : r[n][1] = t, this
		}
		Hf.exports = w0
	});
	var Fr = s((vH, jf) => {
		var C0 = Df(),
			N0 = Xf(),
			q0 = Uf(),
			x0 = Bf(),
			L0 = kf();

		function tr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		tr.prototype.clear = C0;
		tr.prototype.delete = N0;
		tr.prototype.get = q0;
		tr.prototype.has = x0;
		tr.prototype.set = L0;
		jf.exports = tr
	});
	var zf = s((EH, Kf) => {
		var P0 = Fr();

		function D0() {
			this.__data__ = new P0, this.size = 0
		}
		Kf.exports = D0
	});
	var Qf = s((hH, Yf) => {
		function M0(e) {
			var t = this.__data__,
				r = t.delete(e);
			return this.size = t.size, r
		}
		Yf.exports = M0
	});
	var Zf = s((gH, $f) => {
		function F0(e) {
			return this.__data__.get(e)
		}
		$f.exports = F0
	});
	var ed = s((_H, Jf) => {
		function G0(e) {
			return this.__data__.has(e)
		}
		Jf.exports = G0
	});
	var at = s((yH, td) => {
		function X0(e) {
			var t = typeof e;
			return e != null && (t == "object" || t == "function")
		}
		td.exports = X0
	});
	var ta = s((IH, rd) => {
		var V0 = It(),
			U0 = at(),
			W0 = "[object AsyncFunction]",
			B0 = "[object Function]",
			H0 = "[object GeneratorFunction]",
			k0 = "[object Proxy]";

		function j0(e) {
			if (!U0(e)) return !1;
			var t = V0(e);
			return t == B0 || t == H0 || t == W0 || t == k0
		}
		rd.exports = j0
	});
	var id = s((TH, nd) => {
		var K0 = Qe(),
			z0 = K0["__core-js_shared__"];
		nd.exports = z0
	});
	var sd = s((mH, ad) => {
		var ra = id(),
			od = function() {
				var e = /[^.]+$/.exec(ra && ra.keys && ra.keys.IE_PROTO || "");
				return e ? "Symbol(src)_1." + e : ""
			}();

		function Y0(e) {
			return !!od && od in e
		}
		ad.exports = Y0
	});
	var na = s((OH, ud) => {
		var Q0 = Function.prototype,
			$0 = Q0.toString;

		function Z0(e) {
			if (e != null) {
				try {
					return $0.call(e)
				} catch {}
				try {
					return e + ""
				} catch {}
			}
			return ""
		}
		ud.exports = Z0
	});
	var ld = s((AH, cd) => {
		var J0 = ta(),
			eR = sd(),
			tR = at(),
			rR = na(),
			nR = /[\\^$.*+?()[\]{}|]/g,
			iR = /^\[object .+?Constructor\]$/,
			oR = Function.prototype,
			aR = Object.prototype,
			sR = oR.toString,
			uR = aR.hasOwnProperty,
			cR = RegExp("^" + sR.call(uR).replace(nR, "\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, "$1.*?") + "$");

		function lR(e) {
			if (!tR(e) || eR(e)) return !1;
			var t = J0(e) ? cR : iR;
			return t.test(rR(e))
		}
		cd.exports = lR
	});
	var dd = s((SH, fd) => {
		function fR(e, t) {
			return e?.[t]
		}
		fd.exports = fR
	});
	var Tt = s((bH, pd) => {
		var dR = ld(),
			pR = dd();

		function vR(e, t) {
			var r = pR(e, t);
			return dR(r) ? r : void 0
		}
		pd.exports = vR
	});
	var Gn = s((RH, vd) => {
		var ER = Tt(),
			hR = Qe(),
			gR = ER(hR, "Map");
		vd.exports = gR
	});
	var Gr = s((wH, Ed) => {
		var _R = Tt(),
			yR = _R(Object, "create");
		Ed.exports = yR
	});
	var _d = s((CH, gd) => {
		var hd = Gr();

		function IR() {
			this.__data__ = hd ? hd(null) : {}, this.size = 0
		}
		gd.exports = IR
	});
	var Id = s((NH, yd) => {
		function TR(e) {
			var t = this.has(e) && delete this.__data__[e];
			return this.size -= t ? 1 : 0, t
		}
		yd.exports = TR
	});
	var md = s((qH, Td) => {
		var mR = Gr(),
			OR = "__lodash_hash_undefined__",
			AR = Object.prototype,
			SR = AR.hasOwnProperty;

		function bR(e) {
			var t = this.__data__;
			if (mR) {
				var r = t[e];
				return r === OR ? void 0 : r
			}
			return SR.call(t, e) ? t[e] : void 0
		}
		Td.exports = bR
	});
	var Ad = s((xH, Od) => {
		var RR = Gr(),
			wR = Object.prototype,
			CR = wR.hasOwnProperty;

		function NR(e) {
			var t = this.__data__;
			return RR ? t[e] !== void 0 : CR.call(t, e)
		}
		Od.exports = NR
	});
	var bd = s((LH, Sd) => {
		var qR = Gr(),
			xR = "__lodash_hash_undefined__";

		function LR(e, t) {
			var r = this.__data__;
			return this.size += this.has(e) ? 0 : 1, r[e] = qR && t === void 0 ? xR : t, this
		}
		Sd.exports = LR
	});
	var wd = s((PH, Rd) => {
		var PR = _d(),
			DR = Id(),
			MR = md(),
			FR = Ad(),
			GR = bd();

		function rr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		rr.prototype.clear = PR;
		rr.prototype.delete = DR;
		rr.prototype.get = MR;
		rr.prototype.has = FR;
		rr.prototype.set = GR;
		Rd.exports = rr
	});
	var qd = s((DH, Nd) => {
		var Cd = wd(),
			XR = Fr(),
			VR = Gn();

		function UR() {
			this.size = 0, this.__data__ = {
				hash: new Cd,
				map: new(VR || XR),
				string: new Cd
			}
		}
		Nd.exports = UR
	});
	var Ld = s((MH, xd) => {
		function WR(e) {
			var t = typeof e;
			return t == "string" || t == "number" || t == "symbol" || t == "boolean" ? e !== "__proto__" : e === null
		}
		xd.exports = WR
	});
	var Xr = s((FH, Pd) => {
		var BR = Ld();

		function HR(e, t) {
			var r = e.__data__;
			return BR(t) ? r[typeof t == "string" ? "string" : "hash"] : r.map
		}
		Pd.exports = HR
	});
	var Md = s((GH, Dd) => {
		var kR = Xr();

		function jR(e) {
			var t = kR(this, e).delete(e);
			return this.size -= t ? 1 : 0, t
		}
		Dd.exports = jR
	});
	var Gd = s((XH, Fd) => {
		var KR = Xr();

		function zR(e) {
			return KR(this, e).get(e)
		}
		Fd.exports = zR
	});
	var Vd = s((VH, Xd) => {
		var YR = Xr();

		function QR(e) {
			return YR(this, e).has(e)
		}
		Xd.exports = QR
	});
	var Wd = s((UH, Ud) => {
		var $R = Xr();

		function ZR(e, t) {
			var r = $R(this, e),
				n = r.size;
			return r.set(e, t), this.size += r.size == n ? 0 : 1, this
		}
		Ud.exports = ZR
	});
	var Xn = s((WH, Bd) => {
		var JR = qd(),
			ew = Md(),
			tw = Gd(),
			rw = Vd(),
			nw = Wd();

		function nr(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.clear(); ++t < r;) {
				var n = e[t];
				this.set(n[0], n[1])
			}
		}
		nr.prototype.clear = JR;
		nr.prototype.delete = ew;
		nr.prototype.get = tw;
		nr.prototype.has = rw;
		nr.prototype.set = nw;
		Bd.exports = nr
	});
	var kd = s((BH, Hd) => {
		var iw = Fr(),
			ow = Gn(),
			aw = Xn(),
			sw = 200;

		function uw(e, t) {
			var r = this.__data__;
			if (r instanceof iw) {
				var n = r.__data__;
				if (!ow || n.length < sw - 1) return n.push([e, t]), this.size = ++r.size, this;
				r = this.__data__ = new aw(n)
			}
			return r.set(e, t), this.size = r.size, this
		}
		Hd.exports = uw
	});
	var ia = s((HH, jd) => {
		var cw = Fr(),
			lw = zf(),
			fw = Qf(),
			dw = Zf(),
			pw = ed(),
			vw = kd();

		function ir(e) {
			var t = this.__data__ = new cw(e);
			this.size = t.size
		}
		ir.prototype.clear = lw;
		ir.prototype.delete = fw;
		ir.prototype.get = dw;
		ir.prototype.has = pw;
		ir.prototype.set = vw;
		jd.exports = ir
	});
	var zd = s((kH, Kd) => {
		var Ew = "__lodash_hash_undefined__";

		function hw(e) {
			return this.__data__.set(e, Ew), this
		}
		Kd.exports = hw
	});
	var Qd = s((jH, Yd) => {
		function gw(e) {
			return this.__data__.has(e)
		}
		Yd.exports = gw
	});
	var Zd = s((KH, $d) => {
		var _w = Xn(),
			yw = zd(),
			Iw = Qd();

		function Vn(e) {
			var t = -1,
				r = e == null ? 0 : e.length;
			for (this.__data__ = new _w; ++t < r;) this.add(e[t])
		}
		Vn.prototype.add = Vn.prototype.push = yw;
		Vn.prototype.has = Iw;
		$d.exports = Vn
	});
	var ep = s((zH, Jd) => {
		function Tw(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n;)
				if (t(e[r], r, e)) return !0;
			return !1
		}
		Jd.exports = Tw
	});
	var rp = s((YH, tp) => {
		function mw(e, t) {
			return e.has(t)
		}
		tp.exports = mw
	});
	var oa = s((QH, np) => {
		var Ow = Zd(),
			Aw = ep(),
			Sw = rp(),
			bw = 1,
			Rw = 2;

		function ww(e, t, r, n, i, o) {
			var a = r & bw,
				u = e.length,
				c = t.length;
			if (u != c && !(a && c > u)) return !1;
			var f = o.get(e),
				g = o.get(t);
			if (f && g) return f == t && g == e;
			var v = -1,
				h = !0,
				_ = r & Rw ? new Ow : void 0;
			for (o.set(e, t), o.set(t, e); ++v < u;) {
				var S = e[v],
					m = t[v];
				if (n) var D = a ? n(m, S, v, t, e, o) : n(S, m, v, e, t, o);
				if (D !== void 0) {
					if (D) continue;
					h = !1;
					break
				}
				if (_) {
					if (!Aw(t, function(O, b) {
							if (!Sw(_, b) && (S === O || i(S, O, r, n, o))) return _.push(b)
						})) {
						h = !1;
						break
					}
				} else if (!(S === m || i(S, m, r, n, o))) {
					h = !1;
					break
				}
			}
			return o.delete(e), o.delete(t), h
		}
		np.exports = ww
	});
	var op = s(($H, ip) => {
		var Cw = Qe(),
			Nw = Cw.Uint8Array;
		ip.exports = Nw
	});
	var sp = s((ZH, ap) => {
		function qw(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n, i) {
				r[++t] = [i, n]
			}), r
		}
		ap.exports = qw
	});
	var cp = s((JH, up) => {
		function xw(e) {
			var t = -1,
				r = Array(e.size);
			return e.forEach(function(n) {
				r[++t] = n
			}), r
		}
		up.exports = xw
	});
	var vp = s((e5, pp) => {
		var lp = Qt(),
			fp = op(),
			Lw = Fn(),
			Pw = oa(),
			Dw = sp(),
			Mw = cp(),
			Fw = 1,
			Gw = 2,
			Xw = "[object Boolean]",
			Vw = "[object Date]",
			Uw = "[object Error]",
			Ww = "[object Map]",
			Bw = "[object Number]",
			Hw = "[object RegExp]",
			kw = "[object Set]",
			jw = "[object String]",
			Kw = "[object Symbol]",
			zw = "[object ArrayBuffer]",
			Yw = "[object DataView]",
			dp = lp ? lp.prototype : void 0,
			aa = dp ? dp.valueOf : void 0;

		function Qw(e, t, r, n, i, o, a) {
			switch (r) {
				case Yw:
					if (e.byteLength != t.byteLength || e.byteOffset != t.byteOffset) return !1;
					e = e.buffer, t = t.buffer;
				case zw:
					return !(e.byteLength != t.byteLength || !o(new fp(e), new fp(t)));
				case Xw:
				case Vw:
				case Bw:
					return Lw(+e, +t);
				case Uw:
					return e.name == t.name && e.message == t.message;
				case Hw:
				case jw:
					return e == t + "";
				case Ww:
					var u = Dw;
				case kw:
					var c = n & Fw;
					if (u || (u = Mw), e.size != t.size && !c) return !1;
					var f = a.get(e);
					if (f) return f == t;
					n |= Gw, a.set(e, t);
					var g = Pw(u(e), u(t), n, i, o, a);
					return a.delete(e), g;
				case Kw:
					if (aa) return aa.call(e) == aa.call(t)
			}
			return !1
		}
		pp.exports = Qw
	});
	var Un = s((t5, Ep) => {
		function $w(e, t) {
			for (var r = -1, n = t.length, i = e.length; ++r < n;) e[i + r] = t[r];
			return e
		}
		Ep.exports = $w
	});
	var Se = s((r5, hp) => {
		var Zw = Array.isArray;
		hp.exports = Zw
	});
	var sa = s((n5, gp) => {
		var Jw = Un(),
			eC = Se();

		function tC(e, t, r) {
			var n = t(e);
			return eC(e) ? n : Jw(n, r(e))
		}
		gp.exports = tC
	});
	var yp = s((i5, _p) => {
		function rC(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = 0, o = []; ++r < n;) {
				var a = e[r];
				t(a, r, e) && (o[i++] = a)
			}
			return o
		}
		_p.exports = rC
	});
	var ua = s((o5, Ip) => {
		function nC() {
			return []
		}
		Ip.exports = nC
	});
	var ca = s((a5, mp) => {
		var iC = yp(),
			oC = ua(),
			aC = Object.prototype,
			sC = aC.propertyIsEnumerable,
			Tp = Object.getOwnPropertySymbols,
			uC = Tp ? function(e) {
				return e == null ? [] : (e = Object(e), iC(Tp(e), function(t) {
					return sC.call(e, t)
				}))
			} : oC;
		mp.exports = uC
	});
	var Ap = s((s5, Op) => {
		function cC(e, t) {
			for (var r = -1, n = Array(e); ++r < e;) n[r] = t(r);
			return n
		}
		Op.exports = cC
	});
	var bp = s((u5, Sp) => {
		var lC = It(),
			fC = dt(),
			dC = "[object Arguments]";

		function pC(e) {
			return fC(e) && lC(e) == dC
		}
		Sp.exports = pC
	});
	var Vr = s((c5, Cp) => {
		var Rp = bp(),
			vC = dt(),
			wp = Object.prototype,
			EC = wp.hasOwnProperty,
			hC = wp.propertyIsEnumerable,
			gC = Rp(function() {
				return arguments
			}()) ? Rp : function(e) {
				return vC(e) && EC.call(e, "callee") && !hC.call(e, "callee")
			};
		Cp.exports = gC
	});
	var qp = s((l5, Np) => {
		function _C() {
			return !1
		}
		Np.exports = _C
	});
	var Wn = s((Ur, or) => {
		var yC = Qe(),
			IC = qp(),
			Pp = typeof Ur == "object" && Ur && !Ur.nodeType && Ur,
			xp = Pp && typeof or == "object" && or && !or.nodeType && or,
			TC = xp && xp.exports === Pp,
			Lp = TC ? yC.Buffer : void 0,
			mC = Lp ? Lp.isBuffer : void 0,
			OC = mC || IC;
		or.exports = OC
	});
	var Bn = s((f5, Dp) => {
		var AC = 9007199254740991,
			SC = /^(?:0|[1-9]\d*)$/;

		function bC(e, t) {
			var r = typeof e;
			return t = t ?? AC, !!t && (r == "number" || r != "symbol" && SC.test(e)) && e > -1 && e % 1 == 0 && e < t
		}
		Dp.exports = bC
	});
	var Hn = s((d5, Mp) => {
		var RC = 9007199254740991;

		function wC(e) {
			return typeof e == "number" && e > -1 && e % 1 == 0 && e <= RC
		}
		Mp.exports = wC
	});
	var Gp = s((p5, Fp) => {
		var CC = It(),
			NC = Hn(),
			qC = dt(),
			xC = "[object Arguments]",
			LC = "[object Array]",
			PC = "[object Boolean]",
			DC = "[object Date]",
			MC = "[object Error]",
			FC = "[object Function]",
			GC = "[object Map]",
			XC = "[object Number]",
			VC = "[object Object]",
			UC = "[object RegExp]",
			WC = "[object Set]",
			BC = "[object String]",
			HC = "[object WeakMap]",
			kC = "[object ArrayBuffer]",
			jC = "[object DataView]",
			KC = "[object Float32Array]",
			zC = "[object Float64Array]",
			YC = "[object Int8Array]",
			QC = "[object Int16Array]",
			$C = "[object Int32Array]",
			ZC = "[object Uint8Array]",
			JC = "[object Uint8ClampedArray]",
			eN = "[object Uint16Array]",
			tN = "[object Uint32Array]",
			ce = {};
		ce[KC] = ce[zC] = ce[YC] = ce[QC] = ce[$C] = ce[ZC] = ce[JC] = ce[eN] = ce[tN] = !0;
		ce[xC] = ce[LC] = ce[kC] = ce[PC] = ce[jC] = ce[DC] = ce[MC] = ce[FC] = ce[GC] = ce[XC] = ce[VC] = ce[UC] = ce[WC] = ce[BC] = ce[HC] = !1;

		function rN(e) {
			return qC(e) && NC(e.length) && !!ce[CC(e)]
		}
		Fp.exports = rN
	});
	var Vp = s((v5, Xp) => {
		function nN(e) {
			return function(t) {
				return e(t)
			}
		}
		Xp.exports = nN
	});
	var Wp = s((Wr, ar) => {
		var iN = xo(),
			Up = typeof Wr == "object" && Wr && !Wr.nodeType && Wr,
			Br = Up && typeof ar == "object" && ar && !ar.nodeType && ar,
			oN = Br && Br.exports === Up,
			la = oN && iN.process,
			aN = function() {
				try {
					var e = Br && Br.require && Br.require("util").types;
					return e || la && la.binding && la.binding("util")
				} catch {}
			}();
		ar.exports = aN
	});
	var kn = s((E5, kp) => {
		var sN = Gp(),
			uN = Vp(),
			Bp = Wp(),
			Hp = Bp && Bp.isTypedArray,
			cN = Hp ? uN(Hp) : sN;
		kp.exports = cN
	});
	var fa = s((h5, jp) => {
		var lN = Ap(),
			fN = Vr(),
			dN = Se(),
			pN = Wn(),
			vN = Bn(),
			EN = kn(),
			hN = Object.prototype,
			gN = hN.hasOwnProperty;

		function _N(e, t) {
			var r = dN(e),
				n = !r && fN(e),
				i = !r && !n && pN(e),
				o = !r && !n && !i && EN(e),
				a = r || n || i || o,
				u = a ? lN(e.length, String) : [],
				c = u.length;
			for (var f in e)(t || gN.call(e, f)) && !(a && (f == "length" || i && (f == "offset" || f == "parent") || o && (f == "buffer" || f == "byteLength" || f == "byteOffset") || vN(f, c))) && u.push(f);
			return u
		}
		jp.exports = _N
	});
	var jn = s((g5, Kp) => {
		var yN = Object.prototype;

		function IN(e) {
			var t = e && e.constructor,
				r = typeof t == "function" && t.prototype || yN;
			return e === r
		}
		Kp.exports = IN
	});
	var Yp = s((_5, zp) => {
		var TN = Lo(),
			mN = TN(Object.keys, Object);
		zp.exports = mN
	});
	var Kn = s((y5, Qp) => {
		var ON = jn(),
			AN = Yp(),
			SN = Object.prototype,
			bN = SN.hasOwnProperty;

		function RN(e) {
			if (!ON(e)) return AN(e);
			var t = [];
			for (var r in Object(e)) bN.call(e, r) && r != "constructor" && t.push(r);
			return t
		}
		Qp.exports = RN
	});
	var Dt = s((I5, $p) => {
		var wN = ta(),
			CN = Hn();

		function NN(e) {
			return e != null && CN(e.length) && !wN(e)
		}
		$p.exports = NN
	});
	var Hr = s((T5, Zp) => {
		var qN = fa(),
			xN = Kn(),
			LN = Dt();

		function PN(e) {
			return LN(e) ? qN(e) : xN(e)
		}
		Zp.exports = PN
	});
	var ev = s((m5, Jp) => {
		var DN = sa(),
			MN = ca(),
			FN = Hr();

		function GN(e) {
			return DN(e, FN, MN)
		}
		Jp.exports = GN
	});
	var nv = s((O5, rv) => {
		var tv = ev(),
			XN = 1,
			VN = Object.prototype,
			UN = VN.hasOwnProperty;

		function WN(e, t, r, n, i, o) {
			var a = r & XN,
				u = tv(e),
				c = u.length,
				f = tv(t),
				g = f.length;
			if (c != g && !a) return !1;
			for (var v = c; v--;) {
				var h = u[v];
				if (!(a ? h in t : UN.call(t, h))) return !1
			}
			var _ = o.get(e),
				S = o.get(t);
			if (_ && S) return _ == t && S == e;
			var m = !0;
			o.set(e, t), o.set(t, e);
			for (var D = a; ++v < c;) {
				h = u[v];
				var O = e[h],
					b = t[h];
				if (n) var I = a ? n(b, O, h, t, e, o) : n(O, b, h, e, t, o);
				if (!(I === void 0 ? O === b || i(O, b, r, n, o) : I)) {
					m = !1;
					break
				}
				D || (D = h == "constructor")
			}
			if (m && !D) {
				var N = e.constructor,
					q = t.constructor;
				N != q && "constructor" in e && "constructor" in t && !(typeof N == "function" && N instanceof N && typeof q == "function" && q instanceof q) && (m = !1)
			}
			return o.delete(e), o.delete(t), m
		}
		rv.exports = WN
	});
	var ov = s((A5, iv) => {
		var BN = Tt(),
			HN = Qe(),
			kN = BN(HN, "DataView");
		iv.exports = kN
	});
	var sv = s((S5, av) => {
		var jN = Tt(),
			KN = Qe(),
			zN = jN(KN, "Promise");
		av.exports = zN
	});
	var cv = s((b5, uv) => {
		var YN = Tt(),
			QN = Qe(),
			$N = YN(QN, "Set");
		uv.exports = $N
	});
	var da = s((R5, lv) => {
		var ZN = Tt(),
			JN = Qe(),
			eq = ZN(JN, "WeakMap");
		lv.exports = eq
	});
	var zn = s((w5, gv) => {
		var pa = ov(),
			va = Gn(),
			Ea = sv(),
			ha = cv(),
			ga = da(),
			hv = It(),
			sr = na(),
			fv = "[object Map]",
			tq = "[object Object]",
			dv = "[object Promise]",
			pv = "[object Set]",
			vv = "[object WeakMap]",
			Ev = "[object DataView]",
			rq = sr(pa),
			nq = sr(va),
			iq = sr(Ea),
			oq = sr(ha),
			aq = sr(ga),
			Mt = hv;
		(pa && Mt(new pa(new ArrayBuffer(1))) != Ev || va && Mt(new va) != fv || Ea && Mt(Ea.resolve()) != dv || ha && Mt(new ha) != pv || ga && Mt(new ga) != vv) && (Mt = function(e) {
			var t = hv(e),
				r = t == tq ? e.constructor : void 0,
				n = r ? sr(r) : "";
			if (n) switch (n) {
				case rq:
					return Ev;
				case nq:
					return fv;
				case iq:
					return dv;
				case oq:
					return pv;
				case aq:
					return vv
			}
			return t
		});
		gv.exports = Mt
	});
	var Sv = s((C5, Av) => {
		var _a = ia(),
			sq = oa(),
			uq = vp(),
			cq = nv(),
			_v = zn(),
			yv = Se(),
			Iv = Wn(),
			lq = kn(),
			fq = 1,
			Tv = "[object Arguments]",
			mv = "[object Array]",
			Yn = "[object Object]",
			dq = Object.prototype,
			Ov = dq.hasOwnProperty;

		function pq(e, t, r, n, i, o) {
			var a = yv(e),
				u = yv(t),
				c = a ? mv : _v(e),
				f = u ? mv : _v(t);
			c = c == Tv ? Yn : c, f = f == Tv ? Yn : f;
			var g = c == Yn,
				v = f == Yn,
				h = c == f;
			if (h && Iv(e)) {
				if (!Iv(t)) return !1;
				a = !0, g = !1
			}
			if (h && !g) return o || (o = new _a), a || lq(e) ? sq(e, t, r, n, i, o) : uq(e, t, c, r, n, i, o);
			if (!(r & fq)) {
				var _ = g && Ov.call(e, "__wrapped__"),
					S = v && Ov.call(t, "__wrapped__");
				if (_ || S) {
					var m = _ ? e.value() : e,
						D = S ? t.value() : t;
					return o || (o = new _a), i(m, D, r, n, o)
				}
			}
			return h ? (o || (o = new _a), cq(e, t, r, n, i, o)) : !1
		}
		Av.exports = pq
	});
	var ya = s((N5, wv) => {
		var vq = Sv(),
			bv = dt();

		function Rv(e, t, r, n, i) {
			return e === t ? !0 : e == null || t == null || !bv(e) && !bv(t) ? e !== e && t !== t : vq(e, t, r, n, Rv, i)
		}
		wv.exports = Rv
	});
	var Nv = s((q5, Cv) => {
		var Eq = ia(),
			hq = ya(),
			gq = 1,
			_q = 2;

		function yq(e, t, r, n) {
			var i = r.length,
				o = i,
				a = !n;
			if (e == null) return !o;
			for (e = Object(e); i--;) {
				var u = r[i];
				if (a && u[2] ? u[1] !== e[u[0]] : !(u[0] in e)) return !1
			}
			for (; ++i < o;) {
				u = r[i];
				var c = u[0],
					f = e[c],
					g = u[1];
				if (a && u[2]) {
					if (f === void 0 && !(c in e)) return !1
				} else {
					var v = new Eq;
					if (n) var h = n(f, g, c, e, t, v);
					if (!(h === void 0 ? hq(g, f, gq | _q, n, v) : h)) return !1
				}
			}
			return !0
		}
		Cv.exports = yq
	});
	var Ia = s((x5, qv) => {
		var Iq = at();

		function Tq(e) {
			return e === e && !Iq(e)
		}
		qv.exports = Tq
	});
	var Lv = s((L5, xv) => {
		var mq = Ia(),
			Oq = Hr();

		function Aq(e) {
			for (var t = Oq(e), r = t.length; r--;) {
				var n = t[r],
					i = e[n];
				t[r] = [n, i, mq(i)]
			}
			return t
		}
		xv.exports = Aq
	});
	var Ta = s((P5, Pv) => {
		function Sq(e, t) {
			return function(r) {
				return r == null ? !1 : r[e] === t && (t !== void 0 || e in Object(r))
			}
		}
		Pv.exports = Sq
	});
	var Mv = s((D5, Dv) => {
		var bq = Nv(),
			Rq = Lv(),
			wq = Ta();

		function Cq(e) {
			var t = Rq(e);
			return t.length == 1 && t[0][2] ? wq(t[0][0], t[0][1]) : function(r) {
				return r === e || bq(r, e, t)
			}
		}
		Dv.exports = Cq
	});
	var kr = s((M5, Fv) => {
		var Nq = It(),
			qq = dt(),
			xq = "[object Symbol]";

		function Lq(e) {
			return typeof e == "symbol" || qq(e) && Nq(e) == xq
		}
		Fv.exports = Lq
	});
	var Qn = s((F5, Gv) => {
		var Pq = Se(),
			Dq = kr(),
			Mq = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
			Fq = /^\w*$/;

		function Gq(e, t) {
			if (Pq(e)) return !1;
			var r = typeof e;
			return r == "number" || r == "symbol" || r == "boolean" || e == null || Dq(e) ? !0 : Fq.test(e) || !Mq.test(e) || t != null && e in Object(t)
		}
		Gv.exports = Gq
	});
	var Uv = s((G5, Vv) => {
		var Xv = Xn(),
			Xq = "Expected a function";

		function ma(e, t) {
			if (typeof e != "function" || t != null && typeof t != "function") throw new TypeError(Xq);
			var r = function() {
				var n = arguments,
					i = t ? t.apply(this, n) : n[0],
					o = r.cache;
				if (o.has(i)) return o.get(i);
				var a = e.apply(this, n);
				return r.cache = o.set(i, a) || o, a
			};
			return r.cache = new(ma.Cache || Xv), r
		}
		ma.Cache = Xv;
		Vv.exports = ma
	});
	var Bv = s((X5, Wv) => {
		var Vq = Uv(),
			Uq = 500;

		function Wq(e) {
			var t = Vq(e, function(n) {
					return r.size === Uq && r.clear(), n
				}),
				r = t.cache;
			return t
		}
		Wv.exports = Wq
	});
	var kv = s((V5, Hv) => {
		var Bq = Bv(),
			Hq = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,
			kq = /\\(\\)?/g,
			jq = Bq(function(e) {
				var t = [];
				return e.charCodeAt(0) === 46 && t.push(""), e.replace(Hq, function(r, n, i, o) {
					t.push(i ? o.replace(kq, "$1") : n || r)
				}), t
			});
		Hv.exports = jq
	});
	var Oa = s((U5, jv) => {
		function Kq(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length, i = Array(n); ++r < n;) i[r] = t(e[r], r, e);
			return i
		}
		jv.exports = Kq
	});
	var Zv = s((W5, $v) => {
		var Kv = Qt(),
			zq = Oa(),
			Yq = Se(),
			Qq = kr(),
			$q = 1 / 0,
			zv = Kv ? Kv.prototype : void 0,
			Yv = zv ? zv.toString : void 0;

		function Qv(e) {
			if (typeof e == "string") return e;
			if (Yq(e)) return zq(e, Qv) + "";
			if (Qq(e)) return Yv ? Yv.call(e) : "";
			var t = e + "";
			return t == "0" && 1 / e == -$q ? "-0" : t
		}
		$v.exports = Qv
	});
	var eE = s((B5, Jv) => {
		var Zq = Zv();

		function Jq(e) {
			return e == null ? "" : Zq(e)
		}
		Jv.exports = Jq
	});
	var jr = s((H5, tE) => {
		var ex = Se(),
			tx = Qn(),
			rx = kv(),
			nx = eE();

		function ix(e, t) {
			return ex(e) ? e : tx(e, t) ? [e] : rx(nx(e))
		}
		tE.exports = ix
	});
	var ur = s((k5, rE) => {
		var ox = kr(),
			ax = 1 / 0;

		function sx(e) {
			if (typeof e == "string" || ox(e)) return e;
			var t = e + "";
			return t == "0" && 1 / e == -ax ? "-0" : t
		}
		rE.exports = sx
	});
	var $n = s((j5, nE) => {
		var ux = jr(),
			cx = ur();

		function lx(e, t) {
			t = ux(t, e);
			for (var r = 0, n = t.length; e != null && r < n;) e = e[cx(t[r++])];
			return r && r == n ? e : void 0
		}
		nE.exports = lx
	});
	var Zn = s((K5, iE) => {
		var fx = $n();

		function dx(e, t, r) {
			var n = e == null ? void 0 : fx(e, t);
			return n === void 0 ? r : n
		}
		iE.exports = dx
	});
	var aE = s((z5, oE) => {
		function px(e, t) {
			return e != null && t in Object(e)
		}
		oE.exports = px
	});
	var uE = s((Y5, sE) => {
		var vx = jr(),
			Ex = Vr(),
			hx = Se(),
			gx = Bn(),
			_x = Hn(),
			yx = ur();

		function Ix(e, t, r) {
			t = vx(t, e);
			for (var n = -1, i = t.length, o = !1; ++n < i;) {
				var a = yx(t[n]);
				if (!(o = e != null && r(e, a))) break;
				e = e[a]
			}
			return o || ++n != i ? o : (i = e == null ? 0 : e.length, !!i && _x(i) && gx(a, i) && (hx(e) || Ex(e)))
		}
		sE.exports = Ix
	});
	var lE = s((Q5, cE) => {
		var Tx = aE(),
			mx = uE();

		function Ox(e, t) {
			return e != null && mx(e, t, Tx)
		}
		cE.exports = Ox
	});
	var dE = s(($5, fE) => {
		var Ax = ya(),
			Sx = Zn(),
			bx = lE(),
			Rx = Qn(),
			wx = Ia(),
			Cx = Ta(),
			Nx = ur(),
			qx = 1,
			xx = 2;

		function Lx(e, t) {
			return Rx(e) && wx(t) ? Cx(Nx(e), t) : function(r) {
				var n = Sx(r, e);
				return n === void 0 && n === t ? bx(r, e) : Ax(t, n, qx | xx)
			}
		}
		fE.exports = Lx
	});
	var Jn = s((Z5, pE) => {
		function Px(e) {
			return e
		}
		pE.exports = Px
	});
	var Aa = s((J5, vE) => {
		function Dx(e) {
			return function(t) {
				return t?.[e]
			}
		}
		vE.exports = Dx
	});
	var hE = s((ek, EE) => {
		var Mx = $n();

		function Fx(e) {
			return function(t) {
				return Mx(t, e)
			}
		}
		EE.exports = Fx
	});
	var _E = s((tk, gE) => {
		var Gx = Aa(),
			Xx = hE(),
			Vx = Qn(),
			Ux = ur();

		function Wx(e) {
			return Vx(e) ? Gx(Ux(e)) : Xx(e)
		}
		gE.exports = Wx
	});
	var mt = s((rk, yE) => {
		var Bx = Mv(),
			Hx = dE(),
			kx = Jn(),
			jx = Se(),
			Kx = _E();

		function zx(e) {
			return typeof e == "function" ? e : e == null ? kx : typeof e == "object" ? jx(e) ? Hx(e[0], e[1]) : Bx(e) : Kx(e)
		}
		yE.exports = zx
	});
	var Sa = s((nk, IE) => {
		var Yx = mt(),
			Qx = Dt(),
			$x = Hr();

		function Zx(e) {
			return function(t, r, n) {
				var i = Object(t);
				if (!Qx(t)) {
					var o = Yx(r, 3);
					t = $x(t), r = function(u) {
						return o(i[u], u, i)
					}
				}
				var a = e(t, r, n);
				return a > -1 ? i[o ? t[a] : a] : void 0
			}
		}
		IE.exports = Zx
	});
	var ba = s((ik, TE) => {
		function Jx(e, t, r, n) {
			for (var i = e.length, o = r + (n ? 1 : -1); n ? o-- : ++o < i;)
				if (t(e[o], o, e)) return o;
			return -1
		}
		TE.exports = Jx
	});
	var OE = s((ok, mE) => {
		var eL = /\s/;

		function tL(e) {
			for (var t = e.length; t-- && eL.test(e.charAt(t)););
			return t
		}
		mE.exports = tL
	});
	var SE = s((ak, AE) => {
		var rL = OE(),
			nL = /^\s+/;

		function iL(e) {
			return e && e.slice(0, rL(e) + 1).replace(nL, "")
		}
		AE.exports = iL
	});
	var ei = s((sk, wE) => {
		var oL = SE(),
			bE = at(),
			aL = kr(),
			RE = 0 / 0,
			sL = /^[-+]0x[0-9a-f]+$/i,
			uL = /^0b[01]+$/i,
			cL = /^0o[0-7]+$/i,
			lL = parseInt;

		function fL(e) {
			if (typeof e == "number") return e;
			if (aL(e)) return RE;
			if (bE(e)) {
				var t = typeof e.valueOf == "function" ? e.valueOf() : e;
				e = bE(t) ? t + "" : t
			}
			if (typeof e != "string") return e === 0 ? e : +e;
			e = oL(e);
			var r = uL.test(e);
			return r || cL.test(e) ? lL(e.slice(2), r ? 2 : 8) : sL.test(e) ? RE : +e
		}
		wE.exports = fL
	});
	var qE = s((uk, NE) => {
		var dL = ei(),
			CE = 1 / 0,
			pL = 17976931348623157e292;

		function vL(e) {
			if (!e) return e === 0 ? e : 0;
			if (e = dL(e), e === CE || e === -CE) {
				var t = e < 0 ? -1 : 1;
				return t * pL
			}
			return e === e ? e : 0
		}
		NE.exports = vL
	});
	var Ra = s((ck, xE) => {
		var EL = qE();

		function hL(e) {
			var t = EL(e),
				r = t % 1;
			return t === t ? r ? t - r : t : 0
		}
		xE.exports = hL
	});
	var PE = s((lk, LE) => {
		var gL = ba(),
			_L = mt(),
			yL = Ra(),
			IL = Math.max;

		function TL(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = r == null ? 0 : yL(r);
			return i < 0 && (i = IL(n + i, 0)), gL(e, _L(t, 3), i)
		}
		LE.exports = TL
	});
	var wa = s((fk, DE) => {
		var mL = Sa(),
			OL = PE(),
			AL = mL(OL);
		DE.exports = AL
	});
	var ri = s(xe => {
		"use strict";
		var SL = nt().default;
		Object.defineProperty(xe, "__esModule", {
			value: !0
		});
		xe.withBrowser = xe.TRANSFORM_STYLE_PREFIXED = xe.TRANSFORM_PREFIXED = xe.IS_BROWSER_ENV = xe.FLEX_PREFIXED = xe.ELEMENT_MATCHES = void 0;
		var bL = SL(wa()),
			FE = typeof window < "u";
		xe.IS_BROWSER_ENV = FE;
		var ti = (e, t) => FE ? e() : t;
		xe.withBrowser = ti;
		var RL = ti(() => (0, bL.default)(["matches", "matchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector", "webkitMatchesSelector"], e => e in Element.prototype));
		xe.ELEMENT_MATCHES = RL;
		var wL = ti(() => {
			let e = document.createElement("i"),
				t = ["flex", "-webkit-flex", "-ms-flexbox", "-moz-box", "-webkit-box"],
				r = "";
			try {
				let {
					length: n
				} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i];
					if (e.style.display = o, e.style.display === o) return o
				}
				return r
			} catch {
				return r
			}
		}, "flex");
		xe.FLEX_PREFIXED = wL;
		var GE = ti(() => {
			let e = document.createElement("i");
			if (e.style.transform == null) {
				let t = ["Webkit", "Moz", "ms"],
					r = "Transform",
					{
						length: n
					} = t;
				for (let i = 0; i < n; i++) {
					let o = t[i] + r;
					if (e.style[o] !== void 0) return o
				}
			}
			return "transform"
		}, "transform");
		xe.TRANSFORM_PREFIXED = GE;
		var ME = GE.split("transform")[0],
			CL = ME ? ME + "TransformStyle" : "transformStyle";
		xe.TRANSFORM_STYLE_PREFIXED = CL
	});
	var Ca = s((pk, BE) => {
		var NL = 4,
			qL = .001,
			xL = 1e-7,
			LL = 10,
			Kr = 11,
			ni = 1 / (Kr - 1),
			PL = typeof Float32Array == "function";

		function XE(e, t) {
			return 1 - 3 * t + 3 * e
		}

		function VE(e, t) {
			return 3 * t - 6 * e
		}

		function UE(e) {
			return 3 * e
		}

		function ii(e, t, r) {
			return ((XE(t, r) * e + VE(t, r)) * e + UE(t)) * e
		}

		function WE(e, t, r) {
			return 3 * XE(t, r) * e * e + 2 * VE(t, r) * e + UE(t)
		}

		function DL(e, t, r, n, i) {
			var o, a, u = 0;
			do a = t + (r - t) / 2, o = ii(a, n, i) - e, o > 0 ? r = a : t = a; while (Math.abs(o) > xL && ++u < LL);
			return a
		}

		function ML(e, t, r, n) {
			for (var i = 0; i < NL; ++i) {
				var o = WE(t, r, n);
				if (o === 0) return t;
				var a = ii(t, r, n) - e;
				t -= a / o
			}
			return t
		}
		BE.exports = function(t, r, n, i) {
			if (!(0 <= t && t <= 1 && 0 <= n && n <= 1)) throw new Error("bezier x values must be in [0, 1] range");
			var o = PL ? new Float32Array(Kr) : new Array(Kr);
			if (t !== r || n !== i)
				for (var a = 0; a < Kr; ++a) o[a] = ii(a * ni, t, n);

			function u(c) {
				for (var f = 0, g = 1, v = Kr - 1; g !== v && o[g] <= c; ++g) f += ni;
				--g;
				var h = (c - o[g]) / (o[g + 1] - o[g]),
					_ = f + h * ni,
					S = WE(_, t, n);
				return S >= qL ? ML(c, _, t, n) : S === 0 ? _ : DL(c, f, f + ni, t, n)
			}
			return function(f) {
				return t === r && n === i ? f : f === 0 ? 0 : f === 1 ? 1 : ii(u(f), r, i)
			}
		}
	});
	var Na = s(Z => {
		"use strict";
		var FL = nt().default;
		Object.defineProperty(Z, "__esModule", {
			value: !0
		});
		Z.bounce = yP;
		Z.bouncePast = IP;
		Z.easeOut = Z.easeInOut = Z.easeIn = Z.ease = void 0;
		Z.inBack = lP;
		Z.inCirc = aP;
		Z.inCubic = kL;
		Z.inElastic = pP;
		Z.inExpo = nP;
		Z.inOutBack = dP;
		Z.inOutCirc = uP;
		Z.inOutCubic = KL;
		Z.inOutElastic = EP;
		Z.inOutExpo = oP;
		Z.inOutQuad = HL;
		Z.inOutQuart = QL;
		Z.inOutQuint = JL;
		Z.inOutSine = rP;
		Z.inQuad = WL;
		Z.inQuart = zL;
		Z.inQuint = $L;
		Z.inSine = eP;
		Z.outBack = fP;
		Z.outBounce = cP;
		Z.outCirc = sP;
		Z.outCubic = jL;
		Z.outElastic = vP;
		Z.outExpo = iP;
		Z.outQuad = BL;
		Z.outQuart = YL;
		Z.outQuint = ZL;
		Z.outSine = tP;
		Z.swingFrom = gP;
		Z.swingFromTo = hP;
		Z.swingTo = _P;
		var oi = FL(Ca()),
			vt = 1.70158,
			GL = (0, oi.default)(.25, .1, .25, 1);
		Z.ease = GL;
		var XL = (0, oi.default)(.42, 0, 1, 1);
		Z.easeIn = XL;
		var VL = (0, oi.default)(0, 0, .58, 1);
		Z.easeOut = VL;
		var UL = (0, oi.default)(.42, 0, .58, 1);
		Z.easeInOut = UL;

		function WL(e) {
			return Math.pow(e, 2)
		}

		function BL(e) {
			return -(Math.pow(e - 1, 2) - 1)
		}

		function HL(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 2) : -.5 * ((e -= 2) * e - 2)
		}

		function kL(e) {
			return Math.pow(e, 3)
		}

		function jL(e) {
			return Math.pow(e - 1, 3) + 1
		}

		function KL(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 3) : .5 * (Math.pow(e - 2, 3) + 2)
		}

		function zL(e) {
			return Math.pow(e, 4)
		}

		function YL(e) {
			return -(Math.pow(e - 1, 4) - 1)
		}

		function QL(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 4) : -.5 * ((e -= 2) * Math.pow(e, 3) - 2)
		}

		function $L(e) {
			return Math.pow(e, 5)
		}

		function ZL(e) {
			return Math.pow(e - 1, 5) + 1
		}

		function JL(e) {
			return (e /= .5) < 1 ? .5 * Math.pow(e, 5) : .5 * (Math.pow(e - 2, 5) + 2)
		}

		function eP(e) {
			return -Math.cos(e * (Math.PI / 2)) + 1
		}

		function tP(e) {
			return Math.sin(e * (Math.PI / 2))
		}

		function rP(e) {
			return -.5 * (Math.cos(Math.PI * e) - 1)
		}

		function nP(e) {
			return e === 0 ? 0 : Math.pow(2, 10 * (e - 1))
		}

		function iP(e) {
			return e === 1 ? 1 : -Math.pow(2, -10 * e) + 1
		}

		function oP(e) {
			return e === 0 ? 0 : e === 1 ? 1 : (e /= .5) < 1 ? .5 * Math.pow(2, 10 * (e - 1)) : .5 * (-Math.pow(2, -10 * --e) + 2)
		}

		function aP(e) {
			return -(Math.sqrt(1 - e * e) - 1)
		}

		function sP(e) {
			return Math.sqrt(1 - Math.pow(e - 1, 2))
		}

		function uP(e) {
			return (e /= .5) < 1 ? -.5 * (Math.sqrt(1 - e * e) - 1) : .5 * (Math.sqrt(1 - (e -= 2) * e) + 1)
		}

		function cP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function lP(e) {
			let t = vt;
			return e * e * ((t + 1) * e - t)
		}

		function fP(e) {
			let t = vt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function dP(e) {
			let t = vt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function pP(e) {
			let t = vt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), -(n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)))
		}

		function vP(e) {
			let t = vt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : e === 1 ? 1 : (r || (r = .3), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), n * Math.pow(2, -10 * e) * Math.sin((e - t) * (2 * Math.PI) / r) + 1)
		}

		function EP(e) {
			let t = vt,
				r = 0,
				n = 1;
			return e === 0 ? 0 : (e /= 1 / 2) === 2 ? 1 : (r || (r = .3 * 1.5), n < 1 ? (n = 1, t = r / 4) : t = r / (2 * Math.PI) * Math.asin(1 / n), e < 1 ? -.5 * (n * Math.pow(2, 10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r)) : n * Math.pow(2, -10 * (e -= 1)) * Math.sin((e - t) * (2 * Math.PI) / r) * .5 + 1)
		}

		function hP(e) {
			let t = vt;
			return (e /= .5) < 1 ? .5 * (e * e * (((t *= 1.525) + 1) * e - t)) : .5 * ((e -= 2) * e * (((t *= 1.525) + 1) * e + t) + 2)
		}

		function gP(e) {
			let t = vt;
			return e * e * ((t + 1) * e - t)
		}

		function _P(e) {
			let t = vt;
			return (e -= 1) * e * ((t + 1) * e + t) + 1
		}

		function yP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 7.5625 * (e -= 1.5 / 2.75) * e + .75 : e < 2.5 / 2.75 ? 7.5625 * (e -= 2.25 / 2.75) * e + .9375 : 7.5625 * (e -= 2.625 / 2.75) * e + .984375
		}

		function IP(e) {
			return e < 1 / 2.75 ? 7.5625 * e * e : e < 2 / 2.75 ? 2 - (7.5625 * (e -= 1.5 / 2.75) * e + .75) : e < 2.5 / 2.75 ? 2 - (7.5625 * (e -= 2.25 / 2.75) * e + .9375) : 2 - (7.5625 * (e -= 2.625 / 2.75) * e + .984375)
		}
	});
	var xa = s(zr => {
		"use strict";
		var TP = nt().default,
			mP = jt().default;
		Object.defineProperty(zr, "__esModule", {
			value: !0
		});
		zr.applyEasing = SP;
		zr.createBezierEasing = AP;
		zr.optimizeFloat = qa;
		var HE = mP(Na()),
			OP = TP(Ca());

		function qa(e, t = 5, r = 10) {
			let n = Math.pow(r, t),
				i = Number(Math.round(e * n) / n);
			return Math.abs(i) > 1e-4 ? i : 0
		}

		function AP(e) {
			return (0, OP.default)(...e)
		}

		function SP(e, t, r) {
			return t === 0 ? 0 : t === 1 ? 1 : qa(r ? t > 0 ? r(t) : t : t > 0 && e && HE[e] ? HE[e](t) : t)
		}
	});
	var zE = s(cr => {
		"use strict";
		Object.defineProperty(cr, "__esModule", {
			value: !0
		});
		cr.createElementState = KE;
		cr.ixElements = void 0;
		cr.mergeActionState = La;
		var ai = er(),
			jE = Ge(),
			{
				HTML_ELEMENT: hk,
				PLAIN_OBJECT: bP,
				ABSTRACT_NODE: gk,
				CONFIG_X_VALUE: RP,
				CONFIG_Y_VALUE: wP,
				CONFIG_Z_VALUE: CP,
				CONFIG_VALUE: NP,
				CONFIG_X_UNIT: qP,
				CONFIG_Y_UNIT: xP,
				CONFIG_Z_UNIT: LP,
				CONFIG_UNIT: PP
			} = jE.IX2EngineConstants,
			{
				IX2_SESSION_STOPPED: DP,
				IX2_INSTANCE_ADDED: MP,
				IX2_ELEMENT_STATE_CHANGED: FP
			} = jE.IX2EngineActionTypes,
			kE = {},
			GP = "refState",
			XP = (e = kE, t = {}) => {
				switch (t.type) {
					case DP:
						return kE;
					case MP: {
						let {
							elementId: r,
							element: n,
							origin: i,
							actionItem: o,
							refType: a
						} = t.payload, {
							actionTypeId: u
						} = o, c = e;
						return (0, ai.getIn)(c, [r, n]) !== n && (c = KE(c, n, a, r, o)), La(c, r, u, i, o)
					}
					case FP: {
						let {
							elementId: r,
							actionTypeId: n,
							current: i,
							actionItem: o
						} = t.payload;
						return La(e, r, n, i, o)
					}
					default:
						return e
				}
			};
		cr.ixElements = XP;

		function KE(e, t, r, n, i) {
			let o = r === bP ? (0, ai.getIn)(i, ["config", "target", "objectId"]) : null;
			return (0, ai.mergeIn)(e, [n], {
				id: n,
				ref: t,
				refId: o,
				refType: r
			})
		}

		function La(e, t, r, n, i) {
			let o = UP(i),
				a = [t, GP, r];
			return (0, ai.mergeIn)(e, a, n, o)
		}
		var VP = [
			[RP, qP],
			[wP, xP],
			[CP, LP],
			[NP, PP]
		];

		function UP(e) {
			let {
				config: t
			} = e;
			return VP.reduce((r, n) => {
				let i = n[0],
					o = n[1],
					a = t[i],
					u = t[o];
				return a != null && u != null && (r[o] = u), r
			}, {})
		}
	});
	var YE = s(be => {
		"use strict";
		Object.defineProperty(be, "__esModule", {
			value: !0
		});
		be.renderPlugin = be.getPluginOrigin = be.getPluginDuration = be.getPluginDestination = be.getPluginConfig = be.createPluginInstance = be.clearPlugin = void 0;
		var WP = e => e.value;
		be.getPluginConfig = WP;
		var BP = (e, t) => {
			if (t.config.duration !== "auto") return null;
			let r = parseFloat(e.getAttribute("data-duration"));
			return r > 0 ? r * 1e3 : parseFloat(e.getAttribute("data-default-duration")) * 1e3
		};
		be.getPluginDuration = BP;
		var HP = e => e || {
			value: 0
		};
		be.getPluginOrigin = HP;
		var kP = e => ({
			value: e.value
		});
		be.getPluginDestination = kP;
		var jP = e => {
			let t = window.Webflow.require("lottie").createInstance(e);
			return t.stop(), t.setSubframe(!0), t
		};
		be.createPluginInstance = jP;
		var KP = (e, t, r) => {
			if (!e) return;
			let n = t[r.actionTypeId].value / 100;
			e.goToFrame(e.frames * n)
		};
		be.renderPlugin = KP;
		var zP = e => {
			window.Webflow.require("lottie").createInstance(e).stop()
		};
		be.clearPlugin = zP
	});
	var Pa = s(Oe => {
		"use strict";
		Object.defineProperty(Oe, "__esModule", {
			value: !0
		});
		Oe.getPluginOrigin = Oe.getPluginDuration = Oe.getPluginDestination = Oe.getPluginConfig = Oe.createPluginInstance = Oe.clearPlugin = void 0;
		Oe.isPluginType = $P;
		Oe.renderPlugin = void 0;
		var Ft = YE(),
			QE = Ge(),
			YP = ri(),
			QP = {
				[QE.ActionTypeConsts.PLUGIN_LOTTIE]: {
					getConfig: Ft.getPluginConfig,
					getOrigin: Ft.getPluginOrigin,
					getDuration: Ft.getPluginDuration,
					getDestination: Ft.getPluginDestination,
					createInstance: Ft.createPluginInstance,
					render: Ft.renderPlugin,
					clear: Ft.clearPlugin
				}
			};

		function $P(e) {
			return e === QE.ActionTypeConsts.PLUGIN_LOTTIE
		}
		var Gt = e => t => {
				if (!YP.IS_BROWSER_ENV) return () => null;
				let r = QP[t];
				if (!r) throw new Error(`IX2 no plugin configured for: ${t}`);
				let n = r[e];
				if (!n) throw new Error(`IX2 invalid plugin method: ${e}`);
				return n
			},
			ZP = Gt("getConfig");
		Oe.getPluginConfig = ZP;
		var JP = Gt("getOrigin");
		Oe.getPluginOrigin = JP;
		var eD = Gt("getDuration");
		Oe.getPluginDuration = eD;
		var tD = Gt("getDestination");
		Oe.getPluginDestination = tD;
		var rD = Gt("createInstance");
		Oe.createPluginInstance = rD;
		var nD = Gt("render");
		Oe.renderPlugin = nD;
		var iD = Gt("clear");
		Oe.clearPlugin = iD
	});
	var ZE = s((Tk, $E) => {
		function oD(e, t) {
			return e == null || e !== e ? t : e
		}
		$E.exports = oD
	});
	var eh = s((mk, JE) => {
		function aD(e, t, r, n) {
			var i = -1,
				o = e == null ? 0 : e.length;
			for (n && o && (r = e[++i]); ++i < o;) r = t(r, e[i], i, e);
			return r
		}
		JE.exports = aD
	});
	var rh = s((Ok, th) => {
		function sD(e) {
			return function(t, r, n) {
				for (var i = -1, o = Object(t), a = n(t), u = a.length; u--;) {
					var c = a[e ? u : ++i];
					if (r(o[c], c, o) === !1) break
				}
				return t
			}
		}
		th.exports = sD
	});
	var ih = s((Ak, nh) => {
		var uD = rh(),
			cD = uD();
		nh.exports = cD
	});
	var Da = s((Sk, oh) => {
		var lD = ih(),
			fD = Hr();

		function dD(e, t) {
			return e && lD(e, t, fD)
		}
		oh.exports = dD
	});
	var sh = s((bk, ah) => {
		var pD = Dt();

		function vD(e, t) {
			return function(r, n) {
				if (r == null) return r;
				if (!pD(r)) return e(r, n);
				for (var i = r.length, o = t ? i : -1, a = Object(r);
					(t ? o-- : ++o < i) && n(a[o], o, a) !== !1;);
				return r
			}
		}
		ah.exports = vD
	});
	var Ma = s((Rk, uh) => {
		var ED = Da(),
			hD = sh(),
			gD = hD(ED);
		uh.exports = gD
	});
	var lh = s((wk, ch) => {
		function _D(e, t, r, n, i) {
			return i(e, function(o, a, u) {
				r = n ? (n = !1, o) : t(r, o, a, u)
			}), r
		}
		ch.exports = _D
	});
	var dh = s((Ck, fh) => {
		var yD = eh(),
			ID = Ma(),
			TD = mt(),
			mD = lh(),
			OD = Se();

		function AD(e, t, r) {
			var n = OD(e) ? yD : mD,
				i = arguments.length < 3;
			return n(e, TD(t, 4), r, i, ID)
		}
		fh.exports = AD
	});
	var vh = s((Nk, ph) => {
		var SD = ba(),
			bD = mt(),
			RD = Ra(),
			wD = Math.max,
			CD = Math.min;

		function ND(e, t, r) {
			var n = e == null ? 0 : e.length;
			if (!n) return -1;
			var i = n - 1;
			return r !== void 0 && (i = RD(r), i = r < 0 ? wD(n + i, 0) : CD(i, n - 1)), SD(e, bD(t, 3), i, !0)
		}
		ph.exports = ND
	});
	var hh = s((qk, Eh) => {
		var qD = Sa(),
			xD = vh(),
			LD = qD(xD);
		Eh.exports = LD
	});
	var _h = s(si => {
		"use strict";
		Object.defineProperty(si, "__esModule", {
			value: !0
		});
		si.default = void 0;
		var PD = Object.prototype.hasOwnProperty;

		function gh(e, t) {
			return e === t ? e !== 0 || t !== 0 || 1 / e === 1 / t : e !== e && t !== t
		}

		function DD(e, t) {
			if (gh(e, t)) return !0;
			if (typeof e != "object" || e === null || typeof t != "object" || t === null) return !1;
			let r = Object.keys(e),
				n = Object.keys(t);
			if (r.length !== n.length) return !1;
			for (let i = 0; i < r.length; i++)
				if (!PD.call(t, r[i]) || !gh(e[r[i]], t[r[i]])) return !1;
			return !0
		}
		var MD = DD;
		si.default = MD
	});
	var Xh = s(ue => {
		"use strict";
		var li = nt().default;
		Object.defineProperty(ue, "__esModule", {
			value: !0
		});
		ue.cleanupHTMLElement = LM;
		ue.clearAllStyles = xM;
		ue.getActionListProgress = DM;
		ue.getAffectedElements = Wa;
		ue.getComputedStyle = sM;
		ue.getDestinationValues = vM;
		ue.getElementId = nM;
		ue.getInstanceId = tM;
		ue.getInstanceOrigin = lM;
		ue.getItemConfigByKey = void 0;
		ue.getMaxDurationItemIndex = Gh;
		ue.getNamespacedParameterId = GM;
		ue.getRenderType = Dh;
		ue.getStyleProp = EM;
		ue.mediaQueriesEqual = VM;
		ue.observeStore = aM;
		ue.reduceListToGroup = MM;
		ue.reifyState = iM;
		ue.renderHTMLElement = hM;
		Object.defineProperty(ue, "shallowEqual", {
			enumerable: !0,
			get: function() {
				return wh.default
			}
		});
		ue.shouldAllowMediaQuery = XM;
		ue.shouldNamespaceEventParameter = FM;
		ue.stringifyTarget = UM;
		var Ot = li(ZE()),
			Ga = li(dh()),
			Fa = li(hh()),
			yh = er(),
			Xt = Ge(),
			wh = li(_h()),
			FD = xa(),
			ct = Pa(),
			Le = ri(),
			{
				BACKGROUND: GD,
				TRANSFORM: XD,
				TRANSLATE_3D: VD,
				SCALE_3D: UD,
				ROTATE_X: WD,
				ROTATE_Y: BD,
				ROTATE_Z: HD,
				SKEW: kD,
				PRESERVE_3D: jD,
				FLEX: KD,
				OPACITY: ui,
				FILTER: Yr,
				FONT_VARIATION_SETTINGS: Qr,
				WIDTH: st,
				HEIGHT: ut,
				BACKGROUND_COLOR: Ch,
				BORDER_COLOR: zD,
				COLOR: YD,
				CHILDREN: Ih,
				IMMEDIATE_CHILDREN: QD,
				SIBLINGS: Th,
				PARENT: $D,
				DISPLAY: ci,
				WILL_CHANGE: lr,
				AUTO: At,
				COMMA_DELIMITER: $r,
				COLON_DELIMITER: ZD,
				BAR_DELIMITER: mh,
				RENDER_TRANSFORM: Nh,
				RENDER_GENERAL: Xa,
				RENDER_STYLE: Va,
				RENDER_PLUGIN: qh
			} = Xt.IX2EngineConstants,
			{
				TRANSFORM_MOVE: fr,
				TRANSFORM_SCALE: dr,
				TRANSFORM_ROTATE: pr,
				TRANSFORM_SKEW: Zr,
				STYLE_OPACITY: xh,
				STYLE_FILTER: Jr,
				STYLE_FONT_VARIATION: en,
				STYLE_SIZE: vr,
				STYLE_BACKGROUND_COLOR: Er,
				STYLE_BORDER: hr,
				STYLE_TEXT_COLOR: gr,
				GENERAL_DISPLAY: fi
			} = Xt.ActionTypeConsts,
			JD = "OBJECT_VALUE",
			Lh = e => e.trim(),
			Ua = Object.freeze({
				[Er]: Ch,
				[hr]: zD,
				[gr]: YD
			}),
			Ph = Object.freeze({
				[Le.TRANSFORM_PREFIXED]: XD,
				[Ch]: GD,
				[ui]: ui,
				[Yr]: Yr,
				[st]: st,
				[ut]: ut,
				[Qr]: Qr
			}),
			Oh = {},
			eM = 1;

		function tM() {
			return "i" + eM++
		}
		var rM = 1;

		function nM(e, t) {
			for (let r in e) {
				let n = e[r];
				if (n && n.ref === t) return n.id
			}
			return "e" + rM++
		}

		function iM({
			events: e,
			actionLists: t,
			site: r
		} = {}) {
			let n = (0, Ga.default)(e, (a, u) => {
					let {
						eventTypeId: c
					} = u;
					return a[c] || (a[c] = {}), a[c][u.id] = u, a
				}, {}),
				i = r && r.mediaQueries,
				o = [];
			return i ? o = i.map(a => a.key) : (i = [], console.warn("IX2 missing mediaQueries in site data")), {
				ixData: {
					events: e,
					actionLists: t,
					eventTypeMap: n,
					mediaQueries: i,
					mediaQueryKeys: o
				}
			}
		}
		var oM = (e, t) => e === t;

		function aM({
			store: e,
			select: t,
			onChange: r,
			comparator: n = oM
		}) {
			let {
				getState: i,
				subscribe: o
			} = e, a = o(c), u = t(i());

			function c() {
				let f = t(i());
				if (f == null) {
					a();
					return
				}
				n(f, u) || (u = f, r(u, e))
			}
			return a
		}

		function Ah(e) {
			let t = typeof e;
			if (t === "string") return {
				id: e
			};
			if (e != null && t === "object") {
				let {
					id: r,
					objectId: n,
					selector: i,
					selectorGuids: o,
					appliesTo: a,
					useEventTarget: u
				} = e;
				return {
					id: r,
					objectId: n,
					selector: i,
					selectorGuids: o,
					appliesTo: a,
					useEventTarget: u
				}
			}
			return {}
		}

		function Wa({
			config: e,
			event: t,
			eventTarget: r,
			elementRoot: n,
			elementApi: i
		}) {
			var o, a, u;
			if (!i) throw new Error("IX2 missing elementApi");
			let {
				targets: c
			} = e;
			if (Array.isArray(c) && c.length > 0) return c.reduce((w, M) => w.concat(Wa({
				config: {
					target: M
				},
				event: t,
				eventTarget: r,
				elementRoot: n,
				elementApi: i
			})), []);
			let {
				getValidDocument: f,
				getQuerySelector: g,
				queryDocument: v,
				getChildElements: h,
				getSiblingElements: _,
				matchSelector: S,
				elementContains: m,
				isSiblingNode: D
			} = i, {
				target: O
			} = e;
			if (!O) return [];
			let {
				id: b,
				objectId: I,
				selector: N,
				selectorGuids: q,
				appliesTo: L,
				useEventTarget: F
			} = Ah(O);
			if (I) return [Oh[I] || (Oh[I] = {})];
			if (L === Xt.EventAppliesTo.PAGE) {
				let w = f(b);
				return w ? [w] : []
			}
			let H = ((o = t == null || (a = t.action) === null || a === void 0 || (u = a.config) === null || u === void 0 ? void 0 : u.affectedElements) !== null && o !== void 0 ? o : {})[b || N] || {},
				Q = !!(H.id || H.selector),
				G, R, d, P = t && g(Ah(t.target));
			if (Q ? (G = H.limitAffectedElements, R = P, d = g(H)) : R = d = g({
					id: b,
					selector: N,
					selectorGuids: q
				}), t && F) {
				let w = r && (d || F === !0) ? [r] : v(P);
				if (d) {
					if (F === $D) return v(d).filter(M => w.some(B => m(M, B)));
					if (F === Ih) return v(d).filter(M => w.some(B => m(B, M)));
					if (F === Th) return v(d).filter(M => w.some(B => D(B, M)))
				}
				return w
			}
			return R == null || d == null ? [] : Le.IS_BROWSER_ENV && n ? v(d).filter(w => n.contains(w)) : G === Ih ? v(R, d) : G === QD ? h(v(R)).filter(S(d)) : G === Th ? _(v(R)).filter(S(d)) : v(d)
		}

		function sM({
			element: e,
			actionItem: t
		}) {
			if (!Le.IS_BROWSER_ENV) return {};
			let {
				actionTypeId: r
			} = t;
			switch (r) {
				case vr:
				case Er:
				case hr:
				case gr:
				case fi:
					return window.getComputedStyle(e);
				default:
					return {}
			}
		}
		var Sh = /px/,
			uM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = gM[n.type]), r), e || {}),
			cM = (e, t) => t.reduce((r, n) => (r[n.type] == null && (r[n.type] = _M[n.type] || n.defaultValue || 0), r), e || {});

		function lM(e, t = {}, r = {}, n, i) {
			let {
				getStyle: o
			} = i, {
				actionTypeId: a
			} = n;
			if ((0, ct.isPluginType)(a)) return (0, ct.getPluginOrigin)(a)(t[a]);
			switch (n.actionTypeId) {
				case fr:
				case dr:
				case pr:
				case Zr:
					return t[n.actionTypeId] || Ba[n.actionTypeId];
				case Jr:
					return uM(t[n.actionTypeId], n.config.filters);
				case en:
					return cM(t[n.actionTypeId], n.config.fontVariations);
				case xh:
					return {
						value: (0, Ot.default)(parseFloat(o(e, ui)), 1)
					};
				case vr: {
					let u = o(e, st),
						c = o(e, ut),
						f, g;
					return n.config.widthUnit === At ? f = Sh.test(u) ? parseFloat(u) : parseFloat(r.width) : f = (0, Ot.default)(parseFloat(u), parseFloat(r.width)), n.config.heightUnit === At ? g = Sh.test(c) ? parseFloat(c) : parseFloat(r.height) : g = (0, Ot.default)(parseFloat(c), parseFloat(r.height)), {
						widthValue: f,
						heightValue: g
					}
				}
				case Er:
				case hr:
				case gr:
					return CM({
						element: e,
						actionTypeId: n.actionTypeId,
						computedStyle: r,
						getStyle: o
					});
				case fi:
					return {
						value: (0, Ot.default)(o(e, ci), r.display)
					};
				case JD:
					return t[n.actionTypeId] || {
						value: 0
					};
				default:
					return
			}
		}
		var fM = (e, t) => (t && (e[t.type] = t.value || 0), e),
			dM = (e, t) => (t && (e[t.type] = t.value || 0), e),
			pM = (e, t, r) => {
				if ((0, ct.isPluginType)(e)) return (0, ct.getPluginConfig)(e)(r, t);
				switch (e) {
					case Jr: {
						let n = (0, Fa.default)(r.filters, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
					case en: {
						let n = (0, Fa.default)(r.fontVariations, ({
							type: i
						}) => i === t);
						return n ? n.value : 0
					}
					default:
						return r[t]
				}
			};
		ue.getItemConfigByKey = pM;

		function vM({
			element: e,
			actionItem: t,
			elementApi: r
		}) {
			if ((0, ct.isPluginType)(t.actionTypeId)) return (0, ct.getPluginDestination)(t.actionTypeId)(t.config);
			switch (t.actionTypeId) {
				case fr:
				case dr:
				case pr:
				case Zr: {
					let {
						xValue: n,
						yValue: i,
						zValue: o
					} = t.config;
					return {
						xValue: n,
						yValue: i,
						zValue: o
					}
				}
				case vr: {
					let {
						getStyle: n,
						setStyle: i,
						getProperty: o
					} = r, {
						widthUnit: a,
						heightUnit: u
					} = t.config, {
						widthValue: c,
						heightValue: f
					} = t.config;
					if (!Le.IS_BROWSER_ENV) return {
						widthValue: c,
						heightValue: f
					};
					if (a === At) {
						let g = n(e, st);
						i(e, st, ""), c = o(e, "offsetWidth"), i(e, st, g)
					}
					if (u === At) {
						let g = n(e, ut);
						i(e, ut, ""), f = o(e, "offsetHeight"), i(e, ut, g)
					}
					return {
						widthValue: c,
						heightValue: f
					}
				}
				case Er:
				case hr:
				case gr: {
					let {
						rValue: n,
						gValue: i,
						bValue: o,
						aValue: a
					} = t.config;
					return {
						rValue: n,
						gValue: i,
						bValue: o,
						aValue: a
					}
				}
				case Jr:
					return t.config.filters.reduce(fM, {});
				case en:
					return t.config.fontVariations.reduce(dM, {});
				default: {
					let {
						value: n
					} = t.config;
					return {
						value: n
					}
				}
			}
		}

		function Dh(e) {
			if (/^TRANSFORM_/.test(e)) return Nh;
			if (/^STYLE_/.test(e)) return Va;
			if (/^GENERAL_/.test(e)) return Xa;
			if (/^PLUGIN_/.test(e)) return qh
		}

		function EM(e, t) {
			return e === Va ? t.replace("STYLE_", "").toLowerCase() : null
		}

		function hM(e, t, r, n, i, o, a, u, c) {
			switch (u) {
				case Nh:
					return TM(e, t, r, i, a);
				case Va:
					return NM(e, t, r, i, o, a);
				case Xa:
					return qM(e, i, a);
				case qh: {
					let {
						actionTypeId: f
					} = i;
					if ((0, ct.isPluginType)(f)) return (0, ct.renderPlugin)(f)(c, t, i)
				}
			}
		}
		var Ba = {
				[fr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[dr]: Object.freeze({
					xValue: 1,
					yValue: 1,
					zValue: 1
				}),
				[pr]: Object.freeze({
					xValue: 0,
					yValue: 0,
					zValue: 0
				}),
				[Zr]: Object.freeze({
					xValue: 0,
					yValue: 0
				})
			},
			gM = Object.freeze({
				blur: 0,
				"hue-rotate": 0,
				invert: 0,
				grayscale: 0,
				saturate: 100,
				sepia: 0,
				contrast: 100,
				brightness: 100
			}),
			_M = Object.freeze({
				wght: 0,
				opsz: 0,
				wdth: 0,
				slnt: 0
			}),
			yM = (e, t) => {
				let r = (0, Fa.default)(t.filters, ({
					type: n
				}) => n === e);
				if (r && r.unit) return r.unit;
				switch (e) {
					case "blur":
						return "px";
					case "hue-rotate":
						return "deg";
					default:
						return "%"
				}
			},
			IM = Object.keys(Ba);

		function TM(e, t, r, n, i) {
			let o = IM.map(u => {
					let c = Ba[u],
						{
							xValue: f = c.xValue,
							yValue: g = c.yValue,
							zValue: v = c.zValue,
							xUnit: h = "",
							yUnit: _ = "",
							zUnit: S = ""
						} = t[u] || {};
					switch (u) {
						case fr:
							return `${VD}(${f}${h}, ${g}${_}, ${v}${S})`;
						case dr:
							return `${UD}(${f}${h}, ${g}${_}, ${v}${S})`;
						case pr:
							return `${WD}(${f}${h}) ${BD}(${g}${_}) ${HD}(${v}${S})`;
						case Zr:
							return `${kD}(${f}${h}, ${g}${_})`;
						default:
							return ""
					}
				}).join(" "),
				{
					setStyle: a
				} = i;
			Vt(e, Le.TRANSFORM_PREFIXED, i), a(e, Le.TRANSFORM_PREFIXED, o), AM(n, r) && a(e, Le.TRANSFORM_STYLE_PREFIXED, jD)
		}

		function mM(e, t, r, n) {
			let i = (0, Ga.default)(t, (a, u, c) => `${a} ${c}(${u}${yM(c,r)})`, ""),
				{
					setStyle: o
				} = n;
			Vt(e, Yr, n), o(e, Yr, i)
		}

		function OM(e, t, r, n) {
			let i = (0, Ga.default)(t, (a, u, c) => (a.push(`"${c}" ${u}`), a), []).join(", "),
				{
					setStyle: o
				} = n;
			Vt(e, Qr, n), o(e, Qr, i)
		}

		function AM({
			actionTypeId: e
		}, {
			xValue: t,
			yValue: r,
			zValue: n
		}) {
			return e === fr && n !== void 0 || e === dr && n !== void 0 || e === pr && (t !== void 0 || r !== void 0)
		}
		var SM = "\\(([^)]+)\\)",
			bM = /^rgb/,
			RM = RegExp(`rgba?${SM}`);

		function wM(e, t) {
			let r = e.exec(t);
			return r ? r[1] : ""
		}

		function CM({
			element: e,
			actionTypeId: t,
			computedStyle: r,
			getStyle: n
		}) {
			let i = Ua[t],
				o = n(e, i),
				a = bM.test(o) ? o : r[i],
				u = wM(RM, a).split($r);
			return {
				rValue: (0, Ot.default)(parseInt(u[0], 10), 255),
				gValue: (0, Ot.default)(parseInt(u[1], 10), 255),
				bValue: (0, Ot.default)(parseInt(u[2], 10), 255),
				aValue: (0, Ot.default)(parseFloat(u[3]), 1)
			}
		}

		function NM(e, t, r, n, i, o) {
			let {
				setStyle: a
			} = o;
			switch (n.actionTypeId) {
				case vr: {
					let {
						widthUnit: u = "",
						heightUnit: c = ""
					} = n.config, {
						widthValue: f,
						heightValue: g
					} = r;
					f !== void 0 && (u === At && (u = "px"), Vt(e, st, o), a(e, st, f + u)), g !== void 0 && (c === At && (c = "px"), Vt(e, ut, o), a(e, ut, g + c));
					break
				}
				case Jr: {
					mM(e, r, n.config, o);
					break
				}
				case en: {
					OM(e, r, n.config, o);
					break
				}
				case Er:
				case hr:
				case gr: {
					let u = Ua[n.actionTypeId],
						c = Math.round(r.rValue),
						f = Math.round(r.gValue),
						g = Math.round(r.bValue),
						v = r.aValue;
					Vt(e, u, o), a(e, u, v >= 1 ? `rgb(${c},${f},${g})` : `rgba(${c},${f},${g},${v})`);
					break
				}
				default: {
					let {
						unit: u = ""
					} = n.config;
					Vt(e, i, o), a(e, i, r.value + u);
					break
				}
			}
		}

		function qM(e, t, r) {
			let {
				setStyle: n
			} = r;
			switch (t.actionTypeId) {
				case fi: {
					let {
						value: i
					} = t.config;
					i === KD && Le.IS_BROWSER_ENV ? n(e, ci, Le.FLEX_PREFIXED) : n(e, ci, i);
					return
				}
			}
		}

		function Vt(e, t, r) {
			if (!Le.IS_BROWSER_ENV) return;
			let n = Ph[t];
			if (!n) return;
			let {
				getStyle: i,
				setStyle: o
			} = r, a = i(e, lr);
			if (!a) {
				o(e, lr, n);
				return
			}
			let u = a.split($r).map(Lh);
			u.indexOf(n) === -1 && o(e, lr, u.concat(n).join($r))
		}

		function Mh(e, t, r) {
			if (!Le.IS_BROWSER_ENV) return;
			let n = Ph[t];
			if (!n) return;
			let {
				getStyle: i,
				setStyle: o
			} = r, a = i(e, lr);
			!a || a.indexOf(n) === -1 || o(e, lr, a.split($r).map(Lh).filter(u => u !== n).join($r))
		}

		function xM({
			store: e,
			elementApi: t
		}) {
			let {
				ixData: r
			} = e.getState(), {
				events: n = {},
				actionLists: i = {}
			} = r;
			Object.keys(n).forEach(o => {
				let a = n[o],
					{
						config: u
					} = a.action,
					{
						actionListId: c
					} = u,
					f = i[c];
				f && bh({
					actionList: f,
					event: a,
					elementApi: t
				})
			}), Object.keys(i).forEach(o => {
				bh({
					actionList: i[o],
					elementApi: t
				})
			})
		}

		function bh({
			actionList: e = {},
			event: t,
			elementApi: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: i
			} = e;
			n && n.forEach(o => {
				Rh({
					actionGroup: o,
					event: t,
					elementApi: r
				})
			}), i && i.forEach(o => {
				let {
					continuousActionGroups: a
				} = o;
				a.forEach(u => {
					Rh({
						actionGroup: u,
						event: t,
						elementApi: r
					})
				})
			})
		}

		function Rh({
			actionGroup: e,
			event: t,
			elementApi: r
		}) {
			let {
				actionItems: n
			} = e;
			n.forEach(({
				actionTypeId: i,
				config: o
			}) => {
				let a;
				(0, ct.isPluginType)(i) ? a = (0, ct.clearPlugin)(i): a = Fh({
					effect: PM,
					actionTypeId: i,
					elementApi: r
				}), Wa({
					config: o,
					event: t,
					elementApi: r
				}).forEach(a)
			})
		}

		function LM(e, t, r) {
			let {
				setStyle: n,
				getStyle: i
			} = r, {
				actionTypeId: o
			} = t;
			if (o === vr) {
				let {
					config: a
				} = t;
				a.widthUnit === At && n(e, st, ""), a.heightUnit === At && n(e, ut, "")
			}
			i(e, lr) && Fh({
				effect: Mh,
				actionTypeId: o,
				elementApi: r
			})(e)
		}
		var Fh = ({
			effect: e,
			actionTypeId: t,
			elementApi: r
		}) => n => {
			switch (t) {
				case fr:
				case dr:
				case pr:
				case Zr:
					e(n, Le.TRANSFORM_PREFIXED, r);
					break;
				case Jr:
					e(n, Yr, r);
					break;
				case en:
					e(n, Qr, r);
					break;
				case xh:
					e(n, ui, r);
					break;
				case vr:
					e(n, st, r), e(n, ut, r);
					break;
				case Er:
				case hr:
				case gr:
					e(n, Ua[t], r);
					break;
				case fi:
					e(n, ci, r);
					break
			}
		};

		function PM(e, t, r) {
			let {
				setStyle: n
			} = r;
			Mh(e, t, r), n(e, t, ""), t === Le.TRANSFORM_PREFIXED && n(e, Le.TRANSFORM_STYLE_PREFIXED, "")
		}

		function Gh(e) {
			let t = 0,
				r = 0;
			return e.forEach((n, i) => {
				let {
					config: o
				} = n, a = o.delay + o.duration;
				a >= t && (t = a, r = i)
			}), r
		}

		function DM(e, t) {
			let {
				actionItemGroups: r,
				useFirstGroupAsInitialState: n
			} = e, {
				actionItem: i,
				verboseTimeElapsed: o = 0
			} = t, a = 0, u = 0;
			return r.forEach((c, f) => {
				if (n && f === 0) return;
				let {
					actionItems: g
				} = c, v = g[Gh(g)], {
					config: h,
					actionTypeId: _
				} = v;
				i.id === v.id && (u = a + o);
				let S = Dh(_) === Xa ? 0 : h.duration;
				a += h.delay + S
			}), a > 0 ? (0, FD.optimizeFloat)(u / a) : 0
		}

		function MM({
			actionList: e,
			actionItemId: t,
			rawData: r
		}) {
			let {
				actionItemGroups: n,
				continuousParameterGroups: i
			} = e, o = [], a = u => (o.push((0, yh.mergeIn)(u, ["config"], {
				delay: 0,
				duration: 0
			})), u.id === t);
			return n && n.some(({
				actionItems: u
			}) => u.some(a)), i && i.some(u => {
				let {
					continuousActionGroups: c
				} = u;
				return c.some(({
					actionItems: f
				}) => f.some(a))
			}), (0, yh.setIn)(r, ["actionLists"], {
				[e.id]: {
					id: e.id,
					actionItemGroups: [{
						actionItems: o
					}]
				}
			})
		}

		function FM(e, {
			basedOn: t
		}) {
			return e === Xt.EventTypeConsts.SCROLLING_IN_VIEW && (t === Xt.EventBasedOn.ELEMENT || t == null) || e === Xt.EventTypeConsts.MOUSE_MOVE && t === Xt.EventBasedOn.ELEMENT
		}

		function GM(e, t) {
			return e + ZD + t
		}

		function XM(e, t) {
			return t == null ? !0 : e.indexOf(t) !== -1
		}

		function VM(e, t) {
			return (0, wh.default)(e && e.sort(), t && t.sort())
		}

		function UM(e) {
			if (typeof e == "string") return e;
			let {
				id: t = "",
				selector: r = "",
				useEventTarget: n = ""
			} = e;
			return t + mh + r + mh + n
		}
	});
	var Ut = s(Pe => {
		"use strict";
		var _r = jt().default;
		Object.defineProperty(Pe, "__esModule", {
			value: !0
		});
		Pe.IX2VanillaUtils = Pe.IX2VanillaPlugins = Pe.IX2ElementsReducer = Pe.IX2Easings = Pe.IX2EasingUtils = Pe.IX2BrowserSupport = void 0;
		var WM = _r(ri());
		Pe.IX2BrowserSupport = WM;
		var BM = _r(Na());
		Pe.IX2Easings = BM;
		var HM = _r(xa());
		Pe.IX2EasingUtils = HM;
		var kM = _r(zE());
		Pe.IX2ElementsReducer = kM;
		var jM = _r(Pa());
		Pe.IX2VanillaPlugins = jM;
		var KM = _r(Xh());
		Pe.IX2VanillaUtils = KM
	});
	var Bh = s(pi => {
		"use strict";
		Object.defineProperty(pi, "__esModule", {
			value: !0
		});
		pi.ixInstances = void 0;
		var Vh = Ge(),
			Uh = Ut(),
			yr = er(),
			{
				IX2_RAW_DATA_IMPORTED: zM,
				IX2_SESSION_STOPPED: YM,
				IX2_INSTANCE_ADDED: QM,
				IX2_INSTANCE_STARTED: $M,
				IX2_INSTANCE_REMOVED: ZM,
				IX2_ANIMATION_FRAME_CHANGED: JM
			} = Vh.IX2EngineActionTypes,
			{
				optimizeFloat: di,
				applyEasing: Wh,
				createBezierEasing: e1
			} = Uh.IX2EasingUtils,
			{
				RENDER_GENERAL: t1
			} = Vh.IX2EngineConstants,
			{
				getItemConfigByKey: Ha,
				getRenderType: r1,
				getStyleProp: n1
			} = Uh.IX2VanillaUtils,
			i1 = (e, t) => {
				let {
					position: r,
					parameterId: n,
					actionGroups: i,
					destinationKeys: o,
					smoothing: a,
					restingValue: u,
					actionTypeId: c,
					customEasingFn: f,
					skipMotion: g,
					skipToValue: v
				} = e, {
					parameters: h
				} = t.payload, _ = Math.max(1 - a, .01), S = h[n];
				S == null && (_ = 1, S = u);
				let m = Math.max(S, 0) || 0,
					D = di(m - r),
					O = g ? v : di(r + D * _),
					b = O * 100;
				if (O === r && e.current) return e;
				let I, N, q, L;
				for (let W = 0, {
						length: H
					} = i; W < H; W++) {
					let {
						keyframe: Q,
						actionItems: G
					} = i[W];
					if (W === 0 && (I = G[0]), b >= Q) {
						I = G[0];
						let R = i[W + 1],
							d = R && b !== Q;
						N = d ? R.actionItems[0] : null, d && (q = Q / 100, L = (R.keyframe - Q) / 100)
					}
				}
				let F = {};
				if (I && !N)
					for (let W = 0, {
							length: H
						} = o; W < H; W++) {
						let Q = o[W];
						F[Q] = Ha(c, Q, I.config)
					} else if (I && N && q !== void 0 && L !== void 0) {
						let W = (O - q) / L,
							H = I.config.easing,
							Q = Wh(H, W, f);
						for (let G = 0, {
								length: R
							} = o; G < R; G++) {
							let d = o[G],
								P = Ha(c, d, I.config),
								B = (Ha(c, d, N.config) - P) * Q + P;
							F[d] = B
						}
					} return (0, yr.merge)(e, {
					position: O,
					current: F
				})
			},
			o1 = (e, t) => {
				let {
					active: r,
					origin: n,
					start: i,
					immediate: o,
					renderType: a,
					verbose: u,
					actionItem: c,
					destination: f,
					destinationKeys: g,
					pluginDuration: v,
					instanceDelay: h,
					customEasingFn: _,
					skipMotion: S
				} = e, m = c.config.easing, {
					duration: D,
					delay: O
				} = c.config;
				v != null && (D = v), O = h ?? O, a === t1 ? D = 0 : (o || S) && (D = O = 0);
				let {
					now: b
				} = t.payload;
				if (r && n) {
					let I = b - (i + O);
					if (u) {
						let W = b - i,
							H = D + O,
							Q = di(Math.min(Math.max(0, W / H), 1));
						e = (0, yr.set)(e, "verboseTimeElapsed", H * Q)
					}
					if (I < 0) return e;
					let N = di(Math.min(Math.max(0, I / D), 1)),
						q = Wh(m, N, _),
						L = {},
						F = null;
					return g.length && (F = g.reduce((W, H) => {
						let Q = f[H],
							G = parseFloat(n[H]) || 0,
							d = (parseFloat(Q) - G) * q + G;
						return W[H] = d, W
					}, {})), L.current = F, L.position = N, N === 1 && (L.active = !1, L.complete = !0), (0, yr.merge)(e, L)
				}
				return e
			},
			a1 = (e = Object.freeze({}), t) => {
				switch (t.type) {
					case zM:
						return t.payload.ixInstances || Object.freeze({});
					case YM:
						return Object.freeze({});
					case QM: {
						let {
							instanceId: r,
							elementId: n,
							actionItem: i,
							eventId: o,
							eventTarget: a,
							eventStateKey: u,
							actionListId: c,
							groupIndex: f,
							isCarrier: g,
							origin: v,
							destination: h,
							immediate: _,
							verbose: S,
							continuous: m,
							parameterId: D,
							actionGroups: O,
							smoothing: b,
							restingValue: I,
							pluginInstance: N,
							pluginDuration: q,
							instanceDelay: L,
							skipMotion: F,
							skipToValue: W
						} = t.payload, {
							actionTypeId: H
						} = i, Q = r1(H), G = n1(Q, H), R = Object.keys(h).filter(P => h[P] != null), {
							easing: d
						} = i.config;
						return (0, yr.set)(e, r, {
							id: r,
							elementId: n,
							active: !1,
							position: 0,
							start: 0,
							origin: v,
							destination: h,
							destinationKeys: R,
							immediate: _,
							verbose: S,
							current: null,
							actionItem: i,
							actionTypeId: H,
							eventId: o,
							eventTarget: a,
							eventStateKey: u,
							actionListId: c,
							groupIndex: f,
							renderType: Q,
							isCarrier: g,
							styleProp: G,
							continuous: m,
							parameterId: D,
							actionGroups: O,
							smoothing: b,
							restingValue: I,
							pluginInstance: N,
							pluginDuration: q,
							instanceDelay: L,
							skipMotion: F,
							skipToValue: W,
							customEasingFn: Array.isArray(d) && d.length === 4 ? e1(d) : void 0
						})
					}
					case $M: {
						let {
							instanceId: r,
							time: n
						} = t.payload;
						return (0, yr.mergeIn)(e, [r], {
							active: !0,
							complete: !1,
							start: n
						})
					}
					case ZM: {
						let {
							instanceId: r
						} = t.payload;
						if (!e[r]) return e;
						let n = {},
							i = Object.keys(e),
							{
								length: o
							} = i;
						for (let a = 0; a < o; a++) {
							let u = i[a];
							u !== r && (n[u] = e[u])
						}
						return n
					}
					case JM: {
						let r = e,
							n = Object.keys(e),
							{
								length: i
							} = n;
						for (let o = 0; o < i; o++) {
							let a = n[o],
								u = e[a],
								c = u.continuous ? i1 : o1;
							r = (0, yr.set)(r, a, c(u, t))
						}
						return r
					}
					default:
						return e
				}
			};
		pi.ixInstances = a1
	});
	var Hh = s(vi => {
		"use strict";
		Object.defineProperty(vi, "__esModule", {
			value: !0
		});
		vi.ixParameters = void 0;
		var s1 = Ge(),
			{
				IX2_RAW_DATA_IMPORTED: u1,
				IX2_SESSION_STOPPED: c1,
				IX2_PARAMETER_CHANGED: l1
			} = s1.IX2EngineActionTypes,
			f1 = (e = {}, t) => {
				switch (t.type) {
					case u1:
						return t.payload.ixParameters || {};
					case c1:
						return {};
					case l1: {
						let {
							key: r,
							value: n
						} = t.payload;
						return e[r] = n, e
					}
					default:
						return e
				}
			};
		vi.ixParameters = f1
	});
	var kh = s(Ei => {
		"use strict";
		Object.defineProperty(Ei, "__esModule", {
			value: !0
		});
		Ei.default = void 0;
		var d1 = Ko(),
			p1 = df(),
			v1 = qf(),
			E1 = Lf(),
			h1 = Ut(),
			g1 = Bh(),
			_1 = Hh(),
			{
				ixElements: y1
			} = h1.IX2ElementsReducer,
			I1 = (0, d1.combineReducers)({
				ixData: p1.ixData,
				ixRequest: v1.ixRequest,
				ixSession: E1.ixSession,
				ixElements: y1,
				ixInstances: g1.ixInstances,
				ixParameters: _1.ixParameters
			});
		Ei.default = I1
	});
	var jh = s((Gk, tn) => {
		function T1(e, t) {
			if (e == null) return {};
			var r = {},
				n = Object.keys(e),
				i, o;
			for (o = 0; o < n.length; o++) i = n[o], !(t.indexOf(i) >= 0) && (r[i] = e[i]);
			return r
		}
		tn.exports = T1, tn.exports.__esModule = !0, tn.exports.default = tn.exports
	});
	var zh = s((Xk, Kh) => {
		var m1 = It(),
			O1 = Se(),
			A1 = dt(),
			S1 = "[object String]";

		function b1(e) {
			return typeof e == "string" || !O1(e) && A1(e) && m1(e) == S1
		}
		Kh.exports = b1
	});
	var Qh = s((Vk, Yh) => {
		var R1 = Aa(),
			w1 = R1("length");
		Yh.exports = w1
	});
	var Zh = s((Uk, $h) => {
		var C1 = "\\ud800-\\udfff",
			N1 = "\\u0300-\\u036f",
			q1 = "\\ufe20-\\ufe2f",
			x1 = "\\u20d0-\\u20ff",
			L1 = N1 + q1 + x1,
			P1 = "\\ufe0e\\ufe0f",
			D1 = "\\u200d",
			M1 = RegExp("[" + D1 + C1 + L1 + P1 + "]");

		function F1(e) {
			return M1.test(e)
		}
		$h.exports = F1
	});
	var sg = s((Wk, ag) => {
		var eg = "\\ud800-\\udfff",
			G1 = "\\u0300-\\u036f",
			X1 = "\\ufe20-\\ufe2f",
			V1 = "\\u20d0-\\u20ff",
			U1 = G1 + X1 + V1,
			W1 = "\\ufe0e\\ufe0f",
			B1 = "[" + eg + "]",
			ka = "[" + U1 + "]",
			ja = "\\ud83c[\\udffb-\\udfff]",
			H1 = "(?:" + ka + "|" + ja + ")",
			tg = "[^" + eg + "]",
			rg = "(?:\\ud83c[\\udde6-\\uddff]){2}",
			ng = "[\\ud800-\\udbff][\\udc00-\\udfff]",
			k1 = "\\u200d",
			ig = H1 + "?",
			og = "[" + W1 + "]?",
			j1 = "(?:" + k1 + "(?:" + [tg, rg, ng].join("|") + ")" + og + ig + ")*",
			K1 = og + ig + j1,
			z1 = "(?:" + [tg + ka + "?", ka, rg, ng, B1].join("|") + ")",
			Jh = RegExp(ja + "(?=" + ja + ")|" + z1 + K1, "g");

		function Y1(e) {
			for (var t = Jh.lastIndex = 0; Jh.test(e);) ++t;
			return t
		}
		ag.exports = Y1
	});
	var cg = s((Bk, ug) => {
		var Q1 = Qh(),
			$1 = Zh(),
			Z1 = sg();

		function J1(e) {
			return $1(e) ? Z1(e) : Q1(e)
		}
		ug.exports = J1
	});
	var fg = s((Hk, lg) => {
		var e2 = Kn(),
			t2 = zn(),
			r2 = Dt(),
			n2 = zh(),
			i2 = cg(),
			o2 = "[object Map]",
			a2 = "[object Set]";

		function s2(e) {
			if (e == null) return 0;
			if (r2(e)) return n2(e) ? i2(e) : e.length;
			var t = t2(e);
			return t == o2 || t == a2 ? e.size : e2(e).length
		}
		lg.exports = s2
	});
	var pg = s((kk, dg) => {
		var u2 = "Expected a function";

		function c2(e) {
			if (typeof e != "function") throw new TypeError(u2);
			return function() {
				var t = arguments;
				switch (t.length) {
					case 0:
						return !e.call(this);
					case 1:
						return !e.call(this, t[0]);
					case 2:
						return !e.call(this, t[0], t[1]);
					case 3:
						return !e.call(this, t[0], t[1], t[2])
				}
				return !e.apply(this, t)
			}
		}
		dg.exports = c2
	});
	var Ka = s((jk, vg) => {
		var l2 = Tt(),
			f2 = function() {
				try {
					var e = l2(Object, "defineProperty");
					return e({}, "", {}), e
				} catch {}
			}();
		vg.exports = f2
	});
	var za = s((Kk, hg) => {
		var Eg = Ka();

		function d2(e, t, r) {
			t == "__proto__" && Eg ? Eg(e, t, {
				configurable: !0,
				enumerable: !0,
				value: r,
				writable: !0
			}) : e[t] = r
		}
		hg.exports = d2
	});
	var _g = s((zk, gg) => {
		var p2 = za(),
			v2 = Fn(),
			E2 = Object.prototype,
			h2 = E2.hasOwnProperty;

		function g2(e, t, r) {
			var n = e[t];
			(!(h2.call(e, t) && v2(n, r)) || r === void 0 && !(t in e)) && p2(e, t, r)
		}
		gg.exports = g2
	});
	var Tg = s((Yk, Ig) => {
		var _2 = _g(),
			y2 = jr(),
			I2 = Bn(),
			yg = at(),
			T2 = ur();

		function m2(e, t, r, n) {
			if (!yg(e)) return e;
			t = y2(t, e);
			for (var i = -1, o = t.length, a = o - 1, u = e; u != null && ++i < o;) {
				var c = T2(t[i]),
					f = r;
				if (c === "__proto__" || c === "constructor" || c === "prototype") return e;
				if (i != a) {
					var g = u[c];
					f = n ? n(g, c, u) : void 0, f === void 0 && (f = yg(g) ? g : I2(t[i + 1]) ? [] : {})
				}
				_2(u, c, f), u = u[c]
			}
			return e
		}
		Ig.exports = m2
	});
	var Og = s((Qk, mg) => {
		var O2 = $n(),
			A2 = Tg(),
			S2 = jr();

		function b2(e, t, r) {
			for (var n = -1, i = t.length, o = {}; ++n < i;) {
				var a = t[n],
					u = O2(e, a);
				r(u, a) && A2(o, S2(a, e), u)
			}
			return o
		}
		mg.exports = b2
	});
	var Sg = s(($k, Ag) => {
		var R2 = Un(),
			w2 = Po(),
			C2 = ca(),
			N2 = ua(),
			q2 = Object.getOwnPropertySymbols,
			x2 = q2 ? function(e) {
				for (var t = []; e;) R2(t, C2(e)), e = w2(e);
				return t
			} : N2;
		Ag.exports = x2
	});
	var Rg = s((Zk, bg) => {
		function L2(e) {
			var t = [];
			if (e != null)
				for (var r in Object(e)) t.push(r);
			return t
		}
		bg.exports = L2
	});
	var Cg = s((Jk, wg) => {
		var P2 = at(),
			D2 = jn(),
			M2 = Rg(),
			F2 = Object.prototype,
			G2 = F2.hasOwnProperty;

		function X2(e) {
			if (!P2(e)) return M2(e);
			var t = D2(e),
				r = [];
			for (var n in e) n == "constructor" && (t || !G2.call(e, n)) || r.push(n);
			return r
		}
		wg.exports = X2
	});
	var qg = s((ej, Ng) => {
		var V2 = fa(),
			U2 = Cg(),
			W2 = Dt();

		function B2(e) {
			return W2(e) ? V2(e, !0) : U2(e)
		}
		Ng.exports = B2
	});
	var Lg = s((tj, xg) => {
		var H2 = sa(),
			k2 = Sg(),
			j2 = qg();

		function K2(e) {
			return H2(e, j2, k2)
		}
		xg.exports = K2
	});
	var Dg = s((rj, Pg) => {
		var z2 = Oa(),
			Y2 = mt(),
			Q2 = Og(),
			$2 = Lg();

		function Z2(e, t) {
			if (e == null) return {};
			var r = z2($2(e), function(n) {
				return [n]
			});
			return t = Y2(t), Q2(e, r, function(n, i) {
				return t(n, i[0])
			})
		}
		Pg.exports = Z2
	});
	var Fg = s((nj, Mg) => {
		var J2 = mt(),
			eF = pg(),
			tF = Dg();

		function rF(e, t) {
			return tF(e, eF(J2(t)))
		}
		Mg.exports = rF
	});
	var Xg = s((ij, Gg) => {
		var nF = Kn(),
			iF = zn(),
			oF = Vr(),
			aF = Se(),
			sF = Dt(),
			uF = Wn(),
			cF = jn(),
			lF = kn(),
			fF = "[object Map]",
			dF = "[object Set]",
			pF = Object.prototype,
			vF = pF.hasOwnProperty;

		function EF(e) {
			if (e == null) return !0;
			if (sF(e) && (aF(e) || typeof e == "string" || typeof e.splice == "function" || uF(e) || lF(e) || oF(e))) return !e.length;
			var t = iF(e);
			if (t == fF || t == dF) return !e.size;
			if (cF(e)) return !nF(e).length;
			for (var r in e)
				if (vF.call(e, r)) return !1;
			return !0
		}
		Gg.exports = EF
	});
	var Ug = s((oj, Vg) => {
		var hF = za(),
			gF = Da(),
			_F = mt();

		function yF(e, t) {
			var r = {};
			return t = _F(t, 3), gF(e, function(n, i, o) {
				hF(r, i, t(n, i, o))
			}), r
		}
		Vg.exports = yF
	});
	var Bg = s((aj, Wg) => {
		function IF(e, t) {
			for (var r = -1, n = e == null ? 0 : e.length; ++r < n && t(e[r], r, e) !== !1;);
			return e
		}
		Wg.exports = IF
	});
	var kg = s((sj, Hg) => {
		var TF = Jn();

		function mF(e) {
			return typeof e == "function" ? e : TF
		}
		Hg.exports = mF
	});
	var Kg = s((uj, jg) => {
		var OF = Bg(),
			AF = Ma(),
			SF = kg(),
			bF = Se();

		function RF(e, t) {
			var r = bF(e) ? OF : AF;
			return r(e, SF(t))
		}
		jg.exports = RF
	});
	var Yg = s((cj, zg) => {
		var wF = Qe(),
			CF = function() {
				return wF.Date.now()
			};
		zg.exports = CF
	});
	var Zg = s((lj, $g) => {
		var NF = at(),
			Ya = Yg(),
			Qg = ei(),
			qF = "Expected a function",
			xF = Math.max,
			LF = Math.min;

		function PF(e, t, r) {
			var n, i, o, a, u, c, f = 0,
				g = !1,
				v = !1,
				h = !0;
			if (typeof e != "function") throw new TypeError(qF);
			t = Qg(t) || 0, NF(r) && (g = !!r.leading, v = "maxWait" in r, o = v ? xF(Qg(r.maxWait) || 0, t) : o, h = "trailing" in r ? !!r.trailing : h);

			function _(L) {
				var F = n,
					W = i;
				return n = i = void 0, f = L, a = e.apply(W, F), a
			}

			function S(L) {
				return f = L, u = setTimeout(O, t), g ? _(L) : a
			}

			function m(L) {
				var F = L - c,
					W = L - f,
					H = t - F;
				return v ? LF(H, o - W) : H
			}

			function D(L) {
				var F = L - c,
					W = L - f;
				return c === void 0 || F >= t || F < 0 || v && W >= o
			}

			function O() {
				var L = Ya();
				if (D(L)) return b(L);
				u = setTimeout(O, m(L))
			}

			function b(L) {
				return u = void 0, h && n ? _(L) : (n = i = void 0, a)
			}

			function I() {
				u !== void 0 && clearTimeout(u), f = 0, n = c = i = u = void 0
			}

			function N() {
				return u === void 0 ? a : b(Ya())
			}

			function q() {
				var L = Ya(),
					F = D(L);
				if (n = arguments, i = this, c = L, F) {
					if (u === void 0) return S(c);
					if (v) return clearTimeout(u), u = setTimeout(O, t), _(c)
				}
				return u === void 0 && (u = setTimeout(O, t)), a
			}
			return q.cancel = I, q.flush = N, q
		}
		$g.exports = PF
	});
	var e_ = s((fj, Jg) => {
		var DF = Zg(),
			MF = at(),
			FF = "Expected a function";

		function GF(e, t, r) {
			var n = !0,
				i = !0;
			if (typeof e != "function") throw new TypeError(FF);
			return MF(r) && (n = "leading" in r ? !!r.leading : n, i = "trailing" in r ? !!r.trailing : i), DF(e, t, {
				leading: n,
				maxWait: t,
				trailing: i
			})
		}
		Jg.exports = GF
	});
	var hi = s(ee => {
		"use strict";
		var XF = nt().default;
		Object.defineProperty(ee, "__esModule", {
			value: !0
		});
		ee.viewportWidthChanged = ee.testFrameRendered = ee.stopRequested = ee.sessionStopped = ee.sessionStarted = ee.sessionInitialized = ee.rawDataImported = ee.previewRequested = ee.playbackRequested = ee.parameterChanged = ee.mediaQueriesDefined = ee.instanceStarted = ee.instanceRemoved = ee.instanceAdded = ee.eventStateChanged = ee.eventListenerAdded = ee.elementStateChanged = ee.clearRequested = ee.animationFrameChanged = ee.actionListPlaybackChanged = void 0;
		var t_ = XF(Dr()),
			r_ = Ge(),
			VF = Ut(),
			{
				IX2_RAW_DATA_IMPORTED: UF,
				IX2_SESSION_INITIALIZED: WF,
				IX2_SESSION_STARTED: BF,
				IX2_SESSION_STOPPED: HF,
				IX2_PREVIEW_REQUESTED: kF,
				IX2_PLAYBACK_REQUESTED: jF,
				IX2_STOP_REQUESTED: KF,
				IX2_CLEAR_REQUESTED: zF,
				IX2_EVENT_LISTENER_ADDED: YF,
				IX2_TEST_FRAME_RENDERED: QF,
				IX2_EVENT_STATE_CHANGED: $F,
				IX2_ANIMATION_FRAME_CHANGED: ZF,
				IX2_PARAMETER_CHANGED: JF,
				IX2_INSTANCE_ADDED: eG,
				IX2_INSTANCE_STARTED: tG,
				IX2_INSTANCE_REMOVED: rG,
				IX2_ELEMENT_STATE_CHANGED: nG,
				IX2_ACTION_LIST_PLAYBACK_CHANGED: iG,
				IX2_VIEWPORT_WIDTH_CHANGED: oG,
				IX2_MEDIA_QUERIES_DEFINED: aG
			} = r_.IX2EngineActionTypes,
			{
				reifyState: sG
			} = VF.IX2VanillaUtils,
			uG = e => ({
				type: UF,
				payload: (0, t_.default)({}, sG(e))
			});
		ee.rawDataImported = uG;
		var cG = ({
			hasBoundaryNodes: e,
			reducedMotion: t
		}) => ({
			type: WF,
			payload: {
				hasBoundaryNodes: e,
				reducedMotion: t
			}
		});
		ee.sessionInitialized = cG;
		var lG = () => ({
			type: BF
		});
		ee.sessionStarted = lG;
		var fG = () => ({
			type: HF
		});
		ee.sessionStopped = fG;
		var dG = ({
			rawData: e,
			defer: t
		}) => ({
			type: kF,
			payload: {
				defer: t,
				rawData: e
			}
		});
		ee.previewRequested = dG;
		var pG = ({
			actionTypeId: e = r_.ActionTypeConsts.GENERAL_START_ACTION,
			actionListId: t,
			actionItemId: r,
			eventId: n,
			allowEvents: i,
			immediate: o,
			testManual: a,
			verbose: u,
			rawData: c
		}) => ({
			type: jF,
			payload: {
				actionTypeId: e,
				actionListId: t,
				actionItemId: r,
				testManual: a,
				eventId: n,
				allowEvents: i,
				immediate: o,
				verbose: u,
				rawData: c
			}
		});
		ee.playbackRequested = pG;
		var vG = e => ({
			type: KF,
			payload: {
				actionListId: e
			}
		});
		ee.stopRequested = vG;
		var EG = () => ({
			type: zF
		});
		ee.clearRequested = EG;
		var hG = (e, t) => ({
			type: YF,
			payload: {
				target: e,
				listenerParams: t
			}
		});
		ee.eventListenerAdded = hG;
		var gG = (e = 1) => ({
			type: QF,
			payload: {
				step: e
			}
		});
		ee.testFrameRendered = gG;
		var _G = (e, t) => ({
			type: $F,
			payload: {
				stateKey: e,
				newState: t
			}
		});
		ee.eventStateChanged = _G;
		var yG = (e, t) => ({
			type: ZF,
			payload: {
				now: e,
				parameters: t
			}
		});
		ee.animationFrameChanged = yG;
		var IG = (e, t) => ({
			type: JF,
			payload: {
				key: e,
				value: t
			}
		});
		ee.parameterChanged = IG;
		var TG = e => ({
			type: eG,
			payload: (0, t_.default)({}, e)
		});
		ee.instanceAdded = TG;
		var mG = (e, t) => ({
			type: tG,
			payload: {
				instanceId: e,
				time: t
			}
		});
		ee.instanceStarted = mG;
		var OG = e => ({
			type: rG,
			payload: {
				instanceId: e
			}
		});
		ee.instanceRemoved = OG;
		var AG = (e, t, r, n) => ({
			type: nG,
			payload: {
				elementId: e,
				actionTypeId: t,
				current: r,
				actionItem: n
			}
		});
		ee.elementStateChanged = AG;
		var SG = ({
			actionListId: e,
			isPlaying: t
		}) => ({
			type: iG,
			payload: {
				actionListId: e,
				isPlaying: t
			}
		});
		ee.actionListPlaybackChanged = SG;
		var bG = ({
			width: e,
			mediaQueries: t
		}) => ({
			type: oG,
			payload: {
				width: e,
				mediaQueries: t
			}
		});
		ee.viewportWidthChanged = bG;
		var RG = () => ({
			type: aG
		});
		ee.mediaQueriesDefined = RG
	});
	var o_ = s(Re => {
		"use strict";
		Object.defineProperty(Re, "__esModule", {
			value: !0
		});
		Re.elementContains = XG;
		Re.getChildElements = UG;
		Re.getClosestElement = void 0;
		Re.getProperty = PG;
		Re.getQuerySelector = MG;
		Re.getRefType = HG;
		Re.getSiblingElements = WG;
		Re.getStyle = LG;
		Re.getValidDocument = FG;
		Re.isSiblingNode = VG;
		Re.matchSelector = DG;
		Re.queryDocument = GG;
		Re.setStyle = xG;
		var wG = Ut(),
			CG = Ge(),
			{
				ELEMENT_MATCHES: Qa
			} = wG.IX2BrowserSupport,
			{
				IX2_ID_DELIMITER: n_,
				HTML_ELEMENT: NG,
				PLAIN_OBJECT: qG,
				WF_PAGE: i_
			} = CG.IX2EngineConstants;

		function xG(e, t, r) {
			e.style[t] = r
		}

		function LG(e, t) {
			return e.style[t]
		}

		function PG(e, t) {
			return e[t]
		}

		function DG(e) {
			return t => t[Qa](e)
		}

		function MG({
			id: e,
			selector: t
		}) {
			if (e) {
				let r = e;
				if (e.indexOf(n_) !== -1) {
					let n = e.split(n_),
						i = n[0];
					if (r = n[1], i !== document.documentElement.getAttribute(i_)) return null
				}
				return `[data-w-id="${r}"], [data-w-id^="${r}_instance"]`
			}
			return t
		}

		function FG(e) {
			return e == null || e === document.documentElement.getAttribute(i_) ? document : null
		}

		function GG(e, t) {
			return Array.prototype.slice.call(document.querySelectorAll(t ? e + " " + t : e))
		}

		function XG(e, t) {
			return e.contains(t)
		}

		function VG(e, t) {
			return e !== t && e.parentNode === t.parentNode
		}

		function UG(e) {
			let t = [];
			for (let r = 0, {
					length: n
				} = e || []; r < n; r++) {
				let {
					children: i
				} = e[r], {
					length: o
				} = i;
				if (o)
					for (let a = 0; a < o; a++) t.push(i[a])
			}
			return t
		}

		function WG(e = []) {
			let t = [],
				r = [];
			for (let n = 0, {
					length: i
				} = e; n < i; n++) {
				let {
					parentNode: o
				} = e[n];
				if (!o || !o.children || !o.children.length || r.indexOf(o) !== -1) continue;
				r.push(o);
				let a = o.firstElementChild;
				for (; a != null;) e.indexOf(a) === -1 && t.push(a), a = a.nextElementSibling
			}
			return t
		}
		var BG = Element.prototype.closest ? (e, t) => document.documentElement.contains(e) ? e.closest(t) : null : (e, t) => {
			if (!document.documentElement.contains(e)) return null;
			let r = e;
			do {
				if (r[Qa] && r[Qa](t)) return r;
				r = r.parentNode
			} while (r != null);
			return null
		};
		Re.getClosestElement = BG;

		function HG(e) {
			return e != null && typeof e == "object" ? e instanceof Element ? NG : qG : null
		}
	});
	var $a = s((vj, s_) => {
		var kG = at(),
			a_ = Object.create,
			jG = function() {
				function e() {}
				return function(t) {
					if (!kG(t)) return {};
					if (a_) return a_(t);
					e.prototype = t;
					var r = new e;
					return e.prototype = void 0, r
				}
			}();
		s_.exports = jG
	});
	var gi = s((Ej, u_) => {
		function KG() {}
		u_.exports = KG
	});
	var yi = s((hj, c_) => {
		var zG = $a(),
			YG = gi();

		function _i(e, t) {
			this.__wrapped__ = e, this.__actions__ = [], this.__chain__ = !!t, this.__index__ = 0, this.__values__ = void 0
		}
		_i.prototype = zG(YG.prototype);
		_i.prototype.constructor = _i;
		c_.exports = _i
	});
	var p_ = s((gj, d_) => {
		var l_ = Qt(),
			QG = Vr(),
			$G = Se(),
			f_ = l_ ? l_.isConcatSpreadable : void 0;

		function ZG(e) {
			return $G(e) || QG(e) || !!(f_ && e && e[f_])
		}
		d_.exports = ZG
	});
	var h_ = s((_j, E_) => {
		var JG = Un(),
			eX = p_();

		function v_(e, t, r, n, i) {
			var o = -1,
				a = e.length;
			for (r || (r = eX), i || (i = []); ++o < a;) {
				var u = e[o];
				t > 0 && r(u) ? t > 1 ? v_(u, t - 1, r, n, i) : JG(i, u) : n || (i[i.length] = u)
			}
			return i
		}
		E_.exports = v_
	});
	var __ = s((yj, g_) => {
		var tX = h_();

		function rX(e) {
			var t = e == null ? 0 : e.length;
			return t ? tX(e, 1) : []
		}
		g_.exports = rX
	});
	var I_ = s((Ij, y_) => {
		function nX(e, t, r) {
			switch (r.length) {
				case 0:
					return e.call(t);
				case 1:
					return e.call(t, r[0]);
				case 2:
					return e.call(t, r[0], r[1]);
				case 3:
					return e.call(t, r[0], r[1], r[2])
			}
			return e.apply(t, r)
		}
		y_.exports = nX
	});
	var O_ = s((Tj, m_) => {
		var iX = I_(),
			T_ = Math.max;

		function oX(e, t, r) {
			return t = T_(t === void 0 ? e.length - 1 : t, 0),
				function() {
					for (var n = arguments, i = -1, o = T_(n.length - t, 0), a = Array(o); ++i < o;) a[i] = n[t + i];
					i = -1;
					for (var u = Array(t + 1); ++i < t;) u[i] = n[i];
					return u[t] = r(a), iX(e, this, u)
				}
		}
		m_.exports = oX
	});
	var S_ = s((mj, A_) => {
		function aX(e) {
			return function() {
				return e
			}
		}
		A_.exports = aX
	});
	var w_ = s((Oj, R_) => {
		var sX = S_(),
			b_ = Ka(),
			uX = Jn(),
			cX = b_ ? function(e, t) {
				return b_(e, "toString", {
					configurable: !0,
					enumerable: !1,
					value: sX(t),
					writable: !0
				})
			} : uX;
		R_.exports = cX
	});
	var N_ = s((Aj, C_) => {
		var lX = 800,
			fX = 16,
			dX = Date.now;

		function pX(e) {
			var t = 0,
				r = 0;
			return function() {
				var n = dX(),
					i = fX - (n - r);
				if (r = n, i > 0) {
					if (++t >= lX) return arguments[0]
				} else t = 0;
				return e.apply(void 0, arguments)
			}
		}
		C_.exports = pX
	});
	var x_ = s((Sj, q_) => {
		var vX = w_(),
			EX = N_(),
			hX = EX(vX);
		q_.exports = hX
	});
	var P_ = s((bj, L_) => {
		var gX = __(),
			_X = O_(),
			yX = x_();

		function IX(e) {
			return yX(_X(e, void 0, gX), e + "")
		}
		L_.exports = IX
	});
	var F_ = s((Rj, M_) => {
		var D_ = da(),
			TX = D_ && new D_;
		M_.exports = TX
	});
	var X_ = s((wj, G_) => {
		function mX() {}
		G_.exports = mX
	});
	var Za = s((Cj, U_) => {
		var V_ = F_(),
			OX = X_(),
			AX = V_ ? function(e) {
				return V_.get(e)
			} : OX;
		U_.exports = AX
	});
	var B_ = s((Nj, W_) => {
		var SX = {};
		W_.exports = SX
	});
	var Ja = s((qj, k_) => {
		var H_ = B_(),
			bX = Object.prototype,
			RX = bX.hasOwnProperty;

		function wX(e) {
			for (var t = e.name + "", r = H_[t], n = RX.call(H_, t) ? r.length : 0; n--;) {
				var i = r[n],
					o = i.func;
				if (o == null || o == e) return i.name
			}
			return t
		}
		k_.exports = wX
	});
	var Ti = s((xj, j_) => {
		var CX = $a(),
			NX = gi(),
			qX = 4294967295;

		function Ii(e) {
			this.__wrapped__ = e, this.__actions__ = [], this.__dir__ = 1, this.__filtered__ = !1, this.__iteratees__ = [], this.__takeCount__ = qX, this.__views__ = []
		}
		Ii.prototype = CX(NX.prototype);
		Ii.prototype.constructor = Ii;
		j_.exports = Ii
	});
	var z_ = s((Lj, K_) => {
		function xX(e, t) {
			var r = -1,
				n = e.length;
			for (t || (t = Array(n)); ++r < n;) t[r] = e[r];
			return t
		}
		K_.exports = xX
	});
	var Q_ = s((Pj, Y_) => {
		var LX = Ti(),
			PX = yi(),
			DX = z_();

		function MX(e) {
			if (e instanceof LX) return e.clone();
			var t = new PX(e.__wrapped__, e.__chain__);
			return t.__actions__ = DX(e.__actions__), t.__index__ = e.__index__, t.__values__ = e.__values__, t
		}
		Y_.exports = MX
	});
	var J_ = s((Dj, Z_) => {
		var FX = Ti(),
			$_ = yi(),
			GX = gi(),
			XX = Se(),
			VX = dt(),
			UX = Q_(),
			WX = Object.prototype,
			BX = WX.hasOwnProperty;

		function mi(e) {
			if (VX(e) && !XX(e) && !(e instanceof FX)) {
				if (e instanceof $_) return e;
				if (BX.call(e, "__wrapped__")) return UX(e)
			}
			return new $_(e)
		}
		mi.prototype = GX.prototype;
		mi.prototype.constructor = mi;
		Z_.exports = mi
	});
	var ty = s((Mj, ey) => {
		var HX = Ti(),
			kX = Za(),
			jX = Ja(),
			KX = J_();

		function zX(e) {
			var t = jX(e),
				r = KX[t];
			if (typeof r != "function" || !(t in HX.prototype)) return !1;
			if (e === r) return !0;
			var n = kX(r);
			return !!n && e === n[0]
		}
		ey.exports = zX
	});
	var oy = s((Fj, iy) => {
		var ry = yi(),
			YX = P_(),
			QX = Za(),
			es = Ja(),
			$X = Se(),
			ny = ty(),
			ZX = "Expected a function",
			JX = 8,
			eV = 32,
			tV = 128,
			rV = 256;

		function nV(e) {
			return YX(function(t) {
				var r = t.length,
					n = r,
					i = ry.prototype.thru;
				for (e && t.reverse(); n--;) {
					var o = t[n];
					if (typeof o != "function") throw new TypeError(ZX);
					if (i && !a && es(o) == "wrapper") var a = new ry([], !0)
				}
				for (n = a ? n : r; ++n < r;) {
					o = t[n];
					var u = es(o),
						c = u == "wrapper" ? QX(o) : void 0;
					c && ny(c[0]) && c[1] == (tV | JX | eV | rV) && !c[4].length && c[9] == 1 ? a = a[es(c[0])].apply(a, c[3]) : a = o.length == 1 && ny(o) ? a[u]() : a.thru(o)
				}
				return function() {
					var f = arguments,
						g = f[0];
					if (a && f.length == 1 && $X(g)) return a.plant(g).value();
					for (var v = 0, h = r ? t[v].apply(this, f) : g; ++v < r;) h = t[v].call(this, h);
					return h
				}
			})
		}
		iy.exports = nV
	});
	var sy = s((Gj, ay) => {
		var iV = oy(),
			oV = iV();
		ay.exports = oV
	});
	var cy = s((Xj, uy) => {
		function aV(e, t, r) {
			return e === e && (r !== void 0 && (e = e <= r ? e : r), t !== void 0 && (e = e >= t ? e : t)), e
		}
		uy.exports = aV
	});
	var fy = s((Vj, ly) => {
		var sV = cy(),
			ts = ei();

		function uV(e, t, r) {
			return r === void 0 && (r = t, t = void 0), r !== void 0 && (r = ts(r), r = r === r ? r : 0), t !== void 0 && (t = ts(t), t = t === t ? t : 0), sV(ts(e), t, r)
		}
		ly.exports = uV
	});
	var Cy = s(Ri => {
		"use strict";
		var bi = nt().default;
		Object.defineProperty(Ri, "__esModule", {
			value: !0
		});
		Ri.default = void 0;
		var We = bi(Dr()),
			cV = bi(sy()),
			lV = bi(Zn()),
			fV = bi(fy()),
			Wt = Ge(),
			rs = as(),
			Oi = hi(),
			dV = Ut(),
			{
				MOUSE_CLICK: pV,
				MOUSE_SECOND_CLICK: vV,
				MOUSE_DOWN: EV,
				MOUSE_UP: hV,
				MOUSE_OVER: gV,
				MOUSE_OUT: _V,
				DROPDOWN_CLOSE: yV,
				DROPDOWN_OPEN: IV,
				SLIDER_ACTIVE: TV,
				SLIDER_INACTIVE: mV,
				TAB_ACTIVE: OV,
				TAB_INACTIVE: AV,
				NAVBAR_CLOSE: SV,
				NAVBAR_OPEN: bV,
				MOUSE_MOVE: RV,
				PAGE_SCROLL_DOWN: Iy,
				SCROLL_INTO_VIEW: Ty,
				SCROLL_OUT_OF_VIEW: wV,
				PAGE_SCROLL_UP: CV,
				SCROLLING_IN_VIEW: NV,
				PAGE_FINISH: my,
				ECOMMERCE_CART_CLOSE: qV,
				ECOMMERCE_CART_OPEN: xV,
				PAGE_START: Oy,
				PAGE_SCROLL: LV
			} = Wt.EventTypeConsts,
			ns = "COMPONENT_ACTIVE",
			Ay = "COMPONENT_INACTIVE",
			{
				COLON_DELIMITER: dy
			} = Wt.IX2EngineConstants,
			{
				getNamespacedParameterId: py
			} = dV.IX2VanillaUtils,
			Sy = e => t => typeof t == "object" && e(t) ? !0 : t,
			nn = Sy(({
				element: e,
				nativeEvent: t
			}) => e === t.target),
			PV = Sy(({
				element: e,
				nativeEvent: t
			}) => e.contains(t.target)),
			lt = (0, cV.default)([nn, PV]),
			by = (e, t) => {
				if (t) {
					let {
						ixData: r
					} = e.getState(), {
						events: n
					} = r, i = n[t];
					if (i && !MV[i.eventTypeId]) return i
				}
				return null
			},
			DV = ({
				store: e,
				event: t
			}) => {
				let {
					action: r
				} = t, {
					autoStopEventId: n
				} = r.config;
				return !!by(e, n)
			},
			Ve = ({
				store: e,
				event: t,
				element: r,
				eventStateKey: n
			}, i) => {
				let {
					action: o,
					id: a
				} = t, {
					actionListId: u,
					autoStopEventId: c
				} = o.config, f = by(e, c);
				return f && (0, rs.stopActionGroup)({
					store: e,
					eventId: c,
					eventTarget: r,
					eventStateKey: c + dy + n.split(dy)[1],
					actionListId: (0, lV.default)(f, "action.config.actionListId")
				}), (0, rs.stopActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: u
				}), (0, rs.startActionGroup)({
					store: e,
					eventId: a,
					eventTarget: r,
					eventStateKey: n,
					actionListId: u
				}), i
			},
			$e = (e, t) => (r, n) => e(r, n) === !0 ? t(r, n) : n,
			on = {
				handler: $e(lt, Ve)
			},
			Ry = (0, We.default)({}, on, {
				types: [ns, Ay].join(" ")
			}),
			is = [{
				target: window,
				types: "resize orientationchange",
				throttle: !0
			}, {
				target: document,
				types: "scroll wheel readystatechange IX2_PAGE_UPDATE",
				throttle: !0
			}],
			vy = "mouseover mouseout",
			os = {
				types: is
			},
			MV = {
				PAGE_START: Oy,
				PAGE_FINISH: my
			},
			rn = (() => {
				let e = window.pageXOffset !== void 0,
					r = document.compatMode === "CSS1Compat" ? document.documentElement : document.body;
				return () => ({
					scrollLeft: e ? window.pageXOffset : r.scrollLeft,
					scrollTop: e ? window.pageYOffset : r.scrollTop,
					stiffScrollTop: (0, fV.default)(e ? window.pageYOffset : r.scrollTop, 0, r.scrollHeight - window.innerHeight),
					scrollWidth: r.scrollWidth,
					scrollHeight: r.scrollHeight,
					clientWidth: r.clientWidth,
					clientHeight: r.clientHeight,
					innerWidth: window.innerWidth,
					innerHeight: window.innerHeight
				})
			})(),
			FV = (e, t) => !(e.left > t.right || e.right < t.left || e.top > t.bottom || e.bottom < t.top),
			GV = ({
				element: e,
				nativeEvent: t
			}) => {
				let {
					type: r,
					target: n,
					relatedTarget: i
				} = t, o = e.contains(n);
				if (r === "mouseover" && o) return !0;
				let a = e.contains(i);
				return !!(r === "mouseout" && o && a)
			},
			XV = e => {
				let {
					element: t,
					event: {
						config: r
					}
				} = e, {
					clientWidth: n,
					clientHeight: i
				} = rn(), o = r.scrollOffsetValue, c = r.scrollOffsetUnit === "PX" ? o : i * (o || 0) / 100;
				return FV(t.getBoundingClientRect(), {
					left: 0,
					top: c,
					right: n,
					bottom: i - c
				})
			},
			wy = e => (t, r) => {
				let {
					type: n
				} = t.nativeEvent, i = [ns, Ay].indexOf(n) !== -1 ? n === ns : r.isActive, o = (0, We.default)({}, r, {
					isActive: i
				});
				return (!r || o.isActive !== r.isActive) && e(t, o) || o
			},
			Ey = e => (t, r) => {
				let n = {
					elementHovered: GV(t)
				};
				return (r ? n.elementHovered !== r.elementHovered : n.elementHovered) && e(t, n) || n
			},
			VV = e => (t, r) => {
				let n = (0, We.default)({}, r, {
					elementVisible: XV(t)
				});
				return (r ? n.elementVisible !== r.elementVisible : n.elementVisible) && e(t, n) || n
			},
			hy = e => (t, r = {}) => {
				let {
					stiffScrollTop: n,
					scrollHeight: i,
					innerHeight: o
				} = rn(), {
					event: {
						config: a,
						eventTypeId: u
					}
				} = t, {
					scrollOffsetValue: c,
					scrollOffsetUnit: f
				} = a, g = f === "PX", v = i - o, h = Number((n / v).toFixed(2));
				if (r && r.percentTop === h) return r;
				let _ = (g ? c : o * (c || 0) / 100) / v,
					S, m, D = 0;
				r && (S = h > r.percentTop, m = r.scrollingDown !== S, D = m ? h : r.anchorTop);
				let O = u === Iy ? h >= D + _ : h <= D - _,
					b = (0, We.default)({}, r, {
						percentTop: h,
						inBounds: O,
						anchorTop: D,
						scrollingDown: S
					});
				return r && O && (m || b.inBounds !== r.inBounds) && e(t, b) || b
			},
			UV = (e, t) => e.left > t.left && e.left < t.right && e.top > t.top && e.top < t.bottom,
			WV = e => (t, r) => {
				let n = {
					finished: document.readyState === "complete"
				};
				return n.finished && !(r && r.finshed) && e(t), n
			},
			BV = e => (t, r) => {
				let n = {
					started: !0
				};
				return r || e(t), n
			},
			gy = e => (t, r = {
				clickCount: 0
			}) => {
				let n = {
					clickCount: r.clickCount % 2 + 1
				};
				return n.clickCount !== r.clickCount && e(t, n) || n
			},
			Ai = (e = !0) => (0, We.default)({}, Ry, {
				handler: $e(e ? lt : nn, wy((t, r) => r.isActive ? on.handler(t, r) : r))
			}),
			Si = (e = !0) => (0, We.default)({}, Ry, {
				handler: $e(e ? lt : nn, wy((t, r) => r.isActive ? r : on.handler(t, r)))
			}),
			_y = (0, We.default)({}, os, {
				handler: VV((e, t) => {
					let {
						elementVisible: r
					} = t, {
						event: n,
						store: i
					} = e, {
						ixData: o
					} = i.getState(), {
						events: a
					} = o;
					return !a[n.action.config.autoStopEventId] && t.triggered ? t : n.eventTypeId === Ty === r ? (Ve(e), (0, We.default)({}, t, {
						triggered: !0
					})) : t
				})
			}),
			yy = .05,
			HV = {
				[TV]: Ai(),
				[mV]: Si(),
				[IV]: Ai(),
				[yV]: Si(),
				[bV]: Ai(!1),
				[SV]: Si(!1),
				[OV]: Ai(),
				[AV]: Si(),
				[xV]: {
					types: "ecommerce-cart-open",
					handler: $e(lt, Ve)
				},
				[qV]: {
					types: "ecommerce-cart-close",
					handler: $e(lt, Ve)
				},
				[pV]: {
					types: "click",
					handler: $e(lt, gy((e, {
						clickCount: t
					}) => {
						DV(e) ? t === 1 && Ve(e) : Ve(e)
					}))
				},
				[vV]: {
					types: "click",
					handler: $e(lt, gy((e, {
						clickCount: t
					}) => {
						t === 2 && Ve(e)
					}))
				},
				[EV]: (0, We.default)({}, on, {
					types: "mousedown"
				}),
				[hV]: (0, We.default)({}, on, {
					types: "mouseup"
				}),
				[gV]: {
					types: vy,
					handler: $e(lt, Ey((e, t) => {
						t.elementHovered && Ve(e)
					}))
				},
				[_V]: {
					types: vy,
					handler: $e(lt, Ey((e, t) => {
						t.elementHovered || Ve(e)
					}))
				},
				[RV]: {
					types: "mousemove mouseout scroll",
					handler: ({
						store: e,
						element: t,
						eventConfig: r,
						nativeEvent: n,
						eventStateKey: i
					}, o = {
						clientX: 0,
						clientY: 0,
						pageX: 0,
						pageY: 0
					}) => {
						let {
							basedOn: a,
							selectedAxis: u,
							continuousParameterGroupId: c,
							reverse: f,
							restingState: g = 0
						} = r, {
							clientX: v = o.clientX,
							clientY: h = o.clientY,
							pageX: _ = o.pageX,
							pageY: S = o.pageY
						} = n, m = u === "X_AXIS", D = n.type === "mouseout", O = g / 100, b = c, I = !1;
						switch (a) {
							case Wt.EventBasedOn.VIEWPORT: {
								O = m ? Math.min(v, window.innerWidth) / window.innerWidth : Math.min(h, window.innerHeight) / window.innerHeight;
								break
							}
							case Wt.EventBasedOn.PAGE: {
								let {
									scrollLeft: N,
									scrollTop: q,
									scrollWidth: L,
									scrollHeight: F
								} = rn();
								O = m ? Math.min(N + _, L) / L : Math.min(q + S, F) / F;
								break
							}
							case Wt.EventBasedOn.ELEMENT:
							default: {
								b = py(i, c);
								let N = n.type.indexOf("mouse") === 0;
								if (N && lt({
										element: t,
										nativeEvent: n
									}) !== !0) break;
								let q = t.getBoundingClientRect(),
									{
										left: L,
										top: F,
										width: W,
										height: H
									} = q;
								if (!N && !UV({
										left: v,
										top: h
									}, q)) break;
								I = !0, O = m ? (v - L) / W : (h - F) / H;
								break
							}
						}
						return D && (O > 1 - yy || O < yy) && (O = Math.round(O)), (a !== Wt.EventBasedOn.ELEMENT || I || I !== o.elementHovered) && (O = f ? 1 - O : O, e.dispatch((0, Oi.parameterChanged)(b, O))), {
							elementHovered: I,
							clientX: v,
							clientY: h,
							pageX: _,
							pageY: S
						}
					}
				},
				[LV]: {
					types: is,
					handler: ({
						store: e,
						eventConfig: t
					}) => {
						let {
							continuousParameterGroupId: r,
							reverse: n
						} = t, {
							scrollTop: i,
							scrollHeight: o,
							clientHeight: a
						} = rn(), u = i / (o - a);
						u = n ? 1 - u : u, e.dispatch((0, Oi.parameterChanged)(r, u))
					}
				},
				[NV]: {
					types: is,
					handler: ({
						element: e,
						store: t,
						eventConfig: r,
						eventStateKey: n
					}, i = {
						scrollPercent: 0
					}) => {
						let {
							scrollLeft: o,
							scrollTop: a,
							scrollWidth: u,
							scrollHeight: c,
							clientHeight: f
						} = rn(), {
							basedOn: g,
							selectedAxis: v,
							continuousParameterGroupId: h,
							startsEntering: _,
							startsExiting: S,
							addEndOffset: m,
							addStartOffset: D,
							addOffsetValue: O = 0,
							endOffsetValue: b = 0
						} = r, I = v === "X_AXIS";
						if (g === Wt.EventBasedOn.VIEWPORT) {
							let N = I ? o / u : a / c;
							return N !== i.scrollPercent && t.dispatch((0, Oi.parameterChanged)(h, N)), {
								scrollPercent: N
							}
						} else {
							let N = py(n, h),
								q = e.getBoundingClientRect(),
								L = (D ? O : 0) / 100,
								F = (m ? b : 0) / 100;
							L = _ ? L : 1 - L, F = S ? F : 1 - F;
							let W = q.top + Math.min(q.height * L, f),
								Q = q.top + q.height * F - W,
								G = Math.min(f + Q, c),
								d = Math.min(Math.max(0, f - W), G) / G;
							return d !== i.scrollPercent && t.dispatch((0, Oi.parameterChanged)(N, d)), {
								scrollPercent: d
							}
						}
					}
				},
				[Ty]: _y,
				[wV]: _y,
				[Iy]: (0, We.default)({}, os, {
					handler: hy((e, t) => {
						t.scrollingDown && Ve(e)
					})
				}),
				[CV]: (0, We.default)({}, os, {
					handler: hy((e, t) => {
						t.scrollingDown || Ve(e)
					})
				}),
				[my]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: $e(nn, WV(Ve))
				},
				[Oy]: {
					types: "readystatechange IX2_PAGE_UPDATE",
					handler: $e(nn, BV(Ve))
				}
			};
		Ri.default = HV
	});
	var as = s(bt => {
		"use strict";
		var Je = nt().default,
			kV = jt().default;
		Object.defineProperty(bt, "__esModule", {
			value: !0
		});
		bt.observeRequests = IU;
		bt.startActionGroup = ps;
		bt.startEngine = qi;
		bt.stopActionGroup = ds;
		bt.stopAllActionGroups = Gy;
		bt.stopEngine = xi;
		var jV = Je(Dr()),
			KV = Je(jh()),
			zV = Je(wa()),
			St = Je(Zn()),
			YV = Je(fg()),
			QV = Je(Fg()),
			$V = Je(Xg()),
			ZV = Je(Ug()),
			an = Je(Kg()),
			JV = Je(e_()),
			Ze = Ge(),
			xy = Ut(),
			ge = hi(),
			me = kV(o_()),
			eU = Je(Cy()),
			tU = ["store", "computedStyle"],
			rU = Object.keys(Ze.QuickEffectIds),
			ss = e => rU.includes(e),
			{
				COLON_DELIMITER: us,
				BOUNDARY_SELECTOR: wi,
				HTML_ELEMENT: Ly,
				RENDER_GENERAL: nU,
				W_MOD_IX: Ny
			} = Ze.IX2EngineConstants,
			{
				getAffectedElements: Ci,
				getElementId: iU,
				getDestinationValues: cs,
				observeStore: Bt,
				getInstanceId: oU,
				renderHTMLElement: aU,
				clearAllStyles: Py,
				getMaxDurationItemIndex: sU,
				getComputedStyle: uU,
				getInstanceOrigin: cU,
				reduceListToGroup: lU,
				shouldNamespaceEventParameter: fU,
				getNamespacedParameterId: dU,
				shouldAllowMediaQuery: Ni,
				cleanupHTMLElement: pU,
				stringifyTarget: vU,
				mediaQueriesEqual: EU,
				shallowEqual: hU
			} = xy.IX2VanillaUtils,
			{
				isPluginType: ls,
				createPluginInstance: fs,
				getPluginDuration: gU
			} = xy.IX2VanillaPlugins,
			qy = navigator.userAgent,
			_U = qy.match(/iPad/i) || qy.match(/iPhone/),
			yU = 12;

		function IU(e) {
			Bt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.preview,
				onChange: OU
			}), Bt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.playback,
				onChange: AU
			}), Bt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.stop,
				onChange: SU
			}), Bt({
				store: e,
				select: ({
					ixRequest: t
				}) => t.clear,
				onChange: bU
			})
		}

		function TU(e) {
			Bt({
				store: e,
				select: ({
					ixSession: t
				}) => t.mediaQueryKey,
				onChange: () => {
					xi(e), Py({
						store: e,
						elementApi: me
					}), qi({
						store: e,
						allowEvents: !0
					}), Dy()
				}
			})
		}

		function mU(e, t) {
			let r = Bt({
				store: e,
				select: ({
					ixSession: n
				}) => n.tick,
				onChange: n => {
					t(n), r()
				}
			})
		}

		function OU({
			rawData: e,
			defer: t
		}, r) {
			let n = () => {
				qi({
					store: r,
					rawData: e,
					allowEvents: !0
				}), Dy()
			};
			t ? setTimeout(n, 0) : n()
		}

		function Dy() {
			document.dispatchEvent(new CustomEvent("IX2_PAGE_UPDATE"))
		}

		function AU(e, t) {
			let {
				actionTypeId: r,
				actionListId: n,
				actionItemId: i,
				eventId: o,
				allowEvents: a,
				immediate: u,
				testManual: c,
				verbose: f = !0
			} = e, {
				rawData: g
			} = e;
			if (n && i && g && u) {
				let v = g.actionLists[n];
				v && (g = lU({
					actionList: v,
					actionItemId: i,
					rawData: g
				}))
			}
			if (qi({
					store: t,
					rawData: g,
					allowEvents: a,
					testManual: c
				}), n && r === Ze.ActionTypeConsts.GENERAL_START_ACTION || ss(r)) {
				ds({
					store: t,
					actionListId: n
				}), Fy({
					store: t,
					actionListId: n,
					eventId: o
				});
				let v = ps({
					store: t,
					eventId: o,
					actionListId: n,
					immediate: u,
					verbose: f
				});
				f && v && t.dispatch((0, ge.actionListPlaybackChanged)({
					actionListId: n,
					isPlaying: !u
				}))
			}
		}

		function SU({
			actionListId: e
		}, t) {
			e ? ds({
				store: t,
				actionListId: e
			}) : Gy({
				store: t
			}), xi(t)
		}

		function bU(e, t) {
			xi(t), Py({
				store: t,
				elementApi: me
			})
		}

		function qi({
			store: e,
			rawData: t,
			allowEvents: r,
			testManual: n
		}) {
			let {
				ixSession: i
			} = e.getState();
			t && e.dispatch((0, ge.rawDataImported)(t)), i.active || (e.dispatch((0, ge.sessionInitialized)({
				hasBoundaryNodes: !!document.querySelector(wi),
				reducedMotion: document.body.hasAttribute("data-wf-ix-vacation") && window.matchMedia("(prefers-reduced-motion)").matches
			})), r && (xU(e), RU(), e.getState().ixSession.hasDefinedMediaQueries && TU(e)), e.dispatch((0, ge.sessionStarted)()), wU(e, n))
		}

		function RU() {
			let {
				documentElement: e
			} = document;
			e.className.indexOf(Ny) === -1 && (e.className += ` ${Ny}`)
		}

		function wU(e, t) {
			let r = n => {
				let {
					ixSession: i,
					ixParameters: o
				} = e.getState();
				i.active && (e.dispatch((0, ge.animationFrameChanged)(n, o)), t ? mU(e, r) : requestAnimationFrame(r))
			};
			r(window.performance.now())
		}

		function xi(e) {
			let {
				ixSession: t
			} = e.getState();
			if (t.active) {
				let {
					eventListeners: r
				} = t;
				r.forEach(CU), e.dispatch((0, ge.sessionStopped)())
			}
		}

		function CU({
			target: e,
			listenerParams: t
		}) {
			e.removeEventListener.apply(e, t)
		}

		function NU({
			store: e,
			eventStateKey: t,
			eventTarget: r,
			eventId: n,
			eventConfig: i,
			actionListId: o,
			parameterGroup: a,
			smoothing: u,
			restingValue: c
		}) {
			let {
				ixData: f,
				ixSession: g
			} = e.getState(), {
				events: v
			} = f, h = v[n], {
				eventTypeId: _
			} = h, S = {}, m = {}, D = [], {
				continuousActionGroups: O
			} = a, {
				id: b
			} = a;
			fU(_, i) && (b = dU(t, b));
			let I = g.hasBoundaryNodes && r ? me.getClosestElement(r, wi) : null;
			O.forEach(N => {
				let {
					keyframe: q,
					actionItems: L
				} = N;
				L.forEach(F => {
					let {
						actionTypeId: W
					} = F, {
						target: H
					} = F.config;
					if (!H) return;
					let Q = H.boundaryMode ? I : null,
						G = vU(H) + us + W;
					if (m[G] = qU(m[G], q, F), !S[G]) {
						S[G] = !0;
						let {
							config: R
						} = F;
						Ci({
							config: R,
							event: h,
							eventTarget: r,
							elementRoot: Q,
							elementApi: me
						}).forEach(d => {
							D.push({
								element: d,
								key: G
							})
						})
					}
				})
			}), D.forEach(({
				element: N,
				key: q
			}) => {
				let L = m[q],
					F = (0, St.default)(L, "[0].actionItems[0]", {}),
					{
						actionTypeId: W
					} = F,
					H = ls(W) ? fs(W)(N, F) : null,
					Q = cs({
						element: N,
						actionItem: F,
						elementApi: me
					}, H);
				vs({
					store: e,
					element: N,
					eventId: n,
					actionListId: o,
					actionItem: F,
					destination: Q,
					continuous: !0,
					parameterId: b,
					actionGroups: L,
					smoothing: u,
					restingValue: c,
					pluginInstance: H
				})
			})
		}

		function qU(e = [], t, r) {
			let n = [...e],
				i;
			return n.some((o, a) => o.keyframe === t ? (i = a, !0) : !1), i == null && (i = n.length, n.push({
				keyframe: t,
				actionItems: []
			})), n[i].actionItems.push(r), n
		}

		function xU(e) {
			let {
				ixData: t
			} = e.getState(), {
				eventTypeMap: r
			} = t;
			My(e), (0, an.default)(r, (i, o) => {
				let a = eU.default[o];
				if (!a) {
					console.warn(`IX2 event type not configured: ${o}`);
					return
				}
				GU({
					logic: a,
					store: e,
					events: i
				})
			});
			let {
				ixSession: n
			} = e.getState();
			n.eventListeners.length && PU(e)
		}
		var LU = ["resize", "orientationchange"];

		function PU(e) {
			let t = () => {
				My(e)
			};
			LU.forEach(r => {
				window.addEventListener(r, t), e.dispatch((0, ge.eventListenerAdded)(window, [r, t]))
			}), t()
		}

		function My(e) {
			let {
				ixSession: t,
				ixData: r
			} = e.getState(), n = window.innerWidth;
			if (n !== t.viewportWidth) {
				let {
					mediaQueries: i
				} = r;
				e.dispatch((0, ge.viewportWidthChanged)({
					width: n,
					mediaQueries: i
				}))
			}
		}
		var DU = (e, t) => (0, QV.default)((0, ZV.default)(e, t), $V.default),
			MU = (e, t) => {
				(0, an.default)(e, (r, n) => {
					r.forEach((i, o) => {
						let a = n + us + o;
						t(i, n, a)
					})
				})
			},
			FU = e => {
				let t = {
					target: e.target,
					targets: e.targets
				};
				return Ci({
					config: t,
					elementApi: me
				})
			};

		function GU({
			logic: e,
			store: t,
			events: r
		}) {
			XU(r);
			let {
				types: n,
				handler: i
			} = e, {
				ixData: o
			} = t.getState(), {
				actionLists: a
			} = o, u = DU(r, FU);
			if (!(0, YV.default)(u)) return;
			(0, an.default)(u, (v, h) => {
				let _ = r[h],
					{
						action: S,
						id: m,
						mediaQueries: D = o.mediaQueryKeys
					} = _,
					{
						actionListId: O
					} = S.config;
				EU(D, o.mediaQueryKeys) || t.dispatch((0, ge.mediaQueriesDefined)()), S.actionTypeId === Ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION && (Array.isArray(_.config) ? _.config : [_.config]).forEach(I => {
					let {
						continuousParameterGroupId: N
					} = I, q = (0, St.default)(a, `${O}.continuousParameterGroups`, []), L = (0, zV.default)(q, ({
						id: H
					}) => H === N), F = (I.smoothing || 0) / 100, W = (I.restingState || 0) / 100;
					L && v.forEach((H, Q) => {
						let G = m + us + Q;
						NU({
							store: t,
							eventStateKey: G,
							eventTarget: H,
							eventId: m,
							eventConfig: I,
							actionListId: O,
							parameterGroup: L,
							smoothing: F,
							restingValue: W
						})
					})
				}), (S.actionTypeId === Ze.ActionTypeConsts.GENERAL_START_ACTION || ss(S.actionTypeId)) && Fy({
					store: t,
					actionListId: O,
					eventId: m
				})
			});
			let c = v => {
					let {
						ixSession: h
					} = t.getState();
					MU(u, (_, S, m) => {
						let D = r[S],
							O = h.eventState[m],
							{
								action: b,
								mediaQueries: I = o.mediaQueryKeys
							} = D;
						if (!Ni(I, h.mediaQueryKey)) return;
						let N = (q = {}) => {
							let L = i({
								store: t,
								element: _,
								event: D,
								eventConfig: q,
								nativeEvent: v,
								eventStateKey: m
							}, O);
							hU(L, O) || t.dispatch((0, ge.eventStateChanged)(m, L))
						};
						b.actionTypeId === Ze.ActionTypeConsts.GENERAL_CONTINUOUS_ACTION ? (Array.isArray(D.config) ? D.config : [D.config]).forEach(N) : N()
					})
				},
				f = (0, JV.default)(c, yU),
				g = ({
					target: v = document,
					types: h,
					throttle: _
				}) => {
					h.split(" ").filter(Boolean).forEach(S => {
						let m = _ ? f : c;
						v.addEventListener(S, m), t.dispatch((0, ge.eventListenerAdded)(v, [S, m]))
					})
				};
			Array.isArray(n) ? n.forEach(g) : typeof n == "string" && g(e)
		}

		function XU(e) {
			if (!_U) return;
			let t = {},
				r = "";
			for (let n in e) {
				let {
					eventTypeId: i,
					target: o
				} = e[n], a = me.getQuerySelector(o);
				t[a] || (i === Ze.EventTypeConsts.MOUSE_CLICK || i === Ze.EventTypeConsts.MOUSE_SECOND_CLICK) && (t[a] = !0, r += a + "{cursor: pointer;touch-action: manipulation;}")
			}
			if (r) {
				let n = document.createElement("style");
				n.textContent = r, document.body.appendChild(n)
			}
		}

		function Fy({
			store: e,
			actionListId: t,
			eventId: r
		}) {
			let {
				ixData: n,
				ixSession: i
			} = e.getState(), {
				actionLists: o,
				events: a
			} = n, u = a[r], c = o[t];
			if (c && c.useFirstGroupAsInitialState) {
				let f = (0, St.default)(c, "actionItemGroups[0].actionItems", []),
					g = (0, St.default)(u, "mediaQueries", n.mediaQueryKeys);
				if (!Ni(g, i.mediaQueryKey)) return;
				f.forEach(v => {
					var h;
					let {
						config: _,
						actionTypeId: S
					} = v, m = (_ == null || (h = _.target) === null || h === void 0 ? void 0 : h.useEventTarget) === !0 ? {
						target: u.target,
						targets: u.targets
					} : _, D = Ci({
						config: m,
						event: u,
						elementApi: me
					}), O = ls(S);
					D.forEach(b => {
						let I = O ? fs(S)(b, v) : null;
						vs({
							destination: cs({
								element: b,
								actionItem: v,
								elementApi: me
							}, I),
							immediate: !0,
							store: e,
							element: b,
							eventId: r,
							actionItem: v,
							actionListId: t,
							pluginInstance: I
						})
					})
				})
			}
		}

		function Gy({
			store: e
		}) {
			let {
				ixInstances: t
			} = e.getState();
			(0, an.default)(t, r => {
				if (!r.continuous) {
					let {
						actionListId: n,
						verbose: i
					} = r;
					Es(r, e), i && e.dispatch((0, ge.actionListPlaybackChanged)({
						actionListId: n,
						isPlaying: !1
					}))
				}
			})
		}

		function ds({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: i
		}) {
			let {
				ixInstances: o,
				ixSession: a
			} = e.getState(), u = a.hasBoundaryNodes && r ? me.getClosestElement(r, wi) : null;
			(0, an.default)(o, c => {
				let f = (0, St.default)(c, "actionItem.config.target.boundaryMode"),
					g = n ? c.eventStateKey === n : !0;
				if (c.actionListId === i && c.eventId === t && g) {
					if (u && f && !me.elementContains(u, c.element)) return;
					Es(c, e), c.verbose && e.dispatch((0, ge.actionListPlaybackChanged)({
						actionListId: i,
						isPlaying: !1
					}))
				}
			})
		}

		function ps({
			store: e,
			eventId: t,
			eventTarget: r,
			eventStateKey: n,
			actionListId: i,
			groupIndex: o = 0,
			immediate: a,
			verbose: u
		}) {
			var c;
			let {
				ixData: f,
				ixSession: g
			} = e.getState(), {
				events: v
			} = f, h = v[t] || {}, {
				mediaQueries: _ = f.mediaQueryKeys
			} = h, S = (0, St.default)(f, `actionLists.${i}`, {}), {
				actionItemGroups: m,
				useFirstGroupAsInitialState: D
			} = S;
			if (!m || !m.length) return !1;
			o >= m.length && (0, St.default)(h, "config.loop") && (o = 0), o === 0 && D && o++;
			let b = (o === 0 || o === 1 && D) && ss((c = h.action) === null || c === void 0 ? void 0 : c.actionTypeId) ? h.config.delay : void 0,
				I = (0, St.default)(m, [o, "actionItems"], []);
			if (!I.length || !Ni(_, g.mediaQueryKey)) return !1;
			let N = g.hasBoundaryNodes && r ? me.getClosestElement(r, wi) : null,
				q = sU(I),
				L = !1;
			return I.forEach((F, W) => {
				let {
					config: H,
					actionTypeId: Q
				} = F, G = ls(Q), {
					target: R
				} = H;
				if (!R) return;
				let d = R.boundaryMode ? N : null;
				Ci({
					config: H,
					event: h,
					eventTarget: r,
					elementRoot: d,
					elementApi: me
				}).forEach((w, M) => {
					let B = G ? fs(Q)(w, F) : null,
						K = G ? gU(Q)(w, F) : null;
					L = !0;
					let ne = q === W && M === 0,
						pe = uU({
							element: w,
							actionItem: F
						}),
						Ce = cs({
							element: w,
							actionItem: F,
							elementApi: me
						}, B);
					vs({
						store: e,
						element: w,
						actionItem: F,
						eventId: t,
						eventTarget: r,
						eventStateKey: n,
						actionListId: i,
						groupIndex: o,
						isCarrier: ne,
						computedStyle: pe,
						destination: Ce,
						immediate: a,
						verbose: u,
						pluginInstance: B,
						pluginDuration: K,
						instanceDelay: b
					})
				})
			}), L
		}

		function vs(e) {
			var t;
			let {
				store: r,
				computedStyle: n
			} = e, i = (0, KV.default)(e, tU), {
				element: o,
				actionItem: a,
				immediate: u,
				pluginInstance: c,
				continuous: f,
				restingValue: g,
				eventId: v
			} = i, h = !f, _ = oU(), {
				ixElements: S,
				ixSession: m,
				ixData: D
			} = r.getState(), O = iU(S, o), {
				refState: b
			} = S[O] || {}, I = me.getRefType(o), N = m.reducedMotion && Ze.ReducedMotionTypes[a.actionTypeId], q;
			if (N && f) switch ((t = D.events[v]) === null || t === void 0 ? void 0 : t.eventTypeId) {
				case Ze.EventTypeConsts.MOUSE_MOVE:
				case Ze.EventTypeConsts.MOUSE_MOVE_IN_VIEWPORT:
					q = g;
					break;
				default:
					q = .5;
					break
			}
			let L = cU(o, b, n, a, me, c);
			if (r.dispatch((0, ge.instanceAdded)((0, jV.default)({
					instanceId: _,
					elementId: O,
					origin: L,
					refType: I,
					skipMotion: N,
					skipToValue: q
				}, i))), Xy(document.body, "ix2-animation-started", _), u) {
				VU(r, _);
				return
			}
			Bt({
				store: r,
				select: ({
					ixInstances: F
				}) => F[_],
				onChange: Vy
			}), h && r.dispatch((0, ge.instanceStarted)(_, m.tick))
		}

		function Es(e, t) {
			Xy(document.body, "ix2-animation-stopping", {
				instanceId: e.id,
				state: t.getState()
			});
			let {
				elementId: r,
				actionItem: n
			} = e, {
				ixElements: i
			} = t.getState(), {
				ref: o,
				refType: a
			} = i[r] || {};
			a === Ly && pU(o, n, me), t.dispatch((0, ge.instanceRemoved)(e.id))
		}

		function Xy(e, t, r) {
			let n = document.createEvent("CustomEvent");
			n.initCustomEvent(t, !0, !0, r), e.dispatchEvent(n)
		}

		function VU(e, t) {
			let {
				ixParameters: r
			} = e.getState();
			e.dispatch((0, ge.instanceStarted)(t, 0)), e.dispatch((0, ge.animationFrameChanged)(performance.now(), r));
			let {
				ixInstances: n
			} = e.getState();
			Vy(n[t], e)
		}

		function Vy(e, t) {
			let {
				active: r,
				continuous: n,
				complete: i,
				elementId: o,
				actionItem: a,
				actionTypeId: u,
				renderType: c,
				current: f,
				groupIndex: g,
				eventId: v,
				eventTarget: h,
				eventStateKey: _,
				actionListId: S,
				isCarrier: m,
				styleProp: D,
				verbose: O,
				pluginInstance: b
			} = e, {
				ixData: I,
				ixSession: N
			} = t.getState(), {
				events: q
			} = I, L = q[v] || {}, {
				mediaQueries: F = I.mediaQueryKeys
			} = L;
			if (Ni(F, N.mediaQueryKey) && (n || r || i)) {
				if (f || c === nU && i) {
					t.dispatch((0, ge.elementStateChanged)(o, u, f, a));
					let {
						ixElements: W
					} = t.getState(), {
						ref: H,
						refType: Q,
						refState: G
					} = W[o] || {}, R = G && G[u];
					switch (Q) {
						case Ly: {
							aU(H, G, R, v, a, D, me, c, b);
							break
						}
					}
				}
				if (i) {
					if (m) {
						let W = ps({
							store: t,
							eventId: v,
							eventTarget: h,
							eventStateKey: _,
							actionListId: S,
							groupIndex: g + 1,
							verbose: O
						});
						O && !W && t.dispatch((0, ge.actionListPlaybackChanged)({
							actionListId: S,
							isPlaying: !1
						}))
					}
					Es(e, t)
				}
			}
		}
	});
	var Wy = s(Et => {
		"use strict";
		var UU = jt().default,
			WU = nt().default;
		Object.defineProperty(Et, "__esModule", {
			value: !0
		});
		Et.actions = void 0;
		Et.destroy = Uy;
		Et.init = KU;
		Et.setEnv = jU;
		Et.store = void 0;
		Cl();
		var BU = Ko(),
			HU = WU(kh()),
			hs = as(),
			kU = UU(hi());
		Et.actions = kU;
		var Li = (0, BU.createStore)(HU.default);
		Et.store = Li;

		function jU(e) {
			e() && (0, hs.observeRequests)(Li)
		}

		function KU(e) {
			Uy(), (0, hs.startEngine)({
				store: Li,
				rawData: e,
				allowEvents: !0
			})
		}

		function Uy() {
			(0, hs.stopEngine)(Li)
		}
	});
	var jy = s((Hj, ky) => {
		var By = Ke(),
			Hy = Wy();
		Hy.setEnv(By.env);
		By.define("ix2", ky.exports = function() {
			return Hy
		})
	});
	var zy = s((kj, Ky) => {
		var Ir = Ke();
		Ir.define("links", Ky.exports = function(e, t) {
			var r = {},
				n = e(window),
				i, o = Ir.env(),
				a = window.location,
				u = document.createElement("a"),
				c = "w--current",
				f = /index\.(html|php)$/,
				g = /\/$/,
				v, h;
			r.ready = r.design = r.preview = _;

			function _() {
				i = o && Ir.env("design"), h = Ir.env("slug") || a.pathname || "", Ir.scroll.off(m), v = [];
				for (var O = document.links, b = 0; b < O.length; ++b) S(O[b]);
				v.length && (Ir.scroll.on(m), m())
			}

			function S(O) {
				var b = i && O.getAttribute("href-disabled") || O.getAttribute("href");
				if (u.href = b, !(b.indexOf(":") >= 0)) {
					var I = e(O);
					if (u.hash.length > 1 && u.host + u.pathname === a.host + a.pathname) {
						if (!/^#[a-zA-Z0-9\-\_]+$/.test(u.hash)) return;
						var N = e(u.hash);
						N.length && v.push({
							link: I,
							sec: N,
							active: !1
						});
						return
					}
					if (!(b === "#" || b === "")) {
						var q = u.href === a.href || b === h || f.test(b) && g.test(h);
						D(I, c, q)
					}
				}
			}

			function m() {
				var O = n.scrollTop(),
					b = n.height();
				t.each(v, function(I) {
					var N = I.link,
						q = I.sec,
						L = q.offset().top,
						F = q.outerHeight(),
						W = b * .5,
						H = q.is(":visible") && L + F - W >= O && L + W <= O + b;
					I.active !== H && (I.active = H, D(N, c, H))
				})
			}

			function D(O, b, I) {
				var N = O.hasClass(b);
				I && N || !I && !N || (I ? O.addClass(b) : O.removeClass(b))
			}
			return r
		})
	});
	var Qy = s((jj, Yy) => {
		var Pi = Ke();
		Pi.define("scroll", Yy.exports = function(e) {
			var t = {
					WF_CLICK_EMPTY: "click.wf-empty-link",
					WF_CLICK_SCROLL: "click.wf-scroll"
				},
				r = window.location,
				n = S() ? null : window.history,
				i = e(window),
				o = e(document),
				a = e(document.body),
				u = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || function(R) {
					window.setTimeout(R, 15)
				},
				c = Pi.env("editor") ? ".w-editor-body" : "body",
				f = "header, " + c + " > .header, " + c + " > .w-nav:not([data-no-scroll])",
				g = 'a[href="#"]',
				v = 'a[href*="#"]:not(.w-tab-link):not(' + g + ")",
				h = '.wf-force-outline-none[tabindex="-1"]:focus{outline:none;}',
				_ = document.createElement("style");
			_.appendChild(document.createTextNode(h));

			function S() {
				try {
					return !!window.frameElement
				} catch {
					return !0
				}
			}
			var m = /^#[a-zA-Z0-9][\w:.-]*$/;

			function D(R) {
				return m.test(R.hash) && R.host + R.pathname === r.host + r.pathname
			}
			let O = typeof window.matchMedia == "function" && window.matchMedia("(prefers-reduced-motion: reduce)");

			function b() {
				return document.body.getAttribute("data-wf-scroll-motion") === "none" || O.matches
			}

			function I(R, d) {
				var P;
				switch (d) {
					case "add":
						P = R.attr("tabindex"), P ? R.attr("data-wf-tabindex-swap", P) : R.attr("tabindex", "-1");
						break;
					case "remove":
						P = R.attr("data-wf-tabindex-swap"), P ? (R.attr("tabindex", P), R.removeAttr("data-wf-tabindex-swap")) : R.removeAttr("tabindex");
						break
				}
				R.toggleClass("wf-force-outline-none", d === "add")
			}

			function N(R) {
				var d = R.currentTarget;
				if (!(Pi.env("design") || window.$.mobile && /(?:^|\s)ui-link(?:$|\s)/.test(d.className))) {
					var P = D(d) ? d.hash : "";
					if (P !== "") {
						var w = e(P);
						w.length && (R && (R.preventDefault(), R.stopPropagation()), q(P, R), window.setTimeout(function() {
							L(w, function() {
								I(w, "add"), w.get(0).focus({
									preventScroll: !0
								}), I(w, "remove")
							})
						}, R ? 0 : 300))
					}
				}
			}

			function q(R) {
				if (r.hash !== R && n && n.pushState && !(Pi.env.chrome && r.protocol === "file:")) {
					var d = n.state && n.state.hash;
					d !== R && n.pushState({
						hash: R
					}, "", R)
				}
			}

			function L(R, d) {
				var P = i.scrollTop(),
					w = F(R);
				if (P !== w) {
					var M = W(R, P, w),
						B = Date.now(),
						K = function() {
							var ne = Date.now() - B;
							window.scroll(0, H(P, w, ne, M)), ne <= M ? u(K) : typeof d == "function" && d()
						};
					u(K)
				}
			}

			function F(R) {
				var d = e(f),
					P = d.css("position") === "fixed" ? d.outerHeight() : 0,
					w = R.offset().top - P;
				if (R.data("scroll") === "mid") {
					var M = i.height() - P,
						B = R.outerHeight();
					B < M && (w -= Math.round((M - B) / 2))
				}
				return w
			}

			function W(R, d, P) {
				if (b()) return 0;
				var w = 1;
				return a.add(R).each(function(M, B) {
					var K = parseFloat(B.getAttribute("data-scroll-time"));
					!isNaN(K) && K >= 0 && (w = K)
				}), (472.143 * Math.log(Math.abs(d - P) + 125) - 2e3) * w
			}

			function H(R, d, P, w) {
				return P > w ? d : R + (d - R) * Q(P / w)
			}

			function Q(R) {
				return R < .5 ? 4 * R * R * R : (R - 1) * (2 * R - 2) * (2 * R - 2) + 1
			}

			function G() {
				var {
					WF_CLICK_EMPTY: R,
					WF_CLICK_SCROLL: d
				} = t;
				o.on(d, v, N), o.on(R, g, function(P) {
					P.preventDefault()
				}), document.head.insertBefore(_, document.head.firstChild)
			}
			return {
				ready: G
			}
		})
	});
	var Zy = s((Kj, $y) => {
		var zU = Ke();
		zU.define("touch", $y.exports = function(e) {
			var t = {},
				r = window.getSelection;
			e.event.special.tap = {
				bindType: "click",
				delegateType: "click"
			}, t.init = function(o) {
				return o = typeof o == "string" ? e(o).get(0) : o, o ? new n(o) : null
			};

			function n(o) {
				var a = !1,
					u = !1,
					c = Math.min(Math.round(window.innerWidth * .04), 40),
					f, g;
				o.addEventListener("touchstart", v, !1), o.addEventListener("touchmove", h, !1), o.addEventListener("touchend", _, !1), o.addEventListener("touchcancel", S, !1), o.addEventListener("mousedown", v, !1), o.addEventListener("mousemove", h, !1), o.addEventListener("mouseup", _, !1), o.addEventListener("mouseout", S, !1);

				function v(D) {
					var O = D.touches;
					O && O.length > 1 || (a = !0, O ? (u = !0, f = O[0].clientX) : f = D.clientX, g = f)
				}

				function h(D) {
					if (a) {
						if (u && D.type === "mousemove") {
							D.preventDefault(), D.stopPropagation();
							return
						}
						var O = D.touches,
							b = O ? O[0].clientX : D.clientX,
							I = b - g;
						g = b, Math.abs(I) > c && r && String(r()) === "" && (i("swipe", D, {
							direction: I > 0 ? "right" : "left"
						}), S())
					}
				}

				function _(D) {
					if (a && (a = !1, u && D.type === "mouseup")) {
						D.preventDefault(), D.stopPropagation(), u = !1;
						return
					}
				}

				function S() {
					a = !1
				}

				function m() {
					o.removeEventListener("touchstart", v, !1), o.removeEventListener("touchmove", h, !1), o.removeEventListener("touchend", _, !1), o.removeEventListener("touchcancel", S, !1), o.removeEventListener("mousedown", v, !1), o.removeEventListener("mousemove", h, !1), o.removeEventListener("mouseup", _, !1), o.removeEventListener("mouseout", S, !1), o = null
				}
				this.destroy = m
			}

			function i(o, a, u) {
				var c = e.Event(o, {
					originalEvent: a
				});
				e(a.target).trigger(c, u)
			}
			return t.instance = t.init(document), t
		})
	});
	var eI = s((zj, Jy) => {
		var Rt = Ke(),
			YU = pn(),
			we = {
				ARROW_LEFT: 37,
				ARROW_UP: 38,
				ARROW_RIGHT: 39,
				ARROW_DOWN: 40,
				ESCAPE: 27,
				SPACE: 32,
				ENTER: 13,
				HOME: 36,
				END: 35
			};
		Rt.define("navbar", Jy.exports = function(e, t) {
			var r = {},
				n = e.tram,
				i = e(window),
				o = e(document),
				a = t.debounce,
				u, c, f, g, v = Rt.env(),
				h = '<div class="w-nav-overlay" data-wf-ignore />',
				_ = ".w-nav",
				S = "w--open",
				m = "w--nav-dropdown-open",
				D = "w--nav-dropdown-toggle-open",
				O = "w--nav-dropdown-list-open",
				b = "w--nav-link-open",
				I = YU.triggers,
				N = e();
			r.ready = r.design = r.preview = q, r.destroy = function() {
				N = e(), L(), c && c.length && c.each(Q)
			};

			function q() {
				f = v && Rt.env("design"), g = Rt.env("editor"), u = e(document.body), c = o.find(_), c.length && (c.each(H), L(), F())
			}

			function L() {
				Rt.resize.off(W)
			}

			function F() {
				Rt.resize.on(W)
			}

			function W() {
				c.each(Y)
			}

			function H(p, V) {
				var k = e(V),
					U = e.data(V, _);
				U || (U = e.data(V, _, {
					open: !1,
					el: k,
					config: {},
					selectedIdx: -1
				})), U.menu = k.find(".w-nav-menu"), U.links = U.menu.find(".w-nav-link"), U.dropdowns = U.menu.find(".w-dropdown"), U.dropdownToggle = U.menu.find(".w-dropdown-toggle"), U.dropdownList = U.menu.find(".w-dropdown-list"), U.button = k.find(".w-nav-button"), U.container = k.find(".w-container"), U.overlayContainerId = "w-nav-overlay-" + p, U.outside = Ce(U);
				var de = k.find(".w-nav-brand");
				de && de.attr("href") === "/" && de.attr("aria-label") == null && de.attr("aria-label", "home"), U.button.attr("style", "-webkit-user-select: text;"), U.button.attr("aria-label") == null && U.button.attr("aria-label", "menu"), U.button.attr("role", "button"), U.button.attr("tabindex", "0"), U.button.attr("aria-controls", U.overlayContainerId), U.button.attr("aria-haspopup", "menu"), U.button.attr("aria-expanded", "false"), U.el.off(_), U.button.off(_), U.menu.off(_), d(U), f ? (G(U), U.el.on("setting" + _, P(U))) : (R(U), U.button.on("click" + _, ne(U)), U.menu.on("click" + _, "a", pe(U)), U.button.on("keydown" + _, w(U)), U.el.on("keydown" + _, M(U))), Y(p, V)
			}

			function Q(p, V) {
				var k = e.data(V, _);
				k && (G(k), e.removeData(V, _))
			}

			function G(p) {
				p.overlay && (le(p, !0), p.overlay.remove(), p.overlay = null)
			}

			function R(p) {
				p.overlay || (p.overlay = e(h).appendTo(p.el), p.overlay.attr("id", p.overlayContainerId), p.parent = p.menu.parent(), le(p, !0))
			}

			function d(p) {
				var V = {},
					k = p.config || {},
					U = V.animation = p.el.attr("data-animation") || "default";
				V.animOver = /^over/.test(U), V.animDirect = /left$/.test(U) ? -1 : 1, k.animation !== U && p.open && t.defer(K, p), V.easing = p.el.attr("data-easing") || "ease", V.easing2 = p.el.attr("data-easing2") || "ease";
				var de = p.el.attr("data-duration");
				V.duration = de != null ? Number(de) : 400, V.docHeight = p.el.attr("data-doc-height"), p.config = V
			}

			function P(p) {
				return function(V, k) {
					k = k || {};
					var U = i.width();
					d(p), k.open === !0 && ht(p, !0), k.open === !1 && le(p, !0), p.open && t.defer(function() {
						U !== i.width() && K(p)
					})
				}
			}

			function w(p) {
				return function(V) {
					switch (V.keyCode) {
						case we.SPACE:
						case we.ENTER:
							return ne(p)(), V.preventDefault(), V.stopPropagation();
						case we.ESCAPE:
							return le(p), V.preventDefault(), V.stopPropagation();
						case we.ARROW_RIGHT:
						case we.ARROW_DOWN:
						case we.HOME:
						case we.END:
							return p.open ? (V.keyCode === we.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0, B(p), V.preventDefault(), V.stopPropagation()) : (V.preventDefault(), V.stopPropagation())
					}
				}
			}

			function M(p) {
				return function(V) {
					if (p.open) switch (p.selectedIdx = p.links.index(document.activeElement), V.keyCode) {
						case we.HOME:
						case we.END:
							return V.keyCode === we.END ? p.selectedIdx = p.links.length - 1 : p.selectedIdx = 0, B(p), V.preventDefault(), V.stopPropagation();
						case we.ESCAPE:
							return le(p), p.button.focus(), V.preventDefault(), V.stopPropagation();
						case we.ARROW_LEFT:
						case we.ARROW_UP:
							return p.selectedIdx = Math.max(-1, p.selectedIdx - 1), B(p), V.preventDefault(), V.stopPropagation();
						case we.ARROW_RIGHT:
						case we.ARROW_DOWN:
							return p.selectedIdx = Math.min(p.links.length - 1, p.selectedIdx + 1), B(p), V.preventDefault(), V.stopPropagation()
					}
				}
			}

			function B(p) {
				if (p.links[p.selectedIdx]) {
					var V = p.links[p.selectedIdx];
					V.focus(), pe(V)
				}
			}

			function K(p) {
				p.open && (le(p, !0), ht(p, !0))
			}

			function ne(p) {
				return a(function() {
					p.open ? le(p) : ht(p)
				})
			}

			function pe(p) {
				return function(V) {
					var k = e(this),
						U = k.attr("href");
					if (!Rt.validClick(V.currentTarget)) {
						V.preventDefault();
						return
					}
					U && U.indexOf("#") === 0 && p.open && le(p)
				}
			}

			function Ce(p) {
				return p.outside && o.off("click" + _, p.outside),
					function(V) {
						var k = e(V.target);
						g && k.closest(".w-editor-bem-EditorOverlay").length || _e(p, k)
					}
			}
			var _e = a(function(p, V) {
				if (p.open) {
					var k = V.closest(".w-nav-menu");
					p.menu.is(k) || le(p)
				}
			});

			function Y(p, V) {
				var k = e.data(V, _),
					U = k.collapsed = k.button.css("display") !== "none";
				if (k.open && !U && !f && le(k, !0), k.container.length) {
					var de = De(k);
					k.links.each(de), k.dropdowns.each(de)
				}
				k.open && Tr(k)
			}
			var ie = "max-width";

			function De(p) {
				var V = p.container.css(ie);
				return V === "none" && (V = ""),
					function(k, U) {
						U = e(U), U.css(ie, ""), U.css(ie) === "none" && U.css(ie, V)
					}
			}

			function Me(p, V) {
				V.setAttribute("data-nav-menu-open", "")
			}

			function Ct(p, V) {
				V.removeAttribute("data-nav-menu-open")
			}

			function ht(p, V) {
				if (p.open) return;
				p.open = !0, p.menu.each(Me), p.links.addClass(b), p.dropdowns.addClass(m), p.dropdownToggle.addClass(D), p.dropdownList.addClass(O), p.button.addClass(S);
				var k = p.config,
					U = k.animation;
				(U === "none" || !n.support.transform || k.duration <= 0) && (V = !0);
				var de = Tr(p),
					mr = p.menu.outerHeight(!0),
					Nt = p.menu.outerWidth(!0),
					l = p.el.height(),
					E = p.el[0];
				if (Y(0, E), I.intro(0, E), Rt.redraw.up(), f || o.on("click" + _, p.outside), V) {
					x();
					return
				}
				var y = "transform " + k.duration + "ms " + k.easing;
				if (p.overlay && (N = p.menu.prev(), p.overlay.show().append(p.menu)), k.animOver) {
					n(p.menu).add(y).set({
						x: k.animDirect * Nt,
						height: de
					}).start({
						x: 0
					}).then(x), p.overlay && p.overlay.width(Nt);
					return
				}
				var T = l + mr;
				n(p.menu).add(y).set({
					y: -T
				}).start({
					y: 0
				}).then(x);

				function x() {
					p.button.attr("aria-expanded", "true")
				}
			}

			function Tr(p) {
				var V = p.config,
					k = V.docHeight ? o.height() : u.height();
				return V.animOver ? p.menu.height(k) : p.el.css("position") !== "fixed" && (k -= p.el.outerHeight(!0)), p.overlay && p.overlay.height(k), k
			}

			function le(p, V) {
				if (!p.open) return;
				p.open = !1, p.button.removeClass(S);
				var k = p.config;
				if ((k.animation === "none" || !n.support.transform || k.duration <= 0) && (V = !0), I.outro(0, p.el[0]), o.off("click" + _, p.outside), V) {
					n(p.menu).stop(), E();
					return
				}
				var U = "transform " + k.duration + "ms " + k.easing2,
					de = p.menu.outerHeight(!0),
					mr = p.menu.outerWidth(!0),
					Nt = p.el.height();
				if (k.animOver) {
					n(p.menu).add(U).start({
						x: mr * k.animDirect
					}).then(E);
					return
				}
				var l = Nt + de;
				n(p.menu).add(U).start({
					y: -l
				}).then(E);

				function E() {
					p.menu.height(""), n(p.menu).set({
						x: 0,
						y: 0
					}), p.menu.each(Ct), p.links.removeClass(b), p.dropdowns.removeClass(m), p.dropdownToggle.removeClass(D), p.dropdownList.removeClass(O), p.overlay && p.overlay.children().length && (N.length ? p.menu.insertAfter(N) : p.menu.prependTo(p.parent), p.overlay.attr("style", "").hide()), p.el.triggerHandler("w-close"), p.button.attr("aria-expanded", "false")
				}
			}
			return r
		})
	});
	var rI = s((Yj, tI) => {
		var wt = Ke(),
			QU = pn();
		wt.define("tabs", tI.exports = function(e) {
			var t = {},
				r = e.tram,
				n = e(document),
				i, o, a = wt.env,
				u = a.safari,
				c = a(),
				f = "data-w-tab",
				g = "data-w-pane",
				v = ".w-tabs",
				h = "w--current",
				_ = "w--tab-active",
				S = QU.triggers,
				m = !1;
			t.ready = t.design = t.preview = D, t.redraw = function() {
				m = !0, D(), m = !1
			}, t.destroy = function() {
				i = n.find(v), i.length && (i.each(I), O())
			};

			function D() {
				o = c && wt.env("design"), i = n.find(v), i.length && (i.each(N), wt.env("preview") && !m && i.each(I), O(), b())
			}

			function O() {
				wt.redraw.off(t.redraw)
			}

			function b() {
				wt.redraw.on(t.redraw)
			}

			function I(G, R) {
				var d = e.data(R, v);
				d && (d.links && d.links.each(S.reset), d.panes && d.panes.each(S.reset))
			}

			function N(G, R) {
				var d = v.substr(1) + "-" + G,
					P = e(R),
					w = e.data(R, v);
				if (w || (w = e.data(R, v, {
						el: P,
						config: {}
					})), w.current = null, w.tabIdentifier = d + "-" + f, w.paneIdentifier = d + "-" + g, w.menu = P.children(".w-tab-menu"), w.links = w.menu.children(".w-tab-link"), w.content = P.children(".w-tab-content"), w.panes = w.content.children(".w-tab-pane"), w.el.off(v), w.links.off(v), w.menu.attr("role", "tablist"), w.links.attr("tabindex", "-1"), q(w), !o) {
					w.links.on("click" + v, F(w)), w.links.on("keydown" + v, W(w));
					var M = w.links.filter("." + h),
						B = M.attr(f);
					B && H(w, {
						tab: B,
						immediate: !0
					})
				}
			}

			function q(G) {
				var R = {};
				R.easing = G.el.attr("data-easing") || "ease";
				var d = parseInt(G.el.attr("data-duration-in"), 10);
				d = R.intro = d === d ? d : 0;
				var P = parseInt(G.el.attr("data-duration-out"), 10);
				P = R.outro = P === P ? P : 0, R.immediate = !d && !P, G.config = R
			}

			function L(G) {
				var R = G.current;
				return Array.prototype.findIndex.call(G.links, d => d.getAttribute(f) === R, null)
			}

			function F(G) {
				return function(R) {
					R.preventDefault();
					var d = R.currentTarget.getAttribute(f);
					d && H(G, {
						tab: d
					})
				}
			}

			function W(G) {
				return function(R) {
					var d = L(G),
						P = R.key,
						w = {
							ArrowLeft: d - 1,
							ArrowUp: d - 1,
							ArrowRight: d + 1,
							ArrowDown: d + 1,
							End: G.links.length - 1,
							Home: 0
						};
					if (P in w) {
						R.preventDefault();
						var M = w[P];
						M === -1 && (M = G.links.length - 1), M === G.links.length && (M = 0);
						var B = G.links[M],
							K = B.getAttribute(f);
						K && H(G, {
							tab: K
						})
					}
				}
			}

			function H(G, R) {
				R = R || {};
				var d = G.config,
					P = d.easing,
					w = R.tab;
				if (w !== G.current) {
					G.current = w;
					var M;
					G.links.each(function(Y, ie) {
						var De = e(ie);
						if (R.immediate || d.immediate) {
							var Me = G.panes[Y];
							ie.id || (ie.id = G.tabIdentifier + "-" + Y), Me.id || (Me.id = G.paneIdentifier + "-" + Y), ie.href = "#" + Me.id, ie.setAttribute("role", "tab"), ie.setAttribute("aria-controls", Me.id), ie.setAttribute("aria-selected", "false"), Me.setAttribute("role", "tabpanel"), Me.setAttribute("aria-labelledby", ie.id)
						}
						ie.getAttribute(f) === w ? (M = ie, De.addClass(h).removeAttr("tabindex").attr({
							"aria-selected": "true"
						}).each(S.intro)) : De.hasClass(h) && De.removeClass(h).attr({
							tabindex: "-1",
							"aria-selected": "false"
						}).each(S.outro)
					});
					var B = [],
						K = [];
					G.panes.each(function(Y, ie) {
						var De = e(ie);
						ie.getAttribute(f) === w ? B.push(ie) : De.hasClass(_) && K.push(ie)
					});
					var ne = e(B),
						pe = e(K);
					if (R.immediate || d.immediate) {
						ne.addClass(_).each(S.intro), pe.removeClass(_), m || wt.redraw.up();
						return
					} else {
						var Ce = window.scrollX,
							_e = window.scrollY;
						M.focus(), window.scrollTo(Ce, _e)
					}
					pe.length && d.outro ? (pe.each(S.outro), r(pe).add("opacity " + d.outro + "ms " + P, {
						fallback: u
					}).start({
						opacity: 0
					}).then(() => Q(d, pe, ne))) : Q(d, pe, ne)
				}
			}

			function Q(G, R, d) {
				if (R.removeClass(_).css({
						opacity: "",
						transition: "",
						transform: "",
						width: "",
						height: ""
					}), d.addClass(_).each(S.intro), wt.redraw.up(), !G.intro) return r(d).set({
					opacity: 1
				});
				r(d).set({
					opacity: 0
				}).redraw().add("opacity " + G.intro + "ms " + G.easing, {
					fallback: u
				}).start({
					opacity: 1
				})
			}
			return t
		})
	});
	Cs();
	qs();
	Ls();
	Ms();
	pn();
	jy();
	zy();
	Qy();
	Zy();
	eI();
	rI();
})();
/*!
 * tram.js v0.8.2-global
 * Cross-browser CSS3 transitions in JavaScript
 * https://github.com/bkwld/tram
 * MIT License
 */
/*!
 * Webflow._ (aka) Underscore.js 1.6.0 (custom build)
 * _.each
 * _.map
 * _.find
 * _.filter
 * _.any
 * _.contains
 * _.delay
 * _.defer
 * _.throttle (webflow)
 * _.debounce
 * _.keys
 * _.has
 * _.now
 * _.template (webflow: upgraded to 1.13.6)
 *
 * http://underscorejs.org
 * (c) 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Underscore may be freely distributed under the MIT license.
 * @license MIT
 */
/*! Bundled license information:

timm/lib/timm.js:
  (*!
   * Timm
   *
   * Immutability helpers with fast reads and acceptable writes.
   *
   * @copyright Guillermo Grau Panea 2016
   * @license MIT
   *)
*/
/**
 * ----------------------------------------------------------------------
 * Webflow: Interactions 2.0: Init
 */
Webflow.require('ix2').init({
	"events": {
		"e-23": {
			"id": "e-23",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471ec33f6c26894d86f733a|05f3d543-bfd2-fe74-1943-831082f930bd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471ec33f6c26894d86f733a|05f3d543-bfd2-fe74-1943-831082f930bd",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 10,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685344935319
		},
		"e-24": {
			"id": "e-24",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471ec33f6c26894d86f733a|d08f512f-cd06-a832-2b92-17e2ea778caf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471ec33f6c26894d86f733a|d08f512f-cd06-a832-2b92-17e2ea778caf",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685345034968
		},
		"e-25": {
			"id": "e-25",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471ec33f6c26894d86f733a|808ef206-8517-235c-b172-5166f5e41738",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471ec33f6c26894d86f733a|808ef206-8517-235c-b172-5166f5e41738",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685353530909
		},
		"e-26": {
			"id": "e-26",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471ec33f6c26894d86f733a|5d1f9ab3-64f7-d779-5719-9a6630d3fd7c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471ec33f6c26894d86f733a|5d1f9ab3-64f7-d779-5719-9a6630d3fd7c",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 10,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685353538390
		},
		"e-31": {
			"id": "e-31",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec2633",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec2633",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685354592105
		},
		"e-32": {
			"id": "e-32",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec263d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec263d",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 10,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685354592105
		},
		"e-33": {
			"id": "e-33",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec2647",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec2647",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685354592105
		},
		"e-34": {
			"id": "e-34",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec2651",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471aed51e618c702ed0fe38|79d4ce35-1a7f-e39d-8082-fa99eaec2651",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 10,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685354592105
		},
		"e-35": {
			"id": "e-35",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-4",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"id": "6471aed51e618c702ed0fe38|fcadc916-a7ae-6de5-30f2-9ed77bc549f1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			},
			"targets": [{
				"id": "6471aed51e618c702ed0fe38|fcadc916-a7ae-6de5-30f2-9ed77bc549f1",
				"appliesTo": "ELEMENT",
				"styleBlockIds": []
			}],
			"config": [{
				"continuousParameterGroupId": "a-4-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": false,
				"addOffsetValue": 50,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685355276865
		},
		"e-41": {
			"id": "e-41",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-42"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|aac8a214-1c7a-39f1-f7d9-09fc5fd919bd"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685430996749
		},
		"e-43": {
			"id": "e-43",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-44"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|2acb6e8e-1b67-49f0-753f-1e011ee7425d"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 240,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685431026812
		},
		"e-45": {
			"id": "e-45",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInBottom",
					"autoStopEventId": "e-46"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|cbbf66ea-2eda-83b0-e7b1-87c5fed00769"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 480,
				"direction": "BOTTOM",
				"effectIn": true
			},
			"createdOn": 1685431064652
		},
		"e-70": {
			"id": "e-70",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-71"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|14118a69-faad-e5a3-0c02-f6b1263dfebd"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685444190337
		},
		"e-71": {
			"id": "e-71",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-70"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|14118a69-faad-e5a3-0c02-f6b1263dfebd"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685444190337
		},
		"e-72": {
			"id": "e-72",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-73"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f1aaf5c2-6f6f-bdac-63b2-b666d3ac0f77"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685445036199
		},
		"e-73": {
			"id": "e-73",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-72"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f1aaf5c2-6f6f-bdac-63b2-b666d3ac0f77"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685445036199
		},
		"e-74": {
			"id": "e-74",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-75"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|e96d722b-86ce-f827-aa97-ee81c4bc7b55"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447713096
		},
		"e-75": {
			"id": "e-75",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-74"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|e96d722b-86ce-f827-aa97-ee81c4bc7b55"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447713096
		},
		"e-76": {
			"id": "e-76",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-77"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|038e824f-3d7a-b3dd-1b8e-8c5764f6fe89"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447713900
		},
		"e-77": {
			"id": "e-77",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-76"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|038e824f-3d7a-b3dd-1b8e-8c5764f6fe89"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447713900
		},
		"e-78": {
			"id": "e-78",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-79"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f20204dd-4034-3f9b-8e55-775060c89a5c"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447714479
		},
		"e-79": {
			"id": "e-79",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-78"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f20204dd-4034-3f9b-8e55-775060c89a5c"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447714479
		},
		"e-80": {
			"id": "e-80",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-81"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|5d1a5968-3ff6-b0bc-49c7-bb4b4daca096"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447715296
		},
		"e-81": {
			"id": "e-81",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-80"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|5d1a5968-3ff6-b0bc-49c7-bb4b4daca096"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447715296
		},
		"e-82": {
			"id": "e-82",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-83"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|6386fa1a-f037-bd2a-528d-8701ff6b0640"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447838875
		},
		"e-83": {
			"id": "e-83",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-82"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|6386fa1a-f037-bd2a-528d-8701ff6b0640"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447838875
		},
		"e-84": {
			"id": "e-84",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-6",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-85"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|0ffbbab2-bf7b-3fa9-e09b-6688bf967f55"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447843947
		},
		"e-85": {
			"id": "e-85",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "MOUSE_SECOND_CLICK",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_START_ACTION",
				"config": {
					"delay": 0,
					"easing": "",
					"duration": 0,
					"actionListId": "a-7",
					"affectedElements": {},
					"playInReverse": false,
					"autoStopEventId": "e-84"
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|0ffbbab2-bf7b-3fa9-e09b-6688bf967f55"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": null,
				"scrollOffsetUnit": null,
				"delay": null,
				"direction": null,
				"effectIn": null
			},
			"createdOn": 1685447843947
		},
		"e-92": {
			"id": "e-92",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInTop",
					"autoStopEventId": "e-93"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f78be046-7657-bde1-652a-9805cf4fd4c6"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 20,
				"scrollOffsetUnit": "%",
				"delay": 0,
				"direction": "TOP",
				"effectIn": true
			},
			"createdOn": 1685531591582
		},
		"e-94": {
			"id": "e-94",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInTop",
					"autoStopEventId": "e-95"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f78be046-7657-bde1-652a-9805cf4fd4ce"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 240,
				"direction": "TOP",
				"effectIn": true
			},
			"createdOn": 1685531591582
		},
		"e-96": {
			"id": "e-96",
			"name": "",
			"animationType": "preset",
			"eventTypeId": "SCROLL_INTO_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "SLIDE_EFFECT",
				"config": {
					"actionListId": "slideInTop",
					"autoStopEventId": "e-97"
				},
				"instant": false
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|f78be046-7657-bde1-652a-9805cf4fd4d6"
			},
			"targets": [],
			"config": {
				"loop": false,
				"playInReverse": false,
				"scrollOffsetValue": 0,
				"scrollOffsetUnit": "%",
				"delay": 480,
				"direction": "TOP",
				"effectIn": true
			},
			"createdOn": 1685531591582
		},
		"e-98": {
			"id": "e-98",
			"name": "",
			"animationType": "custom",
			"eventTypeId": "SCROLLING_IN_VIEW",
			"action": {
				"id": "",
				"actionTypeId": "GENERAL_CONTINUOUS_ACTION",
				"config": {
					"actionListId": "a-3",
					"affectedElements": {},
					"duration": 0
				}
			},
			"mediaQueries": ["main", "medium", "small", "tiny"],
			"target": {
				"appliesTo": "ELEMENT",
				"styleBlockIds": [],
				"id": "6471aed51e618c702ed0fe38|c1fd36e1-09cd-106d-385f-e63c1cdaab7a"
			},
			"targets": [],
			"config": [{
				"continuousParameterGroupId": "a-3-p",
				"smoothing": 50,
				"startsEntering": true,
				"addStartOffset": true,
				"addOffsetValue": 12,
				"startsExiting": true,
				"addEndOffset": false,
				"endOffsetValue": 50
			}],
			"createdOn": 1685536165483
		}
	},
	"actionLists": {
		"a-4": {
			"id": "a-4",
			"title": "features scroll",
			"continuousParameterGroups": [{
				"id": "a-4-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 54,
					"actionItems": [{
						"id": "a-4-n-9",
						"actionTypeId": "STYLE_BACKGROUND_COLOR",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".feature-icon-wrapper",
								"selectorGuids": ["7feb53a6-73d9-f26a-b3a9-c0c74f9f1013"]
							},
							"globalSwatchId": "af5fe856",
							"rValue": 255,
							"bValue": 255,
							"gValue": 255,
							"aValue": 1
						}
					}, {
						"id": "a-4-n-11",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".feature-icon",
								"selectorGuids": ["16f2f29b-7b92-2ade-14a8-4cb1b8181695"]
							},
							"value": 0.08,
							"unit": ""
						}
					}, {
						"id": "a-4-n-13",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".feature-content-block",
								"selectorGuids": ["bd0ee47e-4ded-7ee0-6498-a986594179c4"]
							},
							"value": 0.07,
							"unit": ""
						}
					}]
				}, {
					"keyframe": 67,
					"actionItems": [{
						"id": "a-4-n-10",
						"actionTypeId": "STYLE_BACKGROUND_COLOR",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".feature-icon-wrapper",
								"selectorGuids": ["7feb53a6-73d9-f26a-b3a9-c0c74f9f1013"]
							},
							"globalSwatchId": "e32757b3",
							"rValue": 0,
							"bValue": 194,
							"gValue": 235,
							"aValue": 1
						}
					}, {
						"id": "a-4-n-12",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".feature-icon",
								"selectorGuids": ["16f2f29b-7b92-2ade-14a8-4cb1b8181695"]
							},
							"value": 1,
							"unit": ""
						}
					}, {
						"id": "a-4-n-14",
						"actionTypeId": "STYLE_OPACITY",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".feature-content-block",
								"selectorGuids": ["bd0ee47e-4ded-7ee0-6498-a986594179c4"]
							},
							"value": 1,
							"unit": ""
						}
					}]
				}]
			}],
			"createdOn": 1685341041759
		},
		"a-6": {
			"id": "a-6",
			"title": "faq show",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-6-n",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "block",
						"target": {
							"useEventTarget": "SIBLINGS",
							"selector": ".faq-paragraph",
							"selectorGuids": ["b01a857d-13d9-664f-ae7e-e702de7600b5"]
						}
					}
				}, {
					"id": "a-6-n-2",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".img-faq-icon",
							"selectorGuids": ["7257dc0e-e922-bd61-1147-d082e8d50bfd"]
						},
						"xValue": null,
						"zValue": -180,
						"xUnit": "deg",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"createdOn": 1685443047988,
			"useFirstGroupAsInitialState": false
		},
		"a-7": {
			"id": "a-7",
			"title": "faq hide",
			"actionItemGroups": [{
				"actionItems": [{
					"id": "a-7-n-2",
					"actionTypeId": "GENERAL_DISPLAY",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 0,
						"value": "none",
						"target": {
							"useEventTarget": "SIBLINGS",
							"selector": ".faq-paragraph",
							"selectorGuids": ["b01a857d-13d9-664f-ae7e-e702de7600b5"]
						}
					}
				}, {
					"id": "a-7-n-3",
					"actionTypeId": "TRANSFORM_ROTATE",
					"config": {
						"delay": 0,
						"easing": "",
						"duration": 200,
						"target": {
							"useEventTarget": "CHILDREN",
							"selector": ".img-faq-icon",
							"selectorGuids": ["7257dc0e-e922-bd61-1147-d082e8d50bfd"]
						},
						"zValue": 0,
						"xUnit": "DEG",
						"yUnit": "DEG",
						"zUnit": "deg"
					}
				}]
			}],
			"createdOn": 1685443047988,
			"useFirstGroupAsInitialState": false
		},
		"a-3": {
			"id": "a-3",
			"title": "app screenshots scroll",
			"continuousParameterGroups": [{
				"id": "a-3-p",
				"type": "SCROLL_PROGRESS",
				"parameterLabel": "Scroll",
				"continuousActionGroups": [{
					"keyframe": 0,
					"actionItems": [{
						"id": "a-3-n",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".app-screenshots-image-slider",
								"selectorGuids": ["bc2a745d-4e23-17ec-8377-b32e5413e517"]
							},
							"xValue": 32,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}, {
					"keyframe": 100,
					"actionItems": [{
						"id": "a-3-n-2",
						"actionTypeId": "TRANSFORM_MOVE",
						"config": {
							"delay": 0,
							"easing": "",
							"duration": 500,
							"target": {
								"useEventTarget": "CHILDREN",
								"selector": ".app-screenshots-image-slider",
								"selectorGuids": ["bc2a745d-4e23-17ec-8377-b32e5413e517"]
							},
							"xValue": -32,
							"xUnit": "px",
							"yUnit": "PX",
							"zUnit": "PX"
						}
					}]
				}]
			}],
			"createdOn": 1685186107279
		},
		"slideInBottom": {
			"id": "slideInBottom",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}, {
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}]
			}]
		},
		"slideInTop": {
			"id": "slideInTop",
			"useFirstGroupAsInitialState": true,
			"actionItemGroups": [{
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 0
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"duration": 0,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": -100,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}, {
				"actionItems": [{
					"actionTypeId": "STYLE_OPACITY",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"value": 1
					}
				}, {
					"actionTypeId": "TRANSFORM_MOVE",
					"config": {
						"delay": 0,
						"easing": "outQuart",
						"duration": 1000,
						"target": {
							"id": "N/A",
							"appliesTo": "TRIGGER_ELEMENT",
							"useEventTarget": true
						},
						"xValue": 0,
						"yValue": 0,
						"xUnit": "PX",
						"yUnit": "PX",
						"zUnit": "PX"
					}
				}]
			}]
		}
	},
	"site": {
		"mediaQueries": [{
			"key": "main",
			"min": 992,
			"max": 10000
		}, {
			"key": "medium",
			"min": 768,
			"max": 991
		}, {
			"key": "small",
			"min": 480,
			"max": 767
		}, {
			"key": "tiny",
			"min": 0,
			"max": 479
		}]
	}
});