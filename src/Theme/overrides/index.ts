import { Theme } from '@mui/material/styles';
import { MuiButton } from './MuiButton';
import { MuiIconButton } from './MuiIconButton';
import { MuiSlider } from './MuiSlider';
import { MuiOutlinedInput } from './MuiTextField';
import MuiDataGrid from './MuiDataGrid';
import MuiTooltip from './MuiToltip';
import { MuiAlert } from './MuiAlert';

export const overrides = (theme: Theme) => ({
  ...MuiSlider(theme),
  ...MuiButton(theme),
  ...MuiOutlinedInput(),
  ...MuiDataGrid(),
  ...MuiTooltip(),
  ...MuiAlert(),
  ...MuiIconButton(),
});
