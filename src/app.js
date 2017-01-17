export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'gridlocal',         name: 'gridlocal',        moduleId: 'gridlocal',        nav: true, title: 'Grid Local' },
      { route: 'gridremote',         name: 'gridremote',        moduleId: 'gridremote',        nav: true, title: 'Grid Remote' },
      { route: 'dreamfactorytestconnection', name: 'dreamfactorytestconnection', moduleId: 'dreamfactorytestconnection', nav: true, title: 'Test DreamFactory Connection' }
      ]);
    this.router = router;
  }
}
