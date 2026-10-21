import { Check, ClipboardList, Home, Minus, Plus, ScanLine, Search, ShoppingCart, Trash2, User } from "lucide-react";
import { useMemo, useState } from "react";
import mascot from "@/assets/qartuno-mascot.png.asset.json";
import {
  addItem, CATEGORIES, cartCount, cartLines, cartSubtotal, findByBarcode, inr, PRODUCTS, removeItem, searchProducts,
  type Cart, type Category,
} from "@/lib/demo-store";
import { cn } from "@/lib/utils";

type Screen = "home" | "scan" | "cart" | "pay" | "done" | "orders" | "profile";
const CAT_EMOJI: Record<Category, string> = { Fruits: "🍎", Dairy: "🥛", Snacks: "🍿", Beverages: "🧃", Household: "🏠" };
const PAY_METHODS = ["UPI", "Debit / Credit card", "Wallet"] as const;

/** Interactive demonstration. Simulated scans and payments only — no real transactions. */
export function PhoneDemo({ initialCart = { milk: 1, banana: 1, bread: 1 } as Cart }) {
  const [screen, setScreen] = useState<Screen>("home");
  const [cart, setCart] = useState<Cart>(initialCart);
  const [query, setQuery] = useState("");
  const [cat, setCat] = useState<Category | null>(null);
  const [code, setCode] = useState("");
  const [scanMsg, setScanMsg] = useState<{ ok: boolean; text: string } | null>(null);
  const [method, setMethod] = useState<(typeof PAY_METHODS)[number]>("UPI");
  const [orders, setOrders] = useState<{ id: string; total: number; items: number }[]>([]);

  const results = useMemo(() => searchProducts(query, cat), [query, cat]);
  const count = cartCount(cart);
  const subtotal = cartSubtotal(cart);

  const scan = (barcode: string) => {
    const p = findByBarcode(barcode);
    if (!p) return setScanMsg({ ok: false, text: "No product matches that barcode in the demo catalogue." });
    setCart((c) => addItem(c, p.id));
    setScanMsg({ ok: true, text: `${p.name} added (simulated scan)` });
    setCode("");
  };

  const placeOrder = () => {
    setOrders((o) => [{ id: `DEMO-${1001 + o.length}`, total: subtotal, items: count }, ...o]);
    setScreen("done");
  };

  return (
    <div className="mx-auto w-full max-w-[340px]">
      <div className="relative rounded-[2.8rem] border-[10px] border-navy bg-navy shadow-phone">
        <div className="absolute left-1/2 top-2 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-navy" aria-hidden />
        <div className="flex h-[640px] flex-col overflow-hidden rounded-[2.1rem] bg-background">
          <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[11px] font-semibold text-foreground">
            <span>9:41</span>
            <span className="rounded bg-warning/20 px-1.5 py-0.5 text-[9px] font-medium">DEMO MODE</span>
          </div>

          <div className="flex-1 overflow-y-auto px-4 pb-4">
            {screen === "home" && (
              <div>
                <div className="mt-1 flex items-center gap-2">
                  <img src={mascot.url} alt="" className="h-10 w-auto" />
                  <div>
                    <p className="text-xs text-muted-foreground">Demo store</p>
                    <p className="text-sm font-semibold">Good morning!</p>
                  </div>
                </div>
                <label className="mt-3 flex items-center gap-2 rounded-xl border bg-muted px-3 py-2.5">
                  <Search className="size-4 text-muted-foreground" aria-hidden />
                  <span className="sr-only">Search products</span>
                  <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                  />
                </label>
                <div className="mt-3 grid grid-cols-5 gap-1" role="group" aria-label="Categories">
                  {CATEGORIES.map((c) => (
                    <button
                      key={c}
                      type="button"
                      aria-pressed={cat === c}
                      onClick={() => setCat(cat === c ? null : c)}
                      className={cn("flex flex-col items-center gap-1 rounded-xl py-1.5 text-[10px] font-medium", cat === c ? "bg-primary text-primary-foreground" : "hover:bg-muted")}
                    >
                      <span className={cn("flex size-9 items-center justify-center rounded-full text-base", cat === c ? "bg-primary-foreground/20" : "bg-secondary")}>{CAT_EMOJI[c]}</span>
                      {c}
                    </button>
                  ))}
                </div>
                <div className="mt-3 rounded-2xl bg-primary p-3 text-primary-foreground">
                  <p className="font-hand text-2xl font-bold leading-none">Scan. Pay. Go.</p>
                  <p className="mt-1 text-[11px] opacity-90">Faster checkout for a smarter you.</p>
                </div>
                <p className="mt-4 text-sm font-semibold">{cat ?? (query ? "Results" : "Featured products")}</p>
                {results.length === 0 ? (
                  <p className="mt-6 text-center text-xs text-muted-foreground">No products match “{query}”.</p>
                ) : (
                  <ul className="mt-2 grid grid-cols-2 gap-2">
                    {results.map((p) => (
                      <li key={p.id} className="rounded-xl border p-2.5">
                        <div className="flex h-12 items-center justify-center rounded-lg bg-muted text-2xl" aria-hidden>{p.emoji}</div>
                        <p className="mt-1.5 text-xs font-semibold">{p.name}</p>
                        <p className="text-[10px] text-muted-foreground">{p.unit}</p>
                        <div className="mt-1 flex items-center justify-between">
                          <span className="text-sm font-bold">{inr(p.price)}</span>
                          <button type="button" aria-label={`Add ${p.name} to cart`} onClick={() => setCart((c) => addItem(c, p.id))} className="flex size-7 items-center justify-center rounded-lg bg-primary text-primary-foreground hover:bg-bright">
                            <Plus className="size-4" />
                          </button>
                        </div>
                        {cart[p.id] ? <p className="mt-1 text-[10px] font-medium text-primary">{cart[p.id]} in cart</p> : null}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {screen === "scan" && (
              <div>
                <p className="mt-1 text-sm font-semibold">Scan a product</p>
                <div className="relative mt-3 flex h-48 items-center justify-center overflow-hidden rounded-2xl bg-navy">
                  <div className="absolute inset-8 rounded-xl border-2 border-dashed border-bright" aria-hidden />
                  <div className="absolute inset-x-8 top-1/2 h-0.5 animate-pulse bg-bright" aria-hidden />
                  <p className="relative px-6 text-center text-[11px] text-navy-foreground">Camera preview simulated in this demo</p>
                </div>
                <p className="mt-3 text-[11px] text-muted-foreground">Tap a sample barcode to simulate a scan:</p>
                <div className="mt-2 flex flex-wrap gap-1.5">
                  {PRODUCTS.slice(0, 6).map((p) => (
                    <button key={p.id} type="button" onClick={() => scan(p.barcode)} className="rounded-lg border px-2 py-1 text-[10px] hover:border-primary hover:text-primary">
                      {p.emoji} {p.name}
                    </button>
                  ))}
                </div>
                <form className="mt-3 flex gap-2" onSubmit={(e) => { e.preventDefault(); scan(code); }}>
                  <label className="sr-only" htmlFor="manual-code">Enter barcode manually</label>
                  <input id="manual-code" inputMode="numeric" value={code} onChange={(e) => setCode(e.target.value.replace(/\D/g, "").slice(0, 13))} placeholder="Enter barcode manually" className="w-full rounded-lg border px-2.5 py-2 text-xs" />
                  <button type="submit" disabled={!code} className="rounded-lg bg-primary px-3 text-xs font-medium text-primary-foreground disabled:opacity-50">Add</button>
                </form>
                <p className="mt-1 text-[10px] text-muted-foreground">Try 8901000000042</p>
                {scanMsg && (
                  <p role="status" className={cn("mt-3 rounded-lg px-3 py-2 text-xs", scanMsg.ok ? "bg-success/10 text-foreground" : "bg-destructive/10 text-destructive")}>{scanMsg.text}</p>
                )}
              </div>
            )}

            {screen === "cart" && (
              <div>
                <p className="mt-1 text-sm font-semibold">Your cart ({count})</p>
                {count === 0 ? (
                  <div className="mt-10 text-center">
                    <ShoppingCart className="mx-auto size-8 text-muted-foreground" />
                    <p className="mt-2 text-xs text-muted-foreground">Your cart is empty.</p>
                    <button type="button" onClick={() => setScreen("scan")} className="mt-3 rounded-lg bg-primary px-3 py-2 text-xs text-primary-foreground">Scan a product</button>
                  </div>
                ) : (
                  <>
                    <ul className="mt-3 space-y-2">
                      {cartLines(cart).map(({ product: p, qty, lineTotal }) => (
                        <li key={p.id} className="flex items-center gap-2 rounded-xl border p-2">
                          <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-xl" aria-hidden>{p.emoji}</span>
                          <div className="min-w-0 flex-1">
                            <p className="truncate text-xs font-semibold">{p.name}</p>
                            <p className="text-[10px] text-muted-foreground">{inr(p.price)} × {qty}</p>
                          </div>
                          <div className="flex items-center gap-1">
                            <button type="button" aria-label={`Decrease ${p.name}`} onClick={() => setCart((c) => addItem(c, p.id, -1))} className="flex size-6 items-center justify-center rounded-md border"><Minus className="size-3" /></button>
                            <span className="w-4 text-center text-xs" aria-live="polite">{qty}</span>
                            <button type="button" aria-label={`Increase ${p.name}`} onClick={() => setCart((c) => addItem(c, p.id))} className="flex size-6 items-center justify-center rounded-md border"><Plus className="size-3" /></button>
                          </div>
                          <span className="w-12 text-right text-xs font-semibold">{inr(lineTotal)}</span>
                          <button type="button" aria-label={`Remove ${p.name}`} onClick={() => setCart((c) => removeItem(c, p.id))} className="text-muted-foreground hover:text-destructive"><Trash2 className="size-3.5" /></button>
                        </li>
                      ))}
                    </ul>
                    <Summary subtotal={subtotal} />
                    <button type="button" onClick={() => setScreen("pay")} className="mt-3 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-bright">Review & pay</button>
                  </>
                )}
              </div>
            )}

            {screen === "pay" && (
              <div>
                <p className="mt-1 text-sm font-semibold">Payment</p>
                <fieldset className="mt-3 space-y-2">
                  <legend className="text-[11px] text-muted-foreground">Choose a method (illustrative)</legend>
                  {PAY_METHODS.map((m) => (
                    <label key={m} className={cn("flex cursor-pointer items-center justify-between rounded-xl border p-3 text-xs", method === m && "border-primary bg-secondary")}>
                      {m}
                      <input type="radio" name="pay" checked={method === m} onChange={() => setMethod(m)} className="accent-primary" />
                    </label>
                  ))}
                </fieldset>
                <Summary subtotal={subtotal} />
                <p className="mt-2 text-[10px] text-muted-foreground">No payment is processed in this demo.</p>
                <button type="button" disabled={count === 0} onClick={placeOrder} className="mt-3 w-full rounded-xl bg-primary py-3 text-sm font-semibold text-primary-foreground hover:bg-bright disabled:opacity-50">
                  Simulate payment · {inr(subtotal)}
                </button>
              </div>
            )}

            {screen === "done" && orders[0] && (
              <div className="pt-6 text-center">
                <div className="mx-auto flex size-14 items-center justify-center rounded-full bg-success/15"><Check className="size-7 text-success" /></div>
                <p className="mt-3 text-base font-semibold">Demo order complete</p>
                <p className="text-xs text-muted-foreground">{orders[0].id} · {method} (simulated)</p>
                <div className="mx-auto mt-4 rounded-xl border p-3 text-left">
                  {cartLines(cart).map((l) => (
                    <div key={l.product.id} className="flex justify-between py-0.5 text-xs"><span>{l.product.name} × {l.qty}</span><span>{inr(l.lineTotal)}</span></div>
                  ))}
                  <div className="mt-2 flex justify-between border-t pt-2 text-sm font-bold"><span>Total</span><span>{inr(orders[0].total)}</span></div>
                </div>
                <div className="mt-3 rounded-xl bg-secondary p-3 text-[11px] text-secondary-foreground">
                  In a live store, show this confirmation at the exit for verification as per store policy.
                </div>
                <button type="button" onClick={() => { setCart({}); setScreen("home"); }} className="mt-4 w-full rounded-xl border py-2.5 text-xs font-medium">Start a new demo trip</button>
              </div>
            )}

            {screen === "orders" && (
              <div>
                <p className="mt-1 text-sm font-semibold">Orders</p>
                {orders.length === 0 ? <p className="mt-8 text-center text-xs text-muted-foreground">No demo orders yet.</p> : (
                  <ul className="mt-3 space-y-2">
                    {orders.map((o) => (
                      <li key={o.id} className="flex justify-between rounded-xl border p-3 text-xs"><span>{o.id} · {o.items} items</span><span className="font-semibold">{inr(o.total)}</span></li>
                    ))}
                  </ul>
                )}
              </div>
            )}

            {screen === "profile" && (
              <div className="pt-8 text-center">
                <User className="mx-auto size-10 text-muted-foreground" />
                <p className="mt-2 text-sm font-semibold">Demo shopper</p>
                <p className="text-xs text-muted-foreground">Accounts are not part of this demo.</p>
              </div>
            )}
          </div>

          <nav aria-label="Demo app" className="grid grid-cols-5 border-t bg-background py-1.5">
            {([
              ["home", Home, "Home"], ["scan", ScanLine, "Scan"], ["cart", ShoppingCart, "Cart"], ["orders", ClipboardList, "Orders"], ["profile", User, "Profile"],
            ] as const).map(([s, Icon, label]) => (
              <button key={s} type="button" onClick={() => { setScreen(s); setScanMsg(null); }} aria-current={screen === s ? "page" : undefined}
                className={cn("relative flex flex-col items-center gap-0.5 py-1 text-[10px]", screen === s || (s === "cart" && screen === "pay") ? "text-primary" : "text-muted-foreground")}>
                <Icon className="size-5" />
                {label}
                {s === "cart" && count > 0 && (
                  <span className="absolute right-3 top-0 flex size-4 items-center justify-center rounded-full bg-destructive text-[9px] text-destructive-foreground">{count}</span>
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">Interactive demo · illustrative prices · simulated scans & payments</p>
    </div>
  );
}

function Summary({ subtotal }: { subtotal: number }) {
  return (
    <div className="mt-3 space-y-1 rounded-xl bg-muted p-3 text-xs">
      <div className="flex justify-between"><span>Subtotal</span><span>{inr(subtotal)}</span></div>
      <div className="flex justify-between text-muted-foreground"><span>Applicable charges</span><span>Per store</span></div>
      <div className="flex justify-between border-t pt-1.5 text-sm font-bold"><span>Total</span><span>{inr(subtotal)}</span></div>
    </div>
  );
}
