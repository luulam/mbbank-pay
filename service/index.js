const express = require("express");
const routes = require("../api/routes/v1");

/**
 * Express instance
 * @public
 */
const app = express();

const router = express.Router();

router.use("/partner", userRoutes);
router.use("/transaction", authRoutes);

app.use("/v1", routes);

app.listen(port, () => logger.info(`server started on port ${port} (${env})`));

module.exports = app;
