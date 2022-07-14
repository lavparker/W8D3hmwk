//setTimeout

window.setTimeout(function() {
    alert('HAMMERTIME');
}, 5000);

//asynchronous


//Timeout Plus Closure

function hammerTime (time) {
    window.setTimeout(function (){
        alert(`${ time } is hammertime!`)
    });
}

