import { BrowserModule } from '@angular/platform-browser';
import { NgModule,  } from '@angular/core';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { FormsModule } from '@angular/forms';
import { UserformComponent } from './userform/userform.component';
import { FieldComponent } from './field/field.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    UserformComponent,
    FieldComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
