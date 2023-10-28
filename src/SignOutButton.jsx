import React from 'react'; 
import { Auth } from 'aws-amplify'; 

function SignOutButton() { 
    const handleSignOut = async () => { 
        try { 
            const user = await Auth.currentAuthenticatedUser();
            console.log(user)
            if (user) {
                await Auth.signOut();
                window.load()
            }
        } catch (error) { 
            console.error('Error signing out:', error); 
        } 
    }; 
    return (
        <div className="Sign-out-link"
            onClick={handleSignOut}
        >Sign Out
        </div>
    )
} 
    
export default SignOutButton;