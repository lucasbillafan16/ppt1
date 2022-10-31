input.onButtonPressed(Button.A, function () {
    if (valor == 1) {
        basic.showIcon(IconNames.Target)
    } else if (valor == 2) {
        basic.showIcon(IconNames.Square)
    } else {
        basic.showIcon(IconNames.Scissors)
    }
    valor += 1
    if (valor > 3) {
        valor = 1
    }
})
function j2 () {
    let azar = 0
    establecer = randint(1, 3)
    if (azar == 1) {
        basic.showIcon(IconNames.Target)
    } else if (azar == 2) {
        basic.showIcon(IconNames.Square)
    } else if (azar == 3) {
        basic.showIcon(IconNames.Scissors)
    } else {
    	
    }
}
let establecer = 0
let valor = 0
valor = 1
