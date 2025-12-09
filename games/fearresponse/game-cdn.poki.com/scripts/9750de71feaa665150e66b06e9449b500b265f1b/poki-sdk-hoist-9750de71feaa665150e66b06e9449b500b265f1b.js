(() => {
    "use strict";
    const e = {
        ready: "pokiAppReady",
        failed: "pokiAppFailed",
        startLoading: "pokiAppStartLoading",
        ads: {
            startTimer: "pokiStartTimer",
            completed: "pokiAdsCompleted",
            error: "pokiAdsError",
            impression: "pokiAdsImpression",
            durationChange: "pokiAdsDurationChange",
            limit: "pokiAdsLimit",
            ready: "pokiAdsReady",
            requested: "pokiAdsRequested",
            prebidRequested: "pokiAdsPrebidRequested",
            skipped: "pokiAdsSkipped",
            started: "pokiAdsStarted",
            stopped: "pokiAdsStopped",
            busy: "pokiAdsBusy",
            loaded: "pokiAdsLoaded",
            position: {
                preroll: "PP",
                midroll: "PM",
                rewarded: "PR",
                display: "DP"
            },
            video: {
                clicked: "pokiVideoAdsClicked",
                firstQuartile: "pokiVideoAdsFirstQuartile",
                midPoint: "pokiVideoAdsMidPoint",
                thirdQuartile: "pokiVideoAdsThirdQuartile",
                error: "pokiVideoAdsError",
                loaderError: "pokiVideoAdsLoaderError",
                paused: "pokiVideoAdsPauseTriggered",
                resumed: "pokiVideoAdsResumedTriggered",
                progress: "pokiVideoAdsProgress",
                buffering: "pokiVideoAdsBuffering",
                startHouseAdFlow: "pokiVideoAdsStartHouseAdFlow"
            },
            display: {
                error: "pokiDisplayAdsError"
            },
            extendedVideoError: "pokiAdsExtendedVideoError",
            debugging: "pokiAdsDebugging"
        },
        info: {
            messages: {
                timeLimit: "The ad-request was not processed, because of a time constraint",
                prerollLimit: "The ad-request was cancelled, because we're not allowed to show a preroll (PokiSDK.commercialBreak before PokiSDK.gameplayStart)",
                disabled: "The ad-request was cancelled, because we've disabled this format for this specific configuration"
            }
        },
        playtest: {
            startVideo: "pokiPlaytestStartVideo",
            stopVideo: "pokiPlaytestStopVideo"
        },
        message: {
            event: "pokiMessageEvent",
            sdkDetails: "pokiMessageSdkDetails",
            setPokiURLParams: "pokiMessageSetPokiURLParams",
            sendGameScreenshot: "pokiMessageSendScreenshot",
            sendGameRawScreenshot: "pokiMessageSendRawScreenshot",
            sendUploadScreenshot: "pokiMessageSendUploadScreenshot",
            sendCommand: "pokiMessageSendCommand",
            sendInspectorEvent: "pokiMessageInspectorEvent",
            sendInspectorCookies: "pokiMessageSendInspectorCookies",
            sendInspectorConsole: "pokiMessageSendInspectorConsole",
            sendScore: "pokiMessageSendScore",
            openExternalLink: "pokiMessageOpenExternalLink"
        },
        tracking: {
            custom: "pokiTrackingCustom",
            debugTrueInProduction: "pokiMessageDebugTrueProduction",
            screen: {
                gameplayStart: "pokiTrackingScreenGameplayStart",
                gameplayStop: "pokiTrackingScreenGameplayStop",
                gameLoadingFinished: "pokiTrackingScreenGameLoadingFinished",
                commercialBreak: "pokiTrackingScreenCommercialBreak",
                rewardedBreak: "pokiTrackingScreenRewardedBreak",
                firstRound: "pokiTrackingScreenFirstRound",
                displayAd: "pokiTrackingScreenDisplayAdRequest",
                destroyAd: "pokiTrackingScreenDisplayAdDestroy",
                playerActive: "pokiTrackingScreenPlayerActive"
            },
            playtest: {
                showModal: "pokiTrackingPlaytestShowModal",
                accepted: "pokiTrackingPlaytestAccepted",
                rejected: "pokiTrackingPlaytestRejected",
                noCanvas: "pokiTrackingPlaytestNoCanvas",
                notLoaded: "pokiTrackingPlaytestNotLoaded",
                starting: "pokiTrackingPlaytestStarting",
                closed: "pokiTrackingPlaytestClosed",
                error: "pokiTrackingPlaytestError"
            },
            playerfittest: {
                starting: "pokiTrackingPlayerFitStarting"
            },
            sdk: {
                status: {
                    initialized: "pokiTrackingSdkStatusInitialized",
                    failed: "pokiTrackingSdkStatusFailed"
                }
            },
            ads: {
                ay: {
                    failed: "pokiTrackingAdsAYFailed"
                },
                status: {
                    busy: "pokiTrackingAdsStatusBusy",
                    completed: "pokiTrackingAdsStatusCompleted",
                    error: "pokiTrackingAdsStatusError",
                    impression: "pokiTrackingAdsStatusImpression",
                    limit: "pokiTrackingAdsStatusLimit",
                    ready: "pokiTrackingAdsStatusReady",
                    requested: "pokiTrackingAdsStatusRequested",
                    prebidRequested: "pokiTrackingAdsStatusPrebidRequested",
                    skipped: "pokiTrackingAdsStatusSkipped",
                    started: "pokiTrackingAdsStatusStarted",
                    buffering: "pokiTrackingAdsStatusBuffering"
                },
                video: {
                    clicked: "pokiTrackingAdsVideoClicked",
                    error: "pokiTrackingAdsVideoError",
                    loaderError: "pokiTrackingAdsVideoLoaderError",
                    progress: "pokiTrackingAdsVideoProgress",
                    paused: "pokiTrackingAdsVideoPaused",
                    resumed: "pokiTrackingAdsVideoResumed",
                    extendedVideoError: "pokiTrackingAdsVideoExtendedVideoError"
                },
                display: {
                    requested: "pokiTrackingScreenDisplayAdRequested",
                    impression: "pokiTrackingScreenDisplayAdImpression",
                    notFilled: "pokiTrackingAdsDisplayNotFilled"
                },
                rewardedWeb: {
                    request: "pokiTrackingRewardedWebRequest",
                    ready: "pokiTrackingRewardedWebReady",
                    impression: "pokiTrackingRewardedWebImpression",
                    closedGranted: "pokiTrackingRewardedWebClosedGranted",
                    closedDeclined: "pokiTrackingRewardedWebclosedDeclined",
                    empty: "pokiTrackingRewardedWebEmpty"
                },
                debugging: "pokiTrackingAdsDebugging",
                h5GamingEnabled: "pokiTrackingH5GamingEnabled"
            }
        },
        accounts: {
            openAuthPanel: {
                type: "pokiAccountsOpenAuthPanel",
                version: 1
            },
            authPanelClosed: "pokiAccountsAuthPanelClosed",
            getUserInfo: "pokiAccountsGetUserInfo",
            getUserToken: "pokiAccountsGetUserToken",
            userToken: "pokiAccountsUserToken",
            userInfo: "pokiAccountsUserInfo"
        }
    };
    var t = 15552e3;

    function n(e) {
        var t = new RegExp("".concat(e, "=([^;]+)(?:;|$)")).exec(document.cookie);
        return t ? t[1] : ""
    }

    function o(e, n, o) {
        document.cookie = "".concat(e, "=").concat(n, "; path=/; samesite=lax; max-age=").concat(Math.min(o || t, t))
    }

    function r() {
        for (var e = Math.floor(Date.now() / 1e3), t = "", n = 0; n < 4; n++) t = String.fromCharCode(255 & e) + t, e >>= 8;
        if (window.crypto && crypto.getRandomValues && Uint32Array) {
            var o = new Uint32Array(12);
            crypto.getRandomValues(o);
            for (var r = 0; r < 12; r++) t += String.fromCharCode(255 & o[r])
        } else
            for (var i = 0; i < 12; i++) t += String.fromCharCode(Math.floor(256 * Math.random()));
        return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    }

    function i(e, t, n) {
        console.error(e);
        var o = [{
            k: "where",
            v: t
        }, {
            k: "error",
            v: e.name && e.message ? "".concat(e.name, ": ").concat(e.message) : JSON.stringify(e)
        }];
        if (void 0 !== n) {
            var r = n;
            "string" != typeof e && (r = JSON.stringify(e)), o.push({
                k: "extra",
                v: r
            })
        }! function(e, t) {
            fetch(e, {
                method: "POST",
                headers: {
                    "Content-Type": "text/plain"
                },
                body: t,
                mode: "no-cors",
                keepalive: !0,
                credentials: "omit"
            }).catch((function(n) {
                console.error(n);
                try {
                    var o = "XMLHttpRequest" in window ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
                    o.open("POST", e, !0), o.setRequestHeader("Content-Type", "text/plain"), o.send(t)
                } catch (e) {}
            }))
        }("https://t.poki.io/l", JSON.stringify({
            c: "observer-error",
            ve: 7,
            d: o
        }))
    }
    var a = "poki_uid",
        s = "poki_uid_new",
        c = "poki_uid_version",
        d = "poki_uid_ttl",
        l = 15552e3;

    function u(e) {
        if (!e) return "";
        try {
            var t = /^[a-zA-Z][a-zA-Z0-9+\-.]*:\/\//.test(e);
            return new URL(t ? e : "https://".concat(e)).hostname || ""
        } catch (e) {
            return ""
        }
    }

    function p(e) {
        if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":")) return e;
        if ("gemini.google.com" === e) return "gemini-google";
        if ("bard.google.com" === e) return "bard-google";
        if ("com.google.android.googlequicksearchbox" === e) return e;
        var t = function(e) {
            if (!e) return "";
            if (/^\d{1,3}(\.\d{1,3}){3}$/.test(e) || e.includes(":")) return e;
            var t = e.split(".").filter(Boolean);
            if (t.length <= 2) return e;
            var n = new Set(["co.uk", "gov.uk", "ac.uk", "sch.uk", "com.au", "net.au", "org.au", "com.br", "com.mx", "com.tr", "com.ar", "com.cn", "com.hk", "com.tw", "com.sg", "com.my", "com.id", "co.nz", "co.in", "co.kr", "co.za"]),
                o = t.slice(-2).join("."),
                r = t.slice(-3).join(".");
            return n.has(o) ? t.slice(-3).join(".") : n.has(r) ? t.slice(-4).join(".") : o
        }(e);
        return t ? t.split(".")[0] || t : e || ""
    }

    function g(e, t) {
        var n = e.getAll(t);
        return n && 0 !== n.length ? n[n.length - 1] : ""
    }
    window._pokiUserGlobalName = window._pokiUserGlobalName || "user";
    var f = new Set(["authorize.roblox.com", "accounts.google.com", "appleid.apple.com", "idmsa.apple.com", "login.microsoftonline.com", "login.live.com"]),
        m = new Set(["doubleclick", "googlesyndication", "googleapis", "googleadservices"]),
        h = new Set(["doubleclick", "googlesyndication", "googleapis", "googleadservices", "adsenseformobileapps"]),
        y = new Set(["google", "bing", "brave", "yahoo", "baidu", "yandex", "duckduckgo", "aol", "ask", "avg", "babylon", "googleweblight", "info", "izito", "msn", "myway", "naver", "qo-search", "searchencrypt", "search-results", "searchlock", "seznam", "so", "sogou", "startpage", "startpagina", "startsiden", "virgilio", "wp", "zapmeta", "100searchengines", "dailysearches", "easyfindanswers", "ecosia", "findretro", "geniol", "gsearch", "gosearcresults", "gosrch", "juniorsafesearch", "karmasearch", "keyboardsearch", "kvasir", "metager", "mojeek", "mysearcheasy", "onlineradiok", "panda-search", "petalsearch", "presearch", "qwant", "rammerhead", "relatedsearches", "search", "search-browser", "searchbip", "searcheira", "search-io", "search-load", "searchmusic-online", "search-redirect", "searchsafe", "searchsail", "search-sprint", "search-tab", "searchspear", "sosearcher", "srchoffer", "syndicatedsearch", "trojanwall", "voicecommandsearcher", "web-explore", "webcrawler", "yellow-search", "ziyuan", "ziyuanm", "zuiben", "coccoc", "zhanlian"]);

    function w() {
        var e, t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            n = t.search,
            o = void 0 === n ? "" : n,
            r = t.referrer,
            i = void 0 === r ? "" : r,
            a = new URLSearchParams(o),
            s = u(i),
            c = p(s),
            d = "" !== i,
            l = a.has("tt"),
            w = a.has("sc"),
            v = g(a, "utm_source"),
            b = g(a, "utm_medium"),
            k = g(a, "utm_term"),
            A = g(a, "poki_source"),
            S = g(a, "placement"),
            E = g(a, "gclid"),
            I = g(a, "msclkid"),
            _ = g(a, "yclid"),
            P = g(a, "ttclid"),
            T = g(a, "fbclid"),
            x = g(a, "adgroup"),
            O = g(a, "creative"),
            C = g(a, "network");
        e = c || ("" === s && "" !== i ? "" : i);
        var D, L, M = !d || "poki" === e || h.has(e),
            N = (D = (i || "").match(/^android-app:\/\/([^/]+)/i)) ? D[1].toLowerCase() : null,
            B = function(e) {
                var t = (e || "").match(/^ios-app:\/\/([^/]+)/i);
                return t ? t[1].toLowerCase() : null
            }(i),
            R = function(e) {
                var t = (e || "").match(/^mobileapp::\d+-([^/]+)/i);
                return t ? t[1].toLowerCase() : null
            }(i),
            j = M && S.includes("mobileapp::") && S.includes("mobileapp::2-") ? function(e) {
                var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : /^mobileapp::2-([^/]+)/,
                    n = (e || "").match(t);
                return n ? n[1] : null
            }(S) : null;
        L = "chrome_extension" === v ? "poki_chrome_extension" : "edge_extension" === v ? "poki_edge_extension" : l ? "tiktok" : w ? "snapchat" : "android_app" === A ? "poki_android_app" : "web_app_manifest" === v ? "pwa" : N || (B || (R || (!d && v ? v : j || (M && S ? p(u(S)) || S : "g" === C ? "google" : "ytv" === C ? "youtube" : d || E || I || _ || P || T || x || O ? !d && E && /^\d+$/.test(E) ? "direct" : "" === e && d ? "unknown" : e || "unknown" : "direct"))));
        var V, U = m.has(L) || !!(E || I || _ || P || T || x || O) || "cpc" === b || "rtb-cpm" === b || "ppc" === b || "paid" === b,
            G = (s || "").toLowerCase(),
            F = !f.has(G) && (y.has(L) || /^com\.google\.android\.googlequicksearchbox$/.test(G) || function(e) {
                return /^webcache\.googleusercontent\.com$/.test(e)
            }(G) || !!k && "share" !== b);
        return V = "snapchat" === v ? "cpc" : T && !v ? "organic" : U ? "cpc" : F ? "organic" : f.has(G) ? "oauth" : "pwa" === L || "poki_android_app" === L || d || "social" === b || "email" === b ? "referral" : L ? "unknown" : "direct", "direct" === L && "direct" !== V && "unknown" !== V && "referral" !== V && (L = "unknown"), m.has(L) && (L = "unknown"), "poki" === L && "cpc" === V && (L = "unknown"), {
            source: L,
            medium: V
        }
    }
    var v = 18e5,
        b = "poki_session";
    window._pokiSessionGlobalName = window._pokiSessionGlobalName || "session";
    var k = ["poki.at", "poki.be", "poki.by", "poki.ch", "poki.cn", "poki.co.id", "poki.co.il", "poki.com.br", "poki.com", "poki.cz", "poki.de", "poki.dk", "poki.fi", "poki.it", "poki.jp", "poki.nl", "poki.pl", "poki.pt", "poki.se", "www.trochoi.net"];

    function A() {
        try {
            var e = new URL(document.referrer).hostname;
            return k.indexOf(e) > -1 ? "poki" : e
        } catch (e) {}
        return ""
    }

    function S(e, t) {
        if (!e) return !1;
        if (!(e && e.page && e.landing_page && e.previous_page)) return !1;
        if (!e.tab_id) return !1;
        if (!e.expire || Date.now() > e.expire) return !1;
        if (e.expire > Date.now() + v) return !1;
        if (t) {
            var n = w({
                    referrer: document.referrer,
                    search: window.location.search
                }),
                o = n.source,
                r = n.medium;
            if ("oauth" !== r && o !== e.source) return !1;
            var i = "cpc" === r,
                a = "cpc" === e.medium;
            if (i && !a) return !1
        }
        return !0
    }

    function E() {
        var e = null;
        S(window[window._pokiSessionGlobalName], !1) && (e = window[window._pokiSessionGlobalName]);
        try {
            var t = sessionStorage.getItem(b);
            if (t) {
                var n = JSON.parse(t);
                S(n, !1) && (!e || n.depth > e.depth) && (e = n)
            }
        } catch (e) {
            try {
                i(e, "getSession", sessionStorage.getItem(b))
            } catch (t) {
                i(e, "getSession", t)
            }
        }
        return e
    }

    function I() {
        var e = 0;
        window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].count && (e = window[window._pokiSessionGlobalName].count);
        try {
            var t = sessionStorage.getItem(b);
            if (t) {
                var o = JSON.parse(t);
                o && o.count && o.count > e && (e = o.count)
            }
        } catch (e) {
            try {
                i(e, "getPreviousSessionCount", sessionStorage.getItem(b))
            } catch (t) {
                i(e, "getPreviousSessionCount", t)
            }
        }
        try {
            var r = n(b);
            if (r) {
                var a = JSON.parse(r);
                a && a.count && a.count > e && (e = a.count)
            }
        } catch (e) {
            try {
                i(e, "getPreviousSessionCount", n(b))
            } catch (t) {
                i(e, "getPreviousSessionCount", t)
            }
        }
        return e
    }

    function _() {
        if (window[window._pokiSessionGlobalName] && window[window._pokiSessionGlobalName].tab_id) return window[window._pokiSessionGlobalName].tab_id;
        try {
            var e = sessionStorage.getItem(b);
            if (e) {
                var t = JSON.parse(e);
                if (t && t.tab_id) return t.tab_id
            }
        } catch (e) {}
        return r()
    }

    function P() {
        var e = 0,
            t = E();
        t && (e = t.depth);
        try {
            var o = n(b);
            if (o) {
                var r = JSON.parse(o);
                !S(r, !t) || t && r.id !== t.id || (e = Math.max(e, r.depth))
            }
        } catch (e) {
            var a = null;
            try {
                a = n(b) || null
            } catch (e) {}
            i(e, "getSessionDepth", a)
        }
        return e
    }
    const T = (e, t) => {
            let n = !1;
            return Object.keys(t).forEach((o => {
                t[o] === e && (n = !0)
            })), n
        },
        x = ["AT", "BE", "BG", "HR", "CY", "CZ", "DK", "EE", "FI", "FR", "DE", "GR", "GB", "HU", "IE", "IT", "LV", "LT", "LU", "MT", "NL", "PL", "PT", "RO", "SK", "SI", "ES", "SE", "IS", "LI", "NO"];
    const O = (e, t) => {
            if ("undefined" == typeof window && !t) return "";
            e = e.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
            const n = new RegExp(`(?:[\\?&]|^)${e}=([^&#]*)`).exec(t || window ? .location ? .search || "");
            return null === n ? "" : decodeURIComponent(n[1].replace(/\+/g, " "))
        },
        C = () => "undefined" != typeof navigator && /(?:phone|windows\s+phone|ipod|blackberry|(?:android|bb\d+|meego|silk|googlebot) .+? mobile|palm|windows\s+ce|opera mini|avantgo|mobilesafari|docomo|kaios)/i.test(navigator.userAgent),
        D = () => "undefined" != typeof navigator && /(?:ipad|playbook|(?:android|bb\d+|meego|silk)(?! .+? mobile))/i.test(navigator.userAgent);
    var L;
    ! function(e) {
        e.ON = "on", e.NOT_APPLICABLE = "not_applicable", e.DISABLED = "disabled", e.PBS_ONLY = "pbs_only", e.DPF_ONLY = "dpf_only", e.CSTS_ONLY = "csts_only", e.PBS_DPF_CSTS = "pbs_dpf_csts"
    }(L || (L = {}));
    const M = O("referrer") || "",
        N = O("ccpaApplies") || "",
        B = {
            bot: "1" === O("bot"),
            categories: O("categories") || "",
            device: C() ? "mobile" : D() ? "tablet" : "desktop",
            experiment: O("experiment") || "",
            forceAd: O("force_ad") || !1,
            isPokiIframe: (parseInt(O("site_id"), 10) || 0) > 0,
            isPokiExternal: !!window.isPokiExternal,
            siteID: parseInt(O("site_id"), 10) || 3,
            tag: O("tag") || "",
            versionID: O("game_version_id"),
            debugMode: "true" === O("pokiDebug"),
            logMode: "" !== O("pokiLogging"),
            testVideos: "true" === O("testVideos"),
            referrerParam: M,
            isPlayground: !!window.isPokiPlayground,
            isInspector: "inspector-uploads.poki-user-content.com" === window ? .location ? .host || document ? .referrer ? .includes("inspector.poki.dev") || "1" === O("inspector"),
            houseAdsOnly: !1,
            adOverrideMode: !1,
            googlePreview: !!O("google_preview"),
            ccpaApplies: "1" === N || "0" !== N && void 0,
            country: (O("country") || "").toUpperCase(),
            gameID: O("game_id"),
            gdprApplies: (R = (O("country") || "").toUpperCase(), x.includes(R)),
            contentGameID: void 0,
            specialCondition: O("special_condition"),
            nonPersonalized: "y" === O("nonPersonalized"),
            familyFriendly: "y" === O("familyFriendly"),
            kioskMode: "y" === O("kioskMode") || !!window ? .kioskMode,
            forceBidder: O("force_bidder") || "",
            cloudSaveGames: "y" === O("cloudsavegames"),
            AYMode: L.ON,
            forceStartAY: "y" === O("forceStartAY")
        };
    var R;
    const j = (e, t) => {
            B[e] = t
        },
        V = B;
    class U {
        static sendMessage(t, n, o = window.parent) {
            if (!T(t, e.message)) {
                const t = Object.keys(e.message).map((e => `poki.message.${e}`));
                throw new TypeError(`Argument 'type' must be one of ${t.join(", ")}`)
            }
            const r = n || {};
            V.gameID && V.versionID && (r.pokifordevs = {
                game_id: V.gameID,
                game_version_id: V.versionID
            }), o ? .postMessage({
                type: t,
                content: r
            }, "*")
        }
    }
    class G {
        static debug = !1;
        static log = !1;
        static init = (e, t) => {
            const {
                hostname: n
            } = window.location;
            void 0 === e && ("test" === window ? .process ? .env ? .NODE_ENV ? (e = !1, void 0 === t && (t = !1)) : "localhost" === n || "127.0.0.1" === n || "[::1]" === n || "launch.playcanvas.com" === n ? (e = !0, void 0 === t && (t = !1)) : (e = !1, void 0 === t && (t = !1))), V.isInspector ? (e = !0, t = !0) : n.endsWith(".poki-gdn.com") && (e = !1, t = !1), V.debugMode && (e = !0), V.logMode && (t = !0), void 0 === t && (t = e), G.debug = e, G.log = t
        }
    }
    const F = e => {
            let t = [];
            return Object.keys(e).forEach((n => {
                "object" == typeof e[n] ? t = t.concat(F(e[n])) : t.push(e[n])
            })), t
        },
        K = F;
    class z {
        static listeners = {};
        static videoDataAnnotations = {};
        static clearEventListeners() {
            this.listeners = {}
        }
        static removeEventListener(e, t) {
            if (!Object.prototype.hasOwnProperty.call(this.listeners, e)) return;
            const n = this.listeners[e].indexOf(t); - 1 !== n && this.listeners[e].splice(n, 1)
        }
        static addEventListener(e, t, n = !1) {
            if (n = !!n, Object.prototype.hasOwnProperty.call(this.listeners, e) || (this.listeners[e] = []), n) {
                const n = o => {
                    this.removeEventListener.bind(this)(e, n), t(o)
                };
                this.listeners[e].push(n)
            } else this.listeners[e].push(t)
        }
        static dispatchEvent(e, t = {}) {
            const n = Object.keys(this.listeners);
            for (let o = 0; o < n.length; o++) {
                const r = n[o];
                if (e === r) {
                    const e = this.listeners[r];
                    for (let n = 0; n < e.length; n++) e[n]({ ...this.videoDataAnnotations,
                        ...t
                    })
                }
            }
        }
        static addVideoDataAnnotations(e) {
            this.videoDataAnnotations = { ...this.videoDataAnnotations,
                ...e
            }
        }
        static getVideoDataAnnotations() {
            return this.videoDataAnnotations
        }
        static clearVideoDataAnnotations() {
            this.videoDataAnnotations = {}
        }
    }
    const H = e => {
        if ("undefined" == typeof window || "undefined" == typeof fetch) return;
        const t = z.getVideoDataAnnotations();
        let {
            size: n
        } = e;
        e.event ? .startsWith("video-") && (n = "640x360v");
        const o = { ...e,
            size: n,
            adBreakId: e.adBreakId || t.adBreakId,
            currentAdNumber: e.currentAdNumber || t.currentAdNumber,
            totalAdAmount: e.totalAdAmount || t.totalAdAmount,
            opportunity_id: e.opportunityId || t.opportunityId,
            ad_unit_path: e.adUnitPath || t.adUnitPath,
            p4d_game_id: V.gameID,
            p4d_version_id: V.versionID,
            bidder: e.bidder || t.bidder,
            bid: e.bid || t.bid || 0,
            error_code: e.errorCode,
            creative_id: e.creativeId || t.creativeId,
            experiment: V.experiment
        };
        fetch("https://t.poki.io/adserver", {
            method: "POST",
            mode: "no-cors",
            body: JSON.stringify(o)
        }).catch((e => {
            console.warn("%cPOKI:%c adserver error", "font-weight: bold", "", e)
        }))
    };

    function q(e, ...t) {
        console.warn(`%cPOKI:%c ${e}`, "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
    }

    function W(e, ...t) {
        console.error(`%cPOKI:%c ${e}`, "background-color: red; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
    }
    const Y = (e, t = !1) => new Promise(((n, o) => {
        const r = document.createElement("script");
        r.type = t ? "module" : "text/javascript", r.async = !0, r.src = e;
        const i = () => {
            r.readyState && "loaded" !== r.readyState && "complete" !== r.readyState || (n(), r.onload = null, r.onreadystatechange = null)
        };
        r.onload = i, r.onreadystatechange = i, r.onerror = o, document.head.appendChild(r)
    }));
    let J = null;
    const $ = K(e.tracking),
        Q = window;
    class Z {
        static logToObserver = !1;
        static cmpRequired = void 0;
        static cmpIndex = void 0;
        static eventQueue = [];
        static track(t, n = {}) {
            try {
                let o = { ...n
                };
                if (-1 === $.indexOf(t)) throw new TypeError(`Invalid 'event', must be one of ${$.join(", ")}`);
                if ("object" != typeof o) throw new TypeError("Invalid data, must be an object");
                const r = z.getVideoDataAnnotations();
                if (r ? .pokiAdServer) switch (t) {
                    case e.tracking.ads.status.started:
                        {
                            const {
                                creativeId: e
                            } = r;z.addVideoDataAnnotations({
                                houseAdId: e
                            }),
                            o.houseAdId = e;
                            break
                        }
                    case e.tracking.ads.status.impression:
                        {
                            const e = o ? .creativeId;H({ ...o,
                                event: "video-impression",
                                creativeId: e
                            }),
                            z.addVideoDataAnnotations({
                                houseAdId: e
                            }),
                            o.houseAdId = e;
                            break
                        }
                    case e.tracking.ads.video.error:
                        H({ ...o,
                            event: "video-error",
                            errorCode: o ? .errorCode
                        });
                        break;
                    case e.tracking.ads.video.loaderError:
                        H({ ...o,
                            event: "video-adsloader-error",
                            errorCode: o ? .errorCode
                        });
                        break;
                    case e.tracking.ads.status.completed:
                        H({ ...o,
                            event: "video-complete"
                        })
                }
                if (t.includes("pokiTrackingRewardedWeb") && (o = r), G.log) {
                    if ("test" === window ? .process ? .env ? .NODE_ENV) return;
                    Object.keys(o).length ? console.info(`%cPOKI_TRACKER:%c Tracked event '${t}' with data:`, "font-weight: bold", "", o) : console.info(`%cPOKI_TRACKER:%c Tracked event '${t}'`, "font-weight: bold", "")
                }
                if (J ? .({
                        event: t,
                        data: o
                    }), U.sendMessage(e.message.event, {
                        event: t,
                        data: o
                    }), !(V.isPokiIframe || V.isInspector || V.isPlayground || V.isPokiExternal)) {
                    const n = "sdk",
                        r = "message",
                        i = {
                            content: {
                                event: t,
                                data: o,
                                pokifordevs: {
                                    game_id: V.gameID,
                                    game_version_id: void 0
                                }
                            },
                            type: e.message.event
                        };
                    Z.logToObserver ? Z.pushEvent(n, r, i) : (Z.eventQueue.push([n, r, i]), Z.eventQueue.length > 100 && Z.eventQueue.shift())
                }
            } catch (e) {
                W("error while tracking event", e)
            }
        }
        static setupDefaultEvents() {
            const t = {
                [e.ready]: e.tracking.sdk.status.initialized,
                [e.failed]: e.tracking.sdk.status.failed,
                [e.ads.busy]: e.tracking.ads.status.busy,
                [e.ads.completed]: e.tracking.ads.status.completed,
                [e.ads.error]: e.tracking.ads.status.error,
                [e.ads.impression]: e.tracking.ads.status.impression,
                [e.ads.limit]: e.tracking.ads.status.limit,
                [e.ads.ready]: e.tracking.ads.status.ready,
                [e.ads.requested]: e.tracking.ads.status.requested,
                [e.ads.prebidRequested]: e.tracking.ads.status.prebidRequested,
                [e.ads.skipped]: e.tracking.ads.status.skipped,
                [e.ads.started]: e.tracking.ads.status.started,
                [e.ads.video.clicked]: e.tracking.ads.video.clicked,
                [e.ads.video.error]: e.tracking.ads.video.error,
                [e.ads.video.loaderError]: e.tracking.ads.video.loaderError,
                [e.ads.video.buffering]: e.tracking.ads.status.buffering,
                [e.ads.video.progress]: e.tracking.ads.video.progress,
                [e.ads.video.paused]: e.tracking.ads.video.paused,
                [e.ads.video.resumed]: e.tracking.ads.video.resumed,
                [e.ads.extendedVideoError]: e.tracking.ads.video.extendedVideoError
            };
            Object.keys(t).forEach((e => {
                z.addEventListener(e, (n => {
                    Z.track(t[e], n)
                }))
            }))
        }
        static pushEvent(e, t, n) {
            Q.pokiGTM.push({
                event: `${e}-${t}`,
                eventNoun: e,
                eventVerb: t,
                eventData: n || {}
            })
        }
        static setRequireConsent(e) {
            Z.cmpRequired = e, Z.setupObserverIfCMP()
        }
        static setupObserverWithCMP(e) {
            Z.cmpIndex = e, Z.setupObserverIfCMP()
        }
        static setupObserverIfCMP() {
            if (void 0 !== Z.cmpRequired && void 0 !== Z.cmpIndex)
                if (Z.cmpRequired) {
                    if (!window.__tcfapi) return void console.error("%cPOKI:%c PokiSDK.enableEventTracking() was called but no CMP is present.", "font-weight: bold", "");
                    window.__tcfapi("addEventListener", 2, ((e, t) => {
                        !t || "tcloaded" !== e.eventStatus && "useractioncomplete" !== e.eventStatus || (window.__tcfapi("getNonIABVendorConsents", 2, (e => {
                            e && e.nonIabVendorConsents && e.nonIabVendorConsents[Z.cmpIndex || 0] && Z.setupObserver()
                        })), window.__tcfapi("removeEventListener", 2, (() => {}), e.listenerId))
                    }))
                } else Z.setupObserver()
        }
        static setupObserver() {
            for (Q._pokiSessionGlobalName = "pokiSession", Q._pokiUserGlobalName = "pokiUser", Q._pokiContextGlobalName = "pokiContext", Q._pokiTrackerGlobalName = "pokiTracker", function(e, t, a) {
                    var c, u = null;
                    try {
                        (u = E()) ? (u.previous_page.path = u.page.path, u.previous_page.type = u.page.type, u.previous_page.id = u.page.id, u.previous_page.start = u.page.start, u.previous_page.pageview_id = u.page.pageview_id, u.page.path = e, u.page.type = t, u.page.id = a, u.page.start = Date.now(), u.page.pageview_id = r(), u.depth = P() + 1, u.expire = Date.now() + v) : u = function(e, t, a) {
                            try {
                                var s = n(b);
                                if (s) {
                                    var c = JSON.parse(s);
                                    if (S(c, !0)) return c.previous_page.path = c.page.path, c.previous_page.type = c.page.type, c.previous_page.id = c.page.id, c.previous_page.start = c.page.start, c.previous_page.pageview_id = c.page.pageview_id, c.page.path = e, c.page.type = t, c.page.id = a, c.page.start = Date.now(), c.page.pageview_id = r(), c.depth = P() + 1, c.expire = Date.now() + v, c.tab_id = _(), o(b, JSON.stringify(c)), c
                                }
                            } catch (e) {
                                var d = null;
                                try {
                                    d = n(b) || null
                                } catch (e) {}
                                i(e, "getSessionDepth", d)
                            }
                            var l = r(),
                                u = w({
                                    referrer: document.referrer,
                                    search: window.location.search
                                }),
                                p = u.source,
                                g = u.medium;
                            return {
                                id: r(),
                                expire: Date.now() + v,
                                tab_id: _(),
                                depth: 1,
                                count: I() + 1,
                                page: {
                                    path: e,
                                    type: t,
                                    id: a,
                                    start: Date.now(),
                                    pageview_id: l
                                },
                                previous_page: {},
                                landing_page: {
                                    path: e,
                                    type: t,
                                    id: a,
                                    start: Date.now(),
                                    pageview_id: l
                                },
                                referrer_domain: A(),
                                source: p,
                                medium: g
                            }
                        }(e, t, a), u.count > 1 && (c = parseInt(n(d), 10) || l, o(s, "0", c), window[window._pokiUserGlobalName] && (window[window._pokiUserGlobalName].is_new = !1));
                        var p = JSON.stringify(u);
                        try {
                            sessionStorage.setItem(b, p)
                        } catch (e) {
                            i(e, "updateSession-1")
                        }
                        window[window._pokiSessionGlobalName] = u;
                        try {
                            o(b, p)
                        } catch (e) {
                            i(e, "updateSession-4")
                        }
                    } catch (e) {
                        i(e, "updateSession-2")
                    }
                }(window.location.pathname, "external", V.contentGameID), function() {
                    var e, t, i, u, p = null === (e = window[window._pokiUserGlobalName]) || void 0 === e ? void 0 : e.id,
                        g = (null === (t = window[window._pokiUserGlobalName]) || void 0 === t ? void 0 : t.is_new) || !1,
                        f = (null === (i = window[window._pokiUserGlobalName]) || void 0 === i ? void 0 : i.version) || 0,
                        m = (null === (u = window[window._pokiUserGlobalName]) || void 0 === u ? void 0 : u.ttl) || l;
                    p || (p = n(a), g = "1" === n(s), f = parseInt(n(c), 10) || 0, m = parseInt(n(d), 10) || m), p && function(e) {
                        if (!/^[A-Za-z0-9-_]+$/.test(e)) return !1;
                        try {
                            return 16 === atob(e.replace(/-/g, "+").replace(/_/g, "/")).length
                        } catch (e) {
                            return !1
                        }
                    }(p) || (p = r(), g = !0, f = 2, m = l), o(a, p, m), o(s, g ? "1" : "0", m), o(c, f, m), o(d, m, m), window[window._pokiUserGlobalName] = {
                        id: p,
                        is_new: g,
                        version: f,
                        ttl: m
                    }
                }(), Q[Q._pokiSessionGlobalName].referrer = V.referrerParam, Q[Q._pokiContextGlobalName] = {
                    tag: null,
                    site: {
                        id: null,
                        domain: window.location.hostname,
                        prefix: ""
                    },
                    page: {
                        id: V.contentGameID,
                        type: "external",
                        path: window.location.pathname,
                        pageview_id: r()
                    },
                    user: Q[Q._pokiUserGlobalName],
                    session: Q[Q._pokiSessionGlobalName]
                }, Q.pokiGTM = Q.pokiGTM || [], Y("https://a.poki-cdn.com/t2.js"), Z.logToObserver = !0; Z.eventQueue.length;) {
                const [e, t, n] = Z.eventQueue.shift();
                Z.pushEvent(e, t, n)
            }
        }
    }

    function X() {
        const e = window,
            t = [];
        return "function" != typeof e.ga && "function" != typeof e.gtag || t.push("ga"), e.mixpanel && "function" == typeof e.mixpanel.track && t.push("mixpanel"), "function" == typeof e.GameAnalytics && t.push("gameanalytics"), (e.kongregateAPI || e.kongregate) && t.push("kongregate"), e.FlurryAgent && t.push("flurry"), e.Countly && t.push("countly"), e.amplitude && t.push("amplitude"), t
    }

    function ee(e) {
        switch (Object.prototype.toString.call(e)) {
            case "[object Error]":
            case "[object Exception]":
            case "[object DOMException]":
                return !0;
            default:
                return e instanceof Error
        }
    }

    function te(e) {
        try {
            const t = new WeakSet;
            return JSON.stringify(e, ((e, n) => {
                if ("object" == typeof n && null !== n) {
                    if (t.has(n)) return "[Circular]";
                    t.add(n)
                }
                return n
            }))
        } catch {
            try {
                return e.toString()
            } catch {
                return "[Object]"
            }
        }
    }
    let ne;

    function oe() {
        return ne
    }
    const re = [],
        ie = function(e) {
            let t = !1,
                n = 0;
            return o => {
                if (t) return void n++;
                t = !0, setTimeout((() => {
                    t = !1
                }), e);
                const r = n;
                n = 0, o(r)
            }
        }(100),
        ae = console.error,
        se = ["Audio callback had starved sending audio by"];
    let ce = !1;
    const de = Math.random().toString(36).substring(2);
    let le;

    function ue() {
        const e = window;
        if (e.config ? .unityVersion) return e.config.unityVersion;
        if (e.Phaser ? .VERSION) return e.Phaser.VERSION;
        if (e.pc ? .version) return e.pc.version;
        if (e.Module ? .engineVersion) return e.Module.engineVersion;
        const t = oe();
        return t || void 0
    }

    function pe(e, t = !0) {
        V.gameID && !V.isPlayground ? ie((t => {
            try {
                const n = e.message || te(e);
                re.push({
                    n: e.name,
                    m: n,
                    s: JSON.stringify(e.stack)
                }), le && le({
                    name: e.name,
                    message: n,
                    stack: e.stack
                });
                const o = JSON.stringify({
                        gid: V.gameID,
                        vid: V.versionID,
                        ve: 7,
                        n: e.name,
                        m: n + (t ? ` (skipped ${t} errors)` : ""),
                        s: JSON.stringify(e.stack),
                        ui: de,
                        ev: `${ue()}`
                    }),
                    r = "https://t.poki.io/ge";
                if (navigator.sendBeacon) navigator.sendBeacon(r, o);
                else {
                    const e = new XMLHttpRequest;
                    e.open("POST", r, !0), e.send(o)
                }
            } catch (e) {
                ae("%cPOKI:%c failed to log error", "font-weight: bold", "", e)
            }
        })) : t && console.error("%cPOKI:%c game error", "font-weight: bold", "", e)
    }

    function ge(e) {
        ee(e.reason) ? pe(e.reason) : pe({
            name: "unhandledrejection",
            message: JSON.stringify(e.reason) || te(e)
        })
    }

    function fe(e) {
        ee(e.error) ? pe(e.error) : pe(e)
    }

    function me() {
        if (V.gameID && !V.isPlayground && !V.isPokiExternal && V.isPokiIframe && !ce) {
            ce = !0, window.addEventListener("unhandledrejection", ge), window.addEventListener("error", fe);
            try {
                console.error = (...e) => {
                    const t = te(e);
                    se.some((e => t.includes(e))) || pe({
                        name: "console.error",
                        message: t
                    }, !1), ae.apply(console, e)
                }
            } catch {}
        }
    }
    "undefined" != typeof window && me();
    const he = () => {
        let e = Math.floor(Date.now() / 1e3),
            t = "";
        for (let n = 0; n < 4; n++) t = String.fromCharCode(255 & e) + t, e >>= 8;
        if (window.crypto && crypto.getRandomValues && Uint32Array) {
            const e = new Uint32Array(12);
            crypto.getRandomValues(e);
            for (let n = 0; n < 12; n++) t += String.fromCharCode(255 & e[n])
        } else
            for (let e = 0; e < 12; e++) t += String.fromCharCode(Math.floor(256 * Math.random()));
        return btoa(t).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "")
    };
    var ye;
    ! function(e) {
        e.SMALL = "small", e.MEDIUM = "medium", e.LARGE = "large"
    }(ye || (ye = {}));
    const we = window.requestAnimationFrame;

    function ve(e) {
        return Math.round(100 * e) / 100
    }
    class be {#
        e = [];#
        t = 0;#
        n;
        constructor(e) {
            Math.random() > e || (this.#n = performance.now() + 1e3, we((() => {
                this.#o()
            })))
        }#
        o() {
            const e = performance.now();
            for (; e >= this.#n;) this.#e.unshift(this.#t), this.#e.length > 10 && this.#e.pop(), this.#t = 0, this.#n += 1e3;
            this.#t++, we((() => {
                this.#o()
            }))
        }
        stats() {
            if (0 === this.#e.length) return;
            const e = Math.min(...this.#e),
                t = Math.max(...this.#e),
                n = ve(this.#e.reduce(((e, t) => e + t), 0) / this.#e.length);
            let o = ve(this.#e.slice(1).map(((e, t) => Math.abs(e - this.#e[t]))).reduce(((e, t) => e + t), 0) / (this.#e.length - 1));
            return Number.isNaN(o) && (o = 0), `${e}|${t}|${n}|${o}`
        }
    }
    const ke = Math.random().toString(36).substring(2);
    async function Ae() {
        const e = await window.cookieStore.getAll(),
            t = window.indexedDB.databases ? await window.indexedDB.databases() : [];
        return [...e.map((e => ({
            name: e.name,
            expire_seconds: Math.round((e.expires - Date.now()) / 1e3),
            type: "cookie",
            domain: e.domain
        }))), ...Object.keys(window.localStorage).map((e => ({
            name: e,
            expire_seconds: 15552e3,
            type: "localStorage"
        }))), ...t.map((e => ({
            name: e.name,
            expire_seconds: 0,
            type: "idb"
        })))]
    }
    class Se {
        static async collectAndLog() {
            try {
                const e = {
                    cookies: await Ae(),
                    p4d_game_id: V.gameID,
                    user_id: ke
                };
                fetch("https://t.poki.io/game-cookies", {
                    method: "post",
                    body: JSON.stringify(e)
                }).catch()
            } catch {}
        }
        static trackSavegames() {
            window.cookieStore && window.cookieStore.getAll && V.gameID && (Math.random() > .01 || navigator.userAgent.indexOf("Safari") > -1 && navigator.userAgent.indexOf("Chrome") <= -1 || (Se.collectAndLog(), setInterval(Se.collectAndLog, 12e4)))
        }
    }
    const Ee = (() => {
        let e = 0;
        return () => (e += 1, `u${`0000${((36*Math.random())**4|0).toString(36)}`.slice(-4)}${e}`)
    })();

    function Ie(e) {
        const t = [];
        for (let n = 0, o = e.length; n < o; n++) t.push(e[n]);
        return t
    }

    function _e(e) {
        return "style" in e
    }
    const Pe = (e, t) => {
            if (e instanceof t) return !0;
            const n = Object.getPrototypeOf(e);
            return null !== n && (n.constructor.name === t.name || Pe(n, t))
        },
        Te = new Set(["cx", "cy", "x", "y", "r", "rx", "ry", "d", "fill", "alignment-baseline", "baseline-shift", "clip-rule", "color-interpolation", "color-interpolation-filters", "color-rendering", "dominant-baseline", "fill-opacity", "fill-rule", "flood-color", "flood-opacity", "glyph-orientation-horizontal", "glyph-orientation-vertical", "lighting-color", "marker-end", "marker-mid", "marker-start", "paint-order", "shape-rendering", "stop-color", "stop-opacity", "stroke", "stroke-dasharray", "stroke-dashoffset", "stroke-linecap", "stroke-linejoin", "stroke-miterlimit", "stroke-opacity", "stroke-width", "text-anchor", "vector-effect"]),
        xe = {
            html: void 0,
            svg: void 0
        };

    function Oe(e, t = {}) {
        const n = Pe(e, SVGElement) ? "svg" : "html",
            o = xe[n];
        if (o) return o;
        const r = t.includeStyleProperties ? ? Ie(window.getComputedStyle(document.documentElement)),
            i = "html" === n ? r.filter((e => !Te.has(e))) : [...r];
        return xe[n] = i, i
    }

    function Ce(e, t) {
        const n = (e.ownerDocument.defaultView || window).getComputedStyle(e).getPropertyValue(t);
        return n ? parseFloat(n.replace("px", "")) : 0
    }

    function De(e, t = {}) {
        return {
            width: t.width || function(e) {
                const t = Ce(e, "border-left-width"),
                    n = Ce(e, "border-right-width");
                return e.clientWidth + t + n
            }(e),
            height: t.height || function(e) {
                const t = Ce(e, "border-top-width"),
                    n = Ce(e, "border-bottom-width");
                return e.clientHeight + t + n
            }(e)
        }
    }
    const Le = 16384;

    function Me(e) {
        return new Promise(((t, n) => {
            const o = new Image;
            o.decode = () => t(o), o.onload = () => t(o), o.onerror = n, o.crossOrigin = "anonymous", o.decoding = "async", o.src = e
        }))
    }
    async function Ne(e, t, n) {
        const o = "http://www.w3.org/2000/svg",
            r = document.createElementNS(o, "svg"),
            i = document.createElementNS(o, "foreignObject");
        return r.setAttribute("width", `${t}`), r.setAttribute("height", `${n}`), r.setAttribute("viewBox", `0 0 ${t} ${n}`), i.setAttribute("width", "100%"), i.setAttribute("height", "100%"), i.setAttribute("x", "0"), i.setAttribute("y", "0"), i.setAttribute("externalResourcesRequired", "true"), r.appendChild(i), i.appendChild(e), async function(e) {
            return Promise.resolve().then((() => (new XMLSerializer).serializeToString(e))).then(encodeURIComponent).then((e => `data:image/svg+xml;charset=utf-8,${e}`))
        }(r)
    }

    function Be(e, t, n, o) {
        const r = `.${e}:${t}`,
            i = n.cssText ? function(e) {
                const t = e.getPropertyValue("content");
                return `${e.cssText} content: '${t.replace(/'|"/g,"")}';`
            }(n) : function(e, t) {
                return Oe(document.documentElement, t).map((t => `${t}: ${e.getPropertyValue(t)}${e.getPropertyPriority(t)?" !important":""};`)).join(" ")
            }(n, o);
        return document.createTextNode(`${r}{${i}}`)
    }

    function Re(e, t, n, o) {
        const r = window.getComputedStyle(e, n),
            i = r.getPropertyValue("content");
        if ("" === i || "none" === i) return;
        const a = Ee();
        try {
            t.className = `${t.className} ${a}`
        } catch {
            return
        }
        const s = document.createElement("style");
        s.appendChild(Be(a, n, r, o)), t.appendChild(s)
    }
    const je = "application/font-woff",
        Ve = "image/jpeg",
        Ue = {
            woff: je,
            woff2: je,
            ttf: "application/font-truetype",
            eot: "application/vnd.ms-fontobject",
            png: "image/png",
            jpg: Ve,
            jpeg: Ve,
            gif: "image/gif",
            tiff: "image/tiff",
            svg: "image/svg+xml",
            webp: "image/webp"
        };

    function Ge(e) {
        const t = function(e) {
            const t = /\.([^./]*?)$/g.exec(e);
            return t ? t[1] : ""
        }(e).toLowerCase();
        return Ue[t] || ""
    }

    function Fe(e) {
        return -1 !== e.search(/^(data:)/)
    }

    function Ke(e, t) {
        return `data:${t};base64,${e}`
    }
    async function ze(e, t, n) {
        const o = await fetch(e, t);
        if (404 === o.status) throw new Error(`Resource "${o.url}" not found`);
        const r = await o.blob();
        return new Promise(((e, t) => {
            const i = new FileReader;
            i.onerror = t, i.onloadend = () => {
                try {
                    e(n({
                        res: o,
                        result: i.result
                    }))
                } catch (e) {
                    t(e)
                }
            }, i.readAsDataURL(r)
        }))
    }
    const He = {};
    async function qe(e, t, n) {
        const o = function(e, t, n) {
            let o = e.replace(/\?.*/, "");
            return n && (o = e), /ttf|otf|eot|woff2?/i.test(o) && (o = o.replace(/.*\//, "")), t ? `[${t}]${o}` : o
        }(e, t, n.includeQueryParams);
        if (null != He[o]) return He[o];
        let r;
        n.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
        try {
            const o = await ze(e, n.fetchRequestInit, (({
                res: e,
                result: n
            }) => (t || (t = e.headers.get("Content-Type") || ""), function(e) {
                return e.split(/,/)[1]
            }(n))));
            r = Ke(o, t)
        } catch (t) {
            r = n.imagePlaceholder || "";
            let o = `Failed to fetch resource: ${e}`;
            t && (o = "string" == typeof t ? t : t.message), o && console.warn("%cPOKI:%c failed to fetch resource", "font-weight: bold", "", o)
        }
        return He[o] = r, r
    }
    async function We(e, t) {
        return Pe(e, HTMLCanvasElement) ? async function(e) {
            try {
                if (e.getContext("2d")) return Me(e.toDataURL())
            } catch {}
            if (0 === e.width || 0 === e.height) return Me("data:,");
            const t = document.createElement("canvas").getContext("2d", {
                alpha: !0
            });
            t.canvas.width = e.width, t.canvas.height = e.height;
            const n = t.getImageData(0, 0, t.canvas.width, t.canvas.height);
            return Me(await new Promise((o => {
                try {
                    requestAnimationFrame((() => {
                        const r = document.createElement("canvas").getContext("webgl2"),
                            i = r.createTexture(),
                            a = r.createFramebuffer();
                        r.bindTexture(r.TEXTURE_2D, i), r.bindFramebuffer(r.FRAMEBUFFER, a), r.texImage2D(r.TEXTURE_2D, 0, r.RGBA, r.RGBA, r.UNSIGNED_BYTE, e), r.framebufferTexture2D(r.FRAMEBUFFER, r.COLOR_ATTACHMENT0, r.TEXTURE_2D, i, 0), r.readPixels(0, 0, e.width, e.height, r.RGBA, r.UNSIGNED_BYTE, new Uint8Array(n.data.buffer)), t.putImageData(n, 0, 0), r.deleteTexture(i), r.deleteFramebuffer(a);
                        const s = r.getExtension("WEBGL_lose_context");
                        s && s.loseContext(), o(t.canvas.toDataURL())
                    }))
                } catch {
                    o("data:,")
                }
            })))
        }(e) : Pe(e, HTMLVideoElement) ? async function(e, t) {
            if (e.currentSrc) {
                const t = document.createElement("canvas"),
                    n = t.getContext("2d");
                return t.width = e.clientWidth, t.height = e.clientHeight, n ? .drawImage(e, 0, 0, t.width, t.height), Me(t.toDataURL())
            }
            const {
                poster: n
            } = e, o = Ge(n);
            return Me(await qe(n, o, t))
        }(e, t) : Pe(e, HTMLIFrameElement) ? async function(e, t) {
            try {
                if (e ? .contentDocument ? .body) return await Ze(e.contentDocument.body, t, !0)
            } catch {}
            return e.cloneNode(!1)
        }(e, t) : e.cloneNode(Je(e))
    }
    const Ye = e => "SLOT" === e.tagName ? .toUpperCase(),
        Je = e => null != e.tagName && "SVG" === e.tagName.toUpperCase();

    function $e(e, t, n) {
        return function(e, t, n) {
            const o = t.style;
            if (!o) return;
            const r = window.getComputedStyle(e);
            r.cssText ? (o.cssText = r.cssText, o.transformOrigin = r.transformOrigin) : Oe(e, n).forEach((n => {
                let i = r.getPropertyValue(n);
                if ("font-size" === n && i.endsWith("px")) {
                    const e = Math.floor(parseFloat(i.substring(0, i.length - 2))) - .1;
                    i = `${e}px`
                }
                Pe(e, HTMLIFrameElement) && "display" === n && "inline" === i && (i = "block"), "d" === n && t.getAttribute("d") && (i = `path(${t.getAttribute("d")})`), o.setProperty(n, i, r.getPropertyPriority(n))
            }))
        }(e, t, n), Pe(e, HTMLElement) && Pe(t, HTMLElement) && (function(e, t) {
            Pe(e, HTMLTextAreaElement) && (t.innerHTML = e.value), Pe(e, HTMLInputElement) && t.setAttribute("value", e.value)
        }(e, t), function(e, t) {
            if (Pe(e, HTMLSelectElement)) {
                const n = t,
                    o = Array.from(n.children).find((t => e.value === t.getAttribute("value")));
                o && o.setAttribute("selected", "")
            }
        }(e, t), function(e, t, n) {
            Re(e, t, ":before", n), Re(e, t, ":after", n)
        }(e, t, n), n.patchScroll) ? function(e, t) {
            if (0 === e.scrollTop && 0 === e.scrollLeft || !t.children) return t;
            for (let n = 0; n < t.children.length; n += 1) {
                const o = t.children[n];
                if (!o.children) continue;
                const {
                    transform: r
                } = o.style, i = new DOMMatrix(r), {
                    a: a,
                    b: s,
                    c: c,
                    d: d
                } = i;
                i.a = 1, i.b = 0, i.c = 0, i.d = 1, i.translateSelf(-e.scrollLeft, -e.scrollTop), i.a = a, i.b = s, i.c = c, i.d = d, o.style.transform = i.toString()
            }
            return t
        }(e, t) : t
    }
    let Qe = 0;
    async function Ze(e, t, n) {
        return n || !t.filter || t.filter(e) ? _e(e) ? (Qe++, Qe % 5 == 0 && await (o = 0, e => new Promise((t => {
            setTimeout((() => t(e)), o)
        }))), Promise.resolve(e).then((e => We(e, t))).then((n => async function(e, t, n) {
            if (Je(t)) return t;
            let o = [];
            return o = Ye(e) && e.assignedNodes ? Ie(e.assignedNodes()) : Pe(e, HTMLIFrameElement) && e.contentDocument ? .body ? Ie(e.contentDocument.body.childNodes) : Ie(("shadowRoot" in e ? e.shadowRoot ? ? e : e).childNodes), 0 === o.length || Pe(e, HTMLVideoElement) || await o.reduce(((e, o) => e.then((() => Ze(o, n))).then((e => {
                e && t.appendChild(e)
            }))), Promise.resolve()), t
        }(e, n, t))).then((n => $e(e, n, t))).then((e => async function(e, t) {
            const n = e.querySelectorAll ? e.querySelectorAll("use") : [];
            if (0 === n.length) return e;
            const o = {};
            for (let r = 0; r < n.length; r++) {
                const i = n[r].getAttribute("xlink:href");
                if (i) {
                    const n = e.querySelector(i),
                        r = document.querySelector(i);
                    n || !r || o[i] || (o[i] = await Ze(r, t, !0))
                }
            }
            const r = Object.values(o);
            if (r.length) {
                const t = "http://www.w3.org/1999/xhtml",
                    n = document.createElementNS(t, "svg");
                n.setAttribute("xmlns", t), n.style.position = "absolute", n.style.width = "0", n.style.height = "0", n.style.overflow = "hidden", n.style.display = "none";
                const o = document.createElementNS(t, "defs");
                n.appendChild(o);
                for (let e = 0; e < r.length; e++) o.appendChild(r[e]);
                e.appendChild(n)
            }
            return e
        }(e, t)))) : e.cloneNode(!1) : null;
        var o
    }
    const Xe = /url\((['"]?)([^'"]+?)\1\)/g,
        et = /url\([^)]+\)\s*format\((["']?)([^"']+)\1\)/g,
        tt = /src:\s*(?:url\([^)]+\)\s*format\([^)]+\)[,;]\s*)+/g;
    async function nt(e, t, n, o, r) {
        try {
            const i = n ? function(e, t) {
                    if (e.match(/^[a-z]+:\/\//i)) return e;
                    if (e.match(/^\/\//)) return window.location.protocol + e;
                    if (e.match(/^[a-z]+:/i)) return e;
                    const n = document.implementation.createHTMLDocument(),
                        o = n.createElement("base"),
                        r = n.createElement("a");
                    return n.head.appendChild(o), n.body.appendChild(r), t && (o.href = t), r.href = e, r.href
                }(t, n) : t,
                a = Ge(t);
            let s;
            if (r) {
                s = Ke(await r(i), a)
            } else s = await qe(i, a, o);
            return e.replace(function(e) {
                const t = e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1");
                return new RegExp(`(url\\(['"]?)(${t})(['"]?\\))`, "g")
            }(t), `$1${s}$3`)
        } catch {}
        return e
    }

    function ot(e) {
        return -1 !== e.search(Xe)
    }
    async function rt(e, t, n) {
        if (!ot(e)) return e;
        const o = function(e, {
                preferredFontFormat: t
            }) {
                return t ? e.replace(tt, (e => {
                    for (;;) {
                        const [n, , o] = et.exec(e) || [];
                        if (!o) return "";
                        if (o === t) return `src: ${n};`
                    }
                })) : e
            }(e, n),
            r = function(e) {
                const t = [];
                return e.replace(Xe, ((e, n, o) => (t.push(o), e))), t.filter((e => !Fe(e)))
            }(o);
        return r.reduce(((e, o) => e.then((e => nt(e, o, t, n)))), Promise.resolve(o))
    }
    async function it(e, t, n) {
        const o = t.style ? .getPropertyValue(e);
        if (o) {
            const r = await rt(o, null, n);
            return t.style.setProperty(e, r, t.style.getPropertyPriority(e)), !0
        }
        return !1
    }
    async function at(e, t) {
        _e(e) && (await async function(e, t) {
            await it("background", e, t) || await it("background-image", e, t), await it("mask", e, t) || await it("mask-image", e, t)
        }(e, t), await async function(e, t) {
            const n = Pe(e, HTMLImageElement),
                o = Pe(e, SVGImageElement);
            if ((!n || Fe(e.src)) && (!o || Fe(e.href.baseVal))) return;
            const r = n ? e.src : e.href.baseVal,
                i = await qe(r, Ge(r), t);
            await new Promise(((t, o) => {
                e.onload = t, e.onerror = o;
                const r = e;
                r.decode && (r.decode = t), "lazy" === r.loading && (r.loading = "eager"), n ? (e.srcset = "", e.src = i) : e.href.baseVal = i
            }))
        }(e, t), await async function(e, t) {
            const n = Ie(e.childNodes).map((e => at(e, t)));
            await Promise.all(n).then((() => e))
        }(e, t))
    }
    const st = {};
    async function ct(e) {
        let t = st[e];
        if (null != t) return t;
        const n = await fetch(e);
        return t = {
            url: e,
            cssText: await n.text()
        }, st[e] = t, t
    }
    async function dt(e, t) {
        let {
            cssText: n
        } = e;
        const o = /url\(["']?([^"')]+)["']?\)/g,
            r = (n.match(/url\([^)]+\)/g) || []).map((async r => {
                let i = r.replace(o, "$1");
                return i.startsWith("https://") || (i = new URL(i, e.url).href), ze(i, t.fetchRequestInit, (({
                    result: e
                }) => (n = n.replace(r, `url(${e})`), [r, e])))
            }));
        return Promise.all(r).then((() => n))
    }

    function lt(e) {
        if (null == e) return [];
        const t = [];
        let n = e.replace(/(\/\*[\s\S]*?\*\/)/gi, "");
        const o = new RegExp("((@.*?keyframes [\\s\\S]*?){([\\s\\S]*?}\\s*?)})", "gi");
        for (;;) {
            const e = o.exec(n);
            if (null === e) break;
            t.push(e[0])
        }
        n = n.replace(o, "");
        const r = /@import[\s\S]*?url\([^)]*\)[\s\S]*?;/gi,
            i = new RegExp("((\\s*?(?:\\/\\*[\\s\\S]*?\\*\\/)?\\s*?@media[\\s\\S]*?){([\\s\\S]*?)}\\s*?})|(([\\s\\S]*?){([\\s\\S]*?)})", "gi");
        for (;;) {
            let e = r.exec(n);
            if (null === e) {
                if (e = i.exec(n), null === e) break;
                r.lastIndex = i.lastIndex
            } else i.lastIndex = r.lastIndex;
            t.push(e[0])
        }
        return t
    }
    async function ut(e, t) {
        if (null == e.ownerDocument) throw new Error("Provided element is not within a Document");
        const n = Ie(e.ownerDocument.styleSheets),
            o = await async function(e, t) {
                const n = [],
                    o = [];
                return e.forEach((n => {
                    if ("cssRules" in n) try {
                        Ie(n.cssRules || []).forEach(((e, r) => {
                            if (e instanceof CSSImportRule) {
                                let i = r + 1;
                                const a = ct(e.href).then((e => dt(e, t))).then((e => lt(e).forEach((e => {
                                    try {
                                        n.insertRule(e, e.startsWith("@import") ? i += 1 : n.cssRules.length)
                                    } catch (t) {
                                        console.error("Error inserting rule from remote css", {
                                            rule2: e,
                                            err: t
                                        })
                                    }
                                })))).catch((e => {
                                    console.error("Error loading remote css", e.toString())
                                }));
                                o.push(a)
                            }
                        }))
                    } catch (r) {
                        const i = e.find((e => null == e.href)) || document.styleSheets[0];
                        null != n.href && o.push(ct(n.href).then((e => dt(e, t))).then((e => lt(e).forEach((e => {
                            i.insertRule(e, i.cssRules.length)
                        })))).catch((e => {
                            console.error("Error loading remote stylesheet", e)
                        }))), console.error("Error inlining remote css file", r)
                    }
                })), Promise.all(o).then((() => (e.forEach((e => {
                    if ("cssRules" in e) try {
                        Ie(e.cssRules || []).forEach((e => {
                            n.push(e)
                        }))
                    } catch (t) {
                        console.error(`Error while reading CSS rules from ${e.href}`, t)
                    }
                })), n)))
            }(n, t);
        return function(e) {
            return e.filter((e => e instanceof CSSFontFaceRule)).filter((e => ot(e.style.getPropertyValue("src"))))
        }(o)
    }
    async function pt(e, t) {
        const n = null != t.fontEmbedCSS ? t.fontEmbedCSS : t.skipFonts ? null : await async function(e, t) {
            const n = await ut(e, t);
            return (await Promise.all(n.map((e => {
                const n = e.parentStyleSheet ? e.parentStyleSheet.href : null;
                return rt(e.cssText, n, t)
            })))).join("\n")
        }(e, t);
        if (n) {
            const t = document.createElement("style"),
                o = document.createTextNode(n);
            t.appendChild(o), e.firstChild ? e.insertBefore(t, e.firstChild) : e.appendChild(t)
        }
    }
    async function gt(e, t = {}) {
        const {
            width: n,
            height: o
        } = De(e, t), r = await Ze(e, t, !0);
        await pt(r, t), await at(r, t),
            function(e, t) {
                const {
                    style: n
                } = e;
                t.backgroundColor && (n.backgroundColor = t.backgroundColor), t.width && (n.width = `${t.width}px`), t.height && (n.height = `${t.height}px`);
                const o = t.style;
                null != o && Object.keys(o).forEach((e => {
                    n[e] = o[e]
                }))
            }(r, t);
        return await Ne(r, n, o)
    }
    async function ft(e, t = {}) {
        const {
            width: n,
            height: o
        } = De(e, t), r = await gt(e, t), i = await Me(r), a = document.createElement("canvas"), s = a.getContext("2d"), c = window.devicePixelRatio || 1, d = t.canvasWidth || n, l = t.canvasHeight || o;
        return a.width = d * c, a.height = l * c, t.skipAutoScale || function(e) {
            (e.width > Le || e.height > Le) && (e.width > Le && e.height > Le ? e.width > e.height ? (e.height *= Le / e.width, e.width = Le) : (e.width *= Le / e.height, e.height = Le) : e.width > Le ? (e.height *= Le / e.width, e.width = Le) : (e.width *= Le / e.height, e.height = Le))
        }(a), a.style.width = `${d}`, a.style.height = `${l}`, t.backgroundColor && (s.fillStyle = t.backgroundColor, s.fillRect(0, 0, a.width, a.height)), s.drawImage(i, 0, 0, a.width, a.height), a
    }
    async function mt(e, t = {}) {
        return (await ft(e, t)).toDataURL()
    }
    const ht = "pokiSdkContainer";
    async function yt(e, t = {}, n = 5e3) {
        const o = new AbortController,
            {
                signal: r
            } = o,
            i = { ...t,
                signal: r
            };
        let a = null;
        const s = new Promise(((e, t) => {
            a = setTimeout((() => {
                o.abort(), t(new DOMException(`Signal timed out after ${n}ms`, "AbortError"))
            }), n)
        }));
        try {
            const t = await Promise.race([fetch(e, i), s]);
            return a && clearTimeout(a), t
        } catch (t) {
            throw a && clearTimeout(a), t instanceof Error && "AbortError" === t.name ? (console.error(`%cPOKI:%c fetchWithTimeout: Fetch aborted for ${e}. Error: ${t.message}`), t) : t instanceof Error ? (console.error(`%cPOKI:%c fetchWithTimeout: Fetch error for ${e}:`, t.message), t) : (console.error(`%cPOKI:%c fetchWithTimeout: An unexpected error occurred for ${e}:`, t), new Error("An unexpected fetch error occurred."))
        }
    }
    const wt = async e => {
            const {
                screenshot: t
            } = e, n = await yt("https://api.poki.io/screenshot", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    data: t,
                    p4d_game_id: V.gameID,
                    p4d_version_id: V.versionID
                })
            }, 3e4);
            try {
                if (200 === n.status) {
                    return "https://poki-user-content.com/" + (await n.json()).source
                }
            } catch {}
            return null
        },
        vt = async () => {
            const e = e => !["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"].includes(e.nodeName) && (!("IMG" === e.nodeName && !e.getAttribute("src")) && !e.classList ? .contains(ht)),
                t = document.body.style.minWidth,
                n = document.body.style.minHeight;
            document.body.style.minWidth = "100%", document.body.style.minHeight = "100%";
            let o = await mt(document.body, {
                filter: e,
                width: window.innerWidth,
                height: window.innerHeight,
                backgroundColor: "#fff"
            });
            if (o && o.length < 10) {
                const t = document.body.style.position;
                document.body.style.position = "fixed", o = await mt(document.body, {
                    filter: e,
                    width: window.innerWidth,
                    height: window.innerHeight,
                    backgroundColor: "#fff"
                }), document.body.style.position = t
            }
            return document.body.style.minWidth = t, document.body.style.minHeight = n, o
        },
        bt = async (e = null) => {
            let t = await vt();
            if (t && t.length > 10) {
                e && (t = await (async (e, t) => {
                    const {
                        title: n,
                        thumbnail: o
                    } = t, r = new Image;
                    r.crossOrigin = "Anonymous";
                    const i = new Promise((e => {
                        r.onload = () => e(r)
                    }));
                    r.src = e;
                    const a = new Image;
                    a.crossOrigin = "Anonymous";
                    const s = new Promise((e => {
                        a.onload = () => e(a)
                    }));
                    a.src = "https://a.poki-cdn.com/images/screenshot-frame.png";
                    const c = new Image;
                    c.crossOrigin = "Anonymous";
                    const d = new Promise((e => {
                        c.onload = () => e(c)
                    }));
                    c.src = `https://img.poki-cdn.com/cdn-cgi/image/quality=78,width=128,height=128,fit=cover,f=auto/${o}`;
                    const l = new FontFace("TorusBold", "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)").load(),
                        [u, p, g, f] = await Promise.all([i, s, d, l]),
                        m = document.createElement("canvas");
                    m.width = u.width, m.height = u.height;
                    const h = m.getContext("2d");
                    h.drawImage(u, 0, 0);
                    const y = m.width / p.width,
                        w = p.height * y,
                        v = m.height - w;
                    h.drawImage(p, 0, v, m.width, w);
                    const b = g.height * y;
                    ((e, t, n, o, r, i, a) => {
                        e.save(), e.beginPath();
                        const s = n + r,
                            c = o + i;
                        e.moveTo(n + a, o), e.lineTo(s - a, o), e.quadraticCurveTo(s, o, s, o + a), e.lineTo(s, c - a), e.quadraticCurveTo(s, c, s - a, c), e.lineTo(n + a, c), e.quadraticCurveTo(n, c, n, c - a), e.lineTo(n, o + a), e.quadraticCurveTo(n, o, n + a, o), e.closePath(), e.clip(), e.drawImage(t, n, o, r, i), e.restore()
                    })(h, g, 64 * y, v + 20 * y, b, b, 24 * y);
                    const {
                        fonts: k
                    } = document;
                    k.add(f);
                    const A = 226 * y,
                        S = v + 68 * y;
                    return h.textAlign = "left", h.textBaseline = "top", h.fillStyle = "#002b50", h.font = `700 ${56*y}px TorusBold,sans-serif`, h.fillText(n, A, S), m.toDataURL()
                })(t, e));
                return await wt({
                    screenshot: t
                })
            }
            return null
        };

    function kt() {
        let e;
        try {
            e = performance.getEntriesByType("resource").map((e => e.encodedBodySize)).reduce(((e, t) => e + t)), e += performance.getEntriesByType("navigation")[0].encodedBodySize
        } catch {}
        return e
    }
    const At = "once",
        St = "force",
        Et = "on",
        It = "off";
    let _t = [],
        Pt = "";

    function Tt() {
        return _t
    }

    function xt(e) {
        _t = e
    }

    function Ot() {
        return Pt
    }

    function Ct(e) {
        if ("" !== e && e !== At && e !== St && e !== Et && e !== It) throw new Error(`Invalid playtest capture mode: ${e}`);
        Pt = e
    }
    const Dt = "MacIntel" === window.navigator.platform && void 0 !== window.navigator.standalone && navigator.maxTouchPoints > 1,
        Lt = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    const Mt = C() || D() || Dt;
    let Nt = !1;
    const Bt = new Image;
    Bt.src = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAdCAYAAACqhkzFAAADE2lDQ1BJQ0MgcHJvZmlsZQAAeNp9kk9s21Qcxz+2X92qCh4qYRqoqnIAKqoNma6gbkAhadI/tOuyJB1t4IDrOHUSx7ZsZyw9IuAIk+AAJ1BXCQ4cOMDWgZDQDttlEoi/EkIc0DQuO1ExTYIqHOKsOfEu7/s++r7v7/d+eiB2DN93BNB0o6Awn0mtrZdTg38i8TAjPMghwwz9dD6/DNDb+5YEd35GAvjhmOH7zpWvPt3rnJoYe2f/8/GxV3N3+f81XLFCE/gX5C9NP4hA2QXyr0V+BGIISAZr62UQo0Bys6t1ILnR1VkgGZQKsyDWgJRpGxUQ54GjG318s083nZYZ9zAGJIJWYRXQQDofNopLsX7LNHJF4H6Q3rOtxWVAgLTjR5lC7PmkGsytxp5Ldmuhl3OtFi2WYv1jw1sqAMMg/WGGs+XeXXdj5TSQAOl2q7GajvndipXN9TyBV4g9srpll14CVJBHwnPFHDAC8pEte3Yl5hN148V87NctZz6uKz/rR/nT9+o6K8vAYZDnrPDgjZFdWuhq+ZUoKPXuOtXa3GKcec4OFgqxft138su9TCPIzQNJkN+23NVil8vbFSO7FOd8JkbFjHhOTIuMmBEvkKVGiI+DRZ08Bi4RBg4OxsCtge85hYdLjQiPoO9k0SJgiRp1LBy2pDMUMbGxCGjifZG8uvNTYnfoekSRBvUuF0kxLdLiefGMeEqcIE2VmvwQBvX3vfbJszYZajhUCGlwk4BmdaZ98qytX9cv6lf0X/Tb+o7yobKr3FC+Vi6TwcKK/fdqa0PaMS2tTWhJbVAb1R4lR4MAA5cVbtImIuIOZQxCHDxcdUodV6fUx0mp42pWPaE+qT7dNxuDNkUa3CKgCX1/VwIS8ayngFFm8fBpE1BjE5uIFGn8eMYpFnExeYKjpJhEZ5Lja+vlVDdu7wwSIB2+ccC8bZj+G5QLB2zjA7j8Jhz59YA98hEcegMufesbgQGAAsjVKvz1Mdy3Dg98B8Mvh9Xjk93uExkY+L3T2XsMBt+F/Qudzj/bnc7+RVB+g2/c/wD2jOYIAU+O+QAAABl0RVh0U29mdHdhcmUAQWRvYmUgSW1hZ2VSZWFkeXHJZTwAAAQpSURBVHjapFZLLFx9FD9z74x2COod72eQUCLSSGhrPOoRFhY23xcaYtdWx6O0lSbNJxQpY6ZtpG2w6aIWFgRhiIVHLBoiLLxJBB2PIMSMx2B6zr+9k2lSH6Mnubn/3HPv75zzO68rSklJKQoPD1fs7u6CwWCAs7MzEIlExvv5+Tl7TufT09PfdPSc9CR6vR54ngd+YWFhxMrK6lZgYKBaq9UaPza9kwjgpjoSQU86juOAx/PLxcXFu9bW1qd+fn5DBwcHfw0ox8tyfn4+3tLSUu/v7z+k0+n+CvA5AdJD9DQBPT1B0GFTT80B5PAsIWVcXBxT9PT0vJmYmHjh5OQE1xEC5MlKU1MTtLa2sofd3d1Vk5OT1wJlScHLIicnB+Lj45nrg4ODFH6ira2tztvbe4Q4NYfDMgJMS0uDoKAgFvrx8TEMDw8DJuqBjY2NlkAPDw+vxqHol0YsFhvdrqqqguLiYnZWq9Vvp6ennzk4OFwpZPFFitraWmakpqaGEvWWnMDiV+zs7FyalAuluroaioqKhOzXzczMFF/mKXdZCHV1dcbwe3t7a+fm5uT/B8pdhRcKv6CgQCgp5ezsbAGBCgkxG5Ckvr4eCgsL2bmvr68eh0r+nzzlzClahUIBcrlc8PQdltVTe3v73zzlzO0EpVIJZWVlAqeqpaWlJ6aectfp18rKSmhoaBDq9D2CPrazs2Oeii/7mKY01SMNX+qWlZUV2NzcBBx1gF0E+/v7BPohNjZWjFNKJaZO+VO2BNne3obk5GRYX1/Xb2xsSC56b2BgQImGpRd6mJeXB1lZWay3iSMcaQxMKpVuHx0d6XASLXt6eq7iLllFL1fRO42Hh8eeEVBYNjQYSktLobm5Gdra2piH7e3tgIOXNT/2eTb2dndXVxckJSXByckJ0Nnd3R0QEHiM+BWGLFGpVGBhYQGRkZFnHR0dLFnEGYWL1mFtbQ3GxsaIT9uKioqvBI4UgEajgeXlZXB1dWW8klUt0djS0mJITEzU0UTCLaiJiIhQ0xmtGkhwJRDR7GpsbJRRcvAbyM/PBy8vL2a4pKSEVin/HN+/QdMa0y9BS98x5HsxMTHv+vv7X+N0EaWmpoKvry84OjpSQdPwvY27/DNFEBAQwAAp20QbhVyKBymFiB98y8jIuB8VFbVKSxvJd8a+vYOh6mUyGd/Z2Qmjo6OwtbXlhpwthYWFTe7t7TFKcAX/nIf4F8DA0tPTW3De/Yt8GMgaJSchIeE/9OjR+Pi4JDg42FgBPj4+A7gevru4uBj/LJydnRmPRP5NtP6xvLz8H+KSwCg5tEcwlE38VWkQgHBFDGVnZydlZmbK3Nzc+smoRCJh7wuVIs7NzX2IJfEFC5d1A2WPSoE2A/3vREdHv5+amgoPCQn5FBoa+oWooMzSu6blJsgPAQYACgtfMJolu7EAAAAASUVORK5CYII=", Bt.onload = () => {
        Nt = !0
    };
    class Rt {
        image = null;
        ready = !1;
        drawSize = 0;
        previousMouseDown = !1;#
        r = 20;#
        i = 60;#
        a = 100;#
        s = 40;#
        c = 2;
        constructor(e) {
            this.image = new Image, this.image.src = e, this.image.onload = () => {
                this.ready = !0
            }
        }
        update(e) {
            e && !this.previousMouseDown && (this.drawSize += this.#r, this.drawSize = Math.min(Math.max(this.drawSize, this.#i), this.#a)), this.drawSize -= this.#c, this.drawSize = e ? Math.max(this.drawSize, this.#s) : Math.max(this.drawSize, 0), this.previousMouseDown = e
        }
        draw(e, t, n) {
            const o = this.drawSize / 2,
                r = t - o,
                i = n - o;
            e.drawImage(this.image, 0, 0, this.image.width, this.image.height, r, i, this.drawSize, this.drawSize)
        }
        destroy() {
            this.image = null, this.ready = !1
        }
    }
    const jt = new Rt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAtCAYAAADV2ImkAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAArGSURBVHgBvVlbbFxHGZ451z273rXXsWt7k5RESpwoJqQpqdI2hTiNeQDaB0COoAIkHgolECQuEpc+eA0SD6ihBKrmIU+FloK3SJFIoWpDurmASy5qIbEJJaI0TryRb3vzXs5lZpg5O7N79vTs2gkVRxrP8dkzM9988/3/P/MfCN6HixACxwGA6fFxaXB2AGYTGRgfGCCJTIak6e/DY2N4jL4GISTgf7wguMPLBTk+rloj39srK+TDsqrvkSD4kARAlyTBGHsHYVKg1bsIo+sEgb+Zjnk69NpT6bGxMftOwd8uYDg6OiGte2Rdf2zLzq+rmv7VkAI7dRkAnSJVaJFpjxDWOsYUEqLFocVEAFRpMR0yYznOmepy/kfvHD14LZVKodsCsNoXk8mkZO38Yq/Wn0jquv5EhwpAWAHAoGBDtGgcsMTBuoABB0xvLFpMWioOAGValmkxbfRCaak0/pOPxa6tlvFVAR4dHZW3fOdX3zI07cmYBjujFGwHBRumdYiC1ChglQGGNcCssNEJqRXGsM0BM5ZLTq0ULQAKJpkplys/3jH78rEDBw6wObYFLq+AFY4mk9rWL/z0F7Gw/v3eEAytCQHQrQMQp6VTqxXGdkSpMS5Yd5mn9zpfAVYb/H+2GkxC7qrIsBMo6iMzxqa7doTzr50/fx7dMcMHJ6b6ezZseSluyHsYyC4OMMLlwICotAdVrmlXsCs6xi7NVBagJgvBNJMFY5rJokBZztGyWAUga5LL5euXR5769I550ILplgx//NAhffPw5891h+VdvQYAPXqNWQY6ptZYDQewyKShcj2L2r3nE2OyYc9lLiGhe9mdKOxD4Z4HNtrSr996K+2sGvBwMqk8+JkfHuky1E/2UgkIGXTREuXLz5aXgW3Sr0fHopa55xC1EgBWGCq7MJDu1u55oGertP7VS5dO4BUBM2/QP/Ltx2ORcJKB7WaAuV5jQgqcVTG4cGWilribgJ7/pdqjOpveNl4ZMR04UNklDW0v7V+vTKbT6SZpSH7A5d1f2xwNh5+Mc8NiEohyw3KXXeHG4mERegYVF/QVwbbCQbJVMbiBshWLcfvo4mNGdPUHc9tG72rLMIteZ7Pqkbih7OkJNQAzZusS4Iyy5YewMePV+EfxjggsQRMl9WADdWB0Rfete/iVdPo5HMjwd19ZGDQ09TGmU1Ei3BsIrfo1J4Bwh9A8OAgA7fEmjC3GuM7dYJgbc5TXRkj9SnnnQBPLdYZZcOjf/9jPug15O9Nt3OMNDG5cXgmIpfaChh6g0PM88PL2ARvtGLuI8mkTHh2VCHp4vXpKaLnOcGRoSA2p8kfrzt/HrOwDKwZYiVHiK8A3QcmjaTegcFfJXCbDoemhJ2ZnQUi0cwEz7fbu/+awpkjrhCGISCTACqtuB84Lxg/MvyLiR2EHwuUJ0AKHocJY52e/MSyau4BpDJc0Rd/nuivJEwA8EQy2AbaaXUugnnkteXy3CDgMeIgTF1LVe9kusQ44Hh+hgOXtutTQapMMQINdYWBwFYDagfdKRLDslYcqN4DLurYHgJRcB2xZGVmSpbvr4RQ2bxWF028FFraZAPG1IZ42TX1AT1AB3INwPJKifDA+NKQIwLAUpr9BuF4WeuKmKGbNem9lUN77dtolvucAtJ64N6TzQ0Gnc92oMUwNDkQ7DLp/hjExQxjQcdAgQfekRd3Kvb1nHNh8X6ulKI4xsQLocqlAIonO60voj0ABdStDCvLDrdqRoPehry17IefucyBVAqRGF2cPC6wl9rzkB+kH1I61Vs/aaZk9E3voZsPERTleI9WVxI3LGYIIKSB+pMEcuDjigIBBVvIK7TTvBS2eYX5D+NiYRzy28ScI3SyULPck4jKsrzUItsyr7EebnwzYy8g361ZAVgIV9E5QMHHDMmicThx+gLVtdCPqQHfxXYaL9i3HqZYnTX66tXkRcd0rj1aurRW4VvJo0jRp7CNEaoDxyQrDhBxryrYlTPMZhDFMPrJxIzaXly9XnVr+wEaN8xebsVgiQIINxg+ulYG289WINFICgjA3j0FLeSn35677hhymBlfIV65cwfN/+O3ZKiIFdkCs8KQHA25zHQWdv4MMDwYw6H/WBJo0ki0if8HGrojioNm5l58/t2bpPDUzUrO8kZER3KWp1Uoh/8syT3SwRlVcWxaHNJaLkGbWWmnar9GgwFI3cB9YttIlm+Oomn9VwnZlamobqTNM98L4JlxrLr155liRJzlYA3EcdyWCm0G3c2sk4N4vF+zVqwDryQq5iRaKIf/23w+jxWV7aGjUbeoCZsiHOqfR8tU3b5XzhefzVu1l0bDMDUB4EOxjO4jdoPv6JDyuU2zUKx6i2NgFNn5x+bhz5dy/jIc2WzRmNACzPijlCKugeuPsH58uWKSYt2tJDgG6ghryEKD9xuVn2c+0mCTyMGsKCXBm2biMsEIFZUrvTB2WOsLl7MmTdROqnzhSqQO4e3O36czM3MgvLjyTM2kmxuKN+azLvHObH2H8bo+A1qHXm2dzSLMEirx/NibLArE6v3DrmcKFU/+UF5FNM5z1Q2jTqfkTu3eTTNkG5uULU/qmnX1QD233bobYwFLAqYPwP36JEM/yuwHBA9bkXsCbrlriKaulbO6F2d8ffTrioOLc3EVreno6GHA6/ToY2nAawA6dZKcuToa37dpDZCUBAxgTGhQ+2vvMGwAcn8uyUEOvQqtsJZcoqwsMbMW+OvObZ7/s2FK+uICqqdSzTclBX+ZnHExNvY5PXPwTcYhBUG7+jDQwuJemj3oIbA0Ke4Ah3ABqc6AmB1oVYBH3ABYHW60xu1iqXpw7ffxLShXMgUKuPDgIbH/mJ9AzTUxMyJOTQFuQ342qNo4PfOrxsc7u+Ofco7/G8wbisKo0En1iww89Pgx5tO5Pahc8oPNUBjd/d2y8RJxc3FxTymbjJrWr96Re5RaAwRtvvESyloZVrOH8Py5Mgrs+sOBoka0OkKLu8nIGhbsTcd/yhlSnsfxMq0WnIYGsWZPBYoUUc/PzR/59/OhhyVYLSlguL9/qDwTbkmFxDQ8nlegg0DpoigCqSiR+z0ODXVvvPRSJRh+N8sRgmKda6+cv2JyBr8sDNyYh/G0pl31x8dyrP89nrmWIHSo5EakEbqyzJiZGcatPCG0Bs50cTQHILMlCd/whyTHCCFpGdNv9m2Lb7z8YNoz7dFUeMDzfOLzZSKZ1sVW0kPAMpFjJzr84/5dTz+HZ/8zZGFUcKJcH+8wKfZ0GiCRuh6ktYHGxFOzs7ICsKI5ekfOGBSxdMWXdArLat//RB8Nr+ncrhrFFUZS1sqr2Q0nqcAFjvEwwKdpm9W2rlL9YzeamF0+fmEQEm1CRLGsZmdFeuarkuqqJRAatBHbVgNlVYzsl9/ffUkpGRSPzuZDd2aE4FlEMIqsEO7Ij0f21ItOUgUwwYlxbQCUAOxg6qgYwItDBFWRLKrSUSJ+F52bsDRv2OsnkPnFWWPFaNWAPcjiaSknxk1kqgIyapXkZQ8UKMVSZFCzXiE2JSPQrA7AUh4QwBYojGMo2QpJlR0zgZBPAAXQrkEqNUkZv7wPj7QOu46ZeezwppdNAGhychYnECLw0O+0mO7oqkVq/ffTbCJKx4yjYNK/gRCLhWj5den8E//9fLKHI2Gd6Z4U+ce8BK+y39+n6L5YV4ArrvzyVAAAAAElFTkSuQmCC"),
        Vt = new Rt("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABoAAAAaCAYAAACpSkzOAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAADBSURBVHgBvdZdEcIwDAfwZAqQgAQs4AAHIAEHzAlSWgfMARZAQUjZ9rDbR5M22f+uzdaX30OvaREUIaIDlxuPVCMiRrAOIw+a5zngrsiYlwmWQWwwIVKHKZEyrBDRYZWIDDNCtjFjZBlzQsaEZCB/HLm+wTfnhqcT+OfawD75Jijy+IBvuv/M+3Qnv4QJyQst2Wf1LFli2e5ggYn7XQ2m7uAlWPGdpMGqb1kJZvZuaN2RDBakCIIi1Hf6y/DbaR6QP+1P5pe98AyNAAAAAElFTkSuQmCC");

    function Ut(e, t, n, o, r, i) {
        if (!Nt || !i || !Bt) return;
        const a = Math.max(o, r);
        if (function(e, t, n, o, r, i) {
                [jt, Vt].forEach((a => {
                    if (!a.ready || !i) return;
                    const s = a === jt ? t : n;
                    a.update(s);
                    const c = e.x * o,
                        d = e.y * r;
                    a.draw(i, c, d)
                }))
            }(e, t, n, o, r, i), !Mt) {
            const t = .5 * a;
            i.drawImage(Bt, 0, 0, Bt.width, Bt.height, e.x * o, e.y * r, Bt.width * t, Bt.height * t)
        }
    }
    const Gt = "Game tab in background";
    let Ft = !0,
        Kt = [],
        zt = null,
        Ht = document.createElement("canvas"),
        qt = null,
        Wt = null,
        Yt = null,
        Jt = 0,
        $t = [],
        Qt = [],
        Zt = [],
        Xt = [],
        en = 24;
    (C() || D() || Dt) && (en = 12), Ht.setAttribute("data-poki-no-playtest", "true"), Ht.addEventListener("webglcontextlost", (() => {
        console.info("%cPOKI_PLAYTEST:%c streamCanvas context lost", "font-weight: bold", ""), Ht = document.createElement("canvas"), qt = null
    }));
    const tn = {
        x: 0,
        y: 0
    };
    let nn = !1,
        on = !1,
        rn = !1,
        an = !1,
        sn = "",
        cn = 1,
        dn = 1,
        ln = -1,
        un = -1;

    function pn(e) {
        if (null === zt || !Kt.length) return;
        const t = Kt[0],
            n = t.width / zt.width,
            o = t.height / zt.height,
            r = (e.clientX - zt.left) * n,
            i = (e.clientY - zt.top) * o;
        tn.x = Math.max(0, Math.min(r, t.width)), tn.y = Math.max(0, Math.min(i, t.height))
    }
    const gn = e => {
            Kt.length && Ht && pn(e)
        },
        fn = e => {
            Kt.length && Ht && (0 === e.button ? (nn = !0, on = !1) : 2 === e.button ? (rn = !0, an = !1) : 1 === e.button && (nn = !0, on = !1, rn = !0, an = !1), pn(e))
        },
        mn = e => {
            0 === e.button ? on = !0 : 2 === e.button ? an = !0 : 1 === e.button && (on = !0, an = !0)
        };

    function hn() {
        const e = sn;
        e && Ht && qt && (qt.fillStyle = "rgba(255, 255, 255, 0.5)", qt.fillRect(0, 0, Ht.width, Ht.height), qt.font = "48px Arial", qt.fillStyle = "#009cff", qt.textAlign = "center", qt.fillText(e, Ht.width / 2, Ht.height / 2))
    }

    function yn(e) {
        if (!Ht || !Kt.length) return;
        const t = Kt[0],
            n = t.width,
            o = t.height;
        if (n === ln && o === un && !e) return;
        ln = n, un = o, zt = t.getBoundingClientRect();
        let {
            width: r,
            height: i
        } = zt;
        0 !== r && 0 !== i || (r = n, i = o);
        const a = C() || D(),
            s = Dt ? 1024 : a ? 640 : 1280,
            c = Math.min(s / r, s / i, 1);
        r = Math.round(r * c), i = Math.round(i * c), cn = r / n, dn = i / o;
        e || Ht.width !== r || Ht.height !== i ? (Ht.width = r, Ht.height = i, console.info(`%cPOKI_PLAYTEST:%c capturing at ${r}x${i} (${n}x${o})`, "font-weight: bold", "")) : console.info(`%cPOKI_PLAYTEST:%c resize but video unchanged ${r}x${i} (${n}x${o})`, "font-weight: bold", "")
    }

    function wn(e) {
        let t = null;
        for (let n = 0; n < e.length; n++)
            if (!document.body.contains(e[n])) {
                if (e[n].pokiHtmlDummyCanvas) continue;
                if (t || (t = document.getElementsByTagName("flt-glass-pane")), t) {
                    let o = !1;
                    for (let r = 0; r < t.length; r++) t[r].shadowRoot ? .contains(e[n]) && (o = !0);
                    if (o) continue
                }
                return !1
            }
        return !0
    }
    async function vn(e) {
        if (Ht && (Wt || (Wt = document.createElement("canvas"), 0 === Kt.length ? (Wt.width = Ht.width, Wt.height = Ht.height) : (Wt.width = Kt[0].width, Wt.height = Kt[0].height), Wt.addEventListener("contextlost", (() => {
                Wt = null, Yt = null
            }))), Yt || (Yt = Wt.getContext("2d"), Yt))) try {
            performance.now();
            const t = await (async e => {
                const t = ["VIDEO", "TEXTAREA", "SCRIPT", "NOSCRIPT", "INPUT", "IFRAME"];
                e || t.push("CANVAS");
                const n = e => !(t.includes(e.nodeName) || "IMG" === e.nodeName && !e.getAttribute("src") || e.classList ? .contains(ht) || "true" === e.getAttribute ? .("data-poki-playtest-skip")),
                    o = document.body.style.minWidth,
                    r = document.body.style.minHeight,
                    i = document.body.style.backgroundColor;
                let a;
                document.body.style.minWidth = "100%", document.body.style.minHeight = "100%", e || (document.body.style.backgroundColor = "transparent");
                try {
                    a = await gt(document.body, {
                        filter: n,
                        width: window.innerWidth,
                        height: window.innerHeight
                    })
                } catch (e) {
                    console.warn("%cPOKI:%c failed to generate svg", "font-weight: bold", "", e)
                }
                return document.body.style.minWidth = o, document.body.style.minHeight = r, document.body.style.backgroundColor = i, a
            })(e);
            if (t && t.length > 10) {
                const e = await new Promise(((e, n) => {
                    const o = new Image;
                    o.decode = () => e(o), o.onload = () => e(o), o.onerror = n, o.crossOrigin = "anonymous", o.decoding = "async", o.src = t
                }));
                requestAnimationFrame((() => {
                    Wt && Yt && (Yt.clearRect(0, 0, Wt.width, Wt.height), Yt.drawImage(e, 0, 0, e.width, e.height, 0, 0, Wt.width, Wt.height), Jt = 0)
                }))
            }
        } catch (e) {
            console.warn("%cPOKI_PLAYTEST:%c ui canvas error", "font-weight: bold", "", e.name, e.message, e.stack), Jt++;
            const t = Ot();
            (t === Et || t === St) && Jt > 10 && (Ft = !0)
        }
    }

    function bn(e) {
        sn = e
    }
    async function kn(e) {
        if (!Ft) {
            Kt = e;
            for (let e = 0; e < $t.length; e++) $t[e].stop();
            for (let e = 0; e < Qt.length; e++) Qt[e].readable.cancel();
            for (let e = 0; e < Zt.length; e++) Zt[e].cancel();
            for (let e = 0; e < Xt.length; e++) Xt[e].close();
            $t = [], Qt = [], Zt = [], Xt = [];
            try {
                if (Lt)
                    for (let e = 0; e < Kt.length; e++) {
                        if (Kt[e].pokiHtmlDummyCanvas) continue;
                        const t = Kt[e].captureStream(en).getVideoTracks()[0];
                        $t.push(t), Xt.push(null);
                        const n = new Blob(["self.onmessage=(async({data:{track:e}})=>{if(!e)return;const a=new MediaStreamTrackProcessor({track:e}).readable.getReader(),s=()=>{a.read().then(({done:e,value:a})=>{e?a.close():(postMessage(a),a.close(),s())})};s()});"], {
                                type: "application/javascript"
                            }),
                            o = new Worker(URL.createObjectURL(n));
                        o.onmessage = ({
                            data: t
                        }) => {
                            Xt.length <= e || (null !== Xt[e] && Xt[e].close(), Xt[e] = t)
                        };
                        try {
                            o.postMessage({
                                track: t
                            })
                        } catch (e) {
                            console.warn("%cPOKI_PLAYTEST:%c worker error", "font-weight: bold", "", e), Ft = !0
                        }
                    } else
                        for (let e = 0; e < Kt.length; e++) {
                            if (Kt[e].pokiHtmlDummyCanvas) continue;
                            const t = Kt[e].captureStream(en).getVideoTracks()[0],
                                n = new window.MediaStreamTrackProcessor(t),
                                o = n.readable.getReader();
                            $t.push(t), Qt.push(n), Zt.push(o), Xt.push(null);
                            const r = () => {
                                o.read().then((({
                                    done: t,
                                    value: n
                                }) => {
                                    t ? Ft = !0 : Xt.length <= e ? n.close() : (null !== Xt[e] && Xt[e].close(), Xt[e] = n, r())
                                }))
                            };
                            r()
                        }
                yn(!0)
            } catch (e) {
                console.warn("%cPOKI_PLAYTEST:%c setPlaytestSoureCanvasses error", "font-weight: bold", "", e), Ft = !0
            }
        }
    }

    function An() {
        const e = Tt();
        if (e ? .length && wn(e)) return e;
        const t = Ot();
        if (t === St) {
            const e = document.createElement("canvas");
            return e.width = window.innerWidth, e.height = window.innerHeight, e.setAttribute("data-poki-html-canvas", "true"), e.pokiHtmlDummyCanvas = !0, [e]
        }
        let n = 0,
            o = Array.from(document.getElementsByTagName("canvas"));
        if (0 === o.length) {
            const e = document.getElementsByTagName("flt-glass-pane");
            for (let t = 0; t < e.length; t++) {
                const {
                    shadowRoot: n
                } = e[t];
                n && (o = o.concat(Array.from(n.querySelectorAll("canvas"))))
            }
        }
        let r = [];
        if (o.forEach((e => {
                if ("true" === e.getAttribute("data-poki-no-playtest")) return;
                const t = getComputedStyle(e),
                    {
                        width: o,
                        height: i
                    } = t,
                    a = parseInt(o, 10) * parseInt(i, 10);
                a >= n && function(e) {
                    if (!e) return !1;
                    let t = e,
                        n = !0;
                    for (; t && t !== document.body;) {
                        const e = window.getComputedStyle(t);
                        if ("none" === e.display) return !1;
                        if ("hidden" === e.visibility) return !1;
                        if (n && (0 === t.offsetWidth || 0 === t.offsetHeight)) return !1;
                        "absolute" === e.position && (n = !1), t = t.parentElement
                    }
                    const o = e.getBoundingClientRect(),
                        r = window.innerHeight || document.documentElement.clientHeight,
                        i = window.innerWidth || document.documentElement.clientWidth;
                    return !(o.right < 0 || o.bottom < 0 || o.left > i || o.top > r)
                }(e) && (a > n && (r = []), r.push({
                    canvas: e,
                    style: t,
                    index: r.length
                }), n = a)
            })), 0 === r.length) {
            if (t === Et) {
                const e = document.createElement("canvas");
                return e.width = window.innerWidth, e.height = window.innerHeight, e.setAttribute("data-poki-html-canvas", "true"), e.pokiHtmlDummyCanvas = !0, [e]
            }
            return []
        }
        return r.sort(((e, t) => {
            const n = parseInt(e.style.zIndex, 10) || 0,
                o = parseInt(t.style.zIndex, 10) || 0;
            return n < o ? -1 : n > o ? 1 : e.index - t.index
        })), r.map((e => e.canvas))
    }

    function Sn(e, t) {
        if (!Ht) return null;
        Ft = !1, kn(e), yn(!0);
        const n = Ht.captureStream(en);
        let o;
        window.addEventListener("pointermove", gn, {
            capture: !0,
            passive: !0
        }), window.addEventListener("pointerdown", fn, {
            capture: !0,
            passive: !0
        }), window.addEventListener("pointerup", mn, {
            capture: !0,
            passive: !0
        }), window.addEventListener("contextmenu", mn, {
            capture: !0,
            passive: !0
        });
        let r, i = 0,
            a = null;
        const s = Ot();
        if (s === Et || s === St) {
            let e = 0;
            o = setInterval((() => {
                if (!Ht) return;
                const t = !!Kt[0].pokiHtmlDummyCanvas;
                !t || Kt[0].width === window.innerWidth && Kt[0].height === window.innerHeight || (Kt[0].width = window.innerWidth, Kt[0].height = window.innerHeight);
                let n = !1;
                if (t && document.getElementsByTagName("canvas").length > 0 && (n = !0), !n) {
                    const t = function(e) {
                        const t = 3 & e.length,
                            n = e.length - t,
                            o = 3432918353,
                            r = 461845907;
                        let i = 0,
                            a = 0,
                            s = 0;
                        for (; s < n;) a = 255 & e.charCodeAt(s) | (255 & e.charCodeAt(++s)) << 8 | (255 & e.charCodeAt(++s)) << 16 | (255 & e.charCodeAt(++s)) << 24, ++s, a = (65535 & a) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = (65535 & a) * r + (((a >>> 16) * r & 65535) << 16) & 4294967295, i ^= a, i = i << 13 | i >>> 19, i = 5 * i + 3864292196 & 4294967295;
                        switch (a = 0, t) {
                            case 3:
                                a ^= (255 & e.charCodeAt(s + 2)) << 16;
                            case 2:
                                a ^= (255 & e.charCodeAt(s + 1)) << 8;
                            case 1:
                                a ^= 255 & e.charCodeAt(s), a = (65535 & a) * o + (((a >>> 16) * o & 65535) << 16) & 4294967295, a = a << 15 | a >>> 17, a = (65535 & a) * r + (((a >>> 16) * r & 65535) << 16) & 4294967295, i ^= a
                        }
                        return i ^= e.length, i ^= i >>> 16, i = 2246822507 * (65535 & i) + ((2246822507 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 13, i = 3266489909 * (65535 & i) + ((3266489909 * (i >>> 16) & 65535) << 16) & 4294967295, i ^= i >>> 16, i >>> 0
                    }(document.body.innerHTML);
                    e !== t && (e = t, n = !0)
                }
                n && vn(t)
            }), 1e3)
        }
        return r = setInterval((() => {
            if (Ft || !Ht || !Kt.length || i > 10) return console.info("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", Ft ? "stopped" : "crashed", Ft, !Ht, !Kt.length, i), window.removeEventListener("pointermove", gn), window.removeEventListener("pointerdown", fn), window.removeEventListener("pointerup", mn), window.removeEventListener("contextmenu", mn), clearInterval(o), Ct(""), Ht = null, qt = null, Wt = null, Yt = null, kn([]), jt.destroy(), Vt.destroy(), clearInterval(r), a && clearTimeout(a), void t();
            if (!wn(Kt)) {
                console.info("%cPOKI_PLAYTEST:%c source canvasses not in DOM", "font-weight: bold", "");
                const e = An();
                return void(e.length ? kn(e) : (console.info("%cPOKI_PLAYTEST:%c no source canvasses found", "font-weight: bold", ""), i++))
            }
            if (!qt && (qt = Ht.getContext("2d"), !qt)) return console.info("%cPOKI_PLAYTEST:%c streamCanvas context creation failed", "font-weight: bold", ""), void i++;
            i = 0, yn(!1);
            const e = Ot();
            e === At ? (Ct(""), vn(!1)) : e === It && (Ct(""), Wt = null, Yt = null), qt.clearRect(0, 0, Ht.width, Ht.height);
            for (let e = 0; e < Xt.length; e++) {
                const t = Xt[e];
                null !== t && qt.drawImage(t, 0, 0, t.displayWidth, t.displayHeight, 0, 0, Ht.width, Ht.height)
            }
            Wt && qt.drawImage(Wt, 0, 0, Wt.width, Wt.height, 0, 0, Ht.width, Ht.height), Ut(tn, nn, rn, cn, dn, qt), nn && on && (nn = !1, on = !1), rn && an && (rn = !1, an = !1), hn()
        }), 1e3 / en), window.addEventListener("visibilitychange", (() => {
            console.info("%cPOKI_PLAYTEST:%c visibility change", "font-weight: bold", "", document.visibilityState), a && clearTimeout(a), "visible" === document.visibilityState ? sn === Gt && (sn = "") : (sn = Gt, hn(), a = setTimeout((() => {
                Ft = !0
            }), 6e4))
        })), window.addEventListener("resize", (() => {
            console.info("%cPOKI_PLAYTEST:%c resize", "font-weight: bold", "", window.innerWidth, window.innerHeight)
        })), window.addEventListener("orientationchange", (e => {
            console.info("%cPOKI_PLAYTEST:%c orientationchange", "font-weight: bold", "", e ? .target ? .screen ? .orientation ? .type)
        })), window.screen.orientation.addEventListener("change", (e => {
            console.info("%cPOKI_PLAYTEST:%c orientation change", "font-weight: bold", "", e.target ? .type)
        })), n
    }
    const En = new RegExp(`(${["WebView","(iPhone|iPod|iPad)(?!.*Safari)","Android.*(;\\s+wv|Version/\\d.\\d\\s+Chrome/\\d+(\\.0){3})","Linux; U; Android"].join("|")})`, "ig");

    function In() {
        window.navigator.userAgent.match(En) && !V.isPlayground && document.addEventListener("touchmove", (e => (e.preventDefault(), e.returnValue = !1, !1)), {
            passive: !1
        })
    }

    function _n() {
        return `User_${Math.floor(9e8*Math.random())+1e8}`
    }
    class Pn {#
        d = null;#
        l() {
            if (!V.isPokiIframe) throw new Error("User accounts is not available")
        }
        getUser = async () => G.debug ? {
            username: "TestUser",
            avatarUrl: "https://a.poki-cdn.com/img/placeholder_gradient.png"
        } : (this.#l(), this.#d || (this.#d = await this.#u()), this.#d);
        getToken = async () => G.debug ? "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySUQiOiJsVVNGaCtFUjZIaW83VHhjRW9Pc0d1UnJaNU0wNFdQSlpkQ1BBZ09Wcko4Zm5QQTRmK3Zob1E4PSIsImlzcyI6IlBva2kiLCJleHAiOjIzOTIyNzU0NDd9.S7aW6C3Uwe1hINZA1kg20QWTwE0TqKhUkpJUtU16twM" : (this.#l(), this.#p());
        login = async () => {
            if (G.debug) return;
            this.#l();
            return await this.getUser() ? void 0 : new Promise(((t, n) => {
                function o(t) {
                    t.data.type === e.accounts.authPanelClosed && (window.removeEventListener("message", o), n(new Error("User closed the auth panel without signing in.")))
                }
                window ? .top ? .postMessage({
                    type: e.accounts.openAuthPanel.type,
                    content: {
                        trigger: `sdk-${V.gameID}`,
                        version: e.accounts.openAuthPanel.version
                    }
                }, "*"), window.addEventListener("message", o), setTimeout((() => {
                    window.removeEventListener("message", o), n(new Error("Login timeout. User took too long to complete the action."))
                }), 45e3)
            }))
        };#
        u = async () => {
            try {
                return new Promise((t => {
                    window ? .top ? .postMessage({
                        type: e.accounts.getUserInfo
                    }, "*");
                    const n = o => {
                        if (o.data.type === e.accounts.userInfo) {
                            window.removeEventListener("message", n);
                            const {
                                enabled: e,
                                session: r
                            } = o.data;
                            if (!e || !r ? .id) return void t(null);
                            this.#d = {
                                username: _n(),
                                avatarUrl: "https://a.poki-cdn.com/img/placeholder_gradient.png"
                            }, t(this.#d)
                        }
                    };
                    window.addEventListener("message", n), setTimeout((() => {
                        window.removeEventListener("message", n), t(null)
                    }), 8e3)
                }))
            } catch (e) {
                q("failed to fetch user info:", e)
            }
            return null
        };#
        p = async () => {
            try {
                return new Promise((t => {
                    window ? .top ? .postMessage({
                        type: e.accounts.getUserToken
                    }, "*");
                    const n = o => {
                        if (o.data.type === e.accounts.userToken) {
                            window.removeEventListener("message", n);
                            const {
                                token: e,
                                error: r
                            } = o.data;
                            if (r) return q("failed to fetch user token:", r), void t(null);
                            if (!e) return void t(null);
                            t(e)
                        }
                    };
                    window.addEventListener("message", n), setTimeout((() => {
                        window.removeEventListener("message", n), t(null)
                    }), 8e3)
                }))
            } catch (e) {
                q("failed to fetch user token:", e)
            }
            return null
        }
    }
    let Tn = 4e4;
    let xn = 0;

    function On() {
        return xn
    }
    const Cn = atob("c3VibWl0U2NvcmU=");
    const Dn = class {
            __monetization;
            __gameStarted = !1;#
            g = !1;#
            f;#
            m = new be(.01);#
            h;#
            y = 0;#
            w = 0;#
            v = 0;#
            b = 0;#
            k = new Pn;#
            A = !1;#
            S = null;
            constructor(e, t = !1) {
                this.__monetization = e, this.#A = t, In(), setInterval((() => {
                    this.#w = Math.max(this.#w - 1, 0)
                }), 1e3)
            }
            init = (t = {}) => {
                if (this.__logCall("init", t), this.#S) return W("PokiSDK.init() called more than once"), this.#S;
                t[Cn] && t[Cn](((t, n) => {
                    !async function(t, n) {
                        const o = {
                            time_on_page: performance.now()
                        };
                        if ("74b97156-f40b-11e9-859c-c6053849a814" === V.gameID && n > Tn) {
                            const e = await bt();
                            e && (o.screenshot = e, Tn = n)
                        }
                        U.sendMessage(e.message.sendScore, {
                            data: {
                                leaderboard: t,
                                score: n,
                                meta: o
                            }
                        })
                    }(t, n)
                })), window.addEventListener("pointerdown", this.#E), document.addEventListener("keydown", this.#E);
                const n = window;
                if (n.engine ? .config ? .onPrint) {
                    const e = n.engine.config.onPrint;
                    n.engine.config.onPrint = (...t) => {
                        e(...t);
                        const o = t[0] ? .match(/Godot Engine (.+)/);
                        o && o[1] && (! function(e) {
                            ne = e
                        }(o[1]), n.engine.config.onPrint = e)
                    }
                }
                return this.#S = new Promise((n => {
                    this.__monetization.init({
                        onReady: () => {
                            O("preroll") && this.__monetization.forcePreroll(), n()
                        },
                        ...t
                    }), this.#I(), V.isInspector && this.#_(), document.location.search.length <= 1 && U.sendMessage(e.message.sendInspectorEvent, {
                        event: "bad-behavior",
                        data: {
                            behavior: "rewrite_query_params"
                        }
                    }), U.sendMessage(e.message.sdkDetails, {
                        version: "9750de71feaa665150e66b06e9449b500b265f1b"
                    })
                })), this.#S
            };#
            I = () => {
                window.addEventListener("message", (async t => {
                    if ("pokiGenerateScreenshot" === t.data.type)(async t => {
                        const {
                            hasFrame: n
                        } = t;
                        let o = null;
                        if (n) {
                            const {
                                title: e,
                                thumbnail: n
                            } = t;
                            o = await bt({
                                title: e,
                                thumbnail: n
                            })
                        } else o = await bt();
                        const r = {
                            screenshot: o,
                            errors: re
                        };
                        t.callback && (r.callback = t.callback), U.sendMessage(e.message.sendGameScreenshot, {
                            data: r
                        })
                    })(t.data);
                    else if ("pokiGenerateRawScreenshot" === t.data.type)(async () => {
                        const t = await vt();
                        U.sendMessage(e.message.sendGameRawScreenshot, {
                            data: {
                                screenshot: t
                            }
                        })
                    })();
                    else if ("pokiUploadScreenshot" === t.data.type) {
                        const n = await wt(t.data);
                        U.sendMessage(e.message.sendUploadScreenshot, {
                            data: {
                                screenshot: n
                            }
                        })
                    }
                }), !1)
            };#
            _ = () => {
                if (window.addEventListener("message", (async t => {
                        if ("pokiInspectorAllowCommercialBreak" === t.data.type && (j("adOverrideMode", !0), j("houseAdsOnly", !0)), "pokiInspectorDisallowCommercialBreak" === t.data.type && (j("adOverrideMode", !1), j("houseAdsOnly", !1)), "pokiInspectorRequestCookies" === t.data.type && Ae().then((t => {
                                U.sendMessage(e.message.sendInspectorCookies, {
                                    data: {
                                        cookies: t
                                    }
                                }), U.sendMessage(e.message.sendInspectorEvent, {
                                    event: "cookies",
                                    data: {
                                        cookies: t
                                    }
                                })
                            })), "pokiInspectorClearLocalStorage" === t.data.type) try {
                            if (localStorage.clear(), indexedDB.databases) {
                                const e = await indexedDB.databases(),
                                    t = (await Promise.allSettled(e.filter((e => "string" == typeof e.name)).map((e => indexedDB.deleteDatabase(e.name))))).filter((e => "rejected" === e.status));
                                t.length > 0 && q("PokiSDK: Some IndexedDB databases failed to delete", t)
                            }
                            document.cookie.split(";").forEach((e => {
                                const t = e.split("=")[0].trim();
                                document.cookie = `${t}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`
                            })), U.sendMessage(e.message.sendInspectorEvent, {
                                event: "localStorageCleared"
                            })
                        } catch (t) {
                            q("PokiSDK: Error clearing localStorage", t), U.sendMessage(e.message.sendInspectorEvent, {
                                event: "localStorageClearError",
                                data: {
                                    error: String(t)
                                }
                            })
                        }
                    }), !1), "desktop" !== V.device) try {
                    const t = t => {
                        const n = console[t];
                        console[t] = (...o) => {
                            U.sendMessage(e.message.sendInspectorConsole, {
                                data: {
                                    level: t,
                                    args: te(o)
                                }
                            }), U.sendMessage(e.message.sendInspectorEvent, {
                                event: "console",
                                data: {
                                    level: t,
                                    args: te(o)
                                }
                            }), n.apply(console, o)
                        }
                    };
                    t("log"), t("warn"), t("error")
                } catch {}
            };
            initWithVideoHB = () => this.init();
            setDebug = (t = !0) => {
                this.__logCall("setDebug", t);
                const {
                    hostname: n
                } = window.location;
                n.endsWith("poki-gdn.com") ? t && Z.track(e.tracking.debugTrueInProduction) : (G.debug = t, G.log = t ? ? G.log, t ? function() {
                    if (ce) {
                        ce = !1, window.removeEventListener("unhandledrejection", ge), window.removeEventListener("error", fe);
                        try {
                            console.error = ae
                        } catch {}
                    }
                }() : me())
            };
            setLogging = e => {
                this.__logCall("setLogging", e), G.log = e
            };#
            P = () => this.#w >= 10;
            gameLoadingFinished = () => {
                this.__logCall("gameLoadingFinished"), clearInterval(window.pokiCancelProgressInterval), Z.track(e.tracking.screen.gameLoadingFinished, {
                    transferSize: kt(),
                    trackers: X().join(","),
                    error_session_id: de,
                    now: Math.round(window.performance ? .now ? .()) || void 0
                });
                const t = window.pokiMeasureBuildin;
                window.PokiSDK.measure("game", "loading", "complete"), window.pokiMeasureBuildin = t
            };
            gameplayStart = t => {
                if (this.__logCall("gameplayStart", t), this.#P()) return void q("PokiSDK.gameplayStart() ignored because of too many events");
                this.#g = !0, this.__gameStarted || (this.__gameStarted = !0, Z.track(e.tracking.screen.firstRound), this.__monetization.startStartAdsAfterTimer(), window.pokiMeasureBuildin && window.PokiSDK.measure("game", "play", "first"));
                const n = this.#w;
                setTimeout((() => {
                    let o;
                    performance.now() - On() < 5e3 && (o = this.#h), Z.track(e.tracking.screen.gameplayStart, { ...t,
                        fps: this.#m.stats(),
                        badEvents: n,
                        interaction: o
                    })
                }), 0), clearTimeout(this.#f), this.#f = setTimeout((() => {
                    window.addEventListener("pointermove", this.#T), document.addEventListener("keydown", this.#T)
                }), 6e5), this.#y && (this.#y > performance.now() - 50 && this.#w++, this.#y = 0)
            };
            gameplayStop = t => {
                this.__logCall("gameplayStop", t), this.#P() ? q("PokiSDK.gameplayStart() ignored because of too many events") : (this.#g = !1, Z.track(e.tracking.screen.gameplayStop, { ...t,
                    fps: this.#m.stats()
                }), clearTimeout(this.#f), window.removeEventListener("pointermove", this.#T), document.removeEventListener("keydown", this.#T), this.#y = performance.now())
            };
            openExternalLink = t => {
                this.__logCall("openExternalLink", t), U.sendMessage(e.message.openExternalLink, {
                    params: {
                        url: t
                    }
                })
            };
            customEvent = (t, n, o = {}) => {
                this.__logCall("customEvent", t, n, o), t && n ? (t = String(t), n = String(n), o = { ...o
                }, "game" === t && "segment" === n && o.segment || Z.track(e.tracking.custom, {
                    eventNoun: t,
                    eventVerb: n,
                    eventData: o
                })) : console.error("%cPOKI:%c PokiSDK.customEvent() needs at least a noun and a verb", "font-weight: bold", "")
            };
            commercialBreak = t => new Promise((n => {
                if (this.__logCall("commercialBreak", t), "977b60eb-ff81-4c3a-895b-b585410d6c0d" === V.gameID) return void n();
                if (this.#P()) return q("PokiSDK.commercialBreak() ignored because of too many calls"), void n();
                const o = this.__gameStarted ? e.ads.position.midroll : e.ads.position.preroll;
                this.__runVideoAd({
                    amount: 1,
                    position: o,
                    onStart: () => {
                        if (this.#v++, window.pokiMeasureBuildin && window.PokiSDK.measure("midroll", this.#v), "function" == typeof t) try {
                            t()
                        } catch (e) {
                            q("error in onStart callback of PokiSDK.commercialBreak()", e)
                        }
                    }
                }).then((() => {
                    n()
                }))
            }));
            rewardedBreak = t => new Promise((n => {
                if (this.__logCall("rewardedBreak", t), "977b60eb-ff81-4c3a-895b-b585410d6c0d" === V.gameID) return void n(!1);
                let o, r = 1;
                if ("function" == typeof t) o = t;
                else if ("object" == typeof t) {
                    t.onStart && (o = t.onStart);
                    const e = t ? .size || ye.SMALL;
                    e === ye.SMALL ? r = 1 : e === ye.MEDIUM ? r = 2 : e === ye.LARGE && (r = 3)
                }
                1 !== r || ["CN", "VN", "ID", "DZ", "PK", "BO", "AZ", "BD", "VE", "LK", "NP", "MM", "KH", "ET", "MN", "RU", "BZ", "ZW", "MZ", "LY", "MV", "LA", "BT"].includes(V.country) || (r = 2), setTimeout((() => {
                    this.__runVideoAd({
                        position: e.ads.position.rewarded,
                        amount: r,
                        onStart: () => {
                            if (this.#b++, window.pokiMeasureBuildin && window.PokiSDK.measure("rewarded", this.#b), "function" == typeof o) try {
                                o()
                            } catch (e) {
                                q("error in onStart callback of PokiSDK.rewardedBreak()", e)
                            }
                        }
                    }).then((e => {
                        n(e)
                    }))
                }), 0)
            }));
            displayAd = (t, n, o, r) => {
                if (this.__logCall("displayAd", t, n, o, r), "977b60eb-ff81-4c3a-895b-b585410d6c0d" === V.gameID) return void(o && o());
                const i = he();
                Z.track(e.tracking.screen.displayAd, {
                    size: n,
                    opportunityId: i,
                    duringGameplay: this.#g
                });
                const a = {
                    container: t,
                    opportunityId: i,
                    size: n,
                    duringGameplay: this.#g,
                    onCanDestroy: o,
                    onDisplayRendered: r,
                    headerBiddingAllowed: !0
                };
                this.__monetization.displayAd(a)
            };
            destroyAd = e => {
                this.__logCall("destroyAd", e), this.__monetization.destroyAd(e)
            };
            isAdBlocked = () => !1;
            muteAd = () => {
                this.__logCall("muteAd"), this.__monetization.muteAd()
            };
            setVolume = e => {
                this.__logCall("setVolume", e), this.__monetization.setVolume(e)
            };
            logError = e => {
                this.captureError(e)
            };
            setPlaytestCanvas = e => {
                this.__logCall("setPlaytestCanvas", e), this.playtestSetCanvas(e)
            };
            playtestSetCanvas = e => {
                if (this.__logCall("playtestSetCanvas", e), !e) return void xt([]);
                const t = [].concat(e);
                xt(t), kn(t)
            };
            playtestCaptureHtmlOnce = () => {
                this.__logCall("playtestCaptureHtmlOnce"), Ct(At)
            };
            playtestCaptureHtmlForce = () => {
                this.__logCall("playtestCaptureHtmlForce"), Ct(St)
            };
            playtestCaptureHtmlOn = () => {
                this.__logCall("playtestCaptureHtmlOn"), Ct(Et)
            };
            playtestCaptureHtmlOff = () => {
                this.__logCall("playtestCaptureHtmlOff"), Ct(It)
            };
            getIsoLanguage = () => O("iso_lang");
            shareableURL = (t = {}) => new Promise(((n, o) => {
                this.__logCall("shareableURL", t);
                const r = new URLSearchParams,
                    i = Object.keys(t);
                if (V.isPokiIframe || V.isInspector) {
                    const o = O("poki_url");
                    i.forEach((e => {
                        void 0 !== t[e] && null !== t[e] && r.set(`gd${e}`, t[e])
                    })), n(`${o}?${r.toString()}`), U.sendMessage(e.message.setPokiURLParams, {
                        params: t
                    })
                } else window.self === window.top ? (i.forEach((e => {
                    void 0 !== t[e] && null !== t[e] && r.set(`${e}`, t[e])
                })), n(`${window.location.origin}${window.location.pathname}?${r.toString()}`)) : o(new Error("shareableURL only works on Poki or a top level frame"))
            }));
            getURLParam = e => O(`gd${e}`) || O(e);
            captureError = e => {
                this.__logCall("captureError", e), pe(e)
            };
            getLanguage = () => navigator.language.toLowerCase().split("-")[0];
            generateScreenshot = async () => (this.__logCall("generateScreenshot"), bt());
            enableEventTracking = e => {
                this.__logCall("enableEventTracking", e), V.isPlayground || V.isPokiIframe || V.isInspector || document ? .referrer ? .includes("games.poki.com") || Z.setupObserverWithCMP(e || 0)
            };
            __runVideoAd = ({
                position: t,
                amount: n,
                onStart: o,
                timeBetweenAds: r,
                platformAd: i
            }) => new Promise((a => {
                let s = 1;
                this.__monetization.setNrAds(s, n);
                const c = he(),
                    d = o => {
                        setTimeout((() => {
                            if (o ? .type === e.ads.limit || o ? .type === e.ads.busy) return void a(!1);
                            if (s === n || this.#A) return z.dispatchEvent(e.ads.startTimer, {
                                overwriteTimeBetweenAds: r
                            }), void a(!!o ? .rewardAllowed);
                            const l = z.getVideoDataAnnotations();
                            if ("poki" === l ? .bidder) return z.dispatchEvent(e.ads.startTimer, {
                                overwriteTimeBetweenAds: r
                            }), void a(!0);
                            s++, z.clearVideoDataAnnotations(), z.addVideoDataAnnotations({
                                adBreakId: c,
                                position: t,
                                opportunityId: he(),
                                currentAdNumber: s,
                                totalAdAmount: n
                            }), this.__monetization.setNrAds(s, n), this.__monetization.requestAd({
                                position: t,
                                platformAd: i,
                                onFinish: d
                            })
                        }), 0)
                    };
                z.clearVideoDataAnnotations(), z.addVideoDataAnnotations({
                    adBreakId: c,
                    position: t,
                    opportunityId: he(),
                    currentAdNumber: 1,
                    totalAdAmount: n
                }), this.__monetization.requestAd({
                    position: t,
                    platformAd: i,
                    onFinish: d,
                    onStart: () => {
                        if (this.__monetization.setNrAds(s, n), "function" == typeof o) try {
                            o()
                        } catch (e) {
                            console.error("%cPOKI:%c error in onStart callback of PokiSDK.runVideoAd()", "font-weight: bold", "", e)
                        }
                    }
                })
            }));#
            T = () => {
                window.removeEventListener("pointermove", this.#T), document.removeEventListener("keydown", this.#T), Z.track(e.tracking.screen.playerActive), this.#f = setTimeout((() => {
                    window.addEventListener("pointermove", this.#T), document.addEventListener("keydown", this.#T)
                }), 6e5)
            };#
            E = e => {
                var t;
                "pointerdown" === e.type ? this.#h = "pointerdown" : "keydown" === e.type ? this.#h = `keydown-${e.code}` : this.#h = "unknown", t = performance.now(), xn = t
            };
            __logCall = (e, ...t) => {
                if (!V.isPlayground) {
                    for (let e = 0; e < t.length; e++) void 0 === t[e] && (t[e] = "");
                    ! function(e, ...t) {
                        console.info(`%cPOKI:%c ${e}`, "background-color: green; border-radius: 3px; color: white; padding: 1px 5px", "", ...t)
                    }(`PokiSDK.${e}(`, ...t, ")")
                }
            };
            setDebugTouchOverlayController = () => {};
            gameInteractive = () => {};
            gameLoadingProgress = () => {};
            gameLoadingStart = () => {};
            getLeaderboard = () => Promise.resolve([]);
            happyTime = () => {};
            sendHighscore = () => {};
            setPlayerAge = () => {};
            roundStart = () => {};
            roundEnd = () => {};
            getUser = async () => this.#k.getUser();
            getToken = async () => this.#k.getToken();
            login = async () => this.#k.login()
        },
        Ln = {
            adTagUrl: "//pubads.g.doubleclick.net/gampad/ads?sz=640x360|640x480&iu=/1053551/Pub-Poki-Generic&ciu_szs&impl=s&gdfp_req=1&env=vp&output=xml_vast2&unviewed_position_start=1&url={url}&description_url={descriptionUrl}&correlator={timestamp}&nofb=1",
            adTiming: {
                preroll: !1,
                timeBetweenAds: 12e4,
                timePerTry: 7e3,
                startAdsAfter: 12e4
            },
            waterfallRetries: 2
        };

    function Mn(e) {
        let t = `/21682198607/debug-display/debug-display-${e}`;
        return G.debug || (t = V.isPokiIframe ? `/21682198607/${V.device}_ingame_${e}/${V.siteID}_${V.device}_ingame_${e}` : V.isPokiExternal ? `/21682198607/external_${V.device}_display_platform` : `/21682198607/external_${V.device}_display_ingame/external_${V.device}_ingame_${e}`), t
    }
    const Nn = () => {
        let {
            pathname: e
        } = window.location;
        "/" !== e[0] && (e = `/${e}`);
        let t = "";
        window.top !== window && (t = encodeURIComponent(document.referrer));
        return yt(`https://devs-api.poki.com/gameinfo/@sdk?href=${encodeURIComponent(`${window.location.protocol}//${window.location.host}${e}${window.location.search}`)}&referrer=${t}`, {
            method: "GET",
            headers: {
                "Content-Type": "text/plain"
            }
        }).then((async e => {
            if (e.status >= 200 && e.status < 400) {
                const t = await e.json();
                if (!t.game_id) return;
                return {
                    gameID: t.game_id,
                    gameTitle: t.game_name,
                    playtestRecord: t.playtest_record,
                    playtestVersion: t.playtest_version,
                    playtestDeviceCategory: t.playtest_device_category,
                    playtestNewUser: t.playtest_new_user,
                    playtestRequestID: t.playtest_request_id,
                    metrictestID: t.metrictest_id,
                    metrictestVersion: t.metrictest_version,
                    metrictestDeviceCategory: t.metrictest_device_category,
                    cachedContentGameID: t.cached_content_game_id,
                    specialConditions: t.ad_settings.special_conditions,
                    adTiming: {
                        preroll: t.ad_settings.preroll,
                        timePerTry: t.ad_settings.time_per_try,
                        timeBetweenAds: t.ad_settings.time_between_ads,
                        startAdsAfter: t.ad_settings.start_ads_after
                    }
                }
            }
            throw e
        })).catch((e => async function(e) {
            console.warn("%cPOKI:%c failed request p4d info", "font-weight: bold", "", e);
            try {
                let {
                    pathname: t
                } = window.location;
                "/" !== t[0] && (t = `/${t}`);
                const n = JSON.stringify({
                        c: "sdk-p4d-error",
                        ve: 7,
                        d: [{
                            k: "error",
                            v: JSON.stringify({
                                status: e.status,
                                json: e.json && await e.json(),
                                body: JSON.stringify({
                                    href: `${window.location.protocol}//${window.location.host}${t}${window.location.search}`
                                }),
                                name: e.name,
                                message: e.message
                            })
                        }]
                    }),
                    o = "https://t.poki.io/l";
                if (navigator.sendBeacon) navigator.sendBeacon(o, n);
                else try {
                    const e = new XMLHttpRequest;
                    e.open("POST", o, !0), e.send(n)
                } catch {}
            } catch {}
        }(e)))
    };

    function Bn() {
        const e = document.getElementById("poki-playtest-popup-reject"),
            t = document.getElementById("poki-playtest-popup-resolve");
        e ? .removeEventListener("pointerdown", Bn), t ? .removeEventListener("pointerdown", Bn), document.getElementById("poki-playtest-popup-wrapper") ? .remove(), document.getElementById("poki-playtest-template-markup") ? .remove(), document.getElementById("poki-playtest-template-style") ? .remove()
    }

    function Rn(e) {
        e.stopImmediatePropagation()
    }

    function jn({
        gameTitle: e,
        rejectCallback: t,
        resolveCallback: n
    }) {
        const o = document.body;
        ! function(e) {
            const t = document.createElement("template");
            t.innerHTML = '\n\t<template id="poki-playtest-template-markup">\n\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup-wrapper" id="poki-playtest-popup-wrapper">\n\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup">\n\t\t\t\t<header class="poki-playtest-popup-scope-reset poki-playtest-popup__header">\n\t\t\t\t\t<img class="poki-playtest-popup-scope-reset poki-playtest-popup__header__img" width="36" height="36" src="https://a.poki-cdn.com/playtest/playtest-icon.svg" alt="Lab icon">\n\t\t\t\t\t<h2 class="poki-playtest-popup-scope-reset poki-playtest-popup__header__title">Hey there, adventurer</h2>\n\t\t\t\t</header>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__content">\n\t\t\t\t\t<p>You found a mystery game and have been selected to test it out! When you join the playtest, we&apos;ll record your gameplay to see all the fun (and maybe some goofy) moments you encounter. This helps the developer figure out what rocks and what needs a little extra magic in their game.</p>\n\t\t\t\t\t<p>And hey, if you&apos;re not feeling it, no biggie - you can refuse the playtest and still play the game just like normal. For more information, please read our <a href="https://a.poki-cdn.com/playtest/2025.11.25_Poki_Playtest_Privacy_Statement.pdf" download="2025-11-25 Poki Playtest Privacy Statement.pdf" target="_blank">Privacy Statement Playtest</a>.</p>\n\t\t\t\t\t<h3>Do you consent to join the playtest of <span id="poki-playtest-popup-game-title">%GAME_TITLE%</span>?</h3>\n\t\t\t\t\t<p><small>Please note that this game has been uploaded independently by this game&apos;s developer and has not yet been verified by the Poki team. If you run into any trouble, contact us at <strong><a href="mailto:hello@poki.com">hello@poki.com</a></strong></small></p>\n\t\t\t\t</div>\n\n\t\t\t\t<div class="poki-playtest-popup-scope-reset poki-playtest-popup__actions">\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-reject" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">No, thanks</button>\n\t\t\t\t\t<button type="button" id="poki-playtest-popup-resolve" class="poki-playtest-popup-scope-reset poki-playtest-popup__button">Yes, let\'s go</button>\n\t\t\t\t</div>\n\t\t\t</div>\n\t\t</div>\n\t</template>\n', e.appendChild(t.content);
            const n = document.createElement("style");
            n.innerHTML = '\n\t.poki-playtest-popup {\n\t\tall: unset;\n\n\t\t& *,\n\t\t& *::before,\n\t\t& *::after {\n\t\t\tbox-sizing: border-box;\n\t\t}\n\t}\n\n\t.poki-playtest-popup {\n\t\tborder-radius: 16px;\n\t\tbackground: #FFF;\n\t\tbox-shadow: 0px 60px 24px 0px rgba(93, 107, 132, 0.03), 0px 34px 20px 0px rgba(93, 107, 132, 0.09), 0px 15px 15px 0px rgba(93, 107, 132, 0.15), 0px 4px 8px 0px rgba(93, 107, 132, 0.18);\n\n\t\tdisplay: flex;\n\t\tmax-width: 480px;\n\t\tmin-width: 320px;\n\t\twidth: 100%;\n\t\tpadding: 8px 0 16px 0;\n\t\tflex-direction: column;\n\t\talign-items: flex-start;\n\t\tgap: 16px;\n\t\tcolor: #002B50;\n\n\t\tposition: fixed;\n\t\tz-index: 99999;\n\t\ttop: 50%;\n\t\tleft: 50%;\n\t\ttransform: translate(-50%, -50%);\n\t}\n\n\t.poki-playtest-popup__header {\n\t\t\tdisplay: flex;\n\t\t\twidth: 100%;\n\t\t\tpadding: 8px 16px 16px;\n\t\t\talign-items: center;\n\t\t\tgap: 12px;\n\t\t\tborder-bottom: 2px solid #F0F5FC;\n\t}\n\n\t.poki-playtest-popup__header__img {\n\t\tall: unset;\n\t}\n\n\t.poki-playtest-popup__header__title {\n\t\tfont: 700 24px/1.16 Torus, sans-serif;\n\t\tmargin: 0;\n\t}\n\n\t.poki-playtest-popup__content {\n\t\tfont: 400 14px/1.57 "Proxima Nova", sans-serif;\n\t\tpadding: 0 16px;\n\n\t\ta {\n\t\t\tcolor: #0074E0;\n\t\t\tpointer-events: auto;\n\n\t\t\t&:hover {\n\t\t\t\tcolor: #009CFF;\n\t\t\t}\n\t\t}\n\n\t\tp {\n\t\t\tmargin: 8px 0 0;\n\n\t\t\t&:first-child {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\n\t\t\tsmall {\n\t\t\t\tall: unset;\n\t\t\t}\n\n\t\t\t&:has(small) {\n\t\t\t\tcolor: #5D6B84;\n\t\t\t\tfont-size: 12px;\n\t\t\t\tline-height: 1.33;\n\t\t\t\tletter-spacing: 0.3px;\n\t\t\t}\n\t\t}\n\n\t\th3 {\n\t\t\tfont-weight: 700;\n\t\t\tfont-size: 16px;\n\t\t\tline-height: 1.5;\n\t\t\tmargin: 16px 0 14px;\n\t\t}\n\t}\n\n\t@media screen and (max-width: 640px) {\n\t\t.poki-playtest-popup {\n\t\t\tgap: 8px;\n\t\t\tpadding: 8px 0 12px 0;\n\t\t}\n\t\t.poki-playtest-popup__header {\n\t\t\tpadding: 0px 16px 0px;\n\t\t\talign-items: center;\n\t\t\tgap: 8px;\n\t\t}\n\t\t.poki-playtest-popup__content {\n\t\t\tfont-size: 12px;\n\t\t\tline-height: 1.33;\n\t\t}\n\t}\n\n\t.poki-playtest-popup__actions {\n\t\tdisplay: flex;\n\t\twidth: 100%;\n\t\tpadding: 8px 16px 0;\n\t\tgap: 16px;\n\t\tjustify-content: center;\n\t}\n\n\t.poki-playtest-popup__button {\n\t\tdisplay: flex;\n\t\tpadding: 7px 24px 9px;\n\t\tborder: none;\n\t\tmargin: 0;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\tflex: 1 0 0;\n\t\tborder-radius: 24px;\n\t\tbackground: #009CFF;\n\t\tcursor: pointer;\n\t\tpointer-events: auto;\n\n\t\tcolor: #FFF;\n\t\tfont: 700 16px/1.25 Torus, sans-serif;\n\n\t\t&:hover {\n\t\t\tbackground-color: #0074E0;\n\t\t}\n\t}\n\n\t.poki-playtest-popup-wrapper {\n\t\tall: unset;\n\t\tposition: fixed;\n\t\ttop: 0;\n\t\tleft: 0;\n\t\tbackground: #002B50AF;\n\t\twidth: 100%;\n\t\theight: 100%;\n\t\tz-index: 99998;\n\t}\n\n\t.poki-playtest-popup-scope-reset {\n\t\tletter-spacing: normal;\n\t\ttext-align: left;\n\t\ttext-decoration: none;\n\t\ttext-indent: 0;\n\t\ttext-shadow: none;\n\t\ttext-transform: none;\n\t\twhite-space: normal;\n\t\tword-spacing: normal;\n\t}\n', n.id = "poki-playtest-template-style", e.appendChild(n)
        }(o);
        const r = document.getElementById("poki-playtest-template-markup").content.cloneNode(!0);
        r.querySelector("#poki-playtest-popup-game-title").textContent = e, async function() {
            const e = new FontFace("ProximaNova", "url(https://a.poki-cdn.com/fonts/proxima-nova-regular-latin.woff2)").load(),
                t = new FontFace("ProximaNova", "url(https://a.poki-cdn.com/fonts/proxima-nova-bold-latin.woff2)", {
                    weight: "bold"
                }).load(),
                n = new FontFace("Torus", "url(https://a.poki-cdn.com/fonts/torus-bold-latin.woff2)").load(),
                [o, r, i] = await Promise.all([e, t, n]);
            document.fonts.add(o), document.fonts.add(r), document.fonts.add(i)
        }().then((() => {
            o.appendChild(r),
                function({
                    rejectCallback: e,
                    resolveCallback: t
                }) {
                    const n = document.getElementById("poki-playtest-popup-reject"),
                        o = document.getElementById("poki-playtest-popup-resolve");
                    n ? .addEventListener("pointerup", (() => {
                        setTimeout(Bn, 10), e()
                    })), o ? .addEventListener("pointerup", (() => {
                        setTimeout(Bn, 10), t()
                    }));
                    const r = document.getElementById("poki-playtest-popup-wrapper");
                    r && ["pointerdown", "pointerup", "pointermove", "click", "mousedown", "mouseup", "mousemove", "touchstart", "touchend", "touchmove", "contextmenu", "dragstart"].forEach((e => r.addEventListener(e, Rn)))
                }({
                    rejectCallback: t,
                    resolveCallback: n
                })
        }))
    }

    function Vn(e) {
        const t = [];
        let n = 0;
        for (let o = 0; o < e.length; o++) {
            if (n > 0) {
                n--;
                continue
            }
            const r = e[o];
            if ("string" == typeof r) n = (r.match(/%c/g) || []).length, t.push(r.replace(/%c/g, ""));
            else try {
                t.push(String(r))
            } catch (e) {
                t.push(`<${e.message}>`)
            }
        }
        return t.join(" ")
    }
    let Un = 0,
        Gn = 0;

    function Fn() {
        return Un
    }
    const Kn = window.requestAnimationFrame;

    function zn(e) {
        fetch("https://mystery-game-tile.poki.io/v0/metric", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(e)
        })
    }

    function Hn(e) {
        const t = Math.random().toString(36).substring(2);
        let n = 0,
            o = !1,
            r = 0,
            i = 0,
            a = 0,
            s = [];
        const c = () => {
            a++, Kn(c)
        };
        c(), setInterval((() => {
            s.push(a), a = 0
        }), 1e3);
        window.addEventListener("beforeunload", (() => {
            const a = Fn() > 0,
                c = s,
                d = performance.now();
            s = [], o || (n = d), zn({
                metrictest_id: e.metrictestID,
                play_id: t,
                started: a,
                duration: n,
                total_duration: d,
                timed_out: !0,
                sdk_version: "9750de71feaa665150e66b06e9449b500b265f1b",
                fpss: c,
                upvotes: r,
                downvotes: i,
                have_interaction: On() > 0
            })
        }));
        window.addEventListener("message", (e => {
            e.data && "vote" === e.data.type && (e.data.direction < 0 ? i++ : e.data.direction > 0 && r++)
        }));
        return setInterval((() => {
            const a = Fn() > 0,
                c = s,
                d = performance.now();
            if (s = [], !o) {
                n = d;
                const e = 6e4;
                d - Math.max(Gn, On()) > e && (o = !0)
            }
            zn({
                metrictest_id: e.metrictestID,
                play_id: t,
                started: a,
                duration: n,
                total_duration: d,
                timed_out: o,
                sdk_version: "9750de71feaa665150e66b06e9449b500b265f1b",
                fpss: c,
                upvotes: r,
                downvotes: i,
                have_interaction: On() > 0
            })
        }), 1e4), t
    }
    let qn = !1;
    try {
        "1" === localStorage.getItem("poki_pbf") ? qn = !0 : V.isPlayground || "GB" === V.country || localStorage.setItem("poki_pbf", "1")
    } catch {}

    function Wn() {
        if (void 0 === window.MediaRecorder) return;
        let e = 'video/webm;codecs="vp9"';
        return ("undefined" != typeof navigator && /(iPad|iPhone|iPod)/gi.test(navigator.userAgent) || Dt || Lt) && (e = 'video/mp4;codecs="avc1.42000d"'), MediaRecorder.isTypeSupported(e) ? e : void 0
    }
    let Yn = (e, t) => {},
        Jn = [],
        $n = null,
        Qn = 0;
    const Zn = [...Object.values(e.tracking.screen), e.tracking.ads.status.completed, e.tracking.ads.status.error, e.tracking.ads.status.limit, e.tracking.ads.video.progress],
        Xn = {
            [e.tracking.screen.commercialBreak]: "commercialBreak",
            [e.tracking.screen.gameLoadingFinished]: "gameLoadingFinished",
            [e.tracking.screen.gameplayStart]: "gameplayStart",
            [e.tracking.screen.gameplayStop]: "gameplayStop",
            [e.tracking.screen.rewardedBreak]: "rewardedBreak"
        };
    let eo = [],
        to = [];
    try {
        const e = e => {
            const t = console[e];
            console[e] = (...n) => {
                t.apply(console, n), to && to.push({
                    timeMs: performance.now(),
                    level: e,
                    message: Vn(n)
                })
            }, eo.push((() => {
                console[e] = t
            }))
        };
        V.gameID && !V.isPlayground && !V.isPokiExternal && V.isPokiIframe && (e("log"), e("info"), e("warn"), e("error"))
    } catch {}

    function no() {
        Jn = null, eo.forEach((e => e())), eo = [], to = null
    }

    function oo(t, n, o) {
        console.info("%cPOKI_PLAYTEST:%c start recording using codec", "font-weight: bold", "", n);
        const r = Sn(t, (() => {
            $n ? .close(1e3, "Playtest recording stopped")
        }));
        r && ($n = new WebSocket("wss://playtest-recorder.poki.io/ws"), $n.addEventListener("error", (() => {
            Z.track(e.tracking.playtest.error, {
                message: "websocket error"
            }), console.info("%cPOKI_PLAYTEST:%c error", "font-weight: bold", "")
        })), $n.addEventListener("open", (() => {
            if (!$n) return;
            if ($n.readyState === $n.OPEN) {
                let e;
                try {
                    const t = document.createElement("canvas"),
                        n = {
                            powerPreference: "high-performance",
                            failIfMajorPerformanceCaveat: !1
                        };
                    let o = t.getContext("webgl2", n);
                    if (o || (o = t.getContext("webgl", n), o || (o = t.getContext("experimental-webgl", n))), o) {
                        const t = o,
                            n = t.getExtension("WEBGL_debug_renderer_info");
                        n && (e = t.getParameter(n.UNMASKED_RENDERER_WEBGL)), e || (e = t.getParameter(t.RENDERER))
                    }
                } catch {}
                const n = JSON.stringify({
                    type: "save",
                    game_id: V.gameID,
                    version_id: V.versionID,
                    playtest_request_id: o,
                    webgl_renderer: e,
                    sdk_version: "9750de71feaa665150e66b06e9449b500b265f1b",
                    cpus: navigator.hardwareConcurrency,
                    device_pixel_ratio: window.devicePixelRatio || 1,
                    canvasses: t.length
                });
                $n.send(n), console.info("%cPOKI_PLAYTEST:%c websocket open", "font-weight: bold", "", n)
            }
            const i = new MediaRecorder(r, {
                    mimeType: n,
                    videoBitsPerSecond: 5e5
                }),
                a = performance.now(),
                s = e => Math.round((e || performance.now()) - a);
            i.addEventListener("stop", (() => {
                console.info("%cPOKI_PLAYTEST:%c recording stopped", "font-weight: bold", "")
            })), i.addEventListener("error", (e => {
                console.warn("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e.error)
            })), i.addEventListener("dataavailable", (e => {
                e.data.size > 0 && $n && $n.readyState === $n.OPEN && $n.send(e.data)
            })), i.start(250);
            const c = {};
            let d = !1;
            document.addEventListener("keydown", (e => {
                c[e.code] || (c[e.code] = !0, d = !0)
            })), document.addEventListener("keyup", (e => {
                c[e.code] && (c[e.code] = !1, d = !0)
            }));
            const l = setInterval((() => {
                const e = Object.keys(c);
                d && e.length > 0 && $n && $n.readyState === $n.OPEN && $n.send(JSON.stringify({
                    type: "keyboard",
                    offset: s(),
                    keys: c
                })), d = !1, e.forEach((e => {
                    c[e] || delete c[e]
                }))
            }), 50);
            Yn = (e, t) => {
                if (!$n || $n.readyState !== $n.OPEN) return;
                $n.send(te({
                    type: "sdk-event",
                    offset: s(t),
                    event: e
                }));
                const n = Xn[e];
                n && $n.send(te({
                    type: "console",
                    offset: s(t),
                    level: "log",
                    message: `PokiSDK.${n}()`
                }))
            }, null !== Jn && (Jn.forEach((e => {
                Yn(e.event, e.timeMs)
            })), Jn = null), le = e => {
                $n && $n.readyState === $n.OPEN && $n.send(JSON.stringify({
                    type: "error",
                    offset: s(),
                    error: e
                }))
            }, eo.forEach((e => e())), eo = [];
            try {
                const e = e => {
                    const t = console[e];
                    console[e] = (...n) => {
                        t.apply(console, n), $n && $n.readyState === $n.OPEN && $n.send(JSON.stringify({
                            type: "console",
                            offset: s(),
                            level: e,
                            message: Vn(n)
                        }))
                    }, eo.push((() => {
                        console[e] = t
                    }))
                };
                e("log"), e("info"), e("warn"), e("error")
            } catch {}
            to && (to.forEach((e => {
                $n && $n.readyState === $n.OPEN && $n.send(JSON.stringify({
                    type: "console",
                    offset: s(e.timeMs),
                    level: e.level,
                    message: e.message
                }))
            })), to = null), Ot() === St && $n.send(JSON.stringify({
                type: "console",
                offset: s(),
                level: "log",
                message: "No canvas found, using HTML capture"
            }));
            const u = ({
                position: t
            }) => {
                if (!$n || $n.readyState !== $n.OPEN) return;
                let n = e.tracking.screen.commercialBreak,
                    o = "Commercial Break";
                t === e.ads.position.rewarded && (n = e.tracking.screen.rewardedBreak, o = "Rewarded Break"), bn(o), $n.send(JSON.stringify({
                    type: "sdk-event",
                    offset: s(),
                    event: n
                }))
            };
            z.addEventListener(e.playtest.startVideo, u);
            const p = () => {
                bn("")
            };
            z.addEventListener(e.playtest.stopVideo, p);
            const g = new be(1),
                f = setInterval((() => {
                    $n && $n.readyState === $n.OPEN && $n.send(JSON.stringify({
                        type: "fps",
                        offset: s(),
                        stats: g.stats()
                    }))
                }), 1e3);
            $n.addEventListener("close", (t => {
                console.info("%cPOKI_PLAYTEST:%c websocket closed", "font-weight: bold", "", t), Yn = () => {}, z.removeEventListener(e.playtest.startVideo, u), z.removeEventListener(e.playtest.stopVideo, p), clearInterval(l), clearInterval(f), i.stop(), Ft = !0, $n = null, no(), Z.track(e.tracking.playtest.closed, {
                    reason: `${t.reason}:${t.code}:${t.wasClean}`
                })
            }))
        })))
    }
    J = function(t) {
        var n;
        if (n = performance.now(), Gn = n, t.event === e.tracking.screen.gameLoadingFinished ? Qn = performance.now() : t.event === e.tracking.screen.gameplayStart && function(e) {
                Un = e
            }(performance.now()), Zn.includes(t.event)) try {
            Yn(t.event), null !== Jn && Jn.push({
                event: t.event,
                timeMs: performance.now()
            })
        } catch (e) {
            console.warn("%cPOKI_PLAYTEST:%c", "font-weight: bold", "", e)
        }
    };

    function ro(t) {
        const n = function(e) {
                if ("1" === O("playtest")) return !0;
                if (!V.country) return !1;
                if (!V.isPokiIframe) return !1;
                if (!e.playtestRecord) return !1;
                if (e.playtestVersion && e.playtestVersion !== V.versionID) return !1;
                if (e.playtestNewUser && qn) return !1;
                const t = C() || D() || Dt;
                if ("desktop" === e.playtestDeviceCategory && t) return !1;
                if ("mobile" === e.playtestDeviceCategory && !t) return !1;
                if (["GB", "NL", "CA"].includes(V.country)) return !1;
                const n = navigator;
                if (n.connection && n.connection.effectiveType && "4g" !== n.connection.effectiveType) return !1;
                if (n ? .hardwareConcurrency < 8) return !1;
                if (!document.createElement("canvas").getContext("webgl2", {
                        failIfMajorPerformanceCaveat: !0
                    })) return !1;
                if (Lt) {
                    const e = n.userAgent.match(/Version\/([\d]+)/);
                    if (!e || parseInt(e[1], 10) < 18) return !1
                } else if (void 0 === window.MediaStreamTrackProcessor) return !1;
                return !0
            }(t),
            o = Wn(),
            r = "1" === O("playerfittest");
        if (n && o && !r) {
            var i;
            Z.track(e.tracking.playtest.showModal, {
                show: !0
            }), console.info("%cPOKI_PLAYTEST:%c init", "font-weight: bold", "", o), (i = t ? .gameTitle || "this game", new Promise(((e, t) => {
                console.info("%cPOKI_PLAYTEST:%c showing consent screen", "font-weight: bold", ""), jn({
                    rejectCallback: t,
                    resolveCallback: e,
                    gameTitle: i
                })
            }))).then((() => {
                Z.track(e.tracking.playtest.accepted);
                const n = performance.now() + 6e4;
                let r = 0,
                    i = performance.now();
                const a = setInterval((() => {
                    const s = performance.now();
                    if (! function() {
                            const e = window;
                            return !!(e.pc && (e.pc.app || e.pc.AppBase) || e.c3_runtimeInterface || e._dmJSDeviceShared || e.g_WebAudioContext || e.unityGame)
                        }()) {
                        const t = kt() || 0;
                        t !== r && (r = t, i = s), (Qn && s - Qn > 1e4 || s - i > 1e4) && (Z.track(e.tracking.playtest.noCanvas), console.info("%cPOKI_PLAYTEST:%c no canvas found, switch to HTML capture", "font-weight: bold", ""), Ct(St))
                    }
                    const c = An();
                    if (c.length) {
                        clearInterval(a), Z.track(e.tracking.playtest.starting);
                        try {
                            oo(c, o, t.playtestRequestID)
                        } catch {}
                    }
                    s > n && (Z.track(e.tracking.playtest.notLoaded), clearInterval(a), console.info("%cPOKI_PLAYTEST:%c no gameLoadingFinished within 2 minutes", "font-weight: bold", ""), no())
                }), 1e3)
            })).catch((t => {
                Z.track(e.tracking.playtest.rejected), console.info("%cPOKI_PLAYTEST:%c rejected", "font-weight: bold", "", t), no()
            }))
        } else {
            if (r || t.metrictestID && V.isPokiIframe) {
                const n = Hn(t);
                Z.track(e.tracking.playerfittest.starting, {
                    playId: n
                })
            }
            no()
        }
    }

    function io(e, t) {
        (null == t || t > e.length) && (t = e.length);
        for (var n = 0, o = Array(t); n < t; n++) o[n] = e[n];
        return o
    }

    function ao(e, t) {
        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
    }

    function so(e, t, n) {
        return t && function(e, t) {
            for (var n = 0; n < t.length; n++) {
                var o = t[n];
                o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, go(o.key), o)
            }
        }(e.prototype, t), Object.defineProperty(e, "prototype", {
            writable: !1
        }), e
    }

    function co(e, t, n) {
        return (t = go(t)) in e ? Object.defineProperty(e, t, {
            value: n,
            enumerable: !0,
            configurable: !0,
            writable: !0
        }) : e[t] = n, e
    }

    function lo(e, t) {
        var n = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
            var o = Object.getOwnPropertySymbols(e);
            t && (o = o.filter((function(t) {
                return Object.getOwnPropertyDescriptor(e, t).enumerable
            }))), n.push.apply(n, o)
        }
        return n
    }

    function uo(e) {
        for (var t = 1; t < arguments.length; t++) {
            var n = null != arguments[t] ? arguments[t] : {};
            t % 2 ? lo(Object(n), !0).forEach((function(t) {
                co(e, t, n[t])
            })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : lo(Object(n)).forEach((function(t) {
                Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
            }))
        }
        return e
    }

    function po(e, t) {
        return function(e) {
            if (Array.isArray(e)) return e
        }(e) || function(e, t) {
            var n = null == e ? null : "undefined" != typeof Symbol && e[Symbol.iterator] || e["@@iterator"];
            if (null != n) {
                var o, r, i, a, s = [],
                    c = !0,
                    d = !1;
                try {
                    if (i = (n = n.call(e)).next, 0 === t) {
                        if (Object(n) !== n) return;
                        c = !1
                    } else
                        for (; !(c = (o = i.call(n)).done) && (s.push(o.value), s.length !== t); c = !0);
                } catch (e) {
                    d = !0, r = e
                } finally {
                    try {
                        if (!c && null != n.return && (a = n.return(), Object(a) !== a)) return
                    } finally {
                        if (d) throw r
                    }
                }
                return s
            }
        }(e, t) || mo(e, t) || function() {
            throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
        }()
    }

    function go(e) {
        var t = function(e, t) {
            if ("object" != typeof e || !e) return e;
            var n = e[Symbol.toPrimitive];
            if (void 0 !== n) {
                var o = n.call(e, t);
                if ("object" != typeof o) return o;
                throw new TypeError("@@toPrimitive must return a primitive value.")
            }
            return String(e)
        }(e, "string");
        return "symbol" == typeof t ? t : t + ""
    }

    function fo(e) {
        return fo = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        }, fo(e)
    }

    function mo(e, t) {
        if (e) {
            if ("string" == typeof e) return io(e, t);
            var n = {}.toString.call(e).slice(8, -1);
            return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? io(e, t) : void 0
        }
    }
    var ho = so((function e(t) {
        ao(this, e), this.p = new Promise(t)
    }));
    ho.__typeson__type__ = "TypesonPromise", "undefined" != typeof Symbol && Object.defineProperty(ho.prototype, Symbol.toStringTag, {
        get: function() {
            return "TypesonPromise"
        }
    }), ho.prototype.then = function(e, t) {
        var n = this;
        return new ho((function(o, r) {
            n.p.then((function(t) {
                o(e ? e(t) : t)
            })).catch((function(e) {
                return t ? t(e) : Promise.reject(e)
            })).then(o, r)
        }))
    }, ho.prototype.catch = function(e) {
        return this.then((function() {}), e)
    }, ho.resolve = function(e) {
        return new ho((function(t) {
            t(e)
        }))
    }, ho.reject = function(e) {
        return new ho((function(t, n) {
            n(e)
        }))
    }, ho.all = function(e) {
        return new ho((function(t, n) {
            Promise.all(e.map((function(e) {
                return null != e && e.constructor && "__typeson__type__" in e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e
            }))).then(t, n)
        }))
    }, ho.race = function(e) {
        return new ho((function(t, n) {
            Promise.race(e.map((function(e) {
                return null != e && e.constructor && "__typeson__type__" in e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e
            }))).then(t, n)
        }))
    }, ho.allSettled = function(e) {
        return new ho((function(t, n) {
            Promise.allSettled(e.map((function(e) {
                return null != e && e.constructor && "__typeson__type__" in e.constructor && "TypesonPromise" === e.constructor.__typeson__type__ ? e.p : e
            }))).then(t, n)
        }))
    };
    var yo = Object.hasOwn,
        wo = Object.getPrototypeOf;

    function vo(e, t) {
        return Eo(e) && "function" == typeof e.then && (!t || "function" == typeof e.catch)
    }

    function bo(e) {
        return Object.prototype.toString.call(e).slice(8, -1)
    }

    function ko(e, t) {
        if (!e || "object" !== fo(e)) return !1;
        var n = wo(e);
        if (!n) return null === t;
        var o = yo(n, "constructor") && n.constructor;
        return "function" != typeof o ? null === t : t === o || null !== t && Function.prototype.toString.call(o) === Function.prototype.toString.call(t) || "function" == typeof t && "string" == typeof o.__typeson__type__ && o.__typeson__type__ === t.__typeson__type__
    }

    function Ao(e) {
        return !(!e || "Object" !== bo(e)) && (!wo(e) || ko(e, Object))
    }

    function So(e) {
        if (!e || "Object" !== bo(e)) return !1;
        var t = wo(e);
        return !t || ko(e, Object) || So(t)
    }

    function Eo(e) {
        return null !== e && "object" === fo(e)
    }

    function Io(e) {
        return e.replaceAll("''", "''''").replace(/^$/, "''").replaceAll("~", "~0").replaceAll(".", "~1")
    }

    function _o(e) {
        return e.replaceAll("~1", ".").replaceAll("~0", "~").replace(/^''$/, "").replaceAll("''''", "''")
    }

    function Po(e, t) {
        if ("" === t) return e;
        if (null === e || "object" !== fo(e)) throw new TypeError("Unexpected non-object type");
        var n = t.indexOf(".");
        if (-1 !== n) {
            var o = e[_o(t.slice(0, n))];
            return void 0 === o ? void 0 : Po(o, t.slice(n + 1))
        }
        return e[_o(t)]
    }

    function To(e, t, n) {
        if ("" === t) return n;
        if (!e || "object" !== fo(e)) throw new TypeError("Unexpected non-object type");
        if ("__proto__" === t) throw new TypeError("Invalid property");
        var o = t.indexOf(".");
        return -1 !== o ? To(e[_o(t.slice(0, o))], t.slice(o + 1), n) : (e[_o(t)] = n, e)
    }

    function xo(e) {
        return null === e ? "null" : Array.isArray(e) ? "array" : fo(e)
    }

    function Oo(e, t, n) {
        return e && e.then || (e = Promise.resolve(e)), t ? e.then(t) : e
    }
    var Co = Object.keys,
        Do = Object.hasOwn,
        Lo = Array.isArray,
        Mo = ["type", "replaced", "iterateIn", "iterateUnsetNumeric", "addLength"];

    function No(e) {
        return function() {
            for (var t = [], n = 0; n < arguments.length; n++) t[n] = arguments[n];
            try {
                return Promise.resolve(e.apply(this, t))
            } catch (e) {
                return Promise.reject(e)
            }
        }
    }

    function Bo(e, t) {
        var n, o;
        if ("" === e.keypath) return -1;
        var r = null !== (n = e.keypath.match(/\./g)) && void 0 !== n ? n : 0,
            i = null !== (o = t.keypath.match(/\./g)) && void 0 !== o ? o : 0;
        return r && (r = r.length), i && (i = i.length), r > i ? -1 : r < i ? 1 : e.keypath < t.keypath ? -1 : e.keypath > t.keypath ? 1 : 0
    }
    var Ro = so((function e(t) {
            ao(this, e), this.options = t, this.plainObjectReplacers = [], this.nonplainObjectReplacers = [], this.revivers = {}, this.types = {}
        }), [{
            key: "stringify",
            value: function(e, t, n, o) {
                o = uo(uo(uo({}, this.options), o), {}, {
                    stringification: !0
                });
                var r = this.encapsulate(e, null, o);
                return Lo(r) ? JSON.stringify(r[0], t, n) : r.then((function(e) {
                    return JSON.stringify(e, t, n)
                }))
            }
        }, {
            key: "stringifySync",
            value: function(e, t, n, o) {
                return this.stringify(e, t, n, uo(uo({
                    throwOnBadSyncType: !0
                }, o), {}, {
                    sync: !0
                }))
            }
        }, {
            key: "stringifyAsync",
            value: function(e, t, n, o) {
                return this.stringify(e, t, n, uo(uo({
                    throwOnBadSyncType: !0
                }, o), {}, {
                    sync: !1
                }))
            }
        }, {
            key: "parse",
            value: function(e, t, n) {
                return n = uo(uo(uo({}, this.options), n), {}, {
                    parse: !0
                }), this.revive(JSON.parse(e, t), n)
            }
        }, {
            key: "parseSync",
            value: function(e, t, n) {
                return this.parse(e, t, uo(uo({
                    throwOnBadSyncType: !0
                }, n), {}, {
                    sync: !0
                }))
            }
        }, {
            key: "parseAsync",
            value: function(e, t, n) {
                return this.parse(e, t, uo(uo({
                    throwOnBadSyncType: !0
                }, n), {}, {
                    sync: !1
                }))
            }
        }, {
            key: "specialTypeNames",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return n.returnTypeNames = !0, this.encapsulate(e, t, n)
            }
        }, {
            key: "rootTypeName",
            value: function(e, t) {
                var n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
                return n.iterateNone = !0, this.encapsulate(e, t, n)
            }
        }, {
            key: "encapsulate",
            value: function(e, t, n) {
                var o = this,
                    r = uo(uo({
                        sync: !0
                    }, this.options), n),
                    i = r.sync,
                    a = {},
                    s = [],
                    c = [],
                    d = [],
                    l = !("cyclic" in r) || r.cyclic,
                    u = r.encapsulateObserver,
                    p = function(e) {
                        var t = Object.values(a);
                        if (r.iterateNone) return t.length ? t[0] : xo(e);
                        if (t.length) {
                            if (r.returnTypeNames) return function(e) {
                                return function(e) {
                                    if (Array.isArray(e)) return io(e)
                                }(e) || function(e) {
                                    if ("undefined" != typeof Symbol && null != e[Symbol.iterator] || null != e["@@iterator"]) return Array.from(e)
                                }(e) || mo(e) || function() {
                                    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
                                }()
                            }(new Set(t));
                            e && Ao(e) && !Do(e, "$types") ? e.$types = a : e = {
                                $: e,
                                $types: {
                                    $: a
                                }
                            }
                        } else Eo(e) && Do(e, "$types") && (e = {
                            $: e,
                            $types: !0
                        });
                        return !r.returnTypeNames && e
                    },
                    g = No((function(e, t) {
                        return Oo(Promise.all(t.map((function(e) {
                            return e[1].p
                        }))), (function(n) {
                            return Oo(Promise.all(n.map(No((function(n) {
                                var o = !1,
                                    r = [],
                                    i = po(t.splice(0, 1), 1),
                                    a = po(i[0], 7),
                                    s = a[0],
                                    c = a[2],
                                    d = a[3],
                                    l = a[4],
                                    u = a[5],
                                    p = a[6],
                                    f = m(s, n, c, d, r, !0, p),
                                    h = ko(f, ho);
                                return function(e, t) {
                                    var n = e();
                                    return n && n.then ? n.then(t) : t(n)
                                }((function() {
                                    if (s && h) return Oo(f.p, (function(t) {
                                        l[u] = t;
                                        var n = g(e, r);
                                        return o = !0, n
                                    }))
                                }), (function(t) {
                                    return o ? t : (s ? l[u] = f : e = h ? f.p : f, g(e, r))
                                }))
                            })))), (function() {
                                return e
                            }))
                        }))
                    })),
                    f = function(e, t, n) {
                        Object.assign(e, t);
                        var o = Mo.map((function(t) {
                            var n = e[t];
                            return delete e[t], n
                        }));
                        n(), Mo.forEach((function(t, n) {
                            e[t] = o[n]
                        }))
                    },
                    m = function(e, t, n, i, d, l, p) {
                        var g, y = {},
                            w = fo(t),
                            v = u ? function(o) {
                                var r, a = null !== (r = null != p ? p : i.type) && void 0 !== r ? r : xo(t);
                                u(Object.assign(null != o ? o : y, {
                                    keypath: e,
                                    value: t,
                                    cyclic: n,
                                    stateObj: i,
                                    promisesData: d,
                                    resolvingTypesonPromise: l,
                                    awaitingTypesonPromise: ko(t, ho)
                                }, {
                                    type: a
                                }))
                            } : null;
                        if (["string", "boolean", "number", "undefined"].includes(w)) return void 0 === t || Number.isNaN(t) || t === Number.NEGATIVE_INFINITY || t === Number.POSITIVE_INFINITY || 0 === t ? (g = i.replaced ? t : h(e, t, i, d, !1, l, v)) !== t && (y = {
                            replaced: g
                        }) : g = t, v && v(), g;
                        if (null === t) return v && v(), t;
                        if (n && !i.iterateIn && !i.iterateUnsetNumeric && t && "object" === fo(t)) {
                            var b = s.indexOf(t);
                            if (-1 !== b) return a[e] = "#", v && v({
                                cyclicKeypath: c[b]
                            }), "#" + c[b];
                            !0 === n && (s.push(t), c.push(e))
                        }
                        var k, A = Ao(t),
                            S = Lo(t),
                            E = (A || S) && (!o.plainObjectReplacers.length || i.replaced) || i.iterateIn ? t : h(e, t, i, d, A || S, null, v);
                        if (E !== t ? (g = E, y = {
                                replaced: E
                            }) : "" === e && ko(t, ho) ? (d.push([e, t, n, i, void 0, void 0, i.type]), g = t) : S && "object" !== i.iterateIn || "array" === i.iterateIn ? (k = new Array(t.length), y = {
                                clone: k
                            }) : (["function", "symbol"].includes(fo(t)) || "toJSON" in t || ko(t, ho) || ko(t, Promise) || ko(t, ArrayBuffer)) && !A && "object" !== i.iterateIn ? g = t : (k = {}, i.addLength && (k.length = t.length), y = {
                                clone: k
                            }), v && v(), r.iterateNone) return null != k ? k : g;
                        if (!k) return g;
                        if (i.iterateIn) {
                            var I = function(o) {
                                var r = {
                                    ownKeys: Do(t, o)
                                };
                                f(i, r, (function() {
                                    var r = e + (e ? "." : "") + Io(o),
                                        a = m(r, t[o], Boolean(n), i, d, l);
                                    ko(a, ho) ? d.push([r, a, Boolean(n), i, k, o, i.type]) : void 0 !== a && (k[o] = a)
                                }))
                            };
                            for (var _ in t) I(_);
                            v && v({
                                endIterateIn: !0,
                                end: !0
                            })
                        } else Co(t).forEach((function(o) {
                            var r = e + (e ? "." : "") + Io(o);
                            f(i, {
                                ownKeys: !0
                            }, (function() {
                                var e = m(r, t[o], Boolean(n), i, d, l);
                                ko(e, ho) ? d.push([r, e, Boolean(n), i, k, o, i.type]) : void 0 !== e && (k[o] = e)
                            }))
                        })), v && v({
                            endIterateOwn: !0,
                            end: !0
                        });
                        if (i.iterateUnsetNumeric) {
                            for (var P = t.length, T = function(o) {
                                    if (!(o in t)) {
                                        var r = "".concat(e).concat(e ? "." : "").concat(String(o));
                                        f(i, {
                                            ownKeys: !1
                                        }, (function() {
                                            var e = m(r, void 0, Boolean(n), i, d, l);
                                            ko(e, ho) ? d.push([r, e, Boolean(n), i, k, o, i.type]) : void 0 !== e && (k[o] = e)
                                        }))
                                    }
                                }, x = 0; x < P; x++) T(x);
                            v && v({
                                endIterateUnsetNumeric: !0,
                                end: !0
                            })
                        }
                        return k
                    },
                    h = function(e, t, n, r, s, c, d) {
                        for (var u = s ? o.plainObjectReplacers : o.nonplainObjectReplacers, p = u.length; p--;) {
                            var g = u[p];
                            if (g.test(t, n)) {
                                var f = g.type;
                                if (o.revivers[f]) {
                                    var h = a[e];
                                    a[e] = h ? [f].concat(h) : f
                                }
                                if (Object.assign(n, {
                                        type: f,
                                        replaced: !0
                                    }), (i || !g.replaceAsync) && !g.replace) return d && d({
                                    typeDetected: !0
                                }), m(e, t, l && "readonly", n, r, c, f);
                                d && d({
                                    replacing: !0
                                });
                                var y = void 0;
                                if (i || !g.replaceAsync) {
                                    if (void 0 === g.replace) throw new TypeError("Missing replacer");
                                    y = g.replace(t, n)
                                } else y = g.replaceAsync(t, n);
                                return m(e, y, l && "readonly", n, r, c, f)
                            }
                        }
                        return t
                    },
                    y = m("", e, l, null != t ? t : {}, d);
                if (d.length) return i && r.throwOnBadSyncType ? function() {
                    throw new TypeError("Sync method requested but async result obtained")
                }() : Promise.resolve(g(y, d)).then(p);
                if (!i && r.throwOnBadSyncType) throw new TypeError("Async method requested but sync result obtained");
                return r.stringification && i ? [p(y)] : i ? p(y) : Promise.resolve(p(y))
            }
        }, {
            key: "encapsulateSync",
            value: function(e, t, n) {
                return this.encapsulate(e, t, uo(uo({
                    throwOnBadSyncType: !0
                }, n), {}, {
                    sync: !0
                }))
            }
        }, {
            key: "encapsulateAsync",
            value: function(e, t, n) {
                return this.encapsulate(e, t, uo(uo({
                    throwOnBadSyncType: !0
                }, n), {}, {
                    sync: !1
                }))
            }
        }, {
            key: "revive",
            value: function(e, t) {
                var n = this,
                    o = uo(uo({
                        sync: !0
                    }, this.options), t),
                    r = o.sync;

                function i(e) {
                    if (r) return e;
                    if (o.throwOnBadSyncType) throw new TypeError("Async method requested but sync result obtained");
                    return Promise.resolve(e)
                }
                if (!e || "object" !== fo(e) || Array.isArray(e)) return i(e);
                var a = e.$types;
                if (!0 === a) return i(e.$);
                if (!a || "object" !== fo(a) || Array.isArray(a)) return i(e);
                var s = [],
                    c = {},
                    d = !0;
                a.$ && Ao(a.$) && (e = e.$, a = a.$, d = !1);
                var l = function(e, t) {
                        var o, i = po(null !== (o = n.revivers[e]) && void 0 !== o ? o : [], 1)[0];
                        if (!i) throw new Error("Unregistered type: " + e);
                        if (r && !("revive" in i)) return t;
                        if (!r && i.reviveAsync) return i.reviveAsync(t, c);
                        if (i.revive) return i.revive(t, c);
                        throw new Error("Missing reviver")
                    },
                    u = [];

                function p(e) {
                    return ko(e, jo) ? void 0 : e
                }
                var g, f = function() {
                    var t = [];
                    if (!a) throw new Error("Found bad `types`");
                    if (Object.entries(a).forEach((function(e) {
                            var o = po(e, 2),
                                r = o[0],
                                i = o[1];
                            "#" !== i && [].concat(i).forEach((function(e) {
                                var o;
                                po(null !== (o = n.revivers[e]) && void 0 !== o ? o : [null, {}], 2)[1].plain && (t.push({
                                    keypath: r,
                                    type: e
                                }), delete a[r])
                            }))
                        })), t.length) return t.sort(Bo), t.reduce((function t(n, o) {
                        var r = o.keypath,
                            i = o.type;
                        if (vo(n)) return n.then((function(e) {
                            return t(e, {
                                keypath: r,
                                type: i
                            })
                        }));
                        var a = Po(e, r);
                        if (ko(a = l(i, a), ho)) return a.then((function(t) {
                            var n = To(e, r, t);
                            n === t && (e = n)
                        }));
                        var s = To(e, r, a);
                        s === a && (e = s)
                    }), void 0)
                }();
                return ko(f, ho) ? g = f.then((function() {
                    return e
                })) : (g = function e(t, n, o, r, i) {
                    if (!d || "$types" !== t) {
                        var c = a[t],
                            p = Lo(n);
                        if (p || Ao(n)) {
                            var g = p ? new Array(n.length) : {};
                            for (Co(n).forEach((function(r) {
                                    var i = e(t + (t ? "." : "") + Io(r), n[r], null != o ? o : g, g, r),
                                        a = function(e) {
                                            return ko(e, jo) ? g[r] = void 0 : void 0 !== e && (g[r] = e), e
                                        };
                                    ko(i, ho) ? u.push(i.then((function(e) {
                                        return a(e)
                                    }))) : a(i)
                                })), n = g; s.length;) {
                                var f = po(s[0], 4),
                                    m = f[0],
                                    h = f[1],
                                    y = f[2],
                                    w = f[3],
                                    v = Po(m, h);
                                if (void 0 === v) break;
                                y[w] = v, s.splice(0, 1)
                            }
                        }
                        if (!c) return n;
                        if ("#" === c) {
                            var b = Po(o, n.slice(1));
                            return void 0 === b && s.push([o, n.slice(1), r, i]), b
                        }
                        return [].concat(c).reduce((function e(t, n) {
                            if (ko(t, ho)) return t.then((function(t) {
                                return e(t, n)
                            }));
                            if ("string" != typeof n) throw new TypeError("Bad type JSON");
                            return l(n, t)
                        }), n)
                    }
                }("", e, null), u.length && (g = ho.resolve(g).then((function(e) {
                    return ho.all([e].concat(u))
                })).then((function(e) {
                    return po(e, 1)[0]
                })))), vo(g) ? r && o.throwOnBadSyncType ? function() {
                    throw new TypeError("Sync method requested but async result obtained")
                }() : ko(g, ho) ? g.p.then(p) : g : !r && o.throwOnBadSyncType ? function() {
                    throw new TypeError("Async method requested but sync result obtained")
                }() : r ? p(g) : Promise.resolve(p(g))
            }
        }, {
            key: "reviveSync",
            value: function(e, t) {
                return this.revive(e, uo(uo({
                    throwOnBadSyncType: !0
                }, t), {}, {
                    sync: !0
                }))
            }
        }, {
            key: "reviveAsync",
            value: function(e, t) {
                return this.revive(e, uo(uo({
                    throwOnBadSyncType: !0
                }, t), {}, {
                    sync: !1
                }))
            }
        }, {
            key: "register",
            value: function(e, t) {
                var n = this,
                    o = null != t ? t : {},
                    r = function(e) {
                        Lo(e) ? e.forEach((function(e) {
                            r(e)
                        })) : Co(e).forEach((function(t) {
                            var r;
                            if ("#" === t) throw new TypeError("# cannot be used as a type name as it is reserved for cyclic objects");
                            if (Vo.includes(t)) throw new TypeError("Plain JSON object types are reserved as type names");
                            var i = e[t],
                                a = i && "function" != typeof i && !Array.isArray(i) && i.testPlainObjects ? n.plainObjectReplacers : n.nonplainObjectReplacers,
                                s = a.filter((function(e) {
                                    return e.type === t
                                }));
                            if (s.length && (a.splice(a.indexOf(s[0]), 1), delete n.revivers[t], delete n.types[t]), "function" == typeof i) {
                                var c = i;
                                i = {
                                    test: function(e) {
                                        return e && e.constructor === c
                                    },
                                    replace: function(e) {
                                        return uo({}, e)
                                    },
                                    revive: function(e) {
                                        return Object.assign(Object.create(c.prototype), e)
                                    }
                                }
                            } else if (Lo(i)) {
                                var d = po(i, 3);
                                i = {
                                    test: d[0],
                                    replace: d[1],
                                    revive: d[2]
                                }
                            }
                            if (null !== (r = i) && void 0 !== r && r.test) {
                                var l = {
                                    type: t,
                                    test: i.test.bind(i)
                                };
                                i.replace && (l.replace = i.replace.bind(i)), i.replaceAsync && (l.replaceAsync = i.replaceAsync.bind(i));
                                var u = "number" == typeof o.fallback ? o.fallback : o.fallback ? 0 : Number.POSITIVE_INFINITY;
                                if (i.testPlainObjects ? n.plainObjectReplacers.splice(u, 0, l) : n.nonplainObjectReplacers.splice(u, 0, l), i.revive || i.reviveAsync) {
                                    var p = {};
                                    i.revive && (p.revive = i.revive.bind(i)), i.reviveAsync && (p.reviveAsync = i.reviveAsync.bind(i)), n.revivers[t] = [p, {
                                        plain: i.testPlainObjects
                                    }]
                                }
                                n.types[t] = i
                            }
                        }))
                    };
                return [].concat(e).forEach((function(e) {
                    r(e)
                })), this
            }
        }]),
        jo = so((function e() {
            ao(this, e)
        }));
    jo.__typeson__type__ = "TypesonUndefined";
    for (var Vo = ["null", "boolean", "number", "string", "array", "object"], Uo = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", Go = new Uint8Array(256), Fo = 0; Fo < 64; Fo++) Go[Uo.codePointAt(Fo)] = Fo;
    var Ko = function(e, t, n) {
            null == n && (n = e.byteLength);
            for (var o = new Uint8Array(e, 0, n), r = o.length, i = "", a = 0; a < r; a += 3) i += Uo[o[a] >> 2], i += Uo[(3 & o[a]) << 4 | o[a + 1] >> 4], i += Uo[(15 & o[a + 1]) << 2 | o[a + 2] >> 6], i += Uo[63 & o[a + 2]];
            return r % 3 == 2 ? i = i.slice(0, -1) + "=" : r % 3 == 1 && (i = i.slice(0, -2) + "=="), i
        },
        zo = function(e, t) {
            var n = e.length;
            if (n % 4) throw new Error("Bad base64 length: not divisible by four");
            var o, r, i, a, s = .75 * e.length,
                c = 0;
            "=" === e[e.length - 1] && (s--, "=" === e[e.length - 2] && s--);
            for (var d = new ArrayBuffer(s, t), l = new Uint8Array(d), u = 0; u < n; u += 4) o = Go[e.codePointAt(u)], r = Go[e.codePointAt(u + 1)], i = Go[e.codePointAt(u + 2)], a = Go[e.codePointAt(u + 3)], l[c++] = o << 2 | r >> 4, l[c++] = (15 & r) << 4 | i >> 2, l[c++] = (3 & i) << 6 | 63 & a;
            return d
        };
    const Ho = {
            arraybuffer: {
                test: e => "ArrayBuffer" === bo(e),
                replace(e, t) {
                    t.buffers || (t.buffers = []);
                    const n = t.buffers.indexOf(e);
                    return -1 !== n ? {
                        index: n
                    } : (t.buffers.push(e), {
                        s: Ko(e),
                        maxByteLength: e.maxByteLength,
                        resizable: e.resizable
                    })
                },
                revive(e, t) {
                    if (t.buffers || (t.buffers = []), Object.hasOwn(e, "index")) return t.buffers[e.index];
                    const n = zo(e.s, e.resizable ? {
                        maxByteLength: e.maxByteLength
                    } : void 0);
                    return t.buffers.push(n), n
                }
            }
        },
        qo = {
            bigintObject: {
                test: e => "object" == typeof e && ko(e, BigInt),
                replace: String,
                revive: e => new Object(BigInt(e))
            }
        },
        Wo = {
            bigint: {
                test: e => "bigint" == typeof e,
                replace: String,
                revive: e => BigInt(e)
            }
        };

    function Yo(e) {
        return new Uint8Array(e).reduce(((e, t) => e + String.fromCodePoint(t)), "")
    }

    function Jo(e) {
        const t = new Uint8Array(e.length);
        for (let n = 0; n < e.length; n++) t[n] = e.charCodeAt(n);
        return t.buffer
    }
    const $o = {
        blob: {
            test: e => "Blob" === bo(e),
            replace(e) {
                const t = new XMLHttpRequest;
                if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad Blob access: " + t.status);
                return {
                    type: e.type,
                    stringContents: t.responseText
                }
            },
            revive(e) {
                const {
                    type: t,
                    stringContents: n
                } = e;
                return new Blob([Jo(n)], {
                    type: t
                })
            },
            replaceAsync: e => new ho(((t, n) => {
                const o = new FileReader;
                o.addEventListener("load", (() => {
                    t({
                        type: e.type,
                        stringContents: Yo(o.result)
                    })
                })), o.addEventListener("error", (() => {
                    n(o.error)
                })), o.readAsArrayBuffer(e)
            }))
        }
    };
    const Qo = {
            cryptokey: {
                test: e => "CryptoKey" === bo(e) && e.extractable,
                replaceAsync: e => new ho((async (t, n) => {
                    let o;
                    try {
                        o = await crypto.subtle.exportKey("jwk", e)
                    } catch (t) {
                        return void n(t)
                    }
                    t({
                        jwk: o,
                        algorithm: e.algorithm,
                        usages: e.usages
                    })
                })),
                revive(e) {
                    const {
                        jwk: t,
                        algorithm: n,
                        usages: o
                    } = e;
                    return crypto.subtle.importKey("jwk", t, n, !0, o)
                }
            }
        },
        Zo = {
            dataview: {
                test: e => "DataView" === bo(e),
                replace({
                    buffer: e,
                    byteOffset: t,
                    byteLength: n
                }, o) {
                    o.buffers || (o.buffers = []);
                    const r = o.buffers.indexOf(e);
                    return -1 !== r ? {
                        index: r,
                        byteOffset: t,
                        byteLength: n
                    } : (o.buffers.push(e), {
                        encoded: Ko(e),
                        maxByteLength: e.maxByteLength,
                        resizable: e.resizable,
                        byteOffset: t,
                        byteLength: n
                    })
                },
                revive(e, t) {
                    t.buffers || (t.buffers = []);
                    const {
                        byteOffset: n,
                        byteLength: o,
                        encoded: r,
                        index: i,
                        maxByteLength: a,
                        resizable: s
                    } = e;
                    let c;
                    return "index" in e ? c = t.buffers[i] : (c = zo(r, s ? {
                        maxByteLength: a
                    } : a), t.buffers.push(c)), new DataView(c, n, o)
                }
            }
        },
        Xo = {
            date: {
                test: e => "Date" === bo(e),
                replace(e) {
                    const t = e.getTime();
                    return Number.isNaN(t) ? "NaN" : t
                },
                revive: e => "NaN" === e ? new Date(Number.NaN) : new Date(e)
            }
        },
        er = {
            domexception: {
                test: e => "DOMException" === bo(e),
                replace: e => ({
                    name: e.name,
                    message: e.message
                }),
                revive: ({
                    message: e,
                    name: t
                }) => new DOMException(e, t)
            }
        },
        tr = {};

    function nr(e) {
        tr[e.name.toLowerCase()] = {
            test: t => bo(t) === e.name,
            replace: e => e.is2D ? {
                a: e.a,
                b: e.b,
                c: e.c,
                d: e.d,
                e: e.e,
                f: e.f
            } : {
                m11: e.m11,
                m12: e.m12,
                m13: e.m13,
                m14: e.m14,
                m21: e.m21,
                m22: e.m22,
                m23: e.m23,
                m24: e.m24,
                m31: e.m31,
                m32: e.m32,
                m33: e.m33,
                m34: e.m34,
                m41: e.m41,
                m42: e.m42,
                m43: e.m43,
                m44: e.m44
            },
            revive: t => Object.hasOwn(t, "a") ? new e([t.a, t.b, t.c, t.d, t.e, t.f]) : new e([t.m11, t.m12, t.m13, t.m14, t.m21, t.m22, t.m23, t.m24, t.m31, t.m32, t.m33, t.m34, t.m41, t.m42, t.m43, t.m44])
        }
    }
    "undefined" != typeof DOMMatrix && nr(DOMMatrix), "undefined" != typeof DOMMatrixReadOnly && nr(DOMMatrixReadOnly);
    const or = {};

    function rr(e) {
        or[e.name.toLowerCase()] = {
            test: t => bo(t) === e.name,
            replace: e => ({
                x: e.x,
                y: e.y,
                z: e.z,
                w: e.w
            }),
            revive: ({
                x: t,
                y: n,
                z: o,
                w: r
            }) => new e(t, n, o, r)
        }
    }
    "undefined" != typeof DOMPoint && rr(DOMPoint), "undefined" != typeof DOMPointReadOnly && rr(DOMPointReadOnly);
    const ir = {
            domquad: {
                test: e => "DOMQuad" === bo(e),
                replace: e => ({
                    p1: e.p1,
                    p2: e.p2,
                    p3: e.p3,
                    p4: e.p4
                }),
                revive: ({
                    p1: e,
                    p2: t,
                    p3: n,
                    p4: o
                }) => new DOMQuad(e, t, n, o)
            }
        },
        ar = {};

    function sr(e) {
        ar[e.name.toLowerCase()] = {
            test: t => bo(t) === e.name,
            replace: e => ({
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            }),
            revive: ({
                x: t,
                y: n,
                width: o,
                height: r
            }) => new e(t, n, o, r)
        }
    }
    "undefined" != typeof DOMRect && sr(DOMRect), "undefined" != typeof DOMRectReadOnly && sr(DOMRectReadOnly);
    const cr = {
            error: {
                test: e => "Error" === bo(e),
                replace: ({
                    name: e,
                    message: t,
                    cause: n,
                    stack: o,
                    fileName: r,
                    lineNumber: i,
                    columnNumber: a
                }) => ({
                    name: e,
                    message: t,
                    cause: n,
                    stack: o,
                    fileName: r,
                    lineNumber: i,
                    columnNumber: a
                }),
                revive(e) {
                    const t = new Error(e.message);
                    return t.name = e.name, t.cause = e.cause, t.stack = e.stack, t.fileName = e.fileName, t.lineNumber = e.lineNumber, t.columnNumber = e.columnNumber, t
                }
            }
        },
        dr = {};

    function lr(e) {
        dr[e.name.toLowerCase()] = {
            test: t => ko(t, e),
            replace: ({
                name: e,
                message: t,
                cause: n,
                stack: o,
                fileName: r,
                lineNumber: i,
                columnNumber: a,
                errors: s
            }) => ({
                name: e,
                message: t,
                cause: n,
                stack: o,
                fileName: r,
                lineNumber: i,
                columnNumber: a,
                errors: s
            }),
            revive(t) {
                const n = "undefined" != typeof AggregateError && e === AggregateError ? new e(t.errors, t.message) : new e(t.message);
                return n.name = t.name, n.cause = t.cause, n.stack = t.stack, n.fileName = t.fileName, n.lineNumber = t.lineNumber, n.columnNumber = t.columnNumber, n
            }
        }
    }[TypeError, RangeError, SyntaxError, ReferenceError, EvalError, URIError].forEach((e => lr(e))), "undefined" != typeof AggregateError && lr(AggregateError), "function" == typeof InternalError && lr(InternalError);
    const ur = {
            file: {
                test: e => "File" === bo(e),
                replace(e) {
                    const t = new XMLHttpRequest;
                    if (t.overrideMimeType("text/plain; charset=x-user-defined"), t.open("GET", URL.createObjectURL(e), !1), t.send(), 200 !== t.status && 0 !== t.status) throw new Error("Bad File access: " + t.status);
                    return {
                        type: e.type,
                        stringContents: t.responseText,
                        name: e.name,
                        lastModified: e.lastModified
                    }
                },
                revive: ({
                    name: e,
                    type: t,
                    stringContents: n,
                    lastModified: o
                }) => new File([Jo(n)], e, {
                    type: t,
                    lastModified: o
                }),
                replaceAsync: e => new ho((function(t, n) {
                    const o = new FileReader;
                    o.addEventListener("load", (function() {
                        t({
                            type: e.type,
                            stringContents: Yo(o.result),
                            name: e.name,
                            lastModified: e.lastModified
                        })
                    })), o.addEventListener("error", (function() {
                        n(o.error)
                    })), o.readAsArrayBuffer(e)
                }))
            }
        },
        pr = {
            file: ur.file,
            filelist: {
                test: e => "FileList" === bo(e),
                replace(e) {
                    const t = [];
                    for (let n = 0; n < e.length; n++) t[n] = e.item(n);
                    return t
                },
                revive(e) {
                    class t {
                        constructor() {
                            this._files = arguments[0], this.length = this._files.length
                        }
                        item(e) {
                            return this._files[e]
                        }
                        get[Symbol.toStringTag]() {
                            return "FileList"
                        }
                    }
                    return new t(e)
                }
            }
        },
        gr = {
            imagebitmap: {
                test: e => "ImageBitmap" === bo(e) || e && e.dataset && "ImageBitmap" === e.dataset.toStringTag,
                replace(e) {
                    const t = document.createElement("canvas");
                    return t.getContext("2d").drawImage(e, 0, 0), {
                        width: e.width,
                        height: e.height,
                        dataURL: t.toDataURL()
                    }
                },
                revive(e) {
                    const t = "undefined" == typeof OffscreenCanvas ? document.createElement("canvas") : new OffscreenCanvas(e.width, e.height),
                        n = t.getContext("2d"),
                        o = document.createElement("img");
                    return o.addEventListener("load", (function() {
                        n.drawImage(o, 0, 0)
                    })), o.src = e.dataURL, "undefined" == typeof OffscreenCanvas ? t : t.transferToImageBitmap()
                },
                reviveAsync(e) {
                    const t = document.createElement("canvas"),
                        n = t.getContext("2d"),
                        o = document.createElement("img");
                    return o.addEventListener("load", (function() {
                        n.drawImage(o, 0, 0)
                    })), o.src = e.dataURL, new ho((async (e, n) => {
                        try {
                            e(await createImageBitmap(t))
                        } catch (e) {
                            n(e)
                        }
                    }))
                }
            }
        },
        fr = {
            imagedata: {
                test: e => "ImageData" === bo(e),
                replace: e => ({
                    array: [...e.data],
                    width: e.width,
                    height: e.height
                }),
                revive: e => new ImageData(new Uint8ClampedArray(e.array), e.width, e.height)
            }
        },
        mr = {
            infinity: {
                test: e => e === Number.POSITIVE_INFINITY,
                replace: () => "Infinity",
                revive: () => Number.POSITIVE_INFINITY
            }
        },
        hr = {
            test: e => ko(e, Intl.Collator),
            replace: e => e.resolvedOptions(),
            revive: e => new Intl.Collator(e.locale, e)
        },
        yr = {
            IntlCollator: hr,
            IntlDateTimeFormat: {
                test: e => ko(e, Intl.DateTimeFormat),
                replace: e => e.resolvedOptions(),
                revive: e => new Intl.DateTimeFormat(e.locale, e)
            },
            IntlNumberFormat: {
                test: e => ko(e, Intl.NumberFormat),
                replace: e => e.resolvedOptions(),
                revive: e => new Intl.NumberFormat(e.locale, e)
            }
        },
        wr = {
            map: {
                test: e => "Map" === bo(e),
                replace: e => [...e.entries()],
                revive: e => new Map(e)
            }
        },
        vr = {
            nan: {
                test: e => Number.isNaN(e),
                replace: () => "NaN",
                revive: () => Number.NaN
            }
        },
        br = {
            negativeInfinity: {
                test: e => e === Number.NEGATIVE_INFINITY,
                replace: () => "-Infinity",
                revive: () => Number.NEGATIVE_INFINITY
            }
        },
        kr = {
            negativeZero: {
                test: e => Object.is(e, -0),
                replace: () => 0,
                revive: () => -0
            }
        },
        Ar = {
            StringObject: {
                test: e => "String" === bo(e) && "object" == typeof e,
                replace: String,
                revive: e => new String(e)
            },
            BooleanObject: {
                test: e => "Boolean" === bo(e) && "object" == typeof e,
                replace: e => e.valueOf(),
                revive: e => new Boolean(e)
            },
            NumberObject: {
                test: e => "Number" === bo(e) && "object" == typeof e,
                replace: Number,
                revive: e => new Number(e)
            }
        },
        Sr = {
            regexp: {
                test: e => "RegExp" === bo(e),
                replace: e => ({
                    source: e.source,
                    flags: (e.global ? "g" : "") + (e.ignoreCase ? "i" : "") + (e.multiline ? "m" : "") + (e.sticky ? "y" : "") + (e.unicode ? "u" : "") + (e.unicodeSets ? "v" : "") + (e.hasIndices ? "d" : "") + (e.dotAll ? "s" : "")
                }),
                revive: ({
                    source: e,
                    flags: t
                }) => new RegExp(e, t)
            }
        },
        Er = {
            set: {
                test: e => "Set" === bo(e),
                replace: e => [...e.values()],
                revive: e => new Set(e)
            }
        },
        Ir = {};
    "function" == typeof Int8Array && [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ..."function" == typeof BigInt64Array ? [BigInt64Array, BigUint64Array] : []].forEach((e => function(e) {
        const t = e.name;
        Ir[t.toLowerCase()] = {
            test: e => bo(e) === t,
            replace: e => (0 === e.byteOffset && e.byteLength === e.buffer.byteLength ? e : e.slice(0)).buffer,
            revive: t => "ArrayBuffer" === bo(t) ? new e(t) : t
        }
    }(e)));
    const _r = {};
    "function" == typeof Int8Array && [Int8Array, Uint8Array, Uint8ClampedArray, Int16Array, Uint16Array, Int32Array, Uint32Array, Float32Array, Float64Array, ..."function" == typeof BigInt64Array ? [BigInt64Array, BigUint64Array] : []].forEach((e => function(e) {
        const t = e.name;
        _r[t.toLowerCase()] = {
            test: e => bo(e) === t,
            replace({
                buffer: e,
                byteOffset: t,
                length: n
            }, o) {
                o.buffers || (o.buffers = []);
                const r = o.buffers.indexOf(e);
                return -1 !== r ? {
                    index: r,
                    byteOffset: t,
                    length: n
                } : (o.buffers.push(e), {
                    maxByteLength: e.maxByteLength,
                    resizable: e.resizable,
                    encoded: Ko(e),
                    byteOffset: t,
                    length: n
                })
            },
            revive(t, n) {
                n.buffers || (n.buffers = []);
                const {
                    byteOffset: o,
                    length: r,
                    encoded: i,
                    index: a,
                    maxByteLength: s,
                    resizable: c
                } = t;
                let d;
                return "index" in t ? d = n.buffers[a] : (d = zo(i, c ? {
                    maxByteLength: s
                } : void 0), n.buffers.push(d)), new e(d, o, r)
            }
        }
    }(e)));
    const Pr = {
            undef: {
                test: (e, t) => void 0 === e && (t.ownKeys || !("ownKeys" in t)),
                replace: () => 0,
                revive: () => new jo
            }
        },
        Tr = {
            userObject: {
                test: e => So(e),
                replace: e => ({ ...e
                }),
                revive: e => e
            }
        },
        xr = [{
            arrayNonindexKeys: {
                testPlainObjects: !0,
                test: (e, t) => !!Array.isArray(e) && (Object.keys(e).some((e => String(Number.parseInt(e)) !== e)) && (t.iterateIn = "object", t.addLength = !0), !0),
                replace: (e, t) => (t.iterateUnsetNumeric = !0, e),
                revive(e) {
                    if (Array.isArray(e)) return e;
                    const t = [];
                    return Object.entries(e).forEach((([e, n]) => {
                        t[e] = n
                    })), t
                }
            }
        }, {
            sparseUndefined: {
                test: (e, t) => void 0 === e && !1 === t.ownKeys,
                replace: () => 0,
                revive() {}
            }
        }],
        Or = [vr, mr, br, kr],
        Cr = ([Pr, xr, Ar, Or, Xo, cr, dr, Sr].concat("function" == typeof Map ? wr : [], "function" == typeof Set ? Er : [], "function" == typeof ArrayBuffer ? Ho : [], "function" == typeof Uint8Array ? _r : [], "function" == typeof DataView ? Zo : [], "undefined" != typeof Intl ? yr : [], "undefined" != typeof BigInt ? [Wo, qo] : []), [Tr, Pr, xr, Ar, Or, Xo, Sr, fr, gr, ur, pr, $o, cr, dr].concat("function" == typeof Map ? wr : [], "function" == typeof Set ? Er : [], "function" == typeof ArrayBuffer ? Ho : [], "function" == typeof Uint8Array ? _r : [], "function" == typeof DataView ? Zo : [], "undefined" != typeof crypto ? Qo : [], "undefined" != typeof BigInt ? [Wo, qo] : [], "undefined" != typeof DOMException ? er : [], "undefined" != typeof DOMRect ? ar : [], "undefined" != typeof DOMPoint ? or : [], "undefined" != typeof DOMQuad ? ir : [], "undefined" != typeof DOMMatrix ? tr : []));
    Cr.concat({
        checkDataCloneException: {
            test(e) {
                const t = {}.toString.call(e).slice(8, -1);
                if (["symbol", "function"].includes(typeof e) || ["Arguments", "Module", "Promise", "WeakMap", "WeakSet", "Event", "MessageChannel"].includes(t) || e && "object" == typeof e && "number" == typeof e.nodeType && "function" == typeof e.insertBefore) throw new DOMException("The object cannot be cloned.", "DataCloneError");
                return !1
            }
        }
    });

    function Dr(e) {
        if (!document.body || !document.body.appendChild) return void document.addEventListener("DOMContentLoaded", (() => {
            Dr(e)
        }));
        const t = document.createElement("iframe");
        t.style.display = "none", document.body.appendChild(t), t.contentWindow && (t.contentWindow.document.open(), t.contentWindow.document.write(`<script>${e}<\/script>`), t.contentWindow.document.close())
    }

    function Lr(e, t, n, o, r, i) {
        return jr(function(e, t) {
            return e << t | e >>> 32 - t
        }(jr(jr(t, e), jr(o, i)), r), n)
    }

    function Mr(e, t, n, o, r, i, a) {
        return Lr(t & n | ~t & o, e, t, r, i, a)
    }

    function Nr(e, t, n, o, r, i, a) {
        return Lr(t & o | n & ~o, e, t, r, i, a)
    }

    function Br(e, t, n, o, r, i, a) {
        return Lr(t ^ n ^ o, e, t, r, i, a)
    }

    function Rr(e, t, n, o, r, i, a) {
        return Lr(n ^ (t | ~o), e, t, r, i, a)
    }

    function jr(e, t) {
        const n = (65535 & e) + (65535 & t);
        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
    }
    let Vr, Ur = "";
    try {
        const e = window.location.href.split("?")[0].replace(/\/[^/]*$/, "");
        Ur = function(e) {
            const t = function(e) {
                for (var t, n = "0123456789ABCDEF", o = "", r = 0; r < e.length; r++) t = e.charCodeAt(r), o += n.charAt(t >>> 4 & 15) + n.charAt(15 & t);
                return o
            }(function(e) {
                for (var t = "", n = 0; n < 32 * e.length; n += 8) t += String.fromCharCode(e[n >> 5] >>> n % 32 & 255);
                return t
            }(function(e, t) {
                e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                for (var n = 1732584193, o = -271733879, r = -1732584194, i = 271733878, a = 0; a < e.length; a += 16) {
                    const t = n,
                        s = o,
                        c = r,
                        d = i;
                    o = Rr(o = Rr(o = Rr(o = Rr(o = Br(o = Br(o = Br(o = Br(o = Nr(o = Nr(o = Nr(o = Nr(o = Mr(o = Mr(o = Mr(o = Mr(o, r = Mr(r, i = Mr(i, n = Mr(n, o, r, i, e[a + 0], 7, -680876936), o, r, e[a + 1], 12, -389564586), n, o, e[a + 2], 17, 606105819), i, n, e[a + 3], 22, -1044525330), r = Mr(r, i = Mr(i, n = Mr(n, o, r, i, e[a + 4], 7, -176418897), o, r, e[a + 5], 12, 1200080426), n, o, e[a + 6], 17, -1473231341), i, n, e[a + 7], 22, -45705983), r = Mr(r, i = Mr(i, n = Mr(n, o, r, i, e[a + 8], 7, 1770035416), o, r, e[a + 9], 12, -1958414417), n, o, e[a + 10], 17, -42063), i, n, e[a + 11], 22, -1990404162), r = Mr(r, i = Mr(i, n = Mr(n, o, r, i, e[a + 12], 7, 1804603682), o, r, e[a + 13], 12, -40341101), n, o, e[a + 14], 17, -1502002290), i, n, e[a + 15], 22, 1236535329), r = Nr(r, i = Nr(i, n = Nr(n, o, r, i, e[a + 1], 5, -165796510), o, r, e[a + 6], 9, -1069501632), n, o, e[a + 11], 14, 643717713), i, n, e[a + 0], 20, -373897302), r = Nr(r, i = Nr(i, n = Nr(n, o, r, i, e[a + 5], 5, -701558691), o, r, e[a + 10], 9, 38016083), n, o, e[a + 15], 14, -660478335), i, n, e[a + 4], 20, -405537848), r = Nr(r, i = Nr(i, n = Nr(n, o, r, i, e[a + 9], 5, 568446438), o, r, e[a + 14], 9, -1019803690), n, o, e[a + 3], 14, -187363961), i, n, e[a + 8], 20, 1163531501), r = Nr(r, i = Nr(i, n = Nr(n, o, r, i, e[a + 13], 5, -1444681467), o, r, e[a + 2], 9, -51403784), n, o, e[a + 7], 14, 1735328473), i, n, e[a + 12], 20, -1926607734), r = Br(r, i = Br(i, n = Br(n, o, r, i, e[a + 5], 4, -378558), o, r, e[a + 8], 11, -2022574463), n, o, e[a + 11], 16, 1839030562), i, n, e[a + 14], 23, -35309556), r = Br(r, i = Br(i, n = Br(n, o, r, i, e[a + 1], 4, -1530992060), o, r, e[a + 4], 11, 1272893353), n, o, e[a + 7], 16, -155497632), i, n, e[a + 10], 23, -1094730640), r = Br(r, i = Br(i, n = Br(n, o, r, i, e[a + 13], 4, 681279174), o, r, e[a + 0], 11, -358537222), n, o, e[a + 3], 16, -722521979), i, n, e[a + 6], 23, 76029189), r = Br(r, i = Br(i, n = Br(n, o, r, i, e[a + 9], 4, -640364487), o, r, e[a + 12], 11, -421815835), n, o, e[a + 15], 16, 530742520), i, n, e[a + 2], 23, -995338651), r = Rr(r, i = Rr(i, n = Rr(n, o, r, i, e[a + 0], 6, -198630844), o, r, e[a + 7], 10, 1126891415), n, o, e[a + 14], 15, -1416354905), i, n, e[a + 5], 21, -57434055), r = Rr(r, i = Rr(i, n = Rr(n, o, r, i, e[a + 12], 6, 1700485571), o, r, e[a + 3], 10, -1894986606), n, o, e[a + 10], 15, -1051523), i, n, e[a + 1], 21, -2054922799), r = Rr(r, i = Rr(i, n = Rr(n, o, r, i, e[a + 8], 6, 1873313359), o, r, e[a + 15], 10, -30611744), n, o, e[a + 6], 15, -1560198380), i, n, e[a + 13], 21, 1309151649), r = Rr(r, i = Rr(i, n = Rr(n, o, r, i, e[a + 4], 6, -145523070), o, r, e[a + 11], 10, -1120210379), n, o, e[a + 2], 15, 718787259), i, n, e[a + 9], 21, -343485551), n = jr(n, t), o = jr(o, s), r = jr(r, c), i = jr(i, d)
                }
                return Array(n, o, r, i)
            }(function(e) {
                for (var t = Array(e.length >> 2), n = 0; n < t.length; n++) t[n] = 0;
                for (n = 0; n < 8 * e.length; n += 8) t[n >> 5] |= (255 & e.charCodeAt(n / 8)) << n % 32;
                return t
            }(e), 8 * e.length)));
            return t.toLowerCase()
        }(e), Vr = localStorage.getItem("savegame_idbfs_hash")
    } catch {}

    function Gr(e) {
        if (!Vr) return e;
        try {
            return e.replace(Ur, Vr)
        } catch {
            return e
        }
    }
    const Fr = 1e4,
        Kr = 2e4,
        zr = "poki_gs_state_token",
        Hr = "poki_playtime",
        qr = [zr, Hr],
        Wr = [];
    let Yr = performance.now();
    async function Jr() {
        if (!("databases" in indexedDB)) return console.warn("%cPOKI_SAVEGAME:%c indexedDB.databases() is not supported in this browser.", "font-weight: bold", ""), [];
        const e = await indexedDB.databases();
        0 === e.length && (console.info("%cPOKI_SAVEGAME:%c No databases found, using IDBDatabaseInfos", "font-weight: bold", "", Wr.map((e => e.name))), e.push(...Wr));
        const t = [];
        e.forEach((async e => {
            var n;
            (n = e.name) && "UnityCache" !== n && t.push(function(e, t) {
                return new Promise(((n, o) => {
                    if (!e) return void o(new Error("Cannot export database without a name"));
                    const r = indexedDB.open(e, t);
                    r.onsuccess = t => {
                        const o = t.target.result,
                            r = Array.from(o.objectStoreNames),
                            i = {
                                name: e,
                                version: o.version,
                                objectStores: []
                            };
                        let a = r.length;
                        if (0 === a) return o.close(), void n(i);
                        r.forEach((t => {
                            const r = o.transaction(t, "readonly").objectStore(t),
                                s = Array.from(r.indexNames),
                                c = [],
                                d = {
                                    name: t,
                                    keyPath: r.keyPath,
                                    autoIncrement: r.autoIncrement,
                                    indexes: [],
                                    data: []
                                };
                            s.forEach((e => {
                                const t = r.index(e),
                                    n = {
                                        name: e,
                                        keyPath: t.keyPath,
                                        unique: t.unique,
                                        multiEntry: t.multiEntry
                                    };
                                d.indexes.push(n)
                            }));
                            const l = r.openCursor();
                            l.onerror = () => {
                                console.warn(`%cPOKI_SAVEGAME:%c error fetching data from object store ${t}`, "font-weight: bold", ""), a--, 0 === a && (o.close(), n(i))
                            }, l.onsuccess = r => {
                                const s = r.target;
                                if (!s) return;
                                const l = s.result;
                                if (null === l) return d.data = c, i.objectStores.push(d), a--, void(0 === a && (o.close(), n(i)));
                                ! function(e, t, n) {
                                    return "string" == typeof n && !("/data" !== e || "FILE_DATA" !== t || !n.endsWith(".zip") && !n.includes("liveupdate.arc"))
                                }(e, t, l.primaryKey) ? c.push({
                                    k: Gr(l.primaryKey),
                                    v: l.value
                                }): console.info(`%cPOKI_SAVEGAME:%c Skipping row ${l.primaryKey}`, "font-weight: bold", ""), l.continue()
                            }
                        }))
                    }, r.onerror = e => {
                        console.warn("%cPOKI_SAVEGAME:%c error opening database", "font-weight: bold", "", e.target.error), o(e.target.error)
                    }
                }))
            }(e.name || "", e.version))
        }));
        const n = await Promise.allSettled(t);
        return n ? .map((e => "fulfilled" === e.status ? e.value : null))
    }

    function $r() {
        console.info("%cPOKI_SAVEGAME:%c setupCloudSaveExports", "font-weight: bold", "");
        const e = (new Ro).register([Cr]);

        function t(e, t) {
            const n = {
                name: e,
                version: t
            };
            Wr.find((n => n.name === e && n.version === t)) || Wr.push(n)
        }
        Dr(`(${function(){window.addEventListener("storage",(e=>{e.key&&["poki_gs_state_token","poki_playtime","savegame_idbfs_hash"].includes(e.key)||window?.parent?.postMessage({type:"LocalStorageChanged"},"*")}))}.toString()})();`);
        const n = function(e, t = 300, n = 1e3) {
            let o, r;
            return function(...i) {
                const a = this,
                    s = () => {
                        clearTimeout(o), clearTimeout(r), o = void 0, r = void 0, e.apply(a, i)
                    };
                clearTimeout(o), o = setTimeout(s, t), r || (r = setTimeout(s, n))
            }
        }((() => {
            console.info("%cPOKI_SAVEGAME:%c trigger mutate", "font-weight: bold", ""), (() => {
                const t = performance.now(),
                    n = Math.ceil((t - Yr) / 1e3);
                let o = 0;
                try {
                    o = Number.parseInt(localStorage.getItem(Hr) || "0", 10)
                } catch (e) {
                    q("error getting current playtime", e)
                }
                const r = o + n;
                try {
                    localStorage.setItem(Hr, r.toString())
                } catch (e) {
                    q("error setting current playtime", e)
                }
                Yr = t;
                try {
                    const t = {};
                    for (let e = 0; e < localStorage.length; e++) {
                        const n = localStorage.key(e);
                        if (n && !qr.includes(n)) {
                            const e = localStorage.getItem(n);
                            null !== e && (t[n] = e)
                        }
                    }
                    Jr().then((o => {
                        const i = {
                            ls: JSON.stringify(t),
                            idb: e.stringify(o),
                            playtimeInterval: n,
                            metadata: {
                                playtime: r
                            },
                            version: 1
                        };
                        window ? .top ? .postMessage({
                            type: "mutateSaveGame",
                            content: i
                        }, "*")
                    }))
                } catch (e) {
                    console.warn("%cPOKI_SAVEGAME:%c savegame error", "font-weight: bold", "", e)
                }
            })()
        }), Fr, Kr);
        window.addEventListener("message", (async e => {
            if ("LocalStorageChanged" === e ? .data ? .type) return console.info("%cPOKI_SAVEGAME:%c localStorage Pulse", "font-weight: bold", ""), void n();
            "pokiSetEtag" === e ? .data ? .type && (e => {
                const {
                    etag: t
                } = e.data;
                try {
                    localStorage.setItem(zr, t)
                } catch (e) {
                    q("error setting etag", e)
                }
            })(e)
        }));
        const o = e => {
                console.info(`%cPOKI_SAVEGAME:%c IDB Pulse - ${e}`, "font-weight: bold", ""), n()
            },
            r = window.IDBObjectStore.prototype.put;
        window.IDBObjectStore.prototype.put = function(...e) {
            t(this.transaction.db.name, this.transaction.db.version);
            const n = r.apply(this, e);
            return o("put"), n
        };
        const i = window.IDBObjectStore.prototype.add;
        window.IDBObjectStore.prototype.add = function(...e) {
            t(this.transaction.db.name, this.transaction.db.version);
            const n = i.apply(this, e);
            return o("add"), n
        };
        const a = window.IDBObjectStore.prototype.delete;
        window.IDBObjectStore.prototype.delete = function(...e) {
            t(this.transaction.db.name, this.transaction.db.version);
            const n = a.apply(this, e);
            return o("delete"), n
        };
        const s = window.IDBObjectStore.prototype.clear;
        window.IDBObjectStore.prototype.clear = function(...e) {
            t(this.transaction.db.name, this.transaction.db.version);
            const n = s.apply(this, e);
            return o("clear"), n
        };
        const c = indexedDB.open.bind(indexedDB);
        indexedDB.open = function(e, n) {
            return e && (console.info(`%cPOKI_SAVEGAME:%c IDB open ${e} DB. Added to DB list`, "font-weight: bold", ""), t(e, "number" == typeof n ? n : 1)), c(e, n)
        }
    }
    const Qr = "none",
        Zr = "requesting";
    class Xr {
        runningAsInGameHoistingSDK = !0;#
        x = {};#
        O = Ln.adTiming;#
        C = new MutationObserver(this.mutationObserved.bind(this));#
        D = Qr;#
        L;#
        M = !1;
        init = e => {
            if (this.#M) return;
            this.#M = !0;
            const {
                onReady: t = null
            } = e;
            V.isPokiIframe && setTimeout(Se.trackSavegames, 1e4), V.cloudSaveGames && $r(), V.kioskMode && document.addEventListener("keydown", (e => {
                "Escape" === e.key && this.postSDKMessage("keydownEscape")
            }));
            const n = () => {
                let e, n = 1;
                this.#x.playgroundInit = () => {
                    clearTimeout(e), t ? .()
                };
                const o = () => {
                    this.postSDKMessage("adTiming", {
                        adTiming: this.#O,
                        specialConditions: this.#L
                    }), n++, e = setTimeout(o, 100 * n)
                };
                e = setTimeout(o, 100 * n)
            };
            if (V.forceAd) return this.#O = {
                preroll: !0,
                timeBetweenAds: 12e4,
                timePerTry: 7e3,
                startAdsAfter: 0
            }, void n();
            if (G.debug) return void n();
            Nn().then((e => {
                if (this.#O = e ? .adTiming || Ln.adTiming, this.#L = e ? .specialConditions || [], C() || D() ? this.#O = {
                        startAdsAfter: 3e5,
                        timeBetweenAds: 3e5
                    } : this.#O = {
                        startAdsAfter: 12e4,
                        timeBetweenAds: 18e4
                    }, n(), e) try {
                    ro(e)
                } catch (e) {
                    console.warn("%cPOKI:%c error in maybeStartPlaytest", "font-weight: bold", "", e)
                }
            })).catch((() => {
                n()
            }))
        };
        forcePreroll() {
            this.postSDKMessage("forcePreroll")
        }
        startStartAdsAfterTimer() {
            this.postSDKMessage("startStartAdsAfterTimer")
        }
        isAdBlocked = () => !1;
        muteAd() {
            this.postSDKMessage("muteAd")
        }
        setVolume(e) {
            this.postSDKMessage("setVolume", {
                volume: e || 1
            })
        }
        requestAd(t) {
            const {
                onStart: n,
                onFinish: o,
                position: r,
                customCriteria: i
            } = t, a = he();
            if (this.#D === Qr) this.#D = Zr, this.#x[a] = {
                position: r,
                onStart: () => {
                    if (n && "function" == typeof n) try {
                        n()
                    } catch (e) {
                        console.error("%cPOKI:%c error in onStart callback", "font-weight: bold", "", e)
                    }
                },
                onFinish: e => {
                    if (o && "function" == typeof o) try {
                        o({
                            rewardAllowed: e
                        })
                    } catch (e) {
                        console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                    }
                }
            }, this.postSDKMessage("requestVideoAd", {
                position: r,
                customCriteria: i,
                opportunityId: a
            });
            else if (o) try {
                r === e.ads.position.rewarded ? o({
                    rewardAllowed: !1
                }) : o()
            } catch (e) {
                console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
            }
        }
        displayAd(e) {
            if (V.kioskMode) return !1;
            const {
                container: t,
                size: n,
                opportunityId: o,
                onCanDestroy: r,
                onDisplayRendered: i
            } = e;
            if (!t) return console.error("%cPOKI:%c PokiSDK.displayAd() given container does not exist", "font-weight: bold", ""), !1;
            const a = t.getAttribute("data-poki-ad-container-id") || he();
            this.cleanAdContainer(a), t.setAttribute("data-poki-ad-container-id", a), t.setAttribute("data-poki-opportunity-id", o);
            const [s, c] = n.split("x").map((e => parseInt(e, 10))), d = document.createElement("div");
            d.style.width = `${s}px`, d.style.height = `${c}px`, d.style.overflow = "hidden", d.style.position = "relative", d.style.pointerEvents = "none", t.appendChild(d);
            const l = t.getBoundingClientRect(),
                u = {
                    x: l ? .x || 0,
                    y: l ? .y || 0,
                    w: s || 0,
                    h: c || 0
                };
            return this.#x[o] = {
                onCanDestroy: () => {
                    r && "function" == typeof r && r()
                },
                onDisplayRendered: e => {
                    i && "function" == typeof i && i(e)
                }
            }, this.#C.observe(t.parentElement || document.body, {
                childList: !0
            }), this.#C.observe(t, {
                attributes: !0,
                attributeFilter: ["style"]
            }), this.postSDKMessage("displayAd", {
                containerID: a,
                adUnitPath: Mn(n),
                size: e.size,
                opportunityId: o,
                duringGameplay: e.duringGameplay,
                location: u
            }), !0
        }
        destroyAd(e) {
            if (!e) return void console.error("%cPOKI:%c PokiSDK.destroyAd() given container does not exist", "font-weight: bold", "");
            const t = e.getAttribute("data-poki-opportunity-id"),
                n = e.getAttribute("data-poki-ad-container-id");
            n && (delete this.#x[t], this.cleanAdContainer(n), this.postSDKMessage("destroyAd", {
                containerID: n,
                opportunityId: t
            }))
        }
        mutationObserved(e) {
            e.forEach((e => {
                var t;
                "childList" === e ? .type && e.removedNodes ? .forEach ? .((e => {
                    e ? .getAttribute ? .("data-poki-ad-container-id") && this.destroyAd(e)
                })), "attributes" === e ? .type && e ? .target ? .getAttribute ? .("data-poki-ad-container-id") && (t = e.target, ("none" === t ? .style.display || parseInt(t.style.opacity, 10) < 1 || "hidden" === t.style.visibility) && this.destroyAd(e.target))
            }))
        }
        postSDKMessage = async (t, n = {}) => {
            U.sendMessage(e.message.sendCommand, {
                event: t,
                data: n
            }, window.top)
        };
        handleMessageReceived = t => {
            switch (t ? .data ? .type) {
                case "hoist_displayAd_onDisplayRendered":
                    {
                        const e = t ? .data ? .data;
                        if (e) {
                            const {
                                opportunityId: t,
                                isEmpty: n
                            } = e;
                            this.#x[t] ? .onDisplayRendered ? .(n)
                        }
                        break
                    }
                case "hoist_displayAd_onCanDestroy":
                    {
                        const e = t ? .data ? .data;
                        if (e) {
                            const {
                                opportunityId: t
                            } = e;
                            this.#x[t] ? .onCanDestroy ? .()
                        }
                        break
                    }
                case "hoist_videoAd_onStart":
                    {
                        const n = t ? .data ? .data;
                        if (n) {
                            const {
                                opportunityId: t
                            } = n;
                            if (this.#D !== Zr) return;
                            if (!this.#x[t]) return;
                            const {
                                onStart: o,
                                position: r
                            } = this.#x[t];
                            o && o(), z.dispatchEvent(e.playtest.startVideo, {
                                position: r
                            }), this.#D = "playing"
                        }
                        break
                    }
                case "hoist_videoAd_onFinish":
                    {
                        const n = t ? .data ? .data;
                        if (n) {
                            const {
                                opportunityId: t,
                                rewardAllowed: o
                            } = n;
                            if (!this.#x[t]) return;
                            const {
                                onFinish: r,
                                position: i
                            } = this.#x[t];
                            if (this.#D === Zr) {
                                if (r) try {
                                    i === e.ads.position.rewarded ? r(!!o) : r()
                                } catch (e) {
                                    console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                                }
                                return this.#D = Qr, void delete this.#x[t]
                            }
                            if (r) try {
                                r(o)
                            } catch (e) {
                                console.error("%cPOKI:%c error in onFinish callback", "font-weight: bold", "", e)
                            }
                            z.dispatchEvent(e.playtest.stopVideo), this.#D = Qr, delete this.#x[t]
                        }
                        break
                    }
                case "hoist_playgroundInit":
                    this.#x.playgroundInit ? .(), delete this.#x.playgroundInit;
                    break;
                case "hoist_displayAd_destroy":
                    {
                        const e = t ? .data ? .data;
                        if (e) {
                            const {
                                containerID: t
                            } = e;
                            this.cleanAdContainer(t)
                        }
                        break
                    }
                case "hoist_refocus_game":
                    {
                        const e = new Event("focus");window.dispatchEvent(e);
                        break
                    }
            }
        };
        cleanAdContainer = e => {
            const t = document.querySelector(`*[data-poki-ad-container-id="${e}"]`);
            if (t) {
                for (; t.lastChild;) t.removeChild(t.lastChild);
                t.removeAttribute("data-poki-opportunity-id"), t.removeAttribute("data-poki-ad-container-id")
            }
        };
        stopVideoAd() {}
        resizeVideoAd() {}
        setAdTimings(e) {}
        setSpecialConditions(e) {}
        setNrAds(e) {}
    }
    const ei = new class extends Dn {
        constructor() {
            super(new Xr, !0), window.addEventListener("message", this.__monetization.handleMessageReceived)
        }
    };
    for (const e in ei) e.startsWith("__") || (window.PokiSDK[e] = ei[e])
})();