import { ImmediateClickModule } from './../../shared/directives/immediate-click/immediate-click-module';
import { RouterModule } from '@angular/router';
import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { PhotoFormComponent } from './photo-form.component';
import { CommonModule } from '@angular/common';
import { PhotoModule } from '../photo/photo.module';

@NgModule({
    declarations: [PhotoFormComponent],
    imports: [ CommonModule,
               ReactiveFormsModule,
               VMessageModule,
               FormsModule,
               RouterModule,
               PhotoModule,
               ImmediateClickModule
             ]
})
export class PhotoFormModule { }
