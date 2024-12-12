"use client";

import { useState } from "react";

export default function ProductForm() {
    const [formData, setFormData] = useState({
        name: "",
        description: "",
        price: "",
        stock: "",
        category_id: "",
    });

    const [successMessage, setSuccessMessage] = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch("http://localhost:3000/products", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    description: formData.description,
                    price: parseFloat(formData.price),
                    stock: parseInt(formData.stock, 10),
                    category_id: formData.category_id,
                }),
            });

            if (response.ok) {
                setSuccessMessage("Produto cadastrado com sucesso!");
                setFormData({
                    name: "",
                    description: "",
                    price: "",
                    stock: "",
                    category_id: "",
                });
            } else {
                const errorData = await response.json();
                console.error("Erro ao cadastrar produto:", errorData.message);
                alert("Erro ao cadastrar produto. Tente novamente.");
            }
        } catch (error) {
            console.error("Erro ao enviar formulário:", error);
            alert("Erro ao enviar o formulário.");
        }
    };

    return (
        <div className="form-container">
            <h1>Cadastrar Produto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Nome</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="description">Descrição</label>
                    <textarea
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        required
                    ></textarea>
                </div>
                <div>
                    <label htmlFor="price">Preço</label>
                    <input
                        type="number"
                        step="0.01"
                        id="price"
                        name="price"
                        value={formData.price}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="stock">Estoque</label>
                    <input
                        type="number"
                        id="stock"
                        name="stock"
                        value={formData.stock}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="category_id">Categoria ID</label>
                    <input
                        type="text"
                        id="category_id"
                        name="category_id"
                        value={formData.category_id}
                        onChange={handleInputChange}
                        required
                    />
                </div>
                <button type="submit">Cadastrar Produto</button>
            </form>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}
