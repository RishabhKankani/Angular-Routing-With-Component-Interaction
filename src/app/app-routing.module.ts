import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstComponentComponent } from './Components/first-component/first-component.component';
import { FourthComponentComponent } from './Components/fourth-component/fourth-component.component';
import { SecondComponentComponent } from './Components/second-component/second-component.component';
import { ThirdComponentComponent } from './Components/third-component/third-component.component';

const routes: Routes = [
  {path: 'first', component: FirstComponentComponent },
  {path: 'second', component: SecondComponentComponent},
  {path: 'third', component: ThirdComponentComponent},
  {path: 'fourth', component: FourthComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [FirstComponentComponent, SecondComponentComponent, ThirdComponentComponent, FourthComponentComponent]
