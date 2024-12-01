import logo from './logo.svg';
import './App.css';
import { InnerContainer } from './Components/Container/InnerContainer';
import { FileUploadPage } from './Components/Components/FileUploadPage';
import theme from './assets/theme/index';
import { ThemeProvider } from '@emotion/react';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <InnerContainer>
        <FileUploadPage>
          
        </FileUploadPage>
      </InnerContainer>
    </ThemeProvider>
  );
}

export default App;
