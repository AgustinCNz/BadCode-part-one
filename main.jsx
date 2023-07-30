const app = document.getElementById('app')

const root = ReactDOM.createRoot(app)

function Button (props) {
    const handleClick = () => {
        console.log('clicked')
    }
    return (
    
        <button onClick={handleClick}>{props.message}</button>
       
    )
}

root.render(<Button message='Clickealoa'/>)