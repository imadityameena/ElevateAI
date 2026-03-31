const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

const app = express();

const normalizeOrigin = (origin = "") => origin.trim().replace(/\/+$/, "");

const allowedOrigins = (process.env.CLIENT_ORIGIN || "http://localhost:5173")
  .split(",")
  .map((origin) => normalizeOrigin(origin))
  .filter(Boolean);

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: (origin, callback) => {
      // Allow non-browser clients like server-to-server calls and health checks.
      if (!origin) {
        callback(null, true);
        return;
      }

      const normalizedOrigin = normalizeOrigin(origin);

      if (allowedOrigins.includes(normalizedOrigin)) {
        callback(null, true);
        return;
      }

      callback(new Error(`CORS blocked for origin: ${origin}`));
    },
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    optionsSuccessStatus: 204,
  }),
);

app.get("/", (req, res) => {
  res.status(200).json({
    message: "ElevateAI backend is running",
    docs: "/api/auth and /api/interview",
  });
});

app.get("/health", (req, res) => {
  res.status(200).json({ status: "ok" });
});



/* require all the routes here */
const authRouter = require("./routes/auth.routes");
const interviewRouter = require("./routes/interview.routes");

/* using all the routes here */
app.use("/api/auth", authRouter);
app.use("/api/interview", interviewRouter);

module.exports = app;
