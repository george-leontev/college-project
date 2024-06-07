declare module '@mui/material/styles' {
    interface CustomPalette {
      anger: PaletteColorOptions;
      apple: PaletteColorOptions;
      steelBlue: PaletteColorOptions;
      violet: PaletteColorOptions;
    }
    interface Palette extends CustomPalette {}
    interface PaletteOptions extends CustomPalette {}
  }

  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      anger: true;
      apple: true;
      steelBlue: true;
      violet: true;
    }
  }