angular.module('userControllers',[])
    .controller('regCtrl',function($http){
        
        this.regUser = function(regData){

            console.log('Form submitted');
            console.log(this.regData);
            $http.post('/api/users',this.regData).then(function(data){
                console.log(data);
            });


        };
    });

