import Layout from "./components/Layout/Layout";
import { useState, useEffect } from "react";

function App() {
  const [emotion, setEmotion] = useState("happy");

  useEffect(() => {
    console.log(`It's ${emotion} right now`);
  }, [emotion]);

  return (
    <div>
      <Layout>
        <p>Test</p>
      </Layout>
      <h1>
        Current emo is {emotion};
      </h1>
    </div>
  );
}

export default App;
