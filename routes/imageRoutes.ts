import express from "express";
export const router = express.Router();

router.get("/images", (req, res) => {
  res.send("THIS SHOULD RETURN A LIST OF IMAGES");
});

export default router;
