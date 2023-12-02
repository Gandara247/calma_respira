import { useState } from "react";
import { useRouter } from "next/router";
import axios from "axios";


export default function ProductForm({
    _id,
    title: existingTitle,
    description: existingDescription,
    price: existingPrice,
}) {
    const [title, setTitle] = useState(existingTitle || "");
    const [description, setDescription] = useState(existingDescription || "");
    const [price, setPrice] = useState(existingPrice || "");
    const [goToProducts, setGoToProducts] = useState(false);
    const router = useRouter();
    async function saveProduct(ev) {
        ev.preventDefault();
        const data = { title, description, price };

        if (_id) {
            await axios.put("/api/products",{...data, _id});
        } else {
            await axios.post("/api/products", data);
        }
        setGoToProducts(true);
    }

    if (goToProducts) {
        router.push("/products");
    }
    return (
        <form onSubmit={saveProduct}>

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
    )
}