// export default class LocalStorage {
//   constructor() {
//     // if item by key `tasks` is not defined JSON.parse return null, so I use `or empty array`
//     this.tasks = JSON.parse(asyncStorage.getItem("tasks")) || [];
//   }
//   create(data) {
//     data.token = this.token;

//     this.tasks.push(data);

//     localStorage.setItem("tasks", JSON.stringify(this.tasks));
//   }

//   update(data) {
//     let index = this.getIndexByToken(data.token);

//     if (index !== -1) {
//       this.tasks[index] = data;

//       localStorage.setItem("tasks", JSON.stringify(this.tasks));
//     }
//   }

//   delete(data) {
//     let index = this.getIndexByToken(data.token);

//     if (index !== -1) {
//       this.tasks.splice(index, 1);

//       localStorage.setItem("tasks", JSON.stringify(this.tasks));
//     }
//   }

//   getIndexByToken(token) {
//     for (let i = 0; i < this.tasks.length; i++) {
//       if (this.tasks[i].token === token) {
//         return i;
//       }
//     }

//     return -1;
//   }

//   get token() {
//     return (
//       Math.random().toString(36).substring(2, 15) +
//       Math.random().toString(36).substring(2, 15)
//     );
//   }
// }
