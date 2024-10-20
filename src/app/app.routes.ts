import { Route, RouterModule } from '@angular/router';
import { TodoComponent } from './todo/todo.component';
import { CreditCalculatorComponent } from './credit-calculator/credit-calculator.component';

export const routes: Route[] = [
  { path: '', redirectTo: '/todo', pathMatch: 'full' },
  { path: 'todo', component: TodoComponent },
  { path: 'credit-calculator', component: CreditCalculatorComponent }
];

export const AppRoutingModule = RouterModule.forRoot(routes);
