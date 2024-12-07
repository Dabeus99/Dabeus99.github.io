function showit(var1) {
document.getElementById('b1').style.display = 'none'
document.getElementById('b2').style.display = 'none'
document.getElementById('b3').style.display = 'none'
document.getElementById('b4').style.display = 'none'
document.getElementById('b5').style.display = 'none'
document.getElementById('b6').style.display = 'none'

document.getElementById(var1).style.display = 'block'
}

function myfunction() {
var1 = document.getElementById('things').value
var2 = document.getElementById('things').value
}
