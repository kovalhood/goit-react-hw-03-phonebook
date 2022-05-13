import React, {Component} from 'react';
import Wrapper from "components/Wrapper";
import Section from "components/Section";
import ContactForm from 'components/ContactForm';
import Filter from 'components/Filter';
import ContactList from 'components/ContactList';
import Notification from 'components/Notification';

class App extends Component{
    state = {
        contacts: [],
        filter: ''
    };

    // Loading contacts from local storage
    componentDidMount() {
        const savedContacts = localStorage.getItem('contacts');
        const parsedContacts = JSON.parse(savedContacts)

        if (parsedContacts) {
            this.setState({
                contacts: parsedContacts,
            })
        }
    }
    
    // Saving contacts to local storage
    componentDidUpdate(prevProps, prevState) {
        const { contacts } = this.state;
        
        if (contacts !== prevState.contacts) {
            localStorage.setItem('contacts', JSON.stringify(contacts))
        }

        if (contacts.length === 0) {
            localStorage.removeItem('contacts');
        }
    }

    formSubmitHandler = data => {
        const { contacts } = this.state;

        if (contacts.find(contact => contact.name.toLowerCase() === data.name.toLowerCase())) {
            this.setState({
                filter: ''
            });
            
            return alert(`${data.name} is already in contacts`);
        }

        this.setState(prevState => ({
            contacts: [...prevState.contacts, data],
            filter: ''
        }));
    }

    handleFilterChange = event => {
        const { name, value } = event.currentTarget
        this.setState({
            [name]: value,
        });
    };

    deleteContact = (contactId) => {
        this.setState(prevState => ({
            contacts: prevState.contacts.filter(contact => contact.id!==contactId),
        }))
    }

    render() {
        const { formSubmitHandler, handleFilterChange, deleteContact } = this;
        const { contacts, filter } = this.state;

        return (
            <Wrapper>
                <Section title={'Phonebook'}>
                    <ContactForm onSubmit={ formSubmitHandler }/>
                </Section>

                <Section title={'Contacts'}>
                    <Filter name={filter} onFilterChange={handleFilterChange} />
                    {contacts.length > 0 ? (
                        <ContactList data={contacts} filterName={filter} onDeleteContact={ deleteContact }/>
                    ) : (
                        <Notification message="There are no contacts yet" />
                    )}
                </Section>
            </Wrapper>
        )
    }
}

export default App;