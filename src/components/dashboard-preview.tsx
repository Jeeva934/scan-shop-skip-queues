import { BarChart3, Boxes, LayoutDashboard, Package, Receipt, Settings, Store } from "lucide-react";
import { useState } from "react";
import { DemoBadge } from "./ui-kit";
import { inr } from "@/lib/demo-store";
import { cn } from "@/lib/utils";

// All figures below are sample demo data, not real store metrics.
const DAYS = [
  { d: "Mon", v: 18400 }, { d: "Tue", v: 21200 }, { d: "Wed", v: 19800 }, { d: "Thu", v: 23600 },
  { d: "Fri", v: 27900 }, { d: "Sat", v: 34100 }, { d: "Sun", v: 31500 },
];
const ORDERS = [
  { id: "DEMO-2041", time: "10:42", items: 4, total: 183, status: "Verified" },
  { id: "DEMO-2040", time: "10:37", items: 2, total: 95, status: "Paid" },
  { id: "DEMO-2039", time: "10:31", items: 7, total: 512, status: "Verified" },
  { id: "DEMO-2038", time: "10:24", items: 1, total: 60, status: "Paid" },
];
const STOCK = [
  { name: "Fresh Milk 1 L", qty: 42, status: "ok" },
  { name: "Bread 400 g", qty: 8, status: "low" },
  { name: "Eggs 6 pcs", qty: 0, status: "out" },
  { name: "Banana 1 kg", qty: 26, status: "ok" },
];
const TABS = ["Overview", "Orders", "Inventory"] as const;

export function DashboardPreview() {
  const [tab, setTab] = useState<(typeof TABS)[number]>("Overview");
  const [stockFilter, setStockFilter] = useState<"all" | "low">("all");
  const max = Math.max(...DAYS.map((x) => x.v));
  const stock = stockFilter === "all" ? STOCK : STOCK.filter((s) => s.status !== "ok");

  return (
    <div className="overflow-hidden rounded-2xl border bg-card shadow-phone">
      <div className="flex items-center gap-2 border-b bg-muted px-4 py-2.5">
        <span className="size-2.5 rounded-full bg-destructive/60" /><span className="size-2.5 rounded-full bg-warning/70" /><span className="size-2.5 rounded-full bg-success/60" />
        <span className="ml-3 text-xs text-muted-foreground">Retailer dashboard — prototype</span>
        <span className="ml-auto"><DemoBadge /></span>
      </div>
      <div className="grid md:grid-cols-[180px_1fr]">
        <aside className="hidden border-r p-3 md:block" aria-label="Dashboard sections (preview)">
          {[[LayoutDashboard, "Overview"], [Receipt, "Orders"], [Boxes, "Inventory"], [Package, "Products"], [BarChart3, "Reports"], [Store, "Store activity"], [Settings, "Configuration"]].map(([Icon, l]) => {
            const I = Icon as typeof Store;
            return (
              <div key={l as string} className={cn("flex items-center gap-2 rounded-lg px-2.5 py-2 text-xs", tab === l ? "bg-secondary font-medium text-secondary-foreground" : "text-muted-foreground")}>
                <I className="size-4" /> {l as string}
              </div>
            );
          })}
        </aside>
        <div className="p-4 md:p-5">
          <div className="flex gap-1" role="tablist" aria-label="Dashboard view">
            {TABS.map((t) => (
              <button key={t} role="tab" aria-selected={tab === t} type="button" onClick={() => setTab(t)}
                className={cn("rounded-lg px-3 py-1.5 text-xs font-medium", tab === t ? "bg-primary text-primary-foreground" : "text-muted-foreground hover:bg-muted")}>{t}</button>
            ))}
          </div>

          {tab === "Overview" && (
            <div className="mt-4">
              <div className="grid grid-cols-3 gap-3">
                {[["Today's sales", inr(31500)], ["Orders", "214"], ["Avg. basket", inr(147)]].map(([l, v]) => (
                  <div key={l} className="rounded-xl border p-3"><p className="text-[11px] text-muted-foreground">{l}</p><p className="mt-1 text-lg font-bold">{v}</p></div>
                ))}
              </div>
              <div className="mt-4 rounded-xl border p-3">
                <p className="text-xs font-medium">Sales this week (demo)</p>
                <div className="mt-3 flex h-32 items-end gap-2">
                  {DAYS.map((x) => (
                    <div key={x.d} className="flex flex-1 flex-col items-center gap-1">
                      <div className="w-full rounded-t-md bg-primary/80" style={{ height: `${(x.v / max) * 100}%` }} title={inr(x.v)} />
                      <span className="text-[10px] text-muted-foreground">{x.d}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {tab === "Orders" && (
            <table className="mt-4 w-full text-left text-xs">
              <thead className="text-muted-foreground"><tr><th className="py-2 font-medium">Order</th><th className="font-medium">Time</th><th className="font-medium">Items</th><th className="font-medium">Total</th><th className="font-medium">Status</th></tr></thead>
              <tbody>
                {ORDERS.map((o) => (
                  <tr key={o.id} className="border-t">
                    <td className="py-2.5 font-medium">{o.id}</td><td>{o.time}</td><td>{o.items}</td><td>{inr(o.total)}</td>
                    <td><span className={cn("rounded-md px-1.5 py-0.5", o.status === "Verified" ? "bg-success/15" : "bg-secondary")}>{o.status}</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}

          {tab === "Inventory" && (
            <div className="mt-4">
              <label className="flex items-center gap-2 text-xs">
                <input type="checkbox" checked={stockFilter === "low"} onChange={(e) => setStockFilter(e.target.checked ? "low" : "all")} className="accent-primary" />
                Show low / out of stock only
              </label>
              <ul className="mt-3 divide-y rounded-xl border">
                {stock.map((s) => (
                  <li key={s.name} className="flex items-center justify-between px-3 py-2.5 text-xs">
                    <span>{s.name}</span>
                    <span className={cn("rounded-md px-1.5 py-0.5", s.status === "ok" && "bg-success/15", s.status === "low" && "bg-warning/20", s.status === "out" && "bg-destructive/15 text-destructive")}>
                      {s.status === "out" ? "Out of stock" : `${s.qty} in stock`}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
