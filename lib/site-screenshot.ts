import { encode } from "qss";

interface ScreenshotOptions {
  width?: number;
  height?: number;
  isMobile?: boolean;
}

/**
 * Microlink screenshot URL for a website (the same service LinkPreview uses).
 * Keep options identical across callers so each site is captured once and
 * served from Microlink's cache.
 */
export function siteScreenshotUrl(
  url: string,
  { width = 1280, height = 800, isMobile = false }: ScreenshotOptions = {}
): string {
  const params = encode({
    url,
    screenshot: true,
    meta: false,
    embed: "screenshot.url",
    colorScheme: "dark",
    "viewport.isMobile": isMobile,
    "viewport.deviceScaleFactor": 1,
    "viewport.width": width,
    "viewport.height": height,
  });
  return `https://api.microlink.io/?${params}`;
}
