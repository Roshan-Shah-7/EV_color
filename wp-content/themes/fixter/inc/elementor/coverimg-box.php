<?php
namespace Elementor; 

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly	
}

/**
 *  Steps Box
*/
 
class Fixter_Coverimgbox_Widget extends Widget_Base{

	public function get_name() {
		return 'prt_coverimgbox_element';
	}

	public function get_title() {
		return esc_attr__( 'Cover Box', 'fixter' );
	}

	public function get_icon() {
		return ' eicon-menu-toggle';
	}

	public function get_categories() {
		return [ 'fixter_category' ];
	}

	public function __construct($data = [], $args = null) {
		parent::__construct($data, $args);
	}

	protected function register_controls() {


		$this->start_controls_section(
			'data_section2',
			[
				'label' => esc_attr__( 'Boxes Content', 'fixter' ),
			]
        );

		$repeater = new Repeater();

		 $repeater->add_control(
			'icon_image',
			[
				'label' => __( 'Select Image for Icon', 'fixter' ),
				'description' => __( 'image will appear at icon position', 'fixter' ),
				'type' => \Elementor\Controls_Manager::MEDIA,
				'default' => [
					'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
			]
		);

	
		$repeater->add_control(
			'label',
			[
				'label' => esc_attr__( 'Box Title', 'fixter' ),
				'type' => Controls_Manager::TEXT,
				'default' => esc_attr__( 'Box Title', 'fixter' ),
				'placeholder' => esc_attr__( 'Box Title', 'fixter' ),
				'label_block' => true,
			]
		);
		
		$repeater->add_control(
			'smalltext',
			[
				'label' => esc_attr__( 'Box Content', 'fixter' ),
				'default' => esc_attr__( 'Box Content', 'fixter' ),
				'placeholder' => esc_attr__( 'Box Content', 'fixter' ),
				'type' => Controls_Manager::TEXTAREA,
				'show_label' => true,
			]
		);

		$repeater->add_control(
			'link_text',
			[
				'label' => esc_attr__( 'Link Text', 'fixter' ),
				'type' => Controls_Manager::TEXT,
				'default' => '',
				'description' => esc_attr__( 'Like READ MORE text. This text will appear as link (fill link URL in below option).', 'fixter' ),
				'placeholder' => esc_attr__( 'READ MORE', 'fixter' ),
				'label_block' => true,
				'separator' => 'before',
			]
		);
		
		$repeater->add_control(
			'link_url',
			[
				'label' => esc_attr__( 'Link URL', 'fixter' ),
				'description' => esc_attr__( 'Add link URL here.', 'fixter' ),
				'type' => Controls_Manager::URL,
				'show_label' => true,
				'show_external' => true,
				'default' => [
					'url' => '',
					'is_external' => false,
					'nofollow' => false,
				],
			]
		);
        $this->add_control(
			'boxes',
			[
				'label'		=> esc_attr__( 'Boxes', 'fixter' ),
				'type'		=> Controls_Manager::REPEATER,
				'fields'	=> $repeater->get_controls(),
				'default'	=> [
					[
						'image'		=> get_template_directory_uri() . '/images/placeholder.png',
						'label'		=> esc_attr__( 'This is first box', 'fixter' ),
						'smalltext'	=> esc_attr__( 'This is small description', 'fixter' ),
					],
					[
						'image'		=> get_template_directory_uri() . '/images/placeholder.png',
						'label'		=> esc_attr__( 'This is second box', 'fixter' ),
						'smalltext'	=> esc_attr__( 'This is small description', 'fixter' ),
					],
				],
				'title_field' => '{{{ label }}}',
			]
		);

		$this->end_controls_section();



	}

	protected function render() {

		$settings	= $this->get_settings_for_display();
		extract($settings);
		$return = '';
		$link_html = '';
		$image_html		= '' ;
		$column_class = '';
		$icon_html ='';
		$headingclass= '';
		if( empty($settings['heading']) ){
			$headingclass = 'prt-boxwithout-heading';
		}
		?>


		<?php
			$col_start_div	= '';
			$col_end_div	= '';
					if( !empty($boxes) ){
						switch( count($boxes) ){
					case 1:
						$column_class = 'one';
					break;
					
					case 2:
						$column_class = 'two';
					break;
					
					case 3:
						$column_class	 = 'three';
					break;
					
					case 4:
					default:
						$column_class = 'four';
					break;
				}
			} ?>
			
<div class="prt_coverimgbox_wrapper prt-column-<?php echo esc_attr($column_class); ?>">


		<?php
		$count = 1;
		$accclass = '';
		foreach( $settings['boxes'] as $box ){
			 

			$smalltext_html	= ( !empty($box['smalltext']) ) ? '<div class="preyantechnosys-static-box-desc">'.esc_html($box['smalltext']).'</div>' : '' ;
			$label_html		= ( !empty($box['label']) ) ? '<div class="prt-box-title"><h4>'.esc_html($box['label']).'</h4></div>' : '' ;

							$icon_image = '<img src="'.esc_url($box['icon_image']['url']).'" alt="'.esc_attr($box['label']).'" />';
							$icon = '<div class="prt-stepbox-imagebox"><div class="prt-ptable-icon-type-image">' . $icon_image . '</div></div>';
							
						
					

			$link_html = '';
			if( !empty($box['link_text']) && isset($box['link_url']['url']) && !empty($box['link_url']['url']) ){
				$text = $box['link_text'];
				$link_html = '<a class="prt-staticbox-more-link prt-more-button" href="' . esc_url( $box['link_url']['url'] ) . '" title="' . esc_attr( $text ) . '" target="' . ( (!empty($box['link_url']['is_external']) && $box['link_url']['is_external']==true) ? '_blank' : '_self' ) . '">' . esc_attr( $text ) . '</a>' ;
			}
					ob_start();
					
					include( get_template_directory() . '/template-parts/coverimgbox/coverimgbox-default.php' );
					include( get_template_directory() . '/template-parts/coverimgbox/coverimgbox-default2.php' );
					$return .= ob_get_contents();
					ob_end_clean();
		$count++;

		}		
		
		
		if( !empty($settings['icon_type']) ){

				if( $settings['icon_type']=='text' ){
					$icon_html = '<div class="prt-icon-type-text">' . $settings['icon_text'] . '</div>';
					$icon_type_class = 'text';

				} else if( $settings['icon_type']=='image' ){
					$icon_alt	= (!empty($settings['title'])) ? trim($settings['title']) : esc_attr__('Icon', 'fixter') ;
					$icon_image = '<img src="'.esc_url($settings['icon_image']['url']).'" alt="'.esc_attr($icon_alt).'" />';
					$icon_html	= '<div class="prt-icon-type-image">' . $icon_image . '</div>';
					$icon_type_class = 'image';
				} else if( $settings['icon_type']=='none' ){
					$icon_html = '';
					$icon_type_class = 'none';
				} else {

					$icon_html       = '<div class="prt-box-icon"><i class="' . $settings['icon']['value'] . '"></i></div>';
					$icon_type_class = 'icon';

					wp_enqueue_style( 'elementor-icons-'.$settings['icon']['library']);
				}
		}
		
		if( !empty($settings['heading']) ) {
	
			$heading_html	= ''.preyantechnosys_wp_kses($settings['heading']).'';
		}
			
		$return .=''.( !empty($settings['heading']) ) ? '<div class="prt_coverbox_contents prt-last"><div class="prt-bottom-contentbox"><div class="prt-contentbox-icon">'.$icon_html.'</div><div class="prt-contentbox-heading">'.tm_link_render($settings['heading_link'], 'start' ).''.$heading_html.''.tm_link_render($settings['heading_link'], 'end' ).'</div></div></div>' : '';
		
		echo preyantechnosys_wp_kses($return);
		
		?>

		</div>

	    <?php
	}

	

}
// Register widget
Plugin::instance()->widgets_manager->register( new Fixter_Coverimgbox_Widget() );