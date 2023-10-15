import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';

import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';
import { DynamicFieldComponent } from './components/dynamic-field/dynamic-field.component';
import { DynamicRadioComponent } from './components/dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from './components/dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicSelectComponent } from './components/dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicInputComponent } from './components/dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicErrorComponent } from './components/dynamic-field/dynamic-error/dynamic-error.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DynamicDatepickerComponent } from './components/dynamic-field/dynamic-datepicker/dynamic-datepicker.component';
import { DynamicTextareaComponent } from './components/dynamic-field/dynamic-textarea/dynamic-textarea.component';

const MaterialModules = [
  MatToolbarModule,
  MatCheckboxModule,
  MatButtonModule,
  MatSidenavModule,
  MatIconModule,
  MatListModule,
  MatInputModule,
  MatSelectModule,
  MatRadioModule,
  MatCardModule,
  MatTableModule,
  MatPaginatorModule,
  MatSortModule,
  MatProgressSpinnerModule,
  MatDatepickerModule,
  MatNativeDateModule,
];

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
    DynamicDatepickerComponent,
    DynamicTextareaComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ...MaterialModules,
  ],
  providers: [
    {
      provide: MAT_FORM_FIELD_DEFAULT_OPTIONS,
      useValue: { appearance: 'outline' },
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
