
// Определяем, где запущено приложение
const isLocalhost = window.location.hostname === 'localhost' || window.location.hostname === '127.0.0.1';
const API_URL = import.meta.env.VITE_API_URL
	|| (isLocalhost
		? 'http://127.0.0.1:8000/api'
		: 'https://web-production-b4dad.up.railway.app/api');

export default API_URL;