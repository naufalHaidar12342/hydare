import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export default function classMerging(...classesToMerge: ClassValue[]) {
	return twMerge(clsx(classesToMerge));
}
