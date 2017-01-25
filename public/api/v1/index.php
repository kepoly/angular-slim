<?php

if (PHP_SAPI == 'cli-server') {
    // To help the built-in PHP dev server, check if the request was actually for
    // something which should probably be served as a static file
    $url  = parse_url($_SERVER['REQUEST_URI']);
    $file = __DIR__ . $url['path'];
    if (is_file($file)) {
        return false;
    }
}

$loader = require __DIR__ . '/../../../vendor/autoload.php';

session_start();

// Instantiate the app
$settings = require __DIR__ . '/../../../src/backend/settings.php';
$app = new \Slim\App($settings);

$app->add(new \Slim\Middleware\JwtAuthentication([
    "path" => "/src",
    "environment" => "HTTP_X_TOKEN",
    "header" => "X-Token",
    "cookie" => "cook",
    "secret" => "thisisjustasuperduperstupidkey"
]));

// Set up dependencies
require __DIR__ . '/../../../src/backend/dependencies.php';

// Register middleware
require __DIR__ . '/../../../src/backend/middleware.php';

// Register routes
require __DIR__ . '/../../../src/backend/api/v1/api.php';

// Run app
$app->run();