require("dotenv").config();

import worker from "./schedule/worker";

worker();
