import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "./card";

describe("Card component", () => {
  test("renders children correctly", () => {
    render(
      <Card>
        <span data-testid="child">Hello World</span>
      </Card>
    );
    expect(screen.getByTestId("child")).toBeInTheDocument();
    expect(screen.getByTestId("child")).toHaveTextContent("Hello World");
  });

  test("renders a title when provided", () => {
    const title = "Card Title";
    render(
      <Card title={title}>
        <div>Content</div>
      </Card>
    );
    expect(screen.getByText(title)).toBeInTheDocument();
    // Title should be inside an h3 element
    const heading = screen.getByRole("heading", { level: 3, name: title });
    expect(heading).toBeInTheDocument();
  });

  test("uses the slate palette classes", () => {
    render(
      <Card>
        <div>Content</div>
      </Card>
    );
    const card = screen.getByTestId("card");
    // Verify that Tailwind slate palette classes are present
    expect(card).toHaveClass("bg-slate-50");
    expect(card).toHaveClass("border-slate-200");
    expect(card).toHaveClass("rounded-md");
  });
});

// Note: The test suite assumes that the project is configured with Jest and
// @testing-library/react. The "npm run typecheck" command from the plan can be
// used to verify TypeScript typings.
