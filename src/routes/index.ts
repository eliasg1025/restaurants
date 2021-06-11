import { Router } from 'express';

/**
 * Routers
 */
import authRoutes from './auth.routes';
import restaurantsRoutes from './restaurants.routes';

const router: Router = Router();

router.use('/auth', authRoutes);
router.use('/restaurants', restaurantsRoutes);

export default router;
