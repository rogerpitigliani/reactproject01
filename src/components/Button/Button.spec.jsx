import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import { Button } from ".";

describe("<Button >", () => {

  it('should render the button with the text "Load More"', () => {
    render(<Button text="load more" />);
    expect.hasAssertions();
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("class", "btn");
  });

  it('should call function on button click', () => {
    const fn = jest.fn();
    render(<Button text="load more" onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    fireEvent.click(button);
    expect(fn).toHaveBeenCalledTimes(1);
  });

  it('should be disabled when disabled is true', () => {
    const fn = jest.fn();
    render(<Button text="load more" disabled={true} onClick={fn} />);
    const button = screen.getByRole("button", { name: /load more/i });
    expect(button).toBeDisabled();
  });

  it('should match snapshot', () => {
    const { container } = render(<Button text="load more" disabled={true} />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
