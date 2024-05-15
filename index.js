
const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
            _limit: 2
        }
    })
    console.log(response);
}

const postRegister = async () => {
    const response = await axios.post('https://reqres.in/api/register', {
        email: 'eve.holt@reqres.in',
        password: 'pistol'
    })
    console.log(response);
}

const putUser = async () => {
    const response = await axios.put('https://jsonplaceholder.typicode.com/users/1', {
        name: 'John Doe'
    })
    console.log(response);
}

const patchUser = async () => {
    const response = await axios.patch('https://jsonplaceholder.typicode.com/users/1', {
        name: 'John Doe'
    })
    console.log(response);
}

const deleteUser = async () => {
    const response = await axios.delete('https://jsonplaceholder.typicode.com/users/1')
    console.log(response);
}


Promise.all([getUsers(), postRegister(), putUser(), patchUser(), deleteUser()]).then(res => {
    console.log(res);
}).catch((error) => {
    console.log('Error:', error);
});
