import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/ErrorBoundary";
import SideBar from "./components/SideBar";
import AppRouter from "./Routes";
import "./styles.css";
import { HelmetProvider } from "react-helmet-async";

export default function App() {
  return (
    <div className="App">
      <HelmetProvider>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <SideBar />
          <AppRouter />
        </ErrorBoundary>
      </HelmetProvider>
    </div>
  );
}
