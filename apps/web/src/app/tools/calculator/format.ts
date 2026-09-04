/**
 * One decimal everywhere, so the same share never appears as both "23%" and "22.9%" on one screen.
 */
export const formatPercent = (share: number): string => `${share.toFixed(1)}%`;
