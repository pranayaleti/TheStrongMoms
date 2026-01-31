import { createContext, useContext, useState, useCallback } from 'react';

const PageSEOContext = createContext(null);

export function PageSEOProvider({ children }) {
  const [meta, setMetaState] = useState(null);
  const setMeta = useCallback((next) => setMetaState((prev) => (typeof next === 'function' ? next(prev) : next)), []);
  return (
    <PageSEOContext.Provider value={{ meta, setMeta }}>
      {children}
    </PageSEOContext.Provider>
  );
}

export function usePageSEO() {
  const ctx = useContext(PageSEOContext);
  if (!ctx) return { meta: null, setMeta: () => {} };
  return ctx;
}
