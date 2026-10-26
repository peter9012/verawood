export interface CareItem {
  title: string;
  body: string;
}

export interface CareCondition {
  condition: string;
  range: string;
  outside: string;
}

export const CARE_UPDATED = "August 7, 2026";

export const CLEANING_DO: CareItem[] = [
  {
    title: "Sweep or dry-dust daily",
    body: "Use a soft-bristle broom or microfiber dust mop to lift loose dirt, dust, and pet hair. No habit prevents more scratches.",
  },
  {
    title: "Vacuum weekly",
    body: "Choose a hard-floor setting or soft brush attachment — never a beater bar. Pay attention to edges and corners, where grit collects.",
  },
  {
    title: "Damp mop as needed",
    body: "Use a well-wrung microfiber mop with a cleaner made for hardwood. The mop should be barely damp, never wet.",
  },
];

export const CLEANING_AVOID: CareItem[] = [
  {
    title: "Wet mops and steam cleaners",
    body: "Standing water and steam work into the wood and can cause cupping, warping, and finish damage.",
  },
  {
    title: "Harsh chemicals",
    body: "Oil-based soaps, vinegar, bleach, and general-purpose cleaners wear down the finish and leave a dulling residue.",
  },
  {
    title: "Wax",
    body: "Prefinished floors don't need waxing, and wax can make future recoating or refinishing more difficult.",
  },
];

export const CLIMATE: CareCondition[] = [
  {
    condition: "Indoor humidity",
    range: "35% – 55% relative humidity",
    outside: "Below 35%: gaps, checking, and cupping. Above 55%: swelling, buckling, and warping.",
  },
  {
    condition: "Indoor temperature",
    range: "60°F – 80°F (15°C – 27°C)",
    outside: "Sharp swings make boards expand and contract, stressing joints and the finish.",
  },
  {
    condition: "Seasonal variation",
    range: "Normal within range",
    outside: "Humidify in winter; use air conditioning or a dehumidifier in summer to stay in range.",
  },
];

export const SCRATCH_PREVENTION: CareItem[] = [
  {
    title: "Felt pads on furniture legs",
    body: "Replace them every 6 to 12 months, as they compress and pick up grit. Hard plastic feet are a leading cause of finish scratches.",
  },
  {
    title: "Rugs in high-traffic areas",
    body: "Entries, hallways, and kitchen work zones benefit most. Choose a hardwood-safe, non-slip backing — rubber can discolor the finish over time.",
  },
  {
    title: "Shoes off at the door",
    body: "High heels and cleats concentrate weight on a small point and can dent even durable finishes.",
  },
  {
    title: "Trimmed pet nails",
    body: "Regular trimming greatly reduces surface scratching from pets.",
  },
  {
    title: "Lift, never drag",
    body: "Move heavy furniture and appliances with sliders or a dolly rather than pushing them across the floor.",
  },
];

export const SPILL_STEPS: CareItem[] = [
  {
    title: "Blot immediately",
    body: "Use a clean, dry cloth and blot rather than wipe, working from the outside of the spill toward the center.",
  },
  {
    title: "Clean if needed, then dry",
    body: "For sticky or staining spills, use a barely damp cloth with a little hardwood cleaner, then dry the area straight away.",
  },
  {
    title: "Never let liquid sit",
    body: "Even a few minutes of standing water can affect the finish. Moisture that reaches an engineered core can lead to delamination over time.",
  },
];

export const SEASONAL: { season: string; items: CareItem[] }[] = [
  {
    season: "Winter",
    items: [
      {
        title: "Watch humidity",
        body: "Heating dries indoor air. A whole-house or room humidifier keeps levels in range and prevents gaps and checking.",
      },
      {
        title: "Mats at every entrance",
        body: "Snow, salt, and slush are especially hard on finishes. Change doormats often and keep them dry.",
      },
    ],
  },
  {
    season: "Summer",
    items: [
      {
        title: "Control humidity",
        body: "Humid air makes wood expand. Air conditioning keeps levels in range and helps prevent swelling and buckling.",
      },
      {
        title: "Shade sunlit rooms",
        body: "Prolonged UV exposure fades and shifts the color of wood. Blinds, curtains, or UV-filtering film slow the change.",
      },
    ],
  },
];

export const PROFESSIONAL: CareItem[] = [
  {
    title: "Deep scratches and gouges",
    body: "Light surface scratches can often be treated with a touch-up kit matched to the finish. Anything that reaches through the wear layer needs a professional assessment.",
  },
  {
    title: "Cupping or buckling",
    body: "Boards that lift, cup, or separate usually signal a moisture problem. A professional can find the source and advise whether the floor can be dried and restored.",
  },
  {
    title: "Finish refresh",
    body: "When the finish looks dull or worn across a wide area, a screen-and-recoat adds a fresh coat without removing any of the wear layer.",
  },
  {
    title: "Full refinishing",
    body: "Engineered floors can only be sanded as far as the wear layer allows. Contact us and consult a qualified installer before any sanding.",
  },
];
