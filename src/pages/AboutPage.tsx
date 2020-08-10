import React from 'react';
import {useHistory} from 'react-router-dom';

export const AboutPage: React.FC = () => {
    const history=useHistory();
    return (
        <>
            <h1>Информация</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
                Iusto, sed placeat atque earum vero quibusdam soluta maiores quo! 
                Aperiam quae ad repellendus corrupti repellat eum deleniti debitis. 
                Obcaecati, necessitatibus quis.</p>
            <button className="btn" onClick={()=>history.push("/")}>Обратно к списку дел</button>
        </>
    );
}
