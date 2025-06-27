function generateSecretNumber(): number {
  return Math.trunc(Math.random() * 100);
}
export default generateSecretNumber;