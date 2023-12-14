import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

export function Navigation() {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = "https://kit.fontawesome.com/776ddda725.js";
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div>
            <Link to="/home">
                <Button variant="primary" size="lg" style={{ margin: '10px 10px 10px 0' }}>
                <i className="fas fa-backward"></i>

                </Button>
            </Link>
        </div>
    )
}



