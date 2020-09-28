import { Route } from '@angular/router';
import { OopsComponent } from '../oops/oops.component';
import { TumbleComponent } from './tumble/tumble.component';
import { ExercisesComponent } from './exercises/exercises.component';
import { HopHopComponent } from './hop-hop/hop-hop.component';
import { JumpingJackComponent } from './jumping-jack/jumping-jack.component';
import { MoveHandsComponent } from './move-hands/move-hands.component';
import { RunComponent } from './run/run.component';
import { SomersaultComponent } from './somersault/somersault.component';
import { SwimComponent } from './swim/swim.component';
import { VolleyballComponent } from './volleyball/volleyball.component';
import { SquashComponent } from './squash/squash.component';
import { SkippingRopeComponent } from './skipping-rope/skipping-rope.component';


export const appRoutes: Route[] = [
    {path: '', component: ExercisesComponent},
    {path: 'tumble', component: TumbleComponent},
    {path: 'somersault', component: SomersaultComponent},
    {path: 'run', component: RunComponent},
    {path: 'jumpingJack', component: JumpingJackComponent},
    {path: 'hopHop', component: HopHopComponent},
    {path: 'moveHands', component: MoveHandsComponent},
    {path: 'swim', component: SwimComponent},
    {path: 'volleyball', component: VolleyballComponent},
    {path: 'squash', component: SquashComponent},
    {path: 'skippingrope', component: SkippingRopeComponent},
    { path: '**', component: OopsComponent }
]