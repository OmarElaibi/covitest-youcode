import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DefaultComponent } from './default.component';
import { HomeComponent } from 'src/app/modules/home/home.component';
import { RouterModule } from '@angular/router';
import { QuizComponent } from 'src/app/modules/quiz/quiz.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { MatStepperModule } from '@angular/material/stepper';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MultipleStepsFormComponent } from 'src/app/modules/multiple-steps-form/multiple-steps-form.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    DefaultComponent,
    HomeComponent,
    QuizComponent,
    MultipleStepsFormComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    SharedModule,
    MatStepperModule,
    MatProgressBarModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class DefaultModule { }
