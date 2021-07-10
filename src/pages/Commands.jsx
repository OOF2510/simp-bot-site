import React from 'react';

const divStyle = {
    color:'black'
};

class About extends React.Component {
    
    render() {
        return (
            <div style={divStyle}>
                <h2>Commands Page</h2>
                <main>
                    <p>This section contains information about Simp Bot's Commands</p>
                </main>
            </div>
        )
    }
}



export default About;