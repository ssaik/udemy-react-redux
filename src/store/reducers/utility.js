export const objectmanager = (oldObject, updatedValues) => {
    return {
        ...oldObject,
        ...updatedValues
    }
};