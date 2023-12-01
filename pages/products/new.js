import Layout from "@/components/Layout";
import axios from "axios";
import { useState } from "react";

export default function NewProduct() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [price, setPrice] = useState("");
    async function createProduct(ev) {
        ev.preventDefault();
        const data = {title, description, price};
        await axios.post("/api/products", data);
    }
    return (
        <Layout>

            <form onSubmit={createProduct}>
                <h1>New Product</h1>

                <label>Nome do Produto</label>
                <input
                    type="text"
                    placeholder="nome do produto"
                    value={title}
                    onChange={ev => setTitle(ev.target.value)}
                />

                <label>Descrição do produto</label>
                <textarea
                    placeholder="descrição"
                    value={description}
                    onChange={ev => setDescription(ev.target.value)}
                />

                <label>Preço em R$</label>
                <input
                    type="number"
                    placeholder="preço"
                    value={price}
                    onChange={ev => setPrice(ev.target.value)}
                />

                <button
                    type="submit"
                    className="btn-primary">salvar
                </button>

            </form>

        </Layout>
    )
}