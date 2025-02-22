import applicationConstants from '../constants.json';

export const menu = {
    defaultProps: {
      disableAutoFocusItem: true,
    },
  
    styleOverrides: {
      paper: {
        boxShadow: applicationConstants.boxShadow,
        color: applicationConstants.menuColors.menuItemColor,
        textAlign: "left",
        backgroundColor: `${applicationConstants.menuColors.menuColor} !important`,
        borderRadius: applicationConstants.borderRadius,
        border : ` 1px solid ${applicationConstants.menuColors.menuBorderColor}`,
        paddingLeft: "5px",
        paddingRight: "5px"
      },
    },
  };