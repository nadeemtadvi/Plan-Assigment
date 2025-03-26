document.addEventListener("DOMContentLoaded", function () {
    const cols = document.querySelectorAll(".col");

    cols.forEach(col => {
        col.addEventListener("click", function () {
            const radio = col.querySelector(".radio input");
            const content = col.querySelector(".property-box");

            if (radio) {
                radio.checked = true;
            }

            cols.forEach(c => {
                if (c !== col) {
                    c.classList.remove("active");
                    c.querySelector(".property-box").style.maxHeight = null;
                }
            });

            col.classList.toggle("active");

            if (content.style.maxHeight) {
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
    document.querySelectorAll(".property-box select").forEach(select => {
        select.addEventListener("click", function (event) {
            event.stopPropagation();
        });
    });
});
