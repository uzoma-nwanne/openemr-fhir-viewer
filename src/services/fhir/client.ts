const FHIR_BASE_URL = import.meta.env.VITE_FHIR_BASE_URL;

export async function fhirRequest<T>(
  path: string,
): Promise<T> {
  const response = await fetch(`${FHIR_BASE_URL}${path}`, {
    headers: {
      Accept: "application/fhir+json",
    },
  });

  if (!response.ok) {
    throw new Error(
      `FHIR request failed: ${response.status} ${response.statusText}`,
    );
  }

  return response.json() as Promise<T>;
}