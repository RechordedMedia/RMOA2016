app

.factory('profileService', ['$localStorage', '$http', 'baseUrl', '$log',
	function ($localStorage, $http, baseUrl, $log) {

	    var profileManager = function () {
	        var self = this;

	        self.getRandomUser = function (num) {

	            $log.debug('Getting User(s) results:' + num);

	            var promise = $http.post(baseUrl + "?results=" + null);

	            promise.error(function (data) { $log.debug(data); });

	            return promise;
	        }
	    }

	    return new profileManager();
	}]);