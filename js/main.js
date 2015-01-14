"use strict";

/**
 * Created by Merlas Tudor<tudor.merlas@evozon.com> on 12.01.02015.
 */

(function() {
    var app;

    app = angular.module('todo', []);

    app.controller('ToDoController', function(){

        var self = this;

        self.items = [
            {
                label: 'This is a test to do item',
                done: true
            },
            {
                label: 'Bibi',
                done: false
            },
            {
                label: 'Bubu',
                done: true
            },
            {
                label: 'Bobo',
                done: true
            },
            {
                label: 'Baba',
                done: true
            },
            {
                label: 'Buba',
                done: true
            },
        ];

        self.add = function () {

            if (self.itemLabel === undefined || self.itemLabel === "") {
                return false;
            }
            // Don't allow duplicate items
            // It makes ng-repeat throw and error

            // We presume no duplicates are present
            var add = true;

            // Search for duplicates
            for(var i = 0; i < self.items.length; i++) {
                if (self.items[i].label === self.itemLabel) {
                    // If found, don't allow add
                    add = false;
                }
            }

            // Add only if no duplicates exist
            if (add === true) {
                self.items.push(
                    {
                        label: self.itemLabel,
                        done: false
                    }
                );
                self.itemLabel = "";
            }
        };

        self.remove = function(index) {
            if (index >= 0 && index < self.items.length ) {
                self.items.splice(index, 1);
            }
        };

        self.clearAll = function () {
            self.items = [];
        };

        self.clearDone = function () {
            for(var i = 0; i < self.items.length; i++) {
                if (self.items[i].done === true) {
                    self.items.splice(i, 1);
                    // Because we remove an element we change the indexes
                    i--;
                }
            }
        };
    });
})();
