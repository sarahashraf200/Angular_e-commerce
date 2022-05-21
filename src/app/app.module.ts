import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DatePipe } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './ProductPageComponents/product-details/product-details.component';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ProductDataService } from './product-data.service';

import { ReviewsComponent } from './ProductPageComponents/reviews/reviews.component';
import { AdditionalInfoComponent } from './ProductPageComponents/additional-info/additional-info.component';
import { DescriptionComponent } from './ProductPageComponents/description/description.component';
import { ProductPageComponent } from './ProductPageComponents/product-page/product-page.component';
import { TabsPanelComponent } from './ProductPageComponents/tabs-panel/tabs-panel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatTabsModule} from '@angular/material/tabs';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { ReactiveFormsModule } from '@angular/forms';
import { AddProductComponent } from './add-product/add-product.component';
import { AngularFireModule} from '@angular/fire/compat'
import { AngularFirestoreModule } from '@angular/fire//compat/firestore';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from 'src/environments/environment';
import { HomePageComponent } from './home-page/home-page.component';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideDatabase,getDatabase } from '@angular/fire/database';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { RegisterComponent } from './register/register.component';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { RelatedProductsComponent } from './ProductPageComponents/related-products/related-products.component';
import { CarouselProductDetailsComponent } from './ProductPageComponents/carousel-product-details/carousel-product-details.component';
import { SearchPageComponent } from './search-page/search-page.component';

import { MatMenuModule } from '@angular/material/menu';
import { HttpClientModule } from '@angular/common/http';
import { HomeCarouselComponent } from './home-page/home-carousel/home-carousel.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CartComponent,
    ProductDetailsComponent,
    FooterComponent,
    NavbarComponent,
    ReviewsComponent,
    AdditionalInfoComponent,
    DescriptionComponent,
    ProductPageComponent,
    TabsPanelComponent,
    HomePageComponent,
    RegisterComponent,
    AddProductComponent,
    RelatedProductsComponent,
    CarouselProductDetailsComponent,
    SearchPageComponent,
    HomeCarouselComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatTabsModule,
    MatMenuModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideAuth(() => getAuth()),
    provideDatabase(() => getDatabase()),
    provideFirestore(() => getFirestore()),
    CarouselModule,
    HttpClientModule,  
    
  ],
  providers: [ProductDataService,DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
