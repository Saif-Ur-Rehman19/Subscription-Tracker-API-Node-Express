import { Router } from "express";

const subscriptionRouter = Router();

subscriptionRouter.get("/", (req, res) => {
  res.send({ title: "Get all subscriptions" });
});

subscriptionRouter.get("/:id", (req, res) => {
  res.send({ title: "Get  subscriptions details" });
});

subscriptionRouter.post("/", (req, res) => {
  res.send({ title: "create subscriptions" });
});

subscriptionRouter.put("/:id", (req, res) => {
  res.send({ title: "update subscriptions" });
});

subscriptionRouter.delete("/:id", (req, res) => {
  res.send({ title: "delete subscriptions" });
});

subscriptionRouter.get("/user/:id", (req, res) => {
  res.send({ title: "Get all subscriptions for a user" });
});

subscriptionRouter.put("/:id/cancel", (req, res) => {
  res.send({ title: "Cancel a subscription" });
});

subscriptionRouter.get("/upcoming-renewals", (req, res) => {
  res.send({ title: "Get upcoming renewals" });
});



export default subscriptionRouter;
