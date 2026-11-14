# Projektanweisungen für Agents

## Projektüberblick

- Die Website ist ein statisch generiertes Eleventy-Projekt. Quellen liegen in `src/`, globale Eleventy-Daten in `_data/`, generierte Dateien in `_site/`. Änderungen an `_site/` gehen beim Build verloren.
- Hauptbereiche: Nunjucks-Layouts und Komponenten unter `src/_includes/`, Sass unter `src/assets/css/`, JavaScript-Einstieg unter `src/assets/js/index.js`.
- Ein eigener Test- oder Lint-Befehl ist in `package.json` nicht eingerichtet. Für Änderungen an Templates oder Content mindestens `npm run build:fast` ausführen; bei geänderten oder neuen Bildern `npm run build`.

## Posts und Content

- Beiträge liegen unter `src/posts/en/<Datum>_<Slug>/index.md`. Obwohl der Ordner `en` heißt, sind viele Beiträge deutschsprachig. Bestehende Inhalte und Frontmatter sind die maßgebliche Vorlage.
- Übliche Frontmatter-Felder sind `title`, `description`, `date`, `banner`, `tags` und `layout`. `strava` und `links` werden vom Post-Layout als Listen von `[Label, URL]` verarbeitet.
- `src/posts/posts.json` ergänzt die gemeinsamen Tags; `src/posts/en/en.json` setzt die Locale. Ein Beitrag mit `eleventyExcludeFromCollections: true` erscheint nicht in den Collections. Beim Beispielpost muss diese Eigenschaft für eine Veröffentlichung entfernt werden.
- Post-Bilder gehören in den `media/`-Ordner des Beitrags; `banner` referenziert dort ein Bild. Die Galerie wird automatisch aus den Post-Medien erzeugt. GPX-Dateien gehören nach `gpx/`.
- `npm run dev:fast` und `npm run build:fast` erzeugen fehlende Bildvarianten auch für neue Posts. Bereits vorhandene Varianten werden im Fast-Modus jedoch nicht aktualisiert, wenn das Quellbild geändert oder ersetzt wurde. Dafür den normalen Build verwenden.

## Build und Implementierungsdetails

- Der Build besteht aus separaten Schritten: Eleventy, Sass und Rollup. `npm run build` führt einen sauberen Production-Build aus; `npm run build:fast` ist für schnelle Checks ohne reguläre Bildverarbeitung.
- `.eleventy.js` enthält neben der Eleventy-Konfiguration auch Bildverarbeitung, Collections (`posts`, `images`, `gpx`) und globale Filter. Änderungen daran können Posts, Galerie, Feeds oder andere Templates beeinflussen.
- Markdown ist in `.markdown.js` konfiguriert: HTML, Zeilenumbrüche, automatische Links, Typografie und Überschriften-Permalinks sind aktiviert. Bei Markdown-Inhalten nicht voraussetzen, dass HTML escaped wird.
- Die CI nutzt Node 20 und `npm ci`. Der GitHub-Workflow baut und deployt auf Pushes zu den dort angegebenen Branches; Deployment nicht manuell oder beiläufig auslösen.
