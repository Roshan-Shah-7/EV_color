				</div><!-- .site-content-inner -->
			</div><!-- .site-content -->
		</div><!-- .site-content-wrapper -->

		<footer id="colophon" class="site-footer">			
			<div class="footer_inner_wrapper footer<?php echo preyantechnosys_sanitize_html_classes(preyantechnosys_footer_row_class( 'full' )); ?>">
				<div class="site-footer-bg-layer prt-bg-layer"></div>
				<div class="site-footer-w">					
					<div class="footer-rows">
						<div class="footer-rows-inner">
							<?php preyantechnosys_footer_ctabox(); ?>
							<?php get_sidebar( 'first-footer' ); ?>
							<?php get_sidebar( 'second-footer' ); ?>
						</div><!-- .footer-inner -->
					</div><!-- .footer -->
					<?php get_sidebar( 'footer' ); ?>
				</div><!-- .footer-inner-wrapper -->
			</div><!-- .site-footer-inner -->
		<?php if( preyantechnosys_socialbar_show()==true ): ?>
			<div class="prt_footer_social_bar"><div class="preyantechnosys-socialbox-wrapper"><?php echo preyantechnosys_get_socialbar_links(); ?></div></div>
		<?php endif; ?>
		</footer><!-- .site-footer -->

	</div><!-- #page .site -->

</div><!-- .main-holder -->

<!-- To Top -->
<a id="totop" href="#top"><i class="prt-fixter-icon-angle-up"></i></a>
<?php wp_footer(); ?>
</body>
</html>
