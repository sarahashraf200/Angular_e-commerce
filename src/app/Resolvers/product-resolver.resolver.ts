import { Injectable } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<boolean> {
  constructor(private dataService: ProductDataService){

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> { 
    return this.dataService.productInfo;
  }
}
