function powerOf3 (num) {
  return num ** 3;
}

try {
  powerOf3(9);
} catch (error) {
  console.log("Gets executed if there's an error.");
  console.log(error);
} finally {
  console.log("Gets executed at the end no matter what.");
}