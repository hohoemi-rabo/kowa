<?php
/**
 * The main template file
 *
 * @package kowa
 */

get_header();
?>

<main id="main-content" tabindex="-1">
    <div class="container">
        <?php
        if (have_posts()) :
            while (have_posts()) :
                the_post();
                the_content();
            endwhile;
        endif;
        ?>
    </div>
</main>

<?php
get_sidebar();
get_footer();
?>
