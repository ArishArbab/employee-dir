var Employee = require('./employee.model').Employee;


/** add employee. */
exports.add = function (req, res) {
    Employee.add(req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            console.log("not added" +err);
            return res.send(err); // 500 error
        }
    });
};

/** getEmployee function to get Employee by id. */
exports.get = function (req, res) {
    Employee.get({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** getEmployees function to get all the employees */
exports.getAll = function (req, res) {
    Employee.getAll({}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** update Employee function to update Employee by id. */
exports.update = function (req, res) {
    Employee.updateById(req.params.id, req.body, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};

/** removeEmployee function to remove Employee by id. */
exports.remove = function (req, res) {
    Employee.removeById({_id: req.params.id}, function(err, result) {
        if (!err) {
            return res.json(result);
        } else {
            return res.send(err); // 500 error
        }
    });
};