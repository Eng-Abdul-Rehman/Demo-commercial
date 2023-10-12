const storm = {
  100: '#0C0C0C',
  90: '#1A1A1A',
  80: '#333333',
  70: '#4C4C4C',
  60: '#666666',
  50: '#808080',
  30: '#B3B3B3',
  15: '#D9D9D9',
  10: '#F5F6F3',
  6: '#F8F8F8',
};

const ash = '#F8F8F8';

const fire = '#F3523F';

const contrastText = storm[100];

export const palette = {
  primary: {
    main: '#E8EC54',
    light: '#EDF17E',
    contrastText,
  },
  secondary: {
    main: ash,
    contrastText,
  },
  error: {
    main: '#DD1C77',
  },
  warning: {
    main: '#FAA73F',
  },
  info: {
    main: '#3E7DBC',
  },
  success: {
    main: '#47BA76',
  },
  background: {
    paper: '#404040',
    default: '#404040',
  },
  storm,
  ash,
  fire,
};
