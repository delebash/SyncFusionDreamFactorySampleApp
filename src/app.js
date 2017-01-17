export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'gridlocal',         name: 'gridlocal',        moduleId: 'gridlocal',        nav: true, title: 'Grid Local' },
      { route: 'gridremote',         name: 'gridremote',        moduleId: 'gridremote',        nav: true, title: 'Grid Remote' },
      { route: 'testconnection', name: 'testconnection', moduleId: 'testconnection', nav: true, title: 'Test Database Connection' }
      ]);
    this.router = router;
  }
}
