import { Injectable } from '@angular/core';
import { ProductDataService } from '../product-data.service';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class ProductResolverResolver implements Resolve<any> {
  constructor(private dataService: ProductDataService) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): any {
    return this.dataService.getSelectedProduct(route.params?.['id'])
  }
}
