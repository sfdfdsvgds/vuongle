import data from "../data";

const tin = {
    render() {
        return /* html */`
        <h2 class="font-semibold text-2xl text-blue-900 my-4 uppercase">HOẠT ĐỘNG SINH VIÊN</h2>
        <div class="news1">
            <div class="grid grid-cols-3 gap-8">
                    ${data.map((post) => `
                                <div class="news-item border p-4">
                                    <div class="news-img">
                                        <a href="/moi/${post.id}">
                                            <img src="${post.img}" />
                                        </a>
                                    </div>
                                    <h3 class="my-3"><a href="/moi/${post.id}" class="font-semibold text-orange-500">${post.title}</a></h3>
                                    <p class="text-sm text-gray-600">${post.desc}</p>
                                </div>
                        `).join("")}
            </div>
        </div>`;
    },
};
export default tin;