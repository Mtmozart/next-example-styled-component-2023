<<<<<<< HEAD
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles';
import { theme } from '../src/styles/theme';
=======
import { BlogThemeProvider } from '../src/contexts/BlogThemeContext';
import { ThemeProvider } from 'styled-components';
import { GlobalStyles } from '../src/styles/global-styles'
import { theme } from '../src/styles/theme'
>>>>>>> 8142ac9abee701437784ab6ca76e4bfb66244c60

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: theme.colors.white,
      },
      {
        name: 'dark',
        value: theme.colors.primaryColor,
      },
    ]
  }
}

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <Story />
      <GlobalStyles />
    </ThemeProvider>
<<<<<<< HEAD
  ),
=======
  )
>>>>>>> 8142ac9abee701437784ab6ca76e4bfb66244c60
];
