const target = document.getElementById('target')

const circle = () => {
    target.classList.toggle('circle')
    alert('メールが送信されました！ 追ってご連絡致します👐')
    target.textContent = 'Thanks!'
}
circle();