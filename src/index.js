// Copyright (c) penguinite 2023
// Licensed under the 3 clause BSD license.

"use strict";

export function collatz (number) {
  if (Number.isInteger(number) == false) { return []; }
  var tmp = number
  var arr = []
  while (true) {
    if (tmp == 0 || tmp == 1) { break }
    if (tmp % 2 === 0) {
      tmp = Math.floor(tmp) / 2
    } else {
      tmp = tmp * 3 + 1
    }
    arr.push(tmp)
  }
  return arr
}

export function next(number) {
  if (Number.isInteger(number) == false) { return -1; }
  var tmp = number
  if (tmp == 0 || tmp == 1) { return tmp }
  if (tmp % 2 === 0) {
    tmp = Math.floor(tmp) / 2
  } else {
    tmp = tmp * 3 + 1
  }
  return tmp
}
