var mod;

mod = angular.module('on-scroll', []);

mod.value('THROTTLE_MILLISECONDS', null);

mod.directive('onScroll', ['$rootScope', '$window', '$timeout', 'THROTTLE_MILLISECONDS',
    function ($window, $timeout) {
        return {
            restrict: "A",
            link: function (scope, element, attr) {
                var window = angular.element($window);
                var scrollEnabled = true;
                //var origHeight = window[0].screen.height;
                //var height = (origHeight * 0.55);
                var lastPosition = 0;
                var repeat = false;
                var reset = true;
                var startingThreshold = attr.onScrollThreshold;
                var threshold = attr.onScrollThreshold;
                repeat = attr.onScrollRepeat;
                reset = attr.onScrollReset;
                // bind the digest cycle to be triggered by the scroll event
                // when it exceeds a threshold
                window.bind('scroll', function () {
                    if (scrollEnabled == true) {
                        scope.onScrollPosition = window[0].scrollY;
                        scope.$digest();
                        // console.log( scope.onScrollPosition );
                    }
                });
                //emit a message called scrollEnabled
                scope.$on('scrollEnabled', function () {
                    //console.log('message recieved' );
                    scrollEnabled = false;
                    scope.$eval(attr.onScrollTop);
                });

                scope.$watch(
                    function () {
                        //determine that we are scrolling down
                        if (scope.onScrollPosition > lastPosition) {
                            lastPosition = scope.onScrollPosition
                            //see if we have passed the threshold
                            if (scope.onScrollPosition >= threshold) {
                                // increment the threshold if we are repeating
                                if (repeat == true) {
                                    threshold += (threshold * 1.5);
                                }
                                // invoke the function passed into the 'whenScrolled' attribute
                                return attr.onScroll;
                            }
                            else return false;
                        }
                        if (scope.onScrollPosition < lastPosition) {
                            lastPosition = scope.onScrollPosition
                            if (scope.onScrollPosition <= startingThreshold) {
                                // reset the threshold if reset is true
                                if (reset == true) {
                                    threshold = startingThreshold;
                                }
                                // invoke the function passed into the 'whenScrolled' attribute
                                return attr.onScrollUnset;
                            }
                            else return false;
                        }
                        else return false;
                    },
                    function (newValue) {
                        // invoke the function passed into the 'whenScrolled' attribute
                        scope.$eval(newValue);
                    }
                );
            }
        }
    }]);
