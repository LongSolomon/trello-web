import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";
// Create a theme instance.
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: "58px",
    boardBarHeight: "78px",
  },
  colorSchemes: {
    light: {
      palette: {
        primary: teal,
        secondary: deepOrange,
      },
    },
    dark: {
      palette: {
        primary: cyan,
        secondary: orange,
      },
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            color: theme.palette.primary.main,
            fontSize: "0.875rem",
            ".MuiOutlinedInput-notchedOutline": {
              borderColor: theme.palette.primary.light,
            },
            "&:hover": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.light,
              },
            },
            // "& fieldset": {
            //   borderWidth: "4px !important",
            // },
            "&.Mui-focused": {
              ".MuiOutlinedInput-notchedOutline": {
                borderColor: theme.palette.primary.dark,
                borderWidth: "4px !important",
              },
            },
          };
        },
      },
    },
  },
  // ...other properties
});

export default theme;
