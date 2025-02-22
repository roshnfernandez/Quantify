import applicationConstants from "../constants.json";

export const muiInputLabel = {
    styleOverrides: {
      root: {
        color: applicationConstants.input.labelColor,
        fontSize: "14px"
      },
      shrink: {
        "&.Mui-focused": {
          color: applicationConstants.input.focusLabelColor, // Label color when focused
        },
      },
    },
  }