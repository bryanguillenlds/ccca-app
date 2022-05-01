import Dimension from "../src/Dimension";

test("Deve criar as dimensoes de um item apartir das medidades", function() {
  const dimension = new Dimension(100, 30, 10);
  const volume = dimension.getVolume();
  expect(volume).toBe(0.03);
});