import { useEffect, useState } from "react";

const API_KEY = import.meta.env.VITE_API_KEY;

const URL = `https://api.rawg.io/api/games?key=${API_KEY}`;

export default function useGames() {
  const [state, setState] = useState({
    data: null,
    isLoading: true,
    error: null,
  });
  const [page, setPage] = useState(0);

  function changePage(page) {
    if (typeof page !== "number" && page !== undefined) {
      throw Error(`Invalid argument "${page}", should type of number`);
    }
    setPage(page);
  }

  useEffect(() => {
    async function getGames() {
      try {
        const url =
          page === undefined || page === 0 ? URL : URL + `&page=${page}`;
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("An Error has occured");
        }
        const data = await response.json();
        setState({
          ...state,
          data: data,
          error: null,
          isLoading: false,
        });
      } catch (error) {
        setState({
          ...state,
          data: null,
          error: error,
          isLoading: false,
        });
      }
    }
    getGames();
  }, [page]);

  return { state, changePage };
}
