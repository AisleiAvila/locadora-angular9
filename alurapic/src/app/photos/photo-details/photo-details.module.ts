import { VMessageModule } from './../../shared/components/vmessage/vmessage.module';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { PhotoCommentsComponent } from './photo-comments/photo-comments.component';
import { PhotoDetailsComponent } from './photo-details.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { PhotoModule } from '../photo/photo.module';
import { PhotoOwnerOnlyDirective } from './photo-owner-only/photo-owner-only.directive';
import { ShowIfLoggedModule } from 'src/app/shared/directives/show-if-logged/show-if-logged.module';

@NgModule({
    declarations: [PhotoDetailsComponent,
                   PhotoCommentsComponent,
                   PhotoOwnerOnlyDirective
    ],
    exports: [PhotoDetailsComponent,
              PhotoCommentsComponent
    ],
    imports: [CommonModule,
              PhotoModule,
              RouterModule,
              ReactiveFormsModule,
              VMessageModule,
              ShowIfLoggedModule
    ]
})
export class PhotoDetailsModule { }
