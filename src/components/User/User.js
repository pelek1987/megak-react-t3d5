import {ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography} from '@mui/material';

export const User = ({userData}) => {
    const {username, title, first_name: name, last_name: surname, email, picture} = userData;
    return (
        <>
            <ListItem alignItems="flex-start">
                <ListItemAvatar>
                    <Avatar alt="" src={`https://raw.githubusercontent.com/pixelastic/fakeusers/master/pictures/${picture}`}/>
                </ListItemAvatar>
                <ListItemText
                    primary={username}
                    secondary={
                        <>
                            <Typography
                                component="p"
                                variant="body2"
                                color="text.primary"
                            >
                                {title +  ' ' + name + ' ' + surname}
                            </Typography>
                            {email}
                        </>
                    }
                />
            </ListItem>
            <Divider variant="inset" component="li"/>
        </>
    );
};
