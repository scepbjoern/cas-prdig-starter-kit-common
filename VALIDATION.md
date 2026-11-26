# Prüfstand – erste Vorschaufassung

## Nachprüfung 0.1.0-preview.5 – 26.11.2026

- npm test: 3 vorhandene Tests bestanden; insgesamt zehn in Common/E2E/System.
- Paketweit 43 Skill-Dateien auf Name/Beschreibung und konsistente Sicherungsanweisung geprüft; 13 unterschiedliche Markdown-Vorlagen auf fortlaufende Abschnittsnummern, Design-Asset auf Gleichheit geprüft.
- Common-Dateien über tools/distribute.mjs verteilt; Manifestprüfung in beiden Ziel-Kits bestanden. Git-Diffs auf unbeabsichtigte Änderungen und Formatfehler geprüft.
- Inhaltlicher Abgleich: Review mit/ohne Befunde, fachliche Zustimmung nach Integration, Speicherauftrag gegenüber offenem Dialog, fehlender Pushzugriff, bestehende Systemkonfiguration und Startplan gegenüber tatsächlichem E2E-Lauf. Dies ist eine Anweisungsprüfung, kein ausgeführter Modellvergleich.
- Neuer menschlicher Systemplanungsdurchlauf und Antigravity-Praxistest stehen aus. Vorhandene Tests bestätigen Werkzeuge und Schutzmechanismen; sie belegen keine garantierte Befolgung jeder Dialogregel durch alle Modelle.

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
