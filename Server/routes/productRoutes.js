const express = require("express")
const productController = require("../controllers/productController")

const router = express.Router()

router.post("/", productController.createProduct)
router.get("/", productController.getAllProducts)   
router.get("/:id", productController.getProductById)
router.get("/name/:name", productController.getProductByName)
router.delete("/:id", productController.deleteProduct)
router.put("/:id", productController.updateProduct)

module.exports = router;
