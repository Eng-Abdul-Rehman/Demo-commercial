import { palette } from '../Palette';

export const MuiOutlinedInput = () => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        'root': {
          'width': '100%',
          '&:focus-visible': {
            border: `2px solid ${palette.primary.main}`,
          },
          '.MuiOutlinedInput-notchedOutline': {
            borderColor: palette.storm[6],
            height: 45,
            width: '100%',
            transition: 'border-color 0.2s ease-in-out',
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.storm[6],
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: palette.primary.main,
          },

          '.MuiInputLabel-outlined': {
            transform: 'translate(14px, -2.5px) scale(0.75)',
            borderColor: `2px solid ${palette.primary.main}`,
          },
          '&.custom-input-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: `2px solid ${palette.primary.main}`,
          },
          '&.Mui-disabled .MuiOutlinedInput-notchedOutline': {
            borderColor: `1px solid ${palette.storm[50]}`,
          },
        },
        'input': {
          color: 'white',
          minHeight: '45px',
          height: 'auto',
          paddingLeft: '14px !important',
          padding: 0,
          border: '0px solid transparent !important',
        },
        '.MuiInputLabel-outlined.MuiInputLabel-shrink': {
          transform: 'translate(14px, -3.8px) scale(0.75) !important',
        },
        'adornedEnd': {
          '& span': {
            color: palette.primary.main,
          },
          '& svg': {
            fill: palette.primary.main,
            fontSize: 20,
          },
          '&.Mui-disabled': {
            '& span': {
              color: palette.storm[50],
            },
            '& svg': {
              fill: palette.storm[50],
            },
          },
        },
      },
    },
  };
};
