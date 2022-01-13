// const menuList = ['menu 1', 'menu 2', 'menu 3'];

// // b1: Selector
// // b2: loop
// // b3: render
// const menuElement = document.querySelector('#menu');
// if (menuElement) {
//   for (let i = 0; i < menuList.length; i++) {
//     menuElement.innerHTML += `<li>${menuList[i]}</li>`;
//   }
// }
// // template string
import Navigo from "navigo";
import HomePage from "./pages/home";

const router = new Navigo("/", { linksSelector: "a" });
const print = (content) => {
  document.getElementById("app").innerHTML = content;
};

router.on({
  "/": () => {
    print(HomePage.render());
  },
  "/about": () => {
    print("About Page");
  },
  "/product": () => {
    print("Product Page");
  },
});

router.notFound(() => print("Not Found Page"));

router.resolve();

// class KhuanBanh {
//     constructor(luongDuong, luongBot) {
//         this.duong = luongDuong;
//         this.bot = luongBot;
//     }

//     showInfo() {
//         console.log(`
//             Lượng đường: ${this.duong}
//             Lượng Bột: ${this.bot}
//         `);
//     }
// }

// const banhDeo = new KhuanBanh(10, 20);
// banhDeo.showInfo();
// console.log(banhDeo.duong);
