import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { ServerStatusComponent } from './dashboard/server-status/server-status.component';
import { TraficComponent } from './dashboard/trafic/trafic.component';
import { TicketsComponent } from './dashboard/tickets/tickets.component';
import { DashboardItemComponent } from './dashboard/dashboard-item/dashboard-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports : [HeaderComponent, ServerStatusComponent, TraficComponent, TicketsComponent, DashboardItemComponent],
  templateUrl: './app.component.html',
})
export class AppComponent {
  

}
