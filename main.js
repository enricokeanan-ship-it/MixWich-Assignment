document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll(".navbar__links a");
  const currentPage =
    window.location.pathname.split("/").pop() || "homepage.html";

  navLinks.forEach(function (link) {
    if (link.getAttribute("href") === currentPage) {
      link.style.color = "var(--color-accent-yellow)";
    }
  });

  const cartBtns = document.querySelectorAll(".btn-cart");

  cartBtns.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const card = btn.closest(".product-card");
      const productName =
        card?.querySelector(".product-card__name")?.textContent ?? "Item";

      btn.style.backgroundColor = "var(--color-accent-yellow)";
      btn.style.transform = "scale(0.9)";

      setTimeout(function () {
        btn.style.backgroundColor = "";
        btn.style.transform = "";
      }, 300);

      showToast(productName + " added to cart!");
    });
  });

  function showToast(message) {
    const existing = document.querySelector(".mw-toast");
    if (existing) existing.remove();

    const toast = document.createElement("div");
    toast.className = "mw-toast";
    toast.textContent = message;

    Object.assign(toast.style, {
      position: "fixed",
      bottom: "32px",
      right: "32px",
      background: "var(--color-primary)",
      color: "#fff",
      fontFamily: "var(--font-body)",
      fontSize: "14px",
      fontWeight: "600",
      padding: "14px 24px",
      borderRadius: "999px",
      boxShadow: "0 4px 20px rgba(0,0,0,0.18)",
      zIndex: "9999",
      opacity: "0",
      transform: "translateY(10px)",
      transition: "opacity 0.25s, transform 0.25s",
    });

    document.body.appendChild(toast);

    requestAnimationFrame(function () {
      toast.style.opacity = "1";
      toast.style.transform = "translateY(0)";
    });

    setTimeout(function () {
      toast.style.opacity = "0";
      toast.style.transform = "translateY(10px)";
      setTimeout(function () {
        toast.remove();
      }, 300);
    }, 2500);
  }

  const exploreBtn = document.querySelector(".btn-explore");
  if (exploreBtn) {
    exploreBtn.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(".bestseller")
        ?.scrollIntoView({ behavior: "smooth" });
    });
  }
});
