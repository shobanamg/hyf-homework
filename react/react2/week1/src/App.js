import "./App.css";
import Search from "./components/Search";
import { GithubProvider } from "./context/githubContext";

const App = () => {
  return (
    <>
      <h1>Github User Searcher</h1>
      <GithubProvider>
        <Search />
      </GithubProvider>
    </>
  );
};

export default App;
