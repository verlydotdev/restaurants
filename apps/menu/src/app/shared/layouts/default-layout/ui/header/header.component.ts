import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderInfoComponent } from '../header-info/header-info.component';
import { IsOpenComponent } from '../is-open/is-open.component';

@Component({
  selector: 'restaurants-header',
  standalone: true,
  imports: [CommonModule, HeaderInfoComponent, IsOpenComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
