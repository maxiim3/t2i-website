import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Utility function to merge Tailwind CSS classes with proper conflict resolution.
 * 
 * This function combines the power of clsx for conditional class handling
 * and tailwind-merge for resolving conflicting Tailwind classes.
 * 
 * @param inputs - Class values to merge (strings, objects, arrays, etc.)
 * @returns Merged and optimized class string
 * 
 * @example
 * cn("btn", "btn-primary", "w-full") // "btn btn-primary w-full"
 * cn("btn", { "btn-disabled": isDisabled }) // "btn btn-disabled" (if isDisabled is true)
 * cn("p-4", "px-6") // "p-4 px-6" (tailwind-merge resolves conflicts)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}