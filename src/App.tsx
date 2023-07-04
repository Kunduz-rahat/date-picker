import { useState } from "react";
import { DatePicker } from "./components/DatePicker";

function App() {
  const [date, setDate] = useState(()=> new Date())
  return <DatePicker value={date} onChange={setDate}/>;
}

export default App;
