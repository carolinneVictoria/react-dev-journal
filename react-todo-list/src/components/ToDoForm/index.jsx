import Button from '../Button';
import { TextInput } from '../TextInput';
import './to-do-form.style.css'

export function ToDoForm({onSubmit, defaultValue}) {
    return (
        <form className='todo-form' action={onSubmit}>
            <TextInput 
            placeholder="Digite o item que deseja adicionar" 
            name="description" 
            defaultValue={defaultValue}
            required/>
            <Button>
                Salvar Item
            </Button>
        </form>
    )
}

export default ToDoForm;