export const getPokemonId = (url: string): number => {
  const parts = url.split("/");
  const id = parts.at(-2) ?? "0";

  return parseInt(id, 10);
};

export const getNumPokemon = (url: string): string => {
  const parts = url.split("/");
  const id = parts.at(-2) ?? "0";

  return parseInt(id, 10).toString().padStart(3, "0");
};

export function cleanDescription(description: string | undefined): string {
  if (!description) return "";
  return description.replace(/[\n\f]/g, " ");
}

export function getGenderPercentage(genderRate: number): {
  male: number;
  female: number;
} {
  if (genderRate === -1) {
    return { male: 0, female: 0 };
  }

  const femalePercentage = (genderRate / 8) * 100;
  const malePercentage = 100 - femalePercentage;

  return {
    male: Math.round(malePercentage),
    female: Math.round(femalePercentage),
  };
}
