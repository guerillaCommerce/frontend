import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/** tailwind를 merge할 때 발생할 수 있는 클래스 충돌 문제를 해결 */
export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
};
