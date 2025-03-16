import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

export const authenticateToken = (
  req: Request, 
  res: Response, 
  next: NextFunction
): void => {
  // Get token from the Authorization header (expects "Bearer <token>")
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    res.status(401).json({ error: 'Access denied. No token provided.' });
    return;
  }

  jwt.verify(token, process.env.JWT_SECRET as string, (err, decoded): void => {
    if (err) {
      res.status(403).json({ error: 'Invalid token.' });
      return;
    }
    if (typeof decoded === 'string') {
      res.status(403).json({ error: 'Invalid token payload.' });
      return;
    }
    // Cast the decoded value to the expected shape (with at least a username property)
    req.user = decoded as { username: string };
    next();
  });
};