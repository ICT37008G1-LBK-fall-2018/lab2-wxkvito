var i;
var masivi = [];
for (i = 2; i < 20; i++) {
    let truee = true;
    for (var x = 2; x <= Math.round(Math.sqrt(i)); x++) {

        if (i % x == 0) {
            truee = false
        }

    }
    if (truee) {
        masivi.push(i);
    }
}
alert(masivi)