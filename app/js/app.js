var myApp = angular.module("myApp", ['ui.router']);
/***
 * 关于配置的相关内容
 */
myApp.config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.when("", "/PageTab");

    $stateProvider
        .state("PageTab", {
            url: "/PageTab",
            templateUrl: "pages/PageTab.html"
        })
        .state("PageTab.Page1", {
            url: "/Page1",
            templateUrl: 'pages/page1.html'
        })
        .state("PageTab.Page2", {
            url: "/Page2",
            templateUrl: 'pages/page2.html'
        })
        .state("PageTab.Page3", {
            url: "/Page3",
            templateUrl: 'pages/page3.html'
        });
});