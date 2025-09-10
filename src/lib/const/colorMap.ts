import { CCLPastelColor, CCLVividColor } from './config';

// Pastel -> Vivid CSS variable mapping
export const pastelToVividMap: Record<string, string> = {
  [CCLPastelColor.PEACH_PINK]: CCLVividColor.STRAWBERRY_PINK,
  [CCLPastelColor.LEMON_YELLOW]: CCLVividColor.PINEAPPLE_YELLOW,
  [CCLPastelColor.SUGAR_BLUE]: CCLVividColor.SODA_BLUE,
  [CCLPastelColor.MATCHA_GREEN]: CCLVividColor.MELON_GREEN,
  [CCLPastelColor.AKEBI_PURPLE]: CCLVividColor.GRAPE_PURPLE,
  [CCLPastelColor.CLOUD_GREY]: CCLVividColor.WRAP_GREY
};

/** Returns the vivid counterpart for a given color var if it's pastel; otherwise undefined. */
export function vividFor(colorVar: string | undefined): string | undefined {
  if (!colorVar) return undefined;
  return pastelToVividMap[colorVar as string];
}

/** Whether the provided CSS var corresponds to a known pastel color. */
export function isPastel(colorVar: string | undefined): boolean {
  return !!colorVar && Object.prototype.hasOwnProperty.call(pastelToVividMap, colorVar);
}
