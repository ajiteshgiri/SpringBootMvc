(function($,W,D)
{
    var JQUERY4U = {};

    JQUERY4U.UTIL =
    {
        setupFormValidation: function()
        {
        	$('.numbersOnly').keyup(function () {
        	    if (this.value != this.value.replace(/[^0-9\.]/g, '')) {
        	       this.value = this.value.replace(/[^0-9\.]/g, '');
        	    }
        	});
        				 
			  $('.alphanumerics').keyup(function() {
                 if (this.value != this.value.replace(/[^a-zA-Z0-9 ]/g, '')) {
                     this.value = this.value.replace(/[^a-zA-Z0-9 ]/g, '');
                 }
             });
			 
			 $('.addressOnly').keyup(function() {
                 if (this.value != this.value.replace(/[^a-zA-Z0-9_./#, ]/g, '')) {
                     this.value = this.value.replace(/[^a-zA-Z0-9_./#, ]/g, '');
                 }
             });
			 
        	 $('.groupOfAmont').keyup(function(){
        		    var val = $(this).val();
        		    if(isNaN(val)){
        		         val = val.replace(/[^0-9\.]/g,'');
        		         if(val.split('.').length>2){ 
        		             val =val.replace(/\.+$/,"");
        		         }
        		        
        		     }
        		    if((val.indexOf('-') != -1)){
   		        	 val =val.replace(/\-/g, "");
        		    }
        		    $(this).val(val.trim()); 
        		   
        		});
        	 
        	 
        	$('.numbersastOnly').keyup(function () {
        	    if (this.value != this.value.replace(/[^0-9\.*]/g, '')) {
        	       this.value = this.value.replace(/[^0-9\.*]/g, '');
        	    }
        	});
        	$('.numbersastseveOnly').keyup(function () {
           	 
        		if($("#paymentDetails-cardCode").val()=="American Express"){
        			if (this.value.length>15) {
            	    	this.value = this.value.substring(0, 15);
            	    	return false;
        			}
	            }else{
        	    if (this.value.length>16) {
        	    	this.value = this.value.substring(0, 16);
        	    	return false;
         	       
         	    }
	            }
        	});
        	
        	$('.textOnly').keyup(function () {
        		  if (this.value != this.value.replace(/[^a-zA-Z ]+/g, '')) {
        		       this.value = this.value.replace(/[^a-zA-Z ]+/g, '');
        		    }
        	});
        	
        	$("#paymentDetails_Country").change(function () {
               // $('div.box').hide();
                //$('div.box.' + $(this).val()).show();
        		 if($("#paymentDetails_postalCode").val().length > 0){
        		$("#booking").validate().element("#paymentDetails_postalCode");
        		 }
        	
            })
            
            $("#paymentDetails-cardCode").change(function () {
            	
            	var card_number = jQuery("#paymentDetails_CardNumber").val();
            	if(card_number == ""){
            		card_number = jQuery("#paymentDetails_MaskCardNumber").val();
            	}
            	 var value=jQuery("#paymentDetails_MaskCardNumber").val();
            	    if(value.indexOf('*') >= 0){
            	    	
            	    }else{
            	    	if(value != ""){
            	    		card_number = jQuery("#paymentDetails_MaskCardNumber").val();
            	    	}
            	    }
            	    	
            	if(card_number != ""){
            		jQuery("#paymentDetails_CardNumber").val("");
            		jQuery("#paymentDetails_MaskCardNumber").val(card_number);
            	var conds=$("#booking").validate().element("#paymentDetails_MaskCardNumber");
            	if(conds){
            		jQuery("#paymentDetails_CardNumber").val(card_number);

            	 var new_card_number = "************";
            	 for(var loop2=12; loop2 < card_number.length; loop2++)
            	 {
            	     new_card_number = new_card_number+card_number.charAt(loop2);
            	 }
            	 jQuery("#paymentDetails_MaskCardNumber").val(new_card_number);
            	}
            	}

         
        		 if($("#paymentDetails_CvvNo").val().length > 0){
             		$("#booking").validate().element("#paymentDetails_CvvNo");
             		 }
        		 
            })
         
            
            //form validation rules
            $("#booking").validate({
            	
                rules: {       
                	       'passengerDetails[0].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                		   'passengerDetails[0].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[0].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[0].dobDay': {
                		     selectdate: true,
                		     age_val:0
                			},
                			'passengerDetails[0].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:0
                		     
                			},
                			'passengerDetails[0].dateOfYear': {
                		     selectyear: true,
                		     age_val:0
                			},
                			'passengerDetails[1].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                		    'passengerDetails[1].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                		    
                			}, 
                			'passengerDetails[1].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[1].dobDay': {
                		     selectdate: true,
                		     age_val:1
                			},
                			'passengerDetails[1].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:1
                			},
                			'passengerDetails[1].dateOfYear': {
                		     selectyear: true,
                		     age_val:1
                			},
                			'passengerDetails[2].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerDetails[2].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[2].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[2].dobDay': {
                		     selectdate: true,
                		     age_val:2
                			},
                			'passengerDetails[2].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:2
                			},
                			'passengerDetails[2].dateOfYear': {
                		     selectyear: true,
                		     age_val:2
                			},   
                			'passengerDetails[3].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerDetails[3].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[3].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[3].dobDay': {
                		     selectdate: true,
                		     age_val:3
                			},
                			'passengerDetails[3].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:3
                			},
                			'passengerDetails[3].dateOfYear': {
                		     selectyear: true,
                		     age_val:3
                			},   
                			'passengerDetails[4].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerDetails[4].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[4].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[4].dobDay': {
                		     selectdate: true,
                		     age_val:4
                			},
                			'passengerDetails[4].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:4
                			},
                			'passengerDetails[4].dateOfYear': {
                		     selectyear: true,
                		     age_val:4
                			},   
                			'passengerDetails[5].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerDetails[5].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[5].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[5].dobDay': {
                		     selectdate: true,
                		     age_val:5
                			},
                			'passengerDetails[5].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:5
                			},
                			'passengerDetails[5].dateOfYear': {
                		     selectyear: true,
                		     age_val:5
                			},   
                			'passengerDetails[6].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			 'passengerDetails[6].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[6].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[6].dobDay': {
                		     selectdate: true,
                		     age_val:6
                			},
                			'passengerDetails[6].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:6
                			},
                			'passengerDetails[6].dateOfYear': {
                		     selectyear: true,
                		     age_val:6
                			},   
                			 'passengerDetails[7].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[7].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			'passengerDetails[7].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true,
               		        age_val:7
                			},
                			'passengerDetails[7].dobDay': {
                		     selectdate: true,
                		     age_val:7
                			},
                			'passengerDetails[7].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:7
                			},
                			'passengerDetails[7].dateOfYear': {
                		     selectyear: true
                			}, 
                			'passengerDetails[8].Gender': {
                		    required: true,
                		    titlereq: true
                			},
                			'passengerDetails[8].firstName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			}, 
                			'passengerDetails[8].lastName': {
                		    required: true,
                		    requiredTextvalue: true,
                		    lettersonly: true
                			},
                			'passengerDetails[8].dobDay': {
                		     selectdate: true,
                		     age_val:8
                			},
                			'passengerDetails[8].dateOfMonth': {
                		     selectmonth: true,
                		     age_val:8
                			},
                			'passengerDetails[8].dateOfYear': {
                		     selectyear: true,
                		     age_val:8
                			},             
                		  'paymentDetails.cardCode': {
                				selectcard: true,
                				
                			},
                			'paymentDetails.maskCardNumber': {
                				required: true,
                				ccMaskCheckvalue:true,
                		        minlength : function(element){
                		            if($("#paymentDetails-cardCode").val()=="American Express"){
                		                return 15;
                		            }
                		            else{
                		                return 16;
                		            } },
                				maxlength:function(element){
                		            if($("#paymentDetails-cardCode").val()=="American Express"){
                		                return 15;
                		            }
                		            else{
                		                return 16;
                		            } },
                			},
                			'paymentDetails.cardNumber': {
                				required: true,
                				number:true,
                		        ccCheckvalue:true,
                		      /*  depends: function(element) {
                                    return (cc_brand_id($("#paymentDetails_CardNumber").val(),$("#paymentDetails-cardCode").val()));
                                },*/
                		        minlength : function(element){
                		        	
                		            if($("#paymentDetails-cardCode").val()=="American Express"){
                		                return 15;
                		            }
                		            else{
                		                return 16;
                		            } },
                				//minlength: 15,
                				maxlength:function(element){
                		            if($("#paymentDetails-cardCode").val()=="American Express"){
                		                return 15;
                		            }
                		            else{
                		                return 16;
                		            } },
                			},
							 'paymentDetails.cardHolderName': {
                				required: true,
                				requiredTextvalue: true,
                			    lettersonly: true
                			},
                			'paymentDetails.expiryMonth': {
                				selectExpMonth: true,
                			},
                			'paymentDetails.expiryYear': {
                				selectExpYear: true,
                				CCExp: {
                                    month: '#paymentDetails_ExpiryMonth',
                                    year: '#paymentDetails_ExpiryYear'
                              }
                			},
                			'paymentDetails.cvvNo': {
                				required: true,
                				ccvnumeric: true,
                				minlength : function(element){
                  		        	
                  		            if($("#paymentDetails-cardCode").val()=="American Express"){
                  		                return 4;
                  		            }else if($("#paymentDetails-cardCode").val()=="Master Card"){
                  		                return 3;
                  		            }
                  		            else{
                  		                return 3;
                  		            } },
                  				//minlength: 15,
                  				maxlength:function(element){
                  		            if($("#paymentDetails-cardCode").val()=="American Express"){
                  		                return 4;
                  		            }else if($("#paymentDetails-cardCode").val()=="Master Card"){
                  		                return 4;
                  		            }
                  		            else{
                  		                return 3;
                  		            } },
                			},
                			'paymentDetails.address1': {
                				required: true,
                				requiredTextvalue: true,
                			},
                			'paymentDetails.city': {
                				required: true,
                				requiredTextvalue: true,
                			},
                			'paymentDetails.country': {
                				required: true,
                				selectcountry: true
                		     },
                			'paymentDetails.state': {
                				selectstate: true
                			},
                			'paymentDetails.postalCode': {
                				required: true,
                			    zipval:true,                           
                				 
                			  
                			},
                			'phoneNo': {
                				required: true,
                				minlength:10,
                				maxlength: 15,
                				number: true
                			},
                			'mobileNo': {
                				//required: true,
                				minlength:10,
                				maxlength: 15,
                				number: true
                			},
                			'emailID': {
                				required: true,
                				email: true
                			},
                			'emailID1': {
                				required: true,
                				email: true,
                				emailEq: true
                			},
                		    },
                		    onkeyup: false,
                		    onblur:false,
                		    onclick: false,
                		    onfocusout: function (element) {
                		        $(element).valid();
                		    },
                		    highlight: function (element) {
                		    	//debugger
                		        $(element).closest('.form-group').removeClass('valid').addClass('has-error');
                		        $(element).addClass('select-class');
                		        $(element).addClass('radio-class');
                		        
                		        if ($(element).attr("name") == "passengerDetails[0].Gender" || $(element).attr("name") == "passengerDetails[0].firstName" || $(element).attr("name") == "passengerDetails[0].lastName" || $(element).attr("name") == "passengerDetails[0].dobDay" || $(element).attr("name") == "passengerDetails[0].dateOfMonth" || $(element).attr("name") == "passengerDetails[0].dateOfYear") {
                  		          $("#errors0").addClass('help-block').removeClass('valid');
                     		        }else if ($(element).attr("name") == "passengerDetails[1].Gender" || $(element).attr("name") == "passengerDetails[1].firstName" || $(element).attr("name") == "passengerDetails[1].lastName" || $(element).attr("name") == "passengerDetails[1].dobDay" || $(element).attr("name") == "passengerDetails[1].dateOfMonth" || $(element).attr("name") == "passengerDetails[1].dateOfYear") {
                     		      	$("#errors1").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[2].Gender" || $(element).attr("name") == "passengerDetails[2].firstName" || $(element).attr("name") == "passengerDetails[2].lastName" || $(element).attr("name") == "passengerDetails[2].dobDay" || $(element).attr("name") == "passengerDetails[2].dateOfMonth" || $(element).attr("name") == "passengerDetails[2].dateOfYear") {
                     		       $("#errors2").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[3].Gender" || $(element).attr("name") == "passengerDetails[3].firstName" || $(element).attr("name") == "passengerDetails[3].lastName" || $(element).attr("name") == "passengerDetails[3].dobDay" || $(element).attr("name") == "passengerDetails[3].dateOfMonth" || $(element).attr("name") == "passengerDetails[3].dateOfYear") {
                     		       $("#errors3").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[4].Gender" || $(element).attr("name") == "passengerDetails[4].firstName" || $(element).attr("name") == "passengerDetails[4].lastName" || $(element).attr("name") == "passengerDetails[4].dobDay" || $(element).attr("name") == "passengerDetails[4].dateOfMonth" || $(element).attr("name") == "passengerDetails[4].dateOfYear") {
                     		       $("#errors4").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[5].Gender" || $(element).attr("name") == "passengerDetails[5].firstName" || $(element).attr("name") == "passengerDetails[5].lastName" || $(element).attr("name") == "passengerDetails[5].dobDay" || $(element).attr("name") == "passengerDetails[5].dateOfMonth" || $(element).attr("name") == "passengerDetails[5].dateOfYear") {
                     		       $("#errors5").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[6].Gender" || $(element).attr("name") == "passengerDetails[6].firstName" || $(element).attr("name") == "passengerDetails[6].lastName" || $(element).attr("name") == "passengerDetails[6].dobDay" || $(element).attr("name") == "passengerDetails[6].dateOfMonth" || $(element).attr("name") == "passengerDetails[6].dateOfYear") {
                     		       $("#errors6").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[7].Gender" || $(element).attr("name") == "passengerDetails[7].firstName" || $(element).attr("name") == "passengerDetails[7].lastName" || $(element).attr("name") == "passengerDetails[7].dobDay" || $(element).attr("name") == "passengerDetails[7].dateOfMonth" || $(element).attr("name") == "passengerDetails[7].dateOfYear") {
                     		       $("#errors7").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "passengerDetails[8].Gender" || $(element).attr("name") == "passengerDetails[8].firstName" || $(element).attr("name") == "passengerDetails[8].lastName" || $(element).attr("name") == "passengerDetails[8].dobDay" || $(element).attr("name") == "passengerDetails[8].dateOfMonth" || $(element).attr("name") == "passengerDetails[8].dateOfYear") {
                     		       $("#errors8").addClass('help-block').removeClass('valid');
                     		       }else if ($(element).attr("name") == "paymentDetails.expiryMonth" || $(element).attr("name") == "paymentDetails.expiryYear") {
                     		         $("#Experrors").addClass('help-block');
                     		           
                     		        }else if ($(element).attr("name") == "paymentDetails.expiryMonth2" || $(element).attr("name") == "paymentDetails.expiryYear2") {
                     		         $("#Experrors2").addClass('help-block');
                     		           
                     		        }else if ($(element).attr("name") == "agree") {
                     		         $("#agree").addClass('help-block');
                     		        document.getElementById("agreeError").style.display='block'; 
                     		            
                     		        }
                		        
                		        
                		    },
                		    unhighlight: function (element) {
                		    	//debugger
                		        $(element).closest('.form-group').removeClass('has-error').addClass('valid');
                		        $(element).removeClass('select-class');
                		        $(element).removeClass('radio-class');
                		       if ($(element).attr("name") == "paymentDetails.expiryMonth" || $(element).attr("name") == "paymentDetails.expiryYear") {
                   		         $("#Experrors").removeClass('help-block').addClass('valid');
                   		           
                   		        }else if ($(element).attr("name") == "paymentDetails.expiryMonth2" || $(element).attr("name") == "paymentDetails.expiryYear2") {
                   		         $("#Experrors2").removeClass('help-block').addClass('valid');
                   		           
                   		        }else if ($(element).attr("name") == "agree") {
                    		        $("#agree").removeClass('help-block');
                         		   document.getElementById("agreeError").style.display='none'; 
                    		        }
                		      },
                		    errorElement: 'div',
                		    errorClass: 'help-block',
                		    errorPlacement: function (error, element) {
                		    	    if (element.attr("name") == "passengerDetails[0].Gender" || element.attr("name") == "passengerDetails[0].firstName" || element.attr("name") == "passengerDetails[0].lastName" || element.attr("name") == "passengerDetails[0].dobDay" || element.attr("name") == "passengerDetails[0].dateOfMonth" || element.attr("name") == "passengerDetails[0].dateOfYear") {
                		    		$("#errors0").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors0");
                		    		}else if (element.attr("name") == "passengerDetails[1].Gender" || element.attr("name") == "passengerDetails[1].firstName" || element.attr("name") == "passengerDetails[1].lastName" || element.attr("name") == "passengerDetails[1].dobDay" || element.attr("name") == "passengerDetails[1].dateOfMonth" || element.attr("name") == "passengerDetails[1].dateOfYear") {
                		    		$("#errors1").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors1");
                		    		}else if (element.attr("name") == "passengerDetails[2].Gender" || element.attr("name") == "passengerDetails[2].firstName" || element.attr("name") == "passengerDetails[2].lastName" || element.attr("name") == "passengerDetails[2].dobDay" || element.attr("name") == "passengerDetails[2].dateOfMonth" || element.attr("name") == "passengerDetails[2].dateOfYear") {
                		    		$("#errors2").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors2");
                		    		}else if (element.attr("name") == "passengerDetails[3].Gender" || element.attr("name") == "passengerDetails[3].firstName" || element.attr("name") == "passengerDetails[3].lastName" || element.attr("name") == "passengerDetails[3].dobDay" || element.attr("name") == "passengerDetails[3].dateOfMonth" || element.attr("name") == "passengerDetails[3].dateOfYear") {
                		    		$("#errors3").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors3");
                		    		}else if (element.attr("name") == "passengerDetails[4].Gender" || element.attr("name") == "passengerDetails[4].firstName" || element.attr("name") == "passengerDetails[4].lastName" || element.attr("name") == "passengerDetails[4].dobDay" || element.attr("name") == "passengerDetails[4].dateOfMonth" || element.attr("name") == "passengerDetails[4].dateOfYear") {
                		    		$("#errors4").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors4");
                		    		}else if (element.attr("name") == "passengerDetails[5].Gender" || element.attr("name") == "passengerDetails[5].firstName" || element.attr("name") == "passengerDetails[5].lastName" || element.attr("name") == "passengerDetails[5].dobDay" || element.attr("name") == "passengerDetails[5].dateOfMonth" || element.attr("name") == "passengerDetails[5].dateOfYear") {
                		    		$("#errors5").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors5");
                		    		}else if (element.attr("name") == "passengerDetails[6].Gender" || element.attr("name") == "passengerDetails[6].firstName" || element.attr("name") == "passengerDetails[6].lastName" || element.attr("name") == "passengerDetails[6].dobDay" || element.attr("name") == "passengerDetails[6].dateOfMonth" || element.attr("name") == "passengerDetails[6].dateOfYear") {
                		    		$("#errors6").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors6");
                		    		}else if (element.attr("name") == "passengerDetails[7].Gender" || element.attr("name") == "passengerDetails[7].firstName" || element.attr("name") == "passengerDetails[7].lastName" || element.attr("name") == "passengerDetails[7].dobDay" || element.attr("name") == "passengerDetails[7].dateOfMonth" || element.attr("name") == "passengerDetails[7].dateOfYear") {
                		    		$("#errors7").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors7");
                		    		}else if (element.attr("name") == "passengerDetails[8].Gender" || element.attr("name") == "passengerDetails[8].firstName" || element.attr("name") == "passengerDetails[8].lastName" || element.attr("name") == "passengerDetails[8].dobDay" || element.attr("name") == "passengerDetails[8].dateOfMonth" || element.attr("name") == "passengerDetails[8].dateOfYear") {
                		    		$("#errors8").addClass('help-block');
                		    		error.css('float', 'none');
                		    		element.append($('<br />'));
                		    		error.appendTo("#errors8");
                		    		}else if (element.attr("name") == "agree") {
                   		        	 document.getElementById("agreeError").style.display='block'; 
                   		        	$("#agree").addClass('help-block');
                   		        }
                		    		
                		        else if (element.parent('.input-group').length) {
                		        	
                		            error.insertAfter(element.parent());
                		        } else error.insertAfter(element);

                		     
                		    },
                		    
                		                                
                		    messages: {
                		    	'paymentDetails.postalCode': { 
                		    		remote: "Please provide valid Postal Code.",
                		    	},
                		    	
                		    	 'passengerDetails[0].Gender': { 
                  					required: " Please select the Gender",
                  				},
         		   'passengerDetails[0].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[0].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[1].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[1].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[1].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[2].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[2].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[2].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[3].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[3].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[3].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[4].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[4].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[4].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[5].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[5].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[5].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[6].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[6].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[6].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[7].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[7].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[7].lastName': { 
     					required: " Please provide the Last name",
     				},
     				 'passengerDetails[8].Gender': { 
       					required: " Please select the Gender",
       				},
     				'passengerDetails[8].firstName': { 
     					required: " Please provide the First name",
     				},
     				'passengerDetails[8].lastName': { 
     					required: " Please provide the Last name",
     				},
                    'paymentDetails.maskcardNumber': {
     					required: " Please provide credit or debit card number",
     					minlength: " Please provide valid credit or debit card number",
     					maxlength: " Please provide valid credit or debit card number"
     				},
     				  'paymentDetails.cardNumber': {
       					//required: " Please provide credit or debit card number",
       					minlength: " Please provide valid credit or debit card number",
       					maxlength: " Please provide valid credit or debit card number"
       				},
       				'paymentDetails.maskCardNumber': {
       					required: " Please provide credit or debit card number",
       					minlength: " Please provide valid credit or debit card number",
       					maxlength: " Please provide valid credit or debit card number"
       				},
     				'paymentDetails.cardHolderName': { 
     					required: " Please provide Card Holder Name",
     				},
     				'paymentDetails.cvvNo': {
        				required: " Please provide card verification number",
        				ccvnumeric: " Please provide a valid card verification number",
        				minlength : " Please provide a valid card verification number",
          				maxlength: " Please provide a valid card verification number",
        			},
     	            'paymentDetails.country': {
     					required: " Please provide a billing country",
     				},
     				'paymentDetails.address1': {
     				required: " Please provide a billing address",
     				},
     				'paymentDetails.city': {
     				required: " Please provide a billing city",
     				},
     				'paymentDetails.state': {
     				required: " Please select your billing State",
     				},
     				'paymentDetails.postalCode': {
     				required: " Please provide billing postal code",
     				},
     				'phoneNo': {
     				required: " Please provide a valid billing phone",
     				},'mobileNo': {
     				required: " Please provide a valid mobile phone",
     				},
     				'emailID': {
     				required: " Please provide a valid email address",
     				},
     				'emailID1': {
         				required: " Please provide a valid email address",
         				},
     				
                },
                submitHandler: function(form) {
                	    var rndId=document.getElementById("finalId").value;
                	    var randId=document.getElementById("randamId").value;
                	    if(randId=="traveomint1"){
                	    document.getElementById("randamId").value=rndId;
                	    randId=rndId;
                	    }
						
                	    if(rndId == randId){
                   	    	 form.submit();
                   	    	
                   	    }else{
                   	    	return false;
                   	    }
						                 
                	
              
                }
            });
        }
    }
    $(D).ready(function($) {
    	    	 
    	$.validator.setDefaults({ ignore: '' });
    	$.validator.messages.required = '';
    	 $.validator.addMethod("email", function(value, element) {  
    		    return this.optional(element) || /^[a-zA-Z0-9._-]+@[a-zA-Z0-9-]+\.[a-zA-Z.]{2,5}$/i.test(value);  
    		    }, " Please provide a valid email address");
    	 
	 jQuery.validator.addMethod("notEqual", function (value, element, param) { 
    		    return this.optional(element) || value != '0.00';
    		}, "  Please provide valid amount for charge");
    	 
    	 jQuery.validator.addMethod("notEquals", function (value, element, param) { 
 		    return this.optional(element) || value != '0';
 		}, "  Please provide valid amount for charge");
 	 
        $.validator.addMethod("alphanumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^\w+$/i.test(value);
        	}else{
        		return false;
        	}
      	}, " Please provide Letters, numbers, and underscores only");
       
             $.validator.addMethod("emailEq", function(value, element) 
        		{
        	    if($("#emailID").val() != value){
	                return false;
	            }
	            else{
	                return true;
	            } }, "Entered email addresses - do not match.");
	            
        $.validator.addMethod("lettersonly", function(value, element) 
      		  {
        	if(value.length>0){
      		    return this.optional(element) || /^[a-z ]+$/i.test(value);
        	}else{
        		return false;
        	}
      		  }, "Please provide Letters and spaces only");
      
        $.validator.addMethod("ccvnumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
      	}, " Please provide only numbers into card verification number");
   
        $.validator.addMethod("amountnumeric", function(value, element) {
        	if(value.length>0){
      	        return this.optional(element) || /^[-+]?\d*\.?\d*$/.test(value);
        	}else{
        		return false;
        	}
      	}, " Please provide valid amount");
        
      
        jQuery.validator.addMethod('CCExp', function(value, element, params) {
            var minMonth = new Date().getMonth() + 1;
            var minYear = new Date().getFullYear();
            var month = parseInt($(params.month).val(), 10);
            var year = parseInt($(params.year).val(), 10);
            return (year > minYear || (year === minYear && month >= minMonth));
      }, '<i class="fa fa-angle-double-right"></i> Your Credit Card Expiration date is invalid.');
        
        
       
    	$("#paymentDetails_ExpiryMonth").change(function () {
     		 if($("#paymentDetails_ExpiryYear").val() != "Year"){
     		$("#booking").validate().element("#paymentDetails_ExpiryYear");
     		 }
     	
         })
         
         
        jQuery.validator.addMethod("age_val", function(value, element, param) {
        
        	var Age=$("#passengerType"+param+"").val();
        	var agevalidate="1";
        	if(param == 0){
        		agevalidate="0";
        	}
        	var html=" Age of Adult, should be greater than or equal to 12yrs at the time of travel.";
        	
        	if(Age == 'Adult'){
        		html=" Age of Adult, should be greater than or equal to 18yrs at the time of travel.";
        		if(param == 0){
        			html=" Booking flights for an unaccompanied minor? Some airlines have restrictions on children under the age of 18 years traveling alone. If you have any<br/> questions, please call us at 1-844-811-1132.";
            	}else{
            		html=" Age of Adult, should be greater than or equal to 12yrs at the time of travel.";
            	}
        	}else if(Age == 'Child'){
        		html=" Age of Child, should be less than 12yrs and greater than or equal to 2yrs at the time of travel.";
        	}else if(Age == 'Infant'){
        		html="  Infant (on lap) should be under 2 years for the entire trip. Please search again with the child option in modify search.";
        	}else if(Age == 'InfantWs'){
        		html="  Infant (on seat) should be under 2 years for the entire trip. Please search again with the child option in modify search.";
        	}
        	
        	value=$("#paxdoy"+param+"").val();
        	   $("#error-message"+param+"").html("").removeClass("show").addClass("hide");
        	if (!isValidDate(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val())) {
                // make sure the date is valid
                $("#error-message"+param+"").html(" Please provide Valid Day of Date Of Birth.").removeClass("hide").addClass("show");
                return false;
              } else if (!isOfAge(value, $("#paxdom"+param+"").val(), $("#paxdob"+param+"").val(), Age,agevalidate)) {
                // the person is too young
                $("#error-message"+param+"").html(html).removeClass("hide").addClass("show");
                return false;
              } else {
            	 
            	  return true;
              }
        	
            return this.optional( element ) || value >= param;
        }, ""); 
        
        
        $.validator.addMethod('zipval', function (value, element) {
          
        
       
        	if($("#paymentDetails_Country").val() != "0"){
             if($("#paymentDetails_Country").val() == "GB"){
        			
        			return postalUKFilter(value);
        		}else if($("#paymentDetails_Country").val() != "CA"){
        	var numericReg = Zipmap($("#paymentDetails_Country").val());
        	
        	var usan = new RegExp(numericReg);
        	
        	return this.optional(element) || usan.test(value);
        		 }else{
        			return postalFilter(value);
        	        }
        }else{
        	return true;
        }
        	
        }, " Please provide billing zip (postal code)");
        
    
        
        
        $.validator.addMethod('requiredTextvalue', function (value) {
            return (value != '');
       }, "");
        
        $.validator.addMethod('requiredvalue', function (value) {
               return (value != '0.0');
          }, "");
        $.validator.addMethod('ccMaskCheckvalue', function (value) {
        	//var values=$("#paymentDetails_CardNumber").val();
        	 if(value.indexOf('************') >= 0){
        		 return true;
        	 }
        	if(value.length>12){
        	//console.log("CC Mask value;"+cc_brand_id(value,$("#paymentDetails-cardCode").val()));
        	return cc_brand_id(value,$("#paymentDetails-cardCode").val());
        	}else{return true;}
         //   return (value != '0.0');
         }, " Please provide valid credit or debit card number");
        
         
          
          
         
        $.validator.addMethod('ccCheckvalue', function (value) {
        	var values=$("#paymentDetails_CardNumber").val();
        	if(values.length>12){
        	//console.log("CC value;"+cc_brand_id(values,$("#paymentDetails-cardCode").val()));
        		if(cc_brand_id(values,$("#paymentDetails-cardCode").val())){
        			return true;
        		}else{
        			jQuery("#paymentDetails_MaskCardNumber").val("");
        			return false;
        		}
        	//return cc_brand_id(values,$("#paymentDetails-cardCode").val());
        	}else{return true;}
         //   return (value != '0.0');
         }, " Please provide valid credit or debit card number");
        
        
        $.validator.addMethod('cccardvalue', function (value) {
        	if($("#paymentDetails_CardNumber").val().length>12){
        	//console.log("CC value;"+cc_brand_id($("#paymentDetails_CardNumber").val(),value));
        	return cc_brand_id($("#paymentDetails_CardNumber").val(),value);
        	}else{return true;}
         //   return (value != '0.0');
         }, "Please provide valid credit or debit card number");
      	$.validator.addMethod('titlereq', function (value) {
              return (value != '0');
          }, " Please select the Gender");
      	
        $.validator.addMethod('selectcard', function (value) {
              return (value != 'Select a Card');
          }, " Please provide your payment method");
	  	   
       
         $.validator.addMethod('selectExpMonth', function (value) {
              return (value != '0');
          }, " Please select card expiration month");
		 $.validator.addMethod('selectExpMonth2', function (value) {
             return (value != '0');
         }, " Please select card expiration month");
         $.validator.addMethod('selectExpYear', function (value) {
              return (value != 'Year');
          }, " Please select card expiration year");
		   $.validator.addMethod('selectExpYear2', function (value) {
             return (value != 'Year');
         }, " Please select card expiration year");
         $.validator.addMethod('selectdate', function (value) {
              return (value != 'Day');
          }, " Please select  the day of Date of Birth");
          $.validator.addMethod('selectmonth', function (value) {
              return (value != '0');
          }, " Please select the Month of Birth");
          $.validator.addMethod('selectyear', function (value) {
              return (value != 'Year');
          }, " Please select the Year of Birth ");
          $.validator.addMethod('selectstate', function (value) {
        	  if($("#paymentDetails_Country").val() == "US"){
              return (value != '0');
        	  }else  if($("#paymentDetails_Country").val() == "CA"){
              return (value != '0');
        	  }else{
        		  return true;
        	  }
          }, " Please select your billing State");
          $.validator.addMethod('selectcountry', function (value) {
              return (value != '0');
          }, " Please select your billing Country");
          JQUERY4U.UTIL.setupFormValidation();
    });
  


    
})(jQuery, window, document);
      
