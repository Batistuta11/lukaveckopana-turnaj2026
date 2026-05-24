# Kroky k dokončení webu turnaje Lukavec 2026

Stav vychází ze souboru `docs/TODO.md` k 24. 5. 2026.

## 1. Ujasnit aktuální rozpracovaný stav

- [ ] Projít necommitnuté změny v `AGENTS.md`, `app/api/register/route.ts`, `app/propozice/page.tsx`, `components/InformationSection.tsx`, `components/RegistrationForm.tsx` a `content/tournament.json`.
- [ ] Rozhodnout, které změny jsou finální a které se mají ještě upravit.
- [ ] Rozhodnout, jestli se mají commitovat `.codex/` a `.npmrc`; pokud nejsou záměrně projektové, nechat je mimo commit.

## 2. Uzavřít soubory propozic ke stažení

- [ ] Zkontrolovat, jestli `public/downloads/propozice_2026novyhsok.pdf` obsahuje finální verzi propozic.
- [ ] Rozhodnout, jestli na webu ponechat PDF i Word verzi propozic.
- [ ] Rozhodnout, jestli ponechat veřejný název `propozice_2026novyhsok.*`, nebo soubory přejmenovat na čitelnější název bez překlepu.
- [ ] Pokud se soubory přejmenují, upravit všechny odkazy na webu.

## 3. Sjednotit obsah webu s propozicemi

- [ ] Projít `content/tournament.json`.
- [ ] Nahradit obecné formulace typu `budou doplněny` finálními informacemi, pokud jsou už známé.
- [ ] Doplnit nebo potvrdit startovné.
- [ ] Doplnit nebo potvrdit herní systém, délku zápasů, skupiny a vyřazovací část.
- [ ] Doplnit nebo potvrdit časový harmonogram dne.
- [ ] Doplnit informaci o kapacitě týmů a případně stav obsazenosti.
- [ ] Rozhodnout, jestli se má na webu zobrazovat seznam přihlášených týmů.
- [ ] Zkontrolovat, že online propozice odpovídají PDF/Word dokumentům.

## 4. Zkontrolovat kontakty a odkazy

- [x] Zkontrolovat kontakty pořadatelů: telefon a email.
- [x] Zkontrolovat příjemce přihlašovacích emailů v `app/api/register/route.ts`.
- [x] Zkontrolovat, že odkazy zpět na hlavní web vedou na `https://www.lukaveckopana.cz`.
- [x] Otestovat všechny odkazy ke stažení.

## 5. Ověřit přihlašovací formulář

- [x] Ověřit produkční odesílání formuláře přes Resend.
- [x] Ověřit, že doména odesílatele `turnaj@lukaveckopana.cz` je v Resendu správně nastavená.
- [ ] Ověřit, že doručené přihlášky nekončí ve spamu.
- [ ] Otestovat registraci na desktopu.
- [ ] Otestovat registraci na mobilu.
- [x] Zkontrolovat přístupnost formuláře: popisky, chybové hlášky, focus stavy a kontrast.
- [ ] Rozhodnout, jestli je potřeba základní ochrana proti opakovanému spamování formuláře.
- [ ] Rozhodnout, jestli je potřeba logování nebo archivace přihlášek mimo email.

## 6. Doladit technické a vizuální detaily

- [x] Optimalizovat `public/images/E-Fyzio.jpg`, protože má přibližně 2.6 MB.
- [x] Rozhodnout, jestli jsou stále potřeba výchozí soubory `public/file.svg`, `public/globe.svg`, `public/next.svg`, `public/vercel.svg` a `public/window.svg`.
- [ ] Zkontrolovat mobilní zobrazení hlavní stránky.
- [ ] Zkontrolovat mobilní zobrazení stránky propozic.
- [ ] Zkontrolovat mobilní zobrazení registrace.
- [ ] Zkontrolovat mobilní zobrazení tabulky vítězů.
- [x] Rozhodnout, jestli emoji ikony v `components/ProposalsSection.tsx` zůstanou, nebo se nahradí čistší textovou či ikonovou variantou.
- [x] Zvážit jednotnější styl tlačítek a odkazů napříč hlavní stránkou, propozicemi a registrací.

## 7. Projít předprodukční kontrolu

- [x] Spustit `npm run build`.
- [ ] Otestovat web na produkční URL `https://turnaj2026.lukaveckopana.cz`.
- [ ] Zkontrolovat náhled sdílení na Facebooku a dalších sítích.
- [ ] Zkontrolovat favicon.
- [ ] Zkontrolovat náhledový obrázek Open Graph.

## 8. Dokončit verzování a nasazení

- [ ] Po finální kontrole připravit commit jen se schválenými změnami.
- [ ] Commit provést až po výslovném pokynu.
- [ ] Nasazení provést až po odsouhlasení.
- [ ] Pro nasazení použít `git push`.
