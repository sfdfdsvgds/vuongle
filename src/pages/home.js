import News from "../components/news";
import tin from "../components/moi";

const HomePage = {
  render() {
    return /* html */`
            <div class="news">
                ${News.render()}
            </div>
            <div class="news1">
                ${tin.render()}
            </div>
        `;
  },
};
export default HomePage;