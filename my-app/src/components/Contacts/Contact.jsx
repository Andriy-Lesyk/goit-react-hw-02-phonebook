import React from 'react'
import {Contacts, Contac, Btn} from "./Contacts.styled"


function Contact({ contacts, onDelete }) {
  
  console.log(contacts)
    return (
        <div>
          <Contacts>
          {
          contacts.map(contact=><Contac key={contact.id }>
                  <span>{contact.name} : {contact.number}</span>
                  <Btn onClick={() => (onDelete(contact.id))}>Delete</Btn>
                </Contac>
                )
          }
              
              
               
            </Contacts> 
        </div>
    )
}

export default Contact
