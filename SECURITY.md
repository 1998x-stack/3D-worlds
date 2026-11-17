# Security policy

3D Worlds is a source-editable 3D asset library, **not a certified manufacturing system**.

## Vulnerability disclosure

Please avoid publishing exploit details in a public issue until maintainers have had an opportunity to review. Where GitHub's **Report a vulnerability** / private security-advisory workflow is available, use it for security reports. If it is unavailable, file an issue that requests a private contact without disclosing exploit payloads or credentials.

Include the affected source revision, a minimal safe reproduction, potential impact and any mitigation you verified. No formal response-time SLA is promised.

## Threat boundaries

- Treat imported GLB and all third-party metadata as **untrusted input**. Keep glTF size limits, checksums, attribution and structural validation.
- Never execute arbitrary asset-authored scripts supplied by catalog metadata, and never publish object-storage access keys.
- The optional local API must be protected behind authentication, rate-limiting and HTTPS if deployed publicly; GitHub Pages is static and does not host the private API.
- Do not download generated G-code or send printer controls under the pretense that the repo validated print safety. The printer profile UI is a dimensional estimate only.
- For safety-critical, load-bearing or electrical applications, a competent engineer and qualified material/process validation are required.

The repository's third-party model licenses and copyright evidence must be evaluated independently of technical security checks.
