"use client";
import React, { useState } from "react";
import styles from "./page.module.css";
import HomePage from "@/components/template/HomePage";

export default function LoginPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState(""); // Estado para mensagem de erro

    async function handleSubmit(event: React.FormEvent) {
        event.preventDefault(); // Prevenir o reload da página
        setErrorMessage(""); // Limpar mensagem de erro antes de nova tentativa

        try {
            const response = await fetch("http://localhost:3000/authentication", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email, password }),
            });

            if (!response.ok) {
                // Se a resposta não for bem-sucedida, definir mensagem de erro
                const errorData = await response.json();
                setErrorMessage(errorData.message || "Erro ao fazer login.");
                return;
            }

            const data = await response.json();
            console.log("Login bem-sucedido:", data);

            // Salvar token no localStorage
            localStorage.setItem("token", data.token);

            // Redirecionar para a página inicial
            window.location.href = "/";
        } catch (error) {
            console.error("Erro ao fazer login:", error);
            setErrorMessage("Erro de conexão. Tente novamente mais tarde.");
        }
    }

    return (
        <HomePage>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1 className={styles.title}>Login</h1>
                    <form className={styles.form} onSubmit={handleSubmit}>
                        <label htmlFor="email" className={styles.label}>Email</label>
                        <input
                            type="email"
                            id="email"
                            className={styles.input}
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />

                        <label htmlFor="password" className={styles.label}>Senha</label>
                        <input
                            type="password"
                            id="password"
                            className={styles.input}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />

                        {/* Exibir mensagem de erro, se houver */}
                        {errorMessage && <p className={styles.error}>{errorMessage}</p>}

                        <button type="submit" className={styles.button}>
                            Entrar
                        </button>
                    </form>
                </div>
            </div>
        </HomePage>
    );
}
