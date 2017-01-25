<?php

namespace Src\Backend\Controllers;

use Slim\Views\Twig as View;

use Src\Backend\Models\User;

class HomeController extends BaseController
{

    public function index($request, $response)
    {
        $user = User::find(15);

        //$response->write(json_encode($user)); //returns data
        //return $this->view->render($response, 'home.php'); //returns view
    }
}

