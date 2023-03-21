import { useGithubContext } from "../context/githubContext";
import debounce from "lodash.debounce";

const debouncedHandle = debounce((callback, value) => {
  callback(value);
}, 1000);

const Search = () => {
  const { searchTerm, setSearchTerm, users, loading, error, handleSearch } =
    useGithubContext();

  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <input
        type="text"
        value={searchTerm}
        onChange={(event) => {
          setSearchTerm(event.target.value);
          debouncedHandle(handleSearch, searchTerm);
        }}
      />
      {users.length === 0 ? (
        <p>No result...</p>
      ) : (
        users.map((user) => (
          <div key={user.id}>
            <p>{user.login}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default Search;
