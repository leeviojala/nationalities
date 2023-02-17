import { List, ListItem, ListItemText } from '@mui/material'
import React from 'react'

export const ListView = (props) => {

  return (
    <List>
      {props.users && props.users.map((user) => {
        return (
          <ListItem key={user.id.value} divider onClick={() => props.openDialog(user)}>
            <ListItemText primary={user.name.first} secondary={user.name.last}></ListItemText>
          </ListItem>
        )
      })
      }
    </List>
  )
}
