var myBasket = angular.module("myBasket", []);

myBasket.controller("basketController",function($scope,$http){

	var config = {

		method:"GET",
		url:"datos.json"

		}

	var respuesta = $http(config);
					
	respuesta.then(function(response){
					  
		$scope.productos=response.data;
						
	});

	$scope.carrito = [];
		    
	$scope.agregar = function(p){

		var articuloEnCarritoActual;

		for(var i = 0; i < $scope.carrito.length; i++){

		    if($scope.carrito[i].articuloEnCarritoNuevo.id == p.id){

		        articuloEnCarritoActual = $scope.carrito[i];

		    }

		}

		if(!articuloEnCarritoActual){

		    $scope.carrito.push({

		        articuloEnCarritoNuevo: p,
		        cantidad: 1

		    });

		}else{

		    articuloEnCarritoActual.cantidad++;

		}

	}

	$scope.eliminar = function(fila) {
		    
		$scope.carrito.splice(fila, 1);
		    
	}

	$scope.total = function () {

		var totalADevolver = 0;

		for (var i = 0; i < $scope.carrito.length; i++) {

		    totalADevolver = totalADevolver + $scope.carrito[i].cantidad * $scope.carrito[i].articuloEnCarritoNuevo.precio;

		    if($scope.carrito[i].cantidad<1){

		        $scope.carrito[i].cantidad=1;
		            	
		    }
		            
		}

		return totalADevolver;

	};

	$scope.estilo = function(){

		return {'background-color':'rgba(253,207,109,0.75)','color':'gray'};
		    	
	}
   
});