import express, {Router} from "express"
import {getAllUsers,createUser,getSingleUser,deleteUser, editUser} from '../controllers/userController.js'
let router= express.Router();
//routers
router.get('/users',getAllUsers)
router.post('/users',createUser)
router.get('/users/:id', getSingleUser)
router.delete('/users/:id',deleteUser)
router.put('/users/:id',editUser)

export default router;