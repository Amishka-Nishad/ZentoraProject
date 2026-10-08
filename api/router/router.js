import express from 'express'
import { userRegister,userLogin } from '../controller/authcontroller.js';
import {AdminProfileUpdate, adminBidingList, adminUserList,adminProjectList,adminClientList,createMasterPlan,getMasterPlan,adminStats } from '../controller/admincontroller.js';
import {clientProfileUpdate,clientStats, postProject,clientProjectList,clientBidingList,clientBidingActions } from '../controller/clientcontroller.js';
import {UserProfileUpdate,UserStats, userProjectList,userPurchasePlan,createUserBids,getUserBids } from '../controller/usercontroller.js';
const router = express.Router();
router.post("/register",userRegister)
router.post('/login',userLogin)
//admin api
router.get('/admin-users-list',adminUserList)
router.get('/admin-clients-list',adminClientList)
router.get('/admin-project-list',adminProjectList)
router.post('/admin-create-plan',createMasterPlan)
router.get('/admin-get-plans',getMasterPlan)
router.get('/admin-stats',adminStats)
router.get('/admin-biding-list', adminBidingList)
router.put('/admin-profile-update',AdminProfileUpdate)

//client api
router.get('/client-stats',clientStats) //client dashboard me lagana hai
router.post('/client-post-project',postProject)
router.get('/client-project-list',clientProjectList)
router.get('/client-biding-list',clientBidingList)
router.put('/client-biding-action',clientBidingActions)
router.put('/client-profile-update',clientProfileUpdate)

//user api
router.get('/user-stats',UserStats)
router.get('/user-project-list',userProjectList)
router.post('/user-purchase-plan',userPurchasePlan)
router.post('/user-create-bids',createUserBids)
router.get('/user-get-bids',getUserBids)
router.put('/user-profile-update', UserProfileUpdate)
export default router;

