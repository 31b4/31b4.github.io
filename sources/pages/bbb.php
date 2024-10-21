<?php
$title = "31b4";
$debugEntityYears = [
    2022 => [
        ["BBB 1st round", "https://debugentity-b3-2022-1st.netlify.app", "https://github.com/31b4/b3_2022_1"],
        ["BBB 2nd round", "https://b3-2022-2nd.netlify.app", "https://github.com/31b4/b3_2022_2"],
        ["BBB 3rd round", "https://b3-2022-3rd.netlify.app", "https://github.com/31b4/b3_2022_3"],
        ["BBB online round", "https://b3-2022-online.netlify.app", "https://github.com/31b4/b3_2022_4"]
    ],
    2021 => [
        ["BBB 1st round", "https://bbb-1st-round.netlify.app", "https://github.com/31b4/b3_2021_1"],
        ["BBB 2nd round", "https://bbb-2nd-round.netlify.app", "https://github.com/31b4/b3_2021_2"],
        ["BBB 3rd round", "https://bbb-3rd-round.netlify.app", "https://github.com/31b4/b3_2021_3"],
        ["BBB online round", "online-round.html", "https://github.com/31b4/b3_2021_4"]
    ]
];
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title><?php echo $title; ?></title>
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'>
    <link rel="stylesheet" href="main.css">
    <link rel="stylesheet" href="stars.css">
    <link rel="icon" 
    type="image/jpg" 
    href="imgs/logo3.png"> 
    
    <style>
        /* Your existing styles here */
    </style>
</head>
<body>
    <nav class="navbar">
        <ul class="nav-list">
            <!-- Your existing navigation items here -->
        </ul>
    </nav>

    <div class="milky-way stars">
        <br><br><br>
        <div class="content">
            <div id="bbb">
                <?php foreach ($debugEntityYears as $year => $rounds): ?>
                    <h1>Debug Entity - <?php echo $year; ?></h1><br>
                    <?php foreach ($rounds as $round): ?>
                        <center>
                            <a href="<?php echo $round[1]; ?>"><?php echo $round[0]; ?></a> - 
                            <a id="source" href="<?php echo $round[2]; ?>">source</a>
                        </center><br>
                    <?php endforeach; ?>
                <?php endforeach; ?>
            </div>        
        </div>
    </div>

    <style>
        body{
            background-color: black;
        }
        h1{
            color: whitesmoke;
            text-align: center;
            font-size: 40px;
        }
        a{
            color: whitesmoke;
            text-align: center;
            font-size: 20px;
            text-decoration: none;
        }
        a:hover{
            text-decoration: underline;
        }
        #bbb{
            margin-top: 5%;
        }
        #source{
            color: rgb(187, 13, 13);
        }
    </style>
</body>
</html>
