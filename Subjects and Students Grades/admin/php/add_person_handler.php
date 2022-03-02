<?php
if (isset($_POST['add_person'])) {
    $first_name = trim($_POST['first_name']);
    $last_name = trim($_POST['last_name']);
    $address = trim($_POST['address']);
    $phone_number = trim($_POST['phone_number']);
    $mail = trim($_POST['mail']);

    $admin_or_student = $_POST['admin_or_student'];
    $specification = $_POST['specification'];
    $user_name = $_POST['user_name'];
    $pass = $_POST['pass'];

    // echo $first_name .'<br>';
    // echo $last_name .'<br>';
    // echo $address .'<br>';
    // echo $phone_number .'<br>';
    // echo $mail .'<br>';
    // echo $admin_or_student .'<br>';
    // echo $specification .'<br>';
    // echo $user_name .'<br>';
    // echo $pass .'<br>';

    if (!empty($first_name) && !empty($last_name) && !empty($address) && !empty($phone_number)) {

        require_once('../../connect_db.php');

        $sql = "SELECT *
                FROM person 
                WHERE first_name = '$first_name' 
                AND last_name = '$last_name'
                AND address = '$address'
                AND phone = '$phone_number'
                AND mail = '$mail'";
        $result = $conn->query($sql);
        if (mysqli_num_rows($result) == 0) {
            $stmt = $conn->prepare("INSERT INTO person(first_name, last_name, address, phone, mail) VALUES (?,?,?,?,?)");
            $stmt->bind_param("sssss", $ali, $last_name, $address, $phone_number, $mail);

            // set parameters and execute
            $ali = $first_name;
            $last_name = $last_name;
            $address = $address;
            $phone_number = $phone_number;
            $mail = $mail;
            // $stmt->execute();
            if ($stmt->execute()) {
                echo "New records created successfully";
                $last_id = $conn->insert_id;
            } else echo $stmt->error;
            $stmt->close();

            $stmt = $conn->prepare("INSERT INTO login(id_person, username, pass, role) VALUES (?, ?, ?, ?)");
            $stmt->bind_param("issi", $id_person, $username, $pass, $role);

            // set parameters and execute
            $id_person = $last_id;
            $username = $username;
            $pass = md5($pass);
            if ($admin_or_student == "admin")
                $role = 0;
            else if ($admin_or_student == "student")
                $role = 1;
            $stmt->execute();
            // if ($stmt->execute())
            //     echo "New records created successfully";
            // else echo $stmt->error;
            $stmt->close();

            $conn->close();
        } else {
            echo "this person exist";
            $conn->close();
        }
    } else
        echo "please enter the data";
    header("Location: ./admin.php");
}
