import { Router } from "express";
const router = Router();

/**
 * @swagger
 * /test/example:
 *   get:
 *     summary: Get example data
 *     description: Retrieve example data from the server
 *     responses:
 *       200:
 *         description: Example data retrieved successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello World
 */
router.get("/example", (req, res) => {
  res.json({ message: "Hello World" });
});


/**
 * @swagger
 * /test/example:
 *   post:
 *     summary: Create example data
 *     description: Create example data on the server
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               message:
 *                 type: string
 *                 example: Hello World
 *     responses:
 *       201:
 *         description: Example data created successfully
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Hello World
 */
router.post("/example", (req, res) => {
  res.status(201).json(req.body);
}
);

export default router;
