import { Router } from "express";
import { loginUser, logoutUser, registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
import { verifyJWT } from "../middlewares/auth.middleware.js";
import { refreshAccessToken } from "../controllers/user.controller.js";
import { changeCurrentPassword } from "../controllers/user.controller.js";
import { getCurrentUser } from "../controllers/user.controller.js";
import { updateAccountDetails } from "../controllers/user.controller.js";
import { updateUserAvatar } from "../controllers/user.controller.js";
import { updateUserCoverImage } from "../controllers/user.controller.js";
const router=Router();

router.route("/register").post(
    upload.fields([
        {
            name:"avatar",
            maxCount:1
        },
        {
            name:"coverImage",
            maxCount:1
        }
    ]),
    registerUser
);

router.route("/login").post(loginUser);
// secured routes
router.route("/logout").post(verifyJWT,logoutUser);
router.route("/refresh-token").post(refreshAccessToken);
router.route("/password-change").post(verifyJWT,changeCurrentPassword);
router.route("/current-user").post(verifyJWT,getCurrentUser);
router.route("/update-details").post(verifyJWT,updateAccountDetails);
router.route("/update-avatar").post(verifyJWT,updateUserAvatar);
router.route("/update-coverImage").post(verifyJWT,updateUserCoverImage);
export default router;