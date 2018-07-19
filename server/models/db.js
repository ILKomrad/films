module.exports = function(pool) {
	return {
		getAll: function(table, callback) {
			pool.query('SELECT * FROM ' + table, callback);
		},

		addToDb: function(table, obj, callback) {
			pool.query('INSERT INTO ' + table + ' SET ?', obj, function(err, data) {
                if (callback) {
                    callback(err, data);
                }
            });
		},

		findOne: function(by, where, callback) {
			var _where1 = where + "%",
				_where2 = "% " + where + "%";
			pool.query("SELECT * FROM films WHERE " + by + " LIKE ? OR " + by + " LIKE ?", [_where1, _where2], callback);
        },
        
        deleteOne: function(table, where, callback) {
			pool.query('DELETE FROM ' + table + ' WHERE ?', where, callback);
		}
	}
}