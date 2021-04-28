const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.use('/', (req, res) => {
    res.json({ msg: "You've reached my API! 🥳" });
});

app.use('/api/users', require('./routes/users'));
app.use('/api/auth', require('./routes/auth'));

app.listen(PORT, () => console.log(`Server started on port ${PORT} 🪴`));