import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { QuizComponent } from 'src/app/modules/quiz/quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    QuizComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatStepperModule
  ]
})
export class DefaultModule { }
