import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
})
export class ContactComponent {
  typingStates: { [key: string]: boolean } = {
    userName: false,
    userAge: false,
    userEmail: false,
    userPassword: false,
  };

  showLabel(event: Event, field: string) {
    const inputElement = event.target as HTMLInputElement;
    this.typingStates[field] = inputElement.value.length > 0;
  }
}
