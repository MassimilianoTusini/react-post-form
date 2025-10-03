import { useState } from "react";

export default function MyForm() {
    const [formData, setFormData] = useState({
        author: "",
        title: "",
        body: "",
        public: false,
    });

    const handleChange = (e) => {
        const { name, type, value, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === "checkbox" ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        window.axios.post("https://67c5b4f3351c081993fb1ab6.mockapi.io/api/posts", formData)
            .then((res) => {
                console.log("Dati inviati con successo:", res.data);

                setFormData({
                    author: "",
                    title: "",
                    body: "",
                    public: false,
                });
            })
            .catch((err) => {
                console.error("Errore durante l'invio:", err);
            });
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Autore:</label>
                    <input
                        type="text"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Titolo:</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>Testo:</label>
                    <textarea
                        name="body"
                        value={formData.body}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div>
                    <label>
                        <input
                            type="checkbox"
                            name="public"
                            checked={formData.public}
                            onChange={handleChange}
                        />
                        Pubblico
                    </label>
                </div>

                <button type="submit">Invia</button>
            </form>
        </div>
    );
}















