angular.module('clientApp')
    .directive('menuToggle', function(){
    // Runs during compile
    return {
        // name: '',
        // priority: 1,
        // terminal: true,
        // scope: {}, // {} = isolate, true = child, false/undefined = no change
        // controller: function($scope, $element, $attrs, $transclude) {},
        // require: 'ngModel', // Array = multiple requires, ? = optional, ^ = check parent elements
        // restrict: 'A', // E = Element, A = Attribute, C = Class, M = Comment
        // template: '',
        // templateUrl: '',
        // replace: true,
        // transclude: true,
        // compile: function(tElement, tAttrs, function transclude(function(scope, cloneLinkingFn){ return function linking(scope, elm, attrs){}})),
        link: function($scope, iElm, iAttrs, controller) {
            var $elem = angular.element(iElm);
            
            var nav = document.querySelector(".header nav")
            var $nav = angular.element('.header nav');
            console.group("nav");
            console.log($nav);
            console.groupEnd("nav");
            $elem.on('click', function() {
                console.log("clicked");
                $nav.animate({ height: 'toggle', opacity: 'toggle' }, 'slow');
            })
        }
    };
});