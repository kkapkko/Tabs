const tabsBtn = document.querySelectorAll(".tabs_nav-btn");
const tabsItem = document.querySelectorAll(".tabs_content-item");

tabsBtn.forEach(function (btn) {
    btn.addEventListener("click", function () {
        let currentBtn = btn;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);

        if (!currentBtn.classList.contains("active_btn")) {
            tabsBtn.forEach(function (btn) {
                btn.classList.remove("active_btn");
            });
            tabsItem.forEach(function (item) {
                item.classList.remove("active_item");
            });
            currentBtn.classList.add("active_btn");
            currentTab.classList.add("active_item");
        }
    });
});

document.querySelector(".tabs_nav-btn").click();
