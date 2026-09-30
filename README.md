# OpenEMR FHIR Patient Viewer

A standalone React + TypeScript application for learning and
demonstrating integration with the **OpenEMR FHIR API** using **SMART on
FHIR / OAuth 2.0**.

> **Project status:** Early development / learning project\
> **Current milestone:** React + Vite + TypeScript project scaffold
> created and running locally\
> **Target OpenEMR environment:** OpenEMR 7.0.3 (local development
> instance)

------------------------------------------------------------------------

## Table of Contents

-   [Overview](#overview)
-   [Purpose](#purpose)
-   [Project Goals](#project-goals)
-   [Planned Features](#planned-features)
-   [Current Status](#current-status)
-   [Technology Stack](#technology-stack)
-   [Architecture](#architecture)
-   [Prerequisites](#prerequisites)
-   [Installation](#installation)
-   [Running the Application](#running-the-application)
-   [Environment Configuration](#environment-configuration)
-   [OpenEMR Configuration](#openemr-configuration)
-   [FHIR Integration](#fhir-integration)
-   [SMART on FHIR / OAuth Flow](#smart-on-fhir--oauth-flow)
-   [Application Structure](#application-structure)
-   [Development Workflow](#development-workflow)
-   [Testing Strategy](#testing-strategy)
-   [Security Considerations](#security-considerations)
-   [Error Handling](#error-handling)
-   [Data and Privacy](#data-and-privacy)
-   [Roadmap](#roadmap)
-   [Troubleshooting](#troubleshooting)
-   [Contributing](#contributing)
-   [License](#license)
-   [References](#references)

------------------------------------------------------------------------

## Overview

**OpenEMR FHIR Patient Viewer** is a small standalone client application
that connects to an OpenEMR installation through its standards-based
FHIR API.

The project is intentionally being developed as a focused learning and
integration application rather than as another electronic health record
system.

The application will demonstrate how an external client can:

1.  Authenticate and authorize against OpenEMR.
2.  Obtain an OAuth access token with appropriate scopes.
3.  Access FHIR resources exposed by OpenEMR.
4.  Search for and select patients.
5.  Present patient demographics and clinical information.
6.  Handle FHIR references, bundles, pagination, missing data, and API
    errors.
7.  Evolve toward SMART on FHIR application-launch capabilities.

The application is designed to interact with OpenEMR through its APIs
rather than directly accessing the OpenEMR database.

------------------------------------------------------------------------

## Purpose

The primary purpose of this project is to provide a practical
environment for learning and demonstrating **OpenEMR interoperability**,
particularly:

-   FHIR
-   SMART on FHIR
-   OAuth 2.0
-   FHIR resource querying
-   FHIR search parameters
-   API authentication and authorization
-   TypeScript API clients
-   React application architecture
-   Healthcare interoperability concepts

The project is also intended to become a reusable reference
implementation for future OpenEMR integration work.

### Learning philosophy

The project follows a feature-driven approach to FHIR.

Rather than studying every FHIR resource in isolation, resources will be
introduced when they are required by an application feature.

For example:

-   Patient data is introduced when building patient selection.
-   Observation data is introduced when building the clinical summary.
-   Condition data is introduced when displaying diagnoses.
-   Encounter data is introduced when displaying visit history.
-   Additional resources are introduced only when a future feature
    requires them.

This keeps the learning process practical and aligned with real
integration work.

------------------------------------------------------------------------

## Project Goals

### Primary goals

-   Build a working standalone FHIR client for OpenEMR.
-   Implement SMART/OAuth authorization.
-   Retrieve FHIR resources from OpenEMR.
-   Build a reusable FHIR API service layer.
-   Demonstrate patient-centric clinical data retrieval.
-   Practice handling real FHIR Bundles and resource references.
-   Establish sound TypeScript and React application structure.

### Secondary goals

-   Provide a portfolio-quality OpenEMR interoperability project.
-   Create a foundation for future SMART on FHIR applications.
-   Develop practical knowledge useful for OpenEMR consulting and
    integration projects.
-   Document lessons learned during implementation.

------------------------------------------------------------------------

## Planned Features

Features below represent the intended application scope. A feature is
marked as complete only after it has been implemented and tested.

### Core MVP

#### 1. Standalone SMART/OAuth authentication

-   Redirect the user to OpenEMR for authorization.
-   Receive the OAuth authorization response.
-   Exchange authorization information for an access token.
-   Maintain an authenticated application session.
-   Handle authorization failures.
-   Handle missing or insufficient FHIR scopes.
-   Implement logout/session cleanup.

#### 2. Patient search and selection

-   Search for patients using supported FHIR search parameters.
-   Display matching patients.
-   Select a patient.
-   Retrieve the selected patient's FHIR `Patient` resource.
-   Display basic demographics.

#### 3. Patient clinical summary

The initial clinical summary is expected to include:

-   Patient demographics
-   Observations
-   Vital signs where available
-   Conditions
-   Encounters

The UI will distinguish between:

-   Available clinical values
-   Missing values
-   Unknown values
-   Empty results
-   API errors

#### 4. FHIR API service layer

The application will contain a reusable API layer responsible for:

-   Constructing FHIR requests
-   Adding authorization headers
-   Parsing FHIR responses
-   Handling FHIR Bundles
-   Handling HTTP errors
-   Handling authentication failures
-   Supporting FHIR search parameters
-   Supporting pagination where applicable

------------------------------------------------------------------------

### Future Features

Potential future capabilities include:

-   Medication information
-   Laboratory results
-   Detailed encounter views
-   Patient timeline
-   SMART EHR launch
-   OpenEMR launch-context handling
-   Patient-context-aware applications
-   Additional FHIR resource support
-   Read/write FHIR operations where appropriate
-   Automated API tests
-   End-to-end testing
-   Production deployment

These are intentionally deferred until the core read-only workflow is
stable.

------------------------------------------------------------------------

## Current Status

### Completed

-   [x] Node.js development environment verified
-   [x] Vite project created
-   [x] React + TypeScript configured through the Vite starter
-   [x] Development server running successfully
-   [x] Local application accessible in the browser
-   [x] OpenEMR FHIR API explored using Postman
-   [x] OpenEMR SMART/OAuth client registration workflow explored
-   [x] OAuth token generation tested
-   [x] Patient FHIR endpoint tested
-   [x] Encounter FHIR endpoint tested
-   [x] Observation FHIR endpoint tested
-   [x] FHIR Bundle structure and resource references studied

### In progress

-   [ ] Replace Vite starter UI
-   [ ] Establish application component structure
-   [ ] Create FHIR service layer
-   [ ] Configure application environment
-   [ ] Implement SMART/OAuth authorization
-   [ ] Register the application's dedicated OpenEMR client
-   [ ] Implement patient search
-   [ ] Implement patient dashboard
-   [ ] Add clinical summary features
-   [ ] Add automated tests

------------------------------------------------------------------------

## Technology Stack

### Frontend

-   **React**
-   **TypeScript**
-   **Vite**
-   HTML5
-   CSS

### Backend / interoperability target

-   **OpenEMR 7.0.3**
-   OpenEMR FHIR API
-   SMART on FHIR
-   OAuth 2.0

### Development environment

-   Node.js 22.x
-   npm 10.x
-   Windows
-   Local OpenEMR/XAMPP development environment

The project deliberately does not introduce a separate backend or
database at the initial stage.

------------------------------------------------------------------------

## Architecture

The initial architecture is intentionally simple:

``` text
┌──────────────────────────────────────────┐
│        OpenEMR FHIR Patient Viewer       │
│                                          │
│  React + TypeScript + Vite               │
│                                          │
│  ┌────────────┐     ┌─────────────────┐  │
│  │ React UI   │────▶│ FHIR API Layer  │  │
│  └────────────┘     └────────┬────────┘  │
│                              │           │
│                     OAuth Access Token   │
└──────────────────────────────┼───────────┘
                               │
                               ▼
                  ┌────────────────────────┐
                  │       OpenEMR          │
                  │                        │
                  │  SMART/OAuth Server    │
                  │  FHIR API              │
                  └────────────────────────┘
```

### Important architectural principle

The application should communicate with OpenEMR through the supported
API interfaces.

It should **not** connect directly to the OpenEMR MySQL database to
retrieve clinical information.

This keeps the application aligned with interoperability standards and
separates the external application from OpenEMR's internal database
implementation.

------------------------------------------------------------------------

## Prerequisites

Before working with the project, install:

-   Node.js 22.x or another version supported by the project's current
    Vite/React dependencies
-   npm
-   Git
-   A modern web browser
-   A running OpenEMR development instance with FHIR enabled

For the current learning environment, OpenEMR is running locally through
XAMPP.

Example OpenEMR URL:

``` text
https://localhost/openemr
```

The exact URL depends on the local OpenEMR installation.

------------------------------------------------------------------------

## Installation

Clone the repository:

``` bash
git clone <repository-url>
cd openemr-fhir-viewer
```

Install dependencies:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

Vite will display the local development URL, normally similar to:

``` text
http://localhost:5173/
```

Open the displayed URL in a browser.

------------------------------------------------------------------------

## Running the Application

### Development

``` bash
npm run dev
```

### Production build

``` bash
npm run build
```

### Preview the production build

``` bash
npm run preview
```

### Linting

If the project's lint configuration provides the standard script:

``` bash
npm run lint
```

Available scripts should always be checked in `package.json`, because
the Vite starter and future project configuration may evolve.

------------------------------------------------------------------------

## Environment Configuration

Environment-specific values should not be hard-coded into application
source code.

For Vite applications, environment variables intended for client-side
use normally use the `VITE_` prefix.

A future development environment may contain values such as:

``` env
VITE_OPENEMR_BASE_URL=https://localhost/openemr
VITE_FHIR_BASE_URL=https://localhost/openemr/apis/default/fhir
VITE_OAUTH_AUTHORIZE_URL=https://localhost/openemr/oauth2/default/authorize
VITE_OAUTH_TOKEN_URL=https://localhost/openemr/oauth2/default/token
VITE_OAUTH_REDIRECT_URI=http://localhost:5173/oauth/callback
```

These values are examples for the local learning environment and should
be adjusted to match the actual OpenEMR installation and OAuth client
configuration.

### Important

Do **not** put confidential client secrets in Vite environment variables
intended for browser code.

Anything exposed through a `VITE_*` variable can become part of the
client-side application bundle.

A public browser client should therefore use an appropriate OAuth flow
such as Authorization Code with PKCE where supported and appropriate.

------------------------------------------------------------------------

## OpenEMR Configuration

The application requires an OpenEMR installation configured to expose
the required FHIR and SMART/OAuth capabilities.

The development environment currently uses:

``` text
OpenEMR: 7.0.3
FHIR API: Enabled
SMART/OAuth: Enabled
```

The application will require an OpenEMR API client registration.

The client configuration should eventually contain:

-   Application/client name
-   Redirect URI
-   Appropriate client type
-   Required scopes
-   Appropriate SMART/OAuth settings

Client registration should be performed through the OpenEMR
administration interface rather than by manually modifying OpenEMR
database records.

### Scope principle

Only request scopes required by the application's actual features.

For example, a read-only patient viewer may require patient-scoped read
permissions for resources such as:

``` text
Patient
Observation
Condition
Encounter
```

The exact scope configuration depends on the OpenEMR SMART/FHIR
implementation and the application's launch model.

------------------------------------------------------------------------

## FHIR Integration

The application will communicate with OpenEMR through FHIR endpoints.

Examples from the development environment include:

``` text
GET /apis/default/fhir/Patient
GET /apis/default/fhir/Patient/{id}
GET /apis/default/fhir/Observation
GET /apis/default/fhir/Condition
GET /apis/default/fhir/Encounter
```

The application's actual FHIR base URL should come from configuration
rather than being hard-coded throughout the codebase.

### FHIR resources

The initial application focuses on:

  Resource        Initial purpose
  --------------- ---------------------------------------
  `Patient`       Demographics and patient selection
  `Observation`   Vital signs and clinical measurements
  `Condition`     Patient conditions/diagnoses
  `Encounter`     Visit/encounter history

Additional resources will be introduced when application requirements
justify them.

### FHIR Bundles

FHIR search requests commonly return a `Bundle`.

The application therefore needs to understand structures such as:

``` json
{
  "resourceType": "Bundle",
  "type": "searchset",
  "total": 10,
  "entry": [
    {
      "resource": {
        "resourceType": "Patient"
      }
    }
  ]
}
```

The application should not assume that a FHIR endpoint returns one
resource directly.

It should distinguish between:

-   Individual resources
-   Bundles
-   Empty search results
-   Errors

------------------------------------------------------------------------

## SMART on FHIR / OAuth Flow

The application will use a standalone SMART/OAuth authorization
workflow.

The conceptual flow is:

``` text
User
 │
 │ 1. Open application
 ▼
React Application
 │
 │ 2. Start authorization
 ▼
OpenEMR Authorization Endpoint
 │
 │ 3. User authenticates/authorizes
 ▼
OpenEMR
 │
 │ 4. Authorization response
 ▼
Application Callback
 │
 │ 5. Token exchange
 ▼
OpenEMR Token Endpoint
 │
 │ 6. Access token
 ▼
FHIR API
 │
 │ 7. Authorized FHIR requests
 ▼
React Application
```

The implementation will be developed incrementally.

The project will first establish the authorization flow and then connect
the authenticated application to the FHIR API.

### Authorization considerations

The implementation should account for:

-   Authorization code flow
-   PKCE where supported/appropriate
-   Redirect URI validation
-   Requested scopes
-   Granted scopes
-   Access-token expiration
-   Authorization errors
-   Insufficient-scope responses
-   Logout/session cleanup

SMART on FHIR is based on OAuth 2.0 patterns for authorizing
applications to interact with FHIR-based systems.

------------------------------------------------------------------------

## Application Structure

As implementation progresses, the source tree is expected to evolve
toward a structure similar to:

``` text
src/
├── auth/
│   ├── ...
│
├── components/
│   ├── ...
│
├── pages/
│   ├── ...
│
├── services/
│   └── fhir/
│       ├── ...
│
├── types/
│   ├── ...
│
├── App.tsx
├── main.tsx
└── ...
```

The exact structure will be introduced gradually rather than prematurely
creating unused abstractions.

### Suggested responsibilities

#### `auth/`

Authentication and authorization logic.

#### `components/`

Reusable UI components.

#### `pages/`

Application-level views such as patient search and patient dashboard.

#### `services/fhir/`

FHIR HTTP client and resource-specific API operations.

#### `types/`

TypeScript types and application-specific models.

------------------------------------------------------------------------

## Development Workflow

Development will follow an incremental workflow:

``` text
Requirement
    ↓
UI / application design
    ↓
Implementation
    ↓
Local testing
    ↓
OpenEMR API integration
    ↓
Error handling
    ↓
Refactoring
    ↓
Documentation
```

The application should remain functional after each milestone.

### Recommended workflow

1.  Start the OpenEMR development environment.
2.  Start the Vite development server.
3.  Make one focused change.
4.  Test the application locally.
5.  Test the relevant FHIR operation against OpenEMR.
6.  Inspect the browser console/network requests when necessary.
7.  Run lint/build checks.
8.  Commit the change.

------------------------------------------------------------------------

## Testing Strategy

Testing will be introduced progressively.

### Unit tests

Potential unit-test targets include:

-   FHIR response parsing
-   Bundle extraction
-   Search parameter construction
-   Error mapping
-   Authentication state handling
-   Utility functions

### Integration tests

Potential integration tests include:

-   FHIR API request handling
-   Authentication callback handling
-   Patient search
-   Patient data retrieval

### End-to-end tests

Later stages may include:

-   Application startup
-   Authorization
-   Patient selection
-   Dashboard loading
-   Error states
-   Logout

The initial implementation should not introduce a large testing
framework unnecessarily. Testing infrastructure will be added when the
relevant application functionality exists.

------------------------------------------------------------------------

## Security Considerations

This project deals with healthcare data and authentication workflows.
Even though the current environment is a local test installation,
security practices should be followed from the beginning.

### Never commit secrets

Do not commit:

-   OAuth client secrets
-   Access tokens
-   Refresh tokens
-   Private keys
-   Passwords
-   Production credentials
-   Real patient data

Use `.gitignore` for local environment files where appropriate.

### Browser applications

Assume that values exposed to browser JavaScript are potentially visible
to the user.

Do not place confidential credentials in:

``` text
VITE_*
```

environment variables.

### Tokens

Tokens should not be printed to:

-   Browser console
-   Application logs
-   Git commits
-   Screenshots
-   Issue reports

### HTTPS

The local OpenEMR environment may use a self-signed certificate during
development.

Production deployments should use properly configured HTTPS.

### Least privilege

Request only the FHIR scopes required by the application's features.

### Clinical data

The application should be treated as a healthcare-data application even
during development.

Use synthetic/test data for learning and testing whenever possible.

------------------------------------------------------------------------

## Error Handling

The application should provide meaningful handling for common failure
scenarios.

Examples include:

### Authentication errors

``` text
Authorization denied
Invalid authorization response
Token exchange failed
Session expired
```

### FHIR errors

``` text
401 Unauthorized
403 Forbidden
404 Not Found
400 Bad Request
500 Server Error
```

### Data conditions

``` text
No patients found
No observations available
Observation value unavailable
No encounters found
```

FHIR data may legitimately contain missing or unknown values. Missing
clinical information should not automatically be treated as an
application error.

------------------------------------------------------------------------

## Data and Privacy

This project is intended primarily for local development and
interoperability learning.

The development environment should use test or synthetic patient data
whenever possible.

If real patient information is ever used:

-   Apply appropriate privacy and security controls.
-   Do not commit it to source control.
-   Do not place it in screenshots or public issue reports.
-   Do not include it in debugging output.
-   Follow the applicable organizational and legal requirements.

This repository should never become a storage location for clinical
records.

------------------------------------------------------------------------

## Roadmap

### Phase 1 --- Project foundation

-   [x] Create Vite + React + TypeScript project
-   [x] Verify local development environment
-   [ ] Clean Vite starter application
-   [ ] Establish initial application layout
-   [ ] Add project configuration

### Phase 2 --- FHIR client foundation

-   [ ] Configure OpenEMR base URLs
-   [ ] Create FHIR service layer
-   [ ] Implement reusable HTTP request handling
-   [ ] Implement FHIR Bundle handling
-   [ ] Implement common error handling

### Phase 3 --- SMART/OAuth

-   [ ] Register application in OpenEMR
-   [ ] Configure redirect URI
-   [ ] Implement authorization flow
-   [ ] Implement PKCE where appropriate
-   [ ] Handle callback
-   [ ] Obtain access token
-   [ ] Handle authorization errors
-   [ ] Implement logout/session cleanup

### Phase 4 --- Patient Viewer MVP

-   [ ] Patient search
-   [ ] Patient selection
-   [ ] Patient demographics
-   [ ] Observations
-   [ ] Conditions
-   [ ] Encounters
-   [ ] Loading states
-   [ ] Empty states
-   [ ] API error states

### Phase 5 --- Quality

-   [ ] Unit tests
-   [ ] Integration tests
-   [ ] End-to-end tests
-   [ ] Accessibility review
-   [ ] Security review
-   [ ] Documentation improvements

### Phase 6 --- SMART enhancements

-   [ ] SMART EHR launch
-   [ ] Launch context
-   [ ] Patient context
-   [ ] Encounter context
-   [ ] Additional FHIR resources
-   [ ] Production deployment considerations

------------------------------------------------------------------------

## Troubleshooting

### The Vite application does not start

Check Node and npm:

``` bash
node --version
npm --version
```

Then reinstall dependencies if necessary:

``` bash
npm install
```

Start the development server:

``` bash
npm run dev
```

### OpenEMR FHIR request returns `401 Unauthorized`

Check:

1.  The access token is valid.
2.  The application requested the required scope.
3.  The granted token contains the required scope.
4.  The FHIR endpoint is correct.
5.  The OpenEMR FHIR service is enabled.

Do not assume that a successful OAuth token request means that the token
has every FHIR scope required by the application.

### FHIR request returns `403 Forbidden`

A `403` can indicate that the authenticated user/client does not have
sufficient authorization for the requested operation.

Check the OpenEMR client configuration and granted scopes.

### CORS errors

A browser application may encounter cross-origin restrictions when
communicating with a locally hosted OpenEMR installation.

Do not immediately work around CORS by disabling browser security.

First determine:

-   The application origin
-   The OpenEMR origin
-   Whether OpenEMR is configured to allow the required origin
-   Whether the request should be performed directly from the browser or
    through an appropriate backend architecture

### SSL/certificate problems

Local OpenEMR installations commonly use development certificates.

Check the browser and OpenEMR certificate configuration before treating
an SSL error as an application/FHIR error.

------------------------------------------------------------------------

## Contributing

This project is primarily a learning and demonstration project, but
contributions and suggestions are welcome.

Before making a significant change:

1.  Open an issue describing the proposed change.
2.  Explain the use case.
3.  Keep changes focused.
4.  Avoid committing credentials or clinical data.
5.  Update documentation when behavior changes.
6.  Verify that the application still builds.

For larger future development, contribution guidelines can be expanded
with:

-   Branching conventions
-   Commit conventions
-   Pull request requirements
-   Code review rules
-   Testing requirements
-   Security reporting procedures

------------------------------------------------------------------------

## License

**License: To be determined.**

No open-source license is currently declared for this learning project.

Until a license is explicitly added to the repository, users should not
assume that the code is available for unrestricted redistribution or
reuse.

------------------------------------------------------------------------

## References

### OpenEMR

The project structure and documentation approach are informed in part by
the OpenEMR repository, which provides dedicated documentation for its
API, FHIR implementation, Docker setup, contribution process, security,
and general development.

-   OpenEMR repository:\
    https://github.com/openemr/openemr
-   OpenEMR documentation index:\
    https://github.com/openemr/openemr/blob/master/README.md
-   OpenEMR API documentation:\
    https://github.com/openemr/openemr/blob/master/API_README.md
-   OpenEMR FHIR documentation:\
    https://github.com/openemr/openemr/blob/master/FHIR_README.md

### Vite

The application was initially created using the official Vite React +
TypeScript template. The Vite project documents the React/TypeScript
starter and its development workflow.

-   Vite repository:\
    https://github.com/vitejs/vite
-   React + TypeScript template:\
    https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts

### SMART on FHIR

The application architecture is intended to follow SMART on FHIR
concepts for authorization and integration with FHIR-based systems.

-   HL7 SMART App Launch:\
    https://hl7.org/fhir/smart-app-launch/

### FHIR

-   HL7 FHIR:\
    https://hl7.org/fhir/

------------------------------------------------------------------------

## Project Philosophy

This project is intentionally small.

The objective is not to reproduce OpenEMR or build a complete EHR. The
objective is to understand how an external application can safely and
correctly integrate with an OpenEMR installation using standards-based
interoperability.

The implementation therefore favors:

-   Small incremental changes
-   Clear separation of concerns
-   Standards-based APIs
-   Least-privilege authorization
-   Type safety
-   Practical FHIR knowledge
-   Explicit error handling
-   Security-conscious development
-   Documentation alongside implementation

The project should remain understandable to a developer who is learning
OpenEMR integration while still following practices that can scale
toward real-world interoperability work.
