import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import { createSubscription, deleteUserSubscription, getUserSubscriptions } from "../controllers/subscription.controller.js";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Get  subscriptions details" });
});

subscriptionRouter.post("/", authorize, createSubscription)

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update subscriptions" });
});

subscriptionRouter.delete("/:id", authorize, deleteUserSubscription)

subscriptionRouter.get("/user/:id", authorize, getUserSubscriptions)

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel a subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get upcoming renewals" });
});



export default subscriptionRouter;
