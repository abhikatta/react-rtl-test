import { render, screen } from "@testing-library/react";
import Register from "./Register";
import userEvent from "@testing-library/user-event";

describe("Register component", () => {
  it("should render Register component correctly", () => {
    render(<Register />);
    const element = screen.getByRole("heading", { level: 2 });
    expect(element).toBeInTheDocument();
    // element.map((item) => expect(item).toBeInTheDocument());
  });
  it("should show error when clicked without input fields", async () => {
    render(<Register />);
    const button = screen.getByRole("button");
    await userEvent.click(button);
    const alertElement = screen.getByRole("alert");
    expect(alertElement).toBeInTheDocument();
  });
  it("should not show any error message when the component is loaded", () => {
    render(<Register />);
    const alertElement = screen.queryByRole("alert");
    expect(alertElement).not.toBeInTheDocument();
  });
});
