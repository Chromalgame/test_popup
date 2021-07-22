<?php 
function getLogo(){
    $tab_list = Array(
        'fab' => '',
        'far' => '',
        'fas' => '',
    );
    $tab_scandirb = Array();
    $tab_scandirr = Array();
    $tab_scandirs = Array();
    $scandirb = scandir("bibli/fontawesome/svgs/brands");
    $scandirr = scandir("bibli/fontawesome/svgs/regular");
    $scandirs = scandir("bibli/fontawesome/svgs/solid");
    foreach ($scandirb as $fichier) {
        if ($fichier != "." and $fichier != "..") {
            $tab_scandirb[] = substr($fichier, 0, -4);
        }
    }
    foreach ($scandirr as $fichier) {
        if ($fichier != "." and $fichier != "..") {
            $tab_scandirr[] = substr($fichier, 0, -4);
        }
    }
    foreach ($scandirs as $fichier) {
        if ($fichier != "." and $fichier != "..") {
            $tab_scandirs[] = substr($fichier, 0, -4);
        }
    }

    $tab_list['fab'] = $tab_scandirb;
    $tab_list['far'] = $tab_scandirr;
    $tab_list['fas'] = $tab_scandirs;

    
    echo json_encode($tab_list);

}

getLogo();
?>