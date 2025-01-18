export const baseURL = "http://localhost:3000/api";






// Register User
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

