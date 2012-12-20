var app = angular.module('editable', []);

app.directive('ngEnter', function() {
    return function(scope, elm, attrs) {
        elm.bind('keypress', function(e) {
            if (e.charCode === 13) scope.$apply(attrs.ngEnter);
        });
    };
});

app.directive('editableString', function factory() {
    return {
        template:'<span ng-hide="editMode" ng-dblclick="editMode=true">{{prop}}</span>' +
                 '<span ng-show="editMode">' +
                    '<input ng-enter="editMode=false" type="text" ng-model="prop"/><a herf="#" ng-click="editMode=false">done</a>' +
                 '</span>',
        restrict:'E',
        scope: {prop: '=bind'}
    };
});
app.directive('editableText', function factory() {
    return {
        template:'<span ng-hide="editMode" ng-dblclick="editMode=true">{{prop}}</span>' +
                 '<span ng-show="editMode">' +
                    '<textarea ng-model="prop"></textarea><a herf="#" ng-click="editMode=false">done</a>' +
                 '</span>',
        restrict:'E',
        scope: {prop: '=bind'}
    };
});

function PageCtrl($scope) {
    $scope.page = {title:'Hello, world!',
        dialog:'This is a template for a simple marketing or informational website.',
        hero_button_text:'Learn more »',
        portfolios:[
            {title:'Heading',
                description:'Donec',
                button_text:'View details »'},
            {title:'Heading',
                description:'Donec',
                button_text:'View details »'}
        ]};

    $scope.addNew = function () {
        if ($scope.allowedToAddNew()) {
            $scope.stories.push({id:0, title:'', description:'', editing:true})
        }
    };
}