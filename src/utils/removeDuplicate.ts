const removeDuplicate = (arr: [], key: string) => {
    const removeDuplicate = [...new Map(arr.map((item) => [item[key], item])).values()];
    return removeDuplicate;
};
export default removeDuplicate;
