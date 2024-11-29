import React from 'react';
import axios from 'axios';
import { Button } from 'react-bootstrap';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';
const Listarticles = () => {
    const [articles, setArticles] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(true);
    const fetcharticles = async () => {
        try {
            const response = await axios.get(
                'https://ecommerce-backend-eosin-tau.vercel.app/api/api/articles',
            );
            setArticles(response.data);
            setIsLoading(true);
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false)
        }
    };
    React.useEffect(() => {
        fetcharticles();
    }, [articles]);

    const handleDelete = async (id) => {
        try {
            const res = await axios.delete(`https://ecommerce-backend-eosin-tau.vercel.app/api/api/articles/${id}`)
            setArticles(articles.filter(art => art.id != id))
            console.info(res.data)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <div>
            <Link to='/articles/add'>
                <Button
                    size='sm'
                    variant='success'>
                    <i className='fa-solid fa-square-plus'></i> Ajouter
                </Button>
            </Link>
            <h1>Liste des articles</h1>
            <table className='table table-striped table-bordered table-hover'>
                <thead>
                    <tr>
                        <th>Référence</th>
                        <th>Désignation</th>
                        <th>Marque</th>
                        <th>Prix</th>
                        <th>Stock</th>
                        <th>Image</th>
                        <th>Update</th>
                        <th>Delete</th>
                    </tr>
                </thead>
                <tbody className='container'>
                    {isLoading ? (
                        <center>
                            <ReactLoading
                                className='col-md-auto'
                                type='spin'
                                color='blue'
                                width={'100%'}
                            />
                        </center>
                    ) : (
                        articles.map((article) => (
                            <tr key={article.id}>
                                <td>{article.reference}</td>
                                <td>{article.designation}</td>
                                <td>{article.marque}</td>
                                <td>{article.prix}</td>
                                <td>{article.qtestock}</td>
                                <td>
                                    <img
                                        width={70}
                                        alt={article.designation}
                                        src={article.imageart}
                                    />
                                </td>
                                <td>
                                    <Link to={`/articles/edit/${article.id}`}>
                                        <Button
                                            size='sm'
                                            variant='warning'>
                                            <i className='fa-solid fa-pen-to-square'></i> Update
                                        </Button>
                                    </Link>
                                </td>
                                <td>
                                    <Button
                                        disabled={isLoading}
                                        onClick={() => handleDelete(article.id)}
                                        size='sm'
                                        variant='danger'>
                                        <i className='fa-solid fa-trash-can'></i> Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Listarticles;
