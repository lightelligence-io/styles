exports.breakpoint = {
  xs: 0,
  sm: '576px',
  md: '768px',
  lg: '992px',
  xl: '1200px',
};
exports.color = {
  primary: '#FF6600',
  secondary: '#0D122C',
  info: '#17A2B8',
  success: '#02BF1B',
  error: '#FD5952',
  warning: '#FFC107',
  light: '#FFFFFF',
  dark: '#000000',
};
exports.inverse = {
  primary: 'var(--olt-colorLight)',
  secondary: 'var(--olt-colorLight)',
  info: 'var(--olt-colorLight)',
  success: 'var(--olt-colorLight)',
  error: 'var(--olt-colorLight)',
  warning: 'var(--olt-colorDark)',
  light: 'var(--olt-colorDark)',
  dark: 'var(--olt-colorLight)',
};
exports.gray = {
  '100': '#F5F6F8',
  '200': '#E9ECEF',
  '300': '#E3E4E5',
  '400': '#D0D1D3',
  '500': '#A7A8AA',
  '600': '#58585A',
  '700': '#495057',
  '800': '#343a40',
  '900': '#212529',
};
exports.fontFamilyBase = '\'PT Sans\', \'Arial\'';
exports.fontSizeBase = '16px';
exports.fontSize = {
  xxSmall: 'calc(var(--olt-fontSizeBase) * .65)',
  xSmall: 'calc(var(--olt-fontSizeBase) * .75)',
  small: 'calc(var(--olt-fontSizeBase) * .8)',
  medium: 'var(--olt-fontSizeBase)',
  large: 'calc(var(--olt-fontSizeBase) * 1.5)',
  xLarge: 'calc(var(--olt-fontSizeBase) * 1.8)',
  xxLarge: 'calc(var(--olt-fontSizeBase) * 2.2)',
  smaller: '80%',
  larger: '150%',
};
exports.headingFontSize = {
  '1': '4.375rem',
  '2': '2.5rem',
  '3': '2.25rem',
  '4': '2rem',
  '5': '1.5rem',
  '6': '1.25rem',
};
exports.headingLineHeight = {
  '1': '5.625rem',
  '2': '3rem',
  '3': '2.85rem',
  '4': '2.5rem',
  '5': '2rem',
  '6': '1.75rem',
};
exports.lineHeightBase = '1.5';
exports.fontWeight = {
  light: 400,
  regular: 400,
  bold: 700,
};
exports.spacer = 'var(--olt-fontSizeBase)';
exports.spacing = {
  '0': 0,
  '1': 'calc(var(--olt-spacer) * .25)',
  '2': 'calc(var(--olt-spacer) * .5)',
  '3': 'var(--olt-spacer)',
  '4': 'calc(var(--olt-spacer) * 1.5)',
  '5': 'calc(var(--olt-spacer) * 2)',
  '6': 'calc(var(--olt-spacer) * 3)',
  '7': 'calc(var(--olt-spacer) * 4.5)',
  '8': 'calc(var(--olt-spacer) * 6)',
};