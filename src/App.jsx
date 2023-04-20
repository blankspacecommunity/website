import Sidebar from "./components/Sidebar/Sidebar";
import DashboardPage from "./components/Sidebar/Sidebar";
import LandingPage from "./pages/LandingPage/LandingPage";
import SignInPage from "./pages/SignInPage/SignInPage";

function App() {
  return (
    <div className="App">
      <LandingPage />
      <SignInPage />
      <Sidebar />
    </div>
  );
}

export default App;
