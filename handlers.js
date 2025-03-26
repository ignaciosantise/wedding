(function() {
  // Query params names parser
  const searchParams = new URLSearchParams(window.location.search);
  const allNames = searchParams.get("i") ? searchParams.get("i").split(",").map((n) => n.trim()[0].toUpperCase() + n.trim().slice(1)) : [];
  if (allNames.length > 0) {
    const names = allNames.slice(0, -1);
    const last = allNames[allNames.length - 1];
    const greetings = document.querySelector(".details .i");
    const splittedNames = allNames.length > 1 ? `${names.join(", ")} y ${last}` : last;
    greetings.textContent = splittedNames;
    
    // Initialize input with names
    const guestInput = document.getElementById("guest-name");
    if (guestInput) {
      guestInput.value = splittedNames;
    }
  }

  // RSVP handlers
  const rsvpButton = document.getElementById("rsvp");
  rsvpButton.addEventListener("click", (event) => {
    if (rsvpButton.classList.contains("disabled")) return;

    if (rsvpButton.textContent === "CONFIRMAR ASISTENCIA") {
      rsvpButton.parentElement.classList.add("expanded");
      document.getElementById("rsvp-options").classList.remove("hidden");
      rsvpButton.textContent = "¡CONFIRMAR!";
    } else {
      const noChecked = document.getElementById("rsvp-no").checked;
      const yesChecked = document.getElementById("rsvp-yes").checked;
      // const transportYes = document.getElementById("transport-yes").checked;
      // const transportNo = document.getElementById("transport-no").checked;
      const guestInput = document.getElementById("guest-name");

      if (!noChecked && !yesChecked) {
        return alert("Por favor seleccioná una opción para confirmar tu asistencia");
      }

      // if (!transportYes && !transportNo) {
      //   return alert("Por favor indicá si necesitas transporte");
      // }

      if (!guestInput.value.trim()) {
        return alert("Por favor ingresá tu nombre");
      }

      rsvpButton.classList.add("disabled");
      rsvpButton.textContent = "...";

      const formId = '1FAIpQLScpfyGhhvhS_bULm7_v3bJWqV5v_PLai93a-Qw28S_AbUr3Aw';
      const formUrl = `https://docs.google.com/forms/u/0/d/e/${formId}/formResponse`;
      
      const body = new URLSearchParams();
      body.append('entry.1780935194', guestInput.value.trim()); // Name
      body.append('entry.1929940713', noChecked ? "No" : "Si"); // yes/no
      // body.append('entry.520211534', transportNo ? "No" : "Si"); // transport yes/no
      body.append('entry.520211534', "No"); // transport yes/no
      body.append('fvv', "1");
      body.append('submit', "Submit");
      const opts = {
        method: "POST",
        mode: "no-cors", // Required for Google Forms
        redirect: "follow",
        referrer: "no-referrer",
        body,
      };
      fetch(formUrl, opts).then(() => {
        rsvpButton.textContent = "¡NOS VEMOS!";
        rsvpButton.parentElement.classList.remove("expanded");
        document.getElementById("rsvp-options").classList.add("hidden");
        
        // scroll to next section
        setTimeout(() => {
          const nextSection = document.getElementById("rsvp-options").nextElementSibling;
          if (nextSection) {
            nextSection.scrollIntoView({ behavior: "smooth" });
          }
        }, 2000);
      }).catch((error) => {
        rsvpButton.classList.remove("disabled");
        rsvpButton.textContent = "¡CONFIRMAR!";
        alert("Error al enviar la respuesta. Por favor intentá nuevamente.");
      });
    }
  });
})();
