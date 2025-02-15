import logo from './logo.svg';
import './App.css';
import { InnerContainer } from './Components/Container/InnerContainer';
import { FileUploadPage } from './Components/Components/FileUploadPage';
import theme from './assets/theme/index';
import { ThemeProvider } from '@emotion/react';
import { useGlobalState } from './context';
import { Backdrop, CircularProgress } from '@mui/material';
import { GraphGeneratorPage } from './Components/Components/GraphGeneratorPage';

function App() {

  const [state] = useGlobalState();
  const isFileUploaded = () => {
    return state.file != null && state.axesParam != null;
  }
  return (
    <ThemeProvider theme={theme}>
      <InnerContainer>
        <Backdrop
          sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
          open={state.showLoader}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        {!isFileUploaded() ? <FileUploadPage /> : <GraphGeneratorPage/>}
      </InnerContainer>
    </ThemeProvider>
  );
}

export default App;
