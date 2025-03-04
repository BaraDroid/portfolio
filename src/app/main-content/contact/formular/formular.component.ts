import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-formular',
  imports: [FormsModule, TranslatePipe, TranslateDirective],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})

export class FormularComponent {

http = inject(HttpClient);

contactData = {
  name: "",
  email: "",
  message: "",
  checkboxField: "",
}

mailTest = false;

post = {
  endPoint: 'https://barbora-lambeinova.de/sendMail.php',
  body: (payload: any) => JSON.stringify(payload),
  options: {
    headers: {
      'Content-Type': 'text/plain',
      responseType: 'text',
    },
  },
};

onSubmit(ngForm: NgForm) {
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          console.log('response next');
          ngForm.resetForm();
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => console.info('send post complete'),
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
  }
}
  }
