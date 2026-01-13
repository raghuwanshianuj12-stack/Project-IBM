import express from "express";
import cors from "cors";

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Health check route
app.get("/", (req, res) => {
  res.send("Symptom Checker API is running");
});

// Main API
app.post("/check-symptoms", (req, res) => {
  const { symptoms, age } = req.body;

  if (!symptoms) {
    return res.status(400).json({
      error: "Symptoms are required",
    });
  }

  let result =
    `Based on the symptoms "${symptoms}", this may indicate a mild health issue. ` +
    `If symptoms continue or worsen, please consult a doctor.`;

  if (symptoms.toLowerCase().includes("chest pain")) {
    result =
      "Chest pain can be serious. Please seek immediate medical attention.";
  }

  res.json({
    result,
    disclaimer:
      "This tool is for educational purposes only and does not replace professional medical advice.",
  });
});

// IMPORTANT: Render dynamic PORT
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
