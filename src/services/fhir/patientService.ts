import { fhirRequest } from "./client";
import type { FhirBundle, FhirPatient } from "../../types/fhir";

export async function searchPatients(
  searchTerm: string,
): Promise<FhirBundle<FhirPatient>> {
  const params = new URLSearchParams({
    name: searchTerm,
  });

  return fhirRequest<FhirBundle<FhirPatient>>(
    `/Patient?${params.toString()}`,
  );
}