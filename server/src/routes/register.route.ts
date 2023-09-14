import { Router } from "express";
import { registerConfirm, registrationRequest } from "../controllers/registration.controller";

const registrationRouter = Router();

registrationRouter.post('/request', registrationRequest);
registrationRouter.post('/confirm', registerConfirm);


export default registrationRouter;