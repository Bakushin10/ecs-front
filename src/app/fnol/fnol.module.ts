import { FnolRoutingModule } from './fnol-routing.module';
import { NgModule } from '@angular/core';
import { AssetUrlPipe } from '../shared/asset-url-pipe';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FnolComponent } from './fnol.component';
import { CommonModule } from '@angular/common';
import { HttpService } from './service/http.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [FnolComponent, AssetUrlPipe],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    FnolRoutingModule,
    HttpClientModule,
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
  ],
  exports: [
    MatCardModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatButtonModule,
  ],
  providers: [{ provide: HttpService, useClass: HttpService }],
})
export class FnolModule {}
