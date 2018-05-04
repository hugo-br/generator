app.controller('MenuBanners', function ($scope) {

    $scope.imgHeight = "";
    $scope.imgWidth = "";




});


app.directive("menuPreview", function () {
    return {
        template: "<div><button ng-click='preview()' class='btn btn-default'>Preview English</button><button ng-click='previewFR()' class='btn btn-default'>Preview French</button><div class='preview-menu'></div></div>"
        , controller: function ($scope, $element) {
            $scope.preview = function () {
                    var val = angular.element('#menu-eng').val();
                    var myElements = $element.find('.preview-menu');
                    myElements.html('');
                    myElements.html(val);
                }
                , $scope.previewFR = function () {
                    var val = angular.element('#menu-fr').val();
                    var myElements = $element.find('.preview-menu');
                    myElements.html('');
                    myElements.html(val);
                }
        }
    }
});