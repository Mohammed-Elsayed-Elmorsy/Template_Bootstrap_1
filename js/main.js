let LI_s = document.querySelectorAll('.works ul li')



let ALL_Imges = document.querySelectorAll('.works .images_container img')


LI_s.forEach(li => {
    li.addEventListener("click", (e) => {
        LI_s.forEach(li => {
            li.classList.remove('active')
            e.target.classList.add('active')
        })
        ALL_Imges.forEach(img => {
            img.classList.remove('active')
            document.querySelectorAll(e.target.dataset.work).forEach(item => {
                item.classList.add('active')
            })
        })
    })
})

