import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { CanActivateRouteGuard } from './services/auth-guard.service';
import { RowersComponent } from './rowers/rowers.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  {
    path: 'workout',
    component: WorkoutComponent,
    canActivate: [CanActivateRouteGuard]
  },
  {
    path: 'rowers',
    component: RowersComponent,
    canActivate: [CanActivateRouteGuard]
  },
  { path: '**', pathMatch: 'full', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
