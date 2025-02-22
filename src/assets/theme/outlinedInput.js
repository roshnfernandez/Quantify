import applicationConstants from "../constants.json";

export const muiOutlinedInput =  {
    styleOverrides: {
      root: {
        fontSize: "14px",
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: applicationConstants.input.borderColor, // Default border color
        },
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: applicationConstants.textColor, // Hover state
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: applicationConstants.input.focusBorderColor, // Focused state
        }
      },
    },
  };