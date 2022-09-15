export type MyPicker<T, K extends keyof T> = {
  [P in K]: T[P];
};

interface ITestValue {
  name: string;
  age: number;
  nickname: string;
  test2?: ITestValue2;
}

interface ITestValue2 {
  name: string;
  age: number;
  nickname: string;
}

const value: ITestValue = {
  name: "张三",
  age: 33,
  nickname: "法外狂徒",
};

// const textValue: MyPicker<ITestValue, "age"> = "123";
const testValue: MyPicker<ITestValue, "age"> = { age: 11 };

const testValue2: MyPicker<ITestValue, "test2"> = value;
