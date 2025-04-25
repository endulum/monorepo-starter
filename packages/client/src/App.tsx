import { useState, useEffect } from "react";

import "./utils/trpc";

function App() {
  const [data, setData] = useState<unknown>(null);
  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api");
      const data = await response.json();
      setData(data);
    };
    fetchData();
  }, []);

  return <>{data && <pre>{JSON.stringify(data, null, 3)}</pre>}</>;
}

export default App;
