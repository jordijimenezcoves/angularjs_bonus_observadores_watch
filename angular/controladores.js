var app = angular.module('paginacionApp.controladores',[]);

app.controller('observadorCtrl', ['$scope', function ($scope) {
	
	
    $scope.nombre = "Josito";

    $scope.$watch('nombre', function(valorNuevo, valorViejo){
        console.log(valorViejo + " => " + valorNuevo);
    });

	

}]);