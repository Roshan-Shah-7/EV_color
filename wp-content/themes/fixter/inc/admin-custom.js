/**
 *  Admin custom JS file
 */
"use strict";
 
 
// Header Style - Change options based on selected header style on click 
function preyantechnosys_header_style_change_triggers(){
	
	"use strict";
	
	// Default value
	var header_bg_color               = 'white';
	var header_bg_custom_color        = 'darkgrey';
	var titlebar_background_color	  = 'custom';
	var titlebar_text_color			  = 'white';
	var topbar_right_text			  = '[prt-social-links tooltip="no"]<div class="prt-vc_btn3-container prt-vc_btn3-inline"><a class="prt-vc_general prt-vc_btn3 prt-vc_btn3-size-md prt-vc_btn3-shape-square prt-vc_btn3-style-flat prt-vc_btn3-weight-no prt-vc_btn3-color-skincolor" href="#" title="">Get An Appointment!</a></div>';
	var topbar_left_text			  = '<ul class="top-contact"><li><i class="fa fa-map-marker"></i>24 Tech Roqad st Ny 10023</li><li><i class="fa fa-clock-o"></i>Mon-Sat: 9am to 6pm</li></ul>';
	var titlebar_height				  = '250';
	var mainmenufont_color            = '#343c5c';
	var topbar_bg_color				  = 'darkgrey';
	var header_height                 = '100';
	var logoimg						  = 'logo.png';
	var logo_max_height				  = '45';
	var mainmenu_active_link_color    = 'skin';
	var stickymainmenufontcolor_color = '#343c5c';
	var sticky_header_bg_color        = 'white';
	var dropmenu_background_color     = '#ffffff';
	var dropdownmenufont_color        = '#7b8095';
	var header_text      			  = '<a class="prt-vc_general prt-vc_btn3 prt-vc_btn3-size-md prt-vc_btn3-shape-rounded prt-vc_btn3-style-flat prt-vc_btn3-weight-no prt-vc_btn3-color-gradient" href="#" title="">Get A Quote</a>';
	var infostack_column_one		  = '<div class="header-icon"> <div class="icon"><i class="kw_fixter flaticon-phone-call"></i></div></div><div class="header-content"><h3>Telephone</h3><h5>+123 795 9841</h5></div>';
	var infostack_column_two		  = '<div class="header-icon"> <div class="icon"><i class="kw_fixter flaticon-big-envelope"></i></div></div><div class="header-content"><h3>Email Address</h3><h5>info@example.com</h5></div>';
	var infostack_column_three		  = '<div class="header-icon"> <div class="icon"><i class="kw_fixter flaticon-pin"></i></div></div><div class="header-content"><h3>Office Address</h3><h5> 23 Belfast ave, Florida</h5></div>';
	
	jQuery('input[name="fixter_theme_options[headerstyle]"]').change(function() {
		
		var imgurl = jQuery(this).next().attr('src').split('inc');
		imgurl = imgurl[0]+ 'images/';
		
		console.log(this.value);
		
		if (this.value == 'classic') { // Classic
			jQuery('select[name="fixter_theme_options[header_bg_color]"]').val(header_bg_color).change();
			jQuery('input[name="fixter_theme_options[titlebar_background][color]"]').iris('color', titlebar_background_color);  // 
			jQuery('select[name="fixter_theme_options[titlebar_text_color]"]').val(titlebar_text_color);
			jQuery('input[name="fixter_theme_options[titlebar_height]"').val(titlebar_height);  // Titlebar height
			jQuery('input[name="fixter_theme_options[show_topbar]"]').prop('checked', true);  // Show topbar
			jQuery('input[name="fixter_theme_options[header_search]"]').prop('checked', false);  // Show header search
			jQuery('input[name="fixter_theme_options[mainmenufont][color]"').iris('color', mainmenufont_color);  // 
			jQuery('input[name="fixter_theme_options[header_height]"]').val(header_height);  // Header Height
			jQuery('input[name="fixter_theme_options[logoimg][id]"]').val('');
			jQuery('input[name="fixter_theme_options[logoimg][thumb-url]"]').val( imgurl+logoimg );
			jQuery('input[name="fixter_theme_options[logoimg][full-url]').val( imgurl+logoimg );
			jQuery('input[name="fixter_theme_options[logo_max_height]"]').val(logo_max_height);  //
			jQuery('select[name="fixter_theme_options[mainmenu_active_link_color]"]').val(mainmenu_active_link_color).change(); // Select
			jQuery('input[name="fixter_theme_options[stickymainmenufontcolor]"]').iris('color', stickymainmenufontcolor_color);  // 
			jQuery('select[name="fixter_theme_options[sticky_header_bg_color]"]').val(sticky_header_bg_color).change();		
			jQuery('input[name="fixter_theme_options[dropmenu_background][color]"]').iris('color', dropmenu_background_color);  // Dropdown Menu color
			jQuery('input[name="fixter_theme_options[dropdownmenufont][color]"]').iris('color', dropdownmenufont_color);  // Dropdown Menu color
			jQuery('textarea[name="fixter_theme_options[header_text]"]').val(header_text);  //
				
		} 
		
	});
}
 

