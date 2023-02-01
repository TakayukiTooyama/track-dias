/* 角度 */
export const calcAngle = (
  a: [number, number],
  b: [number, number],
  c: [number, number],
): number => {
  /* A(足首X, 足首Y) B(膝X, 膝Y) C(大転子X, 大転子Y)*/
  const ba = [a[0] - b[0], b[1] - b[1]]; // ベクトル1
  const bc = [c[0] - b[0], c[1] - b[1]]; //ベクトル2
  const babc = ba[0] * bc[0] + ba[1] * bc[1]; // 内積
  const ban = ba[0] ** 2 + ba[1] ** 2;
  const bcn = bc[0] ** 2 + bc[1] ** 2;
  const radian = Math.acos(babc / Math.sqrt(ban * bcn));
  const angle = (radian * 180) / Math.PI;
  return Math.floor(angle);
};
