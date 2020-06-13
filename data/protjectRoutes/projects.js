const express = require("express");
const router = express.Router();
const db = require("../helpers/projectModel");
const { reset } = require("nodemon");

router.get("/", (req, res, next) => {
    db.get()
    .then(response => {
        res.status(200).json(response)
    })
    .catch(error => {
        next(error)
    })
})

router.get("/:id", (req, res, next) => {
        db.get(req.params.id)
            .then(response =>{
                res.status(200).json(response)
            })
            .catch(error => {
                next(error)
            })
    })

router.put("/:id", (req, res, next) => {
    db.update(req.params.id, req.body)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error => {
            next(error)
        })
})

router.delete("/:id", (req, res, next) => {
    db.remove(req.params.id)
        .then(response =>{
            res.status(200).json(response)
        })
        .catch(error => {
            next(error)
        })
})

router.post("/", (req, res, next) => {
    db.insert(req.body)
})

module.exports = router;