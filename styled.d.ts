import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colorsThemes: {
      primaryColor: string;
      secondaryColor: string;
      white: string;
      mediumGray: string;
    };
    font: {
      family: {
        default: string;
        secondary: string;
      };

      size: {
        xsmall: string;
        small: string;
        medium: string;
        large: string;
        xlarge: string;
        xxlarge: string;
        huge: string;
        xhuge: string;
      };
    };
    media: {
      lteMedium: string;
    };
    spacings: {
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
      huge: string;
      xhuge: string;
    };
  }
}