jQuery("#paymentDetails_MaskCardNumber").focus(function(e){
    var value=jQuery("#paymentDetails_MaskCardNumber").val();
    if(value.indexOf('*') >= 0)
	jQuery("#paymentDetails_MaskCardNumber").val("");
});

function my_rounded_number(number , decimal_places){
    x = number * window.Math.pow(10 , decimal_places)
    x = window.Math.round(x)
    return  x * window.Math.pow(10 , -decimal_places)
}

function isNumberKey(evt)
{
   var charCode = (evt.which) ? evt.which : event.keyCode
   if(charCode==8)//back space
      return true;
   if (charCode < 48 || charCode > 57)//0-9
   {
      return false;
   }
      
   return true;

}
function isNumber(evt, element) {

    var charCode = (evt.which) ? evt.which : event.keyCode

    if (
        (charCode != 45 || $(element).val().indexOf('-') != -1) &&      
        (charCode != 46 || $(element).val().indexOf('.') != -1) &&     
        (charCode < 48 || charCode > 57))
        return false;

    return true;
}


   


jQuery("#paymentDetails_MaskCardNumber").focusout(function(e){

	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	
	//console.log("card_number 1:"+card_number);
	if(card_number == ""){
		card_number=jQuery("#paymentDetails_CardNumber").val();
		jQuery("#paymentDetails_MaskCardNumber").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#paymentDetails_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#paymentDetails_CardNumber").val(card_number);
	if(jQuery("#paymentDetails_CardNumber").val() != ""){
		$("#booking").validate().element("#paymentDetails_CardNumber");
		$("#booking").validate().element("#paymentDetails_MaskCardNumber");
		var cond=$("#booking").validate().element("#paymentDetails_MaskCardNumber");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#paymentDetails_MaskCardNumber").val(new_card_number);
		}
}
	}
	}
}).blur(function(){
	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	// console.log("cond IE");
	//console.log("card_number 1:"+card_number);
	if(card_number == ""){
		card_number=jQuery("#paymentDetails_CardNumber").val();
		jQuery("#paymentDetails_MaskCardNumber").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#paymentDetails_MaskCardNumber");
	//console.log("cond 1:"+conds);
	if(conds){
		jQuery("#paymentDetails_CardNumber").val(card_number);
	if(jQuery("#paymentDetails_CardNumber").val() != ""){
		$("#booking").validate().element("#paymentDetails_CardNumber");
		$("#booking").validate().element("#paymentDetails_MaskCardNumber");
		var cond=$("#booking").validate().element("#paymentDetails_MaskCardNumber");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#paymentDetails_MaskCardNumber").val(new_card_number);
		}
}
	}
	}

	 
	});

