import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderInfoComponent } from '../header-info/header-info.component';
import { IsOpenComponent } from '../is-open/is-open.component';
import { SearchComponent } from '../search/search.component';

@Component({
  selector: 'restaurants-header',
  standalone: true,
  imports: [CommonModule, HeaderInfoComponent, IsOpenComponent, SearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {}
