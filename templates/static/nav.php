<nav class="navbar navbar-inverse">
    <div class="container">
        <div class="navbar-header">
            <label for="navbar-toggle-cbox" class="navbar-toggle collapsed"
                   ng-init="navCollapsed = true"
                   ng-click="navCollapsed = !navCollapsed"
                   aria-controls="navbar">
                <span class="sr-only">Toggle navigation</span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </label>
            <a class="navbar-brand" href="#">Project name</a>
            <div id="navbar" class="collapse navbar-collapse"  ng-class="{'in':!navCollapsed}">
                <ul class="nav navbar-nav navbar-right">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Works</a></li>
                    <li><a href="#">News</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </div>
    </div>
</nav>