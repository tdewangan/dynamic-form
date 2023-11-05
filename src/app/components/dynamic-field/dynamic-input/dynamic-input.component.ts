import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-input',
  templateUrl: './dynamic-input.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicInputComponent implements OnInit {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
