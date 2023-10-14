import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.css'],
})
export class DynamicFormComponent implements OnInit {
  dynamicFormGroup: FormGroup;
  @Input() model: {};
  fields = [];

  ngOnInit() {
    this.buildForm();
    this.dynamicFormGroup.controls['firstname'].valueChanges.subscribe((v) => {
      console.log(v);
    });
  }
  buildForm() {
    const formGroupFields = this.getFormControlsFields();
    this.dynamicFormGroup = new FormGroup(formGroupFields);
  }

  getFormControlsFields() {
    const formGroupFields = {};
    for (const field of Object.keys(this.model)) {
      const fieldProps = this.model[field];
      const validators = this.addValidator(fieldProps.rules);
      formGroupFields[field] = new FormControl(fieldProps.value, {
        updateOn: fieldProps.triggerOn || 'change',
        validators,
      });
      this.fields.push({ ...fieldProps, fieldName: field });
    }
    return formGroupFields;
  }
  private addValidator(rules) {
    if (!rules) {
      return [];
    }

    const validators = Object.keys(rules).map((rule) => {
      switch (rule) {
        case 'required':
          return Validators.required;
        //add more cases for the future.
        default:
          return null;
      }
    });
    return validators;
  }
}
