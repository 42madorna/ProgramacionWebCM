<?php
    /*
    ** Full code available at https://github.com/AdornaRuiz/ProgramacionWebCM
    ** Live test available at https://calculatron.adornapps.com
    */
    function send_error($error) {
        $response = array(
            "error" => $error
        );
        header("HTTP/1.1 400 Bad Request");
        echo json_encode($response);
    }

    /*
    ** POST /convert.php?type=time
    ** body as x-www-form-urlencoded:
    **  seconds: value in seconds to convert
    */
    if (isset($_GET["type"]) && $_GET["type"] == "time") {
        if (isset($_POST["seconds"])) {
            if (is_numeric($_POST["seconds"]))
            {
                $time = (int)$_POST["seconds"];
                $response = array(
                    "seconds" => $time,
                    "minutes" => $time / 60,
                    "hours" => $time / 60 /60,
                    "days" => $time / 60 / 60 / 24
                );
                echo json_encode($response);
            } else send_error("You must enter a numeric value in seconds");
        } else send_error("You must enter a value in seconds");
    }

    /*
    ** POST /convert.php?type=circle
    ** body as x-www-form-urlencoded:
    **  radius
    */
    if (isset($_GET["type"]) && $_GET["type"] == "circle") {
        if (isset($_POST["radius"])) {
            if (is_numeric($_POST["radius"])) {
                $radius = (float)$_POST["radius"];
                $response = array(
                    "length" => $radius * M_PI * 2,
                    "area" => M_PI * $radius ** 2
                );
                echo json_encode($response);
            } else sed_error("You must enter a numeric value in radius");
        } else send_error("You must enter a value in radius");
    }

    /*
    ** POST /convert.php?type=triangle
    ** body as x-www-form-urlencoded:
    **  side[1,2,3]
    */
    if (isset($_GET["type"]) && $_GET["type"] == "triangle") {
        if (isset($_POST["side1"]) && isset($_POST["side2"]) && isset($_POST["side3"])) {
            if (is_numeric($_POST["side1"]) && is_numeric($_POST["side2"]) && is_numeric($_POST["side3"])) {
                $sides = array(
                    (float)$_POST["side1"],
                    (float)$_POST["side2"],
                    (float)$_POST["side3"]
                );
                $perimeter = $sides[0] + $sides[1] + $sides[2];
                $sperimeter = $perimeter / 2;
                $min_side = min($sides);
                $max_side = max($sides);
                $med_side = 0;
                $repeated = false;
                if ($min_side != $max_side) {
                    foreach ($sides as $side) {
                        if ($min_side == $side && !$repeated) {
                            $repeated = true;
                            continue ;
                        }
                        if ($max_side == $side && !$repeated) {
                            $repeated = true;
                            continue ;
                        }
                        $med_side = $side;
                        break;
                    }
                } else $med_side = $max_side;
                if ($med_side + $min_side > $max_side)
                {
                    $response = array(
                        "length" => $perimeter,
                        "area" => sqrt($sperimeter
                        * ($sperimeter - (float)$_POST["side1"])
                        * ($sperimeter - (float)$_POST["side2"])
                        * ($sperimeter - (float)$_POST["side3"])
                        )
                    );
                    echo json_encode($response);
                } else send_error("Triangle does not exist");
            } else send_error("All sides must be a numeric value");
        } else send_error("You must enter a value for each triangle side");
    }
?>