import { useEffect, useState } from 'react';
import { fetchJson } from '../services/dataService';

/** Carga un JSON y actualiza el estado: { data, loading, error }. `fetcher` permite inyectar un mock. */
export default function useJson(path, fetcher = fetchJson) {
  const [state, setState] = useState({ data: null, loading: true, error: null });
  useEffect(() => {
    let active = true;
    setState({ data: null, loading: true, error: null });
    fetcher(path)
      .then((data) => active && setState({ data, loading: false, error: null }))
      .catch((e) => active && setState({ data: null, loading: false, error: e.message }));
    return () => { active = false; };
  }, [path, fetcher]);
  return state;
}
