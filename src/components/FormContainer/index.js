import './FormContainer.css';
import TextField from '../TextField';
import DropDownList from '../DropDownList';
import Button from '../Button';

const FormContainer = () => {

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
        console.log('Formulário Submetido.')
    }

    return (
        <section className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Preencha os dados para criar o card do colaborador.</h2>
                <TextField required={true} label="Nome" placeholder="Digite o seu nome"/>
                <TextField required={true} label="Cargo" placeholder="Digite o seu cargo"/>
                <TextField label="Imagem" placeholder="Informe o endereço da imagem"/>
                <DropDownList required={true} label="Times" items={times}/>
                <Button>Criar Card</Button>
            </form>
        </section>
    )
}

export default FormContainer;