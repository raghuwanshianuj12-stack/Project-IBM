import { useState } from "react";

function App() {
  const [symptoms, setSymptoms] = useState("");
  const [age, setAge] = useState("");
  const [result, setResult] = useState("");

  const checkSymptoms = async () => {
    const res = await fetch("http://localhost:5000/check-symptoms", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ symptoms, age }),
    });

    const data = await res.json();
    setResult(data.result + "\n\n" + data.disclaimer);
  };

  return (
    <div style={{ padding: "30px", fontFamily: "Arial" }}>
      <h2>AI Symptom Checker</h2>

      <textarea
        placeholder="Enter your symptoms"
        value={symptoms}
        onChange={(e) => setSymptoms(e.target.value)}
        rows="4"
        style={{ width: "300px" }}
      />

      <br /><br />

      <input
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />

      <br /><br />

      <button onClick={checkSymptoms}>Check</button>

      <p style={{ marginTop: "20px" }}>{result}</p>
    </div>
  );
}

export default App;
