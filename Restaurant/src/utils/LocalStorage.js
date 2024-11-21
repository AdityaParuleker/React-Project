const customers = [
    {
        "id": 1,
        "firstName": "abc",
        "email": "e@e.com",
        "password": "123",
        
    },
    {
        "id": 2,
        "firstName": "Sneha",
        "email": "employee2@example.com",
        "password": "123",
    }
];

export const setLocalStorage = () => {
    localStorage.setItem('customers',JSON.stringify(customers))
}
export const getLocalStorage = () => {
    const customers = JSON.parse(localStorage.getItem('customers'))
    return {customers}
}

