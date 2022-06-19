const express = require("express");
const {
	register,
	login,
	logout,
	currentUser,
} = require("../../controllers/auth");
const router = express.Router();
const { schemaRegister, schemaLogin } = require("../../models/user");
const { validateRequest, auth } = require("../../middlewares");

router.post("/signup", validateRequest(schemaRegister), register);
router.post("/login", validateRequest(schemaLogin), login);
router.post("/logout", auth, logout);
router.get("/current", auth, currentUser);

module.exports = router;