jQuery("#paymentDetails_MaskCardNumber2").focusout(function(e){
	

	var card_number = jQuery(this).val();
	var card_number2=jQuery("#paymentDetails_CardNumber2").val();
	
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }


	if(card_number == ""){
		card_number=jQuery("#paymentDetails_CardNumber2").val();
		jQuery("#paymentDetails_MaskCardNumber2").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#paymentDetails_MaskCardNumber2");
	
	if(conds){
		jQuery("#paymentDetails_CardNumber2").val(card_number);
	if(jQuery("#paymentDetails_CardNumber2").val() != ""){
		$("#booking").validate().element("#paymentDetails_CardNumber2");
		$("#booking").validate().element("#paymentDetails_MaskCardNumber2");
		var cond=$("#booking").validate().element("#paymentDetails_MaskCardNumber2");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#paymentDetails_MaskCardNumber2").val(new_card_number);
		}
}
	}
	}

}).blur(function(){

	var card_number = jQuery(this).val();
	 if(card_number.indexOf('************') >= 0){
		 return true;
	 }
	
	if(card_number == ""){
		card_number=jQuery("#paymentDetails_CardNumber2").val();
		jQuery("#paymentDetails_MaskCardNumber2").val(card_number);
	}
	
	if(card_number != ""){
	var conds=$("#booking").validate().element("#paymentDetails_MaskCardNumber2");

	if(conds){
		jQuery("#paymentDetails_CardNumber2").val(card_number);
	if(jQuery("#paymentDetails_CardNumber2").val() != ""){
		$("#booking").validate().element("#paymentDetails_CardNumber2");
		$("#booking").validate().element("#paymentDetails_MaskCardNumber2");
		var cond=$("#booking").validate().element("#paymentDetails_MaskCardNumber2");
		//console.log("cond:"+cond);
		if(cond){
	 var new_card_number = "************";
	 for(var loop2=12; loop2 < card_number.length; loop2++)
     {
         new_card_number = new_card_number+card_number.charAt(loop2);
     }
	 jQuery("#paymentDetails_MaskCardNumber2").val(new_card_number);
		}
}
	}
	}


	});