/**
 *  Codestar Framework : preyantechnosys_background JS
 */
jQuery.fn.THEMETECHMOUNT_CSFRAMEWORK_BG_IMAGE_UPLOADER = function($) {
    return this.each(function() {

	var $this      = jQuery(this),
		$add       = $this.find('.cs-add'),
		$preview   = $this.find('.cs-image-preview'),
		$noimgtext = $this.find('.prt-cs-background-heading-noimg'),
		$closeicon = $this.find('.prt-cs-remove'),
		$remove    = $this.find('.cs-remove'),
		$input     = $this.find('input.prt-background-image'),
		$inputid   = $this.find('input.prt-background-imageid'),
		$img       = $this.find('img'),
		$btntitleadd    = $this.find('.prt-cs-background-text-add-image').text(),
		$btntitlechange = $this.find('.prt-cs-background-text-change-image').text(),
		wp_media_frame;

      $add.on('click', function( e ) {

        e.preventDefault();

        // Check if the `wp.media.gallery` API exists.
        if ( typeof wp === 'undefined' || ! wp.media || ! wp.media.gallery ) {
          return;
        }

        // If the media frame already exists, reopen it.
        if ( wp_media_frame ) {
          wp_media_frame.open();
          return;
        }

        // Create the media frame.
        wp_media_frame = wp.media({
          library: {
            type: 'image'
          }
        });

        // When an image is selected, run a callback.
        wp_media_frame.on( 'select', function() {

          var attachment = wp_media_frame.state().get('selection').first().attributes;
          var thumbnail  = ( typeof attachment.sizes.thumbnail !== 'undefined' ) ? attachment.sizes.thumbnail.url : attachment.url;

          $img.removeClass('hidden');
		  $closeicon.removeClass('hidden');
		  $noimgtext.addClass('hidden');
          $img.attr('src', thumbnail);
          $input.val( attachment.url ).trigger('change');
		  $inputid.val( attachment.id ).trigger('change');
			$add.text($btntitlechange);
        });

        // Finally, open the modal.
        wp_media_frame.open();

      });

      // Remove image
      $remove.on('click', function( e ) {
        e.preventDefault();
        $input.val('').trigger('change');
        $img.addClass('hidden');
		$closeicon.addClass('hidden');
		$noimgtext.removeClass('hidden');
		$add.text($btntitleadd);
      });

    });

  };


/**
 *  Codestar Framework : preyantechnosys_typography JS
 */
  jQuery.fn.THEMETECHMOUNT_CSFRAMEWORK_TYPOGRAPHY = function() {
    return this.each( function() {

      var typography      = jQuery(this),
          family_select   = typography.find('.cs-typo-family'),
          variants_select = typography.find('.cs-typo-variant'),
          typography_type = typography.find('.cs-typo-font');

      family_select.on('change', function() {

        var _this     = jQuery(this),
            _type     = _this.find(':selected').data('type') || 'custom',
            _variants = _this.find(':selected').data('variants');

        if( variants_select.length ) {

          variants_select.find('option').remove();

          jQuery.each( _variants.split('|'), function( key, text ) {
            variants_select.append('<option value="'+ text +'">'+ text +'</option>');
          });

          variants_select.find('option[value="regular"]').attr('selected', 'selected').trigger('chosen:updated');

        }

        typography_type.val(_type);

      });

    });
  };
  

