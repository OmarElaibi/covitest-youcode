import { Injectable } from '@angular/core';
import { Symptoms } from '../interfaces/symptoms';
import { PoorPrognosticFactor } from '../interfaces/poor-prognostic-factor';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor() { }

  calculateMinorSeverityFactor(symptoms: Symptoms) {
    let factor = 0;
    if (symptoms.fever_deg >= 39) { factor++; }
    if (symptoms.tiredness) {factor++; }
    if (symptoms.discomfort) {factor++; }
    return factor;
  }

  calculateMajorSeverityFactor(symptoms: Symptoms) {
    let factor = 0;
    if (symptoms.dyspnea) { factor++; }
    if (symptoms.anorexia) {factor++; }
    if (symptoms.fever_deg <= 35.4) {factor++; }
    return factor;
  }

  calculatePoorPrognosticFactor(ppf: PoorPrognosticFactor) {
    if (ppf.age >= 70 || ppf.imc >= 30 || ppf.pregnancy || ppf.breathing_illness || ppf.cancer || ppf.chronic_liver_disease
        || ppf.chronic_renal_failure || ppf.diabetes || ppf.heart_disease || ppf.immune_system_disease || ppf.immunosuppressive_therapy) {
        return true;
    } else {
      return false;
    }
  }

}
