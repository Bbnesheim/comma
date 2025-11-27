import * as React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

// Mock Framer so the component can be rendered in a standard Jest/jsdom environment
jest.mock("framer", () => {
  const React = require("react");
  return {
    motion: {
      a: ({ children, ...rest }: any) => <a {...rest}>{children}</a>,
    },
    addPropertyControls: jest.fn(),
    ControlType: {
      String: "String",
    },
  };
});

import RSVPFormSection from "../section-5-RSVPFormSection";

describe("RSVPFormSection", () => {
  const commonProps = {
    title: "Påmelding",
    note: "",
    ctaLabel: "Gå til påmelding",
    ctaUrl: "https://example.com",
  };

  it("correctly splits the description into questionLine and descriptionRemainder when a question mark is present", () => {
    const description =
      "Har du husket å bekrefte din deltakelse? Minner om at fristen er 31. januar 2026.";

    render(<RSVPFormSection {...commonProps} description={description} />);

    const questionLine = screen.getByText(
      "Har du husket å bekrefte din deltakelse?"
    );
    const descriptionRemainder = screen.getByText(
      "Minner om at fristen er 31. januar 2026."
    );

    expect(questionLine).toBeInTheDocument();
    expect(descriptionRemainder).toBeInTheDocument();
  });

  it("displays the full description in descriptionRemainder when no question mark is present", () => {
    const description = "Dette er en beskrivelse uten spørsmålstegn.";

    const { container } = render(
      <RSVPFormSection {...commonProps} description={description} />
    );

    const descriptionNode = screen.getByText(description);
    expect(descriptionNode).toBeInTheDocument();

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs).toHaveLength(1);
    expect(paragraphs[0]).toHaveTextContent(description);
  });

  it("handles an empty description prop correctly, showing no text", () => {
    const { container } = render(
      <RSVPFormSection
        {...commonProps}
        description=""
        // Ensure note is empty so no extra <p> nodes are rendered
        note=""
      />
    );

    const paragraphs = container.querySelectorAll("p");
    expect(paragraphs).toHaveLength(0);
  });

  it("renders questionLine with the specific styling for a question", () => {
    const description =
      "Har du husket å bekrefte din deltakelse? Minner om at fristen er 31. januar 2026.";

    render(<RSVPFormSection {...commonProps} description={description} />);

    const questionLine = screen.getByText(
      "Har du husket å bekrefte din deltakelse?"
    );

    expect(questionLine.tagName).toBe("P");
    expect(questionLine).toHaveStyle("font-size: 20px");
    expect(questionLine).toHaveStyle(
      "font-family: 'Dolce Gargia', 'Playfair Display', 'Times New Roman', serif"
    );
  });

  it("renders descriptionRemainder with the specific styling for remaining description text", () => {
    const description =
      "Har du husket å bekrefte din deltakelse? Minner om at fristen er 31. januar 2026.";

    render(<RSVPFormSection {...commonProps} description={description} />);

    const descriptionRemainder = screen.getByText(
      "Minner om at fristen er 31. januar 2026."
    );

    expect(descriptionRemainder.tagName).toBe("P");
    expect(descriptionRemainder).toHaveStyle("font-size: 15px");
    expect(descriptionRemainder).toHaveStyle("line-height: 1.6");
  });
});
