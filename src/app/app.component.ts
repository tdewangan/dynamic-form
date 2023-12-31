import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  model = {
    firstname: {
      type: 'text',
      value: '',
      label: 'FirstName',
      triggerOn: 'blur',
      rules: {
        required: true,
      },
    },
    lastname: {
      type: 'text',
      value: '',
      label: 'LastName',
    },
    address: {
      type: 'text',
      value: '',
      label: 'Address',
    },
    age: {
      type: 'number',
      value: '',
      label: 'age',
    },
    birthDay: {
      type: 'date',
      value: '',
      label: 'Birthday',
    },
    typeBussines: {
      label: 'Bussines Type',
      value: 'premium',
      type: 'radio',
      options: [
        {
          label: 'Enterprise',
          value: '1500',
        },
        {
          label: 'Home',
          value: '6',
        },
        {
          label: 'Personal',
          value: '1',
        },
      ],
    },
    newsletterIn: {
      label: 'Suscribe to newsletter',
      value: 'email',
      type: 'checkbox',
    },
    suscriptionType: {
      label: 'Suscription Type',
      value: 'premium',
      type: 'select',
      options: [
        {
          label: 'Pick one',
          value: '',
        },
        {
          label: 'Premium',
          value: 'premium',
        },
        {
          label: 'Basic',
          value: 'basic',
        },
      ],
    },
    comment: {
      type: 'textarea',
      value: '',
      label: 'Leave a comment',
    },
  };
}
