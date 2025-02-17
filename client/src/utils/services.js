export const baseURL = "https://chat-app-9v4s.onrender.com/api";



// Register, Login
export const postRequest = async (url, body) => {
    try {
        const response = await fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body,
        });

        const data = await response.json();

        if (!response.ok) {
            let message;
        
            if (data?.message) {
                message = data.message; // Extract message from the response
            } else {
                message = data; // Use raw response if no message is found
            }
        
            return { error: true, message }; // Return error with message
        }
        return data;

    } 
    
    catch (error) {
        console.error("Network Error:", error.message);
        return { error: true, message: error.message || "Network error occurred." };
    }
};



export const getRequest = async(url) => {
    try {
        const response = await fetch(url)

        const data = await response.json()

        // If no response
        if (!response.ok) {
            let message;
            if (data?.message) {
                message = data.message; // Extract message from the response
            }
            return { error: true, message }; // Return error with message
        }
        
        // If response received
        return data;
        
    } 
    

    catch (error) {
        console.error("Network Error:", error.message);
        return { error: true, message: error.message || "Network error occurred." };
    }
}