// Illustrative demo catalogue. Not a live supermarket inventory.
export type Category = "Fruits" | "Dairy" | "Snacks" | "Beverages" | "Household";
export const CATEGORIES: Category[] = ["Fruits", "Dairy", "Snacks", "Beverages", "Household"];

export type Product = {
  id: string;
  name: string;
  unit: string;
  price: number; // INR, illustrative
  category: Category;
  barcode: string;
  emoji: string;
};

export const PRODUCTS: Product[] = [
  { id: "milk", name: "Fresh Milk", unit: "1 L", price: 60, category: "Dairy", barcode: "8901000000011", emoji: "🥛" },
  { id: "banana", name: "Banana", unit: "1 kg", price: 40, category: "Fruits", barcode: "8901000000028", emoji: "🍌" },
  { id: "bread", name: "Bread", unit: "400 g", price: 35, category: "Snacks", barcode: "8901000000035", emoji: "🍞" },
  { id: "eggs", name: "Eggs", unit: "6 pcs", price: 48, category: "Dairy", barcode: "8901000000042", emoji: "🥚" },
  { id: "apple", name: "Apple", unit: "1 kg", price: 160, category: "Fruits", barcode: "8901000000059", emoji: "🍎" },
  { id: "curd", name: "Curd", unit: "400 g", price: 45, category: "Dairy", barcode: "8901000000066", emoji: "🥣" },
  { id: "chips", name: "Potato Chips", unit: "90 g", price: 20, category: "Snacks", barcode: "8901000000073", emoji: "🥔" },
  { id: "juice", name: "Orange Juice", unit: "1 L", price: 110, category: "Beverages", barcode: "8901000000080", emoji: "🧃" },
  { id: "water", name: "Mineral Water", unit: "1 L", price: 20, category: "Beverages", barcode: "8901000000097", emoji: "💧" },
  { id: "soap", name: "Bath Soap", unit: "3 x 100 g", price: 99, category: "Household", barcode: "8901000000103", emoji: "🧼" },
  { id: "detergent", name: "Detergent", unit: "1 kg", price: 130, category: "Household", barcode: "8901000000110", emoji: "🧺" },
];

export type Cart = Record<string, number>;

export function addItem(cart: Cart, id: string, qty = 1): Cart {
  const next = { ...cart, [id]: (cart[id] ?? 0) + qty };
  if (next[id] <= 0) delete next[id];
  return next;
}

export function removeItem(cart: Cart, id: string): Cart {
  const next = { ...cart };
  delete next[id];
  return next;
}

export function cartCount(cart: Cart): number {
  return Object.values(cart).reduce((a, b) => a + b, 0);
}

export function cartLines(cart: Cart) {
  return Object.entries(cart)
    .map(([id, qty]) => {
      const p = PRODUCTS.find((x) => x.id === id);
      return p ? { product: p, qty, lineTotal: p.price * qty } : null;
    })
    .filter((l): l is NonNullable<typeof l> => l !== null);
}

export function cartSubtotal(cart: Cart): number {
  return cartLines(cart).reduce((s, l) => s + l.lineTotal, 0);
}

export function searchProducts(query: string, category: Category | null): Product[] {
  const q = query.trim().toLowerCase();
  return PRODUCTS.filter(
    (p) => (!category || p.category === category) && (!q || p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q)),
  );
}

export function findByBarcode(code: string): Product | undefined {
  return PRODUCTS.find((p) => p.barcode === code.trim());
}

export const inr = (n: number) => `₹${n.toLocaleString("en-IN")}`;
