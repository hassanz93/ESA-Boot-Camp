<?php

    class Subject
    {
        public $name;
        public $semester;
    }

    require_once('../../connect_db.php');
    $sql = "SELECT name, semester FROM subject";
    $result = $conn->query($sql);
    if ($result->num_rows > 0) {
        $data = [];
        // output data of each row
        for($i =0; $row = $result->fetch_assoc(); $i++) {
            $sub = new Subject();
            $sub->name = $row['name'];
            $sub->semester = $row['semester'];
            array_push($data, $sub);
        }
      } else {
        echo "0 results";
      }
      // $data["sub_count"] = $result->num_rows;
    
    echo json_encode($data);
?>
