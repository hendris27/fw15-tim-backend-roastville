import { Router } from "express"
import authRouter from "./auth/auth.router.js"
import profileRouter from "./profile.router.js"
import productRouter from "../routers/products.router.js"
import transactionRouter from "../routers/transactions.router.js"
import authMiddleware from "../middlewares/auth.middleware.js"

const router = Router()

router.use("/auth", authRouter)
router.use("/profile", authMiddleware, profileRouter)
router.use("/products", productRouter)
router.use("/transactions", transactionRouter)

router.get("/", (req, res) => {
  return res.status(200).json({
    success: true,
    message: "Backend is running well",
  })
})

router.get("*", (req, res) => {
  return res.status(400).json({
    success: false,
    message: "Resources not found",
  })
})

export default router
