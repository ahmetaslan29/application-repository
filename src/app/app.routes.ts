import { Routes, RouterModule } from '@angular/router';
import {AppRepositoryLayoutsComponent} from './app-repository/app-repository-layout.component'
import {FeaturesLayoutComponent} from './features/features-layout.component'

import { TodoComponent } from './app-repository/todo/todo.component';
import { CreditCalculatorComponent } from './app-repository/credit-calculator/credit-calculator.component';

import { DirectiveComponent } from './features/directive.component';

export const routes: Routes = [

  {
    path:'app-repository',
    component: AppRepositoryLayoutsComponent,
    children:[
      { path: 'todo', component: TodoComponent },
      { path: 'credit-calculator', component: CreditCalculatorComponent }
    ]
  },
  {
    path:'features',
    component: FeaturesLayoutComponent,
    children:[
      { path: 'directive', component: DirectiveComponent },
    ]
  },

];



export const AppRoutingModule = RouterModule.forRoot(routes);
