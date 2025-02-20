import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-formular',
  imports: [FormsModule],
  templateUrl: './formular.component.html',
  styleUrl: './formular.component.scss'
})

export class FormularComponent {

contactData = {
  name: "",
  email: "",
  message: "",
}

onSubmit(ngForm: NgForm){
  if(ngForm.valid && ngForm.submitted) {
    console.log(this.contactData);
  }
  
}

}
