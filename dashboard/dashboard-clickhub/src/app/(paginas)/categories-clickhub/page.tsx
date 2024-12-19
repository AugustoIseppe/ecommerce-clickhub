"use client";

import { useState } from "react";
export default function ProductForm() {
    const [formData, setFormData] = useState({
        name: "",

    });

    const [successMessage, setSuccessMessage] = useState("");



    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();



        // Adicionar a imagem selecionada (convertida para arquivo) no FormData

        try {
            const response = await fetch("http://localhost:3000/categories", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setSuccessMessage(`${formData.name} foi inserido(a) na lista de categorias do sistema!`);
                setFormData({
                    name: "",
                });

            } else {
                const errorData = await response.json();
                console.error("Erro ao cadastrar Categoria:", errorData.message);
                alert("Erro ao cadastrar Categoria. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar o formulário.");
        }
    };


    return (

        <div className="form-container">
            <h1 className="title-h1">Cadastrar Categoria</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>




                <button type="submit" className="button-form">Cadastrar</button>
                {/* <button className="btn" type="submit">open modal</button> */}

            </form>
            {successMessage &&
                <div className="success-message">
                    {successMessage}
                </div>
            }
        </div>


    );
}