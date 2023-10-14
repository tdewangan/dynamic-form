import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicRadioComponent } from './components/dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from './components/dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicSelectComponent } from './components/dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicInputComponent } from './components/dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicErrorComponent } from './components/dynamic-field/dynamic-error/dynamic-error.component';

@NgModule({
  declarations: [
    AppComponent,
    DynamicFormComponent,
    DynamicFieldComponent,
    DynamicRadioComponent,
    DynamicCheckboxComponent,
    DynamicSelectComponent,
    DynamicInputComponent,
    DynamicErrorComponent,
  ],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
