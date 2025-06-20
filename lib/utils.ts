import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// convert a prisma object into a regular js object
export function convertToPlainObject<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

// Format number with decimal places
export function formatNumberWithDecimal(num: number): string {
  const [intValue, decimalVal] = num.toString().split('.');
  return decimalVal
    ? `${intValue}.${decimalVal.padEnd(2, '0')}`
    : `${intValue}.00`;
}
