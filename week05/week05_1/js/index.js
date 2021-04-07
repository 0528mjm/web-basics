// 햄버거바 선택자
const menuOpenE1 = document.getElementById('btn-open')
// 닫는 아이콘 선택자
const menuCloseE1 = document.getElementById('btn-close')
// 사이드바 선택자
const sideMenuE1 = document.getElementById('side_menu')


// 햄버거 바 아이콘이 클릭되면
menuOpenE1.addEventListener("click",function(){
    // 햄버거 바 아이콘을 안보이게 만들고
    menuOpenE1.style.display = 'none'
    // 닫는 아이콘을 보이게 한다
    menuCloseE1.style.display = 'block'

    // 사이드바 여는 코드
    sideMenuE1.style.transform = 'translate(0%)'
})

// 닫는 아이콘이 클릭되면
menuCloseE1.addEventListener('click',function(){
    // 닫는 아이콘을 안보이게 만들고
    menuCloseE1.style.display = 'none'
    // 햄버거 아이콘을 보이게 한다
    menuOpenE1.style.display = 'block'

    // 사이드바 닫는 코드
    sideMenuE1.style.transform = 'translate(-100%)'
})
