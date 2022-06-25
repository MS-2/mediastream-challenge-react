export const sort_list = {
    ASC: {
        value: 'ASC',
        sort: (a, b) => a.year - b.year,
        buttonText: 'Year Ascending',
    },
    DESC: {
        value: 'DESC',
        sort: (a, b) => b.year - a.year,
        buttonText: 'Year Descending',
    }
};