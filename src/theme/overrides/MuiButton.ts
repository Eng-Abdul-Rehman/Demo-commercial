import { Theme } from "@mui/material/styles";
import { palette } from "../Palette";

export const MuiButton = (theme: Theme) => {
  return {
    MuiButton: {
      styleOverrides: {
        // root: {
        ".MuiButtonBase-root": {
          color: palette.success,
          //  }
        },
      },
    },
  };
};
