const NAVBAR_HTML = `
<div class="topnav" id="myTopnav">
    <a href="index.html" class="logo-link">
        <img src="images/logo_w.svg" alt="Sinar Bersama Sdn Bhd Logo" class="logo">
    </a>
    <a href="index.html">Home</a>
    <a href="about.html">About Us</a>
    <a href="services.html">Services</a>
    <a href="contact.html">Contact Us</a>
    <a href="javascript:void(0);" class="icon" onclick="toggleNav()">&#9776;</a>
</div>`;

const FOOTER_HTML = `
<footer>
    <p>&copy; 2025 Sinar Bersama Sdn Bhd. All rights reserved.</p>
    <p>Address: LOT 14, 1ST FLOOR SEDCO LIGHT INDUSTRIAL JALAN KOLOMBONG, 88450, KOTA KINABALU, SABAH.</p>
    <p>Tel: 012-5118107</p>
</footer>`;

function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

document.addEventListener("DOMContentLoaded", function () {
    var navbar = document.getElementById("navbar");
    if (navbar) navbar.outerHTML = NAVBAR_HTML;

    var footer = document.getElementById("footer");
    if (footer) footer.outerHTML = FOOTER_HTML;
});
