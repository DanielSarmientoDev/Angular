import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExponentialPipe } from './pipes/exponential/exponential.pipe';
import { HighlightDirective } from './directives/highlight/highlight.directive';
import { BannerComponent } from './components/banner/banner.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';

import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { MatBadgeModule } from '@angular/material/badge';
import { MatIconModule } from '@angular/material/icon';
@NgModule({
  declarations: [
    ExponentialPipe,
    BannerComponent,
    HighlightDirective,
    FooterComponent,
  ],
  exports: [
    ExponentialPipe,
    HighlightDirective,
    BannerComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MaterialModule,
    MatIconModule,
    MatBadgeModule,
  ],
})
export class SharedModule {}
