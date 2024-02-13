function errorHandling( err, req, res, next) {
    res.status(500).json({message:'Oops, something went wrong!'})
}

module.exports = errorHandling