import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { TranslateDirective, TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-formular',
  imports: [FormsModule, TranslatePipe, TranslateDirective, CommonModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})

export class FormularComponent {
privacyPolicyChecked: boolean = false;
sendFormular: boolean = false;
showConfirmation: boolean = false;

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
  if (ngForm.submitted && ngForm.form.valid && !this.mailTest && this.privacyPolicyChecked) {
    this.http.post(this.post.endPoint, this.post.body(this.contactData))
      .subscribe({
        next: (response) => {
          this.privacyPolicyChecked = false;
          ngForm.resetForm();
          this.showConfirmation = true;
          this.sendFormular = false;
        },
        error: (error) => {
          console.error(error);
        },
        complete: () => setTimeout(() => {
          this.showConfirmation = false;
        }, 3000)
      });
  } else if (ngForm.submitted && ngForm.form.valid && this.mailTest) {
    ngForm.resetForm();
    this.sendFormular = false;
    this.privacyPolicyChecked = false;
  }
}

dismissConfirmation() {
  this.showConfirmation = false;
}
  }
