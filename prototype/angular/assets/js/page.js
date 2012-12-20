//var app = angular.module('editable', []);
//
//app.directive('inlineEdit', function factory(injectables) {
//    var directiveDefinitionObject = {
//        template: '<div></div>',
//        restrict: 'E',
//        link: function postLink(scope, iElement, iAttrs) { ... }
//    };
//    return directiveDefinitionObject;
//});

function removeItem(array, item) {
    for (var i in array) {
        if (array[i] == item) {
            array.splice(i, 1);
            break;
        }
    }
}

function PageCtrl($scope) {
    $scope.page = {title:'Hello, world!',
        dialog:'This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.',
        hero_button_text:'Learn more »',
        portfolios:[
            {title:'Heading',
                description:'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                button_text:'View details »'},
            {title:'Heading',
                description:'Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. ',
                button_text:'View details »'}
        ]};

    $scope.addNew = function () {
        if ($scope.allowedToAddNew()) {
            $scope.stories.push({id:0, title:'', description:'', editing:true})
        }
    };
}