function isOfAge(year, month, day, type,agevalidate) {
	//console.log("year No:"+year);
	//console.log("age No:"+age);
	
	var age=18;
	var nextage=150;
	if(type == 'Adult'){
		age=12;
       if(agevalidate == 0){
    	   age=18;
		}
		nextage=150;
	}else if(type == 'Child'){
		age=2;
		nextage=12;
	}else if(type == 'Infant'){
		age=0;
		nextage=2;
	}else if(type == 'InfantWs'){
		age=0;
		nextage=2;
	}
	
	 var mydates=document.getElementById("ageDate").value;
	 var res = mydates.split("-");
	  var mydate = new Date();
	  mydate.setFullYear(year, month-1, day);
	  //08-04-2017
	  var currdate = new Date(res[2],res[0]-1,res[1]);
	 
	  currdate.setFullYear(currdate.getFullYear() - age);
	  var nextdate = new Date(mydates);
	  nextdate.setFullYear(nextdate.getFullYear() - nextage);

	  if ((mydate - nextdate) < 0){
		    return false;
		  }
	  if ((currdate - mydate) < 0){
	    return false;
	  }
	  var spdate = new Date();
	  var sdd = spdate.getDate();
	  var smm = spdate.getMonth();
	  var syyyy = spdate.getFullYear();
	  var today = new Date(syyyy,smm,sdd).getTime();
	//  console.log("currdate - newdate:"+(mydate > today));
	  if(mydate > today)
	  {
	    // alert("Date is not valid");
	     return false;
	  }
	  return true;
	}

function isValidDate(year, month, day) {

	  // Create list of days of a month [assume there is no leap year by default]
	  var listofDays = [31,28,31,30,31,30,31,31,30,31,30,31];

	  if (month == 1  || month > 2) {

	    if (day > listofDays[month - 1]) {
	      // invalid date
	      return false;
	    }

	  }

	  if (month == 2) {

	    var lyear = false;

	    if ((!(year % 4) && year % 100) || !(year % 400)) {
	      lyear = true;
	    }

	    if ((lyear == false) && (day >= 29)) {
	      // invalid date (February - non-leap year)
	      return false;
	    }
	  
	    if ((lyear == true) && (day > 29)) {
	      // invalid date (February - leap year)
	      return false;
	    }
	  }

	  return true;
	}

function getRequired(){
        if(document.getElementById("agree").checked){
            document.getElementById("submitBooking").disabled = false;
        }else{
            document.getElementById("submitBooking").disabled = true;
        }
      }
	  
function replaceSubstring(inSource, inToReplace, inReplaceWith) {

var outString = inSource;
while (true) {
var idx = outString.indexOf(inToReplace);
if (idx == -1) {
  break;
}
outString = outString.substring(0, idx) + inReplaceWith +
  outString.substring(idx + inToReplace.length);
}
return outString;

}

function getcardValue(sel,event){ 
	$('.spnCardImg>a').removeClass("card-border");
	$('.spnCardImg>a[title="'+sel.value+'"]').addClass('card-border');
}



function setccValue(id,event) {
    
    //  $timeout(function() {
	
	$target = $(event.target);   
	 $target.siblings().removeClass("card-border");
    $target.addClass('card-border');
	if(id=="American Express"){
		   var src = "/resources/assets/ccv-img2.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
           $("#tooltipm").html("<span class=\"ccv-card\">4 Digit Number From Your Card<span class='cardImg'></span></span>");
	}else if(id=="Master Card"){
		 var src = "/resources/assets/ccv-img.gif";
         $("#ccvimg").attr("src", src);
         $("#tooltip").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
         $("#tooltipm").html("<span class=\"ccv-card\">3/4 Digit Number From Your Card<span class='cardImg'></span></span>");
	}else{
		   var src = "/resources/assets/ccv-img.gif";
           $("#ccvimg").attr("src", src);
           $("#tooltip").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
           $("#tooltipm").html("<span class=\"ccv-card\">3 Digit Number From Your Card<span class='cardImg'></span></span>");
	}
	
	
	$("#paymentDetails-cardCode").val(id);
   	var card_number = jQuery("#paymentDetails_CardNumber").val();
   	if(card_number == ""){
   		card_number = jQuery("#paymentDetails_MaskCardNumber").val();
   	}
   	
   	var value=jQuery("#paymentDetails_MaskCardNumber").val();
    if(value.indexOf('*') >= 0){
    	
    }else{
    	if(value != ""){
    		card_number = jQuery("#paymentDetails_MaskCardNumber").val();
    	}
    }
   	if(card_number != ""){
   		jQuery("#paymentDetails_CardNumber").val(card_number);
   		jQuery("#paymentDetails_MaskCardNumber").val(card_number);
   	var conds=$("#booking").validate().element("#paymentDetails_MaskCardNumber");
   	if(conds){
   		jQuery("#paymentDetails_CardNumber").val(card_number);

   	 var new_card_number = "************";
   	 for(var loop2=12; loop2 < card_number.length; loop2++)
   	 {
   	     new_card_number = new_card_number+card_number.charAt(loop2);
   	 }
   	 jQuery("#paymentDetails_MaskCardNumber").val(new_card_number);
   	}
   	}

		 if($("#paymentDetails_CvvNo").val().length > 0){
    		$("#booking").validate().element("#paymentDetails_CvvNo");
    		 }
		 
		 
	      $("#booking").validate().element("#paymentDetails-cardCode");
  	 
        		 if($("#paymentDetails_CvvNo").val().length > 0){
             		$("#booking").validate().element("#paymentDetails_CvvNo");
             		 }
		
		$("#booking").validate().element("#paymentDetails_MaskCardNumber");
    };
    function cleaner(arr, id) {
    	
        for (var i = 0; i < arr.length; i++) {
            var cur = arr[i];
          //  console.log(cur);
            if (cur.name == 'paymentDetails.cardCode' || cur.name == 'paymentDetails.maskCardNumber' || cur.name == 'paymentDetails.cardNumber' || cur.name == 'paymentDetails.cardHolderName' || cur.name == 'paymentDetails.cvvNo' || cur.name == 'paymentDetails.expiryMonth' || cur.name == 'paymentDetails.expiryYear') {
            
            	arr.splice(i, 1);
            	i--;
            }
           
          
        }
    }

    var putThousandsSeparators;

    putThousandsSeparators = function(value, sep) {
      if (sep == null) {
        sep = ',';
      }
      // check if it needs formatting
      if (value.toString() === value.toLocaleString()) {
        // split decimals
        var parts = value.toString().split('.')
        // format whole numbers
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, sep);
        // put them back together
        value = parts[1] ? parts.join('.') : parts[0];
      } else {
        value = value.toLocaleString();
      }
      return value;
    };
    
   
function submitForm(){
	var frm = $('form#booking');
	 var rndId = randomString(12);
	 document.getElementById("finalId").value=rndId;
	 var tabId=document.getElementById("tabId").value;
   	  $('form#booking').attr({action: '/basket-checkout/'+rndId});  
      $('form#booking').submit();
     
	 }


   function randomString(length) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz'.split('');

    if (! length) {
        length = Math.floor(Math.random() * chars.length);
    }

    var str = '';
    for (var i = 0; i < length; i++) {
        str += chars[Math.floor(Math.random() * chars.length)];
    }
    return str;
}     
        
   function sticky_relocate() {
    var window_top = $(window).scrollTop();
    var div_top = $('#sticky-anchor').offset().top;
    if (window_top > div_top) {
        $('#sticky').addClass('stick');
    } else {
        $('#sticky').removeClass('stick');
    }
}

$(function () {
	 $( "#emailID,#emailID1,#mobileNo,#phoneNo,#paymentDetails_MaskCardNumber" ).on( "copy cut paste drop", function() {
         return false;
 });
	
});   

function postalUKFilter (postalCode) {

    if (! postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var ca = new RegExp(/[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}/i);

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return true;
    }
    return null;
}
function postalFilter (postalCode) {

    if (! postalCode) {
        return null;
    }

    postalCode = postalCode.toString().trim();

    var us = new RegExp("^\\d{5}(-{0,1}\\d{4})?$");
    var ca = new RegExp(/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i);

  /*  if (us.test(postalCode.toString())) {
        return postalCode;
    }*/

    if (ca.test(postalCode.toString().replace(/\W+/g, ''))) {
        return true;
    }
    return null;
}
function Zipmap(val){
    var Zipmapss = {
			"AD":"^(?:AD)*(\\d{3})$",
    		"AM":"^(\\d{6})$",
    		"AR":"^([A-Z]\\d{4}[A-Z]{3})$",
    		"AT":"^(\\d{4})$",
    		"AU":"^(\\d{4})$",
    		"AX":"^(?:FI)*(\\d{5})$",
    		"AZ":"^(?:AZ)*(\\d{4})$",
    		"BA":"^(\\d{5})$",
    		"BB":"^(?:BB)*(\\d{5})$",
    		"BD":"^(\\d{4})$",
    		"BE":"^(\\d{4})$",
    		"BG":"^(\\d{4})$",
    		"BH":"^(\\d{3}\\d?)$",
    		"BM":"^([A-Z]{2}\\d{2})$",
    		"BN":"^([A-Z]{2}\\d{4})$",
    		"BR":"^(\\d{8})$",
    		"BY":"^(\\d{6})$",
    		/*"CA":"^([ABCEGHJKLMNPRSTVXY]\\d[ABCEGHJKLMNPRSTVWXYZ]) ?(\\d[ABCEGHJKLMNPRSTVWXYZ]\\d)$",*/
    		//"CA":"^[ABCEGHJKLMNPRSTVXY]{1}\d{1}[A-Z]{1} *\d{1}[A-Z]{1}\d{1}$",
    		//"CA":"^[ABCEGHJKLMNPRSTVXYabceghjklmnprstvxy]{1}\d{1}[A-Za-z]{1} *\d{1}[A-Za-z]{1}\d{1}$",
    		"CA":"^/([ABCEGHJKLMNPRSTVXY]\d)([ABCEGHJKLMNPRSTVWXYZ]\d){2}/i",
    		//"CA":"^((\\d{5}-\\d{4})|(\\d{5})|([A-Z]\\d[A-Z]\\s\\d[A-Z]\\d))$",
    		"CH":"^(\\d{4})$",
    		"CL":"^(\\d{7})$",
    		"CN":"^(\\d{6})$",
    		"CR":"^(\\d{4})$",
    		"CU":"^(?:CP)*(\\d{5})$",
    		"CV":"^(\\d{4})$",
    		"CX":"^(\\d{4})$",
    		"CY":"^(\\d{4})$",
    		"CZ":"^(\\d{5})$",
    		"DE":"^(\\d{5})$",
    		"DK":"^(\\d{4})$",
    		"DO":"^(\\d{5})$",
    		"DZ":"^(\\d{5})$",
    		"EC":"^([a-zA-Z]\\d{4}[a-zA-Z])$",
    		"EE":"^(\\d{5})$",
    		"EG":"^(\\d{5})$",
    		"ES":"^(\\d{5})$",
    		"ET":"^(\\d{4})$",
    		"FI":"^(?:FI)*(\\d{5})$",
    		"FM":"^(\\d{5})$",
    		"FO":"^(?:FO)*(\\d{3})$",
    		"FR":"^(\\d{5})$",
    		//"GB":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"GB":"/[A-Z]{1,2}[0-9]{1,2}[A-Z]{0,1} ?[0-9][A-Z]{2}/i",
    		"GE":"^(\\d{4})$",
    		"GF":"^((97|98)3\\d{2})$",
    		"GG":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"GL":"^(\\d{4})$",
    		"GP":"^((97|98)\\d{3})$",
    		"GR":"^(\\d{5})$",
    		"GT":"^(\\d{5})$",
    		"GU":"^(969\\d{2})$",
    		"GW":"^(\\d{4})$",
    		"HN":"^([A-Z]{2}\\d{4})$",
    		"HR":"^(?:HR)*(\\d{5})$",
    		"HT":"^(?:HT)*(\\d{4})$",
    		"HU":"^(\\d{4})$",
    		"ID":"^(\\d{5})$",
    		"IL":"^(\\d{5})$",
    		"IM":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"IN":"^(\\d{6})$",
    		"IQ":"^(\\d{5})$",
    		"IR":"^(\\d{10})$",
    		"IS":"^(\\d{3})$",
    		"IT":"^(\\d{5})$",
    		"JE":"^(([A-Z]\\d{2}[A-Z]{2})|([A-Z]\\d{3}[A-Z]{2})|([A-Z]{2}\\d{2}[A-Z]{2})|([A-Z]{2}\\d{3}[A-Z]{2})|([A-Z]\\d[A-Z]\\d[A-Z]{2})|([A-Z]{2}\\d[A-Z]\\d[A-Z]{2})|(GIR0AA))$",
    		"JO":"^(\\d{5})$",
    		"JP":"^(\\d{7})$",
    		"KE":"^(\\d{5})$",
    		"KG":"^(\\d{6})$",
    		"KH":"^(\\d{5})$",
    		"KP":"^(\\d{6})$",
    		"KR":"^(?:SEOUL)*(\\d{6})$",
    		"KW":"^(\\d{5})$",
    		"KZ":"^(\\d{6})$",
    		"LA":"^(\\d{5})$",
    		"LB":"^(\\d{4}(\\d{4})?)$",
    		"LI":"^(\\d{4})$",
    		"LK":"^(\\d{5})$",
    		"LR":"^(\\d{4})$",
    		"LS":"^(\\d{3})$",
    		"LT":"^(?:LT)*(\\d{5})$",
    		"LU":"^(\\d{4})$",
    		"LV":"^(?:LV)*(\\d{4})$",
    		"MA":"^(\\d{5})$",
    		"MC":"^(\\d{5})$",
    		"MD":"^(?:MD)*(\\d{4})$",
    		"ME":"^(\\d{5})$",
    		"MG":"^(\\d{3})$",
    		"MK":"^(\\d{4})$",
    		"MM":"^(\\d{5})$",
    		"MN":"^(\\d{6})$",
    		"MQ":"^(\\d{5})$",
    		"MT":"^([A-Z]{3}\\d{2}\\d?)$",
    		"MV":"^(\\d{5})$",
    		"MX":"^(\\d{5})$",
    		"MY":"^(\\d{5})$",
    		"MZ":"^(\\d{4})$",
    		"NC":"^(\\d{5})$",
    		"NE":"^(\\d{4})$",
    		"NF":"^(\\d{4})$",
    		"NG":"^(\\d{6})$",
    		"NI":"^(\\d{7})$",
    		"NL":"^(\\d{4}[A-Z]{2})$",
    		"NO":"^(\\d{4})$",
    		"NP":"^(\\d{5})$",
    		"NZ":"^(\\d{4})$",
    		"OM":"^(\\d{3})$",
    		"PF":"^((97|98)7\\d{2})$",
    		"PG":"^(\\d{3})$",
    		"PH":"^(\\d{4})$",
    		"PK":"^(\\d{5})$",
    		"PL":"^(\\d{5})$",
    		"PM":"^(97500)$",
    		"PR":"^(\\d{9})$",
    		"PT":"^(\\d{7})$",
    		"PW":"^(96940)$",
    		"PY":"^(\\d{4})$",
    		"RE":"^((97|98)(4|7|8)\\d{2})$",
    		"RO":"^(\\d{6})$",
    		"RS":"^(\\d{6})$",
    		"RU":"^(\\d{6})$",
    		"SA":"^(\\d{5})$",
    		"SD":"^(\\d{5})$",
    		"SE":"^(?:SE)*(\\d{5})$",
    		"SG":"^(\\d{6})$",
    		"SH":"^(STHL1ZZ)$",
    		"SI":"^(?:SI)*(\\d{4})$",
    		"SK":"^(\\d{5})$",
    		"SM":"^(4789\\d)$",
    		"SN":"^(\\d{5})$",
    		"SO":"^([A-Z]{2}\\d{5})$",
    		"SV":"^(?:CP)*(\\d{4})$",
    		"SZ":"^([A-Z]\\d{3})$",
    		"TC":"^(TKCA 1ZZ)$",
    		"TH":"^(\\d{5})$",
    		"TJ":"^(\\d{6})$",
    		"TM":"^(\\d{6})$",
    		"TN":"^(\\d{4})$",
    		"TR":"^(\\d{5})$",
    		"TW":"^(\\d{5})$",
    		"UA":"^(\\d{5})$",
    		"US":"^((\\d{5}-\\d{4})|(\\d{5})|([A-Z]\\d[A-Z]\\s\\d[A-Z]\\d))$",
    		"US":"^\\d{5}(-\\d{4})?$",
    		"UY":"^(\\d{5})$",
    		"UZ":"^(\\d{6})$",
    		"VA":"^(\\d{5})$",
    		"VE":"^(\\d{4})$",
    		"VI":"^\\d{5}(-\\d{4})?$",
    		"VN":"^(\\d{6})$",
    		"WF":"^(986\\d{2})$",
    		"YT":"^(\\d{5})$",
    		"ZA":"^(\\d{4})$",
    		"ZM":"^(\\d{5})$",
    		"CS":"^(\\d{5})$"
    		
    }
   return Zipmapss[val];
    }
