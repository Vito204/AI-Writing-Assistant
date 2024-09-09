require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors");
const rephraseRouter = require("./routes/rephrase");
const spellCheckRouter = require("./routes/spellCheck");
const grammarCheckRouter = require("./routes/grammarCheck");
const bodyParser = require("body-parser");
const PORT = 3000;

//URL:https://api.openai.com/v1/chat/completions

// middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());

// routes
app.use("/api/rephrase", rephraseRouter);
app.use("/api/spellcheck", spellCheckRouter);
app.use("/api/grammarcheck", grammarCheckRouter);

//start server
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
