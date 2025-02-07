import clsx from "clsx";
import { twMerge } from "tailwind-merge";

export default function classMerging(...classesToMerge) {
	return twMerge(clsx(classesToMerge));
}
