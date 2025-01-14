export type Character = {
  id: string;
  name: string;
  alternateNames: string[];
  species: string;
  gender: string;
  house: string;
  dateOfBirth: string;
  yearOfBirth: number;
  wizard: boolean;
  ancestry: string;
  eyeColour: string;
  hairColour: string;
  wand: Wand;
  patronus: string;
  hogwartsStudent: boolean;
  hogwartsStaff: boolean;
  actor: string;
  alternateActors: string[];
  alive: boolean;
  image: string;
  rating: string;
};

export type Wand = {
  wood: string;
  core: string;
  length: number;
};

export type BannerImageDetails = {
  id: string;
  house: string;
  image: string;
  videoFileURL: string;
  name: string;
  description: string;
};

export type Characters = Character[];
