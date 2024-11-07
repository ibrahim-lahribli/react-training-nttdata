//const loginBtn = React.createElement('button',{className: 'login-btn'},'Login'); 

const LoginButton= () => {
    return (
        <button className="login-btn">login from jsx</button>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));

//root.render(loginBtn)
root.render(<LoginButton />)