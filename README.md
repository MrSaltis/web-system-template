# Valiutos keitiklis

## Aprašymas
- [ ] Ši sistema skirta pakeisti iš vienos valiutos į kitą valiutą, naudojantis šios dienos kursu.

## Valiutos kursas
- [ ] Base : iš kokios valiutos keičiama. [String, 3 char] 
- [ ] ID : į kokią valiutą keičiama. [String, 3 char]
- [ ] Rates : valiutos keitimo kursas. [float]
- [ ] Date : valiutos kurso data. [date]

## API definition
- [ ] Gauti valiutų keitimo kursus pagal :Base. Method: GET, api/kursas/:Base
- [ ] Gauti valiutų keitimo kursą pagal :Base į :ID.  Method: GET, api/kursas/:Base/:id
- [ ] Pridėti naują valiutą su kursais. Method: POST, api/kursas/
- [ ] Redaguoti turimą kursą :Base. Method: PUT, api/kursas/:Base
## UI aprašymas
- [ ] Sistema turi vieną langą, kuriame įrašome sumą, kurią konvertuosime į kitą valiutą ir paspaudus mygtuką "Convert!" suma konvertuojama.
- [ ] Paspaudus mygtuką "Kursai", ant lango išvedami visi kursai.
