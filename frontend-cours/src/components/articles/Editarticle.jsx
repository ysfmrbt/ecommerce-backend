import axios from 'axios';
import React, { useEffect } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link, useNavigate, useParams } from 'react-router-dom';

const Editarticle = () => {
    const [article, setArticle] = React.useState({});
    const [Scategorie, setScategorie] = React.useState([]);
    const [isLoading, setIsLoading] = React.useState(false);
    const { id } = useParams();
    const navigate = useNavigate();
    const fetchScategories = async () => {
        try {
            const response = await axios.get(
                'https://ecommerce-backend-eosin-tau.vercel.app/api/api/scategories',
            );
            setScategorie(response.data);
            setArticle({ ...article });
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        loadarticle(id)
        fetchScategories();
    }, []);

    const loadarticle = async (id) => {
        try {
            setIsLoading(true);
            const res = await axios.get(`https://ecommerce-backend-eosin-tau.vercel.app/api/api/articles/${id}`)
            setArticle(res.data)
        } catch (error) {
            console.error(error)
        } finally {
            setIsLoading(false)
        }
    }


    const handleChange = (e) => {
        setArticle({ ...article, [e.target.name]: e.target.value });
    };

    const handleUpdate = async (e) => {
        try {
            setIsLoading(true);
            e.preventDefault();
            const response = await axios.put(
                `https://ecommerce-backend-eosin-tau.vercel.app/api/api/articles/${id}`,
                {
                    ...article,
                },
            );

            if (response.status === 201 || response.status === 200) {
                console.info('Article inséré avec succès');
                navigate('/articles');
            }
        } catch (error) {
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };
    return (
        <div className='col-md-6 offset-md-3 border rounded p-4 mt-2 shadow'>
            <center>
                <h3>Modifier article</h3>
            </center>
            <Form className='my-4'>
                <Row>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Reference</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Reference'
                            name='reference'
                            disabled={isLoading}
                            value={article.reference}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Designation</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Designation'
                            name='designation'
                            disabled={isLoading}
                            value={article.designation}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Marque</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Marque'
                            name='marque'
                            disabled={isLoading}
                            value={article.marque}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Stock</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Stock'
                            name='qtestock'
                            disabled={isLoading}
                            value={article.qtestock}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Prix</Form.Label>
                        <Form.Control
                            type='number'
                            placeholder='Prix'
                            name='prix'
                            disabled={isLoading}
                            value={article.prix}
                            onChange={handleChange}
                        />
                    </Form.Group>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Image</Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Image'
                            disabled={isLoading}
                            name='imageart'
                            value={article.imageart}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <Row>
                    <Form.Group
                        as={Col}
                        mb='6'>
                        <Form.Label>Sous-Catégorie</Form.Label>
                        <Form.Select
                            name='scategorieID'
                            value={article.scategorieID}
                            disabled={isLoading}
                            onChange={handleChange}>
                            {Scategorie.map((scat, index) => (
                                <option
                                    key={index}
                                    value={scat.id}>
                                    {scat.nomscategorie}
                                </option>
                            ))}
                        </Form.Select>
                    </Form.Group>
                </Row>
            </Form>
            <Button
                onClick={(e) => handleUpdate(e)}
                disabled={isLoading}
                size='sm'
                variant='success'>
                <i className='fa-solid fa-floppy-disk'></i> Enregistrer
            </Button>
            &nbsp;
            <Link to='/articles'>
                <Button
                    disabled={isLoading}
                    size='sm'
                    variant='danger'>
                    <i className='fa-solid fa-circle-xmark'></i> Annuler
                </Button>
            </Link>
        </div>
    );
};

export default Editarticle;
