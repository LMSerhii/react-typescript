/* Base type */

let firstName: string = 'Serhii';
firstName = 'Timur';

console.log(firstName);

let age: number = 25;
age = 30;

console.log(age);

let isOwner: boolean = false;
isOwner = true;

console.log(isOwner);

const profile: undefined = undefined;
console.log(profile);

const city: null = null;
console.log(city);

/* Objects structure */

const userProfile: { firstName: string; age: number; isOwner: boolean } = {
  firstName: 'Serhii',
  age: 25,
  isOwner: false,
};

console.log(userProfile);

/* Arrays */

const numbers: number[] = [1, 2, 3, 5];
console.log(numbers);

const numbers_2: Array<number> = [1, 2, 3, 4, 5]; // old
console.log(numbers_2);

const numbers_3: [number, number] = [1, 2];
console.log(numbers_3);

const profile1: [string, number] = ['Serhii', 25];
console.log(profile1);

/* Function */

function getProfile(name: string, age?: number): string {
  console.log(age);

  return name;
}

getProfile('Timur');

const getAge = (name?: string): number => 25;

getAge();

/** REST */

function getFullName(firstName: string, ...names: string[]) {
  return firstName + '' + names.join(' ');
}

getFullName('Serhii', 'Leonov', 'Mykolayovych');

/** Function overloads */

function getInfo(name: string): string;
function getInfo(age: number): number;
function getInfo(single: boolean): boolean;
function getInfo(value: any): any {
  return value;
}

const result = getInfo('123');
console.log(result);

const result_2 = getInfo(256);
console.log(result_2);

/** Class and types */

class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  getName() {
    return this.name;
  }

  setName(name: string) {
    this.name = name;
  }
}

const CAT = new Animal('mur');

CAT.getName();
CAT.setName('Gav');

/** Interfaces */

interface IProfile extends IWork {
  name: string;
  age: number;
  isOwner: boolean;
}

interface IWork {
  place?: string;
}

const profile2: IProfile = {
  name: 'Timur',
  age: 35,
  isOwner: false,
  place: 'Kyiv',
};
console.log(profile2);

/** Types */

type TProfile = {
  name: string;
  age: number;
  isOwner: boolean;
} & TWork;

type TWork = {
  place?: string;
};

const profile3: TProfile = {
  name: 'Timur',
  age: 35,
  isOwner: false,
  place: 'Kyiv',
};
console.log(profile3);

/** Enum */

enum Colors {
  RED,
  GREEN,
  BLUE,
}

const primary: Colors = Colors.GREEN;
console.log(primary);

enum Tokens {
  accessToken,
  refreshToken,
}

const token: Tokens = Tokens.accessToken;
console.log(token);

/** Assertions */

const someValue: any = 'sdsd2223dsdsdsd';
const strLength: number = (someValue as string).length;

console.log(strLength);

/** Generic */

function getData<T>(name: T): T {
  return name;
}

getData('Albert');
getData(126);

/* Utility types */

interface IProfile2 {
  name: string;
  age: number;
  isOwner: boolean;
}

const profile_7: IProfile2 = { name: 'Timur', age: 6, isOwner: true };

console.log(profile_7);

const profile_8: Pick<IProfile2, 'name'> = { name: 'Serhii' };

console.log(profile_8);

const profile_9: Omit<IProfile2, 'name'> = { age: 35, isOwner: false };

console.log(profile_9);

const profile_10: Partial<IProfile2> = {};

console.log(profile_10);

const profile_11: Required<IProfile2> = {
  name: 'Timur',
  age: 6,
  isOwner: true,
};

console.log(profile_11);

const profile_12: Readonly<Pick<IProfile2, 'age'>> = {
  age: 6,
};

// profile_12.age = 65

console.log(profile_12);
