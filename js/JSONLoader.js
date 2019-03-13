//controller.js
var JSONLoader = function(){
	
	this.loadData = function(url, successHandler, errorHandler){
		$.ajax({
		  dataType: "json",
		  url: url,
		  success: successHandler,
		  error:errorHandler
		});
	}	
}

//model.js
var ServiceWrapper = function(){

	this.loadINITData = function(url, successHandler, errorHandler){
		var obj = new JSONLoader();
		obj.loadData(url, successHandler, errorHandler);
	}


}

/* Load Each Test Json  */
function jsonSuccessHandler(data){
	console.log(":: Data Loading Completed ::");
	var currentPage = new MCQ();
	currentPage.init(data);
	//console.log(MCQ);
}

function jsonErrorHandler(){
	console.log(":: Data Loading Failed ::");
}


