! function(e) {
    function t(i) {
        if (r[i]) return r[i].exports;
        var n = r[i] = {
            exports: {},
            id: i,
            loaded: !1
        };
        return e[i].call(n.exports, n, n.exports, t), n.loaded = !0, n.exports
    }
    var r = {};
    return t.m = e, t.c = r, t.p = "/", t(0)
}([function(e, t, r) {
    "use strict";
    r(273), r(276), r(277), r(278), r(287), r(289), r(291), r(293), r(295), r(296), r(298), r(300), r(302), r(303), r(304), r(306), r(308), r(310), r(311), r(313), r(285), r(314), r(315), r(316), r(317), r(318), r(319), r(320), r(321), r(322), r(323), r(324), r(325), r(326), r(327), r(328), r(329), r(342), r(343), r(344), r(329), r(345), r(346), r(347), r(348), r(349), r(350)
}, , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , , function(e, t) {
    "use strict";

    function r() {
        return i
    }
    angular.module("ajax").factory("Media", r);
    var i = function() {
        function e(t) {
            t = t || {}, this.id = t.id, this.type = t.type, this.urls = (t.urls || []).map(function(e) {
                return new n(e)
            }), this.dateString = t.dateString, this.isImage = this.type === e.TYPE_IMAGE, this.isVideo = this.type === e.TYPE_VIDEO
        }
        return e.prototype.getLargestImageMediaUrl = function() {
            var e, t = 0;
            return this.urls.forEach(function(r) {
                var i = +r.type;
                !isNaN(i) && i > t && (t = i, e = r)
            }), e
        }, e.prototype.getImageMediaUrl = function(e) {
            var t, r = Number.POSITIVE_INFINITY;
            return this.urls.forEach(function(i) {
                var n = +i.type;
                n < r && n >= e && (r = n, t = i.url)
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
    var n = function() {
        function e(e) {
            this.type = e.type, this.url = e.url, this.isVideo = "webm" === this.type || "mp4" === this.type, this.htmlType = this.isVideo ? "video/" + this.type : null
        }
        return e
    }();
    t.MediaUrl = n
}, , , , , , , , , , , , , , , , , , , , , , function(e, t, r) {
    ! function() {
        "use strict";

        function e(e, t, i) {
            var n = location.href,
                a = !(!window.history || !history.pushState),
                o = ".htm",
                c = (l = {
                    "/web/show": "home"
                }, l["/home" + o] = "home", l);
            a && e.html5Mode(!0), i.state("home", {
                url: "/",
                template: r(274)
            }).state("home.stream", {
                url: "^/streams/{streamSlug}" + o,
                reloadOnSearch: !0
            }).state("home.stream.article", {
                url: "^/streams/{streamSlug}/{articleSlug}" + o
            }).state("story", {
                url: "/story/hashtag-{storySlug}" + o + "?stream",
                template: r(275),
                hideLogos: !0
            }).state("story.article", {
                url: "^/story/hashtag-{storySlug}/{articleSlug}" + o + "?stream",
                hideLogos: !0
            }), t.when("", "/"), t.otherwise(function(e, t) {
                var r = e.get("$state");
                for (var i in c)
                    if (c.hasOwnProperty(i) && t.path() === i) return void r.go(c[i]);
                n !== location.href && (location.href = t.url())
            });
            var l
        }

        function t(e, t, r) {
            e.uiParams = {
                hideLogos: !1
            }, e.$on("$stateChangeStart", function(i, n) {
                "home" === n.name && (r.getDefaultChannel().then(function(e) {
                    t.go("home.stream", {
                        streamSlug: e.slug
                    })
                }), e.menu.showMenu = !1)
            }), e.$on("$stateChangeSuccess", function(t, r) {
                e.uiParams.hideLogos = !!r.hideLogos
            })
        }
        e.$inject = ["$locationProvider", "$urlRouterProvider", "$stateProvider"], t.$inject = ["$rootScope", "$state", "channelService"], angular.module("ajax.homepage").config(e).run(t)
    }()
}, function(e, t) {
    e.exports = '<ajax-hero-carousel></ajax-hero-carousel>\n<ajax-stream-nav carousel-id="heroCarousel"></ajax-stream-nav>\n\n<ajax-stream-carousel carousel-id="heroCarousel" id="streams"></ajax-stream-carousel>\n\n<ajax-home-article-popup></ajax-home-article-popup>\n\n<ajax-read-speaker></ajax-read-speaker>'
}, function(e, t) {
    e.exports = '<ajax-menu-bar has-filter="no" show-always="yes" hide-alert-message="yes"></ajax-menu-bar>\n\n<ajax-story-stream></ajax-story-stream>\n\n<ajax-css-grid></ajax-css-grid>\n\n<ajax-home-article-popup></ajax-home-article-popup>\n\n<ajax-read-speaker></ajax-read-speaker>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            e.resourceUrlWhitelist(["self", "http://apolonia.al/**", "http://www.apolonia.al/**", "https://apolonia.al/**", "https://www.apolonia.al/**"])
        }
        e.$inject = ["$sceDelegateProvider"], angular.module("ajax.homepage").config(e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";
        angular.module("ajax.homepage").constant("CONSTANTS", {
            api: {
                prefix: ""
            },
            articles: {
                slice: {
                    size: 50
                }
            }
        })
    }()
}, function(e, t, r) {
    "use strict";
    r(279), r(280), r(281), r(282), r(283), r(284);
    var i = r(285);
    ! function() {
        function e(e, t, r, i, n, a, o) {
            var c = this;
            c.userService = o, c.streamSlug = t.streamSlug || t.stream, c.imageUrl = void 0, c.open = function(e) {
                return n.openArticle(e)
            }, c.openSlug = function(e, t) {
                return a.openArticle(e, t)
            }, c.onInit = function() {
                function e() {
                    c.streamCtrl.isActive && (t(), n())
                }

                function t() {
                    c.imageUrl = c.articlePreview.thumbnail ? c.articlePreview.thumbnail.urls[0].url : ""
                }
                if (c.streamCtrl) {
                    if (c.articlePreview.thumbnail) {
                        var n = r.$on("ajaxStreamNav.change", function() {
                            i(e)
                        });
                        e()
                    }
                } else t()
            }
        }

        function t(e, t) {
            function n(r, n, a, o) {
                r.ctrl.streamCtrl = o, r.ctrl.articlePreview.content && (t(function() {
                    e(n.find(".apihtml").contents())(r)
                }), r.ctrl.articlePreview.type === i.default.TYPE_PROMO && r.$on("$destroy", function() {
                    r.ctrl.articlePreview.setContent(n.find(".apihtml").html())
                })), r.ctrl.onInit()
            }
            return {
                restrict: "E",
                template: r(286),
                controller: "AjaxArticlePreviewController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    columns: "=",
                    articlePreview: "=",
                    immediatelyLoadThumbnail: "@",
                    isRelatedArticle: "@"
                },
                require: "^^?ajaxStream",
                link: n
            }
        }
        e.$inject = ["$window", "$stateParams", "$scope", "$timeout", "articlePreviewService", "homeArticleService", "userService"], t.$inject = ["$compile", "$timeout"], angular.module("ajax.homepage").controller("AjaxArticlePreviewController", e).directive("ajaxArticlePreview", t)
    }()
}, function(e, t) {
    var r, i = window.angular;
    try {
        r = i.module(["ajax.homepage"])
    } catch (e) {
        r = i.module("ajax.homepage", [])
    }
    var n = '<article class="l-cell100 articlepreview articlepreview--col1" ng-class="::{\n            \'articlepreview--mobilelarger\': !ctrl.isRelatedArticle,\n            \'articlepreview--mobilesmaller\': ctrl.isRelatedArticle,\n            \'articlepreview--twitter\': ctrl.articlePreview.isTwitter && !ctrl.articlePreview.thumbnail,\n            \'articlepreview--twitterimg\': ctrl.articlePreview.isTwitter && ctrl.articlePreview.thumbnail,\n            \'articlepreview--instagram\': ctrl.articlePreview.isInstagram}"> <div class="articlepreview-socialheader" ng-if="::ctrl.articlePreview.isTwitter || ctrl.articlePreview.isInstagram" ng-class="::{\'lm-hide\': ctrl.isRelatedArticle}"> <div class="articlepreview-socialavatar" ajax-lazy-loaded-background="::ctrl.articlePreview.avatar.urls[0].url"></div> <h4 class="articlepreview-socialusername">{{ ::ctrl.articlePreview.username }}</h4> <i class="articlepreview-socialicon icon" ng-class="::{\'icon--Twitter\': ctrl.articlePreview.isTwitter, \'icon--InstagramCopy\': ctrl.articlePreview.isInstagram}"></i> </div> <a class="articlepreview-link" ng-click="ctrl.open(ctrl.articlePreview);"> <div class="articlepreview-thumbnail" ng-if="::ctrl.articlePreview.thumbnail && !ctrl.articlePreview.isPlayer" ajax-trigger-lazy-loaded-background="ctrl.immediatelyLoadThumbnail" ajax-lazy-loaded-background="::ctrl.articlePreview.thumbnail.urls[0].url"> <div class="articlepreview-thumbnailoverlay"></div> </div> <div class="articlepreview-content"> <div class="articlepreview-typeordate articlepreview-typeordate--inline" ng-class="::{\'lm-hide\': ctrl.isRelatedArticle}" ng-if="::ctrl.articlePreview.isTwitter && ctrl.articlePreview.thumbnail"> {{ ::ctrl.articlePreview.date | humanizeDate }} </div> <div class="articlepreview-titlewrapper" ng-if="::!ctrl.articlePreview.isInstagram"> <h3 class="articlepreview-title">{{::ctrl.articlePreview.title}}</h3> </div> <div class="articlepreview-typeordate" ng-class="::{\'lm-hide\': ctrl.isRelatedArticle}" ng-if="::ctrl.articlePreview.isTwitter && !ctrl.articlePreview.thumbnail"> {{ ::ctrl.articlePreview.date | humanizeDate }} </div> </div> </a> </article>';
    r.run(["$templateCache", function(e) {
        e.put("js/homepage/components/ajax-article-preview-social.directive.html", n)
    }]), e.exports = n
}, function(e, t) {
    var r, i = window.angular;
    try {
        r = i.module(["ajax.homepage"])
    } catch (e) {
        r = i.module("ajax.homepage", [])
    }
    var n = '<article class="l-cell100 articlepreview articlepreview--col1 articlepreview--player" ng-class="::{\n            \'articlepreview--mobilelarger\': !ctrl.isRelatedArticle,\n            \'articlepreview--mobilesmaller\': ctrl.isRelatedArticle}"> <a class="articlepreview-link" ng-click="ctrl.open(ctrl.articlePreview);"> <div class="articlepreview-playerbackground"> <div class="articlepreview-playeravatar" ajax-lazy-loaded-background="ctrl.articlePreview.thumbnail.urls[0].url"> </div> </div> <div class="articlepreview-content"> <div class="articlepreview-jerseynumber"> {{ ::ctrl.articlePreview.jerseyNumber }} </div> <div class="articlepreview-titlewrapper"> <h3 class="articlepreview-title">{{::ctrl.articlePreview.title}}</h3> <span class="articlepreview-subtitle"> {{ ::ctrl.articlePreview.subtitle }} </span> </div> </div> </a> </article>';
    r.run(["$templateCache", function(e) {
        e.put("js/homepage/components/ajax-article-preview-player.directive.html", n)
    }]), e.exports = n
}, function(e, t) {
    var r, i = window.angular;
    try {
        r = i.module(["ajax.homepage"])
    } catch (e) {
        r = i.module("ajax.homepage", [])
    }
    var n = '<article class="l-cell100 articlepreview articlepreview--promotional articlepreview--col1" ng-class="::{\n            \'articlepreview--mobilelarger\': !ctrl.isRelatedArticle,\n            \'articlepreview--mobilesmaller\': ctrl.isRelatedArticle}"> <div class="apihtml articlepreview-html" ng-if="::ctrl.articlePreview.content" ng-bind-html="::ctrl.articlePreview.content"> </div> </article>';
    r.run(["$templateCache", function(e) {
        e.put("js/homepage/components/ajax-article-preview-promotional.directive.html", n)
    }]), e.exports = n
}, function(e, t) {
    var r, i = window.angular;
    try {
        r = i.module(["ajax.homepage"])
    } catch (e) {
        r = i.module("ajax.homepage", [])
    }
    var n = '<article class="l-cell100 articlepreview articlepreview--match articlepreview--col1" ng-class="::{\'articlepreview--mobilesmaller\': ctrl.isRelatedArticle}"> <div class="articlepreview-thumbnail" ng-if="::ctrl.articlePreview.thumbnail" ajax-trigger-lazy-loaded-background="ctrl.immediatelyLoadThumbnail" ajax-lazy-loaded-background="ctrl.articlePreview.thumbnail.urls[0].url"> <h2 class="articlepreview-matchtitle"> {{ ::ctrl.articlePreview.title }} </h2> </div> <div class="articlepreview-content"> <div class="articlepreview-typeordate" ng-if="!ctrl.articlePreview.isPrematch"> <div class="articlepreview-matchcompetitionlogo" ajax-lazy-loaded-background="ctrl.articlePreview.competitionLogo.urls[0].url"></div> {{ ::ctrl.articlePreview.competition }} </div> <h3 class="articlepreview-typeordatemultiline" ng-if="ctrl.articlePreview.isPrematch">  {{ ::ctrl.articlePreview.competition }}<br/>&nbsp; </h3> <ajax-countdown ng-if="ctrl.articlePreview.isPrematch" startdate="ctrl.articlePreview.dateStart"></ajax-countdown> <h3 class="articlepreview-matchlive" ng-if="::ctrl.articlePreview.isLive"> {{ ::\'live\' | translate }} </h3> <h3 class="articlepreview-matchresult" ng-if="::ctrl.articlePreview.isFinished"> {{ ::ctrl.articlePreview.matchResult }} </h3> </div>       <div class="articlepreview-buttonwrapper clearfix" ng-if="::ctrl.articlePreview.isLive"> <a ng-click="ctrl.openSlug(ctrl.articlePreview.lineupSlug)" class="l-cell100 button--standardlinkred" ng-if="ctrl.articlePreview.lineupSlug"> {{ ::\'line_up\' | translate }}<i class="icon icon--Arrow1"></i> </a>     </div> <div class="articlepreview-buttonwrapper clearfix" ng-if="::ctrl.articlePreview.isFinished"> <a ng-click="ctrl.openSlug(ctrl.articlePreview.matchReportSlug, \'MATCHREPORT\')" class="l-cell100 button--standardlinkred" ng-if="ctrl.articlePreview.matchReportSlug"> {{ ::\'match_report\' | translate }}<i class="icon icon--Arrow1"></i> </a>\n<a ng-click="ctrl.openSlug(ctrl.articlePreview.statisticsSlug, \'STATISTICS\')" class="l-cell100 button--standardlinkred" ng-if="ctrl.articlePreview.statisticsSlug"> {{ ::\'line_up_statistics\' | translate }}<i class="icon icon--Arrow1"></i> </a> </div> </article>';
    r.run(["$templateCache", function(e) {
        e.put("js/homepage/components/ajax-article-preview-match.directive.html", n)
    }]), e.exports = n
}, function(e, t) {
    var r, i = window.angular;
    try {
        r = i.module(["ajax.homepage"])
    } catch (e) {
        r = i.module("ajax.homepage", [])
    }
    var n = '<article class="l-cell100 articlepreview" ng-class="{\n            \'articlepreview--prominent\': ctrl.articlePreview.isProminent,\n            \'articlepreview--mobilelarger\': ctrl.articlePreview.isMobileLarger && !ctrl.isRelatedArticle,\n            \'articlepreview--mobilesmaller\': ctrl.articlePreview.isMobileSmaller || ctrl.isRelatedArticle,\n            \'articlepreview--protected\': ctrl.articlePreview.isProtected && !ctrl.userService.isLoggedOn,\n            \'articlepreview--video\': ctrl.articlePreview.isVideo,\n            \'articlepreview--col1\': ctrl.columns == 1,\n            \'articlepreview--col2\': ctrl.columns == 2,\n            \'articlepreview--icon\': ctrl.articlePreview.isVideo || ctrl.articlePreview.isAudio\n         }"> <a class="articlepreview-link" ng-click="ctrl.open(ctrl.articlePreview);"> <div class="articlepreview-thumbnail" ng-if="::ctrl.articlePreview.thumbnail" ajax-trigger-lazy-loaded-background="ctrl.immediatelyLoadThumbnail" ajax-lazy-loaded-background="::ctrl.imageUrl"> <div class="articlepreview-thumbnailoverlay"></div> <div class="articlepreview-icon" ng-if="::(ctrl.articlePreview.isAudio || ctrl.articlePreview.isVideo) && !ctrl.isRelatedArticle"> <i class="icon icon--audio" ng-if="::ctrl.articlePreview.isAudio"></i>\n<i class="icon icon--play" ng-if="::ctrl.articlePreview.isVideo"></i> </div> <div class="articlepreview-icon articlepreview-icon--hover" ng-if="::(ctrl.articlePreview.isAudio || ctrl.articlePreview.isVideo) && !ctrl.isRelatedArticle"> <i class="icon icon--audio" ng-if="::ctrl.articlePreview.isAudio"></i>\n<i class="icon icon--play" ng-if="::ctrl.articlePreview.isVideo"></i> </div> </div> <div class="articlepreview-content"> <div class="articlepreview-badge" ng-if="ctrl.columns == 1 && ctrl.articlePreview.isProtected && ctrl.articlePreview.isVideo"> {{ ::\'tv_live\' | translate }} </div> <div class="articlepreview-badge" ng-if="ctrl.columns == 1 && ctrl.articlePreview.isProtected && ctrl.articlePreview.isAudio"> <span class="articlepreview-teamlabel">{{ ::\'ajax\' | translate }}</span> {{ ::\'radio\' | translate }} </div>  <div class="articlepreview-typeordate" ng-if="::ctrl.articlePreview.isArticle" ng-show="ctrl.columns == 1" ng-class="::{\'lm-hide\': !ctrl.articlePreview.isProminent}"> {{ ::ctrl.articlePreview.date | humanizeDate }} </div>  <div class="articlepreview-typeordate" ng-if="ctrl.articlePreview.isVideo" ng-show="ctrl.columns == 1"> Video ({{ ctrl.articlePreview.length | humanizeSeconds }}) </div>  <div class="articlepreview-typeordate" ng-if="ctrl.articlePreview.isAudio" ng-show="ctrl.columns == 1"> Radio ({{ ctrl.articlePreview.length | humanizeSeconds }}) </div>  <div class="articlepreview-titlewrapper"> <div class="articlepreview-badge" ng-if="ctrl.columns == 2 && ctrl.articlePreview.isProtected && ctrl.articlePreview.isVideo"> {{ ::\'tv_live\' | translate }} </div> <div class="articlepreview-badge" ng-if="ctrl.columns == 2 && ctrl.articlePreview.isProtected && ctrl.articlePreview.isAudio"> <span class="articlepreview-teamlabel">{{ ::\'ajax\' | translate }}</span> {{ ::\'radio\' | translate }} </div> <h3 class="articlepreview-title">{{::ctrl.articlePreview.title}}</h3> </div> </div>  <div class="articlepreview-buttonwrapper" ng-if="ctrl.columns == 1 && ctrl.articlePreview.isProtected && !ctrl.userService.isLoggedOn"> <a class="l-cell100 button--standardlinkred" ng-click="ctrl.open(ctrl.articlePreview)"> {{ ::\'login/register\' | translate }}<i class="icon icon--Arrow1"></i> </a> </div> </a> <div class="articlepreview-footer" ng-if="::!ctrl.articlePreview.isProtected || ctrl.userService.isLoggedOn"> <a ui-sref="story({stream: ctrl.streamSlug, storySlug: ctrl.articlePreview.tag})" class="articlepreview-tag" ng-if="::ctrl.articlePreview.tag" ng-class="::{\'lm-hide\': !ctrl.articlePreview.isProminent}"> #{{ ::ctrl.articlePreview.tag }} </a> </div>  <div class="articlepreview-footer" ng-if="ctrl.articlePreview.isProtected && !ctrl.userService.isLoggedOn && ctrl.columns == 2"> <a class="articlepreview-tag" ng-class="{\'articlepreview-tag--protected\' : ctrl.articlePreview.isProtected}" ng-click="ctrl.open(ctrl.articlePreview)"> {{ ::\'login_or_register\' | translate }} <i class="icon icon--Arrow1"></i> </a> </div> </article>';
    r.run(["$templateCache", function(e) {
        e.put("js/homepage/components/ajax-article-preview-article.directive.html", n)
    }]), e.exports = n
}, function(e, t) {
    var r, i = window.angular;
    try {
        r = i.module(["ajax.homepage"])
    } catch (e) {
        r = i.module("ajax.homepage", [])
    }
    var n = '<article class="l-cell100 articlepreview articlepreview--external articlepreview--col1 articlepreview--mobilelarger"> <a href="{{ ::ctrl.articlePreview.href }}" target="_blank"> <div class="articlepreview-externalimage" ajax-lazy-loaded-background="ctrl.articlePreview.thumbnail.urls[0].url"> </div> <div class="articlepreview-externalcaption"> <h3 class="articlepreview-title"> <i class="icon icon--Arrow1 l-left"></i>\n{{ ::ctrl.articlePreview.title }} </h3> </div> </a> </article>';
    r.run(["$templateCache", function(e) {
        e.put("js/homepage/components/ajax-article-preview-external.directive.html", n)
    }]), e.exports = n
}, function(e, t, r) {
    "use strict";

    function i() {
        return a
    }
    var n = r(251);
    angular.module("ajax.homepage").factory("ArticlePreview", i);
    var a = function() {
        function e(t) {
            this.id = t.id, this.type = t.type, this.title = t.title, this.slug = t.slug, this.href = t.href, this.date = new Date(1e3 * t.date), this.dateStart = new Date(1e3 * t.date_start), this.thumbnail = t.thumbnail ? new n.default(t.thumbnail) : null, this.tag = t.tag, this.length = t.length, this.isProtected = !!t.protected, this.isArticle = t.type === e.TYPE_ARTICLE, this.isVideo = t.type === e.TYPE_VIDEO, this.isAudio = t.type === e.TYPE_AUDIO, this.isPromo = t.type === e.TYPE_PROMO, this.isMatch = t.type === e.TYPE_MATCH, this.isExternal = t.type === e.TYPE_EXTERNAL, this.isProminent = t.prominent && (this.isArticle || this.isVideo || this.isAudio), this.isMobileLarger = this.isProminent || this.isExternal || !this.isArticle, this.isMobileSmaller = !this.isMobileLarger
        }
        return e.TYPE_ARTICLE = "article", e.TYPE_VIDEO = "wmavideomediaitem", e.TYPE_AUDIO = "audio", e.TYPE_PROMO = "promo", e.TYPE_MATCH = "match", e.TYPE_EXTERNAL = "external", e
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = a
}, function(e, t) {
    e.exports = '<!-- Social: -->\n<ng-include ng-if="ctrl.articlePreview.isTwitter || ctrl.articlePreview.isInstagram"\n            src="\'js/homepage/components/ajax-article-preview-social.directive.html\'"></ng-include>\n\n<!-- Player: -->\n<ng-include ng-if="ctrl.articlePreview.isPlayer"\n            src="\'js/homepage/components/ajax-article-preview-player.directive.html\'"></ng-include>\n\n<!-- Promotional: -->\n<ng-include ng-if="ctrl.articlePreview.isPromo"\n            src="\'js/homepage/components/ajax-article-preview-promotional.directive.html\'"></ng-include>\n\n<!-- Match: -->\n<ng-include ng-if="ctrl.articlePreview.isMatch"\n            src="\'js/homepage/components/ajax-article-preview-match.directive.html\'"></ng-include>\n\n<!-- Article, video, audio: -->\n<ng-include ng-if="ctrl.articlePreview.isArticle || ctrl.articlePreview.isVideo || ctrl.articlePreview.isAudio"\n            src="\'js/homepage/components/ajax-article-preview-article.directive.html\'"></ng-include>\n\n<!-- External: -->\n<ng-include ng-if="ctrl.articlePreview.isExternal"\n            src="\'js/homepage/components/ajax-article-preview-external.directive.html\'"></ng-include>\n'
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                template: r(288),
                controller: "AjaxHeroCarouselController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {}
            }
        }

        function t(e) {
            var t = this;
            e.getChannels().then(function(e) {
                t.channels = e
            })
        }
        t.$inject = ["channelService"], angular.module("ajax.homepage").directive("ajaxHeroCarousel", e).controller("AjaxHeroCarouselController", t)
    }()
}, function(e, t) {
    e.exports = '<div class="homehero-clip">\n    <section class="homehero-section">\n        <div class="homehero-wrapper" ajax-scroll-opacity="1.5">\n            <ajax-carousel id="heroCarousel">\n                <ajax-carousel-item class="carousel-item" ng-repeat="channel in ctrl.channels">\n                    <ajax-home-hero carousel-id="heroCarousel" channel="channel"></ajax-home-hero>\n                </ajax-carousel-item>\n            </ajax-carousel>\n        </div>\n    </section>\n</div>'
}, function(e, t, r) {
    "use strict";

    function i(e, t, i) {
        function n(r, n, o, c) {
            function l(t) {
                var i = c.isWithinScrollView;
                c.isWithinScrollView = angular.element(e).scrollTop() <= a, t && i !== c.isWithinScrollView && r.$digest()
            }

            function s() {
                var e = u();
                e && (c.imageCss = c.imageCss || {}, c.imageCss["background-image"] = "url(" + e + ")")
            }

            function u() {
                if (c.channel) return c.channel.media.getImageMediaUrl(n.width()) || d()
            }

            function d() {
                if (h) return h;
                var e = c.channel && c.channel.media.getLargestImageMediaUrl();
                return e ? h = e.url : ""
            }

            function m() {
                var e = n.width();
                e > 0 ? s() : t(m)
            }
            var h;
            n = n.children().first(), r.$watch("ctrl.channel", function(e) {
                e && (h = "", m())
            });
            var v = i.afterResize(s);
            r.$on("$destroy", v), c.channel.media.isVideo && (angular.element(e).on("scroll.homehero", function() {
                l(!0)
            }), r.$on("$destroy", function() {
                angular.element(e).off("scroll.homehero")
            })), l()
        }
        var a = 585;
        return {
            restrict: "E",
            template: r(290),
            controller: "AjaxHomeHeroController",
            controllerAs: "ctrl",
            bindToController: !0,
            scope: {
                channel: "=",
                carouselId: "@"
            },
            link: n
        }
    }

    function n(e, t) {
        var r = this;
        r.imageCss = void 0, r.carouselProps = e.getOrCreateCarousel(r.carouselId), r.openArticle = function(e) {
            return t.openArticle(e)
        }
    }
    i.$inject = ["$window", "$timeout", "resize"], n.$inject = ["carouselService", "articlePreviewService"], angular.module("ajax.homepage").directive("ajaxHomeHero", i).controller("AjaxHomeHeroController", n), t.ajaxHomeHeroDirective = i, t.AjaxHomeHeroController = n
}, function(e, t) {
    e.exports = '<div class="homehero">\n    <div class="homehero-size" ng-style="ctrl.imageCss">\n\n        <ajax-hero-video ng-if="::ctrl.channel.media.isVideo"\n                         paused="!ctrl.channel.isActive || !ctrl.carouselProps.isResting || !ctrl.isWithinScrollView"\n                         media="ctrl.channel.media">\n        </ajax-hero-video>\n\n        <section ng-if="::ctrl.channel.heroArticlePreview.id"\n                 class="homehero-title">\n            <a ng-click="ctrl.openArticle(ctrl.channel.heroArticlePreview)">\n                <span class="homehero-hashtag" ng-if="::ctrl.channel.heroArticlePreview.tag">#{{::ctrl.channel.heroArticlePreview.tag}}</span>\n                <h1>{{::ctrl.channel.heroArticlePreview.title}}</h1>\n                <span class="homehero-cta" ng-class="{\'button--standardlinkred\': ctrl.channel.heroArticlePreview.type === \'promo\'}">{{::ctrl.channel.ctaText}}<i class="icon icon--Arrow1"></i></span>\n            </a>\n        </section>\n\n    </div>\n</div>'
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e(e, t, r, i) {
            function n(e, r, i) {
                t.includes("home.stream", {
                    streamSlug: i.streamSlug
                }) || a(i.streamSlug, !0)
            }

            function a(e, t) {
                var i = r.getChannelIndexBySlug(e);
                i !== c.carouselProps.index && (t ? o.slideToIndex(i) : o.teleportToIndex(i))
            }
            var o, c = this;
            c.carouselProps = i.getOrCreateCarousel(c.id), c.init = function(r) {
                o = r, t.includes("home.stream") && a(t.params.streamSlug, !1), e.$on("$stateChangeStart", n), e.$on("ajaxStreamNav.prevClicked", r.slideToPrev), e.$on("ajaxStreamNav.nextClicked", r.slideToNext)
            }, c.changeStateByStream = function(e) {
                t.go(t.includes("home.stream") ? t.current.name : "home.stream", {
                    streamSlug: e.slug
                })
            }
        }

        function t(e, t, i, n, a) {
            function o(r, o, c, l) {
                var s, u, d, m = !1;
                t(function() {
                    i.getChannels().then(function(i) {
                        function h(e, t, r) {
                            t && !r ? d.slideToDirection(e) : d.slideToIndex(d.getCurrentIndex())
                        }

                        function v(e, t) {
                            d.isDragging && !s.isDragging && (s.isDragging = !0), s.isResting = !1, s.relativeOffset = t, s.offset = e / d.contentWidth
                        }

                        function f() {
                            var e = d.getCurrentIndex();
                            s.isDragging = !1, s.isResting = !0, s.index !== e && i[s.index] && (s.index = d.getCurrentIndex(), l.changeStateByStream(i[s.index]))
                        }

                        function p(e) {
                            var t = d.getItemIndex(angular.element(e.target).closest(".carousel-item")[0]);
                            t > -1 && t !== d.getCurrentIndex() && d.slideToIndex(t)
                        }

                        function g() {
                            var e = S(),
                                t = Math.min(document.body.offsetWidth, e);
                            o.find(".carousel-item").css("width", t), o.find(".carousel-inner").css("width", u * t), d.offset *= t * u / d.contentWidth, d.options.gridSize = t, d.contentWidth = t * u, d.options.snapOffset = Math.max((document.body.offsetWidth - e) / 2, 0), j(function() {
                                d.teleportToIndex(s.index)
                            })
                        }

                        function w(e) {
                            d.getCurrentIndex() !== e && d.teleportToIndex(e)
                        }

                        function y(e) {
                            d.getCurrentIndex() !== e && d.slideToIndex(e)
                        }

                        function x() {
                            d.slideToDirection("left")
                        }

                        function P() {
                            d.slideToDirection("right")
                        }

                        function j(e) {
                            m = !0, e(), m = !1
                        }

                        function A(e) {
                            return function() {
                                var t = this,
                                    i = Array.prototype.slice.call(arguments);
                                m ? e.apply(t, i) : r.$apply(function() {
                                    e.apply(t, i)
                                })
                            }
                        }

                        function S() {
                            return parseFloat((o.find(".carousel-item").css("max-width") || "0").replace("px", ""))
                        }
                        t(function() {
                            ! function() {
                                s = n.getOrCreateCarousel(c.id), s.element = o.find(".carousel-inner"), u = i.length;
                                var t = S();
                                d = new e.Inflickity(s.element[0], {
                                    animationDuration: 600,
                                    jumpSlideThreshold: 50,
                                    gridSize: Math.min(document.body.offsetWidth, t),
                                    snapOffset: Math.max((document.body.offsetWidth - t) / 2, 0),
                                    numItems: u,
                                    onDragEnded: h,
                                    onOffsetChanged: A(v),
                                    onAnimationStopped: A(f),
                                    onClick: p
                                });
                                var m = a.afterResize(function() {
                                    g()
                                }, 1);
                                r.$on("$destroy", m), j(function() {
                                    l.init({
                                        teleportToIndex: w,
                                        slideToIndex: y,
                                        slideToNext: x,
                                        slideToPrev: P
                                    }), g()
                                })
                            }()
                        })
                    })
                })
            }
            return {
                restrict: "E",
                template: r(292),
                replace: !0,
                transclude: !0,
                controller: "AjaxCarouselController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    id: "@"
                },
                link: o
            }
        }

        function i() {
            return {
                restrict: "E",
                template: '<li class="carousel-item" ajax-css-class="{\'is-front\': channel.isActive && ctrl.carouselProps.isResting}" ng-transclude></li>',
                replace: !0,
                transclude: !0,
                require: "^ajaxCarousel",
                link: function(e, t, r, i) {
                    e.ctrl = i
                }
            }
        }
        e.$inject = ["$scope", "$state", "channelService", "carouselService"], t.$inject = ["$window", "$timeout", "channelService", "carouselService", "resize"], angular.module("ajax.homepage").controller("AjaxCarouselController", e).directive("ajaxCarousel", t).directive("ajaxCarouselItem", i)
    }()
}, function(e, t) {
    e.exports = '<div class="carousel">\n    <ul class="carousel-inner" ng-transclude></ul>\n</div>'
}, function(e, t, r) {
    "use strict";

    function i() {
        return {
            restrict: "E",
            template: r(294),
            controller: "AjaxCountdownController",
            controllerAs: "ctrl",
            bindToController: !0,
            scope: {
                startdate: "="
            }
        }
    }

    function n(e, t) {
        function r() {
            e.cancel(n)
        }

        function i(e) {
            var t = Math.floor(e / 86400);
            e -= 86400 * t;
            var r = Math.floor(e / 3600) % 24;
            e -= 3600 * r;
            var i = Math.floor(e / 60) % 60;
            e -= 60 * i;
            var n = e % 60;
            return [t, r, i, n]
        }
        var n, a, o = this;
        o.days = 0, o.hours = 0, o.minutes = 0, o.seconds = 0, o.timeleft = o.startdate / 1e3 - Math.floor(Date.now() / 1e3), n = e(function() {
            o.timeleft -= 1, o.timeleft < 0 && (o.timeleft = 0, r()), a = i(o.timeleft), o.days = a[0], o.hours = a[1], o.minutes = a[2], o.seconds = a[3]
        }, 1e3), t.$on("$destroy", r)
    }
    n.$inject = ["$interval", "$scope"], angular.module("ajax.homepage").directive("ajaxCountdown", i).controller("AjaxCountdownController", n), t.ajaxCountdownDirective = i, t.AjaxCountdownController = n
}, function(e, t) {
    e.exports = '<div class="countdown">\r\n    <div class="countdown__timewrapper">\r\n        <span class="countdown__time">{{ ctrl.days }}</span><br />\r\n        <span class="countdown__subtext">{{ ::\'days\' | translate }}</span>\r\n    </div>\r\n    <div class="countdown__timewrapper">\r\n        <span class="countdown__time">{{ ctrl.hours }}</span><br />\r\n        <span class="countdown__subtext">{{ ::\'hours\' | translate }}</span>\r\n    </div>\r\n    <div class="countdown__timewrapper">\r\n        <span class="countdown__time">{{ ctrl.minutes }}</span><br />\r\n        <span class="countdown__subtext">{{ ::\'minutes\' | translate }}</span>\r\n    </div>\r\n    <div class="countdown__timewrapper">\r\n        <span class="countdown__time">{{ ctrl.seconds }}</span><br />\r\n        <span class="countdown__subtext">{{ ::\'seconds\' | translate }}</span>\r\n    </div>\r\n\r\n    <div class="countdown__hublotlogo">\r\n        <a href="https://www.hublot.com/en/?utm_source=ajax&utm_medium=site&utm_campaign=official-timekeeper" target="_blank" class="countdown__hublotlogo-logo"></a>\r\n    </div>\r\n</div>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            var r = this;
            angular.element(e).on("scroll.streamDimmer", function() {
                0 === document.body.scrollTop && t.$apply(function() {
                    r.hide = !1
                })
            }), t.$on("$destroy", function() {
                angular.element(window).off("scroll.streamdimmer")
            })
        }

        function t() {
            return {
                restrict: "E",
                replace: !0,
                template: '<div class="stream-dimmer" ng-click="ctrl.hide=true" ng-hide="ctrl.hide">{{ bla }}</div>',
                controller: "AjaxStreamDimmerController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {}
            }
        }
        e.$inject = ["$window", "$scope"], angular.module("ajax.homepage").controller("AjaxStreamDimmerController", e).directive("ajaxStreamDimmer", t)
    }()
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                template: r(297),
                controller: "AjaxStreamCarouselController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    carouselId: "@"
                },
                link: function(e, t) {
                    angular.element(window).on("orientationchange.streamCarousel", function() {
                        t.css("display", "none").height(), t.css("display", "")
                    }), e.$on("$destroy", function() {
                        angular.element(window).off("orientationchange.streamCarousel")
                    })
                }
            }
        }

        function t(e, t, r) {
            var i = this;
            i.activeChannel = null, i.streamHeight = 0, i.carouselProps = r.getOrCreateCarousel(i.carouselId), t.getChannels().then(function(t) {
                i.channels = t, e.$watch("ctrl.carouselProps.index", function(e) {
                    i.activeChannel = i.channels[e || 0]
                }), e.$watch("ctrl.activeChannel.stream.grid.elementHeight", function(e) {
                    e > 0 && (i.streamHeight = e)
                })
            })
        }
        t.$inject = ["$scope", "channelService", "carouselService"], angular.module("ajax.homepage").directive("ajaxStreamCarousel", e).controller("AjaxStreamCarouselController", t)
    }()
}, function(e, t) {
    e.exports = '<section class="clearfix stream">\n    <!--<ajax-stream-dimmer ajax-scroll-opacity="2" auto-display-none="true"></ajax-stream-dimmer>-->\n    <div class="stream-carousel" ng-style="{height: ctrl.streamHeight}">\n        <ajax-carousel-responder carousel-id="heroCarousel" centered="true">\n            <ajax-carousel-responder-item ng-repeat="channel in ctrl.channels">\n                <ajax-stream stream="channel.stream" is-active="channel.isActive"></ajax-stream>\n            </ajax-carousel-responder-item>\n        </ajax-carousel-responder>\n    </div>\n</section>'
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e(e, t, i, n, a) {
            function o(r, n, o, c) {
                function l() {
                    c.onLayout = s;
                    var n = e.afterResize(function() {
                        r.$apply(s)
                    });
                    r.$on("$destroy", n), r.$watch("ctrl.rowLimit", function() {
                        t(s)
                    }), r.$on("$stateChangeSuccess", function(e, r) {
                        i.is("home.stream") && t(s)
                    }), c.init()
                }

                function s() {
                    c.stream.grid.elementHeight = n.outerHeight(), c.stream.grid.elementWidth = n.outerWidth(), c.rowLimitScrollThreshold = a.isGrid(a.GRID_MOBILE) ? n.offset().top : n.offset().top + 100
                }
                n = n.children().first();
                var u = r.$watch("ctrl.stream", function(e) {
                    e && (t(l), u())
                })
            }
            return {
                restrict: "E",
                template: r(299),
                controller: "AjaxStreamController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    stream: "=",
                    isActive: "=",
                    isMatchDay: "="
                },
                link: o
            }
        }

        function t(e, t, r, i, n, a, o, c) {
            function l() {
                s(w, u())
            }

            function s(e, t) {
                var r = {
                    offset: e,
                    limit: f[y]
                };
                "object" == typeof t && angular.extend(r, t);
                var i = 0 === e ? n.reloadArticlePreviewsInStream : n.addArticlePreviewsToStream;
                g.isLoading = !0, i(g.stream, r).then(function() {
                    g.isLoading = !1, w = g.stream.articlePreviews.length, d(a.getGrid()), n.notifyBlueConic()
                })
            }

            function u() {
                var e = {};
                return g.filterType && (e.type = g.filterType), e
            }

            function d(e) {
                var i;
                switch (e) {
                    case a.GRID_TABLET:
                        i = 2;
                        break;
                    case a.GRID_MOBILE:
                        i = 1;
                        break;
                    default:
                        i = 3
                }
                g.stream.grid.buildLayout(g.stream, i, {
                    weekLines: g.stream.sectioning.indexOf(o.TYPE_WEEK) !== -1,
                    monthLines: g.stream.sectioning.indexOf(o.TYPE_MONTH) !== -1,
                    matchLines: g.stream.sectioning.indexOf(o.TYPE_MATCH) !== -1
                }), g.renderLimit = m(), r(function() {
                    "function" == typeof g.onLayout && g.onLayout(),
                        t.$broadcast("layoutBuilt", g.stream)
                })
            }

            function m() {
                if (a.isGrid(a.GRID_MOBILE)) return p;
                var e = 0,
                    t = 0;
                for (var r in g.stream.grid.streamRows)
                    if (0 !== g.stream.grid.streamRows[r].columnsUsed && t++, e++, t === g.INIT_ROW_LIMIT) break;
                return e
            }

            function h() {
                if (g.isActive) {
                    var t = angular.element(window).scrollTop(),
                        r = g.rowLimit;
                    t > g.rowLimitScrollThreshold ? g.rowLimit = void 0 : (g.rowLimit || v(), g.rowLimit = g.INIT_ROW_LIMIT), r !== g.rowLimit && e.$apply()
                }
            }

            function v() {
                var e = g.stream.articlePreviews,
                    t = e.length;
                e.splice(f[y], e.length), w = f[y], e.length !== t && d(a.getGrid())
            }
            var f = {};
            f[a.GRID_DESKTOP] = 15, f[a.GRID_TABLET] = 15, f[a.GRID_MOBILE] = 7;
            var p = 3,
                g = this,
                w = 0,
                y = a.getGrid();
            g.INIT_ROW_LIMIT = 3, g.rowLimitScrollThreshold = 100, g.onLayout = null, g.rowLimit = g.INIT_ROW_LIMIT, g.filterType = i.type, g.isLoading = !1, g.TYPE_WEEK = o.TYPE_WEEK, g.TYPE_MATCH = o.TYPE_MATCH, g.TYPE_MONTH = o.TYPE_MONTH, g.loadMore = l, g.buildLayout = d, g.channelService = c, g.cssGrid = a, g.init = function() {
                function t() {
                    w = 0, g.stream.resetArticlePreviews(), d(y), s(0, u())
                }

                function i() {
                    s(0, u()), e.$on("cssGridEnter", function(e, t) {
                        t !== y && (y = t, s(0, u())), d(t)
                    }), e.$on("ajaxStreamFilterChange", function(e, i) {
                        g.isActive && i.type !== g.filterType && (g.filterType = i.type, r(t))
                    })
                }
                g.stream.url ? i() : (d(y), e.$on("cssGridEnter", function(e, t) {
                    d(t)
                })), angular.element(window).on("scroll.stream", h), e.$on("$destroy", function() {
                    angular.element(window).off("scroll.stream")
                })
            }
        }
        e.$inject = ["resize", "$timeout", "$state", "$window", "cssGrid"], t.$inject = ["$scope", "$rootScope", "$timeout", "$stateParams", "streamService", "cssGrid", "StreamTimeLine", "channelService"], angular.module("ajax.homepage").directive("ajaxStream", e).controller("AjaxStreamController", t)
    }()
}, function(e, t) {
    e.exports = '<div class="l-wrap clearfix streamwrap" ng-class="{\'is-resting\': ctrl.carouselProps.isResting}">\n    <div class="stream-grid l-cell100" ng-if="!ctrl.cssGrid.isGrid(ctrl.cssGrid.GRID_MOBILE) || ctrl.isActive">\n        <!-- render rows, except when on mobile and stream is not active (performance gain, delayed rendering on mobile) -->\n        <div ng-repeat="streamRow in ctrl.stream.grid.streamRows"\n             ajax-css-class="{\'ng-hide\': !ctrl.isMatchDay && $index >= ctrl.renderLimit && ctrl.rowLimit}">\n\n            <div class="l-cell100 lt-vpadding ld-vpadding lm-bpadding"\n                 ng-if="::streamRow.streamItems.length > 0">\n\n                <div class="lm-cell100 l-hpadding"\n                     ng-repeat="streamItem in ::streamRow.streamItems"\n                     ng-class="::{\'l-cell33 lt-cell50\': streamItem.columns == 1, \'l-cell66 lt-cell100\': streamItem.columns == 2}">\n\n                    <ajax-article-preview article-preview="streamItem.articlePreview"\n                                          columns="streamItem.columns"></ajax-article-preview>\n\n                </div>\n            </div>\n\n            <div class="l-cell100 l-hpadding lm-bpadding lt-vpadding ld-vpadding"\n                 ng-if="::streamRow.streamTimeLine && streamRow.streamTimeLine.isVisible">\n                <div class="timeline">\n                    <div ng-if="::streamRow.streamTimeLine.matchPreview.competition" class="lm-hide">\n                        {{ ::streamRow.streamTimeLine.matchPreview.competition }}\n                    </div>\n                    <div ng-if="::streamRow.streamTimeLine.date && streamRow.streamTimeLine.type == ctrl.TYPE_WEEK">\n                        {{ ::streamRow.streamTimeLine.date | humanizeWeek }}\n                    </div>\n                    <div ng-if="::streamRow.streamTimeLine.date && streamRow.streamTimeLine.type == ctrl.TYPE_MATCH">\n                        {{ ::streamRow.streamTimeLine.date | humanizeDate }}\n                    </div>\n                    <div ng-if="::streamRow.streamTimeLine.date && streamRow.streamTimeLine.type == ctrl.TYPE_MONTH">\n                        {{ ::streamRow.streamTimeLine.date | date:\'MMMM\' }}\n                    </div>\n                    <h2 ng-if="::streamRow.streamTimeLine.matchPreview.title"\n                        class="timeline-matchtitle lm-hide">\n                        {{ ::streamRow.streamTimeLine.matchPreview.title }}\n                    </h2>\n                </div>\n            </div>\n\n        </div>\n\n    </div>\n\n    <div class="l-cell100 l-vpadding2 l-contentcenter">\n        <button class="button--stream" ng-click="ctrl.loadMore()" ajax-spin-on="ctrl.isLoading" ng-hide="!ctrl.stream.url || ctrl.rowLimit" analytics-on="click" analytics-event="Loadmore">{{ ::\'load_more\' | translate }}</button>\n    </div>\n\n</div>'
}, function(e, t, r) {
    "use strict";

    function i(e, t, r, i, n) {
        function a(e) {
            angular.forEach(o.channels, function(e) {
                e.isActive = !1
            }), o.channels.length && o.channels[e] && (o.channels[e].isActive = !0, t.$broadcast("ajaxStreamNav.change"))
        }
        var o = this;
        ! function() {
            i.getChannels().then(function(t) {
                o.carouselProps = n.getOrCreateCarousel(o.carouselId), o.channels = t, e.$watch("ctrl.carouselProps.index", a)
            })
        }(), o.slideCarouselToPrev = function() {
            t.$broadcast("ajaxStreamNav.prevClicked", o.carouselId)
        }, o.slideCarouselToNext = function() {
            t.$broadcast("ajaxStreamNav.nextClicked", o.carouselId)
        }, o.getUrl = function(e) {
            return r.href(r.includes("home.stream") ? r.current.name : "home.stream", e)
        }
    }

    function n() {
        return {
            restrict: "E",
            template: r(301),
            controller: "AjaxStreamNavController",
            controllerAs: "ctrl",
            bindToController: !0,
            scope: {
                carouselId: "@"
            }
        }
    }
    i.$inject = ["$scope", "$rootScope", "$state", "channelService", "carouselService"], angular.module("ajax.homepage").controller("AjaxStreamNavController", i).directive("ajaxStreamNav", n)
}, function(e, t) {
    e.exports = '<div class="streamnav">\n    <div class="streamnav-bar">\n        <a\n                ng-repeat="channel in ctrl.channels"\n                ng-href="{{ ctrl.getUrl({streamSlug: channel.slug}) }}"\n                class="streamnav-item"\n                ng-class="{\n                    \'is-front\': channel.isActive && ctrl.carouselProps.isResting\n                }">{{ channel.title }}</a>\n\n        <!-- Prev / Next buttons -->\n        <a ng-click="ctrl.slideCarouselToPrev()" class="streamnav-arrow streamnav-arrow--left"><span><i class="icon icon--Arrow-left"></i></span></a>\n        <a ng-click="ctrl.slideCarouselToNext()" class="streamnav-arrow streamnav-arrow--right"><span><i class="icon icon--Arrow1"></i></span></a>\n\n        <!-- Arrow down -->\n        <a class="lm-hide lt-hide streamnav-arrowdown" ajax-click-scroll-to="streams">\n            <i class="icon icon--Arrow-down"></i>\n        </a>\n    </div>\n</div>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            return {
                restrict: "A",
                link: function(r, i, n) {
                    var a = (screen.height, "fixed" === i.css("position")),
                        o = parseFloat(n.ajaxParallax),
                        c = angular.element(e);
                    a && (o *= -1), c.on("scroll.parallax", function() {
                        var e = c.scrollTop();
                        t(i[0], 0, e * o)
                    }), r.$on("$destroy", function() {
                        c.off("scroll.parallax")
                    })
                }
            }
        }
        e.$inject = ["$window", "positionElement"], angular.module("ajax.homepage").directive("ajaxParallax", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            return {
                restrict: "A",
                link: function(r, i, n) {
                    function a() {
                        var e = i.height(),
                            t = i.offset().top;
                        e > 0 && (o = e + t)
                    }
                    var o, c = parseFloat(n.ajaxScrollOpacity),
                        l = angular.element(e);
                    a();
                    var s = t.afterResize(a);
                    r.$on("$destroy", s), l.on("scroll.scrollOpacity", function() {
                        o || a();
                        var e = l.scrollTop(),
                            t = 1 - Math.min(Math.max(e / o * c, 0), 1);
                        1 === t ? i.css("opacity", "") : i.css("opacity", t), n.autoDisplayNone && (0 === t ? i.hide() : i.show())
                    }), r.$on("$destroy", function() {
                        l.off("scroll.scrollOpacity")
                    })
                }
            }
        }
        e.$inject = ["$window", "resize"], angular.module("ajax.homepage").directive("ajaxScrollOpacity", e)
    }()
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e() {
            var e = this;
            e.centered = "true" === e.centered
        }

        function t(e, t, i, n) {
            function a(r, a, o, c) {
                function l() {
                    f = a.find(".carouselresponder-original"), v = a.find(".carouselresponder-item").length;
                    var t = n.afterResize(function() {
                        r.$apply(s)
                    });
                    s(), r.$on("$destroy", t), w = new e.Inflickity(f[0], {
                        animationDuration: 400,
                        jumpSlideThreshold: 50,
                        gridSize: m,
                        snapOffset: c.centered ? Math.max((document.body.offsetWidth - d) / 2, 0) : 0,
                        numItems: v,
                        noEvents: !0
                    }), w.setOffset(0), r.$watch("ctrl.carouselProps.offset", u)
                }

                function s() {
                    p = a.find(".carouselresponder-item"), g = a.find(".carouselresponder-inner"), d = parseFloat((p.css("max-width") || "0").replace("px", "")) || document.body.offsetWidth, m = Math.min(document.body.offsetWidth, d), h = m * v, p.css("width", m), g.css("width", h), w && (w.offset *= m * v / w.contentWidth, w.options.snapOffset = c.centered ? Math.max((document.body.offsetWidth - d) / 2, 0) : 0, w.options.gridSize = m, w.contentWidth = w.options.gridSize * v, w.teleportToIndex(r.ctrl.carouselProps.index))
                }

                function u(e) {
                    e *= h, w.setOffset(e)
                }
                var d, m, h, v, f, p, g, w;
                r.ctrl.carouselProps = i.getOrCreateCarousel(r.ctrl.carouselId);
                var y;
                c.registerItem = function() {
                    t.cancel(y), y = t(l)
                }
            }
            return {
                restrict: "E",
                template: r(305),
                replace: !0,
                transclude: !0,
                controller: "AjaxCarouselResponderController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {
                    carouselId: "@",
                    maxWidth: "@",
                    centered: "@"
                },
                link: a
            }
        }

        function i() {
            function e(e, t, r, i) {
                i.registerItem()
            }
            return {
                restrict: "E",
                template: "<li class=\"carouselresponder-item\" ajax-css-class=\"{'is-front': channel.isActive && ctrl.carouselProps.isResting, 'is-resting': ctrl.carouselProps.isResting}\" ng-transclude></li>",
                replace: !0,
                transclude: !0,
                link: e,
                require: "^ajaxCarouselResponder"
            }
        }
        t.$inject = ["$window", "$timeout", "carouselService", "resize"], angular.module("ajax.homepage").controller("AjaxCarouselResponderController", e).directive("ajaxCarouselResponder", t).directive("ajaxCarouselResponderItem", i)
    }()
}, function(e, t) {
    e.exports = '<div class="carouselresponder-clip">\n    <div class="carouselresponder">\n        <ul class="carouselresponder-inner carouselresponder-original" ng-transclude></ul>\n    </div>\n</div>'
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e() {
            function e(e, r) {
                var n = r.children().get(0);
                n.muted = !0, e.$watch("ctrl.paused", function(e) {
                    "undefined" != typeof e && (e ? i(n) : t(n))
                })
            }

            function t(e) {
                e && e.paused && e.play()
            }

            function i(e) {
                e && !e.paused && e.pause()
            }
            return {
                restrict: "E",
                template: r(307),
                scope: {
                    paused: "=",
                    media: "="
                },
                controller: "AjaxHeroVideoController",
                controllerAs: "ctrl",
                bindToController: !0,
                link: e
            }
        }

        function t() {}
        angular.module("ajax.homepage").directive("ajaxHeroVideo", e).controller("AjaxHeroVideoController", t)
    }()
}, function(e, t) {
    e.exports = '<video class="lt-hide lm-hide homehero-video"\n       preload="auto"\n       loop=""\n       oncontextmenu="return false"\n       muted="muted"\n       style="transform: translate3d(0,0,0);">\n    <!-- translate3d() as style-attribute to avoid flickering in Chrome. Placing it in the css does not work. -->\n\n    <source ng-repeat="mediaUrl in ctrl.media.urls"\n            ng-if="mediaUrl.isVideo"\n            ng-src="{{ mediaUrl.url }}"\n            type="{{ mediaUrl.htmlType }}">\n\n</video>'
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                template: r(309),
                controller: "AjaxStoryStreamController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: {}
            }
        }

        function t(e, t, r, i, n) {
            function a() {
                i.scrollTo(0, 0)
            }
            var o = this;
            if (!e.storySlug || !e.stream) throw "Story stream directive expects storySlug and stream state params";
            r.getStory(e.stream, e.storySlug).then(function(e) {
                o.story = e, e.stream.articlePreviews.length > 0 && (e.stream.articlePreviews[0].isProminent = !0)
            }), o.goToStream = function() {
                t.go("home.stream", {
                    streamSlug: e.stream
                })
            }, a(), n.$on("$destroy", a)
        }
        t.$inject = ["$stateParams", "$state", "storyService", "$window", "$scope"], angular.module("ajax.homepage").directive("ajaxStoryStream", e).controller("AjaxStoryStreamController", t)
    }()
}, function(e, t) {
    e.exports = '<section class="story">\n    <div class="submenubar submenubar--story l-padding l-cell100"\n\n         ng-class="{\'is-visible\': ctrl.showMe}">\n        <div class="submenubar-label--alert">\n            <strong>#{{ctrl.story.slug}}</strong>\n            <div>{{ctrl.story.content}}</div>\n        </div>\n        <a ng-click="ctrl.goToStream()">\n            <div class="submenubar-closebutton l-cell50 l-right">\n                <i class="icon icon--Menu_close"></i>\n            </div>\n        </a>\n    </div>\n    <ajax-stream stream="ctrl.story.stream" is-active="true"></ajax-stream>\n</section>'
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "A",
                controller: "AjaxHomepageLoaderController",
                controllerAs: "ctrl",
                bindToController: !0,
                scope: !0
            }
        }

        function t(e, t) {
            var r = this;
            r.test = "abc", r.loaded = void 0, t.getChannels().then(function() {
                e(function() {
                    r.loaded = !0
                })
            })
        }
        t.$inject = ["$timeout", "channelService"], angular.module("ajax.homepage").directive("ajaxHomepageLoader", e).controller("AjaxHomepageLoaderController", t)
    }()
}, function(e, t, r) {
    ! function() {
        "use strict";

        function e() {
            return {
                restrict: "E",
                template: r(312),
                controller: t,
                controllerAs: "$ctrl",
                bindToController: !0
            }
        }

        function t(e, t, r, i, n, a, o, c, l, s, u, d) {
            function m() {
                g.homeArticleService.isAtArticleState() ? (g.articleService.showArticle = !1, h()) : g.articleService.showArticle = !1
            }

            function h() {
                g.homeArticleService.loadArticle(s.streamSlug || s.stream, s.articleSlug).then(function(e) {
                    return g.articleService.activeArticle = e, g.articleService.activeArticle.isProtected && !r.isLoggedOn ? void r.doLogin() : (g.articleService.activeArticle.head && v(e.head), d(function() {
                        g.articleService.showArticle = !0, i.notifyBlueConic(), g.articleService.activeArticle.isInstagram && n.processInstagramEmbed()
                    }), void(g.streamSlug = s.streamSlug || s.stream))
                }, function() {
                    u.error("Could not open article"), g.closeArticle()
                })
            }

            function v(e) {
                f(), p = angular.element(e), p.appendTo(angular.element("head"))
            }

            function f() {
                p && (p.remove(), p = null)
            }
            var p, g = this;
            g.homeArticleService = e, g.articleService = t, g.closeArticle = function() {
                "true" == angular.element(a.document.body).attr("data-matchday") && a.m2active && a.m2active.callback('{"action": "NAVIGATION",  "source": "ARTICLE",  "destination": "MAIN"}'), l.go("^"), f()
            }, m(), o.$on("$stateChangeSuccess", function() {
                m()
            }), c.$watch("hideMainMenuBar", function() {
                g.hideMainMenuBar = c.hideMainMenuBar
            })
        }
        t.$inject = ["homeArticleService", "articleService", "userService", "streamService", "embedService", "$window", "$scope", "$rootScope", "$state", "$stateParams", "$log", "$timeout"], angular.module("ajax").directive("ajaxHomeArticlePopup", e)
    }()
}, function(e, t) {
    e.exports = '<ajax-article show-related-articles="1"\n              on-close="$ctrl.closeArticle()"></ajax-article>'
}, function(e, t) {
    "use strict";
    var r = function() {
        function e(e, t, r, i, n, a, o) {
            var c = this;
            c.id = e.id, c.url = e.url, c.type = e.type, c.shareUrl = e.share_url, c.title = a.trustAsHtml(e.title), c.length = e.length, c.slug = e.slug, c.content = a.trustAsHtml(e.content), c.date = new Date(1e3 * e.date), c.tags = e.tags, c.media = e.media ? new t(e.media) : null, c.avatar = e.avatar ? new t(e.avatar) : null, c.username = e.username, c.href = e.href, c.head = e.head, c.relatedArticles = [], c.isProtected = !!e.protected, c.isAuthorized = e.isAuthorized, c.isVideo = e.type === r.TYPE_VIDEO, c.isAudio = e.type === r.TYPE_AUDIO, c.isTwitter = e.type === i.TYPE_TWITTER, c.isInstagram = e.type === i.TYPE_INSTAGRAM, c.inStadionContent = !!e.inStadionContent, angular.forEach(e.related_articles, function(e) {
                c.relatedArticles.push(o.createFromJSON(e))
            }), angular.forEach(e.stories, function(e) {
                c.stories.push(n.create(e))
            })
        }
        return e
    }();
    t.HomeArticle = r;
    var i = function() {
        function e(e, t, r, i, n, a) {
            this.Media = e, this.ArticlePreview = t, this.SocialPreview = r, this.storyFactory = i, this.$sce = n, this.previewEntityService = a
        }
        return e.prototype.create = function(e) {
            return new r(e, this.Media, this.ArticlePreview, this.SocialPreview, this.storyFactory, this.$sce, this.previewEntityService)
        }, e.$inject = ["Media", "ArticlePreview", "SocialPreview", "storyFactory", "$sce", "previewEntityService"], e
    }();
    t.HomeArticleFactory = i, angular.module("ajax.homepage").service("homeArticleFactory", i)
}, function(e, t, r) {
    "use strict";

    function i() {
        return c
    }
    var n = this && this.__extends || function(e, t) {
            function r() {
                this.constructor = e
            }
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        },
        a = r(251),
        o = r(285);
    angular.module("ajax.homepage").factory("MatchPreview", i);
    var c = function(e) {
        function t(r) {
            e.call(this, r), this.lineupSlug = r.lineup_slug, this.matchReportSlug = r.match_report_slug, this.statisticsSlug = r.statistics_slug, this.subtitle = r.subtitle, this.competition = r.competition, this.competitionLogo = r.competition_logo ? new a.default(r.competition_logo) : null, this.status = r.status, this.matchResult = r.match_result, this.ticketsUrl = r.tickets_url, this.isMobileLarger = !1, this.isPrematch = r.status === t.STATUS_PREMATCH, this.isLive = r.status === t.STATUS_LIVE, this.isFinished = r.status === t.STATUS_FINISHED
        }
        return n(t, e), t.STATUS_PREMATCH = "prematch", t.STATUS_LIVE = "live", t.STATUS_FINISHED = "finished", t
    }(o.default);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = c
}, function(e, t, r) {
    "use strict";

    function i() {
        return c
    }
    var n = this && this.__extends || function(e, t) {
            function r() {
                this.constructor = e
            }
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        },
        a = r(251),
        o = r(285);
    angular.module("ajax.homepage").factory("SocialPreview", i);
    var c = function(e) {
        function t(r) {
            e.call(this, r), this.avatar = r.avatar ? new a.default(r.avatar) : null, this.username = r.username, this.isTwitter = r.type === t.TYPE_TWITTER, this.isInstagram = r.type === t.TYPE_INSTAGRAM
        }
        return n(t, e), t.TYPE_TWITTER = "twitter", t.TYPE_INSTAGRAM = "instagram", t
    }(o.default);
    t.SocialPreview = c
}, function(e, t, r) {
    "use strict";

    function i() {
        return o
    }
    var n = this && this.__extends || function(e, t) {
            function r() {
                this.constructor = e
            }
            for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i]);
            e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
        },
        a = r(285);
    angular.module("ajax.homepage").factory("PlayerPreview", i);
    var o = function(e) {
        function t(t) {
            e.call(this, t), this.isPlayer = !0, this.subtitle = t.subtitle, this.jerseyNumber = t.jersey_number
        }
        return n(t, e), t.TYPE_PLAYER = "player", t
    }(a.default);
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = o
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t) {
            function r(t) {
                e.call(this, t), this.content = "", this.setContent(t.content)
            }
            return r.prototype = Object.create(e.prototype), r.prototype.constructor = r, r.prototype.setContent = function(e) {
                this.content = e ? t.trustAsHtml(e) : null
            }, r
        }
        e.$inject = ["ArticlePreview", "$sce"], angular.module("ajax.homepage").factory("PromotionalPreview", e)
    }()
}, function(e, t) {
    "use strict";
    var r = function() {
        function e(e, t, r, i) {
            this.id = e.id, this.title = e.title, this.ctaText = e.ctaText, this.slug = e.slug, this.isDefault = e.default, this.media = new t(e.media), this.lastUpdated = new Date(1e3 * e.last_updated), this.isActive = !1, this.href = e.href || "", this.stream = r.create(e.url, e.sectioning), this.heroArticlePreview = new i(e.heroArticlePreview || {})
        }
        return e
    }();
    t.Channel = r;
    var i = function() {
        function e(e, t, r) {
            this.Media = e, this.streamFactory = t, this.ArticlePreview = r
        }
        return e.prototype.create = function(e) {
            return new r(e, this.Media, this.streamFactory, this.ArticlePreview)
        }, e.$inject = ["Media", "streamFactory", "ArticlePreview"], e
    }();
    t.ChannelFactory = i, angular.module("ajax.homepage").service("channelFactory", i)
}, function(e, t) {
    "use strict";
    var r = function() {
        function e(e, t) {
            this.id = e.id, this.slug = e.slug, this.content = e.content, this.stream = t.create()
        }
        return e
    }();
    t.Story = r;
    var i = function() {
        function e(e) {
            this.streamFactory = e
        }
        return e.prototype.create = function(e) {
            return new r(e, this.streamFactory)
        }, e.$inject = ["streamFactory"], e
    }();
    t.StoryFactory = i, angular.module("ajax.homepage").service("storyFactory", i)
}, function(e, t) {
    "use strict";
    var r = function() {
        function e(e, t, r) {
            this.url = t || "", this.articlePreviews = [], this.fixedArticlePreviews = [], this.matches = [], this.grid = e, this.sectioning = r || [], this.activeFilter = {
                type: ""
            }
        }
        return e.prototype.getArticlePreviewBySlug = function(e) {
            for (var t = 0, r = this.articlePreviews.length; t < r; t++)
                if (this.articlePreviews[t].slug === e) return this.articlePreviews[t];
            return null
        }, e.prototype.resetArticlePreviews = function() {
            this.articlePreviews = [], this.fixedArticlePreviews = [], this.matches = []
        }, e
    }();
    t.Stream = r;
    var i = function() {
        function e(e) {
            this.streamGridFactory = e
        }
        return e.prototype.create = function(e, t) {
            return new r(this.streamGridFactory.create(), e, t)
        }, e.$inject = ["streamGridFactory"], e
    }();
    t.StreamFactory = i, angular.module("ajax.homepage").service("streamFactory", i)
}, function(e, t, r) {
    "use strict";
    var i = r(322),
        n = r(323),
        a = r(324),
        o = function() {
            function e(e) {
                this.dateTimeService = e, this.defaultConfig = {
                    weekLines: !1,
                    matchLines: !1,
                    monthLines: !1
                }
            }
            return e.prototype.buildLayout = function(t, r, i) {
                var a = this;
                if (i = angular.extend(this.defaultConfig, i), !e.FIXED_POSITIONS[r]) throw "StreamGrid: no grid with " + r + " columns supported";
                this.stream = t, this.columns = r, this.fixedPositions = e.FIXED_POSITIONS[r], this.streamRows = [], this.elementHeight = 0, this.weekLineDate = new Date, this.weekLineDate.setDate(this.weekLineDate.getDate() - (this.weekLineDate.getDay() + 6) % 6 + 7), this.monthLineDate = new Date, this.matchLines = [], i.matchLines && angular.forEach(t.matches, function(e) {
                    var t = new n.default;
                    t.type = n.default.TYPE_MATCH, t.date = e.date, t.matchPreview = e, a.matchLines.push(t)
                }), angular.forEach(t.articlePreviews, function(e) {
                    if (a.tryAddFixedPositionItem(), a.streamRows.length > 0) {
                        if (i.matchLines) {
                            var t;
                            do t = a.tryAddMatchLine(e.date); while (t)
                        }
                        i.monthLines && a.getRow().columnsUsed > 0 && a.tryAddMonthLine(e.date), i.weekLines && a.getRow().columnsUsed > 0 && a.tryAddWeekLine(e.date), a.tryAddFixedPositionItem()
                    }
                    a.addArticlePreview(e)
                }), this.endOfSection()
            }, e.prototype.addArticlePreview = function(e) {
                var t = this.getRow(),
                    r = new a.default;
                r.articlePreview = e, e.isProminent && t.columnsUsed + 2 <= t.columns && null === this.getFixedPositionArticlePreview(t.rowNumber, t.columnsUsed + 2) && (r.columns = 2), t.addStreamItem(r)
            }, e.prototype.tryAddFixedPositionItem = function() {
                var e = this.getRow(),
                    t = this.getFixedPositionArticlePreview(e.rowNumber, e.columnsUsed + 1);
                if (null !== t) {
                    var r = new a.default;
                    r.articlePreview = t, e.addStreamItem(r)
                }
            }, e.prototype.tryAddWeekLine = function(e) {
                if (this.dateTimeService.getWeekNumber(e) !== this.dateTimeService.getWeekNumber(this.weekLineDate) || e.getFullYear() !== this.weekLineDate.getFullYear()) {
                    var t = new Date(e.getTime());
                    t.setDate(t.getDate() - (t.getDay() || 7) + 1), this.weekLineDate = t;
                    var r = new n.default;
                    r.type = n.default.TYPE_WEEK, r.date = t, this.streamRows.length < 3 ? r.isVisible = !1 : this.endOfSection(), this.addTimeLine(r)
                }
            }, e.prototype.tryAddMatchLine = function(e) {
                var t = this;
                if (this.matchLines.length > 0) {
                    var r = this.matchLines[this.matchLines.length - 1];
                    if (r.date.getTime() >= e.getTime()) return r = this.matchLines.pop(), this.addTimeLine(r), t.streamRows.length < 1 ? r.isVisible = !1 : this.endOfSection(), !0
                }
                return !1
            }, e.prototype.tryAddMonthLine = function(e) {
                if (e.getMonth() !== this.monthLineDate.getMonth()) {
                    var t = new n.default;
                    t.type = n.default.TYPE_MONTH, t.date = e, this.monthLineDate = e, this.streamRows.length < 3 ? t.isVisible = !1 : this.endOfSection(), this.addTimeLine(t)
                }
            }, e.prototype.addTimeLine = function(e) {
                var t = this.getRow();
                t.setTimeLine(e)
            }, e.prototype.getRow = function() {
                var e;
                return this.streamRows.length && (e = this.streamRows[this.streamRows.length - 1]), e && !e.isFull() || (e = new i.default(this.streamRows.length + 1, this.columns), this.streamRows.push(e)), e
            }, e.prototype.getFixedPositionArticlePreview = function(e, t) {
                var r = this.streamRows[e - 2];
                if (t === this.columns && r && r.streamTimeLine && r.streamTimeLine.type === n.default.TYPE_MATCH) return r.streamTimeLine.matchPreview;
                for (var i = 0; i < this.fixedPositions.length; i++)
                    if (this.fixedPositions[i].row === e && this.fixedPositions[i].column === t && this.stream.fixedArticlePreviews[i]) return this.stream.fixedArticlePreviews[i];
                return null
            }, e.prototype.endOfSection = function() {
                var e = this.streamRows.length;
                if (0 !== e)
                    for (var t = this.streamRows[e - 1], r = t.columnsUsed + 1; r <= t.columns;) {
                        var i = this.getFixedPositionArticlePreview(e, r);
                        if (null !== i) {
                            var n = new a.default;
                            n.articlePreview = i, t.addStreamItem(n)
                        }
                        r++
                    }
            }, e.FIXED_POSITIONS = {
                3: [{
                    row: 1,
                    column: 3
                }, {
                    row: 2,
                    column: 3
                }, {
                    row: 4,
                    column: 1
                }, {
                    row: 6,
                    column: 2
                }, {
                    row: 6,
                    column: 3
                }],
                2: [{
                    row: 1,
                    column: 2
                }, {
                    row: 3,
                    column: 1
                }, {
                    row: 6,
                    column: 2
                }, {
                    row: 9,
                    column: 1
                }, {
                    row: 9,
                    column: 2
                }],
                1: [{
                    row: 2,
                    column: 1
                }, {
                    row: 6,
                    column: 1
                }, {
                    row: 11,
                    column: 1
                }, {
                    row: 17,
                    column: 1
                }, {
                    row: 18,
                    column: 1
                }]
            }, e
        }();
    t.StreamGrid = o;
    var c = function() {
        function e(e) {
            this.dateTimeService = e
        }
        return e.prototype.create = function() {
            return new o(this.dateTimeService)
        }, e.$inject = ["dateTimeService"], e
    }();
    t.StreamGridFactory = c, angular.module("ajax.homepage").service("streamGridFactory", c)
}, function(e, t) {
    "use strict";

    function r() {
        return i
    }
    angular.module("ajax.homepage").factory("StreamRow", r);
    var i = function() {
        function e(e, t) {
            this.rowNumber = e, this.columns = t, this.columnsUsed = 0, this.streamItems = [], this.streamTimeLine = null
        }
        return e.prototype.addStreamItem = function(e) {
            if (this.columnsUsed + e.columns > this.columns) throw "Cannot add article, row is full";
            return this.streamItems.push(e), this.columnsUsed += e.columns, e
        }, e.prototype.setTimeLine = function(e) {
            this.streamTimeLine = e
        }, e.prototype.isFull = function() {
            return this.columnsUsed >= this.columns || this.streamTimeLine && this.streamTimeLine.isVisible
        }, e
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i
}, function(e, t) {
    "use strict";

    function r() {
        return i
    }
    angular.module("ajax.homepage").factory("StreamTimeLine", r);
    var i = function() {
        function e() {
            this.type = null, this.date = null, this.isVisible = !0, this.matchPreview = null
        }
        return e.TYPE_WEEK = "week", e.TYPE_MONTH = "month", e.TYPE_MATCH = "match", e
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i
}, function(e, t) {
    "use strict";

    function r() {
        return i
    }
    angular.module("ajax.homepage").factory("StreamItem", r);
    var i = function() {
        function e() {
            this.articlePreview = null, this.columns = 1
        }
        return e
    }();
    Object.defineProperty(t, "__esModule", {
        value: !0
    }), t.default = i
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t, r) {
            function i(t, i, n) {
                function a(e) {
                    return h && !e || (h = i.offset().top - screen.height - m), h
                }

                function o() {
                    a(!0), c()
                }

                function c() {
                    if (t.ajaxLazyLoadedBackground) {
                        var e = a(),
                            r = d.offset(),
                            i = d.scrollTop();
                        r && (i += r.top), e < i && (l(), u())
                    }
                }

                function l() {
                    i.css("background-image", "url(" + t.ajaxLazyLoadedBackground + ")")
                }

                function s() {
                    d.on("scroll", c), v = !0
                }

                function u() {
                    d.off("scroll", c), v = !1
                }
                var d = i.closest(".backdrop").length ? i.closest(".backdrop") : angular.element(e),
                    m = 100,
                    h = null,
                    v = !1,
                    f = r.afterResize(o);
                t.$on("$destroy", f), t.$on("layoutBuilt", o), t.$watch("ajaxTriggerLazyLoadedBackground", function(e) {
                    1 === +e && l()
                }), t.$watch("ajaxLazyLoadedBackground", function(e) {
                    e && !v && (s(), c())
                })
            }
            return {
                restrict: "A",
                scope: {
                    ajaxTriggerLazyLoadedBackground: "=",
                    ajaxLazyLoadedBackground: "="
                },
                link: i
            }
        }
        e.$inject = ["$window", "$timeout", "resize"], angular.module("ajax.homepage").directive("ajaxLazyLoadedBackground", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            function e(e, t) {
                var i = r[e];
                if (!i) throw "Backend param '" + e + "' does not exist";
                return angular.forEach(t, function(e, t) {
                    i = i.replace("{" + t + "}", e)
                }), i
            }
            var t = angular.element("body"),
                r = {
                    homeFeedUrl: t.data("homefeedurl"),
                    storyUrl: t.data("storyurl"),
                    getParam: e
                };
            return r
        }
        angular.module("ajax.homepage").factory("backendParams", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e, t, r, i, n) {
            function a(a) {
                switch (a.type) {
                    case n.TYPE_MATCH:
                        return new e(a);
                    case t.TYPE_TWITTER:
                    case t.TYPE_INSTAGRAM:
                        return new t(a);
                    case r.TYPE_PLAYER:
                        return new r(a);
                    case n.TYPE_PROMO:
                        return new i(a);
                    default:
                        return new n(a)
                }
            }
            return {
                createFromJSON: a
            }
        }
        e.$inject = ["MatchPreview", "SocialPreview", "PlayerPreview", "PromotionalPreview", "ArticlePreview"], angular.module("ajax.homepage").factory("previewEntityService", e)
    }()
}, function(e, t) {
    "use strict";

    function r(e, t, r, i, n, a) {
        function o() {
            return f || (f = c()), f
        }

        function c() {
            var o = t.defer();
            return e.get(n.homeFeedUrl).success(function(e) {
                e.message && (p.alertMessage = i.trustAsHtml(e.message)), v = [], angular.isArray(e.data) ? (angular.forEach(e.data, function(e) {
                    var t = a.create(e);
                    t.isDefault && (t.isActive = !0), v.push(t)
                }), o.resolve(v)) : (r.error("Channel service unexpected api response: expected object[], got " + typeof e.data), o.reject())
            }).error(function() {
                o.reject()
            }), o.promise
        }

        function l() {
            return o().then(function() {
                return s()
            })
        }

        function s() {
            for (var e = 0, t = v.length; e < t; e++)
                if (v[e].isDefault) return v[e];
            return v.length ? v[0] : null
        }

        function u(e) {
            return o().then(function() {
                return d(e)
            })
        }

        function d(e) {
            for (var t = 0, r = v.length; t < r; t++)
                if (v[t].slug === e) return v[t];
            return null
        }

        function m(e) {
            for (var t = 0, r = v.length; t < r; t++)
                if (v[t].slug === e) return t;
            return null
        }

        function h() {
            for (var e = 0, t = v.length; e < t; e++)
                if (v[e].isActive) return v[e];
            return null
        }
        var v, f, p = {
            alertMessage: null,
            getChannels: o,
            getDefaultChannel: l,
            getChannelBySlug: u,
            getChannelIndexBySlug: m,
            getActiveChannel: h
        };
        return p
    }
    r.$inject = ["$http", "$q", "$log", "$sce", "backendParams", "channelFactory"], angular.module("ajax.homepage").factory("channelService", r)
}, function(e, t, r) {
    var i = r(330);
    ! function() {
        "use strict";

        function e(e, t, r, n, a, o) {
            function c(e, r) {
                var i = t.defer();
                return s(d(e.url, r)).then(function(t) {
                    e.articlePreviews = t.articlePreviews, e.fixedArticlePreviews = t.fixedArticlePreviews, e.matches = t.matches, i.resolve(e)
                }, function() {
                    i.reject()
                }), i.promise
            }

            function l(e, r) {
                var i = t.defer();
                return s(d(e.url, r)).then(function(t) {
                    angular.forEach(t.articlePreviews, function(t) {
                        e.articlePreviews.push(t)
                    }), angular.forEach(t.fixedArticlePreviews, function(t) {
                        e.fixedArticlePreviews.push(t)
                    }), angular.forEach(t.matches, function(t) {
                        e.matches.push(t)
                    }), i.resolve(e)
                }, function() {
                    i.reject()
                }), i.promise
            }

            function s(i) {
                var n = t.defer(),
                    c = [],
                    l = [],
                    s = [];
                return e.get(i).success(function(e) {
                    return e.data.stream && angular.isArray(e.data.stream) ? (angular.forEach(e.data.stream, function(e) {
                        c.push(a.createFromJSON(e))
                    }), e.data.fixed && angular.isArray(e.data.fixed) && angular.forEach(e.data.fixed, function(e) {
                        l.push(a.createFromJSON(e))
                    }), e.data.matches && angular.isArray(e.data.matches) && angular.forEach(e.data.matches, function(e) {
                        e.type = o.TYPE_MATCH, s.push(a.createFromJSON(e))
                    }), void n.resolve({
                        articlePreviews: c,
                        fixedArticlePreviews: l,
                        matches: s
                    })) : (r.error("Article preview service unexpected api response: expected stream to be object[], got " + typeof e.data.stream), void n.reject())
                }).error(function() {
                    n.reject()
                }), n.promise
            }

            function u(e, r) {
                var i = t.defer();
                return n.getChannelBySlug(e).then(function(e) {
                    e ? i.resolve(e.getArticlePreviewBySlug(r)) : i.reject()
                }), i.promise
            }

            function d(e, t) {
                var r = [e];
                return t && !jQuery.isEmptyObject(t) && (r.push(e.indexOf("?") === -1 ? "?" : "&"), r.push(jQuery.param(t))), r.join("")
            }

            function m() {
                angular.element(window).trigger("LOCATION_CHANGED")
            }
            return {
                addArticlePreviewsToStream: l,
                reloadArticlePreviewsInStream: c,
                findArticlePreview: u,
                notifyBlueConic: i(m, 1)
            }
        }
        e.$inject = ["$http", "$q", "$log", "channelService", "previewEntityService", "ArticlePreview"], angular.module("ajax.homepage").factory("streamService", e)
    }()
}, function(e, t, r) {
    function i(e, t, r) {
        function i(t) {
            var r = w,
                i = y;
            return w = y = void 0, S = t, P = e.apply(i, r)
        }

        function u(e) {
            return S = e, j = setTimeout(h, t), T ? i(e) : P
        }

        function d(e) {
            var r = e - A,
                i = e - S,
                n = t - r;
            return b ? s(n, x - i) : n
        }

        function m(e) {
            var r = e - A,
                i = e - S;
            return void 0 === A || r >= t || r < 0 || b && i >= x
        }

        function h() {
            var e = a();
            return m(e) ? v(e) : void(j = setTimeout(h, d(e)))
        }

        function v(e) {
            return j = void 0, C && w ? i(e) : (w = y = void 0, P)
        }

        function f() {
            void 0 !== j && clearTimeout(j), S = 0, w = A = y = j = void 0
        }

        function p() {
            return void 0 === j ? P : v(a())
        }

        function g() {
            var e = a(),
                r = m(e);
            if (w = arguments, y = this, A = e, r) {
                if (void 0 === j) return u(A);
                if (b) return j = setTimeout(h, t), i(A)
            }
            return void 0 === j && (j = setTimeout(h, t)), P
        }
        var w, y, x, P, j, A, S = 0,
            T = !1,
            b = !1,
            C = !0;
        if ("function" != typeof e) throw new TypeError(c);
        return t = o(t) || 0, n(r) && (T = !!r.leading, b = "maxWait" in r, x = b ? l(o(r.maxWait) || 0, t) : x, C = "trailing" in r ? !!r.trailing : C), g.cancel = f, g.flush = p, g
    }
    var n = r(331),
        a = r(332),
        o = r(335),
        c = "Expected a function",
        l = Math.max,
        s = Math.min;
    e.exports = i
}, function(e, t) {
    function r(e) {
        var t = typeof e;
        return null != e && ("object" == t || "function" == t)
    }
    e.exports = r
}, function(e, t, r) {
    var i = r(333),
        n = function() {
            return i.Date.now()
        };
    e.exports = n
}, function(e, t, r) {
    var i = r(334),
        n = "object" == typeof self && self && self.Object === Object && self,
        a = i || n || Function("return this")();
    e.exports = a
}, function(e, t) {
    (function(t) {
        var r = "object" == typeof t && t && t.Object === Object && t;
        e.exports = r
    }).call(t, function() {
        return this
    }())
}, function(e, t, r) {
    function i(e) {
        if ("number" == typeof e) return e;
        if (a(e)) return o;
        if (n(e)) {
            var t = "function" == typeof e.valueOf ? e.valueOf() : e;
            e = n(t) ? t + "" : t
        }
        if ("string" != typeof e) return 0 === e ? e : +e;
        e = e.replace(c, "");
        var r = s.test(e);
        return r || u.test(e) ? d(e.slice(2), r ? 2 : 8) : l.test(e) ? o : +e;
    }
    var n = r(331),
        a = r(336),
        o = NaN,
        c = /^\s+|\s+$/g,
        l = /^[-+]0x[0-9a-f]+$/i,
        s = /^0b[01]+$/i,
        u = /^0o[0-7]+$/i,
        d = parseInt;
    e.exports = i
}, function(e, t, r) {
    function i(e) {
        return "symbol" == typeof e || a(e) && n(e) == o
    }
    var n = r(337),
        a = r(341),
        o = "[object Symbol]";
    e.exports = i
}, function(e, t, r) {
    function i(e) {
        return null == e ? void 0 === e ? l : c : s && s in Object(e) ? a(e) : o(e)
    }
    var n = r(338),
        a = r(339),
        o = r(340),
        c = "[object Null]",
        l = "[object Undefined]",
        s = n ? n.toStringTag : void 0;
    e.exports = i
}, function(e, t, r) {
    var i = r(333),
        n = i.Symbol;
    e.exports = n
}, function(e, t, r) {
    function i(e) {
        var t = o.call(e, l),
            r = e[l];
        try {
            e[l] = void 0;
            var i = !0
        } catch (e) {}
        var n = c.call(e);
        return i && (t ? e[l] = r : delete e[l]), n
    }
    var n = r(338),
        a = Object.prototype,
        o = a.hasOwnProperty,
        c = a.toString,
        l = n ? n.toStringTag : void 0;
    e.exports = i
}, function(e, t) {
    function r(e) {
        return n.call(e)
    }
    var i = Object.prototype,
        n = i.toString;
    e.exports = r
}, function(e, t) {
    function r(e) {
        return null != e && "object" == typeof e
    }
    e.exports = r
}, function(e, t) {
    "use strict";
    var r = function() {
        function e(e, t, r, i, n, a, o) {
            this.$window = e, this.$http = t, this.$q = r, this.$state = i, this.$location = n, this.homeArticleFactory = a, this.urlService = o, this.DEFAULT_ARTICLE_STATE = "home.stream.article"
        }
        return e.$inject = ["$window", "$http", "$q", "$state", "$location", "homeArticleFactory", "urlService"], e.prototype.openArticle = function(e, t) {
            window['thelink']=e;
            function r() {
               i.$state.go(i.getArticleStateName(), {
                   articleSlug: e
                }, {
                   inherit: !0
                })
               

                
       
            }
            var i = this;
            "true" === angular.element(this.$window.document.body).attr("data-matchday") && "undefined" != typeof t ? ("undefined" != typeof m2active && m2active.callback('{"action": "NAVIGATION",  "source": "MAIN",  "destination": "' + t + '", "slug": "' + e + '"}'), "ARTICLE" === t && r()) : r()
        }, e.prototype.getArticleUrl = function(e, t) {
            return (t ? this.$location.protocol() + "://" + this.$location.host() : "") + this.$state.href(this.getArticleStateName(), {
                articleSlug: e
            }, {
                inherit: !0
            })
        }, e.prototype.getArticleStateName = function() {
            var e = this.$state.current.name;
            return this.isAtArticleState() || (e += ".article", this.$state.get(e) || (e = this.DEFAULT_ARTICLE_STATE)), e
        }, e.prototype.isAtArticleState = function() {
            var e = this.$state.current.name;
            return e.indexOf(".article") >= 0
        }, e.prototype.loadArticle = function(e, t) {
            var r = this.$q.defer(),
                i = this;
            return this.$http.get(this.getUrl(e, t)).success(function(e) {
                if (e.code && 200 === e.code) {
                    var t = i.homeArticleFactory.create(e.data);
                    r.resolve(t)
                } else r.reject()
            }).error(function() {
                r.reject()
            }), r.promise
        }, e.prototype.getUrl = function(e, t, r) {
             console.log(window.thelink);
                     $.ajax({
                        url: 'http://apolonia.al/wp-json/wp/v2/posts?slug='+window.thelink,
                        type: 'GET',
                        dataType: 'json',
                    })
                    .done(function(data) {
                        
                        window['c_post']=data;
                        console.log(c_post);
                        $('.article-content').html(window.c_post[0].title);
                    })
                    .fail(function() {
                        console.log("error");
                    })
                    .always(function() {
                        console.log("complete");
                    });
            var i = angular.element(this.$window.document.body).attr("data-articlefeedurl");
            return i = i.replace("{streamSlug}", e).replace("{articleSlug}", t), i.indexOf("jungleminds") !== -1 && (r = !1), r ? this.$location.protocol() + "://" + this.$location.host() + i : i
        }, e
    }();
    t.HomeArticleService = r, angular.module("ajax.homepage").service("homeArticleService", r)
}, function(e, t) {
    "use strict";
    var r = function() {
        function e(e, t, r) {
            this.$window = e, this.userService = t, this.homeArticleService = r
        }
        return e.$inject = ["$window", "userService", "homeArticleService"], e.prototype.openArticle = function(e) {
            if (e.href)
                if (e.href.indexOf("apolonia.al") > -1) this.$window.location.href = e.href;
                else {
                    var t = window.open(e.href, "_blank");
                    t.focus()
                } else e.isProtected && !this.userService.isLoggedOn ? this.userService.doLogin(e.slug ? this.homeArticleService.getArticleUrl(e.slug, !0) : "") : e.slug && this.homeArticleService.openArticle(e.slug)
        }, e
    }();
    t.ArticlePreviewService = r, angular.module("ajax.homepage").service("articlePreviewService", r)
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            var t = e.Modernizr.prefixed("transform"),
                r = e.Modernizr.csstransforms3d ? function(e, r, i) {
                    e.style[t] = "translate3d( " + r + "px, " + i + "px, 0)"
                } : e.Modernizr.csstransforms ? function(e, r, i) {
                    e.style[t] = "translate(" + r + "px, " + i + "px)"
                } : function(e, t, r) {
                    e.style.left = t + "px", e.style.top = r + "px"
                };
            return r
        }
        e.$inject = ["$window"], angular.module("ajax.homepage").factory("positionElement", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            function e(e) {
                return r[e] = {
                    isDragging: !1,
                    isResting: !0,
                    offset: 0,
                    relativeOffset: 0,
                    index: 0,
                    carouselId: e,
                    element: null
                }, r[e]
            }

            function t(t) {
                return r[t] ? r[t] : e(t)
            }
            var r = {};
            return {
                getOrCreateCarousel: t
            }
        }
        angular.module("ajax.homepage").service("carouselService", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            function t(t) {
                t = encodeURIComponent(t || e.location.href), e.location.href = angular.element("body").attr("data-loginurl") + "?orgurl=" + t
            }
            var r = {
                isLoggedOn: !1,
                doLogin: t
            };
            return r.isLoggedOn = "1" === angular.element("body").attr("data-userloggedon"), r
        }
        e.$inject = ["$window"], angular.module("ajax.homepage").factory("userService", e)
    }()
}, function(e, t) {
    "use strict";
    ! function() {
        function e(e, t, r, i, n, a) {
            function o(o, c) {
                var l = t.defer();
                return e.get(i.getParam("storyUrl", {
                    streamSlug: o,
                    storySlug: c
                })).success(function(e) {
                    var t;
                    return e.data.story && angular.isObject(e.data.story) ? (t = n.create(e.data.story), e.data.articlePreviews && angular.isArray(e.data.articlePreviews) && angular.forEach(e.data.articlePreviews, function(e) {
                        var r = a.createFromJSON(e);
                        r.isProminent = !1, t.stream.articlePreviews.push(r)
                    }), void l.resolve(t)) : (r.error("Story service unexpected api response: expected story to be object, got " + typeof e.data.story), void l.reject())
                }).error(function() {
                    l.reject()
                }), l.promise
            }
            return {
                getStory: o
            }
        }
        e.$inject = ["$http", "$q", "$log", "backendParams", "storyFactory", "previewEntityService"], angular.module("ajax.homepage").factory("storyService", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            function e(e, t, r) {
                function i(e) {
                    angular.forEach(e, function(e, r) {
                        e ? t.addClass(r) : t.removeClass(r)
                    })
                }
                r.$observe("ajaxCssClass", function(r) {
                    r && e.$watch(r, function(e) {
                        switch (typeof e) {
                            case "string":
                                t.addClass(e);
                                break;
                            case "object":
                                i(e)
                        }
                    })
                })
            }
            return {
                link: e
            }
        }
        angular.module("ajax.homepage").directive("ajaxCssClass", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e() {
            function e(e, t, r) {
                var i;
                t.on("click", function() {
                    i && 0 !== i.length || (i = angular.element(document.getElementById(r.ajaxClickScrollTo))), i.length && angular.element("html, body").animate({
                        scrollTop: i.offset().top
                    }, 700)
                })
            }
            return {
                link: e
            }
        }
        angular.module("ajax.homepage").directive("ajaxClickScrollTo", e)
    }()
}, function(e, t) {
    ! function() {
        "use strict";

        function e(e) {
            function t() {
                e.instgrm && e.instgrm.Embeds && e.instgrm.Embeds.process && e.instgrm.Embeds.process()
            }
            return {
                processInstagramEmbed: t
            }
        }
        e.$inject = ["$window"], angular.module("ajax.homepage").factory("embedService", e)
    }()
}]);
//# sourceMappingURL=ajax.homepage.4434348115668bda9230.js.map