export interface WeddingEvent {
  id: string;
  name: string;
  teluguName?: string;
  date: string;
  time: string;
  venue: string;
  description?: string;
  image?: string;
  badge?: string;
}

export interface GalleryPhoto {
  id: number;
  src: string;
  title: string;
  caption: string;
  alt: string;
}

export interface WeddingConfig {
  couple: {
    groom: {
      name: string;
      fullName: string;
      teluguName?: string;
      parents: string;
      description?: string;
      image: string;
    };
    bride: {
      name: string;
      fullName: string;
      teluguName?: string;
      parents: string;
      description?: string;
      image: string;
    };
  };
  weddingDetails: {
    dateDisplay: string;
    dateFull: string;
    isoDateTime: string; // Used for countdown
    muhurthamTime: string;
    lagnam: string;
    invitationGreeting: string;
    traditionalBlessing: string;
    teluguBlessing: string;
  };
  events: WeddingEvent[];
  gallery: GalleryPhoto[];
  venue: {
    name: string;
    hall: string;
    address: string;
    city: string;
    state: string;
    pinCode: string;
    directionsUrl: string;
    mapQuery: string;
  };
  rsvp: {
    enabled: boolean;
    contactPhone?: string;
    deadline?: string;
  };
  music: {
    enabled: boolean;
    title: string;
    artist: string;
  };
}

