import { useState } from "react";
import "./styles/theme.css";
import Welcome from "./components/Welcome";
import Message from "./components/Message";
import Wish from "./components/Wish";
import FinalScene from "./components/FinalScene";
import Stars from "./components/Stars";

function App() {
  const [page, setPage] = useState(0);
  const next = () => setPage(p => Math.min(p + 1, 3));
  const prev = () => setPage(p => Math.max(p - 1, 0));
  const [madeWish, setMadeWish] = useState(false);

  return (
    <>
      <Stars triggerWish = {madeWish} />
      {page === 0 && <Welcome next = {next} />}
      {page === 1 && <Message next = {next} prev = {prev} />}
      {page === 2 && <Wish next = {next} prev = {prev} />}
      {page === 3 && <FinalScene/>}
    </>
  )
}

export default App;