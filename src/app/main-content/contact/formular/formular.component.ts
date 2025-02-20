import { Component } from '@angular/core';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

@Component({
  selector: 'app-formular',
  imports: [],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})

export class FormularComponent {
  
myForm: ContactForm = {
  name: "",
  email: "",
  message: "",
}

sendEmail() {
  console.log(this.myForm);
}

}
