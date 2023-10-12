import { palette } from '../Palette';

const MuiDataGrid = () => ({
  MuiDataGrid: {
    styleOverrides: {
      root: {
        backgroundColor: `${palette.storm[100]} !important`,
        border: 'none !important',
        borderRadius: '16px !important',
        color: palette.storm[100],
      },
      row: {
        'height': '50px !important',
        '&:hover': {
          backgroundColor: `${palette.storm[100]} !important`,
          borderRadius: '16px !important',
        },
      },
      pagination: {
        '& .MuiButtonBase-root': {
          'color': `${palette.storm[6]} !important`,
          '&:hover': {
            backgroundColor: 'blue !important',
          },
        },
        '& .MuiButton-label': {
          '&:hover': {
            color: `${palette.storm[6]} !important`,
          },
        },
        '& .MuiSvgIcon-root': {
          fill: `${palette.storm[6]} !important`,
        },
      },
      iconSeparator: {
        '& .MuiIconButton-root': {
          'color': `${palette.storm[6]} !important`,
          '&:hover': {
            backgroundColor: `${palette.storm[6]} !important`,
          },
        },
      },
    },
  },
});

export default MuiDataGrid;
