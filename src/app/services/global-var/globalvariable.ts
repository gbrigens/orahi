export class GlobalVariables {
    private static instance: GlobalVariables;
    private webApi:string = "https://orahirestapi.herokuapp.com/";
    private constructor() {}
    static getInstance() {
        if (!GlobalVariables.instance) {
            GlobalVariables.instance = new GlobalVariables();
            // ... any one time initialization goes here ...
        }
        return GlobalVariables.instance;
    }
    getWebApi():string { 
        return this.webApi;
    }
}