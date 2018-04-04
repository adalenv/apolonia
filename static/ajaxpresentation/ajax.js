! function(e) {
    function t(i) {
        if (n[i]) return n[i].exports;
        var a = n[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
    }
    var n = {};
    return t.m = e, t.c = n, t.p = "/", t(0)
}(function(e) {
    for (var t in e)
        if (Object.prototype.hasOwnProperty.call(e, t)) switch (typeof e[t]) {
            case "function":
                break;
            case "object":
                e[t] = function(t) {
                    var n = t.slice(1),
                        i = e[t[0]];
                    return function(e, t, a) {
                        i.apply(this, [e, t, a].concat(n))
                    }
                }(e[t]);
                break;
            default:
                e[t] = e[e[t]]
        }
    return e
}([function(e, t, n) {
    "use strict";
    n(19), n(200), n(201), n(202), n(203), n(204), n(205), n(206), n(207), n(214), n(215), n(216), n(217), n(219), n(222), n(223), n(224), n(225), n(226), n(227), n(228), n(229), n(230), n(231), n(232), n(233), n(234), n(235), n(236), n(238), n(240), n(241), n(243), n(244), n(245), n(246), n(247), n(248), n(249), n(251), n(252), n(253), n(255), n(256), n(257), n(259), n(261), n(262), n(263), n(264), n(265), n(267), n(268), n(269), n(270), n(271), n(272)
}, , , , , , , , , , , , , , , , , , , function(e, t, n) {
    "use strict";
    n(20), n(24), n(46), n(48), n(50), n(52), n(54), n(57), n(60), n(62), n(64), n(66), n(68), n(70), n(72), n(74), n(76), n(78), n(80), n(82), n(85), n(87), n(90), n(92), n(94), n(96), n(98), n(100), n(102), n(104), n(106), n(108), n(110), n(114), n(125), n(127), n(129), n(131), n(134), n(140), n(142), n(144), n(146), n(148), n(150), n(152), n(154), n(156), n(158), n(160), n(162), n(164), n(166), n(170), n(173), n(175), n(177), n(179), n(183), n(185), n(187), n(190), n(192), n(194), n(196), n(198)
}, function(e, t) {}, , , , 20, , , , , , , , , , , , , , , , , , , , , , 20, , 20, , 20, , 20, , 20, , , 20, , , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , , 20, , 20, , , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , , , 20, , , , , , , , , , , 20, , 20, , 20, , 20, , , 20, , , , , , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , 20, , , , 20, , , 20, , 20, , 20, , 20, , , , 20, , 20, , 20, , , 20, , 20, , 20, , 20, , 20, , function(e, t, n) {
    e.exports = n.p + ".htaccess"
}, function(e, t, n) {
    e.exports = n.p + "apple-touch-icon.png"
}, function(e, t, n) {
    e.exports = n.p + "favicon.ico"
}, function(e, t, n) {
    e.exports = n.p + "Icon-60.png"
}, function(e, t, n) {
    e.exports = n.p + "Icon-60@2x.png"
}, function(e, t, n) {
    e.exports = n.p + "Icon-60@3x.png"
}, function(e, t, n) {
    e.exports = n.p + "js/vendor/modernizr-2.8.3.js"
}, function(e, t, n) {
    "use strict";
    n(208), n(209), n(210), n(211), n(212), n(213)
}, function(e, t, n) {
    e.exports = n.p + "js/homepage/locales/angular-locale_en-gb.js"
}, function(e, t, n) {
    e.exports = n.p + "js/homepage/locales/angular-locale_es-es.js"
}, function(e, t, n) {
    e.exports = n.p + "js/homepage/locales/angular-locale_nl-nl.js"
}, function(e, t) {
    e.exports = {
        article: "Article",
        video: "Video",
        radio: "Radio",
        social: "Social",
        share_on_service: "Share on {{ service }}",
        view_on_service: "View on {{ service }}",
        copy_link: "Copy link",
        ajax: "Ajax",
        tv_live: "Live",
        "login/register": "Login / Register",
        login_or_register: "Login or register",
        load_more: "Load more",
        back_to_overview: "Back to overview",
        filter_on: "Filter on",
        menu: "Menu",
        main_menu: "Main menu",
        today: "Today",
        yesterday: "Yesterday",
        last_week: "Last week",
        week_of: "Week of {{ date | date:'MMMM d'}}",
        match_date: "{{ date | date:'EEEE MMMM d HH:mm'}}",
        live: "Live",
        buy_tickets: "Buy your tickets here",
        line_up: "Line up",
        line_up_statistics: "Line up & Statistics",
        match_report: "Match report",
        listen_live: "Listen live",
        next: "Next",
        previous: "Previous",
        urlCopySuccess: "URL copied to clipboard.",
        urlCopyFail: "Could not copy to clipboard.",
        days: "Days",
        hours: "Hours",
        minutes: "Minutes",
        seconds: "Seconds"
    }
}, function(e, t) {
    e.exports = {
        article: "Artículo",
        video: "Vídeo",
        radio: "Radio",
        social: "Social",
        share_on_service: "Compartir en {{ service }}",
        view_on_service: "Ver on {{ service }}",
        copy_link: "Copiar link",
        ajax: "Ajax",
        tv_live: "Live",
        "login/register": "Ingresar / Registro",
        login_or_register: "Ingresar o Registrar",
        load_more: "Carga más",
        back_to_overview: "Volver a la lista",
        filter_on: "Filtrar",
        menu: "Menú",
        main_menu: "Menú",
        today: "Hoy",
        yesterday: "Ayer",
        last_week: "La semana pasada",
        week_of: "Semana del {{ date | date:'dd \\'de\\' MMMM'}}",
        match_date: "{{ date | date:'EEEE d MMMM HH:mm' }}",
        live: "Live",
        buy_tickets: "Compra tus entradas aquí",
        line_up: "Póngase en fila",
        line_up_statistics: "Póngase en fila & estadísticas",
        match_report: "Crónica del partido",
        listen_live: "Escuchar en vivo",
        next: "Siguiente",
        previous: "Anterior",
        urlCopySuccess: "No se pudo copiar la URL",
        urlCopyFail: "No se pudo copiar la URL",
        days: "Días",
        hours: "Horas",
        minutes: "Minutos",
        seconds: "Segundos"
    }
}, function(e, t) {
    e.exports = {
        article: "Artikel",
        video: "Video",
        radio: "Radio",
        social: "Social",
        share_on_service: "Delen op {{ service }}",
        view_on_service: "Bekijken op {{ service }}",
        copy_link: "Link kopiëren",
        ajax: "Ajax",
        tv_live: "Live uitzending",
        "login/register": "Inloggen / Registreren",
        login_or_register: "Inloggen of registreren",
        load_more: "Meer laden",
        back_to_overview: "Terug naar overzicht",
        filter_on: "Filter op",
        menu: "Menu",
        main_menu: "Hoofdmenu",
        today: "Vandaag",
        yesterday: "Gisteren",
        last_week: "Vorige week",
        week_of: "Week van {{ date | date:'d MMMM'}}",
        match_date: "{{ date | date:'EEEE d MMMM HH:mm' }}",
        live: "Live",
        buy_tickets: "Koop hier je tickets",
        line_up: "Opstelling",
        line_up_statistics: "Opstelling & Statistieken",
        match_report: "Wedstrijdverslag",
        listen_live: "Luister live mee",
        next: "Volgende",
        previous: "Vorige",
        urlCopySuccess: "De URL is gekopieerd naar je klembord.",
        urlCopyFail: "Kon de URL niet kopieren.",
        days: "Dagen",
        hours: "Uren",
        minutes: "Minuten",
        seconds: "Seconden"
    }
}, function(e, t) {
    "use strict";
    angular.module("ajax", ["ngAnimate", "ngTouch", "ui.router", "ajax.homepage", "ajax.matchday", "angulartics.google.analytics"])
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            var t = angular.element("html").attr("lang") || "nl-nl";
            e.setTranslation(t), e.setFallbackTranslation(t), e.setFallbackString("XXX")
        }

        function t(e, t) {
            t.loadTranslations(), e.menu = {
                showMenu: !1
            }, e.iconMenu = {
                menushare: !1,
                menulang: !1,
                menusearch: !1,
                menulive: !1
            }, e.toggleSubMenu = function(t) {
                for (var n in e.iconMenu) n == t ? e.iconMenu[n] = !e.iconMenu[n] : e.iconMenu[n] = !1
            }
        }
        e.$inject = ["translateServiceProvider"], t.$inject = ["$rootScope", "translateService"], angular.module("ajax").config(e).run(t)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            var e = {};
            return e.request = function(e) {
                return e.url.match(/gxsoftware\.com/) && (e.withCredentials = !0), e
            }, e
        }
        angular.module("ajax").service("loaderInterceptor", e), e.$inject = []
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";

        function e(e, t) {
            function i(t, n, i, a) {
                function r() {
                    a.articleService.showArticle || (n.find(".article-popupposition").removeClass("scrollable"), a.onHideAnimationComplete())
                }

                function o() {
                    a.articleService.showArticle && (n.find(".article-popupposition").addClass("scrollable").scrollTop(0), a.onShowAnimationComplete())
                }
                var l = n.find(".article-popup"),
                    c = !0;
                t.$watch("$ctrl.articleService.showArticle", function(t) {
                    return c ? void(c = !1) : void(t ? (a.media = null, e.addClass(l, "article-popup--visible").then(o)) : e.removeClass(l, "article-popup--visible").then(r))
                })
            }
            return {
                restrict: "E",
                template: n(218),
                controller: "ajaxArticleController",
                controllerAs: "$ctrl",
                bindToController: !0,
                scope: {
                    onClose: "&?",
                    showRelatedArticles: "@"
                },
                link: i
            }
        }

        function t(e, t, n, i, a, r) {
            var o = this;
            o.media = null, o.showMobileShareOptions = !1, o.showShareOptions = !1, o.socialService = a, o.copyToClipboardSupported = document.queryCommandSupported("copy"), o.articleService = i, o.streamSlug = n.params.streamSlug, e.$watch("hideMainMenuBar", function() {
                o.hideMainMenuBar = e.hideMainMenuBar
            }), o.closeArticle = function() {
                o.articleService.showArticle = !1, o.onClose && o.onClose()
            }, o.onHideAnimationComplete = function() {
                o.media = null, o.showMobileShareOptions = !1, o.showShareOptions = !1, o.articleService.activeArticle = null, t.$broadcast("articleClosed")
            }, o.onShowAnimationComplete = function() {
                o.media = o.articleService.activeArticle.media, t.$emit("articleLoaded")
            }, o.printArticle = function() {
                window.open(i.getPrintUrl(o.articleService.activeArticle.url))
            }, o.openReadSpeaker = function() {
                r.open()
            }
        }
        e.$inject = ["$animate", "articleService"], t.$inject = ["$rootScope", "$scope", "$state", "articleService", "socialService", "readSpeaker"], angular.module("ajax").directive("ajaxArticle", e).controller("ajaxArticleController", t)
    }()
}, function(e, t) {
    e.exports = '<!-- Mobile article controls -->\n<div class="l-cell100 ld-hide article-mobilecontrols"\n     ng-show="$ctrl.articleService.showArticle">\n    <a class="article-mobilecontrolsclosebutton"\n       ng-click="$ctrl.closeArticle()">\n        <i class="icon icon--Menu_close"></i>\n    </a>\n\n    <div class="article-mobilecontrolslabel">\n        <!-- Video -->\n        <span ng-show="$ctrl.articleService.activeArticle.isVideo">{{ ::\'video\' | translate }} ({{ $ctrl.articleService.activeArticle.length | humanizeSeconds }})</span>\n        <!-- Audio -->\n        <span ng-show="$ctrl.articleService.activeArticle.isAudio">{{ ::\'radio\' | translate }} ({{ $ctrl.articleService.activeArticle.length | humanizeSeconds }})</span>\n    </div>\n\n    <a class="article-mobilecontrolssharebutton"\n       ng-class="{\'article-mobilecontrolssharebutton--selected\': $ctrl.showMobileShareOptions}"\n       ng-click="$ctrl.showMobileShareOptions = !$ctrl.showMobileShareOptions;">\n        <i class="icon icon--social"></i>\n    </a>\n</div>\n\n<div class="backdrop"\n     ng-show="$ctrl.articleService.showArticle"></div>\n\n<div class="article-popupposition"\n     ng-class="{\'article-popupposition--pushed-down\': !$ctrl.hideMainMenuBar}"\n     ng-show="$ctrl.articleService.showArticle">\n\n    <div class="article-popupcloser" ng-click="$ctrl.closeArticle()"></div>\n\n    <div class="l-cell100 article-mobilecontrolsoptionwrapper ld-hide"\n         ng-show="$ctrl.showMobileShareOptions">\n        <a class="article-mobilecontrolsoption"\n           ng-click="$ctrl.socialService.shareToFacebook();">\n            <div class="article-mobilecontrolsoptionicon"><i class="icon icon--facebook-icon"></i></div>\n            <div class="article-mobilecontrolsoptionlabel">\n                {{ ::\'share_on_service\' | translate:{\'service\': \'Facebook\'} }}\n            </div>\n        </a>\n        <a class="article-mobilecontrolsoption"\n           ng-click="$ctrl.socialService.shareToTwitter($ctrl.articleService.activeArticle.title);">\n            <div class="article-mobilecontrolsoptionicon"><i class="icon icon--twitter-icon"></i></div>\n            <div class="article-mobilecontrolsoptionlabel">\n                {{ ::\'share_on_service\' | translate:{\'service\': \'Twitter\'} }}\n            </div>\n        </a>\n        <a class="article-mobilecontrolsoption"\n           ng-click="$ctrl.socialService.shareToGooglePlus();">\n            <div class="article-mobilecontrolsoptionicon"><i class="icon icon--GooglePlus"></i></div>\n            <div class="article-mobilecontrolsoptionlabel">\n                {{ ::\'share_on_service\' | translate:{\'service\': \'Google+\'} }}\n            </div>\n        </a>\n        <a class="article-mobilecontrolsoption"\n           ng-click="$ctrl.socialService.shareToWhatsapp();">\n            <div class="article-mobilecontrolsoptionicon"><i class="icon icon--whatsapp"></i></div>\n            <div class="article-mobilecontrolsoptionlabel">\n                {{ ::\'share_on_service\' | translate:{\'service\': \'Whatsapp\'} }}\n            </div>\n        </a>\n        <a class="article-mobilecontrolsoption"\n           ng-click="$ctrl.socialService.copyCurrentUrl();"\n           ng-if="::$ctrl.copyToClipboardSupported">\n            <div class="article-mobilecontrolsoptionicon"><i class="icon icon--link-icon"></i></div>\n            <div class="article-mobilecontrolsoptionlabel">\n                {{ ::\'copy_link\' | translate }}\n            </div>\n        </a>\n    </div>\n\n    <div class="article-mobilecontrolsoverlay ld-hide"\n         ng-show="$ctrl.showMobileShareOptions"\n         ng-click="$ctrl.showMobileShareOptions = false;">\n    </div>\n\n    <div class="article-popup clearfix"\n         ng-show="$ctrl.articleService.showArticle">\n\n        <div class="article-wrapper lt-cell100 lm-cell100">\n            <div class="article-popupcloser article-popupcloser--nonoverlay" ng-click="$ctrl.closeArticle()"></div>\n\n\n            <!-- Article -->\n            <div class="l-cell100 l-bpadding ld-hpadding">\n                <!--<div class="article-backlink lt-hide lm-hide" ng-click="$ctrl.closeArticle()"><i class="icon icon&#45;&#45;Arrow-left"></i> {{ ::\'back_to_overview\' | translate }}</div>-->\n                <article class="article clearfix">\n\n                    <ajax-article-view media="$ctrl.media" article="$ctrl.articleService.activeArticle"></ajax-article-view>\n\n                    <div class="l-cell100 lt-hpadding2 lm-hpadding2 ld-hpadding4 l-vpadding article-tagwrapper"\n                         ng-show="$ctrl.articleService.activeArticle.tags.length">\n                        <a ng-repeat="tag in $ctrl.articleService.activeArticle.tags" ui-sref="story({storySlug: tag, stream: $ctrl.streamSlug})">#{{ tag }}</a>\n                    </div>\n                </article>\n\n\n            </div>\n\n            <div class="l-cell100"\n                 ng-show="$ctrl.articleService.activeArticle.relatedArticles.length && $ctrl.showRelatedArticles">\n\n                <!-- Related articles -->\n                <div class="l-cell33 lm-cell100 l-vpadding lt-hpadding ld-hpadding"\n                     ng-repeat="related in $ctrl.articleService.activeArticle.relatedArticles | limitTo:3">\n                    <ajax-article-preview article-preview="related"\n                                          immediately-load-thumbnail="1"\n                                          is-related-article="1"\n                                          columns="1"></ajax-article-preview>\n                </div>\n\n            </div>\n\n            <div class="l-cell100 l-vpadding2 l-contentcenter lt-hide lm-hide">\n                <button class="button--stream" ng-click="$ctrl.closeArticle()">{{ ::\'back_to_overview\' | translate }}</button>\n            </div>\n\n        </div>\n\n        <!-- Article controls -->\n        <div class="article-controlswrapper lt-hide lm-hide">\n            <div class="article-controlgroup">\n                <a class="article-control article-control--dark" ng-click="$ctrl.closeArticle()">\n                    <i class="icon icon--Menu_close"></i>\n                </a>\n            </div>\n            <div class="article-controlgroup"\n                 ng-if="!$ctrl.articleService.activeArticle.isVideo && !$ctrl.articleService.activeArticle.isAudio">\n                <a class="article-control"\n                   ng-click="$ctrl.printArticle();">\n                    <i class="icon icon--printer-icon"></i>\n                </a>\n            </div>\n            <div class="article-controlgroup"\n                 ng-if="!$ctrl.articleService.activeArticle.isAudio">\n                <a class="article-control"\n                   ng-click="$ctrl.openReadSpeaker()">\n                    <i class="icon icon--audio-icon"></i>\n                </a>\n            </div>\n            <div class="article-controlgroup">\n                <a class="article-control"\n                   ng-click="$ctrl.showShareOptions = !$ctrl.showShareOptions;">\n                    <i class="icon icon--social"></i>\n                </a>\n                <div ng-class="{\'is-invisible\': !$ctrl.showShareOptions}">\n                    <a class="article-control article-control--share"\n                       ng-click="$ctrl.socialService.shareToFacebook();">\n                        <i class="icon icon--facebook-icon"></i>\n                    </a>\n                    <a class="article-control article-control--share"\n                       ng-click="$ctrl.socialService.shareToTwitter($ctrl.articleService.activeArticle.title);">\n                        <i class="icon icon--twitter-icon"></i>\n                    </a>\n                    <a class="article-control article-control--share"\n                       ng-click="$ctrl.socialService.shareToGooglePlus();">\n                        <i class="icon icon--GooglePlus"></i>\n                    </a>\n                    <a class="article-control article-control--share"\n                       ng-click="$ctrl.socialService.copyCurrentUrl();"\n                       ng-if="::$ctrl.copyToClipboardSupported">\n                        <i class="icon icon--link-icon"></i>\n                    </a>\n                </div>\n            </div>\n        </div>\n\n    </div>\n</div>'
}, function(e, t, n) {
    function i() {}
    angular.module("ajax").directive("ajaxArticleView", ["$compile", "$timeout", function(e, t) {
        function a(n, i) {
            var a;
            n.$watchGroup(["$ctrl.article"], function(r, o) {
                var l = r[0] ? r[0].id : 0,
                    c = o[0] ? o[0].id : 0;
                t(function() {
                    if (a && l !== c && (a.$destroy(), a = null), 0 !== l && l !== c) {
                        a = n.$new();
                        var t = ".oswidget, [ajax-photo-slider], [ajax-quiz], ajax-bluebillywig-video";
                        i.find(t).each(function() {
                            e(angular.element(this))(a)
                        })
                    }
                })
            })
        }
        return {
            template: n(220),
            controller: i,
            scope: {
                media: "<",
                article: "<"
            },
            controllerAs: "$ctrl",
            bindToController: !0,
            link: a
        }
    }])
}, function(e, t, n) {
    e.exports = '<div>\n    <div class="article-hero"\n         ng-show="!$ctrl.article.isTwitter && !$ctrl.article.isInstagram && $ctrl.article.media.isImage"\n         ng-style="{\'background-image\': \'url(\' + $ctrl.article.media.urls[0].url + \')\'}"></div>\n\n    <img class="article-socialhero"\n         alt="{{ $ctrl.article.title }}"\n         ng-src="{{ $ctrl.article.media.urls[0].url }}"\n         ng-if="$ctrl.article.media.urls[0].url"\n         ng-show="($ctrl.article.isTwitter || $ctrl.article.isInstagram) && $ctrl.article.media.isImage" />\n\n    <div class="article-videowrapper"\n         ng-show="$ctrl.article.media.type == \'bluebillywigvideo\'">\n\n        <ajax-bluebillywig-video class="article-video"\n                                 auto-play="true"\n                                 url="$ctrl.media.getBluebillywigUrl()"></ajax-bluebillywig-video>\n\n    </div>\n\n    <div class="l-cell100 lt-padding2 lm-padding2 ld-padding4 article-content">\n\n        <!--Social header -->\n        <div class="article-socialheader"\n             ng-show="$ctrl.article.isTwitter || $ctrl.article.isInstagram">\n\n            <div class="article-socialavatar"\n                 ng-style="{\'background-image\': \'url(\' + $ctrl.article.avatar.urls[0].url + \')\'}"></div>\n            <h4 class="article-socialusername">{{ $ctrl.article.username }}</h4>\n\n            <a class="article-sociallink lm-hide"\n               ng-href="{{ $ctrl.article.href }}"\n               ng-show="($ctrl.article.isTwitter || $ctrl.article.isInstagram) && $ctrl.article.href"\n               target="_blank">\n                                <span ng-show="$ctrl.article.isTwitter">\n                                    {{ ::\'view_on_service\' | translate:{\'service\': \'Twitter\'} }}\n                                </span>\n                <span ng-show="$ctrl.article.isInstagram">\n                                    {{ ::\'view_on_service\' | translate:{\'service\': \'Instagram\'} }}\n                                </span>\n            </a>\n\n            <a ng-href="{{ $ctrl.article.href }}"\n               target="_blank">\n                <i class="article-socialicon icon"\n                   ng-class="{\'icon--Twitter\': $ctrl.article.isTwitter, \'icon--InstagramCopy\': $ctrl.article.isInstagram}"></i>\n            </a>\n        </div>\n\n        <!-- Date -->\n        <div class="article-typeordate"\n             ng-show="!$ctrl.article.isVideo && !$ctrl.article.isAudio">\n            {{ $ctrl.article.date | humanizeDate }}\n        </div>\n        <!-- Stadion article -->\n        <div class="article-typeordate"\n             ng-show="$ctrl.article.inStadionContent">\n            <img src="' + n(221) + '" width="18" height="11" alt="" class="article__stadion-icon"> Exclusief\n            <span ng-show="$ctrl.article.isVideo">({{ $ctrl.article.length | humanizeSeconds }})</span>\n        </div>\n        <!-- Video -->\n        <div class="article-typeordate"\n             ng-show="$ctrl.article.isVideo && !$ctrl.article.inStadionContent">\n             Video ({{ $ctrl.article.length | humanizeSeconds }})\n        </div>\n        <!-- Audio -->\n        <div class="article-typeordate"\n             ng-show="$ctrl.article.isAudio">\n            Radio ({{ $ctrl.article.length | humanizeSeconds }})\n        </div>\n\n        <h2 class="article-header"\n            ng-bind-html="$ctrl.article.title"></h2>\n\n        <div ng-bind-html="$ctrl.article.content"></div>\n\n    </div>\n</div>\n'
}, function(e, t, n) {
    e.exports = n.p + "static/ajaxpresentation/assets/ArenaIcon@2x.1c00c154eeef1b560a6899de59d921b8.png"
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            function t(e, t, n, i) {
                var a, r = t[0];
                e.$on("articleClosed", function() {
                    a && a.pause()
                }), e.$watch("url", function(t) {
                    if (r.innerHTML = "", t) {
                        var n = {
                            target: r,
                            width: "100%",
                            autoHeight: "true",
                            responsiveSizing: "true"
                        };
                        "true" === e.autoPlay && (n.autoPlay = e.autoPlay), a = new bluebillywig.Player(t, n)
                    }
                })
            }
            return {
                restrict: "E",
                template: "<div></div>",
                replace: !0,
                scope: {
                    url: "=",
                    autoPlay: "@"
                },
                link: t
            }
        }
        e.$inject = ["Media"], angular.module("ajax").directive("ajaxBluebillywigVideo", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                scope: !0,
                controllerAs: "ctrl",
                bindToController: !0,
                controller: ["$rootScope", function(e) {
                    var t = this;
                    t.triggerMobileMenu = function() {
                        e.$broadcast("ajaxMobileNavTrigger.open")
                    }
                }]
            }
        }
        angular.module("ajax").directive("ajaxMobileMenuTrigger", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            return {
                scope: !0,
                controllerAs: "ctrl",
                controller: t,
                bindToController: !0,
                link: function(t, n) {
                    function i() {
                        var e = {
                            WebkitTransition: "webkitTransitionEnd",
                            MozTransition: "transitionend",
                            transition: "transitionend"
                        };
                        return e[Modernizr.prefixed("transition")]
                    }
                    n.addClass("is-closed").one(i(), function() {
                        n.removeClass("is-invisible")
                    }), e(function() {
                        n.removeClass("is-invisible")
                    }, 1e3)
                }
            }
        }

        function t(e, t) {
            var n = this;
            n.menuVisible = !1, n.hideMenu = function(t) {
                n.menuVisible = !1, e.$broadcast("ajaxMobileMenu.close")
            }, n.showMenu = function(t) {
                n.menuVisible = !0, e.$broadcast("ajaxMobileMenu.open")
            }, t.$on("ajaxMobileNavTrigger.open", function() {
                n.menuVisible = !0
            })
        }
        e.$inject = ["$timeout"], t.$inject = ["$rootScope", "$scope"], angular.module("ajax").directive("ajaxMobileMenu", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            return {
                controllerAs: "ctrl",
                controller: t
            }
        }

        function t(e, t) {
            var n = this;
            n.showMenu = function(t) {
                e.$broadcast("ajaxMobileNavToggle.open", !0)
            }, n.hideMenu = function(t) {
                e.$broadcast("ajaxMobileNavToggle.close", !1)
            }
        }
        e.$inject = ["$timeout"], t.$inject = ["$rootScope", "$scope"], angular.module("ajax").directive("ajaxMobileNavToggle", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                controller: "AjaxMobileNavController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: !0,
                link: function(e, t, n, i) {
                    function a() {
                        t.css({
                            height: "",
                            overflow: ""
                        });
                        var e = t.parents(".ng-hide");
                        e.length > 0 && (e.css("transition-duration", "0s"), e.removeClass("ng-hide")), t.css({
                            height: r() + "px",
                            overflow: "hidden"
                        }), e.length > 0 && (e.addClass("ng-hide"), e.css("transition-duration", ""))
                    }

                    function r() {
                        var e = 0;
                        return t.find("[data-ajax-mobile-nav-menu]").each(function() {
                            var t = angular.element(this).outerHeight();
                            t > e && (e = t)
                        }), e
                    }
                    e.$on("cssGridEnter", a), n.$observe("ajaxMobileNavActiveMenu", function(e) {
                        e && i.init(t, e)
                    })
                }
            }
        }

        function t() {
            return {
                restrict: "A",
                require: "^ajaxMobileNav",
                link: function(e, t, n, i) {
                    t.on("click", function() {
                        e.$apply(function() {
                            i.openMenu(n.ajaxMobileNavActiveTrigger)
                        })
                    }), i.registerTrigger(t)
                }
            }
        }

        function n(e, t, n, i) {
            function a(e) {
                this.el = e, this.parentId = e.attr("data-ajax-mobile-nav-parent"), this.menuId = e.attr("data-ajax-mobile-nav-menu")
            }

            function r(e) {
                this.el = e, this.triggerId = e.attr("data-ajax-mobile-nav-active-trigger")
            }

            function o() {
                angular.forEach(s, function(e) {
                    e.menuId === d ? u = e : e.el.addClass("is-right")
                }), u || (t.warn("Ajax Mobile Nav: default active menu not found, resetting to first found."), u = s[0]);
                for (var e = u; e.parentId && s[e.parentId];) e = s[e.parentId], e.el.removeClass("is-right").addClass("is-left")
            }

            function l(e) {
                ! function e(t) {
                    angular.forEach(h, function(n) {
                        n.triggerId === t.menuId && (n.el.addClass("is-selected"), t.parentId && s[t.parentId] && e(s[t.parentId]))
                    })
                }(e)
            }

            function c() {
                u = null, angular.forEach(s, function(e) {
                    e.el.removeClass("is-left").addClass("is-right"), 0 === e.el.index() && (u = e, e.el.removeClass("is-right"))
                })
            }
            var s, u, d, f = this,
                h = [];
            f.init = function(e, t) {
                s = {}, u = null, d = t, e.find("[data-ajax-mobile-nav-menu]").each(function() {
                    var e = new a(angular.element(this));
                    s[e.menuId] = e
                }), o(), l(u)
            }, f.openMenu = function(n) {
                var i = s[n];
                return i ? (i.menuId === u.parentId ? e.addClass(u.el, "is-right") : e.addClass(u.el, "is-left"), e.removeClass(i.el, "is-left is-right"), void(u = i)) : void t.warn("openMenu: no menu found with id: " + n)
            }, f.registerTrigger = function(e) {
                h.push(new r(e))
            }, n.$on("ajaxMobileMenu.close", function(e) {
                i(function() {
                    c()
                }, 450)
            })
        }
        n.$inject = ["$animate", "$log", "$scope", "$timeout"], angular.module("ajax").directive("ajaxMobileNav", e).directive("ajaxMobileNavActiveTrigger", t).controller("AjaxMobileNavController", n)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            return {
                scope: !0,
                link: function(n, i) {
                    function a() {
                        c.off("touchstart", r), c.off("pointerdown", r), c.on("touchstart", r), c.on("pointerdown", r)
                    }

                    function r(e) {
                        o(), e.stopImmediatePropagation(), e.preventDefault()
                    }

                    function o() {
                        i.find("li").removeClass("is-active"), c.removeClass("is-active")
                    }

                    function l(e) {
                        var t = [e.parents(".mainnav-item"), e.parents(".mainnav-subitem")];
                        t.forEach(function(t) {
                            t.siblings().find("a").each(function(t, n) {
                                n !== e && angular.element(n).parent().removeClass("is-active")
                            })
                        })
                    }
                    var c = i.find(".mainnav-backdrop").first();
                    a(), i.on("touchstart", "a", function(e) {
                        var t = angular.element(this),
                            n = !0;
                        return t.parent().addClass("is-hoverDisabled"), l(angular.element(this)), t.siblings("ul").length && (n = !1, t.parent(".mainnav-item").length ? (t.parent().toggleClass("is-active"), t.parent().hasClass("is-active") ? c.addClass("is-active") : c.removeClass("is-active")) : t.parent().addClass("is-active")), n && (i.find("li").removeClass("is-active"), o()), n
                    }), e.$on("show-menu-bar", function(e, n) {
                        n.shouldShow ? (i.removeClass("is-animatable"), t.addClass(i, "is-scrolled").then(function() {
                            i.addClass("is-animatable")
                        })) : i.removeClass("is-scrolled")
                    })
                }
            }
        }
        e.$inject = ["$rootScope", "$animate"], angular.module("ajax").directive("ajaxMainMenu", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                controller: "AjaxSideNavController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: !0,
                link: function(e, t, n, i) {
                    n.$observe("ajaxSideNavActiveMenu", function(e) {
                        e && i.init(t, e)
                    })
                }
            }
        }

        function t(e, t, n, i) {
            function a(e) {
                this.el = e, this.menuId = e.attr("data-ajax-side-nav-menu"), this.parent = null, this.submenus = {}, this.isShown = !1
            }

            function r(e) {
                angular.forEach(l, function(e) {
                    e.el.addClass("ng-hide")
                });
                var t = l[e];
                t && t.setSelected()
            }
            var o, l, c, s = this;
            s.init = function(e, t) {
                o = new a(e), l = {}, c = t, o.buildSubmenus(l), r(t)
            }, s.openMenu = function(t) {
                var n = o.findMenu(t);
                return n ? void(n.isShown ? n.hide() : (n.hideSiblings(), n.show())) : void e.warn("Sidenav openMenu: no menu found with id: " + t)
            }, s.getMenu = function(e) {
                return l ? l[e] : void 0
            }, a.prototype.prepAnimation = function() {
                var e = this;
                this.el.css({
                    "max-height": "none",
                    "transition-duration": "0s"
                }), this.isShown || this.el.removeClass("ng-hide"), e.el.css("max-height", e.el.height()), e.el.css("transition-duration", ""), e.isShown || e.el.addClass("ng-hide")
            }, a.prototype.endAnimation = function() {
                this.el.css("max-height", "")
            }, a.prototype.show = function() {
                var e = this;
                this.prepAnimation(), t.removeClass(this.el, "ng-hide").then(function() {
                    return e.endAnimation()
                }), this.isShown = !0
            }, a.prototype.hide = function() {
                var e = this;
                this.isShown && (this.prepAnimation(), t.addClass(this.el, "ng-hide").then(function() {
                    return e.endAnimation()
                }), this.isShown = !1)
            }, a.prototype.hideSiblings = function() {
                this.parent && angular.forEach(this.parent.submenus, function(e) {
                    e.hide()
                })
            }, a.prototype.buildSubmenus = function(t) {
                var n = this;
                this.el.children("[data-ajax-side-nav-menu]").each(function() {
                    var i = new a(angular.element(this));
                    i.parent = n, n.submenus[i.menuId] = i, angular.isObject(t) && (t[i.menuId] ? e.warn("Side navigation: duplicate ID: " + i.menuId) : t[i.menuId] = i), i.buildSubmenus(t)
                })
            }, a.prototype.setSelected = function() {
                this.show(), this.parent && this.parent.setSelected()
            }, a.prototype.findMenu = function(e) {
                if (!e) return null;
                if (e === this.menuId) return this;
                for (var t in this.submenus)
                    if (this.submenus.hasOwnProperty(t)) {
                        var n = this.submenus[t].findMenu(e);
                        if (null !== n) return n
                    }
                return null
            }
        }
        t.$inject = ["$log", "$animate", "$scope", "$timeout"], angular.module("ajax").directive("ajaxSideNav", e).controller("AjaxSideNavController", t)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                link: function(e, t) {
                    t.removeClass("is-invisible")
                }
            }
        }
        angular.module("ajax").directive("ajaxFoucBust", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            return {
                link: function(t, n, i) {
                    var a = i.ajaxDatePicker ? t.$eval(i.ajaxDatePicker) : {};
                    a.mailPlus && (a.onSet = function(n) {
                        return function(i) {
                            t.$apply(function() {
                                if (i.select) {
                                    var t = new Date(i.select),
                                        a = angular.element("body");
                                    a.find(n.mailPlus.day).val(e("date")(t, "dd")), a.find(n.mailPlus.month).val(e("date")(t, "MM")), a.find(n.mailPlus.year).val(e("date")(t, "yyyy"))
                                }
                            })
                        }
                    }(a)), n.pickadate(a)
                }
            }
        }
        e.$inject = ["$filter"], angular.module("ajax").directive("ajaxDatePicker", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                link: function(e, t) {
                    function n() {
                        var e = r.val();
                        e && l.text(a(r.val()))
                    }

                    function i(e) {
                        e.preventDefault(), r.click()
                    }

                    function a(e) {
                        var t = e.match(/[\/\\]([^\/\\]+)$/);
                        return t && 2 === t.length ? t[1] : e
                    }
                    var r = t.find('input[type="file"]'),
                        o = t.find("button"),
                        l = t.find("[data-ajax-input-file-label]");
                    r.css({
                        position: "fixed",
                        top: "-100px"
                    }), n(), r.on("change", n), o.on("click", i)
                }
            }
        }
        angular.module("ajax").directive("ajaxInputFile", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                scope: !0,
                controller: "AjaxAccordionItemController",
                controllerAs: "faq",
                bindToController: !0,
                link: n
            }
        }

        function t() {
            var e = this;
            e.showInfo = !1
        }

        function n(e, t, n) {
            "open" === n.ajaxAccordionItem && (e.faq.showInfo = !0)
        }
        angular.module("ajax").directive("ajaxAccordionItem", e).controller("AjaxAccordionItemController", t)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            return {
                link: function(t, n, i) {
                    function a() {
                        s = {};
                        var e = getComputedStyle(n[0]);
                        for (l = 0; l < d.length; l++) s[d[l]] = e.getPropertyValue(d[l]);
                        u = parseInt(n.css("z-index"), 10), !isNaN(u) && u || (u = 1), f.css(s), f.css({
                            cursor: n.css("cursor") || "text",
                            display: "block",
                            position: "absolute",
                            overflow: "hidden",
                            "z-index": u + 1,
                            background: "none",
                            "border-top-style": "solid",
                            "border-right-style": "solid",
                            "border-bottom-style": "solid",
                            "border-left-style": "solid",
                            "border-top-color": "transparent",
                            "border-right-color": "transparent",
                            "border-bottom-color": "transparent",
                            "border-left-color": "transparent"
                        })
                    }

                    function r() {
                        a()
                    }

                    function o() {
                        n.val().length ? f.addClass("ng-hide") : f.removeClass("ng-hide")
                    }
                    if (!("placeholder" in document.createElement("input")) && i.placeholder && "undefined" == typeof i.noPlaceholderPolyfill) {
                        var l, c, s, u, d = ["-moz-box-sizing", "-webkit-box-sizing", "box-sizing", "padding-top", "padding-right", "padding-bottom", "padding-left", "margin-top", "margin-right", "margin-bottom", "margin-left", "border-top-width", "border-right-width", "border-bottom-width", "border-left-width", "line-height", "font-size", "font-family", "width", "height", "top", "left", "right", "bottom"];
                        try {
                            c = i.placeholder, n[0].setAttribute("placeholder", "")
                        } catch (e) {
                            return
                        }
                        var f = angular.element("<span>").addClass("placeholder ng-hide").text(c);
                        n.parent()[0].insertBefore(f[0], n[0]), f.on("click", function(e) {
                            e.target = n[0], n.trigger(e), n[0].focus()
                        }), n.on("focus.placeholder", function() {
                            f.addClass("ng-hide")
                        }), n.on("blur.placeholder", function() {
                            o()
                        }), i.ngModel ? t.$watch(i.ngModel, function() {
                            o()
                        }) : n.on("input", function() {
                            o()
                        }), e(function() {
                            a(), o()
                        }), window.addEventListener("resize", r, !1), t.$on("$destroy", function() {
                            window.removeEventListener("resize", r)
                        })
                    }
                }
            }
        }
        e.$inject = ["$timeout"], angular.module("ajax").directive("placeholder", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            return {
                restrict: "E",
                template: '<div class="l-whichlayout"></div>',
                link: function(n, i) {
                    function a() {
                        return i.children().width()
                    }
                    angular.element(window).on("resize.ajaxCssGrid", function() {
                        var t = a();
                        e.getGrid() !== t && n.$apply(function() {
                            e.setGrid(t)
                        })
                    }), e.setGrid(a()), t(function() {
                        e.setGrid(a())
                    }), n.$on("$destroy", function() {
                        angular.element(window).off("resize.ajaxCssGrid")
                    })
                }
            }
        }
        e.$inject = ["cssGrid", "$timeout"], angular.module("ajax").directive("ajaxCssGrid", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            function t(t) {
                if (t !== a) {
                    t !== r.GRID_MOBILE && t !== r.GRID_TABLET && t !== r.GRID_DESKTOP && (t = r.GRID_DESKTOP);
                    var n = a;
                    a = t, e.$broadcast("cssGridEnter", t, n)
                }
            }

            function n() {
                return a
            }

            function i(e) {
                return n() === e
            }
            var a = 0,
                r = {
                    GRID_MOBILE: 1,
                    GRID_TABLET: 2,
                    GRID_DESKTOP: 3,
                    setGrid: t,
                    getGrid: n,
                    isGrid: i
                };
            return r
        }
        e.$inject = ["$rootScope"], angular.module("ajax").factory("cssGrid", e)
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";
        angular.module("ajax").directive("ajaxSpinner", function() {
            return {
                restrict: "E",
                template: n(237)
            }
        })
    }()
}, function(e, t) {
    e.exports = '<div class="spinner">\n    <div class="bounce1"></div>\n    <div class="bounce2"></div>\n    <div class="bounce3"></div>\n</div>'
}, function(e, t, n) {
    ! function() {
        "use strict";
        angular.module("ajax").directive("ajaxSpinOn", ["$timeout", function(e) {
            return {
                transclude: !0,
                template: n(239),
                link: function(t, n, i) {
                    var a, r, o, l = n[0];
                    t.spinning = !1, t.$watch(function() {
                        return t.$eval(i.ajaxSpinOn)
                    }, function(i) {
                        i ? (l.disabled = !0, a = e(function() {
                            r = l.style.width, o = l.style.height, l.style.width = ("border-box" === n.css("box-sizing") ? l.offsetWidth : l.clientWidth) + "px", l.style.height = ("border-box" === n.css("box-sizing") ? l.offsetHeight : l.clientHeight) + "px", l.style.position = "relative", t.spinning = !0
                        }, 500)) : (e.cancel(a), t.spinning && (l.style.width = r, l.style.height = o), l.disabled = !1, t.spinning = !1)
                    })
                }
            }
        }])
    }()
}, function(e, t) {
    e.exports = '<span ng-show="!spinning" ng-transclude></span>\n<ajax-spinner ng-show="spinning"></ajax-spinner>\n'
}, function(e, t) {
    ! function($) {
        "use strict";

        function e(e, a, r) {
            function o(e, t) {
                return e.append("<ajax-spinner></ajax-spinner>"), l
            }

            function l(e, a, o) {
                $.holdReady(!0);
                var l = a,
                    s = t(l);
                n(s, function(e) {
                    e.scripts && i(e.scripts), e.html && ($(function() {
                        l.html(e.html)
                    }), $.holdReady(!1)), "StartingLineUpWidget" === o.widget && r(function() {
                        return c(a)
                    })
                })
            }

            function c(t) {
                function n(e) {
                    return {
                        number: angular.element.trim(e.find(".shirt-number").text()),
                        name: angular.element.trim(e.find(".player-name").text())
                    }
                }

                function i(e) {
                    var t = e.split(".");
                    return {
                        number: angular.element.trim(t[0]) || "",
                        name: angular.element.trim(t[1]) || ""
                    }
                }

                function r(e, n) {
                    var i = t.find(".team-lineup");
                    "ajax" === e.toLowerCase() ? (s.addClass("lineupwidget-ajax"), i.eq(o).addClass("lineupwidget-ajax")) : "ajax" === n.toLowerCase() && (u.addClass("lineupwidget-ajax"), i.eq(l).addClass("lineupwidget-ajax"))
                }
                var o = 1,
                    l = 0,
                    c = a.$new(),
                    s = t.find(".bench-players").eq(o),
                    u = t.find(".bench-players").eq(l);
                c.homeTeamFieldPlayers = [], c.awayTeamFieldPlayers = [], c.homeTeamBenchPlayers = [], c.awayTeamBenchPlayers = [], t.find(".field .team-lineup").eq(o).find(".player-stat").each(function() {
                    c.homeTeamFieldPlayers.push(n(angular.element(this)))
                }), t.find(".field .team-lineup").eq(l).find(".player-stat").each(function() {
                    c.awayTeamFieldPlayers.push(n(angular.element(this)))
                }), s.find(".bench-team span").each(function() {
                    var e = angular.element(this);
                    c.homeTeamBenchPlayers.push(i(e.text())), e.hide()
                }), u.find(".bench-team span").each(function() {
                    var e = angular.element(this);
                    c.awayTeamBenchPlayers.push(i(e.text())), e.hide()
                });
                var d = e(angular.element('<ajax-lineup-widget data-home-or-away="\'home\'" data-field-players="homeTeamFieldPlayers" data-bench-players="homeTeamBenchPlayers"></ajax-lineup-widget>'))(c),
                    f = e(angular.element('<ajax-lineup-widget data-home-or-away="\'away\'" data-field-players="awayTeamFieldPlayers" data-bench-players="awayTeamBenchPlayers"></ajax-lineup-widget>'))(c),
                    h = s.find(".team-name"),
                    p = u.find(".team-name");
                h.after(d), p.after(f);
                var g = t.find(".field");
                s.detach(), u.detach(), s.insertBefore(g), u.insertAfter(g), r(angular.element.trim(h.text()), angular.element.trim(p.text()))
            }
            return {
                restrict: "C",
                compile: o
            }
        }

        function t(e) {
            var t = e.data(),
                n = {
                    widgetClass: t.widget,
                    params: {}
                };
            return delete t.widget, $.each(t, function(e, t) {
                0 !== e.indexOf("$") && (n.params[e] = t)
            }), n
        }

        function n(e, t) {
            $.ajax({
                url: "http://widgets.ortecsports.com/widgetify",
                crossDomain: !0,
                dataType: "jsonp",
                data: e,
                success: function(e) {
                    t(e)
                }
            })
        }

        function i(e) {
            $.each(e, function(e, t) {
                $.inArray(t, a) == -1 && ($.holdReady(!0), a.push(t), $.getScript(t, function(e, t, n) {
                    $.holdReady(!1)
                }))
            })
        }
        e.$inject = ["$compile", "$rootScope", "$timeout"], angular.module("ajax").directive("oswidget", e);
        var a = []
    }(angular.element)
}, function(e, t, n) {
    ! function() {
        "use strict";

        function e(e, t) {
            return {
                restrict: "E",
                template: n(242),
                controller: "AjaxLineupWidgetController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    fieldPlayers: "=",
                    benchPlayers: "=",
                    homeOrAway: "="
                }
            }
        }

        function t(e, t) {
            var n = this,
                i = function() {
                    n.isMobile = t.isGrid(t.GRID_MOBILE)
                };
            e.$on("cssGridEnter", i), i()
        }
        e.$inject = ["$compile", "$timeout"], t.$inject = ["$scope", "cssGrid"], angular.module("ajax").directive("ajaxLineupWidget", e).controller("AjaxLineupWidgetController", t)
    }()
}, function(e, t) {
    e.exports = '<div>\n    <section class="lineupwidget-fieldplayers">\n        <div class="lineupwidget-player" ng-repeat="player in ctrl.fieldPlayers | orderBy: ctrl.homeOrAway == \'home\' && ctrl.isMobile ? \'-\' : \'+\'">\n            <span class="lineupwidget-playernumber">{{ player.number }}</span>\n            <span class="lineupwidget-playername">{{ player.name }}</span>\n        </div>\n    </section>\n\n    <section class="lineupwidget-benchplayers">\n        <div class="lineupwidget-player" ng-repeat="player in ctrl.benchPlayers">\n            <span class="lineupwidget-playernumber">{{ player.number }}</span>\n            <span class="lineupwidget-playername">{{ player.name }}</span>\n        </div>\n    </section>\n\n</div>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t, n) {
            return {
                restrict: "A",
                scope: !0,
                link: function(i, a, r, o) {
                    function l() {
                        a.css({
                            display: "block",
                            position: "relative",
                            overflow: "hidden",
                            height: b() + "px",
                            visibility: "visible"
                        }), m.css({
                            width: a.width() + "px"
                        }), p = new e.Inflickity(a[0], {
                            slideElements: m,
                            animationDuration: 400,
                            jumpSlideThreshold: 50,
                            gridSize: a.width() + g,
                            snapOffset: 0,
                            numItems: m.length,
                            onDragEnded: c
                        }), p.setOffset(0), s(), m.eq(0).find("img").one("load", f), v = !0
                    }

                    function c(e, t, n) {
                        t && !n ? p.slideToDirection(e) : p.slideToIndex(p.getCurrentIndex())
                    }

                    function s() {
                        var e = angular.element('<button class="iconbutton iconbutton--small"><i class="icon icon--Arrow1"></i></button>'),
                            t = angular.element('<button class="iconbutton iconbutton--small"><i class="icon icon--Arrow-left"></i></button>'),
                            n = {
                                position: "absolute",
                                top: "50%",
                                "margin-top": "-3rem",
                                "font-size": "2rem",
                                outline: "none",
                                width: "3rem",
                                height: "3rem"
                            };
                        e.css(n).css({
                            right: "10px",
                            paddingLeft: "3px"
                        }), t.css(n).css({
                            left: "10px",
                            paddingRight: "4px"
                        }), a.append(e), a.append(t), e.on("click", u), t.on("click", d)
                    }

                    function u() {
                        p.slideToDirection("left")
                    }

                    function d() {
                        p.slideToDirection("right")
                    }

                    function f() {
                        a.css({
                            height: b() + "px"
                        })
                    }

                    function h() {
                        m.css({
                            width: a.width() + "px"
                        }), p.options.gridSize = a.width() + g, p.contentWidth = p.options.gridSize * p.items.length, p.jumpToIndex(p.getCurrentIndex()), f()
                    }
                    var p, g = 20,
                        m = a.find("[ajax-photo-slider-slide]"),
                        v = !1,
                        b = function() {
                            return m.toArray().reduce(function(e, t) {
                                return Math.max(e, $(t).height())
                            }, 0)
                        };
                    if (0 === m.length) return void t.warn("Photo slider: no slides found");
                    a.css({
                        visibility: "hidden"
                    }), i.$watch(b, function(e) {
                        e && !v && l()
                    });
                    var w = n.afterResize(function() {
                        h()
                    });
                    i.$on("$destroy", w)
                }
            }
        }
        e.$inject = ["$window", "$log", "resize"], angular.module("ajax").directive("ajaxPhotoSlider", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t, n, i) {
            function a(a, r) {
                function o(n, i, a) {
                    void 0 === a && (a = !1);
                    var r = i.eq(u(i)),
                        o = i.eq(n);
                    r.length && e.addClass(r, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    }), t(function() {
                        c(o)
                    }), a && s(v, 60), e.removeClass(o, "ng-hide", {
                        tempClasses: "ng-hide-animate"
                    }), l(n, i)
                }

                function l(e, t) {
                    m[0 === e || e === t.length - 1 ? "addClass" : "removeClass"]("ng-hide"), g[e >= t.length - 1 ? "addClass" : "removeClass"]("ng-hide"), g.prop("disabled", !d(e))
                }

                function c(e) {
                    function n(i) {
                        var r = e.outerHeight();
                        r > 0 ? (a.questionHeight = e.outerHeight(), i && a.$digest()) : t(n, 0, !1, i)
                    }
                    var i = e.find("img");
                    0 === i.length || i[0].complete && void 0 !== i[0].naturalHeight ? n(!1) : i.on("load", function() {
                        n(!0)
                    })
                }

                function s(e, t) {
                    void 0 === t && (t = 0);
                    var n = r.closest(".scrollable"),
                        i = e.offset().top;
                    0 === n.length ? n = r.closest("body") : i = i + n.scrollTop() - n.offset().top, i -= t, n.scrollTop() > i && n.animate({
                        scrollTop: i + "px"
                    }, 400)
                }

                function u(e) {
                    for (var t = 0, n = e.length; t < n; t++)
                        if (angular.element(e[t]).is(":not(.ng-hide)")) return t;
                    return 0
                }

                function d(e) {
                    var t = f(e);
                    return "undefined" != typeof t && "" !== t
                }

                function f(e) {
                    var t = h();
                    return a.answers[t[e]]
                }

                function h() {
                    var e = [];
                    return p.each(function(t, n) {
                        e[t] = angular.element(n).find("input, textarea").first().attr("name")
                    }), e
                }
                var p = r.find("[data-quiz-question]"),
                    g = r.children(".button--send").first(),
                    m = r.children(".button--back").first(),
                    v = r.find("[data-question-container]");
                g.length || (g = angular.element('<button class="button--send"></button>').text(i("translate")("next")).appendTo(r)), m.length || (m = angular.element('<button class="button--back"></button>').text(i("translate")("previous")).appendTo(r)), a.answers = {}, a.questionHeight = void 0, p.addClass("ng-hide"), o(0, p, !1), g.on("click", function() {
                    o(u(p) + 1, p, !0)
                }), m.on("click", function() {
                    o(u(p) - 1, p, !0)
                }), a.$watchCollection("answers", function() {
                    l(u(p), p)
                });
                var b = n.afterResize(function() {
                    c(p.eq(u(p))), a.$digest()
                });
                a.$on("$destroy", function() {
                    b()
                })
            }
            return {
                restrict: "A",
                scope: !0,
                link: a
            }
        }
        e.$inject = ["$animate", "$timeout", "resize", "$filter"], angular.module("ajax").directive("ajaxQuiz", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {}

        function t(e, t) {
            return {
                restrict: "E",
                template: '<div class="mailplus"></div>',
                transclude: !0,
                scope: {},
                controller: "AjaxMailPlusController",
                controllerAs: "ctrl",
                link: function(n, i, a, r, o) {
                    var l = o();
                    l.find(".mpDateField").each(function(e, n) {
                        var i = angular.element(n),
                            a = i.parent(),
                            r = {
                                format: "dd-mm-yyyy",
                                selectYears: 100,
                                mailPlus: {
                                    day: "#" + a.children(".mpDD").attr("id"),
                                    month: "#" + a.children(".mpMM").attr("id"),
                                    year: "#" + a.children(".mpYYYY").attr("id")
                                }
                            };
                        i.attr("ajax-date-picker", t("json")(r))
                    }), l.find("select").each(function(e, t) {
                        angular.element(t).replaceWith("<div class='select'>" + t.outerHTML + "<i class='icon icon--Arrow2'></i></div>")
                    }), l.find("[type=radio]").each(function(e, t) {
                        var n = angular.element(t),
                            i = "ctrl." + n.attr("name");
                        n.attr("ng-model", i), n.replaceWith("<div ng-class=\"{'is-selected':" + i + "== '" + n.val().replace(/'/g, "\\'") + '\'}" class="radio">' + t.outerHTML + "</div>")
                    }), l.find("[type=checkbox]").each(function(e, t) {
                        var n = angular.element(t),
                            i = "ctrl." + n.attr("name") + e;
                        n.attr("ng-model", i), n.replaceWith("<div ng-class=\"{'is-selected':" + i + '}" class="checkbox"><i class="icon icon--check"></i>' + t.outerHTML + "</div>")
                    }), i.append(l);
                    var c = "[ajax-date-picker], [ng-model], [ng-class]";
                    i.find(c).each(function() {
                        e(angular.element(this))(n)
                    })
                }
            }
        }
        t.$inject = ["$compile", "$filter"], angular.module("ajax").controller("AjaxMailPlusController", e).directive("ajaxMailPlus", t)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t, n, i) {
            function a() {
                var e = r();
                i.jsonp(c.url + "?" + e).then(function(e) {
                    t.append(e.data)
                }, function(e) {
                    throw "the call to " + e.config.url + " returned with: " + e.status + " " + e.statusText
                })
            }

            function r() {
                return Object.keys(c).splice(1).map(function(e) {
                    return e + "=" + c[e]
                }).join("&")
            }

            function o(e) {
                return void 0 === e && (e = ""), e.split("/").reverse().join("")
            }
            var l = this,
                c = {
                    url: "http://site.ajax.mobilityportal.nl/",
                    language: "nl_NL",
                    date: "",
                    method: "jsonp",
                    callback: "JSON_CALLBACK",
                    _: 1457002778837
                };
            l.$onInit = function() {
                c.date = o(l.eventDate), a()
            }
        }
        e.$inject = ["$scope", "$element", "$attrs", "$http"], angular.module("ajax").component("ajaxMobilityPortal", {
            controller: e,
            bindings: {
                eventDate: "@"
            }
        })
    }()
}, function(e, t) {
    "use strict";

    function n() {
        return {
            link: function(e, t) {
                function n() {
                    this.tiles, this.$window = $(window), this.offsets = {}, this.inviewTop = 0
                }
                var $ = angular.element;
                n.prototype = {
                    init: function() {
                        var e = this;
                        e.windowHeight = this.$window.height(), t.children().length && (e.$window = $(window), e.tiles = t.children(), e.inviewTop = e.calcInviewTop(), window.requestAnimationFrame ? (e.calcOffsets(e.tiles), e.$window.on("scroll", e.onScroll.bind(e)), window.requestAnimationFrame && window.requestAnimationFrame(e.render.bind(e))) : $.each(e.tiles, function(e, t) {
                            var n = $(t);
                            n.removeClass("is-invisible").addClass("is-visible")
                        }))
                    },
                    calcOffsets: function(e) {
                        var t = this;
                        $.each(e, function(e, n) {
                            var i = $(n);
                            t.offsets[i.offset().top] = i, i.offset().top > t.calcInviewTop() ? i.addClass("is-invisible") : i.addClass("is-visible")
                        })
                    },
                    onScroll: function(e) {
                        this.inviewTop = this.calcInviewTop()
                    },
                    calcInviewTop: function() {
                        return this.$window.scrollTop() + this.windowHeight
                    },
                    render: function() {
                        for (var e in this.offsets) this.inviewTop - 300 > parseInt(e, 10) && (this.offsets[e].removeClass("is-invisible").addClass("is-visible"), delete this.offsets[e]);
                        Object.keys(this.offsets).length && window.requestAnimationFrame(this.render.bind(this))
                    }
                };
                var i = new n;
                i.init()
            }
        }
    }
    angular.module("ajax").directive("ajaxHistoryTimeline", n)
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            function t(t, n) {
                t.articleService = e, t.$watch("articleService.activeArticle", function(e) {
                    n.css("overflow", e ? "hidden" : "")
                })
            }
            return {
                restrict: "A",
                scope: {},
                link: t
            }
        }
        e.$inject = ["articleService"], angular.module("ajax").directive("ajaxArticleNoScroll", e)
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";

        function e(e, t) {
            var n = this;
            n.articleService = t, n.selectedText = "", n.readSpeakUrl = "", n.target = "rs", e.$watch("ctrl.articleService.activeArticle", function(e) {
                n.readSpeakUrl = e ? n.articleService.getReadSpeakUrl(e) : ""
            })
        }

        function t(e, t, i) {
            return {
                restrict: "E",
                controller: "AjaxReadSpeakerController",
                controllerAs: "ctrl",
                bindToController: !0,
                template: n(250),
                link: function(n, a, r, o) {
                    function l() {
                        t(function() {
                            o.selectedText = s()
                        }, 50)
                    }

                    function c() {
                        e.open("", o.target, "width=380,height=180,toolbar=0"), t(function() {
                            a.find("form").submit()
                        }, 500)
                    }

                    function s() {
                        var t;
                        return e.document.getSelection ? t = e.document.getSelection() : e.document.all ? t = e.document.selection.createRange().text : e.getSelection && (t = e.getSelection()), "" + t
                    }
                    angular.element(e.document).on("mouseup", l), angular.element(e.document).on("keyup", l), i.onReadSpeakerRequested = c
                }
            }
        }

        function i() {
            function e() {
                t.onReadSpeakerRequested()
            }
            var t = {
                open: e,
                onReadSpeakerRequested: function() {}
            };
            return t
        }
        e.$inject = ["$scope", "articleService"], t.$inject = ["$window", "$timeout", "readSpeaker"], angular.module("ajax").controller("AjaxReadSpeakerController", e).directive("ajaxReadSpeaker", t).factory("readSpeaker", i)
    }()
}, function(e, t) {
    e.exports = '<div class="ng-hide">\n    <form action="http://app.readspeaker.com/cgi-bin/rsent" method="post" target="{{ ctrl.target }}">\n        <input type="hidden" name="selectedtext" ng-value="ctrl.selectedText">\n        <input type="hidden" name="url" ng-value="ctrl.readSpeakUrl">\n        <input type="hidden" name="customerid" value="4487">\n        <input type="hidden" name="lang" value="nl_nl">\n        <input type="hidden" name="output" value="template">\n        <ins>\n            <input type="hidden" name="swfrmsig" value="8afb6e341b4b60e644554b48710289e62a0d71a72105ee16a1f47e510c93d42cb8d87df38be3f5e133bfe4206ba301f07dcab1eea4a2ebbf8fb33c96e42528f05782288bf7811ed5cf24c1740a8b700acbca1fe32d47d92a">\n        </ins>\n    </form>\n</div>'
}, function(e, t) {
    "use strict";

    function n() {
        return i
    }
    angular.module("ajax").factory("Media", n);
    var i = function() {
        function e(t) {
            t = t || {}, this.id = t.id, this.type = t.type, this.urls = (t.urls || []).map(function(e) {
                return new a(e)
            }), this.dateString = t.dateString, this.isImage = this.type === e.TYPE_IMAGE, this.isVideo = this.type === e.TYPE_VIDEO
        }
        return e.prototype.getLargestImageMediaUrl = function() {
            var e, t = 0;
            return this.urls.forEach(function(n) {
                var i = +n.type;
                !isNaN(i) && i > t && (t = i, e = n)
            }), e
        }, e.prototype.getImageMediaUrl = function(e) {
            var t, n = Number.POSITIVE_INFINITY;
            return this.urls.forEach(function(i) {
                var a = +i.type;
                a < n && a >= e && (n = a, t = i.url)
            }), t
        }, e.prototype.getBluebillywigUrl = function() {
            if (this.type === e.TYPE_BLUE_BILLYWIG_VIDEO) return this.urls.filter(function(t) {
                return t.type === e.TYPE_BLUE_BILLYWIG_VIDEO
            })[0].url
        }, e.TYPE_IMAGE = "image", e.TYPE_VIDEO = "video", e.TYPE_BLUE_BILLYWIG_VIDEO = "bluebillywigvideo", e
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i;
    var a = function() {
        function e(e) {
            this.type = e.type, this.url = e.url, this.isVideo = "webm" === this.type || "mp4" === this.type, this.htmlType = this.isVideo ? "video/" + this.type : null
        }
        return e
    }();
    t.MediaUrl = a
}, function(e, t) {
    "use strict";
    var n = function() {
        function e(e, t, n) {
            var i = this;
            i.id = e.id, i.url = e.url, i.type = e.type, i.shareUrl = e.share_url, i.title = n.trustAsHtml(e.title), i.length = e.length, i.slug = e.slug, i.content = n.trustAsHtml(e.content), i.date = new Date(1e3 * e.date), i.tags = e.tags, i.media = e.media ? new t(e.media) : null, i.avatar = e.avatar ? new t(e.avatar) : null, i.username = e.username, i.href = e.href, i.head = e.head, i.isProtected = !!e.protected, i.isAuthorized = e.isAuthorized, i.isVideo = "wmavideomediaitem" === e.type, i.isAudio = "audio" === e.type, i.isTwitter = "twitter" === e.type, i.isInstagram = "instagram" === e.type, i.inStadionContent = !!e.inStadionContent
        }
        return e
    }();
    t.Article = n;
    var i = function() {
        function e(e, t) {
            this.Media = e, this.$sce = t
        }
        return e.prototype.create = function(e) {
            return new n(e, this.Media, this.$sce)
        }, e.$inject = ["Media", "$sce"], e
    }();
    t.ArticleFactory = i, angular.module("ajax").service("articleFactory", i)
}, function(e, t, n) {
    ! function() {
        "use strict";
        angular.module("ajax").component("ajaxHero", {
            template: n(254),
            bindings: {
                type: "@",
                title: "@",
                subtitle: "@",
                ctaText: "@",
                ctaUrl: "@",
                image: "@",
                mobileImage: "@"
            }
        })
    }()
}, function(e, t) {
    e.exports = '<header ajax-hero-scroll\n        class="hero"\n        ng-class="{\n            \'hero--small\': $ctrl.type === \'small\',\n            \'hero--overlay\': $ctrl.image\n        }"\n        ng-style="$ctrl.image && {\'background-image\': \'url(\' + $ctrl.image + \')\'}">\n\n    <!-- Include hero image as img tag for SEO -->\n    <img class="hero__image seo-image"\n         alt="Hero"\n         ng-src="{{$ctrl.image}}"\n         ng-attr-srcset="{{$ctrl.image}} 1920w, {{$ctrl.mobileImage}} 480w" />\n\n    <!-- Content: title, subtitle and call to action -->\n    <div class="hero__content l-wrap">\n        <div class="l-padding">\n            <h1 class="hero__title"\n                ng-if="$ctrl.title">{{$ctrl.title}}</h1>\n            <h2 class="hero__subtitle"\n                ng-if="$ctrl.subtitle">{{$ctrl.subtitle}}</h2>\n            <a class="hero__button button--standardlinkred"\n               href="{{$ctrl.ctaUrl}}"\n               ng-if="$ctrl.ctaText && $ctrl.ctaUrl">\n                {{ $ctrl.ctaText }}\n                <i class="icon icon--Arrow1"></i>\n            </a>\n        </div>\n    </div>\n\n    <!-- Bottom corner -->\n    <!-- For each resolution a different SVG -->\n    <svg class="hero__corner hero__corner--mobile"\n         viewBox="0 0 320 23">\n        <g transform="translate(0.000000, -257.000000)" fill="#FFFFFF">\n            <path d="M320,257 L320,280 C106,280 0,280 -5,280 C103,270 210,263 320,257 Z"></path>\n        </g>\n    </svg>\n    <svg class="hero__corner hero__corner--desktop"\n         viewBox="0 0 1440 72">\n        <g transform="translate(0.000000, -584.000000)" fill="#FFFFFF">\n            <path d="M1440,584 C1440,588 1440,612 1440,656 L0,656 C679,613 1159,589 1440,584 Z"></path>\n        </g>\n    </svg>\n    <svg class="hero__corner hero__corner--fullhd"\n         viewBox="0 0 1920 88">\n        <g transform="translate(0.000000, -568.000000)" fill="#FFFFFF">\n            <path d="M1920,568 L1920,656 C640.2632,656 0,656 0,656 C640,619 1280,589 1920,568 Z"></path>\n        </g>\n    </svg>\n    <svg class="hero__corner hero__corner--retina"\n         viewBox="0 0 2560 98">\n        <g transform="translate(0.000000, -558.000000)" fill="#FFFFFF">\n            <path d="M2560,558 L2560,656 C853,656 0,656 0,656 C853,599 1706,566 2560,558 Z"></path>\n        </g>\n    </svg>\n\n</header>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                link: t
            }
        }

        function t(e, t) {
            function n() {
                var e = a.outerHeight(),
                    t = $(window).scrollTop(),
                    n = (e - t) / e;
                if (t < e) {
                    var u = i(10, 17, 23, e, t),
                        d = i(43, 67, 72, e, t),
                        f = i(37, 67, 88, e, t),
                        h = i(57, 90, 98, e, t);
                    r.css("opacity", n), o.attr("d", "M320,257 L320,280 C106,280 0,280 -5,280 C103," + (270 + u.x1) + " 210," + (263 + u.x2) + " 320," + (257 + u.x3) + " Z"), l.attr("d", "M1440,584 C1440,588 1440,612 1440,656 L0,656 C679," + (613 + d.x1) + " 1159," + (589 + d.x2) + " 1440," + (584 + d.x3) + " Z"), c.attr("d", "M1920,568 L1920,656 C640.2632,656 0,656 0,656 C640," + (619 + f.x1) + " 1280," + (589 + f.x2) + " 1920," + (568 + f.x3) + " Z"), s.attr("d", "M2560,558 L2560,656 C853,656 0,656 0,656 C853," + (599 + h.x1) + " 1706," + (566 + h.x2) + " 2560," + (558 + h.x3) + " Z")
                }
            }

            function i(e, t, n, i, a) {
                return {
                    x1: Math.round(a / i * e),
                    x2: Math.round(a / i * t),
                    x3: Math.round(a / i * n)
                }
            }
            var a = $(t),
                r = a.find(".hero__content"),
                o = a.find(".hero__corner--mobile path"),
                l = a.find(".hero__corner--desktop path"),
                c = a.find(".hero__corner--fullhd path"),
                s = a.find(".hero__corner--retina path");
            window.addEventListener("scroll", n), e.$on("$destroy", function() {
                window.removeEventListener("scroll", n)
            })
        }
        angular.module("ajax").directive("ajaxHeroScroll", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "AC",
                link: t,
                controller: n,
                bindToController: !0
            }
        }

        function t(e, t, n, i) {
            function a() {
                var e = o.offset().top,
                    t = $(window).scrollTop();
                t < e ? o.css("transform", "translate3d(0," + t / e * i.maxVal + "px, 0)") : o.css("transform", "translate3d(0," + i.maxVal + "px, 0)")
            }

            function r() {
                var e = $(window).width(),
                    t = e > 900,
                    n = e <= 900 && e > 600,
                    a = e <= 600;
                t && (i.maxVal = 120), n && (i.maxVal = 60), a && (i.maxVal = 30)
            }
            var o = $(t);
            window.addEventListener("scroll", a), window.addEventListener("resize", r), e.$on("$destroy", function() {
                window.removeEventListener("scroll", a), window.removeEventListener("resize", r)
            }), r()
        }

        function n() {}
        angular.module("ajax").directive("ajaxParallaxScroll", e)
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";
        angular.module("ajax").component("ajaxMatchCard", {
            template: n(258),
            bindings: {
                bigTitle: "@",
                clubLeftName: "@",
                clubLeftImage: "@",
                clubRightName: "@",
                clubRightImage: "@",
                date: "@",
                inlineButtonText: "@",
                inlineButtonUrl: "@",
                primaryButtonText: "@",
                primaryButtonUrl: "@",
                secondaryButtonText: "@",
                secondaryButtonUrl: "@",
                showDash: "<",
                size: "@",
                scoreLeft: "@",
                scoreRight: "@",
                subtitle: "@"
            }
        })
    }()
}, function(e, t) {
    e.exports = '<div class="match-card match-card--{{ $ctrl.size }}"\n     ng-init="\n        $ctrl.hasScore = $ctrl.scoreLeft && $ctrl.scoreRight;\n        $ctrl.hasPrimaryButton = $ctrl.primaryButtonUrl && $ctrl.primaryButtonText;\n        $ctrl.hasSecondaryButton = $ctrl.secondaryButtonUrl && $ctrl.secondaryButtonText;\n        $ctrl.hasInlineButton = $ctrl.inlineButtonUrl && $ctrl.inlineButtonText;\n    ">\n\n    <!-- Big title used in overview block -->\n    <h3 class="match-card__title l-contentcenter l-cell100"\n        ng-if="$ctrl.bigTitle">{{ $ctrl.bigTitle }}</h3>\n\n    <!-- Subtitle and date size is set to small -->\n    <div class="match-card__small-copy l-contentcenter l-cell100"\n         ng-if="$ctrl.size === \'s\'">\n        <h4 class="match-card__subtitle"\n            ng-if="$ctrl.subtitle">{{ $ctrl.subtitle }}</h4>\n        <time class="match-card__text"\n              ng-if="$ctrl.date">{{ $ctrl.date }}</time>\n    </div>\n\n    <article class="match-card__body l-cell100">\n        <div class="match-card__club l-contentcenter">\n            <img class="match-card__image"\n                 ng-class="{\'match-card__image--small\': $ctrl.size === \'s\'}"\n                 ng-src="{{ $ctrl.clubLeftImage }}"\n                 ng-if="$ctrl.clubLeftImage"\n                 alt="{{ $ctrl.clubLeftName }}" />\n            <p class="match-card__club-name"\n               ng-if="$ctrl.hasScore || $ctrl.showDash">{{ $ctrl.clubLeftName }}</p>\n        </div>\n        <div class="l-contentcenter"\n             ng-if="$ctrl.size === \'m\'">\n            <h4 class="match-card__subtitle"\n                ng-if="$ctrl.subtitle">{{ $ctrl.subtitle }}</h4>\n            <time class="match-card__text match-card__text--bold"\n                  ng-if="$ctrl.date">{{ $ctrl.date }}</time>\n            <p class="match-card__text"\n               ng-if="$ctrl.clubLeftName && $ctrl.clubRightName"\n               ng-hide="$ctrl.hasScore || $ctrl.showDash">\n                {{ $ctrl.clubLeftName }} - {{ $ctrl.clubRightName }}\n            </p>\n            <p class="match-card__score"\n               ng-if="$ctrl.hasScore">\n                {{ $ctrl.scoreLeft }} <span class="opacity-50">:</span> {{ $ctrl.scoreRight }}\n            </p>\n            <p class="match-card__score match-card__score--dash opacity-50"\n               ng-if="$ctrl.showDash">-</p>\n            <div class="l-tpadding2 lm-hide"\n                 style="font-size: 0;"\n                 ng-if="$ctrl.hasInlineButton">\n                <a class="match-card__button button--standardlinkred lm-hide"\n                   href="{{ $ctrl.inlineButtonUrl }}">\n                    {{ $ctrl.inlineButtonText }}\n                    <i class="icon icon--Arrow1"></i>\n                </a>\n            </div>\n        </div>\n        <div ng-if="$ctrl.size === \'s\'">\n            <p class="match-card__score match-card__score--s"\n               ng-if="$ctrl.hasScore">\n                {{ $ctrl.scoreLeft }} <span class="opacity-50">:</span> {{ $ctrl.scoreRight }}\n            </p>\n            <p class="match-card__score match-card__score--s opacity-50"\n               ng-if="$ctrl.showDash">-</p>\n        </div>\n        <div class="match-card__club l-contentcenter">\n            <img class="match-card__image"\n                 ng-class="{\'match-card__image--small\': $ctrl.size === \'s\'}"\n                 ng-src="{{ $ctrl.clubRightImage }}"\n                 ng-if="$ctrl.clubRightImage"\n                 alt="{{ $ctrl.clubRightName }}" />\n            <p class="match-card__club-name"\n               ng-if="$ctrl.hasScore || $ctrl.showDash">{{ $ctrl.clubRightName }}</p>\n        </div>\n    </article>\n\n    <footer class="match-card__footer l-cell100"\n            ng-if="$ctrl.hasPrimaryButton || $ctrl.hasSecondaryButton || $ctrl.hasInlineButton">\n        <div class="ld-hide lt-hide l-cell100 l-contentcenter l-tpadding"\n             ng-if="$ctrl.hasInlineButton">\n            <a class="match-card__button button--standardlinkred lm-cell100"\n               href="{{ $ctrl.inlineButtonUrl }}">\n                {{ $ctrl.inlineButtonText }}\n                <i class="icon icon--Arrow1"></i>\n            </a>\n        </div>\n        <div class="l-cell100 l-contentcenter l-tpadding"\n             ng-if="$ctrl.hasPrimaryButton">\n            <a class="match-card__button button--standardlinkred lm-cell100"\n               href="{{ $ctrl.primaryButtonUrl }}">\n                {{ $ctrl.primaryButtonText }}\n                <i class="icon icon--Arrow1"></i>\n            </a>\n        </div>\n        <div class="l-cell100 l-contentcenter l-tpadding"\n             ng-if="$ctrl.hasSecondaryButton">\n            <a class="match-card__button button--standardlinkwhite lm-cell100"\n               href="{{ $ctrl.secondaryButtonUrl }}">\n                {{ $ctrl.secondaryButtonText }}\n                <i class="icon icon--Arrow1"></i>\n            </a>\n        </div>\n    </footer>\n</div>'
}, function(e, t, n) {
    ! function() {
        "use strict";
        angular.module("ajax").component("ajaxNavigationItem", {
            template: n(260),
            bindings: {
                type: "@",
                text: "@",
                url: "@"
            },
            transclude: !0
        })
    }()
}, function(e, t) {
    e.exports = '<!-- Normal link button -->\n<a class="navigation-item"\n   href="{{ $ctrl.url }}"\n   ng-if="$ctrl.type === \'link\'">{{ $ctrl.text }}</a>\n\n<!-- Select navigation -->\n<div class="navigation-item-select"\n     ng-if="$ctrl.type === \'dropdown\'">\n    <select ajax-select-nav\n            title="{{ $ctrl.text }}"\n            class="navigation-item"\n            ng-transclude></select>\n    <div class="navigation-item__icon"></div>\n</div>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                link: t
            }
        }

        function t(e, t) {
            function n(e) {
                var t = e.target.value;
                "0" !== t && (location.href = t)
            }
            var i = $(t);
            i.on("change", n)
        }
        angular.module("ajax").directive("ajaxSelectNav", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "AC",
                controller: n,
                controllerAs: "$ctrl",
                bindToController: !0,
                link: t
            }
        }

        function t(e, t, n, i) {
            var a = $(t);
            a.on("click", function(e) {
                e.preventDefault();
                var t = a.attr("href"),
                    n = t + "?channel=json";
                i.articleService.loadArticle(n).then(function(e) {
                    i.articleService.activeArticle = e, i.articleService.showArticle = !0
                })
            })
        }

        function n(e) {
            var t = this;
            t.articleService = e
        }
        n.$inject = ["articleService"], angular.module("ajax").directive("ajaxPopupLink", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            function n() {
                e.location.href = "http://www.facebook.com/share.php?u=" + e.location.href
            }

            function i() {
                e.location.href = "https://plus.google.com/share?url=" + e.location.href
            }

            function a(e, t) {
                if (t.createTextRange) {
                    var n = t.createTextRange();
                    return n.moveToElementText(e), n.select(), n.execCommand("Copy")
                }
                if (window.getSelection && document.createRange) {
                    var i = e.contentEditable,
                        a = e.readOnly;
                    e.contentEditable = !0, e.readOnly = !1;
                    var r = document.createRange();
                    r.selectNodeContents(e);
                    var o = window.getSelection();
                    if (o.removeAllRanges(), o.addRange(r), "TEXTAREA" != e.nodeName && "INPUT" != e.nodeName || e.select(), e.setSelectionRange && navigator.userAgent.match(/ipad|ipod|iphone/i) && e.setSelectionRange(0, 999999), e.contentEditable = i, e.readOnly = a, document.queryCommandSupported("copy")) return document.execCommand("copy")
                }
            }

            function r(t) {
                e.location.href = "http://twitter.com/share?url=" + e.location.href + "&text=" + t
            }

            function o() {
                e.location.href = "whatsapp://send?text=" + e.location.href
            }

            function l() {
                var n = e.document.createElement("input");
                n.setAttribute("value", e.location.href), e.document.body.appendChild(n), n.select();
                var i;
                try {
                    i = a(n, document.body)
                } catch (e) {
                    i = !1
                } finally {
                    e.document.body.removeChild(n)
                }
                e.alert(i ? t("translate")("urlCopySuccess") : t("translate")("urlCopyFail"))
            }
            return {
                shareToFacebook: n,
                shareToTwitter: r,
                shareToGooglePlus: i,
                shareToWhatsapp: o,
                copyCurrentUrl: l
            }
        }
        e.$inject = ["$window", "$filter"], angular.module("ajax").factory("socialService", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";
        angular.module("ajax").filter("translate", ["translateService", "$parse", "$interpolate", function(e, t, n) {
            var i = function(i, a, r) {
                if ("string" == typeof i) {
                    var o;
                    if (o = e.getTranslation(i)) {
                        if (angular.isObject(a) || (a = t(a)(r) || {}), o.match(/\{\{linkStart\}\}/) && o.match(/\{\{linkEnd\}\}/)) {
                            var l = e.getTranslation(i + ".href").replace(/\s/g, "");
                            a.linkStart = l.match(/^(ftp|http|https):\/\//) ? '<a href="' + l + '" target="_blank">' : "<a href>", a.linkEnd = "</a>"
                        }
                        o = n(o)(a)
                    }
                    return o
                }
            };
            return i.$stateful = !0, i
        }])
    }()
}, function(e, t, n) {
    ! function() {
        "use strict";
        var e = function() {
            function e() {
                this.fallbackString = " ", this.$get = ["$log", "$http", "$templateCache", "$q", function(e, t, i, a) {
                    var r, o = this,
                        l = !1;
                    return {
                        getTranslation: function(e) {
                            var t;
                            return l && (t = angular.isObject(r) && r[e] ? r[e] : o.fallbackString), t
                        },
                        isLoaded: function() {
                            return !!l
                        },
                        loadTranslation: function(e) {
                            return a(function(t, i) {
                                try {
                                    var a = n(266)("./" + e + ".json");
                                    r = a, l = !0, t(a)
                                } catch (e) {
                                    i("could not load translation")
                                }
                            })
                        },
                        loadTranslations: function() {
                            var t = this;
                            o.translation ? t.loadTranslation(o.translation).catch(function(n) {
                                e.warn("Failed to load translation " + o.translation), o.fallbackTranslation ? t.loadTranslation(o.fallbackTranslation).catch(function(t) {
                                    e.warn("Failed to load fallback translation " + o.fallbackTranslation)
                                }).finally(function() {
                                    l = !0
                                }) : l = !0
                            }) : l = !0
                        }
                    }
                }], this.$get.$inject = ["$log", "$http", "$templateCache", "$q"]
            }
            return e.prototype.setTranslation = function(e) {
                this.translation = e
            }, e.prototype.setFallbackTranslation = function(e) {
                this.fallbackTranslation = e
            }, e.prototype.setFallbackString = function(e) {
                this.fallbackString = e
            }, e
        }();
        angular.module("ajax").provider("translateService", e)
    }()
}, function(e, t, n) {
    function i(e) {
        return n(a(e))
    }

    function a(e) {
        return r[e] || function() {
            throw new Error("Cannot find module '" + e + "'.")
        }()
    }
    var r = {
        "./en-gb.json": 211,
        "./es-es.json": 212,
        "./nl-nl.json": 213
    };
    i.keys = function() {
        return Object.keys(r)
    }, i.resolve = a, e.exports = i, i.id = 266
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            function t() {
                u = new Date, d = l(u), f = new Date, f.setDate(f.getDate() - 1), h = l(f)
            }

            function n(t) {
                return e("translate")("match_date", {
                    date: t
                })
            }

            function i(t) {
                var n = l(t);
                return n === d ? e("translate")("today") : n === h ? e("translate")("yesterday") : n
            }

            function a(t) {
                return r(t) ? e("translate")("last_week") : e("translate")("week_of", {
                    date: t
                })
            }

            function r(e) {
                var t = c(u, e);
                return t <= -7 && t > -14
            }

            function o(e) {
                return e || (e = 0), [String("00" + Math.floor(e / 60)).slice(-2), String("00" + e % 60).slice(-2)].join(":")
            }

            function l(t) {
                return e("date")(t, "longDate")
            }

            function c(e, t) {
                var n = Date.UTC(e.getFullYear(), e.getMonth(), e.getDate()),
                    i = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate());
                return Math.floor((i - n) / 864e5)
            }

            function s(e) {
                var t = new Date(e.getTime());
                t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                var n = new Date(t.getFullYear(), 0, 4);
                return 1 + Math.round(((t.getTime() - n.getTime()) / 864e5 - 3 + (n.getDay() + 6) % 7) / 7)
            }
            var u, d, f, h;
            return t(), {
                humanizeMatchDate: n,
                humanizeDate: i,
                humanizeWeek: a,
                humanizeSeconds: o,
                dateDiffInDays: c,
                formatDate: l,
                getWeekNumber: s
            }
        }

        function t(e) {
            return function(t) {
                return e.humanizeMatchDate(t)
            }
        }

        function n(e) {
            return function(t) {
                return e.humanizeDate(t)
            }
        }

        function i(e) {
            return function(t) {
                return e.humanizeWeek(t)
            }
        }

        function a(e) {
            return function(t) {
                return e.humanizeSeconds(t)
            }
        }
        e.$inject = ["$filter"], n.$inject = ["dateTimeService"], t.$inject = ["dateTimeService"], a.$inject = ["dateTimeService"], i.$inject = ["dateTimeService"], angular.module("ajax").factory("dateTimeService", e).filter("humanizeDate", n).filter("humanizeMatchDate", t).filter("humanizeSeconds", a).filter("humanizeWeek", i)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            function n(e, t) {
                t = t || 0;
                for (var n = {
                        fn: e,
                        priority: t
                    }, a = l.length, r = 0; r < l.length; r++)
                    if (l[r].priority < n.priority) {
                        a = r;
                        break
                    }
                return l.splice(a, 0, n),
                    function() {
                        i(e)
                    }
            }

            function i(e) {
                for (var t = 0; t < l.length; t++)
                    if (l[t].fn === e) return void l.splice(t, 1)
            }

            function a(e, t) {
                l.forEach(function(n) {
                    n.fn.call(t, e)
                })
            }
            var r, o = 500,
                l = [];
            return angular.element(e).on("resize", function(e) {
                t.cancel(r), r = t(a, o, !1, e, this)
            }), {
                afterResize: n
            }
        }
        e.$inject = ["$window", "$timeout"], angular.module("ajax").factory("resize", e)
    }()
}, function(e, t) {
    "use strict";
    var n = function() {
        function e(e, t, n, i) {
            this.articleFactory = e, this.$http = t, this.$q = n, this.urlService = i
        }
        return e.$inject = ["articleFactory", "$http", "$q", "urlService"], e.prototype.loadArticle = function(e) {
            var t = this.$q.defer(),
                n = this;
            return this.$http.get(e).success(function(e) {
                e.code && 200 === e.code ? (n.activeArticle = n.articleFactory.create(e.data), t.resolve(n.activeArticle)) : t.reject()
            }).error(function() {
                t.reject()
            }), t.promise
        }, e.prototype.getPrintUrl = function() {
            return this.urlService.setQueryString(this.activeArticle.url, {
                content: "true",
                print: "true",
                channel: null
            })
        }, e.prototype.getReadSpeakUrl = function(e) {
            return this.urlService.setQueryString(e.url, {
                content: "true",
                channel: null
            })
        }, e
    }();
    t.ArticleService = n, angular.module("ajax").service("articleService", n)
}, function(e, t) {
    "use strict";
    var n = function() {
        function e() {}
        return e.prototype.setQueryString = function(e, t) {
            var n, i = e.indexOf("?");
            i >= 0 ? (n = e.substr(i + 1), e = e.substr(0, i)) : n = "";
            var a = angular.extend(this.parseQueryString(n), t);
            return e + this.paramsToQueryString(a)
        }, e.prototype.parseQueryString = function(e) {
            var t = e.split("&"),
                n = {};
            return t.forEach(function(e) {
                var t = e.split("=");
                n[t[0]] = t[1]
            }), n
        }, e.prototype.paramsToQueryString = function(e) {
            var t = "?";
            return angular.forEach(e, function(e, n) {
                null !== e && (t += n + "=" + e + "&")
            }), t.substr(0, t.length - 1)
        }, e
    }();
    t.UrlService = n, angular.module("ajax").service("urlService", n)
}, function(e, t) {
    ! function() {
        "use strict";
        angular.module("ajax.homepage", [])
    }()
}, function(e, t) {
    ! function() {
        "use strict";
        angular.module("ajax.matchday", [])
    }()
}]));
//# sourceMappingURL=ajax.4434348115668bda9230.js.map