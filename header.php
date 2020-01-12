<?php
/**
 * The header for our theme
 *
 * This is the template that displays all of the <head> section and everything up until <div id="content">
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package Gunnar_Floral
 */

?>
<!doctype html>
<html <?php language_attributes(); ?>>
<head>
	<meta charset="<?php bloginfo( 'charset' ); ?>">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<link rel="profile" href="https://gmpg.org/xfn/11">

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
<div id="page" class="site">
	<a class="skip-link screen-reader-text" href="#content"><?php esc_html_e( 'Skip to content', 'gunnar-floral' ); ?></a>

	<header class="header-wrapper_full">
		<div class="custom-logo">
			<?php
			the_custom_logo();
			?>	
		</div>
		<div class="custom-menu">
			<?php
				wp_nav_menu( array(
					'theme_location' => 'main-menu',
					'menu_id'        => 'main-menu',
				) );
				?>
		</div>		
	</header>

	<div id="content" class="site-content">
