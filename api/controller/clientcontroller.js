import { bidsModel, projectModel, userModel } from "../model/model.js"

export const clientProfileUpdate = async (req, res) => {
   try {
        const { _id, name, email, phone, location, bio, password, npassword } = req.body;
        const isExist = await userModel.findOne({ _id, password, type: "client" })
        if (isExist) {
            const updateData = { name, email, phone, location, bio }
            if (npassword) updateData.password = npassword
            const result = await userModel.updateOne({ _id }, { $set: updateData })
            res.json({
                code: 200,
                success: true,
                message: "Profile updated successfully",
                result: result,
                error: false
            })
        } else {
            res.json({
                code: 400,
                success: false,
                message: "Current password is incorrect",
                result: "",
                error: true
            })
        }
    } catch (err) {
        console.log(err)
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const clientStats = async (req, res) => {
    try {
        const { clientId } = req.query;
        const totalProjects = await projectModel.countDocuments({ clientId })
        const totalBids = 2;
        const totalDeals = 1;
        const result = { totalProjects, totalBids, totalDeals }
        res.json({
            code: 200,
            success: true,
            message: "Data found",
            result: result,
            error: false
        })
    } catch (err) {
        console.log(err);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const clientBidingActions = async (req, res) => {
    try {
        const { projectId, status, userId } = req.body;
        const result = await bidsModel.updateOne({ projectId, userId }, { $set: { status } })
        res.json({
            code: 200,
            success: true,
            message: "status updated",
            result: result,
            error: false
        })
    } catch (err) {
        console.log(err);
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const clientBidingList = async (req, res) => {
    try {
        const { projectId } = req.query;
        const raw = await bidsModel.find({ projectId })
        const finalData = await Promise.all(
            raw?.map(async (item) => {
                const user = await userModel.findOne({ _id: item?.userId })
                return {
                    _id: item?._id,
                    amount: item?.amount,
                    status: item?.status,
                    user_name: user?.name,
                    user_email: user?.email,
                    user_profile: user?.profile,
                    userId: user?._id

                }
            })
        )
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: finalData,
            error: false
        })

    } catch (err) {
        res.json({
            code: 500,
            success: false,
            message: "Internal Server Error",
            result: "",
            error: true
        })
    }
}

export const postProject = async (req, res) => {
    try {
        const { clientId, title, desc, budget, duration } = req.body
        const isExists = await projectModel.findOne({ clientId, title })
        if (isExists) {
            res.json({
                code: 400,
                success: false,
                message: "Project already exists",
                result: "",
                error: true
            })
        }
        else {
            const data = new projectModel({ clientId, title, desc, budget, duration })
            const result = await data.save()
            res.json({
                code: 200,
                success: true,
                message: "Project posted successfully..",
                result: result,
                error: false
            })
        }
    }
    catch (err) {
        console.log(err);

        res.json({
            code: 500,
            success: false,
            message: "Internal Server error",
            result: "",
            error: true
        })
    }
}

export const clientProjectList = async (req, res) => {
    try {
        const { clientId } = req.query;
        const result = await projectModel.find({ clientId })
        res.json({
            code: 200,
            success: true,
            message: "Data fetched",
            result: result,
            error: false
        })
    }
    catch (err) {
        console.log(err);

        res.json({
            code: 500,
            success: false,
            message: "Internal Server error",
            result: "",
            error: true
        })
    }
}