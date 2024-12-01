import applicationConstants from '../constants.json'

export const cardStyle = {
    styleOverrides: {
      root: {
        display: "flex",
        flexDirection: "column",
        position: "relative",
        minWidth: 0,
        wordWrap: "break-word",
        backgroundColor: applicationConstants.cardBackgroundColor,
        color: applicationConstants.textColor,
        backgroundClip: "border-box",
        borderRadius: applicationConstants.borderRadius.md,
        boxShadow: applicationConstants.boxShadow.md,
        padding: "10px"
      },
    },
  };