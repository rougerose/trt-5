<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

// logs
//define('_LOG_FILELINE',true);
//define('_LOG_FILTRE_GRAVITE', 7);

//$GLOBALS['z_blocs'] = array('content','extra1','extra2','head','head_js','header','footer');
//$GLOBALS['z_blocs'] = array('content','extra1','head','head_js','header','footer');

if (!isset($GLOBALS['z_blocs'])) {
    $GLOBALS['z_blocs'] = array('content','head','head_js','header','footer','breadcrumb');
}

// intertitres
$GLOBALS['debut_intertitre'] = "\n<h2 class='spip'>";
$GLOBALS['fin_intertitre'] = "</h2>\n";

?>