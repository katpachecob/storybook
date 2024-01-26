export const handleFilterSelect = async (element, filterSelected) => {
    const isAlreadySelected = await filterSelected.some(item => item.title === element.title);
    const isAlreadyMultiSelected = await filterSelected.some(item => item.title === element.title && item.value === element.value);
    let updatedData;
    if (isAlreadySelected && !element.multi) {
        updatedData = await filterSelected.map(item =>
            item.title === element.title ? { title: element.title, value: element.value } : item
        );
    } else if (isAlreadyMultiSelected) {
        updatedData = await filterSelected.filter(item =>
            !(item.title === element.title && item.value === element.value)
        );
    } else {
        updatedData = [...filterSelected, { title: element.title, value: element.value }];
    }

    return updatedData
};