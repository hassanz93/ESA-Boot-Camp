<?php
$sub_name = trim($_POST['sub_name']);
$semester = trim($_POST['semester']);

if (!empty($sub_name) && !empty($semester)) {
    $msg = "";
    require_once('../../connect_db.php');
    $sql = "SELECT name, semester
        FROM subject 
        WHERE name = '$sub_name' 
        AND semester = '$semester'";
        $result = $conn->query($sql);

    if (mysqli_num_rows($result) == 0) {
        $stmt = $conn->prepare("INSERT INTO subject(name, semester) VALUES (?, ?)");
        $stmt->bind_param("si", $sub_name, $semester);

        // set parameters and execute
        $sub_name = $sub_name;
        $semester = $semester;
        if ($stmt->execute()) {
            $msg = "New records created successfully";
            $data = ["name"=>$_POST['sub_name'], "sem"=>$_POST['semester']];

            $sql = "SELECT COUNT(name) AS sub_count FROM subject";
            $result = $conn->query($sql);
            $row = $result->fetch_assoc();
            $data["sub_count"] = $row['sub_count'];
        }
        else $msg = $stmt->error;

        $stmt->close();
        $conn->close();
    } else {
        $msg = "this subject exist";
        $conn->close();
    }
} else
    $msg = "please enter the data";
    $data["ms"] = $msg;
    
echo json_encode($data);
?>