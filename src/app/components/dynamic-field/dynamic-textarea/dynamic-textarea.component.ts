import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-dynamic-textarea',
  templateUrl: './dynamic-textarea.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DynamicTextareaComponent {
  @Input() field: any;
  formName: FormGroup;

  constructor(private formgroupDirective: FormGroupDirective) {}

  ngOnInit() {
    this.formName = this.formgroupDirective.control;
  }
}
