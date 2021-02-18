jQuery( function ($) {	 
	if( jQuery('#wbk-confirm-services').length > 0 ){
		jQuery( '.wbk-service-checkbox'  ).change( function(){         
			var service_count = jQuery( '.wbk-service-checkbox:checked').length;
		 	if( service_count != 2 ){
		 		jQuery( '#wbk-confirm-services' ).attr( "disabled", true );
		 	} else {
		 		jQuery( '#wbk-confirm-services' ).attr( "disabled", false );
		 	}
		});		 
	}
});
