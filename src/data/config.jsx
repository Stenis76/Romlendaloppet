export const CONFIG = {
  eventDate: "22 augusti 2026",
  eventLocation: "Gunnars äng, Romelanda (Diseröd)",
  eventTime: "Kl 10–14",
  registrationUrl: "https://forms.gle/84LgLtXCx37ZLwBc7",
  registrationDeadline: "Torsdag 20 augusti",
  contactEmail: "romelandaloppet@gmail.com",
  organizer: "RUF P-14 · Romelanda UF",

  socials: {
    facebook: "https://www.facebook.com/groups/1919682515126062",
    instagram: "https://www.instagram.com/romelandauf_p14/"
  },

  slides: [
    {
      badge: "22 AUGUSTI 2026",
      titleLine1: "ROMELANDA",
      titleLine2: "LOPPET",
      subtitle: "Gunnars äng · Romelanda · Kl 10–14",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: "Läs mer",
      secondaryButtonLink: "#kategorier",
      bgImage: `${import.meta.env.BASE_URL}assets/bollkastning.jpeg`
    },
    {
      badge: "FÖR HELA FAMILJEN",
      titleLine1: "FYRA",
      titleLine2: "LOPP",
      subtitle: "250 m · 2 km · 3,5 km · 6,5 km",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: null,
      bgImage: `${import.meta.env.BASE_URL}assets/vinnare.JPG`
    },
    {
      badge: "PRISER & LOTTERI",
      titleLine1: "TÄVLA",
      titleLine2: "& VINN",
      subtitle: "Fika · Aktiviteter · Gemenskap",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: null,
      bgImage: `${import.meta.env.BASE_URL}assets/löpning.jpeg`
    },
    {
      badge: "ARRANGÖR",
      titleLine1: "Romelanda UF",
      titleLine2: "Pojkar - födda 2014",
      subtitle: "Förtjänsten går oavkortat till killarnas lagkassa",
      primaryButtonText: "Anmäl dig här →",
      secondaryButtonText: "Läs mer",
      secondaryButtonLink: "#historia",
      bgImage: `${import.meta.env.BASE_URL}assets/flagga.jpeg`
    }
  ],

  history: {
    subtitle: "Varför vi gör detta",
    content: [
      "Romelandaloppet startades som ett initiativ av föräldragruppen i Romelanda UF Pojkar-14. Vårt mål är att samla in pengar till lagkassan, samtidigt som vi vill skapa en riktig folkfest för hela bygden.",
      "Vi hade helt ärligt tröttnat på att sälja strumpor och lotter, vi kände att vi vill göra något kul tillsammans istället där alla är barn och föräldrar är engagerade, så då kom vi på att ett motionslopp där alla – oavsett ålder och fysisk form – kan delta. ",
      "Varenda krona i överskott går direkt tillbaka till grabbarna i laget för att finansiera framtida cuper, träningsläger och utrustning. Genom att springa Romelandaloppet gör du inte bara något bra för din egen hälsa, du stöttar också den lokala ungdomsidrotten!"
    ]
  },

  infoStats: [
    { label: "Startkategorier", value: "4" },
    { label: "Åldrar välkomna", value: "0–99+" },
    { label: "Sista anmälan", value: "20 aug" },
    { label: "Arrangör", value: "RUF P-14" }
  ],

  races: [
    {
      id: "knatte",
      name: "Knatteloppet",
      age: "0–6 år",
      distance: "250 m",
      start: "10:00",
      type: "Jogga med vår maskot",
      price: "50 kr",
      featured: false
    },
    {
      id: "junior",
      name: "Juniorloppet",
      age: "7–12 år",
      distance: "2 km",
      start: "10:30 masstart",
      type: "Jogga i din egen takt, alla kan var med",
      price: "50 kr",
      featured: false
    },
    {
      id: "lilla",
      name: "Lilla loppet",
      age: "Ungdom/vuxen",
      distance: "3,5 km",
      start: "11:30 masstart",
      type: "Promenad eller jogg",
      price: "150 kr",
      featured: false
    },
    {
      id: "stora",
      name: "Stora loppet",
      age: "Ungdom/vuxen",
      distance: "6,5 km",
      start: "12:30 nivåstart",
      type: "Motionär och elit",
      price: "150 kr",
      featured: true
    }
  ],

  schedule: [
    { time: "10:00", name: "Knatteloppet", detail: "250 m · Uppvärmning med maskot 09:45 · Masstart" },
    { time: "10:30", name: "Juniorloppet", detail: "2 km · Masstart" },
    { time: "11:30", name: "Lilla loppet", detail: "3,5 km · Nivåstart - löpning och promenad" },
    { time: "12:30", name: "Stora loppet", detail: "6,5 km · Nivåstart - motionär och elit" },
    { time: "~14:00", name: "Prisutdelning & avslutning", detail: "Lotteri, priser och firande" }
  ],

  practicalInfo: [
    {
      title: "Plats",
      desc: "Gunnars äng, Romelanda (Diseröd)",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>,
      mapUrl: "https://www.google.com/maps/search/?api=1&query=57.924942,12.022068"
    },
    {
      title: "Sista anmälan",
      desc: "Torsdag 20 aug — Efteranmälan på plats +50 kr (vuxen), +25 kr (barn/junior)",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
    },
    {
      title: "På plats",
      desc: "Fika, aktiviteter och lotteri",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
    },
    {
      title: "Kontakt",
      desc: "romelandaloppet@gmail.com",
      icon: <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-0.9-2-2V6c0-1.1 0.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
    }
  ],

  sponsors: [
    {
      name: "Renta",
      logoUrl: `${import.meta.env.BASE_URL}assets/renta.png`,
      website: "https://www.renta.se"
    },
    {
      name: "GÖSAB",
      logoUrl: `${import.meta.env.BASE_URL}assets/logga gosab.png`,
      website: "#"
    },
    {
      name: "Sponsor 3",
      logoUrl: "https://placehold.co/300x120/transparent/666666?text=SPONSOR+3",
      website: "#"
    }
  ]
};
