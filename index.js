
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

getUsers();
postRegister();
