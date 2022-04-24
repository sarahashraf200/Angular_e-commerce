import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './ProductPageComponents/product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ProductDataService } from './product-data.service';

import { ReviewsComponent } from './ProductPageComponents/reviews/reviews.component';
import { AdditionalInfoComponent } from './ProductPageComponents/additional-info/additional-info.component';
import { DescriptionComponent } from './ProductPageComponents/description/description.component';
import { ProductPageComponent } from './ProductPageComponents/product-page/product-page.component';
import { TabsPanelComponent } from './ProductPageComponents/tabs-panel/tabs-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { ReactiveFormsModule } from '@angular/forms';

import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire//compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { HomePageComponent } from './home-page/home-page.component';





@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    ProductDetailsComponent,
    FooterComponent,
    NavbarComponent,
    CarouselComponent,
    ReviewsComponent,
    AdditionalInfoComponent,
    DescriptionComponent,
    ProductPageComponent,
    TabsPanelComponent,
    HomePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFirestoreModule,
    AngularFireModule.initializeApp(environment.firebase),
    
         
  ],
  providers: [ProductDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
