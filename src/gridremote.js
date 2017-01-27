import {inject} from 'aurelia-framework';
import {DreamFactoryApi} from './dreamfactory-api'
import {DreamFactoryAdapter} from './syncfusionDreamFactoryAdapter';
import {Utils} from './utils';
import  dreamfactoryconfig from './dreamfactoryconfig'

@inject(DreamFactoryApi)
export class GridRemote {
  constructor(dfapi) {
    this.dfapi = dfapi;
    this.login();
	this.CustomerList;
  }

  login() {
    this.dfapi.login().then(response => {
      if (response.session_id) {
        //We are logged in
        console.log(response)
        this.getdata()
      }
    })
  }

  //Use custom adapter to retrieve data from api and bind to syncfusion grid
  //The problem is I am not able to import and use the custom adapter like I use it in ES5

  getdata() {
    let token = Utils.getToken(dreamfactoryconfig.tokenKey);

    this.CustomerList = ej.DataManager({
      url: "https://api.ageektech.com/api/v2/northwind/_table/customers",
      adaptor: new DreamFactoryAdapter.syncfusionDreamFactoryAdapter,
      headers: [{"X-DreamFactory-API-Key": dreamfactoryconfig.APP_API_KEY, "X-DreamFactory-Session-Token": token}]
    });
  }
}


//We could just use the standard  method without the aurlia syncfusion bridge
//Either way we still need to import the custom adapter and use it in the datamanager

// $("#Grid").ejGrid({
//   dataSource: dataManager,
//   allowPaging: true,
//   allowSorting: true,
//   allowFiltering: true,
//   filterSettings: {showPredicate: true, filterType: "menu", enableCaseSensitivity: true},
//   searchSettings: {ignoreCase: false},
//   // filterSettings: { filterType: "menu" },
//
//   columns: [
//     {field: "first_name", headerText: "First Nmae"},
//     {field: "last_name", headerText: "Last Name"}
//   ]
// });
