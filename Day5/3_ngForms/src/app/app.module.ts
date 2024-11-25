import { APP_BOOTSTRAP_LISTENER, ComponentRef, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RootComponent } from './components/root/root.component';
import { TemplateDrivenFormComponent } from './components/template-driven-form/template-driven-form.component';
import { ReactiveFormComponent } from './components/reactive-form/reactive-form.component';
import { ValidationFormComponent } from './components/validation-form/validation-form.component';

@NgModule({
  declarations: [
    RootComponent,
    TemplateDrivenFormComponent,
    ReactiveFormComponent,
    ValidationFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    {
      provide: APP_BOOTSTRAP_LISTENER, multi: true, useFactory: () => {
        return (component: ComponentRef<any>) => {
          console.log(component);
        }
      }
    }
  ],
  bootstrap: [
    RootComponent
  ]
})
export class AppModule { }