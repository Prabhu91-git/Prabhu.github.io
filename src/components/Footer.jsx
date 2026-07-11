import "../styles/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p>
        © {new Date().getFullYear()} &nbsp;&nbsp; R. Prabhu   • &nbsp;&nbsp;  Built with React &nbsp;&nbsp; • &nbsp;&nbsp; {"All Rights Reserved. "}
      </p>
    </footer>
  );
}

export default Footer;