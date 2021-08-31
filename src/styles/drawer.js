
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import GlobalStyles from "../styles/useStyles";
import { mainListItems } from "../components/Container/listitems";


function global() {
     const globalClasses = GlobalStyles()
     return globalClasses.toolbar
}

const DrawerList = (
     <div>
       <div className={global} />
       <Divider />
       <List>
         {mainListItems}
       </List>
       <Divider />
     </div>
   );

export default DrawerList;
