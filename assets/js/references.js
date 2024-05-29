document.addEventListener("DOMContentLoaded", function () {
  const references = [
    {
      title: "Auth Form",
      services: [
        {
          name: "Animated Login Form1",
          url: "components/AuthForm/1/login.html",
        },
        {
          name: "Animated Login Form2",
          url: "components/AuthForm/2/index.html",
        },
      ],
    },
  ];

  function render() {
    const container = document.getElementById("reference_container");
    container.innerHTML = ""; // Clear container before rendering

    references.forEach((item, index) => {
      container.innerHTML += `
        <div>
          <div class="text-[#00445A] font-bold text-2xl py-3 mt-8">${item.title}</div>
          <div class="flex flex-row flex-wrap justify-center gap-10 mt-2">
            <div class="grid xl:grid-cols-7 sm:grid-cols-4 grid-cols-3 gap-4 py-5">
              ${item.services
                .map(
                  (service) => `
                    <a href="${service.url}" target="_blank">
                      <div class="jobCard hover:scale-125 hover:text-white">
                        <div class="jobCard-depth"></div>
                        <div class="jobCard-hexagon">
                          <h1 class="jobCard-text jobCard-title">${service.name}</h1>
                        </div>
                      </div>
                    </a>`
                )
                .join("")}
            </div>
          </div>
        </div>`;
    });
  }

  // Call the render function initially to render the service boxes
  render();
});
