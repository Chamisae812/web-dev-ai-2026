import express from "express";
import auth from "../middleware/auth.js";
import upload, { uploadToCloudinary } from "../middleware/upload.js";
import {
  getRecipes,
  getRecipe,
  addRecipe,
  deleteRecipe,
  editRecipe,
} from "../controllers/recipesController.js";
// URL, 메서드를 컨트롤러로 연결
const router = express.Router();


// POST방식으로 http://localhost:4000/recipes
router.post("/", auth, upload.single("image"), uploadToCloudinary, addRecipe);
// GET방식으로 http://localhost:4000/recipes
router.get("/", getRecipes);
// GET방식으로 http://localhost:4000/recipes/:id
router.get("/:id", getRecipe);
router.delete("/:id", auth, deleteRecipe);
router.put("/:id", auth, upload.single("image"), uploadToCloudinary, editRecipe);

export default router;
