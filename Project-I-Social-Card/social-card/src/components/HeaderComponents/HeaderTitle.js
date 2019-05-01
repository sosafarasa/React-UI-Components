import React from 'react';
import './Header.css';

function HeaderTitle() {
    return (
        <div className = "headerTitle">
            <div className = "header-title">
                <h2>Lambda School</h2>
                <a>@LambdaSchool</a>
                <p>29 Apr</p>
            </div>

            <div className = "header-content">
                <p>Let's learn React by building simple interfaces with components. Don't try to overthink it, just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!
                </p>
            </div>
        </div>
    );
};

export default HeaderTitle;