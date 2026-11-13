# CAS PRDIG – Common

Gemeinsame Kursquelle für die Starter-Kits [E2E](https://github.com/scepbjoern/cas-prdig-starter-kit-e2e) und [System](https://github.com/scepbjoern/cas-prdig-starter-kit-system).
Studierendengruppen erstellen genau ein E2E-Projekt und ein Projekt pro gebautem oder gemocktem System. Sie brauchen kein zusätzliches Common-Repository.

Die bezeichnete Common-Version wird in die Kits kopiert. Während einer Durchführung bleibt sie möglichst unverändert. Korrekturen werden angekündigt und gezielt übernommen; kein automatisches Update beim Start.

- [PIV-Workflow](shared/docs/PIV-WORKFLOW.md)
- [Glossar](shared/docs/GLOSSARY.md)
- [Fünf Darstellungen](shared/docs/DIAGRAMS.md)
- [GitHub und Zusammenarbeit](shared/docs/COLLABORATION.md)
- [Design-Brief-Demo](examples/design-brief-demo/README.md)
- [Prüfstand](VALIDATION.md)

Maintainer: Änderungen an gemeinsamen Inhalten ausschliesslich hier vornehmen. Danach mit tools/distribute.mjs bewusst an die beiden Kits verteilen. Das Manifest dokumentiert Dateihashes und Quellversion; lokal veränderte Kopien werden nicht überschrieben.

Die bisherige Frühjahrsversion bleibt im Repository cas-prdig-starter-kit erhalten. Diese neue Fassung ist eine eigenständige Vorlage, kein automatisches Upgrade laufender Projekte.