function cc_brand_id(cur_val,card_val) {
	  var sel_brand;

	  // the regular expressions check for possible matches as you type, hence the OR operators based on the number of chars
	  // regexp string length {0} provided for soonest detection of beginning of the card numbers this way it could be used for BIN CODE detection also

	  //JCB
	  jcb_regex = new RegExp('^(?:2131|1800|35)[0-9]{0,}$'); //2131, 1800, 35 (3528-3589)
	  // American Express
	  amex_regex = new RegExp('^3[47][0-9]{0,}$'); //34, 37
	  // Diners Club
	  diners_regex = new RegExp('^3(?:0[0-59]{1}|[689])[0-9]{0,}$'); //300-305, 309, 36, 38-39
	  // Visa
	  visa_regex = new RegExp('^4[0-9]{0,}$'); //4
	  // MasterCard
	  mastercard_regex = new RegExp('^(5[1-5]|222[1-9]|22[3-9]|2[3-6]|27[01]|2720)[0-9]{0,}$'); //2221-2720, 51-55
	  maestro_regex = new RegExp('^(5[06789]|6)[0-9]{0,}$'); //always growing in the range: 60-69, started with / not something else, but starting 5 must be encoded as mastercard anyway
	  //Discover
	  discover_regex = new RegExp('^(6011|65|64[4-9]|62212[6-9]|6221[3-9]|622[2-8]|6229[01]|62292[0-5])[0-9]{0,}$');
	  ////6011, 622126-622925, 644-649, 65


/*    cardtype.add("Visa");
			    cardtype.add("MasterCard");
			    cardtype.add("American Express");
			    cardtype.add("Diners Club");
			    cardtype.add("Discover");
			    cardtype.add("Carte Blanche");*/
	  // get rid of anything but numbers
	  cur_val = cur_val.replace(/\D/g, '');

	  // checks per each, as their could be multiple hits
	  //fix: ordering matter in detection, otherwise can give false results in rare cases
	  if (cur_val.match(jcb_regex)) {
	    sel_brand = "jcb";
	  } else if (cur_val.match(amex_regex)) {
	    sel_brand = "American Express";
	  } else if (cur_val.match(diners_regex)) {
	    sel_brand = "Diners Club";
	  } else if (cur_val.match(visa_regex)) {
	    sel_brand = "Visa";
	  } else if (cur_val.match(mastercard_regex)) {
	    sel_brand = "Master Card";
	  } else if (cur_val.match(discover_regex)) {
	    sel_brand = "Discover";
	  } else if (cur_val.match(maestro_regex)) {
	    if (cur_val[0] == '5') { //started 5 must be mastercard
	      sel_brand = "Master Card";
	    } else {
	      sel_brand = "maestro"; //maestro is all 60-69 which is not something else, thats why this condition in the end
	    }
	  } else {
	    sel_brand = "unknown";
	  }
	  var ccnum=cur_val;
	  ccnum = ccnum.split("-").join("");
	   // Checksum ("Mod 10")
	   // Add even digits in even length strings or odd digits in odd length strings.
	   var checksum = 0;
	   for (var i=(2-(ccnum.length % 2)); i<=ccnum.length; i+=2) {
	      checksum += parseInt(ccnum.charAt(i-1));
	   }
	   // Analyze odd digits in even length strings or even digits in odd length strings.
	   for (var i=(ccnum.length % 2) + 1; i<ccnum.length; i+=2) {
	      var digit = parseInt(ccnum.charAt(i-1)) * 2;
	      if (digit < 10) { checksum += digit; } else { checksum += (digit-9); }
	   }
	   if ((sel_brand == card_val)){
	   if ((checksum % 10) == 0) return true; else return false;
	   }else{
		   return false;
	   }
	   
	  return false;
	}
 function secondsToTime(m){
   
    var h  = Math.floor( m / 60 );
        m -= h * 60;
   
    return {
        "h": h,
        "m": m
    };
}



function radioSelect(id){
	 $("#"+id).prop('checked', true);
	 $(".showbtn").text("Show");
	 if(id=="macpYes"){
		 $("#tcpid").removeClass('help-block');
		 document.getElementById("tcpid").style.display='none'; 
	 }else if (id== "macpNo"){
		 $("#tcpid").removeClass('help-block');
		 document.getElementById("tcpid").style.display='none'; 
	 }else if(id=="TravelGuardYes"){
		 $("#tgpid").removeClass('help-block');
		 document.getElementById("tgpid").style.display='none'; 
	 }else if (id== "TravelGuardNo"){
		 $("#tgpid").removeClass('help-block');
		 document.getElementById("tgpid").style.display='none'; 
	 }else if (id== "TripMateYes"){
		 $("#tmpid").removeClass('help-block');
		 $("#tmpid").addClass('tmpid');
		  document.getElementById("tmpid").style.display='none'; 
	 }else if (id== "TripMateNo"){
		 $("#tmpid").removeClass('help-block');
		 $("#tmpid").addClass('tmpid');
		  document.getElementById("tmpid").style.display='none'; 
	 }
	
	
	 
	}


