export async function login(email: string, password: string) {
    const response = await fetch("http://localhost:3000/authentication", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
    });

    if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || "Erro ao fazer login");
    }
    console.log("Login bem-sucedido:", response.json());
    return response.json();
}
