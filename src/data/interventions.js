export const interventions = [
    {
    id: 1,
    slug: "events-for-milestones",
    title: "Community Events for Transit Milestones",
    tagline: "Comfortable, attractive stops that people want to use",
    description: "Upgraded shelters with seating, lighting, real-time information, and weather protection transform the waiting experience and signal investment in quality transit.",
    benefits: [
      "Improves comfort and safety",
      "Increases perceived service quality",
      "Provides advertising revenue opportunities",
      "Enhances neighborhood appeal"
    ],
    implementation: "Prioritize high-ridership stops and areas with longer wait times. Partner with advertising companies for funding. Include amenities like USB charging and wifi where feasible.",
    examples: [
      "Seattle Metro shelters",
      "San Francisco Muni stops",
      "Denver RTD stations"
    ],
    cardimage: "/images/milestone-events-1.jpg",
    images: [
      "/images/milestone-events-1.jpg",
    ],    category: "Celebration"
  },
  {
    id: 2,
    slug: "limited-transit-cards",
    title: "Limited Edition Transit Cards",
    tagline: "Let riders know exactly when their bus arrives",
    description: "Digital displays at stops showing live arrival times reduce uncertainty and perceived wait times. Riders feel more in control and informed about their journey.",
    benefits: [
      "Reduces perceived wait time",
      "Improves rider satisfaction",
      "Builds trust in the system",
      "Enables better trip planning"
    ],
    implementation: "Install digital displays at high-traffic stops first. Integrate with your real-time tracking system. Ensure displays are visible in all weather and lighting conditions.",
    examples: [
      "TTC, Toronto - Next Vehicle screens",
      "London TfL Countdown",
      "NYC MTA Bus Time"
    ],
    cardimage: "/images/cards-4.png",
    images: [
      "/images/cards-4.png",
      "/images/cards-1.jpg",
      "/images/cards-2.png",
      "/images/cards-3.png",
    ],
    category: "Celebration"
  },
  {
    id: 3,
    slug: "branded-bus-network",
    title: "Branded Bus Network",
    tagline: "Create a distinct identity for frequent routes",
    description: "Rebrand your frequent routes with unique colors, logos, and upgraded vehicles. A strong brand makes transit feel premium and easier to understand.",
    benefits: [
      "Makes system easier to navigate",
      "Creates premium perception",
      "Increases visibility and awareness",
      "Builds civic pride"
    ],
    implementation: "Identify your most frequent routes (10-15 minute headways). Develop distinctive branding including vehicle wraps, stop design, and wayfinding. Launch with marketing campaign.",
    examples: [
      "Seattle RapidRide",
      "San Francisco Muni Metro",
      "Boston Silver Line"
    ],
    cardimage: "/images/icecream.png",
    images: [
      "/images/icecream.png",
    ],    category: "Education"
  },
  {
    id: 4,
    slug: "transit-signal-priority",
    title: "Transit Signal Priority",
    tagline: "Give buses the green light to keep moving",
    description: "TSP systems detect approaching buses and extend green lights or shorten red lights, reducing delays at intersections without significantly impacting other traffic.",
    benefits: [
      "Reduces travel time by 10-20%",
      "Improves schedule adherence",
      "Cost-effective Celebration upgrade",
      "Minimal impact on other traffic"
    ],
    implementation: "Start with key corridors with signal timing issues. Requires GPS on vehicles and traffic signal integration. Coordinate with traffic engineering departments.",
    examples: [
      "Portland TriMet",
      "Minneapolis Metro Transit",
      "Phoenix Valley Metro"
    ],
    cardimage: "/images/icecream.png",
    images: [
      "/images/icecream.png",
    ],    category: "Empowerment"
  },
  {
    id: 5,
    slug: "bus-wraps",
    title: "Bus Wraps",
    //tagline: "Priority lanes for faster, more reliable service",
    description: "Dedicated bus lanes separate buses from general traffic, dramatically improving speed and reliability. This visible commitment to transit shows riders that their time matters.",
    benefits: [
      "Reduces travel time by 20-40%",
      "Improves schedule reliability",
      "Increases ridership",
      "Demonstrates commitment to transit"
    ],
    implementation: "Start with high-traffic corridors during peak hours. Use clear pavement markings and signage. Consider protected lanes with physical barriers for maximum effectiveness.",
    examples: [
      "TransLink, Vancouver - 99 B-Line",
      "LA Metro Rapid",
      "Bogotá TransMilenio"
    ],
    cardimage: "/images/buswrap-5.jpg",
    images: [
      "/images/buswrap-5.jpg",
      "/images/buswrap-1.jpg",
      "/images/buswrap-2.jpeg",
      "/images/buswrap-3.png",
      "/images/buswrap-4.jpg",
      "/images/buswrap-7.png",
      "/images/buswrap-8.png",
      "/images/buswrap-9.jpg",
    ],
    category: "Celebration"
  },
  {
    id: 6,
    slug: "all-door-boarding",
    title: "All-Door Boarding",
    tagline: "Speed up boarding and reduce dwell time",
    description: "Allow passengers to board through any door, not just the front. This simple change dramatically reduces dwell time at busy stops and speeds up the entire route.",
    benefits: [
      "Reduces dwell time by 30-50%",
      "Speeds up overall route time",
      "Improves passenger flow",
      "Works well with proof-of-payment systems"
    ],
    implementation: "Requires fare validation system or proof-of-payment. Install validators at all doors. Train staff on new procedures. Start with high-frequency routes.",
    examples: [
      "San Francisco Muni",
      "LA Metro Rapid",
      "TransLink Vancouver"
    ],
    cardimage: "/images/icecream.png",
    images: [
      "/images/icecream.png",
    ],    category: "Integration"
  }
];

export const categories = [
  "Celebration",
  "Empowerment", 
  "Education",
  "Integration"
];