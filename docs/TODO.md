# TODO - turnaj Lukavec 2026

Stav k: 24. 5. 2026

Tento dokument slouzi jako pracovni checklist pro web 25. rocniku turnaje O pohar obce Lukavec. Prubezne odskrtavej body v tomto souboru a podle potreby z nej znovu vygeneruj PDF.

## Hotovo

- [x] Projekt bezi na Next.js App Routeru, TypeScriptu a Tailwind CSS.
- [x] Hlavni stranka je slozena z komponent a `app/page.tsx` zustava kratky.
- [x] Hlavni editovatelna data jsou v `content/tournament.json`.
- [x] Web ma hlavni sekce: hero, info karty, obhajce titulu, historie vitezu, informace pro tymy/navstevniky a propozice.
- [x] Existuje stranka `/registrace` s prihlasovacim formularem.
- [x] Existuje stranka `/propozice` s textem propozic, kontakty a odkazy ke stazeni.
- [x] Existuje stranka `/vitezove` s prehledem vitezu od roku 2002 do roku 2025.
- [x] Je doplnen vitez roku 2025: E-FYZIO MILETIN.
- [x] Hero obsahuje akce `Prihlasit muzstvo` a `Zobrazit propozice`.
- [x] SEO metadata jsou nastavena pro hlavni stranku, registraci, propozice a viteze.
- [x] Build projektu aktualne prochazi prikazem `npm run build`.

## Priorita 1 - dokoncit pred nasazenim

- [ ] Rozhodnout, jestli jsou aktualni necommitnute zmeny finalni, hlavne registrace, propozice a odkazy v informacni sekci.
- [ ] Zkontrolovat, jestli soubor `public/downloads/propozice_2026novyhsok.pdf` je finalni verze propozic.
- [ ] Rozhodnout, jestli ponechat na webu oba soubory propozic: PDF i Word.
- [ ] Opravit nebo potvrdit nazev souboru `propozice_2026novyhsok.*`; pokud ma byt verejny, zvazit citelnejsi nazev bez preklepu.
- [ ] Projit vsechny texty v `content/tournament.json` a nahradit obecne formulace typu `budou doplneny` finalnimi informacemi, pokud uz jsou znama pravidla, startovne a system turnaje.
- [ ] Overit produkcni odesilani prihlasovaciho formulare pres Resend.
- [ ] Overit, ze domena odesilatele `turnaj@lukaveckopana.cz` je v Resendu spravne nastavena a doruceni nekonci ve spamu.
- [ ] Ujasnit prijemce prihlasovacich emailu v `app/api/register/route.ts`.
- [ ] Rozhodnout, jestli se maji commitovat `.codex/` a `.npmrc`; pravdepodobne je lepsi je necommitovat, pokud nejsou zamerne projektove.
- [ ] Pred commitem znovu spustit `npm run build`.

## Priorita 2 - obsah a provoz

- [ ] Doplnit finalni startovne, pokud ma byt viditelne primo na webu.
- [ ] Doplnit finalni hraci system, delku zapasu a format skupin/vyrazovaci casti.
- [ ] Doplnit finalni casovy harmonogram dne, pokud bude znamy pred turnajem.
- [ ] Doplnit informaci o kapacite tymu a pripadne stav obsazenosti.
- [ ] Rozhodnout, jestli na webu zobrazovat seznam prihlasenych tymu.
- [ ] Zkontrolovat kontakty poradatelu: telefon, email a jednotny odkaz na hlavni web `https://www.lukaveckopana.cz`.
- [ ] Zkontrolovat soulad textu v online propozicich s dokumentem PDF/Word.
- [ ] Po kazde zmene propozic aktualizovat soubory v `public/downloads/`.

## Priorita 3 - technicke doladeni

- [ ] Optimalizovat velky obrazek `public/images/E-Fyzio.jpg`, aktualne ma priblizne 2.6 MB.
- [ ] Rozhodnout, jestli jsou stale potreba vychozi soubory `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg` a `public/window.svg`.
- [ ] Zkontrolovat mobilni zobrazeni hlavni stranky, propozic, registrace a tabulky vitezu.
- [ ] Zkontrolovat pristupnost formularu: viditelne popisky, chybove hlasky, focus stavy a kontrast.
- [ ] Zkontrolovat, jestli emoji ikony v `components/ProposalsSection.tsx` zustanou, nebo je nahradit ciste textovou/ikonovou variantou.
- [ ] Zvazit jednotnejsi styl tlacitek a odkazu napric hlavni strankou, propozicemi a registraci.
- [ ] Doplnit zakladni ochranu proti opakovanemu spamovani formulare, pokud se ukaze potreba.
- [ ] Zvazit logovani nebo archivaci prijatych prihlasek mimo email, pokud bude potreba evidence tymu.

## Priorita 4 - pred verejnym spustenim

- [ ] Otestovat web na produkcni URL `https://turnaj2026.lukaveckopana.cz`.
- [ ] Otestovat vsechny odkazy ke stazeni.
- [ ] Otestovat odkazy zpet na hlavni web a overit, ze vedou na `https://www.lukaveckopana.cz`.
- [ ] Otestovat registraci na mobilu i desktopu.
- [ ] Zkontrolovat nahled sdileni na Facebooku a dalsich sitich.
- [ ] Zkontrolovat favicon a nahledovy obrazek Open Graph.
- [ ] Po finalni kontrole udelat commit.
- [ ] Nasazeni provest az po odsouhlaseni; pro tento projekt plati `git push`.

## Poznamky k aktualnimu rozpracovanemu stavu

- Necommitnute zmeny jsou v `AGENTS.md`, `app/api/register/route.ts`, `app/propozice/page.tsx`, `components/InformationSection.tsx`, `components/RegistrationForm.tsx` a `content/tournament.json`.
- Novy necommitnuty soubor je `public/downloads/propozice_2026novyhsok.pdf`.
- Necommitnute jsou take `.codex/` a `.npmrc`; pred commitem je potreba rozhodnout, zda patri do repozitare.
- `npm run build` probehl uspesne 24. 5. 2026.
