import { validateCpf } from "../src/cpf";

test("Deve testar um CPF valido", function() {
    const isValid = validateCpf("935.411.347-80");
    expect(isValid).toBeTruthy();
});

const wrongSameDigitCpf = [
    "111.111.111-11",
    "222.222.222-22",
    "333.333.333-33"
]

test.each(wrongSameDigitCpf)("Deve testar um CPF invalido com todos os numeros iguais", function(cpf) {
    const isValid2 = validateCpf(cpf);
    expect(isValid2).toBeFalsy();
});

test("Deve testar um CPF com valor nulo", function() {
    const isValid3 = validateCpf(null);
    expect(isValid3).toBeFalsy();
});

test("Deve testar um CPF valido, sem pontos e tracos", function() {
    const isValid = validateCpf("93541134780");
    expect(isValid).toBeTruthy();
});

test("Deve testar um CPF valido, com algums pontos", function() {
    const isValid = validateCpf("935.411.34780");
    expect(isValid).toBeTruthy();
});