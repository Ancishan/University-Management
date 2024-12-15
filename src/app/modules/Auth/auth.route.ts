
import express from 'express'
import validateRequest from '../../middleware/validateRequest';
import { AuthValidation } from './auth.validation';
import { AuthControllers } from './auth.controller';

const router = express.Router();

router.post('/login', validateRequest(AuthValidation.LoginValidationSchema), AuthControllers.loginUser)


export const AcademicSchemaRoutes = router;