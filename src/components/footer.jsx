const date = new Date();
const year = date.getFullYear();

function Footer(){
    return (
        <footer>
            <p>Copyright in {year}</p>
        </footer>
    )
}

export default Footer;