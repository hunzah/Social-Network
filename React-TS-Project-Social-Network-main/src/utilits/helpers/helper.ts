export const updateObjectInArray = (items: any[], itemId: number | string, objPropName: any, newObjProps: any) => {
    return items.map(item => item[objPropName] === itemId ? { ...item, ...newObjProps } : item);
};