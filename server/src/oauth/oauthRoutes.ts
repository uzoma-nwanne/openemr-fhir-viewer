import { Router } from "express";

const router = Router();

router.get("/authorize", (_req, res) => {
  const baseUrl = process.env.OPENEMR_BASE_URL;
  const clientId = process.env.OPENEMR_CLIENT_ID;
  const redirectUri = process.env.OPENEMR_REDIRECT_URI;

  if (!baseUrl || !clientId || !redirectUri) {
    return res.status(500).json({
      error: "OAuth configuration is incomplete",
    });
  }

  const authorizationUrl = new URL(
    `${baseUrl}/oauth2/default/authorize`,
  );

  authorizationUrl.searchParams.set("response_type", "code");
  authorizationUrl.searchParams.set("client_id", clientId);
  authorizationUrl.searchParams.set("redirect_uri", redirectUri);

  authorizationUrl.searchParams.set(
    "scope",
    "openid fhirUser online_access api:fhir user/Patient.read user/Observation.read user/Condition.read user/Encounter.read",
  );

  return res.redirect(authorizationUrl.toString());
});

export default router;