/**
 *  preyantechnosys_image 
 */
  jQuery.fn.THEMETECHMOUNT_CSFRAMEWORK_IMAGE_UPLOADER = function() {
    return this.each(function() {

      var $this     = jQuery(this),
          $add      = $this.find('.cs-add'),
          $preview  = $this.find('.cs-image-preview'),
          $remove   = $this.find('.cs-remove'),
          $input    = $this.find('input.prt-cs-imgid'),
		  $thumbimg = $this.find('input.prt-cs-thumburl'),
		  $fullimg  = $this.find('input.prt-cs-fullurl'),
          $img      = $this.find('img'),
          wp_media_frame;

      $add.on('click', function( e ) {

        e.preventDefault();

        // Check if the `wp.media.gallery` API exists.
        if ( typeof wp === 'undefined' || ! wp.media || ! wp.media.gallery ) {
          return;
        }

        // If the media frame already exists, reopen it.
        if ( wp_media_frame ) {
          wp_media_frame.open();
          return;
        }

        // Create the media frame.
        wp_media_frame = wp.media({
          library: {
            type: 'image'
          }
        });

        // When an image is selected, run a callback.
        wp_media_frame.on( 'select', function() {

          var attachment = wp_media_frame.state().get('selection').first().attributes;
          var thumbnail  = ( typeof attachment.sizes.thumbnail !== 'undefined' ) ? attachment.sizes.thumbnail.url : attachment.url;
		  var fullimg    = ( typeof attachment.sizes.full.url !== 'undefined' ) ? attachment.sizes.full.url : '';

          $preview.removeClass('hidden');
          $img.attr('src', thumbnail);
          $input.val( attachment.id ).trigger('change');
		  $fullimg.val( fullimg ).trigger('change');
		  $thumbimg.val( thumbnail ).trigger('change');

        });

        // Finally, open the modal.
        wp_media_frame.open();

      });

      // Remove image
      $remove.on('click', function( e ) {
        e.preventDefault();
        $input.val('').trigger('change');
		$fullimg.val('').trigger('change');
		$thumbimg.val('').trigger('change');
        $preview.addClass('hidden');
      });

    });

  };
  

/**
 *  Titlebar text custom color show/hide
 */ 
function preyantechnosys_show_hide_titlebar_textcolor(){
	
	var $this      = jQuery( 'select[name="fixter_theme_options[titlebar_text_color]"]' );
	var $page_this = jQuery( 'select[name="_preyantechnosys_metabox_group[titlebar_text_color]"]' );
	
	if( $this.length > 0 ){
		if( jQuery($this).val()=='custom' ){
			jQuery( 'input[name="fixter_theme_options[titlebar_heading_font][color]"]' ).closest('.prt-typography-font-color-w').show();
			jQuery( 'input[name="fixter_theme_options[titlebar_subheading_font][color]"]' ).closest('.prt-typography-font-color-w').show();
			jQuery( 'input[name="fixter_theme_options[titlebar_breadcrumb_font][color]"]' ).closest('.prt-typography-font-color-w').show();
		} else {
			jQuery( 'input[name="fixter_theme_options[titlebar_heading_font][color]"]' ).closest('.prt-typography-font-color-w').hide();
			jQuery( 'input[name="fixter_theme_options[titlebar_subheading_font][color]"]' ).closest('.prt-typography-font-color-w').hide();
			jQuery( 'input[name="fixter_theme_options[titlebar_breadcrumb_font][color]"]' ).closest('.prt-typography-font-color-w').hide();
		}
	}
	
	if( $page_this.length > 0 ){
		if( jQuery($page_this).val()=='custom' ){
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_heading_font][color]"]' ).closest('.prt-typography-font-color-w').show();
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_subheading_font][color]"]' ).closest('.prt-typography-font-color-w').show();
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_breadcrumb_font][color]"]' ).closest('.prt-typography-font-color-w').show();
			
		} else {
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_heading_font][color]"]' ).closest('.prt-typography-font-color-w').hide();
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_subheading_font][color]"]' ).closest('.prt-typography-font-color-w').hide();
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_breadcrumb_font][color]"]' ).closest('.prt-typography-font-color-w').hide();
		}
	}		
}
  
 
/**
 *  Titlebar bg custom color show/hide
 */ 
