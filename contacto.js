let currentElement = 0;
      const elements = Array.from(
        document.getElementsByClassName("contacto-item")
      );

      window.onload = () => {
        function showCurrentElement() {
          elements[currentElement].classList.add("hidden");

          currentElement++;

          if (currentElement >= elements.length) {
            currentElement = 0;
          }

          elements[currentElement].classList.remove("hidden");
        }

        setInterval(() => {
          showCurrentElement();
        }, 4000);
      };