import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

// describe : to group all the test cases
describe("Contact Us page test cases", () => {
  it("should load heading in Contact.js component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  it("should load button in  Contact.js component", () => {
    render(<Contact />);
    const button = screen.getByRole("button"); //getByRoll : single element
    // const button = screen.getByText("Submit");     <= failed bcoz Submit test is not present
    expect(button).toBeInTheDocument();
  });

  it("should load inputName in Contact.js component", () => {
    render(<Contact />);
    const inputName = screen.getByPlaceholderText("name");
    expect(inputName).toBeInTheDocument();
  });
});

