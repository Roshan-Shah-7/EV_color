<?php
global $fixter_theme_options;

$search_input = ( !empty($fixter_theme_options['search_input']) ) ? esc_attr($fixter_theme_options['search_input']) :  esc_attr_x("WRITE SEARCH WORD...", 'Search placeholder word', 'fixter');

$searchform_title = ( isset($fixter_theme_options['searchform_title']) ) ? esc_attr($fixter_theme_options['searchform_title']) :  esc_attr_x("Hi, How Can We Help You?", 'Search form title word', 'fixter');

if( !empty($searchform_title) ){
	$searchform_title = '<div class="prt-form-title">' . esc_attr($searchform_title) . '</div>';
}

if( !empty( $fixter_theme_options['header_search'] ) && $fixter_theme_options['header_search'] == true ){

?>
<div class="prt-search-overlay">
	<div class="prt-bg-layer"></div>
	<div class="prt-icon-close"></div>
	<div class="prt-search-outer">
		<?php echo preyantechnosys_wp_kses($searchform_title); ?>
		<form method="get" class="prt-site-searchform" action="<?php echo esc_url( home_url() ); ?>">
			<input type="search" class="field searchform-s" name="s" placeholder="<?php echo esc_attr($search_input); ?>" />
			<button type="submit"><span class="prt-fixter-icon-search"></span></button>
		</form>
	</div>
</div>
<?php } ?>