import React from "react"; 
// import './NavBar.css'; 
import Logo from "../../assets/Trello_logo.png";
export default function NavBar(){
return(
    <nav style={styles.nav}> 
        <img src={Logo} alt ="Trello-logo" style={styles.image} />
    </nav>
)
}


/*Nav Bar Styling rules
====================================================*/
const styles = {
    image: {
       padding: 10, 
       width: 100, 
       height: 30 
    },
    nav: {
        backgroundColor: "#458331",
        width: "100%", 
        left: 0, 
        top: 0, 
        position: "absolute", 
        textAlign: "center"
    }

}; 