function preyantechnosys_show_hide_titlebar_bgcolor(){
	
	var $page_this = jQuery( 'select[name="_preyantechnosys_metabox_group[titlebar_bg_color]"]' );
	
	if( $page_this.length > 0 ){
		if( jQuery($page_this).val()=='custom' ){
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_background][color]"]' ).closest('.prt-background-color-w').show();
		} else {
			jQuery( 'input[name="_preyantechnosys_metabox_group[titlebar_background][color]"]' ).closest('.prt-background-color-w').hide();
		}
	}
		
}


/**
 *  ThemetechMount icon picker
 */
function preyantechnosys_icon_picker(){
	
	if( jQuery('.preyantechnosys-iconpicker-wrapper').length > 0 ){
		
		jQuery('.preyantechnosys-iconpicker-wrapper').each(function(){
			
			var mainwrapper = jQuery(this);
			
			// checking if iconpicker already applied
			if( jQuery('.preyantechnosys-iconpicker-list', mainwrapper ).hasClass('iconpicker') == false ){
				
				// check if click applied
				if( !jQuery( '.prt-ipicker-selector-button', mainwrapper ).hasClass('tm_click_applied') ){
					
					jQuery( '.prt-ipicker-selector-button', mainwrapper ).on('click', function(){
						
						var $btn = jQuery(this);
						if( jQuery( '.preyantechnosys-iconpicker-list-w', mainwrapper ).css('display')=='none' ){
							
							
							// Apply iconpicker() on click so it will not load the page
							if( !jQuery('.preyantechnosys-iconpicker-list', mainwrapper ).hasClass('iconpicker') ){
								
								jQuery('.preyantechnosys-iconpicker-list', mainwrapper ).iconpicker({
									align: 'left', // Only in div tag
									arrowPrevIconClass: 'fa fa-chevron-left',
									arrowNextIconClass: 'fa fa-chevron-right',
									cols: 8,
									icon: jQuery('.preyantechnosys-iconpicker-list', mainwrapper ).data('icon'),
									iconset: jQuery('.preyantechnosys-iconpicker-list', mainwrapper ).data('iconset'),
									rows: 5
								});
								jQuery('.preyantechnosys-iconpicker-list', mainwrapper ).on('change', function(e) {
									jQuery('.prt-ipicker-selected-icon i',mainwrapper).removeClass().addClass( e.icon );
									jQuery('.preyantechnosys-iconpicker-input',mainwrapper).val(e.icon);
								});
								
							}
							
							jQuery( '.preyantechnosys-iconpicker-list-w', mainwrapper ).slideDown();
							jQuery( '.prt-ipicker-selector-button i', mainwrapper ).removeClass('fa-arrow-down').addClass('fa-arrow-up');
						} else {
							jQuery( '.preyantechnosys-iconpicker-list-w', mainwrapper ).slideUp();
							jQuery( '.prt-ipicker-selector-button i', mainwrapper ).removeClass('fa-arrow-up').addClass('fa-arrow-down');
						}
						return false;
					});
					
					
					// adding class so no other click applied
					jQuery( '.prt-ipicker-selector-button', mainwrapper ).addClass('tm_click_applied');
					
				}
			
			
				
				// close when click outside
				jQuery(document).on('click', function(event) { 
					if(!jQuery(event.target).closest('.preyantechnosys-iconpicker-list-w', mainwrapper ).length) {
						if(jQuery('.preyantechnosys-iconpicker-list-w', mainwrapper).is(":visible")) {
							jQuery( '.prt-ipicker-selector-button', mainwrapper ).trigger('click');
						}
					}
				});
				
			}
			
		});
		
		jQuery('.prt-ipicker-selector-w' ).each(function(){
			
			// specially for CodeStar element only
			if( jQuery('.preyantechnosys-iconpicker-element').length > 0 ){
				jQuery('.preyantechnosys-iconpicker-element').each(function(){
					var wrapper2 = jQuery(this);
					jQuery('.prt-iconpicker-library-selector', wrapper2 ).on('change', function(e){
						
						var curr_library = jQuery('.prt-iconpicker-library-selector', wrapper2).val();
						
						jQuery('.preyantechnosys-iconpicker-wrapper', wrapper2).each(function(){
							jQuery(this).hide();
							jQuery('.preyantechnosys-iconpicker-wrapper.prt-iconpicker-'+curr_library, wrapper2).show();
						});
						
					});
					
				});
			};
			
			
			
		});

	}
}
 
 
/**
 *  This is for background with custom color dropdown.. This will will show/hide color picker from the background options.
 */
