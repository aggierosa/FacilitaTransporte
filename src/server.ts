import app from "./app";
import { AppDataSource } from "./data-source"

(async () => {
    await AppDataSource.initialize().catch((err) => 
    console.error("Error during initialization", err)
    )

    app.listen(process.env.PORT || 3333, () => {
        console.log("Server running at port 3333")
    })
})()