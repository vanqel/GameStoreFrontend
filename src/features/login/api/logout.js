import axios from 'axios';

async function logout (history) {

    const handleRedirect = () => {
        history.push(`/`);
    };

    try {
        await axios.post('https://openstorebackendkotlin.onrender.com/auth/logout', {},{

            headers: {
                'Authorization': `Bearer ${localStorage.getItem('Access')}`,
                'Refresh': `Refresh ${localStorage.getItem('Refresh')}`,
            },
        });

        localStorage.removeItem('username');
        localStorage.removeItem('id');
        localStorage.removeItem('roles');
        localStorage.removeItem('Access');
        localStorage.removeItem('Refresh');

        handleRedirect()
    } catch (error) {
        console.error('Ошибка при входе:', error);
    }
};

export default logout;