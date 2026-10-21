import { describe, expect, it } from "vitest";
import { addItem, cartCount, cartSubtotal, findByBarcode, removeItem, searchProducts } from "@/lib/demo-store";

describe("demo cart", () => {
  it("sums milk x2 + banana to ₹160", () => {
    let c = addItem({}, "milk");
    c = addItem(c, "milk");
    c = addItem(c, "banana");
    expect(cartSubtotal(c)).toBe(160);
    expect(cartCount(c)).toBe(3);
  });
  it("drops an item when quantity reaches zero", () => {
    const c = addItem(addItem({}, "eggs"), "eggs", -1);
    expect(c.eggs).toBeUndefined();
  });
  it("removes an item entirely", () => {
    expect(removeItem({ eggs: 3 }, "eggs")).toEqual({});
  });
  it("filters by category and search", () => {
    expect(searchProducts("", "Beverages").map((p) => p.id)).toEqual(["juice", "water"]);
    expect(searchProducts("bread", null).map((p) => p.id)).toEqual(["bread"]);
  });
  it("finds a product by barcode", () => {
    expect(findByBarcode("8901000000042")?.id).toBe("eggs");
    expect(findByBarcode("123")).toBeUndefined();
  });
});
