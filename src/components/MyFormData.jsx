import style from "../css/modules/MyFormData.module.css";
import { useState } from "react";

export default function MyFormData() {
    const initialFormData = {
        title_post: "",
        content_post: ""
    };

    const [postsList, setPostsList] = useState([]);
    const [formData, setFormData] = useState(initialFormData);

    function updateFormData(newValue, fieldName) {
        setFormData({
            ...formData,
            [fieldName]: newValue
        });
    }

    function handleFormSubmit(e) {
        e.preventDefault();

        setPostsList([...postsList, { ...formData, id: crypto.randomUUID() }]);

        setFormData(initialFormData);
    }

    function removePost(idToRemove) {
        setPostsList(postsList.filter((post) => post.id !== idToRemove));
    }

    return (
        <div className={"container"}>
            <h1 className="text-center">INSERISCI I DATI DEL NUOVO POST</h1>

            <form onSubmit={handleFormSubmit}>
                <div className="mb-3">
                    <label htmlFor="titlePost" className="form-label">
                        <strong>Titolo:</strong>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserisci qui il titolo del post"
                        name="title_post"
                        value={formData.title_post}
                        onChange={(e) => updateFormData(e.target.value, "title_post")}
                    ></input>

                    <label htmlFor="contentPost" className="form-label">
                        <strong>Contenuto:</strong>
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Inserisci qui il contenuto del post"
                        name="content_post"
                        value={formData.content_post}
                        onChange={(e) => updateFormData(e.target.value, "content_post")}
                    ></input>
                </div>

                <button type="submit" className="btn btn-primary">
                    Submit
                </button>
            </form>

            <div className="row justify-content-center py-5">
                {postsList.map((post) => (
                    <div key={post.id} className="col-5 mx-2 my-2 card">
                        <div className={style.card_header}>
                            <h3>{post.title_post}</h3>
                            <button className={style.delete_button} onClick={() => removePost(post.id)}>
                                X
                            </button>
                        </div>
                        <p>{post.content_post}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
