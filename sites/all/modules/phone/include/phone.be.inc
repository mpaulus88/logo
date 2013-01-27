<?php

/**
 * @file
 * CCK Field for Belgian phone numbers.
 */
define('PHONE_BE_REGEX', "%(\+32|0)[1-9]\d{7,8}$%");

function phone_be_metadata() {
  // These strings are translated using t() on output.
  return array(
    'error' => '"%value" n´est pas un numéro valble',
  );
}

/**
 * Verifies that $phonenumber is valid
 *
 * @param string $phonenumber
 * @return boolean Returns boolean FALSE if the phone number is not valid.
 */
function valid_be_phone_number($phonenumber) {
  // define regular expression



  $phonenumber  = str_replace(array(' ','-','(',')'), '', $phonenumber);
   $match =array();
  $result = (bool) preg_match(PHONE_BE_REGEX, $phonenumber, $match);
  return $result;
}

/**
 * Formatting for Belgian Phone Numbers.
 *
 * @param string $phonenumber
 * @return string Returns a string containting the phone number with some formatting.
 */
function format_be_phone_number($phonenumber, $field) {
  $phone  = str_replace(array(' ','-','.','/','(',')'), '', $phonenumber);
  $matches =array();
    if (preg_match(PHONE_BE_REGEX, $phone, $matches) != 1) {
    return $phonenumber; // 
  }


 $value =($field && $field['phone_country_code'] ? '+32' : '0') .
            substr($matches[2],0,2).
            ' '.substr($matches[2],2,3).
            ' '.substr($matches[2],5,2).
            ' '.substr($matches[2],7);
   
   return $value;
}
