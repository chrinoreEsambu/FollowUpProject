const mongoose = require("mongoose");
const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const path = require("path");
const os = require("os");

dotenv.config();

const app = express();
const cors = require("cors");
app.use(cors());
const port = process.env.PORT || 3000;
const url = process.env.DB_URI;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getWifiIP = () => {
  const interfaces = os.networkInterfaces();
  return (
    (interfaces["Wi-Fi"] &&
      interfaces["Wi-Fi"].find((i) => i.family === "IPv4")?.address) ||
    "localhost"
  );
};

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));

(async () => {
  try {
    await mongoose.connect(url, options);
    console.log(" Connecté à MongoDB avec succès");
    const iplocal = getWifiIP();
    app.listen(port, "0.0.0.0", () => {
      console.log(` Serveur disponible sur http://${iplocal}:${port}`);
    });
  } catch (error) {
    console.log(" Erreur de connexion à MongoDB", error);
  }
})();
const WorkoutSchema = new mongoose.Schema(
  {
    exerciseName: String,
    date: String,
    duration: Number,
    sets: Number,
    reps: Number,
    weight: Number,
    exerciseType: String,
    intensity: String,
    notes: String,
  },
  { collection: "updb" }
);

const Workout = mongoose.model("Workout", WorkoutSchema);

app.post("/api/workouts", async (req, res) => {
  try {
    const newWorkout = new Workout(req.body);
    await newWorkout.save();
    res.status(201).json({ message: "Entraînement ajouté !" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});
app.get("/api/workouts", async (req, res) => {
  try {
    const workouts = await Workout.find();
    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({
      message: "Erreur lors de la récupération",
      error: error.message,
    });
  }
});
