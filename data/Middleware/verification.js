module.exports = {
    verifyProject,
}

function verifyProject(){
    return(req, res, next) => {
        if(!req.body.name || !req.body.description){
            res.status(400).json({errorMessage: "You need a name and a description to do that."})
        }
        next();
    }
}