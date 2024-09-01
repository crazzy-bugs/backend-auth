import { Router } from 'express';
import { login } from '../controllers/authController';
import { authorizeRole } from '../middlewares/authMiddleware';
import { UserRole } from '../models/User';

const router = Router();

router.post('/login', login);

router.post('/updateInstitute', authorizeRole([UserRole.SAD]), (req, res) => {
  res.send('This is a superadmin-only route for updating institute');
});

router.post('/manageFaculty', authorizeRole([UserRole.SAD, UserRole.AD]), (req, res) => {
  res.send('This is a admin and above authority route for updating attendance');
});

router.post("/link-institute", authorizeRole([UserRole.SAD]), (req, res) => {
  res.json({ message: "Institute linked successfully" });
});

router.get("/generate-report", authorizeRole([UserRole.AD,UserRole.FAC]), (req, res) => {
  res.json({ message: "Report generated successfully" });
});

router.post('/updateAttendance', authorizeRole([UserRole.FAC, UserRole.AD, UserRole.SAD]), (req, res) => {
  res.send('This is a faculty and above authority route for updating attendance');
});

router.post('/viewResult', authorizeRole([UserRole.STD]), (req, res) => {
  res.send('This is all around route for viewing results');
});



router.get('/profile', authorizeRole([
  UserRole.STD,    
  UserRole.FAC,    
  UserRole.AD,     
  UserRole.SAD     
]), (req, res) => {
  res.json({ message: 'User profile' });
});


export default router
