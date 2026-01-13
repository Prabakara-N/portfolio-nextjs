export type ThemeType =
  | "cyber-neon"
  | "midnight-aurora"
  | "navy-mirage"
  | "ocean-depths"
  | "cosmic-purple"
  | "arctic-frost";

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
    id: "navy-mirage",
    name: "Navy Mirage",
    description: "Deep navy & steel blue",
    colors: {
      primary: "#3F5E96",
      secondary: "#141E30",
      background: "#141E30",
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
  {
    id: "arctic-frost",
    name: "Arctic Frost",
    description: "Glacier blue & soft lavender",
    colors: {
      primary: "#88c0d0",
      secondary: "#b48ead",
      background: "#2e3440",
    },
  },
];

export const getThemeById = (id: ThemeType): ThemeInfo | undefined => {
  return themes.find((t) => t.id === id);
};
