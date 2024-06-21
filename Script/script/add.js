document.addEventListener("DOMContentLoaded", () => {
    let selectedDiv = null;

    document.querySelectorAll(".p1, .p2, .p3, .p4, .p5, .p6, .p7, .p8, .p9").forEach(div => {
        div.addEventListener("click", event => {
            event.stopPropagation();
            if (!selectedDiv) {
                selectedDiv = event.target;
                selectedDiv.classList.add("selected");
            } else if (selectedDiv !== event.target) {
                drawLine(selectedDiv, event.target);
                selectedDiv.classList.remove("selected");
                selectedDiv = null;
            }
        });
    });
});

function drawLine(div1, div2) {
    const svgContainer = document.getElementById("svg-container");
    const rect1 = div1.getBoundingClientRect();
    const rect2 = div2.getBoundingClientRect();

    const x1 = rect1.left + rect1.width / 2 + window.scrollX;
    const y1 = rect1.top + rect1.height / 2 + window.scrollY;
    const x2 = rect2.left + rect2.width / 2 + window.scrollX;
    const y2 = rect2.top + rect2.height / 2 + window.scrollY;

    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", "black");
    line.setAttribute("stroke-width", "2");

    svgContainer.appendChild(line);
}
