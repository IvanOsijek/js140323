// NE RADI

// var StepCounter = (
//     function(){
//         var koraci = 0;
//         function stepUp () {
//             koraci++;
//         }
//         return {
//             walk: function(){

//             }
//         }
//     }
// )

var StepCounter = {
    
        koraci: 0,
         walk: function () {
            this.koraci++;
        },
        getTotalSteps: function (){
            return this.koraci;
        }
    };

    module.exports = StepCounter;
    
