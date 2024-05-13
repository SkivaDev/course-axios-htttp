
const getUsers = async () => {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users', {
        params: {
            _limit: 2
        }
    })
    console.log(response);
}

getUsers()

