import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-datepicker',
  templateUrl: './dynamic-datepicker.component.html',
  styleUrls: ['./dynamic-datepicker.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicDatepickerComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
