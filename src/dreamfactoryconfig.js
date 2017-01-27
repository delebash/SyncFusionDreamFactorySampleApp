export default {
  //--------------------------------------------------------------------------
//  DreamFactory 2.0 instance specific constants
//--------------------------------------------------------------------------
  INSTANCE_URL:'https://api.ageektech.com',
  APP_API_KEY: '1fd07b6f9a10b16602189d794db0abe8a44108d8da59a83a9f5ab46d00132692',
  email:'dftester@ageektech.com',
  password: 'test12345',
  api: '/api/v2/',
  db:'northwind/',
  service:'_table/',
  serviceObject:'customers',
  tokenKey: 'token',
  overrideMethod:'?method=GET',
  dataurl: function () {
    return this.INSTANCE_URL + this.api + this.db + this.service + this.serviceObject + this.overrideMethod;
  },
  loginurl: function () {
    return this.INSTANCE_URL + '/api/v2/user/session'
  },
  credentials: function () {
    return {email:this.email, password:this.password}
  }
};
