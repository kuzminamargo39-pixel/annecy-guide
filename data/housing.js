/* Accommodation — content from the Annecy Guide document (section by Sergei).
   Amenity states: y = yes, n = no, s = shared, p = depends on room type,
   q = unconfirmed, qy = unconfirmed (most likely yes), qn = unconfirmed (most likely no). */
(function () {
  const L = (en, fr) => ({ en, fr: fr === undefined ? en : fr });
  const KITCHENETTE = L("Kitchenette (hob, microwave, fridge)", "Kitchenette (plaque, micro-ondes, frigo)");
  const PAID = L("paid", "payant");
  const EXTRA = L("extra cost", "en supplément");
  const FJT_FEES = [
    L("+150€ reservation fee (deducted from 1st month rent)", "+150 € de frais de réservation (déduits du 1er loyer)"),
    L("Fees for setting up a file (€22) and joining the association (€8/year)", "Frais de dossier (22 €) et adhésion à l'association (8 €/an)"),
    L("Wired and/or wifi internet access in rooms and studios (€10/month) + (€90 deposit not collected)", "Accès internet filaire et/ou wifi dans les chambres et studios (10 €/mois) + (dépôt de 90 € non encaissé)")
  ];

  window.HOUSING_DATA = {
    groups: [
      { id: "crous", label: L("CROUS public student residencies", "Résidences étudiantes publiques CROUS"), short: L("CROUS", "CROUS") },
      { id: "private", label: L("Private student residencies", "Résidences étudiantes privées"), short: L("Private", "Privées") },
      { id: "fjt", label: L("Young worker housing (FJT)", "Foyers jeunes travailleurs (FJT)"), short: L("Young worker (FJT)", "FJT"),
        intro: L("Foyers jeunes travailleurs house students, apprentices and young employees. Little is published online, needs checking directly with each residence.",
                 "Les foyers jeunes travailleurs logent des étudiants, des apprentis et de jeunes salariés. Peu d'informations sont publiées en ligne : il faut vérifier directement auprès de chaque résidence.") }
    ],
    amenityLabels: {
      furnished: L("Furnished", "Meublé"),
      ac: L("AC", "Climatisation"),
      kitchen: L("Own kitchen", "Cuisine privée"),
      bath: L("Own bathroom", "Salle de bain privée"),
      washer: L("Own washing machine", "Lave-linge privé"),
      laundry: L("Common laundry area", "Laverie commune"),
      parking: L("Parking", "Parking")
    },
    residences: [
      {
        id: "crous", group: "crous",
        name: "University Residences (CROUS) — Tom Morel / Simone Veil",
        links: [
          { label: L("USMB housing guide 2026–2027 (PDF)", "Guide logement USMB 2026–2027 (PDF)"), url: "https://www.univ-smb.fr/wp-content/uploads/2026/02/guide-logements-annecy-2026-2027.pdf" },
          { label: L("Tom Morel residence", "Résidence Tom Morel"), url: "https://www.crous-grenoble.fr/logement/residence-tom-morel/" },
          { label: L("Simone Veil residence", "Résidence Simone Veil"), url: "https://www.crous-grenoble.fr/logement/residence-simone-veil/" }
        ],
        priceFrom: 390,
        price: [L("390€ / month / room (including charges)", "390 € / mois / chambre (charges comprises)")],
        space: L("17–20 m²"),
        distanceKm: 1, distance: L("1 km"),
        eligibility: [
          L("Only 70 rooms available.", "Seulement 70 chambres disponibles."),
          L("Most of the rooms are reserved for students coming from outside of the EU.", "La plupart des chambres sont réservées aux étudiants venant de l'extérieur de l'UE."),
          L("Very low chances of getting a room for Erasmus students.", "Très peu de chances d'obtenir une chambre pour les étudiants Erasmus.")
        ],
        warning: true,
        age: L("28 years old", "28 ans"),
        amen: {
          furnished: ["y"], ac: ["n"], kitchen: ["y"], bath: ["y"], washer: ["n"], laundry: ["y"],
          parking: ["y", L("Tom Morel residence – also garage available for 18€/month", "Résidence Tom Morel – garage aussi disponible pour 18 €/mois")]
        }
      },
      {
        id: "chevron", group: "private",
        name: "Bernard Chevron (ex-Evires)",
        links: [{ label: L("residence-chevron.ideis.fr"), url: "https://www.residence-chevron.ideis.fr/en" }],
        priceFrom: 379,
        price: [L("379€ / month / room", "379 € / mois / chambre"), L("Additional fees for linen, dishes, refrigerated locker", "Frais supplémentaires pour le linge, la vaisselle, le casier réfrigéré")],
        space: L("14 m²"),
        distanceKm: 2, distance: L("2 km"),
        eligibility: [L("Students, trainees, work-study students, temporary employees", "Étudiants, stagiaires, alternants, salariés temporaires")],
        age: L("18–40 years old", "18–40 ans"),
        amen: { furnished: ["y"], ac: ["n"], kitchen: ["s"], bath: ["s"], washer: ["n"], laundry: ["y"], parking: ["y"] }
      },
      {
        id: "pre-saint-jean", group: "private",
        name: "Pré Saint Jean",
        links: [{ label: L("pre-saint-jean.fr"), url: "https://pre-saint-jean.fr/chambres-etudiantes-annecy/" }],
        priceFrom: 250,
        price: [L("250€ / month / room*", "250 € / mois / chambre*")],
        priceNote: L("* Amounts indicated after estimated deduction of APL, which may vary according to the situation of each person and the times or evolution of processing of the CAF. The residence cannot be held responsible for these variations.",
                     "* Montants indiqués après déduction estimée de l'APL, qui peut varier selon la situation de chacun et les délais ou l'évolution du traitement de la CAF. La résidence ne peut être tenue responsable de ces variations."),
        space: L("Approx. 12–14 m²", "Env. 12–14 m²"),
        distanceKm: 0.3, distance: L("300 m"),
        eligibility: [L("Young students in higher ed. and post-baccalaureate training", "Jeunes étudiants de l'enseignement supérieur et en formation post-bac")],
        age: L("18–20 years old", "18–20 ans"),
        amen: { furnished: ["y"], ac: ["n"], kitchen: ["s"], bath: ["y"], washer: ["n"], laundry: ["y"], parking: ["y", L("Parking garage available for additional fee", "Garage disponible en supplément")] }
      },
      {
        id: "louis-armand", group: "private",
        name: "Louis Armand (Villa Louis-Armand, Adoma)",
        links: [
          { label: L("Adoma page", "Page Adoma"), url: "https://www.adoma.cdc-habitat.fr/adoma/Loger-chez-Adoma/Je-cherche-un-logement/p-653-Residence-etudiante-Villa-Louis-Armand-a-Annecy-le-Vieux-74-.htm" },
          { label: L("France Travail listing", "Annonce France Travail"), url: "https://mes-aides.francetravail.fr/logement/trouver-un-logement-saisonnier-ou-temporaire/adoma/residence-adoma-louis-armand-" }
        ],
        priceFrom: 476,
        price: [L("476–632€ / month / studio (charges included?)", "476–632 € / mois / studio (charges comprises ?)")],
        space: L("18–30 m² (studios and T1)", "18–30 m² (studios et T1)"),
        distanceKm: 0, distance: L("On the Annecy-le-Vieux campus", "Sur le campus d'Annecy-le-Vieux"),
        eligibility: [L("Students and employees in mobility; ~208–210 units", "Étudiants et salariés en mobilité ; ~208–210 logements")],
        age: L("—"),
        amen: { furnished: ["y"], ac: ["qn"], kitchen: ["qn"], bath: ["qn"], washer: ["qn"], laundry: ["qy"], parking: ["qy"] }
      },
      {
        id: "airbel", group: "private",
        name: "Airbel",
        links: [
          { label: L("residence-airbel.com"), url: "https://www.residence-airbel.com/" },
          { label: L("Price sheet (2022)", "Grille tarifaire (2022)"), url: "https://www.ucly.fr/wp-content/uploads/2022/04/15-03-2022-airbel_ucly-annecy.pdf" }
        ],
        priceFrom: 535,
        price: [
          L("Studio 637€"), L("T1 580€"),
          L("Room in shared T3/T4 from 535–545€ / month, charges included", "Chambre en T3/T4 partagé à partir de 535–545 € / mois, charges comprises"),
          L("+150€ management fee", "+150 € de frais de gestion")
        ],
        space: L("Around 20–25 m² (studios and T1)", "Environ 20–25 m² (studios et T1)"),
        distanceKm: 3.5, distance: L("3.5 km"),
        eligibility: [L("Students and interns", "Étudiants et stagiaires")],
        age: L("—"),
        amen: {
          furnished: ["y", L("Bed linen, dishes, weekly light cleaning included", "Linge de lit, vaisselle et ménage léger hebdomadaire inclus")],
          ac: ["qn"],
          kitchen: ["p", L("Studio: yes · T1 shares kitchen with one other T1 · Shared in T3/T4", "Studio : oui · Le T1 partage la cuisine avec un autre T1 · Partagée en T3/T4")],
          bath: ["p", L("Studio and T1: yes · Shared in T3/T4", "Studio et T1 : oui · Partagée en T3/T4")],
          washer: ["qn"],
          laundry: ["y", EXTRA],
          parking: ["y", L("Outdoor parking included · covered parking for extra fee", "Parking extérieur inclus · parking couvert en supplément")]
        }
      },
      {
        id: "jean-monnet", group: "private",
        name: "Jean Monnet (IDEIS)",
        links: [
          { label: L("residencejeanmonnet.fr"), url: "https://residencejeanmonnet.fr/" },
          { label: L("Form'Toit listing", "Annonce Form'Toit"), url: "https://www.formtoit.org/listing/residence-etudiante-jean-monnet-annecy-74940/" }
        ],
        priceFrom: 523,
        price: [L("523–590€ / month, charges included (water, electricity, heating, internet)", "523–590 € / mois, charges comprises (eau, électricité, chauffage, internet)")],
        space: L("~20 m² studios (134) + 16 two-bedroom flats for flatsharing", "Studios d'environ 20 m² (134) + 16 appartements de deux chambres en colocation"),
        distanceKm: 2.2, distance: L("2.2 km"),
        eligibility: [L("Students and young people in training", "Étudiants et jeunes en formation")],
        age: L("—"),
        amen: {
          furnished: ["y"], ac: ["n"], kitchen: ["y", KITCHENETTE], bath: ["y"], washer: ["n"], laundry: ["y", EXTRA],
          parking: ["y", L("Free outdoor · underground for 10€/month", "Extérieur gratuit · souterrain pour 10 €/mois")]
        }
      },
      {
        id: "marquisats", group: "private",
        name: "Les Marquisats (IDEIS)",
        links: [
          { label: L("residence-marquisats.ideis.fr"), url: "https://www.residence-marquisats.ideis.fr/en" },
          { label: L("France Travail listing", "Annonce France Travail"), url: "https://mes-aides.francetravail.fr/logement/trouver-un-logement-saisonnier-ou-temporaire/haute-savoie-habitat/residence-ideis-andre-wogenscky" }
        ],
        priceFrom: 337.9,
        price: [
          L("Young worker studios: 337.90€ (room in 2-person shared studio)", "Studios jeunes travailleurs : 337,90 € (chambre en studio partagé à 2)"),
          L("421.90–598.50€ (20–30 m² studios, Marquisats)", "421,90–598,50 € (studios de 20–30 m², Marquisats)"),
          L("412.30–619.50€ (14–30 m² studios, Wogenscky)", "412,30–619,50 € (studios de 14–30 m², Wogenscky)")
        ],
        space: L("12–22 m² (12 m² – student rooms)", "12–22 m² (12 m² – chambres étudiantes)"),
        distanceKm: 4.8, distance: L("4.8 km"),
        eligibility: [L("Students, temporary workers", "Étudiants, travailleurs temporaires")],
        age: L("18–40 years old", "18–40 ans"),
        amen: {
          furnished: ["y"], ac: ["n"],
          kitchen: ["p", L("Studios: kitchenette (hob, microwave, fridge) · Student rooms: shared (one per floor)", "Studios : kitchenette (plaque, micro-ondes, frigo) · Chambres étudiantes : partagée (une par étage)")],
          bath: ["y"], washer: ["n"], laundry: ["y"],
          parking: ["y", L("Free parking near the residence, possibility to rent garage", "Parking gratuit près de la résidence, possibilité de louer un garage")]
        }
      },
      {
        id: "zenitude", group: "private",
        name: "Zenitude Les Hauts d'Annecy (Seynod)",
        links: [{ label: L("Zenitude student page", "Page étudiante Zenitude"), url: "https://www.zenitude-hotel-residences.com/fr_FR/espace-etudiant/annecy-les-hauts-d-annecy" }],
        priceFrom: 615,
        price: [L("615€ / month (charges included)", "615 € / mois (charges comprises)"), L("+150€ application fee", "+150 € de frais de dossier")],
        space: L("20 m² studios", "Studios de 20 m²"),
        distanceKm: 6.5, distance: L("6.5 km"),
        eligibility: [L("Student rate with valid student card; non-students pay more", "Tarif étudiant avec carte étudiante valide ; les non-étudiants paient plus")],
        age: L("—"),
        amen: {
          furnished: ["y", L("Sheets and towels provided", "Draps et serviettes fournis")], ac: ["n"], kitchen: ["y", KITCHENETTE], bath: ["y"], washer: ["n"],
          laundry: ["y", L("5€ wash, 3€ dryer", "5 € lavage, 3 € séchage")],
          parking: ["y", L("Free outside parking + free garage parking", "Parking extérieur gratuit + garage gratuit")]
        }
      },
      {
        id: "estudines", group: "private",
        name: "Les Estudines Pont Neuf (Cran-Gevrier)",
        links: [{ label: L("estudines.com"), url: "https://www.estudines.com/uk/student-housing-annecy/cran-gevrier/pont-neuf-residence" }],
        priceFrom: 653,
        price: [L("From 653€ / month (T1)", "À partir de 653 € / mois (T1)"), L("From 809€ (T2)", "À partir de 809 € (T2)"), L("Fees 234–338€ (T1)", "Frais 234–338 € (T1)")],
        space: L("18–26 m² (T1) · 29–42 m² (T2)"),
        distanceKm: 5, distance: L("~5 km"),
        eligibility: [L("Students and interns", "Étudiants et stagiaires")],
        age: L("—"),
        amen: { furnished: ["y", L("Sheets provided", "Draps fournis")], ac: ["n"], kitchen: ["y", KITCHENETTE], bath: ["y"], washer: ["n"], laundry: ["y"], parking: ["y", PAID] }
      },
      {
        id: "melitte", group: "fjt",
        name: "La Mélitte (AATES)",
        links: [
          { label: L("aates.org"), url: "https://aates.org/logements/la-melitte/" },
          { label: L("France Travail listing", "Annonce France Travail"), url: "https://mes-aides.francetravail.fr/logement/trouver-un-logement-saisonnier-ou-temporaire/aates/residence-aates-la-melitte-" }
        ],
        priceFrom: 532,
        price: [L("From 532€ / month (rent + charges + services)", "À partir de 532 € / mois (loyer + charges + services)")],
        space: L("20–30 m² (T1 and T1 bis)", "20–30 m² (T1 et T1 bis)"),
        distanceKm: 1.2, distance: L("1.2 km"),
        eligibility: [L("Social residence, 57 units", "Résidence sociale, 57 logements")],
        age: L("—"),
        amen: { furnished: ["y"], ac: ["n"], kitchen: ["y", KITCHENETTE], bath: ["y"], washer: ["n"], laundry: ["y", PAID], parking: ["y", PAID] }
      },
      {
        id: "tournette", group: "fjt",
        name: "La Tournette",
        address: "1 avenue du Rhône, Annecy",
        links: [{ label: L("residence-latournette.fr"), url: "http://residence-latournette.fr/?page_id=60" }],
        priceFrom: 403,
        price: [L("Studios 537–591€"), L("Rooms 403€", "Chambres 403 €"), L("Charges included", "Charges comprises")],
        space: L("13–27 m²"),
        distanceKm: 4.4, distance: L("4.4 km"),
        eligibility: [L("Students, young workers", "Étudiants, jeunes travailleurs")],
        age: L("18–25 years old", "18–25 ans"),
        amen: { furnished: ["y"], ac: ["n"], kitchen: ["y", KITCHENETTE], bath: ["y"], washer: ["n"], laundry: ["y", PAID], parking: ["y"] }
      },
      {
        id: "novel", group: "fjt",
        name: "Le Novel",
        address: "26 chemin du Maquis, Annecy",
        links: [{ label: L("fjtromainsnovel.fr"), url: "https://fjtromainsnovel.fr/fjt-novel/" }],
        priceFrom: 365,
        price: [L("Studios 519–535€"), L("Rooms 365€", "Chambres 365 €")].concat(FJT_FEES),
        space: L("13–19 m²"),
        distanceKm: 2.2, distance: L("2.2 km"),
        eligibility: [L("Students, employees and job seekers", "Étudiants, salariés et demandeurs d'emploi")],
        age: L("18–25 years old", "18–25 ans"),
        amen: {
          furnished: ["y"], ac: ["n"], kitchen: ["y", L("Studios – kitchenette (hob, microwave, fridge)", "Studios – kitchenette (plaque, micro-ondes, frigo)")],
          bath: ["y", L("Studios")], washer: ["n"], laundry: ["y", PAID], parking: ["q"]
        }
      },
      {
        id: "romains", group: "fjt",
        name: "Les Romains",
        address: "7 avenue des Iles, Annecy",
        links: [{ label: L("fjtromainsnovel.fr"), url: "https://fjtromainsnovel.fr/fjt-romains/" }],
        priceFrom: 397,
        price: [L("Studios 527€"), L("Rooms 397€", "Chambres 397 €")].concat(FJT_FEES),
        space: L("12–22 m²"),
        distanceKm: 3.7, distance: L("3.7 km"),
        eligibility: [L("Students, employees and job seekers", "Étudiants, salariés et demandeurs d'emploi")],
        age: L("18–25 years old", "18–25 ans"),
        amen: {
          furnished: ["y"], ac: ["n"], kitchen: ["y", L("Studios – kitchenette (hob, microwave, fridge)", "Studios – kitchenette (plaque, micro-ondes, frigo)")],
          bath: ["y", L("Studios")], washer: ["n"], laundry: ["y", PAID], parking: ["q"]
        }
      }
    ],
    listings: {
      title: L("Other listing sites", "Autres sites d'annonces"),
      facebook: {
        name: L("Facebook Annecy group", "Groupe Facebook Annecy"),
        desc: L("Many past exchange students found apartments and rooms to rent here for the length of their exchange. Landlords and departing students post sublets and flatshare rooms, often timed to the semester.",
                "Beaucoup d'anciens étudiants en échange y ont trouvé un appartement ou une chambre pour la durée de leur séjour. Propriétaires et étudiants sur le départ y publient des sous-locations et des chambres en colocation, souvent calées sur le semestre.")
      },
      lea: {
        name: L("Logement Étudiant Annecy (LEA)"), url: "https://www.logement-etudiant-annecy.fr/",
        desc: L("The city's free site for furnished rentals from private landlords", "Le site gratuit de la ville pour les locations meublées de propriétaires privés")
      },
      groups: [
        { label: L("Flatshares and rooms", "Colocations et chambres"), links: [
          { name: "Coup de Pouce", url: "https://regiecoupdepouce.com/je-cherche-une-chambre/" },
          { name: "Colibree", url: "https://www.colibree.fr/" }
        ] },
        { label: L("General listings", "Annonces générales"), links: [
          { name: "Leboncoin", url: "https://www.leboncoin.fr/" },
          { name: "ImmoJeune", url: "https://www.immojeune.com/logement-etudiant/annecy-74.html" },
          { name: "LocService", url: "https://www.locservice.fr/haute-savoie-74/location-particulier-annecy.html" }
        ] }
      ]
    },
    budget: {
      title: L("Before you move in: what to budget and plan for", "Avant d'emménager : budget et démarches"),
      items: [
        { id: "deposit", title: L("Security deposit", "Dépôt de garantie"),
          text: L("Most landlords ask for a deposit, usually about one month's rent. You'll get it back when you move out, as long as you leave the accommodation in the same condition you found it.",
                  "La plupart des propriétaires demandent un dépôt de garantie, généralement d'environ un mois de loyer. Il vous est rendu à votre départ, à condition de laisser le logement dans l'état où vous l'avez trouvé.") },
        { id: "insurance", title: L("Home insurance (mandatory)", "Assurance habitation (obligatoire)"),
          text: L("Whatever type of accommodation you rent, you must have home insurance. It covers damage such as fire, explosions, and water leaks. You can buy a policy from a bank or an insurance company, such as StudyAssur, ADH Assurances, Luko by Allianz Direct, or MAIF.",
                  "Quel que soit le type de logement, vous devez avoir une assurance habitation. Elle couvre les dommages comme l'incendie, les explosions et les dégâts des eaux. Vous pouvez souscrire auprès d'une banque ou d'un assureur, par exemple StudyAssur, ADH Assurances, Luko by Allianz Direct ou MAIF."),
          important: L("The school requires your policy to include civil liability coverage (responsabilité civile). This covers accidental damage you cause to other people, for example breaking someone's glasses. Make sure this option is included when you sign up.",
                       "L'école exige que votre contrat inclue la responsabilité civile. Elle couvre les dommages accidentels que vous causez à autrui, par exemple casser les lunettes de quelqu'un. Vérifiez que cette option est incluse lors de la souscription."),
          importantLabel: L("Important", "Important") },
        { id: "guarantor", title: L("Rent guarantor", "Garant"),
          text: L("Most landlords and rental agencies will ask for a guarantor, someone who agrees to pay your rent if you can't. In France, students usually ask a parent. If you don't have family or close friends in France who can do this, the French government offers a free alternative for students aged 18 to 30 (inclusive): VISALE.",
                  "La plupart des propriétaires et agences demandent un garant, c'est-à-dire une personne qui s'engage à payer votre loyer si vous ne pouvez pas. En France, les étudiants demandent généralement à un parent. Si vous n'avez ni famille ni proches en France pour le faire, l'État propose une alternative gratuite pour les étudiants de 18 à 30 ans inclus : VISALE."),
          link: { label: "www.visale.fr", url: "https://www.visale.fr/#!/visale.locataire" } },
        { id: "utilities", title: L("Utilities and other costs", "Charges et autres frais"),
          text: L("Depending on your accommodation, remember to budget for electricity, water, gas, and/or internet, as these may not be included in the rent.",
                  "Selon votre logement, prévoyez un budget pour l'électricité, l'eau, le gaz et/ou internet, qui ne sont pas toujours inclus dans le loyer.") }
      ]
    }
  };
})();
