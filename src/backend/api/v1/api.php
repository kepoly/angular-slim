<?php
// Routes

$app->get('/', function ($request, $response, $args) {
    // Sample log message
    // Render index view
    print_r($request);
});

$app->get('/{name}/{test}', function ($request, $response, $args) {
    // Sample log message
    // Render index view
    $route = $request->getAttribute('route');
    $courseId = $route->getArgument('name');
    $courseId1 = $route->getArgument('test');

    print_r($courseId . $courseId1);
});

$app->get('/a/ffff/gg', function ($request, $response, $args) {
    // Sample log message
    //$this->logger->info("Slim-Skeleton '/' route");
    // Render index view
    return $this->view->render($response, 'home.php');
});

$app->get('/a/token/g', function ($request, $response, $args) {
    // Sample log message
    //$this->logger->info("Slim-Skeleton '/' route");
    // Render index view
    return 'token';
});


$app->get('/a/test/g', 'HomeController:index');


