import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Track Meta Pixel events safely
 * @param eventName The name of the event to track (e.g., 'InitiateCheckout', 'Lead', 'Download')
 */
export function trackPixelEvent(eventName: string): void {
  if (typeof window !== 'undefined' && window.fbq) {
    window.fbq('track', eventName);
  }
}
