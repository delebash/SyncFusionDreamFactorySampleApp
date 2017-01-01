// export class GridRemote {
//   constructor() {
//     this.OrdersList =  ej.DataManager({ // eslint-disable-line new-cap
//       url: 'http://mvc.syncfusion.com/Services/Northwnd.svc/Orders/'
//     });
//   }
// }
import {HttpClient, json} from 'aurelia-fetch-client';
import {Utils} from './utils.js';
import  dreamfactoryconfig from './dreamfactoryconfig'
import {inject} from 'aurelia-framework';
import {sfadaptor} from './syncfusionDreamFactoryAdapter';

let httpClient = new HttpClient();
httpClient.configure(config => {
  config
    .useStandardConfiguration()
});

@inject(HttpClient)

export class GridRemote {
  constructor(http) {
    this.http = http;

    }
  created() {
   this.login()
  }
  login() {
    let that =this;
    this.http.fetch(dreamfactoryconfig.loginurl(), {
      method: "POST",
      body: json(dreamfactoryconfig.credentials())
    })
      .then(response => response.json())
      .then(data => {
        if(data.hasOwnProperty('session_token')) {
          Utils.setToken(dreamfactoryconfig.tokenKey, data.session_token);
          console.log(data);
          that.getdata();
        }
      });
  }

  getdata() {
let adaptor =  new sfadaptor();

    this.OrdersList =  ej.DataManager({ // eslint-disable-line new-cap
      url: dreamfactoryconfig.dataurl,
        adaptor: adaptor.getadaptor(),
    });
console.log('test');
    // this.OrdersList = ej.DataManager(window.gridData).executeLocal(ej.Query().take(8)); // eslint-disable-line new-cap
    // this.page = { pageSize: 4};

  // let token = Utils.getToken(dreamfactoryconfig.tokenKey);
  //
  // // let syncfusionDreamFactoryAdapter = sfdataadapter.getadapter();
  // //   let te = sfdataadapter.test();
  // CustomerList = ej.DataManager({
  //   url: dreamfactoryconfig.dataurl,
  //   adaptor: new test,
  //   headers: [{"X-DreamFactory-API-Key": dreamfactoryconfig.APP_API_KEY, "X-DreamFactory-Session-Token": token}]
  // });
  //
   }
}

// export class GridRemote {
//   constructor() {
//     let that =this;
//     }
//   created(){
//     that.getdata();
//   }
// getdata(){
//   let token = Utils.getToken(dreamfactoryconfig.tokenKey);
//   let syncfusionDreamFactoryAdapter = sfdataadapter.getadapter();
//   CustomerList = ej.DataManager({
//     url: dreamfactoryconfig.dataurl,
//     adaptor: new syncfusionDreamFactoryAdapter,
//     headers: [{"X-DreamFactory-API-Key": dreamfactoryconfig.APP_API_KEY, "X-DreamFactory-Session-Token": token}]
//   });
// }
//
//   login(){
//     let that =this;
//     this.http.fetch(dreamfactoryconfig.loginurl(), {
//       method: "POST",
//       body: json(dreamfactoryconfig.credentials())
//     })
//       .then(response => response.json())
//       .then(data => {
//         if(data.hasOwnProperty('session_token')) {
//           Utils.setToken(dreamfactoryconfig.tokenKey, data.session_token);
//           console.log(data);
//           that.getdata();
//         }
//       });
//   }
// }
