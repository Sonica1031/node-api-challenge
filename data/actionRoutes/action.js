const express = require("express");
const router = express.Router();
const db = require("../helpers/actionModel");

router.get("/:project_id", (req, res, next) => {
    db.get(req.params.project_id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            next(error);
        })
})

router.put("/:project_id", (req, res, next) => {
    db.update(req.params.project_id, req.body)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(err => {
            next(err)
        })
})

router.delete("/project_id", (req, res, next) => {
    db.remove(req.params.project_id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => next(error))
})

router.post("/", (req, res, next) =>{
    db.insert(req.body)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(error => {
            next(error)
        })
})

module.exports = router;