import Cpf from "../../src/domain/entity/Cpf";

test("Deve testar um CPF valido", function() {
  const cpf = new Cpf("935.411.347-80");
	expect(cpf.value).toBe("935.411.347-80");
});

const wrongSameDigitCpf = [
  "111.111.111-11",
  "222.222.222-22",
  "333.333.333-33"
]

test.each(wrongSameDigitCpf)("Deve testar um CPF invalido com todos os numeros iguais", function(cpf) {
  expect(() => new Cpf(cpf)).toThrow(new Error("CPF Invalido"));
});