function preyantechnosys_show_hide_color_picker_background(){
	
	
	var items = [
		['fbar_bg_color',          'fbar_background'],
		['titlebar_bg_color',      'titlebar_background'],
		['full_footer_bg_color',   'full_footer_bg_all'],
		['first_footer_bg_color',  'first_footer_bg_all'],
		['second_footer_bg_color', 'second_footer_bg_all'],
		['bottom_footer_bg_color', 'bottom_footer_bg_all']
	];
	
	jQuery(items).each(function(n,val){
		
		var dropdown_name   = val[0];
		var background_name = val[1];
		
		var $dropdown_element   = jQuery( 'select[name="fixter_theme_options['+dropdown_name+']"]' );
		
		// show/hide the color picker on load
		if( $dropdown_element.val()=='custom' ){
			jQuery( 'input[name="fixter_theme_options['+background_name+'][color]"]' ).closest('.prt-background-color-w').show();
		} else {
			jQuery( 'input[name="fixter_theme_options['+background_name+'][color]"]' ).closest('.prt-background-color-w').hide();
		}
		
		// on change of the dropdown
		$dropdown_element.change(function() {  // Theme Options
			
			if( jQuery(this).val()=='custom' ){
				jQuery( 'input[name="fixter_theme_options['+background_name+'][color]"]' ).closest('.prt-background-color-w').show();
			} else {
				jQuery( 'input[name="fixter_theme_options['+background_name+'][color]"]' ).closest('.prt-background-color-w').hide();
			}
		});
		
	});
	
}


/**
 *  Blog Post Format - Move the Gallery Meta Box to the Gallery Tab content so user can select images directly from Gallery tab.
 */
function preyantechnosys_gallery_post_format(){
	// moving the gallery meta box after the gallery box
	jQuery("#cfpf-format-gallery-preview").after( jQuery("#_preyantechnosys_metabox_gallery") );
	
	// hide all box by defualt
	jQuery("#_preyantechnosys_metabox_gallery").hide();
	
	jQuery("#cfpf-format-gallery-preview").hide();
	jQuery( '#cfpf-format-gallery-preview > label' ).hide();
	jQuery( '#cfpf-format-gallery-preview > .cfpf-gallery-options' ).hide();
	
	
	// show/hide if gallery post format
	if( jQuery('input[name="post_format"]:checked').val() == 'gallery' ){
		jQuery("#_preyantechnosys_metabox_gallery").show();
	}
	
	jQuery('input[name="post_format"]').change(function() {
		console.log( 'Changed: ' + this.value );
		
		if( this.value == 'gallery' ){
			jQuery("#_preyantechnosys_metabox_gallery").show();
		} else {
			jQuery("#_preyantechnosys_metabox_gallery").hide();
		}
		
	});

}


/**
 *  Document Ready Init
 */
