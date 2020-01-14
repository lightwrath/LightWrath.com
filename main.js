function showProjects() {
    document.getElementById("projects").style.display = "block";
    document.getElementById("resume").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showResume() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "none";
}

function showAbout() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("contact").style.display = "none";
}

function showContact() {
    document.getElementById("projects").style.display = "none";
    document.getElementById("resume").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("contact").style.display = "block";
}