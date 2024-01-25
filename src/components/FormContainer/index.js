import './FormContainer.css';
import TextField from '../TextField';
import DropDownList from '../DropDownList';
import Button from '../Button';
import {useState} from 'react';

const FormContainer = (props) => {

    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [image, setImage] = useState('');
    const [group, setGroup] = useState('Programação');

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'DevOps',
        'UX e Design',
        'Mobile',
        'Gestão e Inovação'
    ]

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(`Formulário Submetido: ${name}, ${charge}, ${image}, ${group}`)
        props.addNewPeople({
            name,
            charge,
            image,
            group
        });
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField value={name} onChange={value => setName(value)} required={true} label="Nome" placeholder="Digite o seu nome"/>
                <TextField value={charge} onChange={value => setCharge(value)} required={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <TextField value={image} onChange={value => setImage(value)} label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDownList value={group} onChange={value => setGroup(value)} required={true} label="Times" items={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default FormContainer;