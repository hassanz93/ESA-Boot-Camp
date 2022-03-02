<?php
if (isset($_POST['submit'])) {
    $user = $_POST['username'];
    $pass = $_POST['pass'];
    if (!empty($user) && !empty($pass)) {

        require_once('connect_db.php');

        // $sql = "SELECT roles 
        //         FROM login_table 
        //         WHERE username = '$user' AND pass = '$pass'";
        // $result = $conn->query($sql);

        $stmt = $conn->prepare("SELECT role 
                 FROM login
                 WHERE username = ? AND pass = ?");
        $stmt->bind_param("ss", $user_name, $psw);
        
        // set parameters and execute
        $user_name = trim($user);
        $psw = trim($pass);
        $stmt->execute();
        $result = $stmt->get_result();

        if ($result->num_rows > 0) 
        {
            $row = $result->fetch_assoc();
            session_start();
            $_SESSION["user_name"] = trim($user);
            $_SESSION["role"] = $row['role'];

            if ($row['role']==0)
                header("Location: ./admin/php/admin.php");
            else
                header("Location: ./student/php/student.php");
        } else
            echo "the user name doesn't exist";


        // if ($result->num_rows > 0) 
        // {
        //     $row = $result->fetch_assoc();
        //     session_start();
        //     $_SESSION["user_name"] = trim($user);
        //     $_SESSION["role"] = $row['roles'];

        //     if ($row['roles'] == 1)
        //         header("Location: admin/admin.php");
        //     else
        //         header("Location: user/user.php");
        // } else
        //     echo "the user name doesn't exist";

        $conn->close();
    } else
        echo "please enter the data";
}
