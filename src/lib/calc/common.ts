/* eslint-disable @typescript-eslint/no-non-null-assertion */
/* 角度 */
export const calcAngle = (
  a: (number | null)[],
  b: (number | null)[],
  c: (number | null)[],
): number | null => {
  if ([...a, ...b, ...c].includes(null)) {
    return null;
  } else {
    const ba = [a[0]! - b[0]!, b[1]! - b[1]!]; // ベクトル1
    const bc = [c[0]! - b[0]!, c[1]! - b[1]!]; //ベクトル2
    const babc = ba[0] * bc[0] + ba[1] * bc[1]; // 内積
    const ban = ba[0] ** 2 + ba[1] ** 2;
    const bcn = bc[0] ** 2 + bc[1] ** 2;
    const radian = Math.acos(babc / Math.sqrt(ban * bcn));
    const angle = radian * (180 / Math.PI); // ラジアン単位を角度に変換
    return Math.floor(angle); // 小数点以下切り捨て
  }
};
