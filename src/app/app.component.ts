import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TraficComponent } from './dashboard/trafic/trafic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [HeaderComponent, ServerStatusComponent, TraficComponent, TicketsComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  

}