export const weddingConfig: WeddingConfig = {
  couple: {
    groom: {
      name: "Karthik",
      fullName: "Venkata Karthik",
      teluguName: "కార్తీక్",
      parents: "Son of Smt. Padmavathi & Sri Srinivasa Murthy",
      description: "A passionate software engineer with a love for traditional values, classical carnatic music, and family gatherings.",
      image: "/images/groom.svg",
    },
    bride: {
      name: "Sravya",
      fullName: "Lakshmi Sravya",
      teluguName: "శ్రావ్య",
      parents: "Daughter of Smt. Rama & Sri Venkata Subba Rao",
      description: "An accomplished architect, trained Kuchipudi dancer, and lover of South Indian art, culture, and nature.",
      image: "/images/bride.svg",
    },
  },
  weddingDetails: {
    dateDisplay: "Sunday, November 29, 2026",
    dateFull: "29th Day of November, Two Thousand Twenty-Six",
    isoDateTime: "2026-11-29T10:24:00+05:30",
    muhurthamTime: "10:24 AM",
    lagnam: "Dhanur Lagnam Sumuhurtham",
    traditionalBlessing: "With the divine blessings of Lord Sri Venkateswara Swamy and our revered elders",
    teluguBlessing: "శ్రీరస్తు • శుభమస్తు • అవిఘ్నమస్తు",
    invitationGreeting: "Together with their families, cordially invite your gracious presence and blessings on the auspicious occasion of the wedding ceremony of their children",
  },
  events: [
    {
      id: "pellikuthuru",
      name: "Pellikuthuru & Mangala Snanam",
      teluguName: "పెళ్ళికూతురు & మంగళస్నానం",
      date: "Friday, Nov 27, 2026",
      time: "09:00 AM onwards",
      venue: "Sri Krishna Grand Banquet, Hyderabad",
      badge: "Traditional Ceremony",
      description: "The traditional ceremony where the bride is anointed with fragrant turmeric, sandalwood paste, and blessed by elder women.",
      image: "/images/event-haldi.svg",
    },
    {
      id: "snathakam",
      name: "Snathakam & Varapuja",
      teluguName: "స్నాతకం & వరపూజ",
      date: "Saturday, Nov 28, 2026",
      time: "04:30 PM",
      venue: "Veda Kalyana Mandapam, Gachibowli, Hyderabad",
      badge: "Sacred Ritual",
      description: "Sacred ritual signifying the groom's readiness for marriage, followed by ceremonial welcoming of the groom's family.",
      image: "/images/event-ritual.svg",
    },
    {
      id: "muhurtham",
      name: "Lagna Sumuhurtham",
      teluguName: "లగ్న సుముహూర్తం",
      date: "Sunday, Nov 29, 2026",
      time: "10:24 AM (Kanya Lagnam)",
      venue: "Sri Venkateswara Kalyana Mandapam, Jubilee Hills, Hyderabad",
      badge: "Main Ceremony",
      description: "The sacred union solemnized with Jeelakarra Bellam, Mangalasutra Dharana, and holy Saptapadi around the sacred fire.",
      image: "/images/event-muhurtham.svg",
    },
    {
      id: "reception",
      name: "Wedding Reception",
      teluguName: "వివాహ విందు",
      date: "Sunday, Nov 29, 2026",
      time: "07:00 PM onwards",
      venue: "The Royal Palace Lawns, Madhapur, Hyderabad",
      badge: "Celebration",
      description: "An evening of celebration, congratulations, live traditional nadaswaram music, and a grand traditional Andhra feast.",
      image: "/images/event-reception.svg",
    },
  ],
  gallery: [
    {
      id: 1,
      src: "/images/gallery-1.svg",
      title: "Sacred Pre-Wedding Moments",
      caption: "Cherished smiles amidst the temple bells and morning sunlight.",
      alt: "Couple smiling together in traditional attire",
    },
    {
      id: 2,
      src: "/images/gallery-2.svg",
      title: "The Auspicious Gold Silk",
      caption: "Intricate Kanjeevaram weaves adorned with pure zari artistry.",
      alt: "Traditional silk attire and gold jewelry details",
    },
    {
      id: 3,
      src: "/images/gallery-3.svg",
      title: "Floral Elegance",
      caption: "Fragrant jasmine veni and marigold garlands woven with love.",
      alt: "Bride wearing fragrant jasmine flowers and traditional ornaments",
    },
    {
      id: 4,
      src: "/images/gallery-4.svg",
      title: "Joyous Traditions",
      caption: "Traditional brass kuthuvilakku lighting the way to new beginnings.",
      alt: "Couple lighting traditional brass lamps together",
    },
    {
      id: 5,
      src: "/images/gallery-5.svg",
      title: "Warm Blessings",
      caption: "Elder hands bestowing sacred akshintalu and eternal happiness.",
      alt: "Family blessing ceremony with holy rice grains",
    },
    {
      id: 6,
      src: "/images/gallery-6.svg",
      title: "Serene Togetherness",
      caption: "Quiet laughter and promises under the shaded temple mandapam.",
      alt: "Couple walking together in traditional heritage surroundings",
    },
    {
      id: 7,
      src: "/images/gallery-7.svg",
      title: "Celebration of Colors",
      caption: "Vibrant turmeric yellow, deep vermilion, and auspicious kumkum.",
      alt: "Traditional puja thali with turmeric and auspicious items",
    },
    {
      id: 8,
      src: "/images/gallery-8.svg",
      title: "Eternal Journey",
      caption: "Two souls, two families, stepping together onto a sacred lifelong path.",
      alt: "Couple holding hands in reverence with auspicious garlands",
    },
  ],
  venue: {
    name: "Sri Venkateswara Kalyana Mandapam",
    hall: "Grand Rajarajeswari AC Hall",
    address: "Road No. 36, Jubilee Hills, Near Peddamma Temple",
    city: "Hyderabad",
    state: "Telangana",
    pinCode: "500033",
    directionsUrl: "https://maps.google.com/?q=Peddamma+Temple+Jubilee+Hills+Hyderabad",
    mapQuery: "Peddamma+Gudi+Jubilee+Hills+Hyderabad",
  },
  rsvp: {
    enabled: true,
    contactPhone: "+91 98765 43210",
    deadline: "November 20, 2026",
  },
  music: {
    enabled: true,
    title: "Seetha Kalyana Vaibhogame (Nadaswaram & Veena)",
    artist: "Traditional Carnatic Wedding Melodies",
  },
};
