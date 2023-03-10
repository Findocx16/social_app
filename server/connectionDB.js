import mongoose from "mongoose";

const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

export default () => {
    return new Promise((resolve, reject) => {
        mongoose
            .connect(
                process.env.MONGO_URL,
                connectionParams,
                mongoose.set("strictQuery", false)
            )
            .then(() => {
                console.log("Connected to Altas");
                resolve();
            })
            .catch((error) => {
                console.log("Connection error", error);
                reject(error);
            });
    });
};
