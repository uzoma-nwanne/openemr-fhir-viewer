import "dotenv/config";

import express from "express";
import cors from "cors";
import oauthRoutes from "./oauth/oauthRoutes.js";


const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api/health", (_req, res) => {
  res.json({
    status: "ok",
    service: "openemr-fhir-viewer-backend",
  });
});

app.use("/oauth", oauthRoutes);
 
app.listen(PORT, () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});