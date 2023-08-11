import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorsThemes: {
      primary: string;
      secondary: string;
      darkText: string;
      white: string;
      mediumGray: string;
      darkerGray: string;
    };
  }
}
