requirejs.config({
  baseUrl: 'assets/js/lib/',
  paths: {
    jquery: '//cdnjs.cloudflare.com/ajax/libs/jquery/1.8.2/jquery.min',
    angular: '//cdnjs.cloudflare.com/ajax/libs/angular.js/1.0.2/angular.min',
    bootstrap: '//cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/2.1.1/bootstrap.min',
    wysihtml5: 'http://jhollingworth.github.com/bootstrap-wysihtml5/lib/js/wysihtml5-0.3.0',
    bsWysihtml5: 'http://jhollingworth.github.com/bootstrap-wysihtml5/src/bootstrap-wysihtml5'
  },
  shim: {
    'jquery': {
      exports: 'jquery'
    },
    'bootstrap': {
      deps: ['jquery'],
      exports: 'bootstrap'
    },
    'angular': {
      exports: 'angular'
    },
    'wysihtml5': {
      exports: 'wysihtml5'
    },
    'bsWysihtml5': {
      deps: ['wysihtml5', 'bootstrap'],
      exports: 'bootstrap-wysihtml5'
    }
  }
});


angular.module('richtext', [])
  .directive('richtext', function () {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        scope.$watch( 'richtext', function(val) {
          console.log("Watching");
        }, true );

        require(['jquery', 'bsWysihtml5'], function() {
          $(element).wysihtml5();
        });
      }
    }
});