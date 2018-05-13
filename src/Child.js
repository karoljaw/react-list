import React, { Component } from 'react';

class Child extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
        
    }
    data = ["Karol", "Marta", "Ania", "Sandra"]
    


    render() {

        let filtered = this.data.filter(item => {
            let input = this.props.value.toLowerCase();
            return item.toLowerCase().includes(input)
        })

        let show = filtered.map(item => {
            return <p key={item}>{item}</p>
        })

        return (
            <div>
                {show}
            </div>
        );
    }
};

export default Child;