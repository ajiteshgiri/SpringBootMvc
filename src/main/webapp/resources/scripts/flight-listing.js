var savvyFlightApp = angular.module("savvyFlightApp",[]);

savvyFlightApp.factory("flightFactory",function($http){
	return{
		getFlightResult:function(){
			return $http({
				url : "/getFlightResponse",
				method : "GET",
				headers : {
					'Content-Type' : '*'
				}
			})
		}
	}
	
})


savvyFlightApp.controller("savvyFlightCntrl",function($scope,$http,$window,$timeout,flightFactory){
	$scope.title = "BookSavvy";
	console.log($scope.title);
	$scope.flightsResponse  = [];
	$scope.airports  = [];
	$scope.airlines  = [];
	$scope.numberOfResult = 10;
	$scope.sortkey = 'fare.grandTotal';
	$scope.sortingValues = ["Low to High","High to Low"];
	$scope.sortValue = "Low to High";
	$scope.sliderMinFare = 0;
	$scope.sliderMaxFare = 0;
	$scope.minFare = 0;
	$scope.maxFare = 0;
	$scope.selectedAirlines=[];
	$scope.stopsList = [];
	$scope.selectedStops=[];
	$scope.nonstopfare = 0.0,$scope.onestopfare = 0.0,$scope.twostopfare = 0.0;
	 $scope.nonstopcount = 0,$scope.onestopcount = 0,$scope.twostopcount = 0;
	 $scope.departAirports = [];
	$scope.selectedDepartAirports = [];
	$scope.returnAirports = [];
	$scope.selectedReturnAirports = [];
	$scope.airlinesList = [];
	$scope.airlineFilterList = [];
	 $scope.tripType = $("#tripType").val();
	$scope.loading = true;
	var flightResult  = flightFactory.getFlightResult();
	flightResult.then(function(response){
		$scope.flightsResponse  = response.data;
		$scope.airports  = response.data.airport;
		$scope.airlines  = response.data.airline;
		console.log(response.data);
		$scope.sliderMinFare = $scope.flightsResponse.flightResult[0].fare.grandTotal;
		$scope.sliderMaxFare = $scope.flightsResponse.flightResult[$scope.flightsResponse.flightResult.length-1].fare.grandTotal;
		$scope.minFare = $scope.flightsResponse.flightResult[0].fare.grandTotal;
		   $scope.maxFare = $scope.flightsResponse.flightResult[$scope.flightsResponse.flightResult.length-1].fare.grandTotal;
		  
		   angular.forEach($scope.flightsResponse.flightResult, function(flight){
			   if(flight.outBound.length == 1){
		    	  $scope.nonstopcount++;
				  if($scope.nonstopfare == 0.0){
					  $scope.nonstopfare = flight.fare.grandTotal;
				  }
				  else if($scope.nonstopfare > flight.fare.grandTotal){
					  $scope.nonstopfare = flight.fare.grandTotal;
				  }
				  flight['stops'] = 0;
			  }
			  
			  else if(flight.outBound.length == 2){
		    	  $scope.onestopcount++;
				  if($scope.onestopfare == 0.0){
					  $scope.onestopfare = flight.fare.grandTotal;
				  }
				  else if($scope.onestopfare > flight.fare.grandTotal){
					  $scope.onestopfare = flight.fare.grandTotal;
				  }
				  flight['stops'] = 1;
			  }
			  else if(flight.outBound.length == 3){
		    	  $scope.twostopcount++;
				  if($scope.twostopfare == 0.0){
					  $scope.twostopfare = flight.fare.grandTotal;
				  }
				  else if($scope.twostopfare > flight.fare.grandTotal){
					  $scope.twostopfare = flight.fare.grandTotal;
				  }
				  flight['stops'] = 2;
			  }
			  
			  if($scope.departAirports.length == 0){
					var departObj = {"airport":flight.outBound[0].fromAirport,"fare":flight.fare.grandTotal};
					$scope.departAirports.push(departObj);
				}
				else {
					$scope.airportMatch = false;
					angular.forEach($scope.departAirports,function(depart){
						if(depart.airport == flight.outBound[0].fromAirport){
							$scope.airportMatch = true;
							
						}
					})
					if($scope.airportMatch == false){
						var departObj = {"airport":flight.outBound[0].fromAirport,"fare":flight.fare.grandTotal};
						$scope.departAirports.push(departObj);
					}
				}
				if($scope.tripType == 2){
					
				if($scope.returnAirports.length == 0){
					var returnObj = {"airport":flight.inBound[0].fromAirport,"fare":flight.fare.grandTotal};
					$scope.returnAirports.push(returnObj);
				}
				else {
					$scope.airportMatch = false;
					angular.forEach($scope.returnAirports,function(retr){
						if(retr.airport == flight.inBound[0].fromAirport){
							$scope.airportMatch = true;
							
						}
					})
					if($scope.airportMatch == false){
						var returnObj = {"airport":flight.inBound[0].fromAirport,"fare":flight.fare.grandTotal};
						$scope.returnAirports.push(returnObj);
					}
				}
				}
				/*if($scope.airlinesList.length == 0){
					var airlines = flight.airline.split(",");
					angular.forEach(airlines,function(airline){
						$scope.airlinesList.push(airline);
					})
					
				}
				else{
					$scope.airlines = flight.airline.split(",");
					angular.forEach($scope.airlinesList,function(air1){
						angular.forEach($scope.airlines,function(air2){
						if(air1.indexOf(air2) == -1){
							$scope.airlinesList.push(air2);
						}
						})
					})
				}*/
				
				
				 $scope.airlineMatch = false;
			  if($scope.airlineFilterList.length == 0){
				 $scope.airlineMatch = true;
				 if(flight.airline.length == 2){
				  var airline = {"code":flight.airline,"fare":flight.fare.grandTotal};
					$scope.airlineFilterList.push(airline);
				 }
				 else{
					 var airline = {"code":"XXX","fare":flight.fare.grandTotal};
					$scope.airlineFilterList.push(airline);
				 }
				 
			  }
			  else{
				     angular.forEach($scope.airlineFilterList, function(airline){
					  if(airline.code == flight.airline){
						  $scope.airlineMatch = true;
						  if(airline.fare > flight.fare.grandTotal){
						  airline.fare = flight.fare.grandTotal;
						  //break;
						  }
					  }
					  else if(flight.airline.length > 2 && airline.code == 'XXX'){
						  $scope.airlineMatch = true;
						  if(airline.fare > flight.fare.grandTotal){
						  airline.fare = flight.fare.grandTotal;
						  //break;
						  }
					  }
					  
				  });
			  }
				if(!$scope.airlineMatch){
					if(flight.airline.length == 2){
					var airline = {"code":flight.airline,"fare":flight.fare.grandTotal};
						$scope.airlineFilterList.push(airline);
					}
					else{
						var airline = {"code":"XXX","fare":flight.fare.grandTotal};
					$scope.airlineFilterList.push(airline);
					}
				}
		   });
		   
		    $scope.stopsList = [{"count":$scope.nonstopcount,"fare":$scope.nonstopfare,"name":"Direct","value":0},{"count":$scope.onestopcount,"fare":$scope.onestopfare,"name":"1 Stop","value":1},{"count":$scope.twostopcount,"fare":$scope.twostopfare,"name":"2 Stop","value":2}];
			
		    $("#slider-range").slider({
               range:true,
               min: $scope.minFare,
               max: $scope.maxFare,
               values: [$scope.sliderMinFare, $scope.sliderMaxFare],
               slide: function( event, ui ) {
                  $("#price").html( "$" + Math.floor(ui.values[0]) + " - $" + Math.ceil(ui.values[1]));
				  //var scope = angular.element(document.getElementById('savvyFlightCntrl')).scope();
				  $scope.$apply(function() {
                        $scope.sliderMinFare = ui.values[0];
						$scope.sliderMaxFare = ui.values[1];
					
                    });
               }
            });
			
			$("#price").html("$"+Math.floor($scope.sliderMinFare) +" - $"+Math.ceil($scope.sliderMaxFare));
		   
		  $scope.loading = false;
	})
	
	
		$scope.priceRange = function(flights){
		
		return flights.fare.grandTotal >= $scope.sliderMinFare && flights.fare.grandTotal <= $scope.sliderMaxFare;
	}
	

		$scope.onclickAirline = function(code){
		var index = $scope.selectedAirlines.indexOf(code);
		if(index == -1){
			$scope.selectedAirlines.push(code);
		}
		else{
			$scope.selectedAirlines.splice(index, 1);
		}
		
	}
	$scope.stopsFilter = function(flights){
		
		return $scope.selectedStops[flights.stops] || noFilter($scope.selectedStops);
	}
	$scope.airlinesFilter = function(flights){
		if($scope.selectedAirlines.length > 0){
			var matched = false;
			angular.forEach($scope.selectedAirlines, function(airline){
				if(airline.length == 2 && airline == flights.airline){
					matched = true;
					//return flights;	
				}
				else if(flights.airline.length > 2 && airline == 'XXX'){
					matched = true;
					//return flights;
				}
			})
			if(matched)
			return flights;
		}
		else{
			return flights;
		}
	}
	$scope.departAirportFilter = function(flights){
		
		return $scope.selectedDepartAirports[flights.outBound[0].fromAirport] || noFilter($scope.selectedDepartAirports);
	}
	$scope.returnAirportFilter = function(flights){
		if(flights.inBound !== undefined){
		return $scope.selectedReturnAirports[flights.inBound[0].fromAirport] || noFilter($scope.selectedReturnAirports);
		}
		else{
		return noFilter($scope.selectedReturnAirports);	
		}
	}
	$scope.getAirportName = function(code){
		var airportName = code;
		angular.forEach($scope.airports,function(airport){
			if(airport.airportCode == code){
				airportName =  airport.airportName;
			}
		})
			
		return airportName;
	}
	
	$scope.getCityName = function(code){
		var cityName = code;
		angular.forEach($scope.airports,function(airport){
			if(airport.airportCode == code){
				cityName =  airport.cityName;
			}
		})
			
		return cityName;
	}
	
	$scope.getAirlineName = function(code){
		
		var airlineName = code;
		if(code.length == 2){
		angular.forEach($scope.airlines,function(airline){
			if(airline.code == code){
				airlineName =  airline.name;
			}
		})
		}
		else{
			airlineName = "Multiple Airlines";
		}		
		return airlineName;
	}
	
	$scope.getCabinName = function(id){
		var cabin = "Economy";
		if(id==1){
			cabin = "Economy";
		}
		else if(id==2){
			cabin = "PremiumEconomy";
		}
		else if(id==3){
			cabin = "Business";
		}
		else if(id==4){
			cabin = "First";
		}
		else{
			cabin = "Mixed";
		}
		return cabin;
	}
	
	$scope.dayDiff = function(input1,input2){
		var date2 = new Date(input2);
	  var date1 = new Date(input1);
	  var timeDiff = Math.abs(date2.getTime() - date1.getTime());
	  $scope.dayDifference = Math.ceil(timeDiff / (1000 * 3600 * 24));
	  return $scope.dayDifference;
	}
	
	$scope.LoadMore = function(){
		$scope.numberOfResult = $scope.numberOfResult+5;
	}
	
	$scope.showFlightDetails = function(index){
		$("#flightdetailexpandcollaps_"+index+"").slideToggle();
	}
	
	$scope.checkout = function(resultId){
		var searchId = $("#searchId").val();
		 $window.location.href = "/basket-purchase/"+searchId+"/"+resultId;
	}
	
	$scope.sortFlights = function(){
		$scope.reverse = !$scope.reverse;
	}
	
	$scope.OpenbaggageFees = function (bagairline) {
				
		               $window.open("/baggage-info?airlines="+bagairline, "popup", "width=900,height=600,left=10,top=150");
		           }
				   
	function noFilter(filterObj) {
	        for (var key in filterObj) {
	      
	            if (filterObj[key]) {
	                return false;
	            }
	        }
	        return true;
	    }
})

