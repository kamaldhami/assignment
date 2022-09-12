const multer = require('multer')

var Storage = multer.diskStorage({
    destination: "./public",
    filename: (req, file, cb) => {
        cb(null, file.fieldname + "_" + Date.now() + "_" + file.originalname);
    }
});

var upload = multer({
    storage: Storage,
    limits: {
        fileSize: 500000
    },
});


module.exports =  upload 