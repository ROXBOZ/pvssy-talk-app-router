import { useCallback, useEffect, useState } from "react";

import { client } from "../../../config/sanity";

export function useSanityFetch<T>(
  query: string,
  pick: (data: unknown) => T | null,
) {
  const [data, setData] = useState<T | null>(null);

  const load = useCallback(async () => {
    try {
      const result = await client.fetch(query);
      setData(pick(result));
    } catch {
      setData(null);
    }
  }, [query, pick]);

  useEffect(() => {
    load();
  }, [load]);

  return data;
}
