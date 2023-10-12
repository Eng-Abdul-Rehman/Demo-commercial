import { Theme } from "@mui/material";


export const MuiButton = (theme: Theme) => {
    return {
      MuiButton: {
        styleOverrides: {
          text: {
            // Your custom styles for the MuiButton text variant go here
          },
        },
      },
    };
  };