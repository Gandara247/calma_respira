import Layout from "@/components/Layout";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect, useState } from "react";

export default function DeleteProduct() {
    
    const router = useRouter();
    const [productInfo, setProductInfo] = useState(null);
    const { id } = router.query;
    
    useEffect(() => {
        if (!id) {
            return;
        }
        axios.get("/api/products/?id=" + id).then(response => {
            setProductInfo(response.data);
        });
    }, [id]);

    function goBack() {
        router.push("/products");
    }

    async function deleteProduct() {
        await axios.delete("/api/products/?id=" + id);
        goBack()
    }

    return (
        <Layout>
            <h1 className="text-center">
                Você realmente quer delerar &nbsp;"{productInfo?.title}"?
            </h1>
            <div className="flex gap-2 justify-center">
                <button className="btn-red" onClick={deleteProduct}>Sim</button>
                <button className="btn-default" onClick={goBack} >Não</button>
            </div>
        </Layout>
    )
}