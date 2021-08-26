import React from "react";
import Typography from "@material-ui/core/Typography";

const CopyRightComponent = (props) => {
  return (
    <div>
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    </div>
  );
};

export default CopyRightComponent;
