const parent_original = document.querySelector(".content__blocks-items");
const parent = document.querySelector(".content__column-items");
const item = document.querySelector(".content-block-item");

window.addEventListener('resize', function (event) {
    const viewport_width = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    if (viewport_width < 992) {
        if (!item.classList.contains('done')) {
            parent.insertBefore(item, parent.children[2]);
            item.classList.add('done');
        }
    } else {
        if (item.classList.contains('done')) {
            parent_original.insertBefore(item, parent_original.children[2]);
            item.classList.remove('done');
        }
    }
});