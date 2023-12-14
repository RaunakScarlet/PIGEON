import LikeService from "../services/like-service.js";

const likeService = new LikeService();

export const toggleLike = async (req, res) => {
    try {
        const response = await likeService.toggleLike(
            req.query.modelId,
            req.query.modelType,
            req.body.userId
        );
        return res.status(201).json({
            success: true,
            message: "successfully toggled like",
            data: response,
            error: {},
        });
    } catch (error) {
        return res.status(500).json({
            successs: false,
            message: "something went wrong",
            data: {},
            error: error,
        });
    }
};
