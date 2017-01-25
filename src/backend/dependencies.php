<?php
// DIC configuration
$container = $app->getContainer();

$db = $container->get('settings')['db'];

$capsule = new Illuminate\Database\Capsule\Manager;
$capsule->addConnection($db);
$capsule->setAsGlobal();
$capsule->bootEloquent();

$container['db'] = function($container) use ($capsule) {
    return $capsule;
};

// view renderer
$container['view'] = function ($container) {
    $view =  new Slim\Views\Twig(__DIR__ . '/../../../templates', [
        'cache' => false,
    ]);

    $view->addExtension(new Slim\Views\TwigExtension(
        $container->router,
        $container->request->getUri()
    ));
    return $view;
};

// monolog
$container['logger'] = function ($c) {
    $settings = $c->get('settings')['logger'];
    $logger = new Monolog\Logger($settings['name']);
    $logger->pushProcessor(new Monolog\Processor\UidProcessor());
    $logger->pushHandler(new Monolog\Handler\StreamHandler($settings['path'], $settings['level']));
    return $logger;
};

$container['HomeController'] = function ($container) {
    return new Src\Backend\Controllers\HomeController($container);
};