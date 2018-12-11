import React from 'react';


class SessionForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return e => this.setState({
            [field]: e.target.value
        });
    }

    handleSubmit(e) {
         e.preventDefault();
        //  const user = Object.assign({}, this.state);
         this.props.processForm(this.state);
    }



    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>Welcome to BenchBnb!</h1>
                    Please {this.props.formType} or {this.props.navLink}
                    {/* {this.props.errors} */}
                    <label>
                        Username:
                        <input type="text" value={this.state.username} onChange={this.update("username")}/>
                    </label>
                    <label>
                        Password:
                        <input type="password" value={this.state.password} onChange={this.update("password")}/>
                    </label>
                    
                    <input type="submit" value={this.props.formType}/>
                </form>
            </div>
        )
    }


}

export default SessionForm;