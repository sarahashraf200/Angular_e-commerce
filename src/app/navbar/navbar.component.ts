import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { _getEventTarget } from '@angular/cdk/platform';
import {Router} from '@angular/router';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  name:string="";
  constructor(private route: Router , private auth : AuthService ) { }
  ngOnInit(): void {
  }

  btnClick(e:KeyboardEvent):void {
    if (e.key=='Enter'){
    this.route.navigate([`/search-page/`+this.name]);
  }
  }
}
