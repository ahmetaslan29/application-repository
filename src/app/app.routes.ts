import { Routes,Route, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';
import { LayoutsComponent } from './layouts/layouts.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children:[
      { path: '', redirectTo: '/todo', pathMatch: 'full' },
      { path: 'todo', component: TodoComponent },
      { path: 'credit-calculator', component: CreditCalculatorComponent }
    ]
  }

];



export const AppRoutingModule = RouterModule.forRoot(routes);
