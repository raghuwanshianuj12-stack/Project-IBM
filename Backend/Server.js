import express from "express";
import cors from "cors";
import fetch from "node-fetch";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/check-symptoms", async (req, res) => {
  const { symptoms, age } = req.body;

  if (!symptoms) {
    return res.status(400).json({ error: "Symptoms required" });
  }

  // Simple AI-style response (safe & reliable)
  let response = `Based on the symptoms "${symptoms}", this may indicate a minor health issue. 
If symptoms persist or worsen, please consult a qualified doctor.`;

  if (symptoms.toLowerCase().includes("chest pain")) {
    response =
      "Chest pain can be serious. Please seek immediate medical attention.";
  }

  res.json({
    result: response,
    disclaimer:
      "This tool does not replace professional medical advice.",
  });
});

app.get("/", (req, res) => {
  res.send("Symptom Checker API is running");
});

app.listen(5000, () => {
  console.log("Backend running on port 5000");
});
