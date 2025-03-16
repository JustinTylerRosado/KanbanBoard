import { Router } from 'express';
import authRoutes from './auth-routes.js';
import { authenticateToken } from '../middleware/auth.js';
import { ticketRouter } from './api/ticket-routes.js';
import { userRouter } from './api/user-routes.js';

const router = Router();

// Mount auth routes separately so that login (and signup, if applicable) can be accessed without authentication.
router.use('/auth', authRoutes);

// Apply authentication middleware to all /api routes.
router.use('/api', authenticateToken);

// Mount protected API routes.
router.use('/api/tickets', ticketRouter);
router.use('/api/users', userRouter);


export default router;