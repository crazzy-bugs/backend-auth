import { Router } from 'express'
import { login } from '../controllers/authController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

router.post('/login', login)
router.get('/profile', authMiddleware(['student', 'faculty', 'admin', 'superadmin']), (req, res) => {
  res.json({ message: 'User profile' })
})

export default router
