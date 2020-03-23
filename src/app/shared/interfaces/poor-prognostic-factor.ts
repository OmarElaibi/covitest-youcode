export interface PoorPrognosticFactor {
    age: number;
    imc: number; // poids(kg)/taille^2
    heart_disease: boolean;
    diabetes: boolean;
    cancer: boolean;
    breathing_illness: boolean;
    chronic_renal_failure: boolean;
    chronic_liver_disease: boolean;
    pregnancy: boolean;
    immune_system_disease: boolean;
    immunosuppressive_therapy: boolean;
}
