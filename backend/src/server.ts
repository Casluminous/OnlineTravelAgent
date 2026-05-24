import cors from "cors";
import express from "express";
import { store } from "./store.js";

const app = express();
const port = Number.parseInt(process.env.PORT ?? "3000", 10);

app.use(cors());
app.use(express.json());

app.get("/health", (_, res) => {
  res.json({ ok: true });
});

app.get("/api/bootstrap", (_, res) => {
  res.json(store.getBootstrap());
});

app.get("/api/favorites", (_, res) => {
  res.json(store.getFavorites());
});

app.patch("/api/destinations/:id/favorite", (req, res) => {
  const id = req.params.id;
  const isFavorite = req.body?.isFavorite;
  const updated = store.updateFavorite(id, isFavorite);
  if (!updated) {
    res.status(404).json({ message: "Destination not found" });
    return;
  }
  res.json(updated);
});

app.get("/api/trips", (req, res) => {
  const type = typeof req.query.type === "string" ? req.query.type : undefined;
  res.json(store.getTrips(type));
});

app.post("/api/trips/book", (req, res) => {
  const destinationId = req.body?.destinationId;
  if (typeof destinationId !== "string" || destinationId.trim().length === 0) {
    res.status(400).json({ message: "destinationId is required" });
    return;
  }

  const trip = store.createTrip(destinationId);
  if (!trip) {
    res.status(404).json({ message: "Destination not found" });
    return;
  }
  res.status(201).json(trip);
});

app.get("/api/profile", (_, res) => {
  res.json(store.getProfile());
});

app.put("/api/profile", (req, res) => {
  const name = req.body?.name;
  const email = req.body?.email;
  const profile = store.updateProfile(name, email);
  res.json(profile);
});

app.get("/api/documents", (_, res) => {
  res.json(store.getDocuments());
});

app.post("/api/documents", (req, res) => {
  const title = req.body?.title;
  const description = req.body?.description;
  const icon = req.body?.icon;
  const color = req.body?.color;

  if (
    typeof title !== "string" ||
    typeof description !== "string" ||
    typeof icon !== "string" ||
    typeof color !== "string" ||
    title.trim().length === 0 ||
    description.trim().length === 0 ||
    icon.trim().length === 0 ||
    color.trim().length === 0
  ) {
    res.status(400).json({ message: "title, description, icon and color are required" });
    return;
  }

  const doc = store.createDocument(title, description, icon, color);
  res.status(201).json(doc);
});

app.listen(port, () => {
  console.log(`Backend running at http://localhost:${port}`);
});
