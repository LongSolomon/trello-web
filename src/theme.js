import { experimental_extendTheme as extendTheme } from "@mui/material/styles";
// import { red } from "@mui/material/colors";
import { teal, deepOrange, cyan, orange } from "@mui/material/colors";
// Create a theme instance.
const APP_BAR_HEIGHT = "58px";
const BOARD_BAR_HEIGHT = "60px";
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`;
const theme = extendTheme({
  trelloCustom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
  },
  colorSchemes: {
    // light: {
    //   palette: {
    //     primary: teal,
    //     secondary: deepOrange,
    //   },
    // },
    // dark: {
    //   palette: {
    //     primary: cyan,
    //     secondary: orange,
    //   },
    // },
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          "*::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
          "*::-webkit-scrollbar-thumb": {
            backgroundColor: "#bdc3c7",
            borderRadius: "8px",
          },
          "*::-webkit-scrollbar-thumb:hover": {
            backgroundColor: "#00b894",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          borderWidth: "1px",
          // "&:hover": {
          //   borderWidth: "2px",
          // },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: ({ theme }) => {
          return {
            // color: theme.palette.primary.main,
            fontSize: "0.875rem",
            // ".MuiOutlinedInput-notchedOutline": {
            //   borderColor: theme.palette.primary.light,
            // },

            // "&:hover": {
            //   ".MuiOutlinedInput-notchedOutline": {
            //     borderColor: theme.palette.primary.light,
            //   },
            // },

            "& fieldset": {
              borderWidth: "1px !important",
            },
            "&:hover fieldset": {
              borderWidth: "2px !important",
            },
            "&.Mui-focused fieldset": {
              borderWidth: "2px !important",
            },

            // "&.Mui-focused": {
            //   ".MuiOutlinedInput-notchedOutline": {
            //     borderColor: "theme.palette.primary.dark",
            //     borderWidth: "4px !important",
            //   },
            // },
          };
        },
      },
    },
  },
  // ...other properties
});

export default theme;
