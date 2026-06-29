import { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Features from "../../components/features/Features";
import api from "../../services/api";

function Home() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    api
      .get("/")
      .then((res) => {
        setMessage(res.data.message);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return (
    <>
      <Hero />

      {/* Backend Test */}
      <div className="bg-slate-900 py-6 text-center text-cyan-400 text-lg">
        Backend says: {message}
      </div>

      <Features />
    </>
  );
}

export default Home;