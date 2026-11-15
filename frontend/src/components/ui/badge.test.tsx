import { render, screen } from "@testing-library/react";
import { Badge } from "./badge";

describe("Badge component", () => {
  const tones = [
    { tone: "neutral" as const, bg: "bg-slate-100", text: "text-slate-800" },
    { tone: "success" as const, bg: "bg-emerald-100", text: "text-emerald-800" },
    { tone: "warning" as const, bg: "bg-amber-100", text: "text-amber-800" },
    { tone: "danger" as const, bg: "bg-rose-100", text: "text-rose-800" },
  ];

  tones.forEach(({ tone, bg, text }) => {
    test(`renders ${tone} tone with correct classes`, () => {
      render(<Badge tone={tone}>Test</Badge>);
      const badge = screen.getByRole("status", { name: /test/i });
      expect(badge).toHaveTextContent("Test");
      expect(badge).toHaveClass(bg);
      expect(badge).toHaveClass(text);
    });
  });

  test("defaults to neutral tone", () => {
    render(<Badge>Default</Badge>);
    const badge = screen.getByRole("status", { name: /default/i });
    expect(badge).toHaveClass("bg-slate-100");
    expect(badge).toHaveClass("text-slate-800");
  });
});

