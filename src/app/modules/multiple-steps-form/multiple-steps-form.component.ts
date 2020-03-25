import { Component, OnInit, ViewChild } from '@angular/core';
import { MatStepper } from '@angular/material/stepper';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-multiple-steps-form',
  templateUrl: './multiple-steps-form.component.html',
  styleUrls: ['./multiple-steps-form.component.css']
})
export class MultipleStepsFormComponent implements OnInit {

  totalStepsCount: number;
  progressBarValue;

  // formGroups
  feverFormGroup: FormGroup;
  feverDegreeFormGroup: FormGroup;
  coughFormGroup: FormGroup;
  muscularPainFormGroup: FormGroup;
  soreThroatFormGroup: FormGroup;
  diarrheaFormGroup: FormGroup;
  tirednessFormGroup: FormGroup;
  dyspneaFormGroup: FormGroup; // difficulty of breathing
  anorexiaFormGroup: FormGroup; // fo9dan chahia
  discomfortFormGroup: FormGroup;
  ageFormGroup: FormGroup;
  weightFormGroup: FormGroup;
  heightFormGroup: FormGroup;
  heartDiseaseFormGroup: FormGroup;
  diabetesFormGroup: FormGroup;
  cancerFormGroup: FormGroup;
  breathingIllnessFormGroup: FormGroup;
  chronicRenalFailureFormGroup: FormGroup;
  chronicLiverDiseaseFormGroup: FormGroup;
  pregnancyFormGroup: FormGroup;
  immuneSystemDiseaseFormGroup: FormGroup;
  immunosuppressiveTherapyFormGroup: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.progressBarValue = (1 / 23) * 100;
    this.totalStepsCount = 22;
    this.initializeFormGroups();
  }

  initializeFormGroups() {
    this.feverFormGroup = this.fb.group({
      fever: ['', Validators.required]
    });
    this.feverDegreeFormGroup = this.fb.group({
      feverDegree: ['', Validators.required]
    });
    this.coughFormGroup = this.fb.group({
      cough: ['', Validators.required]
    });
    this.muscularPainFormGroup = this.fb.group({
      muscularPain: ['', Validators.required]
    });
    this.soreThroatFormGroup = this.fb.group({
      soreThroat: ['', Validators.required]
    });
    this.diarrheaFormGroup = this.fb.group({
      diarrhea: ['', Validators.required]
    });
    this.tirednessFormGroup = this.fb.group({
      tiredness: ['', Validators.required]
    });
    this.dyspneaFormGroup = this.fb.group({
      dyspnea: ['', Validators.required]
    });
    this.anorexiaFormGroup = this.fb.group({
      anorexia: ['', Validators.required]
    });
    this.discomfortFormGroup = this.fb.group({
      discomfort: ['', Validators.required]
    });
    this.ageFormGroup = this.fb.group({
      age: ['', Validators.required]
    });
    this.weightFormGroup = this.fb.group({
      weight: ['', Validators.required]
    });
    this.heightFormGroup = this.fb.group({
      height: ['', Validators.required]
    });
    this.heartDiseaseFormGroup = this.fb.group({
      heartDisease: ['', Validators.required]
    });
    this.diabetesFormGroup = this.fb.group({
      diabetes: ['', Validators.required]
    });
    this.cancerFormGroup = this.fb.group({
      cancer: ['', Validators.required]
    });
    this.breathingIllnessFormGroup = this.fb.group({
      breathingIllness: ['', Validators.required]
    });
    this.chronicRenalFailureFormGroup = this.fb.group({
      chronicRenalFailure: ['', Validators.required]
    });
    this.chronicLiverDiseaseFormGroup = this.fb.group({
      chronicLiverDisease: ['', Validators.required]
    });
    this.pregnancyFormGroup = this.fb.group({
      pregnancy: ['', Validators.required]
    });
    this.immuneSystemDiseaseFormGroup = this.fb.group({
      immuneSystemDisease: ['', Validators.required]
    });
    this.immunosuppressiveTherapyFormGroup = this.fb.group({
      immunosuppressiveTherapy: ['', Validators.required]
    });
  }

  goBack(stepper: MatStepper) {
    stepper.previous();
    this.progressBarValue -= (1 / this.totalStepsCount) * 100;
  }

  goForward(stepper: MatStepper) {
    stepper.next();
    this.progressBarValue += (1 / this.totalStepsCount) * 100;
  }

}
