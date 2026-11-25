# Prüfstand – erste Vorschaufassung

## Nachprüfung 0.1.0-preview.4 – 25.11.2026

Alle zehn automatisierten Tests bestehen: Common 3 (einschliesslich zwei neuer Integritätsprüfungen), E2E 5, System 2. Geprüft: frische Git-Klone mit LF/CRLF, Migration alter Byte-Manifeste, Erkennung und Überschreibschutz echter Änderungen sowie Erhalt eigener Planungsdateien. Beide verteilten Manifeste stimmen für alle 28 Common-Dateien. 43 Skill-Dateien auf Frontmatter geprüft.

Die Dialogänderungen beruhen auf einem menschlichen define-prototype-Praxistest und wurden gegen die bestätigten Regeln gelesen. Kein neuer unabhängiger Verhaltensnachweis der überarbeiteten Planungsskills; der nächste menschliche Durchlauf beginnt bei Solution Architecture. macOS und Antigravity weiterhin nicht nachgetestet.

Geprüft am 13.11.2026 unter Windows, Node 24.11.0.

- 27 unterschiedliche Skill-Quellen, nach Verteilung 43 SKILL.md-Dateien: Formatprüfung bestanden.
- Common-Verteilung: Vorschau, wiederholte Verteilung, Erhalt eigener PRDs und Abbruch bei lokal veränderten Kursdateien geprüft.
- Fünf Mermaid-Diagramme im Browser gerendert und visuell kontrolliert; SVG-Fassungen unter shared/docs/diagrams/.
- Design-Brief-Demo mit vorbereitetem synthetischem Auftrag, Referenz und Antworten ausgearbeitet. Separater Demonstrator über denselben Bootstrap aufgebaut, TypeScript und Build erfolgreich, zwei Browserprüfungen für Start/Systemidentität sowie Auswahl/Freigabe mit unverändertem anderem Datensatz. Desktop- und schmale Ansicht kontrolliert.

Keine Behauptung eines unabhängigen Blindtests aller Skills oder einer studentischen fachlichen Abnahme. Der Demodialog verwendet vorbereitete Antworten; die praktische Erprobung mit Studierenden und beiden Agentenwerkzeugen folgt.

Diese Preview ist der erste konsistente Vorschlag. Vor dem Hackathon noch erproben: vollständiger Verlauf mit getrenntem Planer/Implementierer und unabhängigen PRD-/Architekturreviews, parallele Worktrees mehrerer Personen, mehrere reale Systemprojekte, toolübergreifende Übergaben, macOS und Antigravity-Export. Common nach Festlegung der Kursfassung möglichst einfrieren.
