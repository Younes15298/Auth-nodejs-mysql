const {
  creatUser,
  getUsers,
  getUserByUserId,
  updateUser,
  deleteUser,
  login,
} = require("./user.controller");
const router = require("express").Router();
const { checkToken } = require("../../auth/token_validation");

router.post("/", creatUser);
router.post("/login", login);
router.get("/", checkToken, getUsers);
router.get("/:id", getUserByUserId);
router.patch("/", updateUser);
router.delete("/", deleteUser);
module.exports = router;
