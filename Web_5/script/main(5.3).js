var animals = {
    text: "🐅 Животные",
    children: [{ text: "Млекопитающие", children: [{ text: "Коровы" }, { text: "Ослы" }, { text: "Собаки" }, { text: "Тигры" }] }, { text: "Другие", children: [{ text: "Змеи" }, { text: "Птицы" }, { text: "Ящерицы" }] }]
}
var fish = {
    text: "🐠 Рыбы",
    children: [{ text: "Аквариумные", children: [{ text: "Гуппи" }, { text: "Скалярии" }] }, { text: "Морские", children: [{ text: "Морская форель" }] }]
}

const all = [animals, fish]

const root = $('#root')

const generate = (structure, parent) => {
    parent.append('<ul></ul>')

    if (!structure) return

    for (let i = 0; i < structure.length; i++) {
        const contains = structure[i].children ? `[${structure[i].children.length}]` : ''
        parent.children("ul").append(`<li><span>${structure[i].text}</span> <span class="count"></span></li>`)
        generate(structure[i].children, parent.children("ul").children('li:last-child'))
    }
}

const count = (element) => {
    return element.find('li').length
}

generate(all, root)


$('li').each(function() {
    const counter = count($(this))
    $(this).children('.count').addClass(counter > 0 ? 'red' : 'gray').html(`[${counter}]`)
})

$('li').click(function () {
    $(this).children().not('span').slideToggle()
    event.stopPropagation()
})