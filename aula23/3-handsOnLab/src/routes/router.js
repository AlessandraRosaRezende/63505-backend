const express = require("express");
const jwt = require("jsonwebtoken");

class Router {
  constructor() {
    this.router = express.Router();
    this.init();
  }

  getRouter() {
    return this.router;
  }

  init() { }

  applyCallback(callbacks) {
    return callbacks.map((callback) => async (...params) => {
      try {
        await callback.apply(this, params);
      } catch (error) {
        console.error(error);
        params[1].status(500).send(error);
      }
    });
  }

  generateCustomResponses = (req, res, next) => {
    res.sendSuccess = (payload) => res.status(201).json({ status: "success", payload });
    res.sendServerError = (error) => res.status(500).json({ status: "error", error });
    res.sendoUserError = (error) => res.status(400).json({ status: "error", error });
    res.sendUnhautorized = (error) => res.status(401).json({ status: "error", error });
    next();
  };

  get(path, polices, ...callbacks) {
    this.router.get(path, this.handlePolices(polices), this.generateCustomResponses, this.applyCallback(callbacks));
  }

  post(path, polices, ...callbacks) {
    this.router.post(path, this.handlePolices(polices), this.generateCustomResponses, this.applyCallback(callbacks));
  }

  put(path, polices, ...callbacks) {
    this.router.put(path, this.handlePolices(polices), this.generateCustomResponses, this.applyCallback(callbacks));
  }

  delete(path, polices, ...callbacks) {
    this.router.delete(path, this.handlePolices(polices), this.generateCustomResponses, this.applyCallback(callbacks));
  }

  handlePolices = (policies) => (req, res, next) => {
    if (policies[0] === "PUBLIC") return next();

    const authHeaders = req.headers.authorization;

    if (!authHeaders) return res.status(401).json({message: "Unauthorized"});

    const token = authHeaders.split(" ")[1];
    const user = jwt.verify(token, "CoderSecret");

    console.log(user);

    if (policies && !policies.includes(user.role.toUpperCase())) return res.status(400).json({ message: "sem acesso" });
    req.user = user;
    next(); 
  };
}

module.exports = Router;