jQuery(document).ready( function() {
	
	// stickey header in theme options
	jQuery(".cs-header").stick_in_parent();
	
	// Icon picker in CodeStar framework
	preyantechnosys_icon_picker();
	
	// When clicking on add group button and the group contains icon picker in it. Specially created for Portfolio List
	jQuery('.cs-field-group').each(function(){
		var groups = jQuery(this);
		jQuery( '.cs-add-group', groups ).on('click', function(){
			setTimeout(function(){
				jQuery('.cs-group:last-child .preyantechnosys-iconpicker-list', groups ).removeClass('iconpicker');
				preyantechnosys_icon_picker();
			}, 10);
		});
	});
	
	jQuery('.cs-field-preyantechnosys_background', this).THEMETECHMOUNT_CSFRAMEWORK_BG_IMAGE_UPLOADER();
	jQuery('.cs-field-preyantechnosys_typography', this).THEMETECHMOUNT_CSFRAMEWORK_TYPOGRAPHY();
	jQuery('.cs-field-preyantechnosys_image', this).THEMETECHMOUNT_CSFRAMEWORK_IMAGE_UPLOADER();
	
	
	
	// Titlebar Text Color - Show / Hide color for Text color option
	preyantechnosys_show_hide_titlebar_textcolor();
	jQuery( 'select[name="fixter_theme_options[titlebar_text_color]"]' ).change(function() {  // Theme Options
		preyantechnosys_show_hide_titlebar_textcolor();
	});
	jQuery( 'select[name="_preyantechnosys_metabox_group[titlebar_text_color]"]' ).change(function() {  // Page Meta Box Option
		preyantechnosys_show_hide_titlebar_textcolor();
	});
	
	
	// Titlebar BG Color - Show / Hide color for bg color option
	preyantechnosys_show_hide_titlebar_bgcolor()
	jQuery( 'select[name="_preyantechnosys_metabox_group[titlebar_bg_color]"]' ).change(function() {  // Page Meta Box Option
		preyantechnosys_show_hide_titlebar_bgcolor();
	});
	


	/**
	 *  Codestar Framework : preyantechnosys_skin_color JS
	 */
	jQuery('.cs-field-preyantechnosys_skin_color').each(function(){
		var $this = jQuery(this);
		jQuery( '.preyantechnosys-skin-color-list a', $this ).on('click', function() {
			var color = jQuery(this).css('background-color');
			jQuery('.wp-color-picker', $this ).iris('color', color);
			return false;
		});
	});
	
	
	/**
	 *  Add class in page loading option
	 */
	jQuery('*[data-depend-id="loaderimg_1"]').closest('.cs-field-image-select').addClass('prt-pre-loader-option-wrapper');
	jQuery('input[type=radio][name="fixter_theme_options[loaderimg]"]:checked').closest('label').addClass('prt-pre-loader-option-selected');
	jQuery('input[type=radio][name="fixter_theme_options[loaderimg]"]').change(function() {
		jQuery('input[type=radio][name="fixter_theme_options[loaderimg]"]').closest('label').removeClass('prt-pre-loader-option-selected');
		jQuery(this).closest('label').addClass('prt-pre-loader-option-selected');
		return true;
	});
	
	
	// Post formats - Move Gallery meta box in Gallery tab 
	preyantechnosys_gallery_post_format();
	
	
	/**
	 *  Icon picker init on adding new group in TM Progress Bar
	 */
	if (typeof vc != 'undefined' && typeof vc.atts != 'undefined' ) {
		vc.atts.preyantechnosys_iconpicker = {
			init: function ( param, $wrapper ) {
				preyantechnosys_icon_picker();
			}
		};
	}
	
	// on ajax complete
	jQuery( document ).ajaxComplete(function( event, xhr, settings ) {
		preyantechnosys_icon_picker();
	});
	
	
	/* For all background options - linking dropdown with all color picker for CUSTOM option.. so the color picker will be visiable only when custom color is selected */
	preyantechnosys_show_hide_color_picker_background();
		
});  // document.ready


/**
 *  Window Load init
 */
jQuery( window ).load(function() {
	
	// Header Styles - change values of some options on change of the header style
	preyantechnosys_header_style_change_triggers();
	
	
	// Post formats - Open Gallery meta box if closed
	if( jQuery(".js #_preyantechnosys_metabox_gallery").hasClass('closed') ){
		jQuery(".js #_preyantechnosys_metabox_gallery button.handlediv").trigger('click');
	}
	
	// Codestar - Remove DISABLED and adding READONLY to the export textarea
	jQuery('textarea[name="_nonce"]').prop("readonly", true);
	jQuery('textarea[name="_nonce"]').removeAttr('disabled');

});  // window.load