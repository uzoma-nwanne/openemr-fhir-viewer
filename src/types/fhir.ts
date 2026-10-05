export interface FhirPatient {
  resourceType: "Patient";
  id?: string;
  active?: boolean;
  name?: Array<{
    family?: string;
    given?: string[];
  }>;
  gender?: string;
  birthDate?: string;
}


export interface FhirBundle<T> {
  resourceType: "Bundle";
  type?: string;
  total?: number;
  entry?: Array<{
    resource?: T;
  }>;
}