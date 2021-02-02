// import { number } from "@storybook/addon-knobs";

// type FIXME = any;

// const orderStates = [
//   "initial",
//   "inWork",
//   "buyingSupplies",
//   "producing",
//   "fullfilled",
// ] as const;

// // ?????

// interface User<S = number> {
//   name: string;
//   age: number;
//   status: S;
// }

// type PartialUser = Partial<User>;
// type ReadOnlyUser = Readonly<User>;
// type UserNameOnly = Pick<User, "name" | "age">;

// type UserWithoutNameAndAge = Omit<User, "name" | "age">;

// type ExcludeName = Exclude<User, "name" | "age">;

// type UserPartialReadonly = Partial<Readonly<User>>;

// const MixedUser: UserPartialReadonly = {
//   name: "string",
//   age: 12,
//   status: 1,
// };

// type UserEurope = User<number>;
// type UserAsian = User<string>;

// const userE: UserEurope = {
//   name: "pavel",
//   age: 31,
//   status: 1,
// };

// const userA: UserAsian = {
//   name: "Jharae",
//   age: 23,
//   status: "online",
// };

// type indexedObject = {
//   [index: number]: string | number;
// };

// const List: indexedObject = {
//   1: "string",
//   2: "2 string",
// };

// type indexedObject2 = {
//   [index: string]: number;
// };

// const list2: indexedObject2 = {
//   "1": 1,
//   test: 5,
// };

// interface Person {
//   age?: number;
//   name?: string;
// }

// interface Person2 {
//   readonly age: number;
//   readonly name: string;
// }

// interface User3<St = number> {
//   name: string;
//   age: number;
//   status: St;
// }

// interface PageInfo {
//   title: string;
// }

// type Page = "news" | "home" | "about";

// const nav: Record<Page, PageInfo> = {
//   news: {
//     title: "news page",
//   },
//   home: {
//     title: "home page",
//   },
//   about: {
//     title: "about page title",
//   },
// };

// nav.news;

// type UnionStatuses = "online" | "offline" | "afk";

// type ExcludeStatus = Exclude<UnionStatuses, "afk" | "offline">;

type FIXME = any;

const orderStates = [
  "initial",
  "inWork",
  "buyingSupplies",
  "producing",
  "fullfilled",
] as const;

type OrderState = typeof orderStates[number];

export const getUserOrderStates = (orderStates: OrderState[]): FIXME => {
  const filteredStates = [] as FIXME;
  
  orderStates.forEach((element, index) => {
    if (element !== "buyingSupplies" && element !== "producing") {
      filteredStates.push(element);
    }
  });
  return filteredStates;
};



