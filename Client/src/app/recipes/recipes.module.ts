import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe/recipe.component';
import { RecipesListComponent } from './recipes-list/recipes-list.component';
import { RecipesRoutingModule } from './recipes-routing.module';

@NgModule({
  declarations: [
    RecipeComponent,
    RecipesListComponent
  ],
  imports: [
    CommonModule,
    RecipesRoutingModule,
  ]
})
export class RecipesModule {
  constructor() {

    console.log('inside RecipesModule');
  }
 }
