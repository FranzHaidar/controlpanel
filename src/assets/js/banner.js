(function () {
    const closeBanners = document.querySelectorAll(".c-banner_close");
    closeBanners.forEach( closeBanner => {
        closeBanner.addEventListener("click", event => {
            const banner = event.target.parentNode;
            banner.classList.add("collapse");

            banner.addEventListener("transitioned", function(event){
                if (event.target === this) {
                    this.remove();
                }
            })
        })
    })

})();