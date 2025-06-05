
const getdata = async () => {
    const response = await fetch('https://raoapi.vercel.app/api/school/newuser/')
    const data = await response.json()
    return data
}

getdata().then(data => {
    console.log(data); 
}).catch(error => {
    console.error("Error fetching data:", error);
});

const login = async (username, password) => {
    try {
        const response = await fetch('http://127.0.0.1:8000/api/school/login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: username,
                password: password  
            }),
        });

        const data = await response.json();

        if (response.ok) {
            console.log('User created:', data);
        } else {
            console.error('Failed to create user:', data);
        }
    } catch (error) {
        console.error('Network error:', error);
    }
}

login('new', '123');