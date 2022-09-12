const upload = require('../multer/multer')

const add = (req, res) => {
    var arr = [];
    req.files.upload.forEach((file, err) => {
        if (file.fieldname == "upload") {
            arr.push(file.path)
        }
        else {
            res.status(400).json(err)
        }
    });
    res.status(201).json({ message: "Success", data: arr });

}

module.exports = { add }