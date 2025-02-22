import applicationConstants from '../constants.json'

const menuItem = {
    styleOverrides: {
      root: {
        minHeight: "unset",
        borderRadius: "none",
        transition: "background-color 300ms ease, color 300ms ease",
        "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus": {
        backgroundColor: applicationConstants.menuColors.menuItemColor,
        color: applicationConstants.menuColors.menuItemTextColor,
        },
      },
    },
  };

  export default menuItem