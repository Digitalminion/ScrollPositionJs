ScrollPositionJs
================

ScrollPositionJs is a directive for AngularJS to evaluate or reverse an expression when a particular scroll position is reached by the directive's element. This library can be used to implement infinite scrolling, but that is just the beggining;

 * Hide or unhide fixed content
 * Create scroll position progress bars
 * Display helpful popovers at when content is actually reached

Demos
-----

Check out the running demos [at the ScrollPositionJs web site](http://github.com/Digitalminion/ScrollPositionJs/demos.html).

Version Numbers
---------------

ScrollPositionJs follows [semantic versioning](http://semver.org/) and uses the following versioning scheme:

 * Versions starting with 0 (e.g. 0.1.0, 0.2.0, etc.) are for initial development, and the API is not stable
 * Versions with an even minor version (1.0.0, 1.4.0, 2.2.0, etc.) are stable releases
 * Versions with an odd minor version (1.1.0, 1.3.0, 2.1.0, etc.) are development releases

The [download page](http://github.com/Digitalminion/ScrollPositionJs/#download) allows you to pick among various versions and specify which releases are stable (not including pre-release builds).

Getting Started
---------------

 * Download ScrollPositionJs from [the download page on the ScrollPositionJs web site](http://github.com/Digitalminion/ScrollPositionJs/#download) 
 * Include the script tag on your page after the AngularJS script tags (ScrollPositionJs does not require JQuery)

        <script type='text/javascript' src='path/to/angular.min.js'></script>
        <script type='text/javascript' src='path/to/dm-scroll-position.js'></script>

 * Ensure that your application module specifies `on-scroll` as a dependency:

        angular.module('myApplication', ['on-scroll']);

 * Use the directive by specifying an `on-scroll` attribute on an element.

        <div on-scroll="myFunction()" on-scroll-threshold="3"></div>

Note that neither the module nor the directive use the `ng` prefix, as that prefix is reserved for the core Angular module.

Detailed Documentation
----------------------

ScrollPositionJs accepts several attributes to customize the behavior of the directive; detailed instructions can be found [on the ScrollPositionJs web site](http://github.com/Digitalminion/ScrollPositionJs/documentation.html).


License
-------

ScrollPositionJs is licensed under the MIT license. See the LICENSE file for more details.

Testing
-------

ScrollPositionJs doesn't have tests yet, sorry.... if someone wants to help with that it would be great.
