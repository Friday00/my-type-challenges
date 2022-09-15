export type MyReadonly<T> = {
  readonly [P in keyof T]: T[P];
};

interface ITestValue {
  name: string;
  age: number;
}

const testValue: MyReadonly<ITestValue> = {
  name: "张三",
  age: 16,
};

const testValue2: ITestValue = {
  name: "张三",
  age: 16,
};

testValue.name = "李四"; // 无法分配到 "name" ，因为它是只读属性。

testValue2.age = 33;
