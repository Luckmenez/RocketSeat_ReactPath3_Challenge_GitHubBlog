import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Router } from "./Router";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { IssuesProvider } from "./context/issues-context";
import { ProfileProvider } from "./context/profile-context";

const queryClient = new QueryClient();

export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <QueryClientProvider client={queryClient}>
        <ProfileProvider>
          <IssuesProvider>
            <BrowserRouter>
              <Router />
            </BrowserRouter>
          </IssuesProvider>
        </ProfileProvider>
      </QueryClientProvider>
    </ThemeProvider>
  );
}
