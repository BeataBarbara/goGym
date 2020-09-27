import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { OopsComponent } from '../oops/oops.component';
import { TumbleComponent } from '../tumble/tumble.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';
import { CommonModule } from '@angular/common';
import { ExercisesComponent } from './exercises/exercises.component';
import { SomersaultComponent } from './somersault/somersault.component';
import { JumpingJackComponent } from './jumping-jack/jumping-jack.component';
import { HopHopComponent } from './hop-hop/hop-hop.component';
import { MoveHandsComponent } from './move-hands/move-hands.component';
import { RunComponent } from './run/run.component';

@NgModule({
  declarations: [
    AppComponent,
    OopsComponent,
    TumbleComponent,
    ExercisesComponent,
    SomersaultComponent,
    JumpingJackComponent,
    HopHopComponent,
    MoveHandsComponent,
    RunComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
