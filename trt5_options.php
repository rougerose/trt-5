<?php
//$GLOBALS['z_blocs'] = array('content','extra1','extra2','head','head_js','header','footer');
//$GLOBALS['z_blocs'] = array('content','extra1','head','head_js','header','footer');

if (!isset($GLOBALS['z_blocs'])) {
    $GLOBALS['z_blocs'] = array('content','head','head_js','header','footer','breadcrumb');
    // var_dump($GLOBALS['z_blocs']);
}

?>