import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { HeaderComponent } from './header/header.component'
import { ContentModule } from './content/content.module'


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ContentModule
  ],
  declarations: [
    HomePage,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HomePageModule {}
