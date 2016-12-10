const express = require('express');
const app = express();

const port = process.env.PORT || 8080;

app.use(express.static("./public"));

const calendarRoutes = require("./routes/calendar");
app.use('/calendar', calendarRoutes);

app.listen(port, function() {
  console.log("Pirates on Deck", port);
});
