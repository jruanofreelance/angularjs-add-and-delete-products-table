var myBasket = angular.module("myBasket", []);

myBasket.controller("basketController",function($scope,$http){

	var config = {

		method:"GET",
		url:"datos.json"

		}

	$http(config).then(function(response){
					  
		$scope.products = response.data;
						
	});

	$scope.basket = [];
		    
	$scope.addProduct = function(p){

		var currentItem;

		for(var i = 0; i < $scope.basket.length; i++){

		    if($scope.basket[i].newItem.id == p.id){

		        currentItem = $scope.basket[i];

		    }

		}

		if(!currentItem){

		    $scope.basket.push({

		        newItem: p,
		        quantity: 1

		    });

		}else{

		    currentItem.quantity++;

		}

	}

	$scope.removeProduct = function(fila) {
		    
		$scope.basket.splice(fila, 1);
		    
	}

	$scope.total = function () {

		var totalAmount = 0;

		for (var i = 0; i < $scope.basket.length; i++) {

		    totalAmount = totalAmount + $scope.basket[i].quantity * $scope.basket[i].newItem.price;

		    if($scope.basket[i].quantity<1){

		        $scope.basket[i].quantity=1;
		            	
		    }
		            
		}

		return totalAmount;

	};

	$scope.style = function(){

		return {'background-color':'rgba(253,207,109,0.75)','color':'gray'};
		    	
	}
   
});