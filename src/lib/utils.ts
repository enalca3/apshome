import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// Formato del precio en euros indicando el símbolo de la moneda
// y utilizando el separador de miles y decimales adecuado para España.
// Si no tiene decimales, se muestra sin decimales.
// Ejemplo: 1234.56 se convierte en "1.234,56 €"
export function formatPrice(price: number): string {
  if (isNaN(price)) {
    return "0 €";
  }  
  if (price % 1 === 0) {
    // Si el precio es un número entero, lo formateamos sin decimales.
    return new Intl.NumberFormat("es-ES", {
      style: "currency",
      currency: "EUR",
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  }
  // Si el precio tiene decimales, lo formateamos con dos decimales
  return new Intl.NumberFormat("es-ES", {
    style: "currency",
    currency: "EUR",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(price);
}
