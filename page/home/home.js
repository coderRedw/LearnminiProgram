Page({
  data: {
    name: "coderRedw",
    age: 20,
    student: [
      { id: 110, name: "迪迦", age: 15 },
      { id: 111, name: "盖亚", age: 11 },
      { id: 112, name: "赛罗", age: 8 },
      { id: 113, name: "泰罗", age: 5 },
    ],
    counter: 0
  },
  increment () {
    // 错误做法 界面不会发生刷新（像vue）
    // this.data.counter += 1
    // console.log(this.data.counter)

    // 像react
    this.setData({
      counter: this.data.counter += 1
    })
  },
  decrement () {
    this.setData({
      counter: this.data.counter -= 1
    })
  }
})