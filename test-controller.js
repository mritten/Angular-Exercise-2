"use strict";
{
    angular.module('app')
        .controller('TestController', function(){
            const $ctrl = this;
            $ctrl.me = {name: 'Mike'};
            
            $ctrl.band = [
                {name: 'John', instrument: 'Saxophone'},
                {name: 'Justin', instrument: 'Drums'},
            ];

            $ctrl.familyMembers = [
            {name:'Ivan', relation:'Father', age:'32'},
            {name:'Mishara', relation:'Mother', age:'30'},
            {name:'John', relation:'Brother', age:'22'},
             ];

            $ctrl.changeName = function (name) {
                $ctrl.me.name = 'name';
            };

            $ctrl.addName = function() {
                $ctrl.names.push($ctrl.newName);
                $ctrl.newName = '';
            };
            $ctrl.togglePresent = function(student){
                student.present = !student.present;
            }

        });
}