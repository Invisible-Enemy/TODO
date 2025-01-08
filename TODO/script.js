let i = 1;

function CreateSection()
{
    var sec = document.createElement("section");
    sec.setAttribute("id",i);
    sec.innerHTML = '<div class="horizontal">\n<textarea placeholder="Что вам нужно сделать?"></textarea>\n<div class="inputs">\n<input type="date">\<input type="time">\n</div>\n</div>\n<button class="del_btn_sec">X</button>';
    sec.querySelector('.del_btn_sec').setAttribute("onclick", "DeleteSection(" + i + ")");
    main.insertBefore(sec, main.lastElementChild);
    i++
}

function DeleteSection(id)
{
    document.getElementById(id).remove();
}

