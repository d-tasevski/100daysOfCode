
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Emmbeding PHP</title>
	<style type="text/css" media="screen">
		.container{
			width: 80%;
			height: 100%;
			background: #a0a0b1;
			margin: 0 auto;
			padding: 5% 10%;
			box-sizing: border-box;
			border: 1px solid black;
		}
		h2, h3 {
			text-align: center;
		}
		.func {
			font-weight: bold;
		}
	</style>
</head>
<body>
	<div class="container">
		<div>
			<h2>Variables and concatinating</h2>
			<p>Period ( . ) is concatinating in PHP ( like + for concatinating strings in Js).</p>
			<p>Variables must be preceeded with $ symbol.</p>
		<?php
			 // phpinfo();
			echo "Hello World!" . " Booooom";

			$var1 = 3;
			$br = "<br>";
		 ?>
		</div>
		<div>
			<h2>String functions</h2>
			<?php 
				$first = "The quick brown fox";
				$second = " jumped over the lazy dog";

				$third = $first;
				$third .= $second;
				echo "{$third} ! {$br}{$br}";
			?>
			    <p><span class="func">Lowercase: </span><?php echo strtolower($third); ?></p>
				<p><span class="func">Uppercase: </span><?php echo strtoupper($third); ?></p>
				<p><span class="func">Uppercase first: </span><?php echo ucfirst($third); ?></p>
				<p><span class="func">Uppercase words: </span><?php echo ucwords($third); ?></p>

				<p><span class="func">Length: </span><?php echo strlen($third); ?></p>
				<p><span class="func">Trim: </span><?php echo "A" . trim(" B C D") . "E"; ?></p>
				<p><span class="func">Find: </span><?php echo strstr($third, "brown"); ?></p>
				<p><span class="func">Replace by string: </span><?php echo str_replace("quick", "super-fast", $third) ?></p>

				<p><span class="func">Repeat: </span><?php echo str_repeat($third, 2); ?></p>
				<p><span class="func">Make substring: </span><?php echo substr($third, 5, 10); ?></p>
				<p><span class="func">Find position: </span><?php echo strpos($third, "brown"); ?></p>
				<p><span class="func">Find character: </span><?php echo strchr($third, "z"); ?></p>
		</div >
		<div>
			<h2>Integers</h2>
			<?php 
				$var2 = 4;
			 ?>

			<p><span class="func">Basic math: </span><?php echo ((1+2 + $var1) * $var2) / 2-5; ?></p>
			<p><span class="func">Absolute value: </span><?php echo abs(0 - 300);?></p>
			<p><span class="func">Exponential: </span><?php echo pow(2, 8);?></p>
			<p><span class="func">Square root: </span><?php echo sqrt(100);?></p>
			<p><span class="func">Modulo: </span><?php echo fmod(20, 7);?></p>
			<p><span class="func">Random: </span><?php echo rand();?></p>
			<p><span class="func">Random (min, max): </span><?php echo rand(1, 10);?></p>

		</div>
		<div>
			<h2>Arrays</h2>
			<p>Usefull func for reading arrays is print_r() , stands for print readable, pre tags are also nice touch.</p>
			<?php 
				$nums = array('4', 23, 26, 85, 53, 89 );
				echo $nums[0] . $br;

				$nums[0] = 13;
				$nums[6] = 100;
				// if we want to append value to end of the array we can leave index value blank when assigning
				$nums[] = 33;
				// shorthand array declaration
				$arr = ['cat', 'dog', 'mice'];
				echo '<pre>';
					echo print_r($nums) . $br;
					echo print_r($arr);
				echo '</pre>';
			 ?>
			 <h3>Associative arrays</h3>
			<ul>
				<li>Is an object-indexed collection of the objects</li>
				<li>key value pairs</li>
				<li>When order is important we should use arrays</li>
				<li>If it isnt we can use objects</li>
				<li>Something like objs from Js but with a bit different syntax</li>
			</ul>
				<?php 
					$assoc = ["first_name" => "Kevin", "last_name" => "Smith"];
					$numbers = [ 0 => 4, 1 => 8, 2 => 16, 3 => 32, 4 => 64, 5 => 128];

					echo $assoc[first_name];
					echo $br;
					echo $numbers[0]; # outputs 4, because 0 is the key, and 4 is the value

					echo "<pre>";
						echo print_r($assoc);
						echo $br;
						echo print_r($numbers);
					echo "</pre>";
				 ?>
		</div>
		<div>
			<h2>Array functions</h2>

			<p><span class="func">Count: </span> <?php echo count($nums);?></p>
			<p><span class="func">Max value: </span> <?php echo max($nums);?></p>
			<p><span class="func">Min value: </span> <?php echo min($nums);?></p>
			<p><span class="func">Sort: </span><pre><?php sort($nums); print_r($nums);?></pre></p>
			<p><span class="func">Reverse sort: </span><pre><?php rsort($nums); print_r($nums);?></pre></p>
			<p><span class="func">Implode: </span><?php echo $num_string = implode(" * ", $nums); ?></p>
			<p><span class="func">Explode: </span><?php print_r(explode(" * ", $num_string)); ?></p>
			<p><span class="func">Is 15 in array? </span><?php echo in_array(15, $nums); // Returns True or False ?></p>
		</div>
		<div>
			<h2>Booleans, null & empty</h2>
			<p>String representation for boolean values, are 1 for true and empty string for false</p>
			<?php 
				$result1 = true;
				$result2 = false;
				$undefined = null;
				$empty = "";
			 ?>
			<p><span class="func">Is boolean? </span><?php echo is_bool($result1); ?></p>
			<p><span class="func">Is null? </span><?php echo is_null($undefined); ?></p>
			<p><span class="func">Is set? </span><?php echo isset($var5); // Nope ?></p>
			<p><span class="func">Is empty? </span><?php echo empty($empty); ?></p>
			<p>Gotcha for empty function is that "0" as variable value is also considered empty! And we should 
				note that this function is also a leading cause of bugs in PHP.</p>
		</div>
		<div>
			<h2>Constants</h2>
			<p>Constants can't be defined in standard way of defining variables in PHP. It can only be defined via 
			function, and once defined cannot be changed or redefined. Also, the best practice is to name constants in all capital letters.</p>
			<?php 
				define("MAX_WIDTH", 980);
				echo MAX_WIDTH;
			 ?>
		</div>
	</div>
</body>
</html>