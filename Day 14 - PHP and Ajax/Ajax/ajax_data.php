<?php 
	echo 'This is PHP page';

	$names = ["John", "Ford", "BMW", "Fiat" ];
	$c = 1;
	foreach ($names as $name) {
		echo $c . " " . $name . '<br>';

		

		$c++;
	};
 ?>
<!-- .readyState:
 0: Request not initialized
 1: Server Connection Established
 2: Request recieved
 3: Processing request
 4: Request finished and ready

 status:
 200: OK
 403: Forbidden
 404: Page not found
 500: Server Error -->