savvyFlightApp.filter('decimalValue', ['$filter',
  function($filter) {
    return function(input) {
      var fare = input.toFixed(2).toString();
	  return fare.split(".")[1];
    }
  }
]);

savvyFlightApp.filter('minToHour', ['$filter',
  function($filter) {
    return function(input) {
		
      var inp = new Date(0, 0, 0, 0, input, 0); // assumes minutes as an input
      var m = inp.getMinutes();
      var h = inp.getHours();
      var d = inp.getDay();
		h = h+(d*24);
      return h + 'h ' + m + 'm ';
    }
  }
]);
$(document).ready(function(){
var departDate = $("#departDate").val();
var returnDate = $("#returnDate").val();
$("#btnDepartDate").html($.datepicker.formatDate( "dd M, yy", new Date(departDate)));
$("#btnReturnDate").html($.datepicker.formatDate( "dd M, yy", new Date(returnDate)));
var cabin = $("#cabinVal").val();
$("#cabin").val(cabin);
		var adult = $("#adultVal").val();
		var child = $("#childVal").val();
		var infant = $("#infantVal").val();
		$("#adult").val(adult);
		$("#child").val(child);
		$("#infant").val(infant);
		var totPax = Number(adult)+Number(child)+Number(infant);
		if(totPax > 1){
		 $("#spnTraveler").html(totPax+" Travelers");
		}
		else{
			$("#spnTraveler").html(totPax+" Traveler");
		}
		 
})

     