module.exports = {
	server: {
            port:process.env.PORT || 8080
    },
    database: {
        url: 'mongodb://localhost/employee-dir'
    }
}