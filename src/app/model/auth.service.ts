import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { RestService } from "./rest.service";

@Injectable()
export class AuthService{
    constructor(private restservice:RestService){

    }
    authenticate(username:string,password:string):Observable<boolean>{
        return this.restservice.authentication(username,password);
    }

    get authenticated():boolean{
        return this.restservice.token!=null;
    }
    clear(){
        this.restservice.token=null;
    }
}