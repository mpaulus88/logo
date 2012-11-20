<?php
function perso_menu_link(array $variables) {
  $element = $variables['element'];
  $sub_menu = '';

  if ($element['#below']) {
    $sub_menu = drupal_render($element['#below']);
  }

  $output = l($element['#title'], $element['#href'], $element['#localized_options']);
  if($element['#original_link']['menu_name']=='menu-menu-graphique')
  {
  return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu ."<p>".$element['#localized_options']['attributes']['title']."</p>"."</li>\n";
	}
	else
	{ return '<li' . drupal_attributes($element['#attributes']) . '>' . $output . $sub_menu . "</li>\n";
	}
}