import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivateFn } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home/start.module').then(m => m.StartModule),
  },
  {
    path: '',
    runGuardsAndResolvers: 'always',
    canActivate: [authGuard],
    children: [
      {
        path: 'products',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule),
      },
      {
        path: 'recipes',
        loadChildren: () => import('./recipes/recipes.module').then(m => m.RecipesModule),
      },
    ],
  },
  {
    path: '**',
    loadChildren: () => import('./home/start.module').then(m => m.StartModule),
    pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
