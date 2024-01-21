import { Burrito, BurritoSize, Option, burritos, options } from "../models/burrito";

export const getAllBurritos = (): Burrito[] => {
  return burritos;
};

export const getAllOptions = (): Option[] => {
  return options;
};