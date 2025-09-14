import { Component, ElementRef, inject, output, viewChild, ViewChild } from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css'
})
export class NewTicketComponent {

  //@ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  private form = viewChild<ElementRef<HTMLFormElement>>('form');
  add = output<{title: string; text: string}>();

  onSubmit(title: string, ticketText: string) {
    this.add.emit({title: title, text: ticketText});
    this.form()?.nativeElement.reset();
  }
}
