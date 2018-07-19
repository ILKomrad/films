module.exports = {
	db: {
        connectionLimit : 1000,
        connectTimeout  : 60 * 60 * 1000,
        aquireTimeout   : 60 * 60 * 1000,
        timeout         : 60 * 60 * 1000,
        host: 'localhost',
        port: "8888",
        socketPath : '/Applications/MAMP/tmp/mysql/mysql.sock',
		database: 'films',
		user: 'root',
		password: 'root'
	}
};