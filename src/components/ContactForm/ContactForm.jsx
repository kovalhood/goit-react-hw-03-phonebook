import React, {Component} from 'react';
import Label from './Label';
import InputName from './InputName';
import InputNumber from './InputNumber';
import Button from 'components/Button';
import s from './ContactForm.module.css';
import { nanoid } from 'nanoid'

class ContactForm extends Component{
    state = {
        id: '',
        name: '',
        number: ''
    };

    setId = () => {
        let nameInputId = nanoid(6);
        this.setState({
            id: nameInputId,
        })
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setId();

        setTimeout(() => {
            this.props.onSubmit(this.state);

        this.resetForm();
        }, 10);
    
        
    };
    
    handleInputChange = event => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        });
    };

    resetForm = () => {
        this.setState({
            name: '',
            number: ''
        })
    };

    
    render() {
        const { name, number } = this.state;
        const { handleSubmit, handleInputChange } = this;

        return <form onSubmit={handleSubmit} className={s.form}>
            <Label labelTitle={'Name'}>
                <InputName name={name} onNameChange={handleInputChange}/>
            </Label>
            
            <Label labelTitle={'Number'}>
                <InputNumber number={number} onNumberChange={handleInputChange} />
            </Label>
            
            <Button type={'submit'} title={"Add contact"} />
    </form>
    };
};

export default ContactForm;