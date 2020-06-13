const express = require("express");
const router = express.Router();
const db = require("../helpers/actionModel");

router.get("/:post_id", (req, res, next) => {
    db.get(req.params.post_id)
        .then(response => {
            res.status(200).json(response)
        })
        .catch(error => {
            next(error);
        })
})

module.exports = router;