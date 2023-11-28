import express from "express";
import cors from "cors";

const applyRequestMiddleware = (app) => {
  app.use(cors());
  app.use(express.json());
};

export default applyRequestMiddleware;
