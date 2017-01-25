<div ng-controller="dashboardCtrl">
    <div class="container">
        <h1 class="text-center pageTitle">{{pageTitle}}</h1>
        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-success">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Main
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="module-wrap col-md-2" ng-repeat="module in modules.main">
                            <div class="module-container" ng-click="LocationGo(module.url)">
                                <div class="icon">
                                    <i class="{{module.icon}}" aria-hidden="true"></i>
                                </div>
                                <div class="title">
                                    {{module.title}}
                                </div>
                                <div class="second-title" ng-if="module.secondTitle != null">
                                    {{module.secondTitle}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-md-12">
                <div class="panel panel-info">
                    <div class="panel-heading">
                        <h3 class="panel-title">
                            Administration
                        </h3>
                    </div>
                    <div class="panel-body">
                        <div class="module-wrap col-md-2" ng-repeat="module in modules.administration">
                            <div class="module-container">
                                <div class="icon">
                                    <i class="{{module.icon}}" aria-hidden="true"></i>
                                </div>
                                <div class="title">
                                    {{module.title}}
                                </div>
                                <div class="second-title" ng-if="module.secondTitle != null">
                                    {{module.secondTitle}}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>