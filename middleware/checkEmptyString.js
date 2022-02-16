const checkEmptyString = (req, res, next) => {
    try {
        const {first_name, last_name} = req.body;
        if (first_name.trim() === "" || last_name.trim() === "") {
            return res.status(400).send("First Name and Last Name cannot be empty.")
        }
        next();
    } catch(e) {
        return res.status(500).send(e);
    }
}

module.exports = checkEmptyString;