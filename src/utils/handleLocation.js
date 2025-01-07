import { useNavigate } from 'react-router-dom';

//const navigate = useNavigate();
export function handleLocation(url) {
    window.location.href = url;
}