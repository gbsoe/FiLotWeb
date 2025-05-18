import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Scroll to an element with an offset (for navbar)
export function scrollToElement(id: string, offset: number = 0) {
  const element = document.getElementById(id);
  if (element) {
    const y = element.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
  }
}

// Check if an element is in viewport (for animations)
export function isInViewport(el: HTMLElement, offset = 150) {
  const rect = el.getBoundingClientRect();
  return (
    rect.top + offset <= (window.innerHeight || document.documentElement.clientHeight) &&
    rect.bottom >= 0
  );
}

// Format number with commas for thousands
export function formatNumber(num: number): string {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

// Format percentage
export function formatPercent(num: number): string {
  return num.toFixed(1) + "%";
}
