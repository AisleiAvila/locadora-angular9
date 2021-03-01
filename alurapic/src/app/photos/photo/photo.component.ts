import { environment } from './../../../environments/environment';
import { PhotoService } from './photo.service';
import { Component, Input } from '@angular/core';
import { FormBuilder } from '@angular/forms';

const CLOUD = environment.ApiUrl + '/imgs/';

@Component({
    selector: 'app-photo',
    templateUrl: 'photo.component.html'
})
export class PhotoComponent {

    /*

    constructor(
        private formBuilder: FormBuilder,
        private photoService: PhotoService
    ) {  }

    */

    private _url = '';

    @Input() description = '';

    @Input() set url(url: string) {
        if (!url.startsWith('data')) {
            this._url = CLOUD + url;
        } else {
            this._url = url;
        }
    }

    get url() {
        return this._url;
    }
}
