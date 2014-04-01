<?php

if (!defined('_ECRIRE_INC_VERSION')) return;

//$GLOBALS['z_blocs'] = array('content','extra1','extra2','head','head_js','header','footer');
//$GLOBALS['z_blocs'] = array('content','extra1','head','head_js','header','footer');

if (!isset($GLOBALS['z_blocs'])) {
    $GLOBALS['z_blocs'] = array('content','head','head_js','header','footer','breadcrumb');
}

// intertitres
$GLOBALS['debut_intertitre'] = "\n<h2 class='spip'>";
$GLOBALS['fin_intertitre'] = "</h2>\n";

?>