/**
 * Created by adrian.squirm on 10/9/15.
 */
var babyAnimals = function (a) {

    return function (b) {
        var result = 'i love '.concat(a).concat(' and ').concat(b);
        return result;
    };

};

var babyKoala = babyAnimals('koalas');

//babyKoala('elephants');
//babyKoala('dogs');
//babyKoala('cats');

console.log(babyKoala('elephants'));
console.log(babyKoala('dogs'));
console.log(babyKoala('cats'));