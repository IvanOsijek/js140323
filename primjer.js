var sc = require('./StepCounter');

sc.walk();
console.log(sc.getTotalSteps());

sc.walk();
sc.walk();
sc.walk();
console.log(sc.getTotalSteps());


