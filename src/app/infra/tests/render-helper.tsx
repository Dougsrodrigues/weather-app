import { render as rtlRender } from '@testing-library/react-native';
import React, { FC } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeProvider } from 'styled-components/native';
import themes from '@/app/themes';
import typography from '@/app/themes/typography';

export * from '@testing-library/react-native';

export function render(ui: JSX.Element) {
  const theme = themes.light;
  const queryClient = new QueryClient();

  const Wrapper: FC = ({ children }) => {
    return (
      <ThemeProvider theme={{ ...theme, ...typography }}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ThemeProvider>
    );
  };

  return rtlRender(ui, { wrapper: Wrapper });
}
