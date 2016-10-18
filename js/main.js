var myApp = angular.module('myApp', ['dx']);
myApp.controller("demoController", function ($scope) {
    $scope.actionSheetVisible = false;
    $scope.actionSheetCancelText = "Cancel";
    $scope.actionSheetData = [
        { text: "Reply" },
        { text: "ReplyAll" },
        { text: "Forward" },
        { text: "Delete" }
    ];
    $scope.showActionSheet = function () {
        $scope.actionSheetVisible = true;
    };
});
angular.element(document).ready(function () {
    angular.bootstrap(document, ['myApp']);
});
