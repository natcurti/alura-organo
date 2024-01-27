import './FormContainer.css';
import Field from '../Field';
import DropDownList from '../DropDownList';
import Button from '../Button';
import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';

const FormContainer = (props) => {

    const [name, setName] = useState('');
    const [charge, setCharge] = useState('');
    const [image, setImage] = useState('');
    const [group, setGroup] = useState('');
    const [groupName, setGroupName] = useState('');
    const [groupColor, setGroupColor] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        props.addNewPerson({
            name,
            charge,
            image,
            group,
            id: uuidv4(),
            favorite: false
        });
        setName('')
        setCharge('')
        setImage('')
        setGroup('')
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <Field type="text" value={name} onChange={value => setName(value)} required label="Nome" placeholder="Digite o seu nome"/>
                <Field type="text" value={charge} onChange={value => setCharge(value)} required label="Cargo" placeholder="Digite o seu cargo"/>
                <Field type="text" value={image} onChange={value => setImage(value)} label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDownList value={group} onChange={value => setGroup(value)} required label="Times" items={props.groups}/>
                <Button>Criar Card</Button>
            </form>
            <form onSubmit={(e) => {
                e.preventDefault();
                props.registerGroup({name: groupName, color: groupColor})
            }}>
                <h2>Preencha os dados para criar um novo time.</h2>
                <Field type="text" value={groupName} onChange={value => setGroupName(value)} required label="Nome" placeholder="Digite o nome do time"/>
                <Field type="color" value={groupColor} onChange={value => setGroupColor(value)} required label="Cor" placeholder="Digite a cor do time"/>
                <Button>Criar Novo Time</Button>
            </form>
        </section>
    )
}

export default FormContainer;