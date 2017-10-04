<?php 
	$var1 = 'new content';

	// stops execution of the script, useful for debugging
	// echo $var1;
	// return;

	$assoc = ['a' => 1, 'b' => 2, 'c' => 3];
	// making json object from associative array
	// echo json_encode($assoc);
 ?>
 <?php
  $content = array(
    'short' => 'New content',
    'regular' => 'This is the new content which has been loaded by Ajax.',
    'long' => 'This content is the result of making an Ajax query to a PHP page which dynamically generated text as a response.'
  );
  echo json_encode($content);
?>