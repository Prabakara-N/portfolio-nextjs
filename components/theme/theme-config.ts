export type ThemeType =
  | "cyber-neon"
  | "midnight-aurora"
  | "emerald-gold"
  | "ocean-depths"
  | "cosmic-purple";

export interface ThemeInfo {
  id: ThemeType;
  name: string;
  description: string;
  colors: {
    primary: string;
    secondary: string;
    background: string;
  };
}

export const themes: ThemeInfo[] = [
  {
    id: "cyber-neon",
    name: "Cyber Neon",
    description: "Cyan & magenta neon vibes",
    colors: {
      primary: "#00d4ff",
      secondary: "#ff00ff",
      background: "#0f0f1a",
    },
  },
  {
    id: "midnight-aurora",
    name: "Midnight Aurora",
    description: "Green & purple aurora lights",
    colors: {
      primary: "#00ff88",
      secondary: "#8b5cf6",
      background: "#0a0f0d",
    },
  },
  {
    id: "emerald-gold",
    name: "Emerald Gold",
    description: "Emerald green & gold",
    colors: {
      primary: "#10b981",
      secondary: "#fbbf24",
      background: "#0a1210",
    },
  },
  {
    id: "ocean-depths",
    name: "Ocean Depths",
    description: "Deep blue & teal waves",
    colors: {
      primary: "#0ea5e9",
      secondary: "#14b8a6",
      background: "#0a1520",
    },
  },
  {
    id: "cosmic-purple",
    name: "Cosmic Purple",
    description: "Purple & pink galaxy",
    colors: {
      primary: "#a855f7",
      secondary: "#ec4899",
      background: "#0f0a15",
    },
  },
];

export const getThemeById = (id: ThemeType): ThemeInfo | undefined => {
  return themes.find((t) => t.id === id);
};
