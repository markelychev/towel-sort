// You should implement your task here.

module.exports = function towelSort(matrix) {
    if (!matrix) return [];
    return new Array().concat(
        ...matrix.map((item, index) => {
            if (index > 0 && index % 2) {
                return item.reverse();
            }
            return item;
        })
    );
};
