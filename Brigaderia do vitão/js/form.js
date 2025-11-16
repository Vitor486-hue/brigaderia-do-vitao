document.addEventListener("DOMContentLoaded", () => {

    const form = document.getElementById("pedido");

    form.addEventListener("submit", (e) => {
        let valid = true;

        if (form.nome.value.trim().length < 3) {
            alert("Digite um nome válido.");
            valid = false;
        }

        if (!form.email.value.includes("@")) {
            alert("Email inválido.");
            valid = false;
        }

        if (form.quantidade.value <= 0) {
            alert("A quantidade deve ser maior que zero.");
            valid = false;
        }

        if (form.sabor.value === "") {
            alert("Selecione um sabor.");
            valid = false;
        }

        if (!valid) e.preventDefault();
    });

});
