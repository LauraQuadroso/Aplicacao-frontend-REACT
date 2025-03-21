import React, { useState } from 'react';
import Input from '../form/AnimalInput';
import styles from './CreatePet.module.css';

const CreatePet = () => {
    const [animal, setAnimal] = useState({
        nome: '',
        fotos: [],
        especie: '',
        raca: '',
        sexo: '',
        idade: '',
        porte: '',
        cor: '',
        pelagem: '',
        descricao: '',
        temperamento: '',
        vacinacao: [],
        castrado: false,
        necessidadesEspeciais: '',
        telefone: '',
        email: '',
        endereco: '',
        numeroMicrochip: '',
        historicoMedico: '',
    });

    const handleInputChange = (event) => {
        const { name, value, type, checked } = event.target;
        setAnimal({
            ...animal,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleFotoChange = (event) => {
        const files = event.target.files;
        setAnimal({
            ...animal,
            fotos: files,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(animal);
        setAnimal({
            nome: '',
            fotos: [],
            especie: '',
            raca: '',
            sexo: '',
            idade: '',
            porte: '',
            cor: '',
            pelagem: '',
            descricao: '',
            temperamento: '',
            vacinacao: [],
            castrado: false,
            necessidadesEspeciais: '',
            nomeTutor: '',
            telefone: '',
            email: '',
            endereco: '',
            microchip: false,
            numeroMicrochip: '',
            historicoMedico: '',
        });
    };

    const handleCancel = () => {
        setAnimal({
            nome: '',
            fotos: [],
            especie: '',
            raca: '',
            sexo: '',
            idade: '',
            porte: '',
            cor: '',
            pelagem: '',
            descricao: '',
            temperamento: '',
            vacinacao: [],
            castrado: false,
            necessidadesEspeciais: '',
            nomeTutor: '',
            telefone: '',
            email: '',
            endereco: '',
            microchip: false,
            numeroMicrochip: '',
            historicoMedico: '',
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
                <Input type="text" name="telefone" id="telefone" placeholder="Telefone" value={animal.telefone} handlerChange={handleInputChange} />
                <Input type="email" name="email" id="email" placeholder="Email" value={animal.email} handlerChange={handleInputChange} />
                <Input type="text" name="endereco" id="endereco" placeholder="Endereço" value={animal.endereco} handlerChange={handleInputChange} />
                <button type="submit" className={styles.btnCadastrar}>Cadastrar</button>
                <button type="button" className={styles.btnCancelar} onClick={handleCancel}>Cancelar</button>
            </form>
        </div>
    );
};

export default CreatePet;
