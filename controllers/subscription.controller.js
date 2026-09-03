import Subscription from '../models/subscription.model.js';

export const createSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.create({
            ...req.body,
            user: req.user._id
        });
        res.status(201).json({success: true, data: subscription});
    } catch (error) {
        next(error);
    }
}

export const getUserSubscriptions = async (req, res, next) => {
    try {
        if (req.user.id !== req.params.id) {
            return res.status(403).json({success: false, message: "You are not the owner of this account"});
        }
        const subscriptions = await Subscription.find({user: req.params.id})
        res.status(200).json({success: true, data: subscriptions});
    } catch (error) {
        next(error);
    }
}

export const deleteUserSubscription = async (req, res, next) => {
    try {
        const subscription = await Subscription.findByIdAndDelete({_id: req.params.id, user: req.user._id});
        if (!subscription) {
            return res.status(404).json({message: "Subscription not found"})
        }
        res.status(200).json({
            success: true,
            message: "Subscription deleted successfully"
        });
    } catch(error) {
        next(error);
    }
}