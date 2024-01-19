import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavigationCancel, NavigationEnd, NavigationError, NavigationStart, RouterLink, RouterOutlet } from '@angular/router';
import { Router } from '@angular/router';
import { NgxUiLoaderModule, NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, RouterLink, NgxUiLoaderModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app_plantilla';

  constructor(private rout: Router, private ngxService : NgxUiLoaderService){
    this.rout.events.subscribe(event => {
      if(event instanceof NavigationStart) {
        this.ngxService.startBackground("do-background-things");
        this.ngxService.stopBackground("do-background-things");
        this.ngxService.startLoader("loader");
        setTimeout(() => {
          this.ngxService.stopLoader("loader");
        }, 500);
        }
    });
    this.ngxService.startBackground("do-background-things");
    this.ngxService.stopBackground("do-background-things");
  }

}
