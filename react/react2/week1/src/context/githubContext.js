import React, { createContext, useContext, useState } from "react";
import axios from "axios";

export const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (value) => {
    try {
      setLoading(true);
      const response = await axios.get(
        `https://api.github.com/search/users?q=${value}`
      );
      setUsers(response.data.items);
      setError("");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(`error fetching ${error.message}`);
    }
  };

  const contextValue = {
    searchTerm,
    setSearchTerm,
    users,
    loading,
    error,
    handleSearch,
  };

  return (
    <GithubContext.Provider value={contextValue}>
      {children}
    </GithubContext.Provider>
  );
};

// custom hook to use the context
export function useGithubContext() {
  return useContext(GithubContext);
}
