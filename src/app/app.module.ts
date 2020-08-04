import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './Frontend/home/home.component';
import { NavigationComponent } from './Frontend/navigation/navigation.component';
import { LoginComponent } from './Frontend/auth/login.component';
import { RegistrationFormComponent } from './Frontend/registration-form/registration-form.component';
import { AboutUsComponent } from './Frontend/about-us/about-us.component';
import { ProgressPageComponent } from './Frontend/progress-page/progress-page.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatTableModule } from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import { from } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';
import { StudentDetailsComponent } from './Frontend/authority/students/student-details/student-details.component';
import { LogoutComponent } from './Frontend/auth/logout/logout.component';
// import { MDBBootstrapModule } from 'angular-bootstrap-md';
// import { mdbCarousel } from '@angular'
import { MatCarouselModule } from '@ngmodule/material-carousel';
import { FlexLayoutModule } from '@angular/flex-layout';
import { StudentDetailAnalyticsComponent } from './Frontend/student-detail-analytics/student-detail-analytics.component';
import { AdDirective } from './ad.directive';
import { AdBannerComponent } from './Frontend/home/ad-banner/ad-banner.component';
import { AdRegistrationComponent } from './Frontend/home/ad-banner/ad-registration.component';
import { AdResultComponent } from './Frontend/home/ad-banner/ad-result.component';
import { AdService } from './Frontend/home/ad-banner/ad.service';
import { DynamicComponentService } from './Frontend/home/ad-banner/dynamic-component.service';
import { MaterialElevationDirective } from './Frontend/home/material-elevation.directive';
import {MatChipsModule} from '@angular/material/chips';
import { ContactComponent } from './Frontend/contact/contact.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
 { path: '', redirectTo: 'home', pathMatch: 'full' },
 { path: 'about-us', component: AboutUsComponent },
 { path: 'registration', component: RegistrationFormComponent },
 { path: 'login', component: LoginComponent },
 { path: 'logout', component: LogoutComponent },
 { path: 'students', component: StudentDetailsComponent },
 { path: 'student-detail-analytics', component: StudentDetailAnalyticsComponent},
 { path: 'contact', component: ContactComponent }
];
@NgModule({
   declarations: [
      AppComponent,
      HomeComponent,
      NavigationComponent,
      AboutUsComponent,
      LoginComponent,
      RegistrationFormComponent,
      ProgressPageComponent,
      StudentDetailsComponent,
      LogoutComponent,
      StudentDetailAnalyticsComponent,
      AdDirective,
      AdBannerComponent,
     AdRegistrationComponent,
     AdResultComponent,
     MaterialElevationDirective,
     ContactComponent
   ],
   imports: [
      BrowserModule,
      BrowserAnimationsModule,
      FormsModule,
      HttpClientModule,
      RouterModule.forRoot(appRoutes),
      MatToolbarModule,
      MatButtonModule,
      MatMenuModule,
      MatFormFieldModule,
      MatInputModule,
      MatCardModule,
      MatSelectModule,
      MatProgressSpinnerModule,
      MatTableModule,
      MatIconModule,
      MatChipsModule,
      MatCarouselModule.forRoot(),
      FlexLayoutModule
   ],
   providers: [AdService, DynamicComponentService],
   bootstrap: [AppComponent],
   entryComponents: [ AdRegistrationComponent, AdResultComponent ]
})
export class AppModule { }
