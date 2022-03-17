import "./styles.css";

export const TextInput = ({ onChange, searchValue }) => {
  return <input placeholder="Type your search" className="text-input" onChange={onChange} value={searchValue} type="search"></input>;
};
