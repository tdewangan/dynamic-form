import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Input,
  ViewChild,
  ViewContainerRef,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';
import { DynamicInputComponent } from '../dynamic-field/dynamic-input/dynamic-input.component';
import { DynamicSelectComponent } from '../dynamic-field/dynamic-select/dynamic-select.component';
import { DynamicRadioComponent } from '../dynamic-field/dynamic-radio/dynamic-radio.component';
import { DynamicCheckboxComponent } from '../dynamic-field/dynamic-checkbox/dynamic-checkbox.component';
import { DynamicDatepickerComponent } from './dynamic-datepicker/dynamic-datepicker.component';
import { DynamicTextareaComponent } from './dynamic-textarea/dynamic-textarea.component';

@Component({
  selector: 'app-dynamic-field',
  templateUrl: './dynamic-field.component.html',
  styleUrls: ['./dynamic-field.component.css'],
})
export class DynamicFieldComponent implements AfterViewInit {
  @Input() field;
  formName: FormGroup;
  @ViewChild('dynamicInputContainer', { read: ViewContainerRef })
  dynamicInputContainer!: ViewContainerRef;
  constructor(
    private formgroupDirective: FormGroupDirective,
    private cd: ChangeDetectorRef
  ) {}
  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }

  ngAfterViewInit(): void {
    this.registerDynamicField();
  }

  getComponentByType(type: string): any {
    const componentDynamic = this.supportedDynamicComponents.find(
      (c) => c.name === type
    );
    return componentDynamic.component || DynamicInputComponent;
  }

  private registerDynamicField() {
    const componentInstance = this.getComponentByType(this.field.type);
    const dynamicComponent =
      this.dynamicInputContainer.createComponent(componentInstance);
    dynamicComponent.setInput('field', this.field);
    this.cd.detectChanges();
  }

  supportedDynamicComponents = [
    {
      name: 'text',
      component: DynamicInputComponent,
    },
    {
      name: 'number',
      component: DynamicInputComponent,
    },
    {
      name: 'select',
      component: DynamicSelectComponent,
    },
    {
      name: 'radio',
      component: DynamicRadioComponent,
    },
    {
      name: 'date',
      component: DynamicDatepickerComponent,
    },
    {
      name: 'checkbox',
      component: DynamicCheckboxComponent,
    },
    {
      name: 'textarea',
      component: DynamicTextareaComponent,
    },
  ];
}
