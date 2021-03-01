import { HomeComponent } from './home/home.component';
import { routing } from './../app.routes';
import { CadastroComponent } from './pessoa/cadastro/cadastro.component';
import { ConsultaComponent } from './pessoa/consulta/consulta.component';
import { MenuComponent } from './menu/menu.component';
import { PessoaService } from './services/pessoa.service';
import { ConfigService } from './services/config.service';
import { BrowserModule } from '@angular/platform-browser';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { from } from 'rxjs';
import { LogInComponent } from './log-in/log-in.component';
import { RegisterComponent } from './register/register.component';

/* Angular material */
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    ConsultaComponent,
    CadastroComponent,
    LogInComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
    MatDialogModule,
    FlexLayoutModule
  ],
  providers: [ConfigService, PessoaService],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
