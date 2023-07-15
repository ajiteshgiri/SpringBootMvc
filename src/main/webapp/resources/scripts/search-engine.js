//////////////////////////// Autocomplete Starts /////////////////////////////////////////
$.ui.autocomplete.prototype._renderItem = function( ul, item){
          var term = this.term.split(' ').join('|');
          var re = new RegExp("(" + term + ")", "gi") ;
          var t = item.label.replace(re,"<strong>$1</strong>");
          return $( "<li></li>" )
             .data( "item.autocomplete", item )
             .append( "<a>" + t + "</a>" )
             .appendTo( ul );
        };
		
    var getData = function (request, response) {
        $.getJSON(
            "/getAirprotList/" + request.term,
            function (data) {
				response(data);
            });
    };
 
    var selectItem = function (event, ui) {
        $(this).val(ui.item.value);
		if(this.id == "origin")
			setTimeout(function() {
               $("#destination").focus();
            }, 100);
		
		if(this.id == "destination")
			setTimeout(function() {
              $('#departDate').datepicker('show');
            }, 100);
		
        return false;
    }
	
    $("#origin").autocomplete({
		source: getData,
        select: selectItem,
        minLength: 3,
		autoFocus: true
		
    });
	
	$("#destination").autocomplete({
		source: getData,
        select: selectItem,
        minLength: 3,
		autoFocus: true
		
    });
	 
//////////////////////////// Autocomplete Ends /////////////////////////////////////////	

//////////////////////////// Datepicker Starts /////////////////////////////////////////
	if($("#pageType").val() == 'landing')
	{
	var currentDate = new Date();
	$("#departDate").val(currentDate);
	$("#btnDepartDate").html($.datepicker.formatDate( "dd M, yy", currentDate));
	currentDate.setDate(currentDate.getDate()+9)
	$("#returnDate").val(currentDate);
	$("#btnReturnDate").html($.datepicker.formatDate( "dd M, yy", currentDate));
	}
	$("#departDate").datepicker({
		minDate : new Date(),
		maxDate : "+11M",
		onSelect : function(date,event){
			
			$("#btnDepartDate").html($.datepicker.formatDate( "dd M, yy", new Date(date)));
			$("#btnReturnDate").html($.datepicker.formatDate( "dd M, yy", new Date(date)));
			$("#returnDate").val(date);
		},
		onClose : function(date){
			if($("#tripType").val() == "2"){
			$('#returnDate').datepicker("option","minDate", new Date(date));
			$('#returnDate').datepicker('show');
			}
		}
	});
	
	$("#returnDate").datepicker({
		minDate : new Date(),
		maxDate : "+11M",
		onSelect : function(date,event){
			
			$("#btnReturnDate").html($.datepicker.formatDate( "dd M, yy", new Date(date)));
		}
	});
	
//////////////////////////// Datepicker Ends /////////////////////////////////////////

//////////////////////////// Traveler Starts /////////////////////////////////////////
	
	 $("#btnDepartDate").click(function(){
		   $('#departDate').datepicker('show');
	 })
	 
	 $("#btnReturnDate").click(function(){
		   $('#returnDate').datepicker('show');
	 })
	 
	 $("#btnSearchTraveller").click(function(){
		 $("#dropdown-menu").toggle();
	 });
	 
	 $(".applypaxBTN").click(function(){
		 $("#dropdown-menu").hide();
	 });
	  var totPax = 1, adult = 1, child = 0, infant = 0;
	 $(".traveller").change(function(){
		 adult = $("#adult").val();
		 child = $("#child").val();
		 infant = $("#infant").val();
		 totPax = Number(adult)+Number(child)+Number(infant);
		if(totPax > 1){
		 $("#spnTraveler").html(totPax+" Travelers");
		}
		else{
			$("#spnTraveler").html(totPax+" Traveler");
		}
	 })
		
	$(".oneway").click(function(){
		$("#btnReturnDate").prop("disabled","disabled");
		$("#tripType").val("1");
	});
	$(".returns").click(function(){
		$("#btnReturnDate").removeProp("disabled");
		$("#tripType").val("2");
	})

//////////////////////////// Traveler Ends /////////////////////////////////////////

//////////////////////////// Form Validation Starts /////////////////////////////////////////
	 
	 var formData = $("#flightSearch").serialize();
	function randomString() {
		for (var t = "", e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789", n = 0; n < 15; n++) t += e.charAt(Math.floor(Math.random() * e.length));
		return t
	}
var randomStr = randomString();

$.validator.messages.required = '';

	 $("#flightSearch").validate({
		 rules:{
			 origin : {
				 required : true
			 },
			 destination : {
				 required : true
			 },
			 departDate: {
			  required: true,
			 },
			 returnDate: {
			  required: true,
			 }
		 },
		  errorPlacement: function(error, element) {   },
		   submitHandler: function(form) {
			   var showErrorPop = false;
			   var errHtml = "";
			 if($("#origin").val() == $("#destination").val()){
				errHtml = errHtml+"<li>From airport & To airport must be different.</li>";
				 showErrorPop = true;
				 
			 }
			 if(totPax > 9){
				 errHtml = errHtml+"<li>Total number of traveler can't be greater than 9.</li>";
				 showErrorPop = true;
			 }
			 if(infant > adult){
				 errHtml = errHtml+"<li>Number of Infants can't exceed number of adults.</li>";
				 showErrorPop = true;
			 }
			 if(showErrorPop){
				  $("#ulFlightError").html(errHtml);
				  $(".warning-popup").addClass("click_popup");
				 return false;
			 }
			 if(formData == $("#flightSearch").serialize()){
				 $("#sameSearch").show();
			 }
			else{	 
				form.action='/flight-listing/'+randomStr;
				form.submit();
			 }
		  }
	 })
	 
	 $(".close").click(function(){
		 $(".warning-popup").removeClass("click_popup");
	 })
	 
//////////////////////////// Form Validation Ends /////////////////////////////////////////	 