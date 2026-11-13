# Heidelbergs Finest Website

Dies ist das Quellcode-Repository der [Heidelbergs Finest Mountainbike Trails Website](https://heidelbergs-finest.de). 

Die Website wird mit **[Eleventy (11ty)](https://11ty.dev)** als Static Site Generator gebaut und verwendet **Sass** für Styles, **Rollup** für JavaScript-Bundling und **Nunjucks** als Template-Engine.

## 🚀 Schnellstart

### Voraussetzungen

Du benötigst:
- **[Node.js](https://nodejs.org/)** (Version 14 oder höher empfohlen)
- **[npm](https://www.npmjs.com/)** (wird mit Node.js mitgeliefert)

### Installation

1. **Repository klonen** (falls noch nicht geschehen):
   ```bash
   git clone https://github.com/Heidelbergs-Finest/Website.git
   cd Website
   ```

2. **Abhängigkeiten installieren:**
   ```bash
   npm install
   ```

3. **Entwicklungsserver starten:**
   ```bash
   npm run dev
   ```

4. **Website im Browser öffnen:**
   - Die Website ist nun unter **[http://localhost:3000](http://localhost:3000)** erreichbar
   - Der Server aktualisiert sich automatisch, wenn du Dateien änderst (Hot Reload)

## 📦 Skripte

| Befehl | Beschreibung |
|--------|--------------|
| `npm run dev` | Startet Entwicklungsserver mit Hot-Reload auf Port 3000 (inkl. Image Processing) |
| `npm run dev:fast` | **Schneller Dev-Server** – überspringt Image Processing (für Code-Änderungen) |
| `npm run build` | Baut die Website für Production (in `_site/` Ordner, inkl. Image Processing) |
| `npm run build:fast` | **Schneller Build** – überspringt Image Processing (ca. 10-100x schneller!) |
| `npm run build:github` | Baut die Website mit Path Prefix für GitHub Pages |
| `npm run clean` | Löscht den `_site/` Output-Ordner |
| `npm run debug` | Startet Eleventy mit Debug-Logs |

### ⚡ Schnelle Builds (ohne Image Processing)

Das Image Processing kann sehr lange dauern (mehrere Minuten). Für die Entwicklung kannst du die **schnellen Varianten** verwenden, die das Image Processing überspringen:

```bash
# Entwicklung - kein Image Processing
npm run dev:fast

# Production Build - kein Image Processing
npm run build:fast
```

**Wann solltest du die schnellen Varianten verwenden?**
- ✅ Du arbeitest an Code, Templates oder Styles (keine Bilder geändert)
- ✅ Du willst schnell etwas testen
- ✅ Du hast bereits alle Bilder prozessiert

**Wann brauchst du das vollständige Image Processing?**
- ⚠️ Du hast neue Bilder hinzugefügt
- ⚠️ Du hast bestehende Bilder ersetzt oder geändert
- ⚠️ Du machst einen vollständigen Production-Build für die Veröffentlichung

**Tipp:** Das Image Processing wird automatisch übersprungen, wenn sich die Bilder nicht geändert haben. Die schnellen Skripte überspringen es komplett, auch wenn sich Bilder geändert haben.

## 🏗️ Projektstruktur

```
Website/
├── src/                    # Quellcode
│   ├── assets/             # CSS, JavaScript, Bilder
│   │   ├── css/            # Sass/SCSS Dateien
│   │   │   └── index.scss # Haupt-Stylesheet
│   │   └── js/             # JavaScript Dateien
│   │       └── index.js    # Haupt-JavaScript
│   ├── _includes/          # Nunjucks Templates
│   │   ├── components/     # Wiederverwendbare Komponenten
│   │   └── layouts/        # Layout-Templates
│   ├── posts/              # Blog Posts
│   │   └── en/             # Englischsprachige Posts
│   │       └── 19800107_ExamplePost/ # Beispiel-Post
│   ├── en/                 # Englischsprachige Seiten
│   └── sitemap.xml.njk     # Sitemap Template
├── static/                 # Statische Dateien (Favicons, etc.)
├── _data/                  # Globale Daten für Eleventy
├── .eleventy.js            # Eleventy Konfiguration
├── rollup.config.js        # Rollup Konfiguration
├── package.json            # Projekt-Konfiguration
└── README.md               # Diese Datei
```

## 📝 Einen neuen Post erstellen

1. **Beispiel-Post als Vorlage verwenden:**
   - Kopiere den Ordner `/src/posts/en/19800107_ExamplePost/`
   - Benenne ihn um (Format: `JJJJMMDD_Titel`)
   - Beispiel: `20251101_MyNewTour/`

2. **Post-Metadaten anpassen:**
   - Öffne die `index.md` Datei im neuen Ordner
   - Passe die Frontmatter-Daten an (Titel, Datum, Beschreibung, Tags, etc.)

3. **Inhalt schreiben:**
   - Der Post verwendet Markdown-Syntax
   - Es stehen zusätzliche Markdown-Plugins zur Verfügung (Container, Anker, etc.)

4. **Bilder hinzufügen:**
   - Erstelle einen `media/` Ordner im Post-Ordner
   - Füge deine Bilder dort ein (JPG, PNG, etc.)
   - Die Bilder werden automatisch beim Build optimiert

5. **GPX-Dateien hinzufügen (optional):**
   - Erstelle einen `gpx/` Ordner im Post-Ordner
   - Füge deine GPX-Track-Dateien dort ein

**Hinweis:** Der Beispiel-Post unter `19800107_ExamplePost` ist nicht in der Blog-Roll gelistet und dient nur als Referenz. Du kannst ihn unter [https://www.heidelbergs-finest.de/posts/en/19800107_ExamplePost/](https://www.heidelbergs-finest.de/posts/en/19800107_ExamplePost/) ansehen.

## 🎨 Technologien & Abhängigkeiten

### Haupttechnologien
- **[Eleventy (11ty)](https://11ty.dev)** - Static Site Generator
- **[Sass](https://sass-lang.com/)** - CSS Preprocessor
- **[Rollup](https://rollupjs.org/)** - JavaScript Bundler
- **[Nunjucks](https://mozilla.github.io/nunjucks/)** - Template Engine

### Wichtige Plugins
- `@11ty/eleventy-img` - Bildoptimierung
- `@11ty/eleventy-navigation` - Navigationsgenerierung
- `@11ty/eleventy-plugin-rss` - RSS-Feed Generierung
- `@11ty/eleventy-plugin-syntaxhighlight` - Syntax Highlighting
- `markdown-it-anchor` - Anker für Überschriften
- `markdown-it-container` - Container für Markdown
- `photoswipe` - Lightbox für Bilder
- `animejs` - Animationen

## 🔧 Build-Prozess

Der Build-Prozess besteht aus mehreren Schritten:

1. **Bilder verarbeiten** (`csshash.js`, `beforeBuild` Hook)
   - Bilder werden in verschiedenen Größen generiert (Thumbnail: 300px, Full: 1600px)
   - Bilder werden im JPEG-Format gespeichert
   - **Optimierung:** Bilder werden nur neu verarbeitet, wenn sie sich geändert haben oder noch nicht prozessiert wurden
   - Du kannst das Image Processing komplett überspringen mit `ELEVENTY_SKIP_IMAGES=true`

2. **Eleventy Build**
   - Verarbeitet alle Markdown- und Template-Dateien
   - Generiert HTML-Dateien im `_site/` Ordner

3. **Sass kompilieren**
   - SCSS-Dateien werden zu CSS kompiliert
   - CSS wird mit CleanCSS minimiert

4. **JavaScript bundlen** (Rollup)
   - JavaScript-Dateien werden gebündelt
   - In Production wird der Code mit Terser minimiert

## 🐛 Fehlerbehebung

### Häufige Probleme

1. **Port 3000 ist bereits belegt**
   - Ändere den Port in der `dev:eleventy` Script in `package.json`
   - Oder beende den anderen Prozess, der Port 3000 verwendet

2. **Node.js Version zu alt**
   - Aktualisiere Node.js auf Version 14 oder höher
   - Überprüfe mit `node -v`

3. **Abhängigkeiten fehlen**
   - Führe `npm install` aus, um alle Abhängigkeiten zu installieren

4. **Bilder werden nicht angezeigt**
   - Stelle sicher, dass die Bilder im `media/` Ordner des Posts liegen
   - Überprüfe die Dateiberechtigungen

5. **Änderungen werden nicht angezeigt**
   - Der Hot-Reload sollte funktionieren, aber manchmal ist ein manueller Refresh nötig
   - Stelle sicher, dass der Entwicklungsserver läuft (`npm run dev`)

### Debug-Modus

Für detaillierte Logging-Informationen:
```bash
npm run debug
```

Dies aktiviert Debug-Logs für Eleventy und zeigt detaillierte Informationen über den Build-Prozess an.

## 📄 Lizenz

Dieses Projekt steht unter der MIT-Lizenz. Siehe [LICENSE](LICENSE) für weitere Informationen.

## 🤝 Beitrag leisten

1. Fork das Repository
2. Erstelle einen neuen Branch für deine Änderungen
3. Commit deine Änderungen
4. Push den Branch und erstelle einen Pull Request

## 📬 Kontakt

- **Website:** [https://www.heidelbergs-finest.de/](https://www.heidelbergs-finest.de/)
- **GitHub:** [https://github.com/Heidelbergs-Finest/Website](https://github.com/Heidelbergs-Finest/Website)

---

*Basierend auf dem [11ty Starter](https://github.com/moody-person/11ty-starter) von moody-person.*
