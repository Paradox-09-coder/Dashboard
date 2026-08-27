export const INTEGRATIONS = [
  {
    category: "Marketing",
    items: [
      { name: "Facebook", color: "#1877F2", initial: "f" },
      { name: "Instagram", color: "#E1306C", initial: "◆" },
      { name: "YouTube", color: "#FF0000", initial: "▶" },
      { name: "TikTok", color: "#111111", initial: "♪" },
      { name: "Google Ads", color: "#4285F4", initial: "G" },
    ],
  },
  {
    category: "Messenjer",
    items: [
      { name: "Telegram", color: "#229ED9", initial: "✈" },
      { name: "WhatsApp", color: "#25D366", initial: "W" },
      { name: "SMS", color: "#6B7280", initial: "✉" },
    ],
  },
  {
    category: "Telefoniya",
    items: [
      { name: "onlinePBX", color: "#7C3AED", initial: "P" },
      { name: "Sipuni", color: "#0EA5E9", initial: "S" },
      { name: "MyZvonki", color: "#F97316", initial: "M" },
      { name: "Hollihop", color: "#EC4899", initial: "H" },
    ],
  },
  {
    category: "CRM",
    items: [
      { name: "amoCRM", color: "#1B6EEA", initial: "a" },
      { name: "Bitrix24", color: "#FF5752", initial: "B" },
      { name: "Google Sheets", color: "#34A853", initial: "◼" },
      { name: "1C", color: "#FF6B00", initial: "1" },
    ],
  },
  {
    category: "To'lov",
    items: [
      { name: "Payme", color: "#00AAFF", initial: "P" },
      { name: "Click", color: "#2563EB", initial: "C" },
      { name: "Uzum", color: "#6D28D9", initial: "U" },
      { name: "Stripe", color: "#635BFF", initial: "◆" },
    ],
  },
];

export const MODULES = [
  {
    title: "Savdo monitoring",
    desc: "Tushum, lidlar, konversiya — real vaqtda",
    tags: ["CRM", "Telefoniya", "Marketing"],
    badge: "Eng ko'p",
    chartType: "bar" as const,
    color: "#c9e830",
  },
  {
    title: "Marketing analytics",
    desc: "Kanallar bo'yicha lid narxi va sifati",
    tags: ["Facebook", "Instagram", "TikTok"],
    badge: null,
    chartType: "area" as const,
    color: "#3b82f6",
  },
  {
    title: "IP-Telefoniya",
    desc: "Qo'ng'iroqlar, yozuvlar, sifat nazorati",
    tags: ["onlinePBX", "Sipuni", "MyZvonki"],
    badge: null,
    chartType: "bar" as const,
    color: "#7C3AED",
  },
  {
    title: "Moliya tahlili",
    desc: "Daromad, xarajat, foyda — oyma-oy",
    tags: ["Payme", "Click", "1C"],
    badge: null,
    chartType: "area" as const,
    color: "#22c55e",
  },
  {
    title: "CRM panel",
    desc: "Mijozlar bazasi va sotuv voronkasi",
    tags: ["amoCRM", "Bitrix24"],
    badge: null,
    chartType: "funnel" as const,
    color: "#f59e0b",
  },
  {
    title: "AI hisobotlar",
    desc: "Savolga javob — bir soniyada",
    tags: ["Barcha kanallar"],
    badge: "Yangi",
    chartType: "sparkline" as const,
    color: "#c9e830",
  },
];
