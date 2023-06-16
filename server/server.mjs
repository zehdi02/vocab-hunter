import express from 'express';
import cors from 'cors';
import "../server/loadEnviornment.mjs";
import users from "./routes/users.mjs";

const PORT = process.env.PORT || 5050;
const app = express();

app.use(cors());
app.use(express.json());
app.use("/record", users);

app.listen(PORT, () => {
    console.log(`Server is running on: ${PORT}`);
})
