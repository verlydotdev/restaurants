import { Route } from '@angular/router';
import { DefaultLayoutComponent } from './shared/layouts/default-layout/default-layout.component';

export const routes: Route[] = [
  {
    path: '',
    component: DefaultLayoutComponent,
    children: [
      { path: '', redirectTo: 'featured', pathMatch: 'full' },
      {
        path: 'featured',
        loadChildren: () =>
          import(
            './featured/features/featured-shell/featured-shell.module'
          ).then((m) => m.FeaturedShellModule),
      },
    ],
  },
];
