import React from "react";
import { Card } from "@mui/material";
import { CardMedia } from "@mui/material";
import { CardContent } from "@mui/material";
import { Typography } from "@mui/material";

export const UserCard = (props) => {
  return (
    <>
      {props.user && (
        <Card>
          <CardMedia
            component="img"
            image={props.user.picture.medium}
            height={200}
            alt={props.user.name.first}
          ></CardMedia>
          <CardContent>
            <Typography>{props.user.name.first}</Typography>
            <Typography>{props.user.email}</Typography>
          </CardContent>
        </Card>
      )}
    </>
  );
};
