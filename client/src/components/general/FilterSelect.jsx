// MUI components
import { Select } from '@mui/material';

const FilterSelect = ({ state, handleState, options }) => {
  return (
    <Select
      value={state}
      onChange={handleState}
      native
      sx={{
        height: '1.5rem',
        width: '7.8rem',
        ml: 1,
      }}
    >
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </Select>
  );
};

export default FilterSelect;
