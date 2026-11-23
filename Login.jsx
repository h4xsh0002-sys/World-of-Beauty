import './login.css'
export default function Login() {
    return (
        <div id= "background">
            <div className="Login">
                <h1 id='center'>Register Here!</h1>
                <div id='car'>
                <img  id= 'round' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyQ_Y8rakVq87CU6GOiH8v_cMhSVP5C-dKN6eWWvW7Hg&s=10' alt="Car Racing" />
                <form id='form'>
                    <label>Your Name</label>
                    <input type= "text" placeholder="Enter you name" required />
                    <br />
                    <br />
                    <label>Your Age</label>
                    <input type= "calender" placeholder="Enter your age" required />
                    <br />
                    <br />
 
                    <label>Your Email</label>
                    <input type= "email" placeholder="Enter your email" required />
                    <br />
                    <br />
                    <label>Create Password</label>
                    <input type= "password" placeholder="Create a password" required />
                    <br />
                    <br />
                    <label>Confirm Password</label>
                    <input type= "password" placeholder="Confirm your password" required />
                    <br />
                    <br />

                    <label>Your Address</label>
                    <input type= "address" placeholder="Enter your address" required />
                    <br />
                    <br />

                    <button id='btn' type='submit'>Submit</button>
                </form>
                </div>
            </div>
        </div>
    )
    }
