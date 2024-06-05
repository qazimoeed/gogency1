// lib/utils.ts
// import clsx, { ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
// 	return twMerge(clsx(inputs))
// }

import clsx from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: (string | undefined)[]) {
	return twMerge(clsx(inputs))
}
