import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ClarityIcons, homeIcon } from '@cds/core/icon';

import '@cds/core/icon/register.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-cli';
  workaround = false;

  form = new FormGroup(
    {
      name: new FormControl('Name'),
      cb: new FormControl(false),
      radios: new FormControl('1'),
    },
    {
      updateOn: 'blur',
    }
  );

  constructor() {
    ClarityIcons.addIcons(homeIcon);
  }

  onClick(e: any) {
    if (this.workaround) {
      e.target.focus();
    }
  }

  onSubmit() {
    console.log('form submit', this.form.value);
  }
}