(function(){
	
	angular.module('asapPayment', ['cgBusy','LocalStorageModule']).controller('asapCntrl',['$http','$scope','$timeout','$window','localStorageService','$location',function($http,$scope,$timeout,$window,localStorageService, $location){ 
		var vm = this;
		$scope.url = $location.absUrl();
		$scope.IsHidden = true;
		$scope.selectedCard="Select a Card";
		
		
		   
		$scope.tabSplit = function(url) {
     	    var array = url.split('/');
     	    return array[array.length - 3];
     	}
     	$scope.tabId=$scope.tabSplit($scope.url);
		  
			  
			  $scope.focus	 =  function(id) {
			      $timeout(function() {
			        var element = $window.document.getElementById(id);
			        if(element)
			          element.focus();
			      });
			    };
			  
			  $scope.dobDay=[];
			  $scope.dateOfMonth=[];
			  $scope.dateOfYear=[];
           
			  $scope.$watch('selectedCountry', function (newVal) {
                  if (newVal) {
                	  if(newVal.ID != "US"){
                          if(newVal.ID == "CA"){
     						  document.getElementById("statemad").style.display='inline'; 
     					 }else{
                         	  document.getElementById("statemad").style.display='none'; 
                     	 
                     	}
     					 
                           }else{
                         	  document.getElementById("statemad").style.display='inline'; 
                         	
                           }
						   
                      if(newVal.ID == "CA"){
                    	  document.getElementById("statemad").style.display='inline'; 
                    	
                    	  $scope.IsHidden = true;
                  		$scope.IsShow = false;
                      $scope.usState = [
                        { 'ID': '0' , 'Name': 'Select State'  },
                        { 'ID':'AB', 'Name':'AB-Alberta'  },
						{ 'ID':'BC', 'Name':'BC-British Columbia'  },
						{ 'ID':'MB', 'Name':'MB-Manitoba'  },
						{ 'ID':'NB', 'Name':'NB-New Brunswick'  },
						{ 'ID':'NF', 'Name':'NF-Newfoundland and Labrador'  },
						{ 'ID':'NT', 'Name':'NT-Northwest Territories'  },
						{ 'ID':'NS', 'Name':'NS-Nova Scotia'  },
						{ 'ID':'NU', 'Name':'NU-Nunavut'  },
						{ 'ID':'ON', 'Name':'ON-Ontario'  },
						{ 'ID':'PE', 'Name':'PE-Prince Edward Island'  },
						{ 'ID':'QC', 'Name':'QC-Quebec'  },
						{ 'ID':'SK', 'Name':'SK-Saskatchewan'  },
						{ 'ID':'YT', 'Name':'YT-Yukon'  }];
                      $scope.selectedItem = $scope.usState[0];
                  }else  if(newVal.ID == "IN"){
                	//  $('#InternationalData').show();
                	  document.getElementById("statemad").style.display='none'; 
                	  $scope.IsHidden = true;
              		$scope.IsShow = false;
                      $scope.usState = [ 
                                        { 'ID': '0' , 'Name': 'Select State'  },
        								{ 'ID': 'AN', 'Name': 'AN-Andaman and Nicobar Islands'  },
        								{ 'ID': 'AP', 'Name': 'AP-Andhra Pradesh'  },
        								{ 'ID': 'AR', 'Name': 'AR-Arunachal Pradesh'  },
        								{ 'ID': 'AS', 'Name': 'AS-Assam'  },
        								{ 'ID': 'BR', 'Name': 'BR-Bihar'  },
        								{ 'ID': 'CH', 'Name': 'CH-Chandigarh'  },
        								{ 'ID': 'CT', 'Name': 'CT-Chhattisgarh'  },
        								{ 'ID': 'DN', 'Name': 'DN-Dadra and Nagar Haveli'  },
        								{ 'ID': 'DD', 'Name': 'DD-Daman and Diu'  },
        								{ 'ID': 'DL', 'Name': 'DL-Delhi'  },
        								{ 'ID': 'GA', 'Name': 'GA-Goa'  },
        								{ 'ID': 'GJ', 'Name': 'GJ-Gujarat'  },
        								{ 'ID': 'HR', 'Name': 'HR-Haryana'  },
        								{ 'ID': 'HP', 'Name': 'HP-Himachal Pradesh'  },
        								{ 'ID': 'JK', 'Name': 'JK-Jammu and Kashmir'  },
        								{ 'ID': 'JH', 'Name': 'JH-Jharkhand'  },
        								{ 'ID': 'KA', 'Name': 'KA-Karnataka'  },
        								{ 'ID': 'KL', 'Name': 'KL-Kerala'  },
        								{ 'ID': 'LD', 'Name': 'LD-Lakshadweep'  },
        								{ 'ID': 'MP', 'Name': 'MP-Madhya Pradesh'  },
        								{ 'ID': 'MH', 'Name': 'MH-Maharashtra'  },
        								{ 'ID': 'MN', 'Name': 'MN-Manipur'  },
        								{ 'ID': 'ML', 'Name': 'ML-Meghalaya'  },
        								{ 'ID': 'MZ', 'Name': 'MZ-Mizoram'  },
        								{ 'ID': 'NL', 'Name': 'NL-Nagaland'  },
        								{ 'ID': 'OR', 'Name': 'OR-Orissa'  },
        								{ 'ID': 'PY', 'Name': 'PY-Pondicherry'  },
        								{ 'ID': 'PB', 'Name': 'PB-Punjab'  },
        								{ 'ID': 'RJ', 'Name': 'RJ-Rajasthan'  },
        								{ 'ID': 'SK', 'Name': 'SK-Sikkim'  },
        								{ 'ID': 'TN', 'Name': 'TN-Tamil Nadu'  },
        								{ 'ID': 'TR', 'Name': 'TR-Tripura'  },
        								{ 'ID': 'UP', 'Name': 'UP-Uttar Pradesh'  },
        								{ 'ID': 'UL', 'Name': 'UL-Uttaranchal'  },
        								{ 'ID': 'WB', 'Name': 'WB-West Bengal'  },];
                      $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "AU"){
                                	   document.getElementById("statemad").style.display='none'; 
                                	//   $('#InternationalData').show();
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
											{ 'ID': '0', 'Name': 'Select State'  },
											{ 'ID': 'CT', 'Name': 'CT-Australian Capital Territory'  },
											{ 'ID': 'NS', 'Name': 'NS-New South Wales'  },
											{ 'ID': 'NT', 'Name': 'NT-Northern Territory'  },
											{ 'ID': 'QL', 'Name': 'QL-Queensland'  },
											{ 'ID': 'SA', 'Name': 'SA-South Australia'  },
											{ 'ID': 'TS', 'Name': 'TS-Tasmania'  },
											{ 'ID': 'VI', 'Name': 'VI-Victoria'  },
											{ 'ID': 'WA', 'Name': 'WA-Western Australia'  },
                                                         ];
                                       $scope.selectedItem = $scope.usState[0];
                                   }else  if(newVal.ID == "US"){
                                	   document.getElementById("statemad").style.display='inline'; 
                                //	   $('#InternationalData').hide();
                                	   $scope.IsHidden = true;
                               		$scope.IsShow = false;
                                       $scope.usState = [ 
                                                         { 'ID': '0' , 'Name': 'Select State'  },
											{ 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
											{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
											{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
											{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
											{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
											{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
											{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
											{ 'ID': 'CA'  ,'Name': 'CA-California'  },
											{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
											{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
											{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
											{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
											{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
											{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
											{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
											{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
											{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
											{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
											{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
											{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
											{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
											{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
											{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
											{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
											{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
											{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
											{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
											{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
											{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
											{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
											{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
											{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
											{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
											{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
											{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
											{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
											{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
											{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
											{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
											{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
											{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
											{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
											{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
											{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
											{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
											{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
											{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
											{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
											{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
											{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
											{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
											{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
											{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
											{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
                                                                      ];
                                       $scope.selectedItem = $scope.usState[0];
                                                }else  if(newVal.ID == "0"){
                                                	  document.getElementById("statemad").style.display='none'; 
                                                //	 $('#InternationalData').hide();
                                                	$scope.IsHidden = true;
                                            		$scope.IsShow = false;
                                                    $scope.usState = [ 
                                                                    { 'ID': '0' , 'Name': 'Select State'  },
                                                                    { 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
                        											{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
                        											{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
                        											{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
                        											{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
                        											{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
                        											{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
                        											{ 'ID': 'CA'  ,'Name': 'CA-California'  },
                        											{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
                        											{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
                        											{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
                        											{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
                        											{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
                        											{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
                        											{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
                        											{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
                        											{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
                        											{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
                        											{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
                        											{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
                        											{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
                        											{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
                        											{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
                        											{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
                        											{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
                        											{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
                        											{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
                        											{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
                        											{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
                        											{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
                        											{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
                        											{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
                        											{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
                        											{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
                        											{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
                        											{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
                        											{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
                        											{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
                        											{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
                        											{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
                        											{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
                        											{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
                        											{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
                        											{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
                        											{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
                        											{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
                        											{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
                        											{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
                        											{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
                        											{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
                        											{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
                        											{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
                        											{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
                        											{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
                                                                                                ];
                                                    $scope.selectedItem = $scope.usState[0];
                                                                          }else{
                                                                        	  document.getElementById("statemad").style.display='none'; 
                                                                        	//  $('#InternationalData').show();
                                                                        	  $scope.IsHidden = false;
                                                                      		$scope.IsShow = true;
                                                	
                                                }
                  }
              });
			  
			  
			  $timeout(function() {
		      $scope.countryList=[
                        { 'ID': '0' , 'Name': 'Select Country'  },
						{ 'ID': 'US' , 'Name': 'United States'  },
						{ 'ID': 'CA' , 'Name': 'Canada'  },
						{ 'ID': 'GB' , 'Name': 'United Kingdom'  },
						{ 'ID': 'AI' , 'Name': 'Anguilla'  },
						{ 'ID': 'AG' , 'Name': 'Antigua and Barbuda'  },
						{ 'ID': 'AR' , 'Name': 'Argentina'  },
						{ 'ID': 'AM' , 'Name': 'Armenia'  },
						{ 'ID': 'AW' , 'Name': 'Aruba'  },
						{ 'ID': 'AU' , 'Name': 'Australia'  },
						{ 'ID': 'AT' , 'Name': 'Austria'  },
						{ 'ID': 'AZ' , 'Name': 'Azerbaijan'  },
						{ 'ID': 'BS' , 'Name': 'Bahamas'  },
						{ 'ID': 'BH' , 'Name': 'Bahrain'  },
						{ 'ID': 'BB' , 'Name': 'Barbados'  },
						{ 'ID': 'BE' , 'Name': 'Belgium'  },
						{ 'ID': 'BZ' , 'Name': 'Belize'  },
						{ 'ID': 'BM' , 'Name': 'Bermuda'  },
						{ 'ID': 'BO' , 'Name': 'Bolivia'  },
						{ 'ID': 'BA' , 'Name': 'Bosnia Herzegovina'  },
						{ 'ID': 'BW' , 'Name': 'Botswana'  },
						{ 'ID': 'BR' , 'Name': 'Brazil'  },
						{ 'ID': 'VG' , 'Name': 'British Virgin Islands'  },
						{ 'ID': 'BN' , 'Name': 'Brunei Darussalam'  },
						{ 'ID': 'BG' , 'Name': 'Bulgaria'  },
						{ 'ID': 'KH' , 'Name': 'Cambodia'  },
						{ 'ID': 'KY' , 'Name': 'Cayman Islands'  },
						{ 'ID': 'CL' , 'Name': 'Chile'  },
						{ 'ID': 'CN' , 'Name': 'China'  },
						{ 'ID': 'CR' , 'Name': 'Costa Rica'  },
						{ 'ID': 'HR' , 'Name': 'Croatia'  },
						{ 'ID': 'CY' , 'Name': 'Cyprus'  },
						{ 'ID': 'CZ' , 'Name': 'Czech Republic'  },
						{ 'ID': 'DK' , 'Name': 'Denmark'  },
						{ 'ID': 'DM' , 'Name': 'Dominica'  },
						{ 'ID': 'DO' , 'Name': 'Dominican Republic'  },
						{ 'ID': 'EC' , 'Name': 'Ecuador'  },
						{ 'ID': 'EG' , 'Name': 'Egypt'  },
						{ 'ID': 'SV' , 'Name': 'El Salvador'  },
						{ 'ID': 'EE' , 'Name': 'Estonia'  },
						{ 'ID': 'FI' , 'Name': 'Finland'  },
						{ 'ID': 'FR' , 'Name': 'France'  },
						{ 'ID': 'GE' , 'Name': 'Georgia'  },
						{ 'ID': 'DE' , 'Name': 'Germany'  },
						{ 'ID': 'GR' , 'Name': 'Greece'  },
						{ 'ID': 'GD' , 'Name': 'Grenada'  },
						{ 'ID': 'GP' , 'Name': 'Guadeloupe'  },
						{ 'ID': 'GU' , 'Name': 'Guam'  },
						{ 'ID': 'GT' , 'Name': 'Guatemala'  },
						{ 'ID': 'GY' , 'Name': 'Guyana'  },
						{ 'ID': 'HT' , 'Name': 'Haiti'  },
						{ 'ID': 'HN' , 'Name': 'Honduras'  },
						{ 'ID': 'HK' , 'Name': 'Hong Kong'  },
						{ 'ID': 'HU' , 'Name': 'Hungary'  },
						{ 'ID': 'IS' , 'Name': 'Iceland'  },
						{ 'ID': 'IN' , 'Name': 'India'  },
						{ 'ID': 'ID' , 'Name': 'Indonesia'  },
						{ 'ID': 'IQ' , 'Name': 'Iraq'  },
						{ 'ID': 'IE' , 'Name': 'Ireland'  },
						{ 'ID': 'IL' , 'Name': 'Israel'  },
						{ 'ID': 'IT' , 'Name': 'Italy'  },
						{ 'ID': 'JM' , 'Name': 'Jamaica'  },
						{ 'ID': 'JP' , 'Name': 'Japan'  },
						{ 'ID': 'JO' , 'Name': 'Jordan'  },
						{ 'ID': 'KZ' , 'Name': 'Kazakstan'  },
						{ 'ID': 'KW' , 'Name': 'Kuwait'  },
						{ 'ID': 'KG' , 'Name': 'Kyrgyzstan'  },
						{ 'ID': 'LA' , 'Name': 'Lao Peoples Democratic Republic'  },
						{ 'ID': 'LV' , 'Name': 'Latvia'  },
						{ 'ID': 'LB' , 'Name': 'Lebanon'  },
						{ 'ID': 'LT' , 'Name': 'Lithuania'  },
						{ 'ID': 'LU' , 'Name': 'Luxembourg'  },
						{ 'ID': 'MO' , 'Name': 'Macau'  },
						{ 'ID': 'MY' , 'Name': 'Malaysia'  },
						{ 'ID': 'MT' , 'Name': 'Malta'  },
						{ 'ID': 'MQ' , 'Name': 'Martinique'  },
						{ 'ID': 'MX' , 'Name': 'Mexico'  },
						{ 'ID': 'FM' , 'Name': 'Micronesia'  },
						{ 'ID': 'MN' , 'Name': 'Mongolia'  },
						{ 'ID': 'MS' , 'Name': 'Montserrat'  },
						{ 'ID': 'NA' , 'Name': 'Namibia'  },
						{ 'ID': 'NL' , 'Name': 'Netherlands'  },
						{ 'ID': 'AN' , 'Name': 'Netherlands Antilles'  },
						{ 'ID': 'NZ' , 'Name': 'New Zealand'  },
						{ 'ID': 'NI' , 'Name': 'Nicaragua'  },
						{ 'ID': 'NO' , 'Name': 'Norway'  },
						{ 'ID': 'OM' , 'Name': 'Oman'  },
						{ 'ID': 'PS' , 'Name': 'Palestinian Territory, Occupied'  },
						{ 'ID': 'PG' , 'Name': 'Papua New Guinea'  },
						{ 'ID': 'PY' , 'Name': 'Paraguay'  },
						{ 'ID': 'PH' , 'Name': 'Philippines'  },
						{ 'ID': 'PL' , 'Name': 'Poland'  },
						{ 'ID': 'PT' , 'Name': 'Portugal'  },
						{ 'ID': 'QA' , 'Name': 'Qatar'  },
						{ 'ID': 'MK' , 'Name': 'Republic of Macedonia'  },
						{ 'ID': 'RO' , 'Name': 'Romania'  },
						{ 'ID': 'RU' , 'Name': 'Russia'  },
						{ 'ID': 'SM' , 'Name': 'San Marino'  },
						{ 'ID': 'SA' , 'Name': 'Saudi Arabia'  },
						{ 'ID': 'RS' , 'Name': 'Serbia'  },
						{ 'ID': 'SG' , 'Name': 'Singapore'  },
						{ 'ID': 'SK' , 'Name': 'Slovakia'  },
						{ 'ID': 'SI' , 'Name': 'Slovenia'  },
						{ 'ID': 'ZA' , 'Name': 'South Africa'  },
						{ 'ID': 'KR' , 'Name': 'South Korea'  },
						{ 'ID': 'ES' , 'Name': 'Spain'  },
						{ 'ID': 'LK' , 'Name': 'Sri Lanka'  },
						{ 'ID': 'KN' , 'Name': 'St. Christopher (St. Kitts) Nevis'  },
						{ 'ID': 'LC' , 'Name': 'St. Lucia'  },
						{ 'ID': 'PM' , 'Name': 'St. Pierre and Miquelon'  },
						{ 'ID': 'VC' , 'Name': 'St. Vincent and The Grenadines'  },
						{ 'ID': 'SR' , 'Name': 'Suriname'  },
						{ 'ID': 'SE' , 'Name': 'Sweden'  },
						{ 'ID': 'CH' , 'Name': 'Switzerland'  },
						{ 'ID': 'SY' , 'Name': 'Syrian Arab Republic'  },
						{ 'ID': 'TW' , 'Name': 'Taiwan'  },
						{ 'ID': 'TH' , 'Name': 'Thailand'  },
						{ 'ID': 'TT' , 'Name': 'Trinidad and Tobago'  },
						{ 'ID': 'TR' , 'Name': 'Turkey'  },
						{ 'ID': 'TC' , 'Name': 'Turks and Caicos Islands'  },
						{ 'ID': 'UA' , 'Name': 'Ukraine'  },
						{ 'ID': 'AE' , 'Name': 'United Arab Emirates'  },
						{ 'ID': 'UY' , 'Name': 'Uruguay'  },
						{ 'ID': 'VI' , 'Name': 'US Virgin Islands'  },
						{ 'ID': 'VE' , 'Name': 'Venezuela'  },
						{ 'ID': 'VN' , 'Name': 'Vietnam'  },
						{ 'ID': 'YE' , 'Name': 'Yemen'  }, 
						];		  
			  $scope.usState = [ { 'ID': '0' , 'Name': 'Please Select'  },
			                     { 'ID': 'AA'  ,'Name': 'AA-Armed Forces (the) Americas'  },
									{ 'ID': 'AE'  ,'Name': 'AE-Armed Forces Elsewhere'  },
									{ 'ID': 'AP'  ,'Name': 'AP-Armed Forces Pacific'  },
									{ 'ID': 'AL'  ,'Name': 'AL-Alabama'  },
									{ 'ID': 'AK'  ,'Name': 'AK-Alaska'  },
									{ 'ID': 'AZ'  ,'Name': 'AZ-Arizona'  },
									{ 'ID': 'AR'  ,'Name': 'AR-Arkansas'  },
									{ 'ID': 'CA'  ,'Name': 'CA-California'  },
									{ 'ID': 'CO'  ,'Name': 'CO-Colorado'  },
									{ 'ID': 'CT'  ,'Name': 'CT-Connecticut'  },
									{ 'ID': 'DE'  ,'Name': 'DE-Delaware'  },
									{ 'ID': 'DC'  ,'Name': 'DC-District of Columbia'  },
									{ 'ID': 'FL'  ,'Name': 'FL-Florida'  },
									{ 'ID': 'GA'  ,'Name': 'GA-Georgia'  },
									{ 'ID': 'HI'  ,'Name': 'HI-Hawaii'  },
									{ 'ID': 'ID'  ,'Name': 'ID-Idaho'  },
									{ 'ID': 'IL'  ,'Name': 'IL-Illinois'  },
									{ 'ID': 'IN'  ,'Name': 'IN-Indiania'  },
									{ 'ID': 'IA'  ,'Name': 'IA-Iowa'  },
									{ 'ID': 'KS'  ,'Name': 'KS-Kansas'  },
									{ 'ID': 'KY'  ,'Name': 'KY-Kentucky'  },
									{ 'ID': 'LA'  ,'Name': 'LA-Louisiana'  },
									{ 'ID': 'ME'  ,'Name': 'ME-Maine'  },
									{ 'ID': 'MD'  ,'Name': 'MD-Maryland'  },
									{ 'ID': 'MA'  ,'Name': 'MA-Massachusetts'  },
									{ 'ID': 'MI'  ,'Name': 'MI-Michigan'  },
									{ 'ID': 'MN'  ,'Name': 'MN-Minnesota'  },
									{ 'ID': 'MS'  ,'Name': 'MS-Mississippi'  },
									{ 'ID': 'MO'  ,'Name': 'MO-Missouri'  },
									{ 'ID': 'MT'  ,'Name': 'MT-Montana'  },
									{ 'ID': 'NE'  ,'Name': 'NE-Nebraska'  },
									{ 'ID': 'NV'  ,'Name': 'NV-Nevada'  },
									{ 'ID': 'NH'  ,'Name': 'NH-New Hampshire'  },
									{ 'ID': 'NJ'  ,'Name': 'NJ-New Jersey'  },
									{ 'ID': 'NM'  ,'Name': 'NM-New Mexico'  },
									{ 'ID': 'NY'  ,'Name': 'NY-New York'  },
									{ 'ID': 'NC'  ,'Name': 'NC-North Carolina'  },
									{ 'ID': 'ND'  ,'Name': 'ND-North Dakota'  },
									{ 'ID': 'OH'  ,'Name': 'OH-Ohio'  },
									{ 'ID': 'OK'  ,'Name': 'OK-Oklahoma'  },
									{ 'ID': 'OR'  ,'Name': 'OR-Oregon'  },
									{ 'ID': 'PA'  ,'Name': 'PA-Pennsylvania'  },
									{ 'ID': 'RI'  ,'Name': 'RI-Rhode Island'  },
									{ 'ID': 'SC'  ,'Name': 'SC-South Carolina'  },
									{ 'ID': 'SD'  ,'Name': 'SD-South Dakota'  },
									{ 'ID': 'TN'  ,'Name': 'TN-Tennessee'  },
									{ 'ID': 'TX'  ,'Name': 'TX-Texas'  },
									{ 'ID': 'UT' , 'Name': 'UT-Utah'  },
									{ 'ID': 'VT'  ,'Name': 'VT-Vermont'  },
									{ 'ID': 'VA'  ,'Name': 'VA-Virginia'  },
									{ 'ID': 'WA' , 'Name': 'WA-Washington'  },
									{ 'ID': 'WV' , 'Name': 'WV-West Virginia'  },
									{ 'ID': 'WI' , 'Name': 'WI-Wisconsin'  },
									{ 'ID': 'WY' , 'Name': 'WY-Wyoming'  },
			                 ];
							   $scope.usPhone = [ 
			                    { 'ID': '1','Name': 'Puerto Rico (1)'},
			                    { 'ID': '93','Name': 'Afghanistan (93)'},
			                    { 'ID': '355','Name': 'Albania (355)'},
			                    { 'ID': '213','Name': 'Algeria (213)'},
			                    { 'ID': '1684','Name': 'American Samoa (1684)'},
			                    { 'ID': '376','Name': 'Andorra (376)'},
			                    { 'ID': '244','Name': 'Angola (244)'},
			                    { 'ID': '1264','Name': 'Anguilla (1264)'},
			                    { 'ID': '672','Name': 'Antarctica (672)'},
			                    { 'ID': '1268','Name': 'Antigua and Barbuda (1268)'},
			                    { 'ID': '54','Name': 'Argentina (54)'},
			                    { 'ID': '297','Name': 'Aruba (297)'},
			                    { 'ID': '61','Name': 'Australia (61)'},
			                    { 'ID': '43','Name': 'Austria (43)'},
			                    { 'ID': '1242','Name': 'Bahamas (1242)'},
			                    { 'ID': '973','Name': 'Bahrain (973)'},
			                    { 'ID': '880','Name': 'Bangladesh (880)'},
			                    { 'ID': '1246','Name': 'Barbados (1246)'},
			                    { 'ID': '32','Name': 'Belgium (32)'},
			                    { 'ID': '501','Name': 'Belize (501)'},
			                    { 'ID': '229','Name': 'Benin (229)'},
			                    { 'ID': '1441','Name': 'Bermuda (1441)'},
			                    { 'ID': '975','Name': 'Bhutan (975)'},
			                    { 'ID': '591','Name': 'Bolivia (591)'},
			                    { 'ID': '387','Name': 'Bosnia and Herzegovina (387)'},
			                    { 'ID': '267','Name': 'Botswana (267)'},
			                    { 'ID': '55','Name': 'Brazil (55)'},
			                    { 'ID': '673','Name': 'Brunei (673)'},
			                    { 'ID': '359','Name': 'Bulgaria (359)'},
			                    { 'ID': '226','Name': 'Burkina Faso (226)'},
			                    { 'ID': '257','Name': 'Burundi (257)'},
			                    { 'ID': '855','Name': 'Cambodia (855)'},
			                    { 'ID': '237','Name': 'Cameroon (237)'},
			                    { 'ID': '1','Name': 'Canada (1)'},
			                    { 'ID': '238','Name': 'Cape Verde (238)'},
			                    { 'ID': '1345','Name': 'Cayman Islands (1345)'},
			                    { 'ID': '236','Name': 'Central African Republic (236)'},
			                    { 'ID': '235','Name': 'Chad (235)'},
			                    { 'ID': '56','Name': 'Chile (56)'},
			                    { 'ID': '86','Name': 'China (86)'},
			                    { 'ID': '61','Name': 'Christmas Island (61)'},
			                    { 'ID': '61','Name': 'Cocos (Keeling) Islands (61)'},
			                    { 'ID': '57','Name': 'Colombia (57)'},
			                    { 'ID': '269','Name': 'Comoros (269)'},
			                    { 'ID': '243','Name': 'Democratic Republic of the Congo (243)'},
			                    { 'ID': '682','Name': 'Cook Islands (682)'},
			                    { 'ID': '506','Name': 'Costa Rica (506)'},
			                    { 'ID': '385','Name': 'Croatia (385)'},
			                    { 'ID': '357','Name': 'Cyprus (357)'},
			                    { 'ID': '420','Name': 'Czech Republic (420)'},
			                    { 'ID': '45','Name': 'Denmark (45)'},
			                    { 'ID': '253','Name': 'Djibouti (253)'},
			                    { 'ID': '1767','Name': 'Dominica (1767)'},
			                    { 'ID': '1809','Name': 'Dominican Republic (1809)'},
			                    { 'ID': '593','Name': 'Ecuador (593)'},
			                    { 'ID': '20','Name': 'Egypt (20)'},
			                    { 'ID': '503','Name': 'El Salvador (503)'},
			                    { 'ID': '240','Name': 'Equatorial Guinea (240)'},
			                    { 'ID': '372','Name': 'Estonia (372)'},
			                    { 'ID': '251','Name': 'Ethiopia (251)'},
			                    { 'ID': '500','Name': 'Falkland Islands (500)'},
			                    { 'ID': '298','Name': 'Faroe Islands (298)'},
			                    { 'ID': '679','Name': 'Fiji (679)'},
			                    { 'ID': '358','Name': 'Finland (358)'},
			                    { 'ID': '33','Name': 'France (33)'},
			                    { 'ID': '594','Name': 'French Guiana(594)'},
			                    { 'ID': '689','Name': 'French Polynesia (689)'},
			                    { 'ID': '241','Name': 'Gabon (241)'},
			                    { 'ID': '220','Name': 'Gambia (220)'},
			                    { 'ID': '49','Name': 'Germany (49)'},
			                    { 'ID': '233','Name': 'Ghana (233)'},
			                    { 'ID': '350','Name': 'Gibraltar (350)'},
			                    { 'ID': '30','Name': 'Greece (30)'},
			                    { 'ID': '299','Name': 'Greenland (299)'},
			                    { 'ID': '1473','Name': 'Grenada (1473)'},
			                    { 'ID': '1784','Name': 'Saint Vincent and the Grenadines (1784)'},
			                    { 'ID': '1671','Name': 'Guam (1671)'},
			                    { 'ID': '502','Name': 'Guatemala (502)'},
			                    { 'ID': '224','Name': 'Guinea (224)'},
			                    { 'ID': '245','Name': 'Guinea-Bissau (245)'},
			                    { 'ID': '592','Name': 'Guyana (592)'},
			                    { 'ID': '509','Name': 'Haiti (509)'},
			                    { 'ID': '504','Name': 'Honduras (504)'},
			                    { 'ID': '852','Name': 'Hong Kong (852)'},
			                    { 'ID': '36','Name': 'Hungary (36)'},
			                    { 'ID': '354','Name': 'Iceland (354)'},
			                    { 'ID': '91','Name': 'India (91)'},
			                    { 'ID': '62','Name': 'Indonesia (62)'},
			                    { 'ID': '98','Name': 'Iran (98)'},
			                    { 'ID': '964','Name': 'Iraq (964)'},
			                    { 'ID': '353','Name': 'Ireland (353)'},
			                    { 'ID': '972','Name': 'Israel (972)'},
			                    { 'ID': '39','Name': 'Italy (39)'},
			                    { 'ID': '225','Name': 'Ivory Coast (225)'},
			                    { 'ID': '1876','Name': 'Jamaica (1876)'},
			                    { 'ID': '81','Name': 'Japan (81)'},
			                    { 'ID': '962','Name': 'Jordan (962)'},
			                    { 'ID': '254','Name': 'Kenya (254)'},
			                    { 'ID': '686','Name': 'Kiribati (686)'},
			                    { 'ID': '850','Name': 'North Korea (850)'},
			                    { 'ID': '82','Name': 'South Korea (82)'},
			                    { 'ID': '965','Name': 'Kuwait (965)'},
			                    { 'ID': '371','Name': 'Latvia (371)'},
			                    { 'ID': '961','Name': 'Lebanon (961)'},
			                    { 'ID': '266','Name': 'Lesotho (266)'},
			                    { 'ID': '231','Name': 'Liberia (231)'},
			                    { 'ID': '370','Name': 'Lithuania (370)'},
			                    { 'ID': '352','Name': 'Luxembourg (352)'},
			                    { 'ID': '853','Name': 'Macau (853)'},
			                    { 'ID': '261','Name': 'Madagascar (261)'},
			                    { 'ID': '265','Name': 'Malawi (265)'},
			                    { 'ID': '60','Name': 'Malaysia (60)'},
			                    { 'ID': '960','Name': 'Maldives (960)'},
			                    { 'ID': '223','Name': 'Mali (223)'},
			                    { 'ID': '356','Name': 'Malta (356)'},
			                    { 'ID': '692','Name': 'Marshall Islands (692)'},
			                    { 'ID': '596','Name': 'Martinique(596)'},
			                    { 'ID': '222','Name': 'Mauritania (222)'},
			                    { 'ID': '230','Name': 'Mauritius (230)'},
			                    { 'ID': '262','Name': 'Mayotte (262)'},
			                    { 'ID': '52','Name': 'Mexico (52)'},
			                    { 'ID': '691','Name': 'Micronesia (691)'},
			                    { 'ID': '373','Name': 'Moldova (373)'},
			                    { 'ID': '377','Name': 'Monaco (377)'},
			                    { 'ID': '976','Name': 'Mongolia (976)'},
			                    { 'ID': '1664','Name': 'Montserrat (1664)'},
			                    { 'ID': '212','Name': 'Morocco (212)'},
			                    { 'ID': '258','Name': 'Mozambique (258)'},
			                    { 'ID': '95','Name': 'Burma (Myanmar) (95)'},
			                    { 'ID': '264','Name': 'Namibia (264)'},
			                    { 'ID': '674','Name': 'Nauru (674)'},
			                    { 'ID': '977','Name': 'Nepal (977)'},
			                    { 'ID': '31','Name': 'Netherlands (31)'},
			                    { 'ID': '599','Name': 'Netherlands Antilles (599)'},
			                    { 'ID': '687','Name': 'New Caledonia (687)'},
			                    { 'ID': '64','Name': 'New Zealand (64)'},
			                    { 'ID': '505','Name': 'Nicaragua (505)'},
			                    { 'ID': '227','Name': 'Niger (227)'},
			                    { 'ID': '234','Name': 'Nigeria (234)'},
			                    { 'ID': '683','Name': 'Niue (683)'},
			                    { 'ID': '672','Name': 'Norfolk Island(672)'},
			                    { 'ID': '1670','Name': 'Northern Mariana Islands (1670)'},
			                    { 'ID': '47','Name': 'Norway (47)'},
			                    { 'ID': '968','Name': 'Oman (968)'},
			                    { 'ID': '92','Name': 'Pakistan (92)'},
			                    { 'ID': '680','Name': 'Palau (680)'},
			                    { 'ID': '507','Name': 'Panama (507)'},
			                    { 'ID': '675','Name': 'Papua New Guinea (675)'},
			                    { 'ID': '595','Name': 'Paraguay (595)'},
			                    { 'ID': '51','Name': 'Peru (51)'},
			                    { 'ID': '63','Name': 'Philippines (63)'},
			                    { 'ID': '48','Name': 'Poland (48)'},
			                    { 'ID': '351','Name': 'Portugal (351)'},
			                    { 'ID': '1','Name': 'United States (1)'},
			                    { 'ID': '974','Name': 'Qatar (974)'},
			                    { 'ID': '40','Name': 'Romania (40)'},
			                    { 'ID': '7','Name': 'Russia (7)'},
			                    { 'ID': '250','Name': 'Rwanda (250)'},
			                    { 'ID': '1758','Name': 'Saint Lucia (1758)'},
			                    { 'ID': '685','Name': 'Samoa (685)'},
			                    { 'ID': '378','Name': 'San Marino (378)'},
			                    { 'ID': '239','Name': 'Sao Tome and Principe (239)'},
			                    { 'ID': '966','Name': 'Saudi Arabia (966)'},
			                    { 'ID': '221','Name': 'Senegal (221)'},
			                    { 'ID': '248','Name': 'Seychelles (248)'},
			                    { 'ID': '232','Name': 'Sierra Leone (232)'},
			                    { 'ID': '65','Name': 'Singapore (65)'},
			                    { 'ID': '421','Name': 'Slovakia (421)'},
			                    { 'ID': '386','Name': 'Slovenia (386)'},
			                    { 'ID': '677','Name': 'Solomon Islands (677)'},
			                    { 'ID': '252','Name': 'Somalia (252)'},
			                    { 'ID': '27','Name': 'South Africa (27)'},
			                    { 'ID': '34','Name': 'Spain (34)'},
			                    { 'ID': '94','Name': 'Sri Lanka (94)'},
			                    { 'ID': '290','Name': 'Saint Helena (290)'},
			                    { 'ID': '1869','Name': 'Saint Kitts and Nevis (1869)'},
			                    { 'ID': '508','Name': 'Saint Pierre and Miquelon (508)'},
			                    { 'ID': '249','Name': 'Sudan (249)'},
			                    { 'ID': '597','Name': 'Suriname (597)'},
			                    { 'ID': '268','Name': 'Swaziland (268)'},
			                    { 'ID': '46','Name': 'Sweden (46)'},
			                    { 'ID': '41','Name': 'Switzerland (41)'},
			                    { 'ID': '963','Name': 'Syria (963)'},
			                    { 'ID': '886','Name': 'Taiwan (886)'},
			                    { 'ID': '255','Name': 'Tanzania (255)'},
			                    { 'ID': '66','Name': 'Thailand (66)'},
			                    { 'ID': '228','Name': 'Togo (228)'},
			                    { 'ID': '676','Name': 'Tonga (676)'},
			                    { 'ID': '1868','Name': 'Trinidad and Tobago (1868)'},
			                    { 'ID': '216','Name': 'Tunisia (216)'},
			                    { 'ID': '90','Name': 'Turkey (90)'},
			                    { 'ID': '1649','Name': 'Turks and Caicos Islands (1649)'},
			                    { 'ID': '688','Name': 'Tuvalu (688)'},
			                    { 'ID': '256','Name': 'Uganda (256)'},
			                    { 'ID': '380','Name': 'Ukraine (380)'},
			                    { 'ID': '971','Name': 'United Arab Emirates (971)'},
			                    { 'ID': '44','Name': 'United Kingdom (44)'},
			                    { 'ID': '598','Name': 'Uruguay (598)'},
			                    { 'ID': '678','Name': 'Vanuatu (678)'},
			                    { 'ID': '58','Name': 'Venezuela (58)'},
			                    { 'ID': '84','Name': 'Vietnam (84)'},
			                    { 'ID': '1 284  ','Name': 'British Virgin Islands (1 284  )'},
			                    { 'ID': '1340','Name': 'US Virgin Islands (1340)'},
			                    { 'ID': '681','Name': 'Wallis and Futuna (681)'},
			                    { 'ID': '967','Name': 'Yemen (967)'},
			                    { 'ID': '243','Name': 'Zaire(243)'},
			                    { 'ID': '260','Name': 'Zambia (260)'},
			                    { 'ID': '263','Name': 'Zimbabwe (263)'},
			                    { 'ID': '374','Name': 'Armenia (374)'},
			                    { 'ID': '994','Name': 'Azerbaijan (994)'},
			                    { 'ID': '375','Name': 'Belarus (375)'},
			                    { 'ID': '53','Name': 'Cuba (53)'},
			                    { 'ID': '291','Name': 'Eritrea (291)'},
			                    { 'ID': '970','Name': 'Gaza Strip (970)'},
			                    { 'ID': '995','Name': 'Georgia (995)'},
			                    { 'ID': '39','Name': 'Holy See (Vatican City) (39)'},
			                    { 'ID': '44','Name': 'Isle of Man (44)'},
			                    { 'ID': '7','Name': 'Kazakhstan (7)'},
			                    { 'ID': '381','Name': 'Kosovo (381)'},
			                    { 'ID': '996','Name': 'Kyrgyzstan (996)'},
			                    { 'ID': '856','Name': 'Laos (856)'},
			                    { 'ID': '218','Name': 'Libya (218)'},
			                    { 'ID': '423','Name': 'Liechtenstein (423)'},
			                    { 'ID': '389','Name': 'Macedonia (389)'},
			                    { 'ID': '382','Name': 'Montenegro (382)'},
			                    { 'ID': '850','Name': 'North Korea (850)'},
			                    { 'ID': '870','Name': 'Pitcairn Islands (870)'},
			                    { 'ID': '590','Name': 'Saint Barthelemy (590)'},
			                    { 'ID': '1599','Name': 'Saint Martin (1599)'},
			                    { 'ID': '381','Name': 'Serbia (381)'},
			                    { 'ID': '82','Name': 'South Korea (82)'},
			                    { 'ID': '992','Name': 'Tajikistan (992)'},
			                    { 'ID': '690','Name': 'Tokelau (690)'},
			                    { 'ID': '670','Name': 'Timor-Leste (670)'},
			                    { 'ID': '993','Name': 'Turkmenistan (993)'},
			                    { 'ID': '998','Name': 'Uzbekistan (998)'},
			                    { 'ID': '970','Name': 'West Bank (970)'},

			                    ];
			  $scope.selectedCountry = $scope.countryList[0];
			  $scope.selectedItem = $scope.usState[0];
			   $scope.usPhoneCode = $scope.usPhone[0];
			  for (var i = 0; i < $scope.totPax; ++i) {
        		  $scope.dobDay[i]="Day";
    			  $scope.dateOfMonth[i]="0";
    			  $scope.dateOfYear[i]="Year";
        	  }
			 
			  }, 1000);
			  
			  
	}])
})()


// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
