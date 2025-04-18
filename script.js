document.addEventListener("selectionchange", () => {
    let selection = window.getSelection();
    let range = selection.rangeCount ? selection.getRangeAt(0) : null;
    let width_inc = 3;
    let heigh_inc = 10;
    // remove previous overlays
    document.querySelectorAll(".selection-overlay").forEach(el => el.remove());

    if (range && !selection.isCollapsed) {
        let rects = range.getClientRects();
        rects = [...rects];

        rects.forEach(rect => {
            let div = document.createElement("div");
            div.className = "selection-overlay";
            div.style.left = `${rect.left + window.scrollX - width_inc/2}px`; /* calculate correct position from left */
            div.style.top = `${rect.top + window.scrollY - heigh_inc/2}px`; /* calculate correct position from top */
            div.style.width = `${rect.width + width_inc}px`; /* Increase width */
            div.style.height = `${rect.height + heigh_inc}px`; /* Increase height */
            document.body.appendChild(div);
        });
    }
});