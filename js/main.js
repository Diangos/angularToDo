/**
 * Created by Merlas Tudor<tudor.merlas@evozon.com> on 12.01.02015.
 */

var app;



app = angular.module('todo', []);

app.controller('MainController', function(){
    "use strict";
    var self = this;

    self.users = [];

    self.persist = function () {
        self.users.push(self.users);
    };
});
