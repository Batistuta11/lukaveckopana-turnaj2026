# Instrukce pro Codex

## Projekt

Toto je projekt ve frameworku Next.js nasazený na Vercelu.

Veřejná adresa projektu:
https://turnaj2026.lukaveckopana.cz

Hlavní web zůstává ve WordPressu:
https://www.lukaveckopana.cz

Tento projekt slouží pouze jako samostatná prezentační stránka pro 25. ročník turnaje v malé kopané v Lukavci.

## Technologie

- Next.js App Router
- TypeScript
- Tailwind CSS
- Vercel
- GitHub repozitář: Batistuta11/lukaveckopana-turnaj2026

## Důležité příkazy

- Vývojový server: npm run dev
- Kontrola buildu: npm run build
- Generování GIFu: python3 scripts/generate_gif.py
- Nasazení: git push

## Struktura adresářů

- app/ obsahuje hlavní Next.js stránky, layout a globální styly.
- components/ obsahuje znovupoužitelné React komponenty.
- content/ obsahuje editovatelná data a texty turnaje.
- public/images/ obsahuje zdrojové obrázky.
- public/gif/ obsahuje hotové GIFy použité na webu.
- public/downloads/ obsahuje veřejné soubory ke stažení.
- scripts/ obsahuje pomocné skripty, hlavně generování GIFu.
- docs/ obsahuje poznámky k workflow, nasazení a DNS.

## Pravidla práce

- Veškerý viditelný text na webu piš česky.
- Neměň DNS záznamy.
- Neměň nastavení projektu na Vercelu bez výslovného pokynu.
- Nesahej na tokeny, hesla, tajné klíče ani soubor .env.local.
- Soubor .env.local nikdy necommituj.
- Nespouštěj npm audit fix --force bez výslovného souhlasu.
- Před větší úpravou nejdřív napiš krátký plán.
- Po úpravách kódu vždy spusť npm run build.
- Pokud se mění GIF nebo obrázkové assety, spusť před buildem python3 scripts/generate_gif.py.
- Neprováděj git commit ani git push bez výslovného pokynu uživatele.
- Pro změny textů, data, místa, programu a propozic preferuj content/tournament.json.
- Pro změny vzhledu preferuj soubory v components/.
- Soubor app/page.tsx má zůstat krátký a má skládat stránku z komponent.
- Zachovej hlavní web WordPressu beze změn.
- Odkazy zpět na hlavní web musí vést na https://www.lukaveckopana.cz.
## MCP usage rules

- When working with Next.js, React, Tailwind CSS, Vercel, OpenAI, or Codex configuration, use available MCP documentation before making assumptions.
- If unsure about a framework API, CLI command, configuration key, or deployment behavior, check MCP documentation first.
- Do not invent commands, options, or configuration keys.
- Before editing files, inspect the existing project files.
- After editing code, run `npm run build`.
- Do not commit or push changes unless explicitly instructed.
