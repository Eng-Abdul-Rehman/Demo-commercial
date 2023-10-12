import { TypographyOptions } from '@mui/material/styles/createTypography';

export const typography: TypographyOptions = {
  fontFamily: 'Nexa',
  h1: {
    // fontFamily: "Nexa",
    fontSize: '56px',
    lineHeight: '100%',
    // fontKerning: "0%",
    fontWeight: 700,
  },
  h2: {
    // fontFamily: "Nexa",
    fontSize: '48px',
    lineHeight: '100%',
    // fontKerning: "0%",
    fontWeight: 700,
  },
  h3: {
    fontFamily: 'Nexa',
    fontSize: '40px',
    lineHeight: '100%',
    // fontKerning: "0%",
    fontWeight: 700,
  },
  h4: {
    fontFamily: 'Nexa',
    fontSize: '32px',
    lineHeight: '100%',
    // fontKerning: "0%",
    fontWeight: 700,
  },
  h5: {
    fontFamily: 'Nexa',
    fontSize: '24px',
    lineHeight: '100%',
    // fontKerning: "0%",
    fontWeight: 700,
  },
  h6: {
    fontFamily: 'Nexa',
    fontSize: '16px',
    lineHeight: '100%',
    // fontKerning: "0%",
    fontWeight: 700,
  },
};

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    'h1': true;
    'h2': true;
    'h3': true;
    'h4': true;
    'h5': true;
    'h6': true;
    'subHeader-regular': true;
    'subHeader-bold': true;
    'p-lg-regular': true;
    'p-lg-bold': true;
    'p-md-regular': true;
    'p-md-bold': true;
    'p-sm-regular': true;
    'label-lg-bold': true;
    'label-md-bold': true;
    'label-sm-regular': true;
    'p-xs-regular': true;
    'label-md-regular': true;
  }
}
declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    miniMobile: true;
  }
}
