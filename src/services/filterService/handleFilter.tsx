export const handleFilterSelect = async (element, filterSelected) => {
    console.log(element)
    const isAlreadySelected = filterSelected.some(item => item.title === element.title && item.index === element.index)
    const isAlreadyMultiSelected = filterSelected.some(item => item.title === element.title && item.value === element.value && item.index === element.index);
    let updatedData;

    if (isAlreadySelected && !element.multi) {
        updatedData = filterSelected.map(item =>
            item.title === element.title ? { title: element.title, value: element.value, index: element.index } : item
        );
    } else if (isAlreadyMultiSelected) {
        updatedData = filterSelected.filter(item =>
            !(item.title === element.title && item.value === element.value && item.index === element.index)
        );
    } else {
        updatedData = [...filterSelected, { title: element.title, value: element.value, index: element.index }];
    }

    return updatedData;
};

