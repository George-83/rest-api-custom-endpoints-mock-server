import express from 'express';
import mocks from "./mocks.json";

const app = express();

// Choose on which port you want to run your server (by default it is 3000 port)
const port: string | number = process.env.PORT || 3000;

// Runs the server
const server = app.listen(port, () => {
    console.log(`Server started on port ${port}.`);
});

app.use(express.json());

app.all("*", (req, res) => {
    const mock = mocks.find(m =>
        m.method === req.method &&
        m.path === req.path
    );

    if (!mock) {
        return res.status(404).json({ error: "Mock not found" });
    }

    res.status(mock.response.status).json(mock.response.body);
});
