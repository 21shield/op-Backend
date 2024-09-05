const expressMod = require("express");
export const router = expressMod.Router();

router.get("/images", (req, res) => {
  res.send("THIS SHOULD RETURN A LIST OF IMAGES");
});

module.exports = router;
