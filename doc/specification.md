# Weather Forecast Application Specification

## Általános információk
A feladat egy időjárás előrejelző webes felület elkészítése a React keretrendszer használatával a megadott paraméterek alapján.

## Város kiválasztása
- A város nevére kattintva jelenjen meg egy modal, amelyben egy kereső mező található.
- A felhasználó ebben a kereső mezőben be tudja írni az általa választott várost.
- A városok listáját az **Open Meteo Geocoding API** szolgáltatja: [Open Meteo Geocoding API](https://open-meteo.com/en/docs/geocoding-api).
- Ha több találat is elérhető a keresett városra, az eredményeket listában jelenítjük meg.
- A felhasználó kiválaszthatja a kívánt várost a listából.
- Ha nincs kiválasztva város az első megnyitáskor, a modal automatikusan megjelenik.
- A kiválasztott város adatait el kell tárolni a böngésző **localStorage**-ában, hogy újranyitáskor automatikusan betöltődjön.

## Adatok megjelenítése
- Jelenítse meg a városhoz tartozó aktuális hőmérsékletet és időjárási állapotot (pl.: Tiszta idő, Eső, stb.).
- Egy **7 napos időjárás előrejelzés** is megjelenik, amely tartalmazza:
  - A nap nevét.
  - Az időjárási állapot ikonját.
  - A csapadék valószínűségét.
  - A minimum és maximum hőmérsékletet.
- A város kiválasztása után az **Open Meteo API** segítségével lekérjük az adott városra vonatkozó időjárási adatokat a város koordinátái alapján: [Open Meteo API](https://open-meteo.com/en/docs/).

## Grafikon
- A 7 napos előrejelzés alatt jelenjen meg egy grafikon, amely az adott napokra vonatkozó **legmagasabb hőmérsékleteket** ábrázolja vizuálisan.

## Felhasznált technológiák
- **React**: A frontend komponensek kezelésére.
- **Vite.js**: A fejlesztési és build környezethez.
- **Tailwind CSS**: A reszponzív stílusok megvalósításához.
- **Open Meteo API**: Az időjárási és geocoding adatok szolgáltatásához.
- **Cypress**: Az alkalmazás reszponzív tesztelésére különböző eszközökön (mobil, tablet, desktop).

## Feladat lépések
1. **Város kereső és kiválasztó modal**: A felhasználó a modal segítségével várost kereshet és választhat, amit az API biztosít.
2. **Időjárás adatok megjelenítése**: Az aktuális időjárási állapot és a 7 napos előrejelzés megjelenítése.
3. **Grafikon**: A napi legmagasabb hőmérsékletek grafikus megjelenítése a 7 napos előrejelzés alatt.
4. **Reszponzív kialakítás**: Az alkalmazás minden nézetben (mobil, tablet, desktop) megfelelően működjön.

## További fejlesztések
- Modal megjelenésének és stílusának finomítása.
- Az időjárás grafikon részletes vizuális megvalósítása.
- További funkciók és tesztek hozzáadása a reszponzív viselkedés ellenőrzéséhez.
