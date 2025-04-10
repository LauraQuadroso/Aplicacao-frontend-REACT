import React, { useState } from 'react';
import Input from '../form/AnimalInput';
import styles from './CreatePet.module.css';
import api from '../../services/api';

const CreatePet = () => {
    const [animal, setAnimal] = useState({
        nome: '',
        fotos: [],
        descricao: '',
        sexo: '',
        idade: '',
        porte: '',
        cor: '',
        pelagem: '',
        temperamento: '',
        historicoMedico: '',
    });

    const [tutor, setTutor] = useState({
        nome: '',
        telefone: '',
        email: '',
        endereco: ''
    });

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        if (['nome', 'telefone', 'email', 'endereco'].includes(name)) {
            setTutor({
                ...tutor,
                [name]: value,
            });
        } else {
            setAnimal({
                ...animal,
                [name]: value,
            });
        }
    };

    const handleFotoChange = (event) => {
        const files = Array.from(event.target.files);
        setAnimal({
            ...animal,
            fotos: files.map(file => file.name), // Apenas nomes por enquanto
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await api.post('/animal', {
                ...animal,
                tutor: { ...tutor }
            });

            console.log("Animal cadastrado:", response.data);

            // Limpa os campos
            setAnimal({
                nome: '',
                fotos: [],
                descricao: '',
                sexo: '',
                idade: '',
                porte: '',
                cor: '',
                pelagem: '',
                temperamento: '',
                historicoMedico: '',
            });

            setTutor({
                nome: '',
                telefone: '',
                email: '',
                endereco: ''
            });

        } catch (error) {
            console.error("Erro ao cadastrar animal:", error);
        }
    };

    const handleCancel = () => {
        setAnimal({
            nome: '',
            fotos: [],
            descricao: '',
            sexo: '',
            idade: '',
            porte: '',
            cor: '',
            pelagem: '',
            temperamento: '',
            historicoMedico: '',
        });

        setTutor({
            nome: '',
            telefone: '',
            email: '',
            endereco: ''
        });
    };

    return (
        <div className={styles.container}>
            <h1>Cadastrar Animal</h1>
            <form onSubmit={handleSubmit} className={styles.form}>
                <Input type="text" name="nome" id="nome" placeholder="Nome do animal" value={animal.nome} handlerChange={handleInputChange} />
                <div className={styles.form_control}>
                    <label htmlFor="fotos">Fotos do Animal</label>
                    <input type="file" name="fotos" id="fotos" multiple onChange={handleFotoChange} />
                </div>
                <Input type="textarea" name="descricao" id="descricao" placeholder="Descrição do animal" value={animal.descricao} handlerChange={handleInputChange} />
                <Input type="text" name="sexo" id="sexo" placeholder="Sexo do animal" value={animal.sexo} handlerChange={handleInputChange} />
                <Input type="text" name="idade" id="idade" placeholder="Idade do animal" value={animal.idade} handlerChange={handleInputChange} />
                <Input type="text" name="porte" id="porte" placeholder="Porte do animal" value={animal.porte} handlerChange={handleInputChange} />
                <Input type="text" name="cor" id="cor" placeholder="Cor do animal" value={animal.cor} handlerChange={handleInputChange} />
                <Input type="text" name="pelagem" id="pelagem" placeholder="Pelagem do animal" value={animal.pelagem} handlerChange={handleInputChange} />
                <Input type="text" name="temperamento" id="temperamento" placeholder="Temperamento do animal" value={animal.temperamento} handlerChange={handleInputChange} />
                <Input type="textarea" name="historicoMedico" id="historicoMedico" placeholder="Histórico médico" value={animal.historicoMedico} handlerChange={handleInputChange} />

                <h2>Tutor</h2>
                <Input type="text" name="nome" id="nomeTutor" placeholder="Nome do tutor" value={tutor.nome} handlerChange={handleInputChange} />
                <Input type="text" name="telefone" id="telefone" placeholder="Telefone" value={tutor.telefone} handlerChange={handleInputChange} />
                <Input type="email" name="email" id="email" placeholder="Email" value={tutor.email} handlerChange={handleInputChange} />
                <Input type="text" name="endereco" id="endereco" placeholder="Endereço" value={tutor.endereco} handlerChange={handleInputChange} />

                <button type="submit" className={styles.btnCadastrar}>Cadastrar</button>
                <button type="button" className={styles.btnCancelar} onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default CreatePet;
