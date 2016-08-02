(function() {


    function Computor(a, b, c,d) {
        this.a = a || 0;
        this.b = b || 0;
        this.c = c || 0;
        this.d = d || 0;
        this.op = {};
    }

    

    Computor.prototype = {
        sum: function(cb) {
            cb(this.a+this.b+this.c+this.d);
        }
    
    }

    var c1 = new Computor(1,2,3,5);
    c1.sum(function(s1){
        console.log(s1);    
    });
    

    var c2 = new Computor(4,5,6);
    c2.sum(function(s2){
        console.log(s2);
    });
    

window.Computor = Computor;

})();