var _ = require('lodash');

angular.module('JoesApp').controller('MyCtrl', ($scope, Events) => {
    $scope.event = _.head(Events);
});