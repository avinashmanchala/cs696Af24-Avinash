import express from "express";
import cors from "cors";
import db from "./db/connection.js";
import redisClient from "./db/redis.js";
import messageQueue from "./db/bull.js";
const PORT = process.env.PORT || 8001;
const app = express();
app.use(cors());
app.use(express.json());
app.delete('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    
    const cachedValue = await redisClient.get(restaurant_id);
    
    if (cachedValue) {
        await redisClient.del(restaurant_id);
    }
    
    const result = await db.collection("restaurants").deleteOne({
        restaurant_id: restaurant_id,
    });
    
    if (result.deletedCount > 0) {
        res.send({"success": true, "message": "Restaurant deleted successfully."});
    } else {
        res.status(404).send({"success": false, "message": "Restaurant not found."});
    }
});

app.put('/restaurants/:id', async function(req, res) {
    const restaurant_id = req.params["id"];
    const updates = req.body["updates"];
    messageQueue.add({
    restaurant_id: restaurant_id,
    updates: JSON.stringify(updates)
    });
    res.send("Message Queued");
    });
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
