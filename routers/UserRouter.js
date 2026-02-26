const express = require("express");
const controller = require("../controller/userController");


const router = express.Router();

router.get("/",controller.getAllUser);
router.get("/:id",controller.getUserById);
router.post("/create",controller.createUser);
router.put("/update",controller.updateUserById);
router.delete("/delete/:id",controller.deleteUserById)





module.exports = router;
