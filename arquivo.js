/*Variáveis - um espaço de memória que você reserva e pode guardar
              o que quiser lá dentro.

    3 jeitos de criar uma variável
        - Var / jeito antigo ´NÀO SE USA MAIS
        - let -> Voçê pode alterar o valor depois
        - const -> Constante

*/

/*
    Funções
        Um trecho de código que, só é executado,
        quando é chamado
*/

const form = document.querySelector(".formulario-fale-conosco")

const mascara = document.querySelector(".mascara-formulario")


function mostrarForm() {
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascara.style.visibility = "visible"
}

function escoderForm() {
    form.style.left = "-320px"
    form.style.transform = "translateX(0)"
    mascara.style.visibility = "hidden"

}
