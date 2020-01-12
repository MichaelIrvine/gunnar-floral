<?php
/**
 * The template for displaying all pages
 *
 * This is the template that displays all pages by default.
 * Please note that this is the WordPress construct of pages
 * and that other 'pages' on your WordPress site may use a
 * different template.
 *
 * @link https://developer.wordpress.org/themes/basics/template-hierarchy/
 *
 * @package Gunnar_Floral
 */

get_header();
?>

<?php
  $fp_video = get_field('video_background','option')

?>

<div class="front-page_background-contrainer">
  <video autoplay playsinline muted loop class="front-page_video">
    <source src="<?php echo $fp_video; ?>" type="video/mp4">
  </video>
</div>

<?php
get_footer();