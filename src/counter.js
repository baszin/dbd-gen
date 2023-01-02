var wrapper = document.getElementById('counter');
var counter;
var killerc;
var count = 0;

function start(repeats = 5) {
    clearInterval(killerc)
    if (repeats > 0) {
        document.getElementById("killerb").disabled = true;
        document.getElementById("btn").disabled=true;
        if (count < 100) {
            if (count !== 99) {
                count++;
                wrapper.innerHTML = `${count}/100`;
            } else {
                count++;
                wrapper.innerHTML = `${count}/100`;
                document.getElementById('finish').innerHTML = `Generatore Completato`
            }
        } else {
            return
        }
        setTimeout(() => {
            start(repeats - 1)
        }, 1000);
    } else {
        document.getElementById("btn").disabled=false;
        document.getElementById("killerb").disabled = false;
    }
}

function killer() {
    document.getElementById("killerb").disabled = true;
    if (count >= 5) {
        count -= 5;
        wrapper.innerHTML = `${count}/100`;
    } else {
        count = 0
        wrapper.innerHTML = `${count}/100`;
    }

    killerc = setInterval(() => {
        if (count > 0) {
            count -= 1;
            wrapper.innerHTML = `${count}/100`;
        } else {
            return
        }
    }, 4000);
}