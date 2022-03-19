import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import userEvent from "@testing-library/user-event";
import { TextInput } from ".";

describe("<TextInput />", () => {
  it("should render posts", () => {
    render(<TextInput />);
  });

  it("should call handleChange function each key pressed", () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} />);
    const input = screen.getByPlaceholderText(/type your search/i);
    const value = 'o valor';    
    userEvent.type(input, value);    
    expect(input.value).toBe(value);
    expect(fn).toHaveBeenCalledTimes(value.length); // Quantas Vezes a Funcao foi Chamada.    
  });

  it("should have a value of searchValue", () => {
    const fn = jest.fn();
    render(<TextInput onChange={fn} searchValue="testing" />);
    const input = screen.getByPlaceholderText(/type your search/i);
    expect(input).toBeInTheDocument();
    expect(input.value).toBe('testing');
  });

  it("should match snapshot", () => {
    const { container } = render(<TextInput />);
    expect(container.firstChild).toMatchSnapshot();
  });
  
});
