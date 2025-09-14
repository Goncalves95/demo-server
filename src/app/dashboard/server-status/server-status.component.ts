import { Component, DestroyRef, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit {
    currentStatus: 'online' | 'offline' | 'unknow' = 'online';
    private destroyRef = inject(DestroyRef);

    constructor() {}

    ngOnInit() {
      console.log('ON INIT')
      const interval = setInterval(() => {
        const rnd = Math.random(); // 0 - 0.999999999

        if (rnd < 0.5) {
          this.currentStatus = 'online';
        } else if (rnd < 0.9) {
          this.currentStatus = 'offline';
        } else {
          this.currentStatus = 'unknow';
        }
      }, 5000);

      this.destroyRef.onDestroy(() => {
        clearInterval(interval);
      });
    }

    ngAfterViewInit() {
      console.log('ON AFTER VIEW INIT')
    }

    //ngDestroy() {
    //  clearTimeout(this.interval);
    //}
}
