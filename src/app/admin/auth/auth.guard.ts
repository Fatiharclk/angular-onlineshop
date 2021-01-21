import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { AuthService } from "src/app/model/auth.service";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private router:Router,private authservice:AuthService){}

    canActivate(route:ActivatedRouteSnapshot, state:RouterStateSnapshot){
        if(!this.authservice.authenticated){
            this.router.navigateByUrl('/admin/auth');
            return false;
        }
        return true;
    }

}