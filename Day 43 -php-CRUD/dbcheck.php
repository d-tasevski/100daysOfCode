<?php 
	$server 	= 'localhost';
	$username 	= user; // your username
	$pass 		= pass; // your pass
	$db 		= 'menagerie';
	// $conn 		= mysql_connect("localhost", "root", "puritanical", "menagerie", 3306);
	$conn 	= new mysqli($server, $username, $pass, $db, 3306);

	if ($conn ->connect_errno) {
	    echo "Failed to connect to MySQL: (" . $conn ->connect_errno . ") " . $conn ->connect_error;
	}

	echo $conn ->host_info . "\n";
 ?>
<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<title>Document</title>
	<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/css/bootstrap.min.css">
<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta/js/bootstrap.min.js"></script>
</head>
<body>
	<div class="jumbotron">
		<div class="container">
			<h2>Welcome to simple CRUD (PHP & SQL)</h2>
			<h3>Connected to <?php echo $db; ?></h3>
		</div>
	</div>
	<div class="container">
		<?php 
			if(isset($_GET['edit_id'])) { 
			$edit_sql = "SELECT * FROM pet WHERE UID = '$_GET[edit_id]'";
			$run = mysqli_query($conn, $edit_sql);
			while($rows = mysqli_fetch_assoc($run)) {
				$name = $rows['name'];
				$owner = $rows['owner'];
				$species = $rows['species'];
				$sex = $rows['sex'];
			}
		?>
				<h4>Edit pet info</h4>
				<form class="col-md-5" method="post">
					<div class="form-group">
						<label>name</label>
						<input type="text" name="edit_name" class="form-control" value="<?php echo $name; ?>" required>
					</div>
					<div class="form-group">
						<label>Owner</label>
						<input type="text" name="edit_owner" class="form-control" value="<?php echo $owner; ?>" required>
					</div>
					<div class="form-group">
						<label>Species</label>
						<input type="text" name="edit_species" class="form-control" value="<?php echo $species; ?>" required>
					</div>
					<div class="form-group">
						<label for="f">Female</label>
						<input type="radio" name="edit_sex" value="F">
						<label for="m" >Male</label>
						<input type="radio" name="edit_sex" value="M">
					</div>
					<div class="form-group">
						<input type="hidden" name="edit_id" value="<?php echo $_GET[edit_id] ?>">
						<input type="submit" name="edit" class="btn btn-success" value="Update">
						<a href="dbcheck.php" class="btn btn-primary">Cancel</a>
					</div>
				</form>
			<?php 
		} else { ?>
			<h4>Register pet</h4>
			<form class="col-md-5" method="post">
				<div class="form-group">
					<label>name</label>
					<input type="text" name="name" class="form-control" required>
				</div>
				<div class="form-group">
					<label>Owner</label>
					<input type="text" name="owner" class="form-control" required>
				</div>
				<div class="form-group">
					<label>Species</label>
					<input type="text" name="species" class="form-control" required>
				</div>
				<div class="form-group">
					<label for="f">Female</label>
					<input type="radio" name="sex" value="F">
					<label for="m" >Male</label>
					<input type="radio" name="sex" value="M">
				</div>
				<div class="form-group">
					<input type="submit" name="submit" class="btn btn-success">
				</div>
			</form>
		<?php };	
		$sql = "SELECT * FROM pet";
		$run = mysqli_query($conn, $sql);
		echo "
		<table class='table'>
			<thead>
				<tr>
					<th>UID</th>
					<th>Name</th>
					<th>Owner</th>
					<th>Species</th>
					<th>Sex</th>
					<th>Edit</th>
					<th>Delete</th>
				</tr>
			</thead>
			<tbody>";
			while($rows = mysqli_fetch_assoc($run)){
				echo "
					<tr>
						<td>$rows[UID]</td>
						<td>$rows[name]</td>
						<td>$rows[owner]</td>
						<td>$rows[species]</td>
						<td>$rows[sex]</td>
						<td><a href='dbcheck.php?edit_id=$rows[UID]' class='btn btn-warning'>Edit</a></td>
						<td><a href='dbcheck.php?del_id=$rows[UID]' class='btn btn-danger'>Delete</a></td>
					</tr>";
			};
			echo "
				</tbody>
			</table>";
		 ?>
	</div>
</body>
</html>
<?php 
	if(isset($_POST['submit'])){

		$user 		= mysqli_real_escape_string($conn, strip_tags($_POST['name']));
		$owner 		= mysqli_real_escape_string($conn, strip_tags($_POST['owner']));
		$species 	= mysqli_real_escape_string($conn, strip_tags($_POST['species']));
		$sex 		= mysqli_real_escape_string($conn, $_POST['sex']);

		$ins_sql = "INSERT INTO pet (name, owner, species, sex) VALUES ('$user', '$owner', '$species', '$sex')";

		if (mysqli_query($conn, $ins_sql)) { ?>
			<script type="text/javascript"> window.location = "dbcheck.php";</script>
		<?php };
	};
	// deleting user
	if(isset($_GET['del_id'])) {
		$del_sql = "DELETE FROM pet WHERE UID = '$_GET[del_id]'";
		if (mysqli_query($conn, $del_sql)) { ?>
			<script type="text/javascript"> window.location = "dbcheck.php";</script>
		<?php }
	};
	// updating or editing existing user
	if(isset($_POST[edit_id])){
		$edit_name = mysqli_real_escape_string($conn, strip_tags($_POST['edit_name']));
		$edit_owner = mysqli_real_escape_string($conn, strip_tags($_POST['edit_owner']));
		$edit_species = mysqli_real_escape_string($conn, strip_tags($_POST['edit_species']));
		$edit_sex = $_POST['edit_sex'];

		$edit_id = $_POST['edit_id'];
		$update_sql = "UPDATE pet SET name = '$edit_name', owner = '$edit_owner', species = '$edit_species', sex = '$edit_sex' WHERE UID = '$edit_id ";
		$run = mysqli_query($conn, $update_sql);
		if (mysqli_query($conn, $edit_sql)) { ?>
			<script type="text/javascript"> window.location = "dbcheck.php";</script>
	<?php }
	}
	mysqli_close($conn);
 ?>